# 数据驱动

数据驱动视图。不用直接修改DOM，只需要修改数据，就可以修改视图。

## 大致过程

1. new Vue 实例化
2. init 初始化
3. $mount 实例挂载 【compileTofunctions、mountComponent  >>>  `vm._update(vm._render())` 】
4. compile 编译 template 生成 render functions【compile（parse、generate）】
5. render 生成 vnode【createElement、createComponent、new VNode】
6. update 中调用 `vm.__patch__` 更新实例节点 vm.$el
7. patch 中对新旧 vnode 进行 Diff，动态更新【patchVnode、updateChildren、createElm】
8. createElm 中调用 DOM API 来创建真实DOM
9. 最终的DOM

**new Vue => init => $mount => compile => render => vnode => patch => DOM**



## new Vue

```js
mergeOptions
//========================================
initProxy(vm)	// 利用ES6的Proxy特性，为vm实例设置一层代理，这层代理可以为vue在模板渲染成VNode时进行一层数据筛选 （vnode = render.call(vm._renderProxy, vm.$createElement) 在render阶段对不合法的数据做判断和处理 ）
initLifecycle(vm)
initEvents(vm)
initRender(vm)	//初始化slot、vm._c、vm.$createElement、vm._vnode、vm.$vnode
//========================================
callHook(vm, 'beforeCreate')
//========================================
initInjections(vm)
initState(vm)	// props、methods、data、computed、watch
initProvide(vm)
//========================================
callHook(vm, 'created')
//========================================
if (vm.$options.el) {
  vm.$mount(vm.$options.el)	// 挂载的目标就是把模板渲染成最终的DOM
}
```

## mergeOptions

`mergeOptions` 主要功能就是把 `parent` 和 `child` 这两个对象根据一些合并策略，合并成一个新对象并返回。

比较核心的几步，先递归把 `extends` 和 `mixins` 合并到 `parent` 上，然后遍历 `parent`，调用 `mergeField`，然后再遍历 `child`，如果 `key` 不在 `parent` 的自身属性上，则调用 `mergeField`。

`mergeField` 函数，它对不同的 `key` 有着不同的合并策略。

- data/props/computed/methods/provide/inject，相同 key 的时候 child (instance options) 的值会覆盖 parent (extends、mixins) 的值
- components/directives/filters，会进行三方合并（constructor、instance、parent）
- watch/ lifecycle hooks，以数组的方式合并，依次执行，parent优先

## 挂载

挂载的目的就是把模板渲染成最终的真实DOM

### `compiler` 版本的 `$mount` 实现

没有定义 `render function`（hand-written render functions / JSX，后者我猜测通过loader直接编译为了渲染函数），则无论是 el 还是 template，最后都会被调用 compileToFunctions 编译成 render function

### `runtime` 版本的 `$mount` 实现

实际会去调用 `mountComponent` 方法

`mountComponent` 核心就是先实例化一个`render Watcher`，在它的回调函数中会调用 `updateComponent` 方法，在此方法中调用 `vm._render` 方法先生成 `VNode`，最终调用 `vm._update` 更新 DOM。

创建一个Watcher实例，Watcher的getter为updateComponent (-->vm._update)函数，用于触发所有渲染所需要用到的数据的getter，进行依赖收集

### `vm._render` 

用来把实例渲染成一个虚拟 Node

如果没有定义 `render function`，那么在这之前需要将 template 模板编译为 render function，然后调用`vm._render` 方法，执行 `createElement` 方法，最终生成 VNode

```js
vnode = render.call(vm._renderProxy, vm.$createElement)
```

#### createElement

1. normalizeChildren，每一个 VNode 可能会有若干个子节点，首先需要对这些子节点进行规范化，例如处理函数式组件，或者编译slot、v-for时产生嵌套数组的情况。(组件的vnode没有children，普通元素节点的vnode才会有)
2. 规范化 `children` 后，接下来会去创建一个 VNode 的实例

```js
/* 根据 tag 的类型 */

// platform built-in elements
vnode = new VNode(
  config.parsePlatformTagName(tag), data, children,
  undefined, undefined, context
)

// component
vnode = createComponent(Ctor, data, context, children, tag)

// ...
```

#### Virtual DOM

> 每个组件或节点都会被编译成render function，然后调用render函数渲染生成VNode，整个页面的组件树就会变成由一个个 VNode 组成的 VNode 树，把它称为 Virtual DOM。所以 vdom 和 vnode 都在用一个原生对象去描述 DOM 树，一种抽象描述，包含了创建 DOM 所需要的信息。

真正的 DOM 节点非常庞大和复杂，频繁的更新 DOM 会造成很大的性能消耗。

Virtual DOM 比创建一个 DOM 的代价要小很多。

Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。

**虚拟DOM和真实的DOM的差异**：

1. 资源消耗更低
2. 执行效率更高。Diff算法比较，策略更新，减少了操作真实DOM的次数
3. 可以跨平台。编译成其它平台的系统，例如android、ios

###  `vm._update`

作用是把 VNode 渲染成真实的 DOM。

`_update` 的核心就是调用 `vm.__patch__` 方法，这个方法实际上在不同的平台，比如 web 和 weex 上的定义是不一样的

```js
// initial render
vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)

// patch函数
return function patch (oldVnode, vnode, hydrating/*SSR*/, removeOnly/*给transition-group用的*/) {}
```

#### `vm.__patch__`

- patch 的过程会调用 `createElm` 创建元素节点。createElm 通过 VNode 创建真实的 DOM 并插入到它的父节点中，createChildren会递归调用createElm
- 组件更新时也会调用 `vm._update` 方法，调用 `patch` 函数，判断新旧VNode的节点是否相同，如果不同则直接替换已存在的节点，如果相同则调用 `patchVNode` 进行Diff比较，按策略更新节点。

