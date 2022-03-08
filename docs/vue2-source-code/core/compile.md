# 编译

把模板编译成 `render` 函数，这个过程我们把它称作编译。

Vue.js 提供了 2 个版本，一个是 Runtime + Compiler 的，一个是 Runtime only 的，前者是包含编译代码的，可以把编译过程放在运行时做，后者是不包含编译代码的，需要借助 webpack 的 `vue-loader` 事先把模板编译成 `render`函数。

## 编译入口

// 函数柯里化，剥离baseCompile基础编译过程与其它处理逻辑

`render`: src/platforms/web/entry-runtime-with-compiler.js

```js
import { compileToFunctions } from './compiler/index'
const mount = Vue.prototype.$mount	//缓存不带编译的$mount方法
Vue.prototype.$mount = function (){
  // ...
  const { render, staticRenderFns } =  compileToFunctions(template, {
    shouldDecodeNewlines,
    shouldDecodeNewlinesForHref,
    delimiters: options.delimiters,
    comments: options.comments
  }, this)
  options.render = render
  options.staticRenderFns = staticRenderFns
  // ...
}
```

`compileToFunctions`: src/platforms/web/compiler/index.js

`createCompiler`: src/compiler/index.js

```typescript
import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

/** 真正执行的代码 **/
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 1. 解析模板字符串生成AST
  const ast = parse(template.trim(), options)
  
  // 2. 优化语法树（标记AST中可优化的节点）
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  
  // 3. 生成代码（基于AST生成字符串形式的`render`/`staticRenderFns`，可执行代码）
  const code = generate(ast, options)
  
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
```

`createCompilerCreator`: src/compiler/create-compiler.js

```js
export function createCompilerCreator (baseCompile: Function): Function {
  return function createCompiler (baseOptions: CompilerOptions) {
    function compile (template: string, options?: CompilerOptions): CompiledResult {
      /** 真正执行的代码 **/
      const compiled = baseCompile(template, finalOptions)	// 基础模板编译，得到编译结果
    }
    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}
```

`createCompileToFunctionFn`: src/compiler/to-function/js

```js
export function createCompileToFunctionFn (compile: Function): Function {
  // compile
  const compiled = compile(template, options)
}
```

## parse

对 template 模板字符串进行 parse 解析生成 AST 抽象语法树，是对源代码的抽象语法结构的树状表现形式，也就是用一个JavaScript对象来描述整个模板。

在很多编译技术中，如 babel 编译 ES6 的代码，ESLint校验代码都会先生成 AST。

那么整个 `parse` 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。

## optimize

> 两轮深度遍历，第一轮标记静态节点，第二轮则基于第一轮标记结果来标记静态根节点。把整个 AST 树中的每一个 AST 元素节点标记了 `static` 和 `staticRoot`属性。
>
> 在第一次render时缓存静态根节点的vnode，以后每次都使用这份缓存的vnode。同时在第一次以后的patch中，将跳过对静态根节点的patch。

当我们的模板 `template` 经过 `parse` 过程后，会输出生成 AST 树，那么接下来我们需要对这颗树进行深度遍历地做优化。为什么要有优化过程，因为我们知道 Vue 是数据驱动，是响应式的，但是我们的模板并不是所有数据都是响应式的，也有很多数据是首次渲染后就永远不会变化的，那么这部分数据生成的 DOM 也不会变化，我们可以标记它们，在 `patch` 的过程跳过对他们的比对。

我们在编译阶段可以把一些 AST 节点优化成静态节点，所以整个 `optimize` 的过程实际上做了两轮遍历

```js
export function optimize (root: ?ASTElement, options: CompilerOptions) {
  if (!root) return
  // 判断 key 是否是静态 key，带缓存功能
  isStaticKey = genStaticKeysCached(options.staticKeys || '')
  isPlatformReservedTag = options.isReservedTag || no
  
  // first pass: mark all non-static nodes. --> 标记静态节点 
  markStatic(root)
  
  // second pass: mark static roots. --> 标记静态根节点
  markStaticRoots(root, false)
}
```

优化以后，每一个 AST 元素节点都多了 `staic` 属性，并且 `type` 为 1 的普通元素 AST 节点多了 `staticRoot` 属性。

