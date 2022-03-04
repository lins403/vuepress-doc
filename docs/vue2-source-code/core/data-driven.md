# 数据驱动

数据驱动视图。不用直接修改DOM，只需要修改数据，就可以修改视图。

## new Vue

```js
mergeOptions
//========================================
initProxy(vm)	// 利用ES6的Proxy特性，为vm实例设置一层代理，这层代理可以为vue在模板渲染成VNode时进行一层数据筛选 （vnode = render.call(vm._renderProxy, vm.$createElement) ）
initLifecycle(vm)
initEvents(vm)
initRender(vm)
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

## 挂载

挂载的目的就是把模板渲染成最终的真实DOM

### `compiler` 版本的 `$mount` 实现

没有定义 `render function`（hand-written render functions / JSX，后者我猜测通过loader直接编译为了渲染函数），则无论是 el 还是 template，最后都会被调用 compileToFunctions 编译成 render function

### `runtime` 版本的 `$mount` 实现

实际会去调用 `mountComponent` 方法

`mountComponent` 核心就是先实例化一个`render Watcher`，在它的回调函数中会调用 `updateComponent` 方法，在此方法中调用 `vm._render` 方法先生成 VNode，最终调用 `vm._update` 更新 DOM。

### `vm._render` 

用来把实例渲染成一个虚拟 Node

如果没有定义 `render function`，那么在这之前需要将 template 模板编译为 render function，然后调用`vm._render` 方法，执行 `createElement` 方法，最终生成 VNode

```js
vnode = render.call(vm._renderProxy, vm.$createElement)
```

#### createElement

1. normalizeChildren，每一个 VNode 可能会有若干个子节点，首先需要对这些子节点进行规范化，例如处理函数式组件，或者编译slot、v-for时产生嵌套数组的情况。
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

> 每个组件或节点都会被编译和渲染生成VNode，整个页面的组件树就会变成由一个个 VNode 组成的 VNode 树，把它称为 Virtual DOM。所以 vdom 和 vnode 都在用一个原生对象去描述 DOM 树，一种抽象描述，包含了创建 DOM 所需要的信息。

真正的 DOM 节点非常庞大和复杂，频繁的更新 DOM 会造成很大的性能消耗。

Virtual DOM 比创建一个 DOM 的代价要小很多。

Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。

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

- `createElm` 通过 VNode 创建真实的 DOM 并插入到它的父节点中，createChildren会递归调用createElm
- 组件更新时也会调用 `vm._update` 方法，调用 `patch` 函数，判断新旧VNode的节点是否相同，如果不同则直接替换已存在的节点，如果相同则调用 `patchVNode` 进行Diff比较，按策略更新节点。





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



## 问题