更新DOM

```js
/** Vue.prototype._update **/
		if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      )
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
```

钩子

```
// hooks to be invoked on component VNodes during patch
const componentVNodeHooks = {
	init (-->createComponentInstanceForVnode、child.$mount)
	prepatch (-->updateChildComponent)
	insert (-->callHook(componentInstance, 'mounted'))
	destroy (-->$destroy())
```



## 问题

### 数据驱动

一个vue项目的入口是从实例化new Vue开始的。实例化Vue时，首先进行mergeOptions合并选项，合并来自组件自身的也就是实例options，和使用extends或者mixins拓展的options。

- mergeOptions合并策略：不同的选项基于不同的合并策略，像是data/props/computed/methods这些呢，如果属性名一样，那么实例options对应的属性值就会覆盖掉拓展的。如果是watch侦听属性或者是lifecycle生命周期，就会以数组的方式进行合并，如果key相同则二者都会被保留，执行的时候拓展的options会先执行，然后再执行实例options的。还有一种情况是components和directives这些选项，还会和全局Vue中对应的选项，进行一个三方合并。这是实例化Vue首先进行的mergeOptions。

然后下一步就去初始化化生命周期钩子、事件、render等等，为后续做铺垫。

紧接着调用生命周期的beforeCreate钩子，然后就开始实例化数据了。首先在初始化状态前先initInjections，然后初始化state，包含props、methods、data、computed、watch等等，然后再initProvide。

- 初始化状态最主要做了两件事情，一个是将props、computed以及methods经过标准化以后，绑定到实例上，就能作为实例属性直接访问，第二个是对它们以及data中的属性进行数据劫持，也就是把它们变成响应式对象。完成这个阶段的初始化以后，就会触发生命周期的created钩子，这时候代码就能访问到数据了。

完成初始化状态以后，判断如果实例的option中有el节点属性，就会将实例去挂载到这个DOM节点上，如果没有的话，那通常就是开发的时候，实例化以后去手动挂载，到那个时候也会将实例挂载到DOM上。挂载入口是从调用$mount方法开始。

`$mount`方法主要有两个版本，只有runtime运行时的版本（核心是调用`mountComponent`，然后执行render方法生成vnode，调用update将vnode渲染为真实DOM），和带有compiler和runtime的版本。

- 前者通常用在工程化项目上，使用webpack时集成了Vue-loader，会把template自动编译成render function，就不需要在运行的时候先进行编译。然后不同的平台，使用的运行时不一样，比如web浏览器和weex移动端。

有compiler的版本，如果没有定义render function，就会将template模板字符串parse解析生成AST，然后优化AST，标记AST中可以优化的节点，也就是不涉及数据变化的静态节点在每次渲染时生成的DOM都是一致的，比如纯文本节点，使用了v-pre指令的节点。

- hand-written render functions / JSX
- parse 的过程：利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来实现构造 AST 树。
- optimize优化的过程：会进行两轮深度遍历，遍历每一个元素节点，先标记出静态子节点，然后根据这个结果再标记出静态根节点。在第一次render的时候，静态根节点的vnode就会被缓存，在第一次patch生成DOM以后的每次patch都会跳过静态根节点。

然后根据优化后的AST，generate生成render function。

- 使用了with语法拼接generate生成的代码，变为一串字符串形式的可执行代码。

- generate的过程：先处理一下options，然后调用genElement处理指令、slot、动态组件等，对每个AST节点生成代码。

执行完成编译的逻辑以后，会去执行runtime版本的mount，就是去调用mountComponent方法，触发生命周期的beforeMount钩子，创建一个Render Watcher，执行watcher的getter方法，这将执行render function，然后访问其中每个使用到的实例属性，触发这些属性的getter，用来依赖收集。然后将执行生成的vnode传给update方法，最终渲染成真实DOM。

- vnode、vdom：每个组件或节点都会被编译成render function，执行render函数时会调用createElement方法生成VNode，整个页面的组件树就会变成由一个个VNode组成的VNode树，建立起来的这棵树也就是Virtual DOM。vnode和vdom都是在用一个JavaScript对象去描述DOM树，是一种抽象描述，包含了创建真实DOM所需要的信息。
  - Virtual DOM是Vue2版本的重大更新，它的优势在于，对比真实DOM，创建虚拟DOM的资源消耗更低，不需要频繁操作DOM，执行效率更高。还有个好处在于，虚拟DOM可以被用于实现SSR，以及跨平台的UI渲染，例如web端和移动端。
- Render Watcher的getter方法updateComponent，会去调用_update方法，核心是调用patch方法.
- patch方法中，如果是首次渲染，则直接调用createElm方法创建一个节点，最后使用浏览器的DOM API添加到真实DOM上，完成挂载，触发生命周期的mounted钩子。如果是更新响应式数据触发组件更新的情况，就会在内部使用sameVNode判断新旧VNode是否相同，来使用不同的更新逻辑。
  - 如果新旧vnode不同，更新的逻辑就是创建新节点，更新父的占位符节点，删除旧节点（触发生命周期destroy钩子）
    - 占位符节点指的是组件vnode的tag，用来标识这一串的vnode是属于哪一个组件的
  - 如果新旧vnode相同，会调用patchVnode，更新的逻辑就是将新vnode patch到旧vnode上去。在patch前后会执行对应的钩子函数。最复杂的情况是都存在子节点，就需要调用updateChildren来Diff遍历比较子节点，通过调整节点顺序复用旧节点，以及插入和删除节点，最终完成DOM更新。

### 响应式

### 组件

### 生命周期