经过两轮深度遍历，标记出静态根节点，在生成`render`函数时就可以对静态根节点做特殊处理，在首次渲染即`render`函数首次执行后，将静态根节点的 VNode 缓存起来，以后再执行`render`函数时，不再为静态根节点生成新的 VNode 对象而是使用缓存的 VNode。同时，在非第一次的`patch`过程中，也将跳过对静态根节点的`patch`。

### 标记静态节点

#### 非静态

- 表达式（带有插值的文本节点）

#### 静态

- 纯文本
- 使用了 `v-pre` 指令
- 同时满足以下条件，才是一个静态节点：
  - 没有使用 `v-if`、`v-for`
  - 没有使用其它指令（不包括 `v-once`）
  - 非内置组件 (slot,component)
  - 是平台保留的标签 ( isHTMLTag(tag) || isSVG(tag) ,not a component)
  - 非带有 `v-for` 的 `template` 标签的直接子节点
  - 节点的所有属性的 `key` 都满足静态 key

针对元素节点，则遍历它的所有 `children` 以及 `ifConditions`，递归执行 `markStatic`。不仅要元素节点自身满足静态的标准，还要满足以下条件，才为静态节点：

- 元素节点的所有子节点也要是静态节点（在这些递归过程中，一旦子节点有不是 `static` 的情况，则它的父节点的 `static` 均变成 false）
- 元素若存在`v-if`指令，还需要与其平级的`v-else`/`v-else-if`元素节点也是静态节点

### 标记静态根节点

和标记静态节点的逻辑一样，遍历 `children` 以及 `ifConditions`，递归执行 `markStaticRoots`。

`markStaticRoots`函数判断元素节点是否是静态元素根节点，该元素节点必须满足：

- 元素节点是静态节点
- 元素节点包含子节点，但子节点不能只有一个静态文本/注释子节点
  - Otherwise the cost of hoisting out will outweigh the benefits and it's better off to just always render it fresh.

## codegen

编译的最后一步就是把优化后的 AST 树转换成可执行的代码

generate 函数

```js
// src/compiler/codegen/index.js
export function generate (
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  // 以options对象为参数，新创建出一个代码生成阶段要使用的状态对象state。
  const state = new CodegenState(options)
  // genElement
  const code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")'
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns
  }
}
```

### genElement 函数

- genData
  - genDirectives、genProps、genScopedSlots、……
- _c
  - 对`createElement`函数的封装，在`render`函数运行时，`createElement`会为该 AST 节点生成 VNode 对象。

- genStatic  静态根节点
- genOnce  v-once
- genFor  v-for
- genIf  v-if
- genChildren  节点是 template 标签 && 该节点不是父组件里的插槽内容 
- genSlot  节点是(子组件里的) slot 节点
- genComponent  动态组件

### 生成后的代码

```vue
<ul :class="bindCls" class="list" v-if="isShow">
  <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
</ul>
```

```js
with(this){
  return (isShow) ?
    _c('ul', {
        staticClass: "list",
        class: bindCls
      },
      _l((data), function(item, index) {
        return _c('li', {
          on: {
            "click": function($event) {
              clickItem(index)
            }
          }
        },
        [_v(_s(item) + ":" + _s(index))])
      })
    ) : _e()
}
```

```js
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

export function installRenderHelpers (target: any) {
  target._o = markOnce
  target._n = toNumber
  target._s = toString
  target._l = renderList
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic
  target._f = resolveFilter
  target._k = checkKeyCodes
  target._b = bindObjectProps
  target._v = createTextVNode
  target._e = createEmptyVNode
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
}
```



## 指令

1. parse > preTransformNode > processElement > processAttrs > addDirective > el.directives.push({ name, rawName, value, arg, modifiers })

2. generate > genElement > genData > genDirectives

3. patch > createPatchFunction / baseModules > updateDirectives , unbindDirectives > _update(oldVnode, vnode)

### genDirectives

`genDirectives`函数里，会生成指令相关的代码，其主要做了两件事：

1. 针对某些指令进行特殊的处理，调用它们各自的指令生成函数生成该指令的代码，包括：
   - 核心指令
     - v-on
     - v-bind
     - v-cloak
   - Web 平台指令
     - v-model
     - v-text
     - v-html
2. 对于需要运行时的指令，将其拼成指令对象字符串
