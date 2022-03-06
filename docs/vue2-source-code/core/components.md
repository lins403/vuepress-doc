# 组件化

`vm.$mount` ---> mountComponent

- `vm._render` ---> render
  - `vm.$createElement` ---> createElement ---> createComponent ---> new VNode
- `vm._update` ---> `vm.__patch__` ---> `createElm` ---> `createComponent` ---> createChildren

## 文档内容

1. 组件基础
2. 组件注册
3. Props
4. 自定义事件
5. 插槽
6. 动态组件&异步组件
7. 处理边界情况

## mountComponent

`mountComponent` 核心就是先实例化一个`render Watcher`，在它的回调函数中会调用 `updateComponent` 方法，在此方法中调用 `vm._render` 方法先生成 `VNode`，最终调用 `vm._update` 更新 DOM。

- vm._render ---> `createElement` ---> `createComponent`
- vm._update ---> `vm.__patch__` ---> `createElm` ---> `createComponent` ---> createChildren

## 生成vnode的createComponent

createElement根据render function创建vnode时，如果碰上组件节点，则会调用createComponent来创建和构造组件，最终生成 <mark>placeholder vnode</mark>（组件vnode/占位符vnode）。

1. 使用 `Vue.extend` 构造子类构造函数（组件初始化的时候是不传 el 的，因此组件是自己接管了 `$mount` 的过程）
2. `installComponentHooks` 安装组件钩子函数
3. new 实例化 `vnode`，生成 placeholder vnode

## createElm中调用的createComponent

组件的 `patch` 过程中，会调用`createElm`方法来创建节点，其中会调用 createComponent 来创建和初始化子组件，与render function的 createComponent 方法不是同一个。

createElm中调用的`createComponent`方法

```js
/** createComponent **/
if (isDef(vnode.componentInstance)) {
  initComponent(vnode, insertedVnodeQueue)
  insert(parentElm, vnode.elm, refElm)
}
```

- 初始化组件，然后调用`vm.$mount`进行挂载，调用`mountComponent`方法，进而执行`vm._render()`方法。然后会绑定父子关系。

  ```js
  /** Vue.prototype._render **/
  
  // set parent vnode. this allows render functions to have access to the data on the placeholder node.
  vm.$vnode = _parentVnode
  
  // set parent
  vnode.parent = _parentVnode
  return vnode
  ```

- 返回的结果是判断组件的根节点是否是一个普通元素，如果不是，就会直接return，中断 createElm 创建和插入DOM的过程。

## createElm

如果通过 createComponent 处理后，判断组件的根节点是一个普通元素，就会先创建一个父节点占位符，然后再遍历所有子 VNode 递归调用 `createElm`。

如果遇到子 VNode 是一个组件的 VNode，也就是发现子组件以后，则在createComponent中创建和初始化组件，将子组件vnode添加进之前的vnode队列中去，这样通过<u>不断递归调用createElm的方式就可以完整地构建了整个组件树</u>。

```js
/** createElm **/

const tag = vnode.tag
// 创建一个父节点占位符
vnode.elm = vnode.ns
  ? nodeOps.createElementNS(vnode.ns, tag)	//svg
	: nodeOps.createElement(tag, vnode)

// 遍历所有子 VNode 递归调用 createElm
createChildren(vnode, children, insertedVnodeQueue)	

if (isDef(data)) {
  invokeCreateHooks(vnode, insertedVnodeQueue)		//虚拟DOM的生命周期的create钩子
}
insert(parentElm, vnode.elm, refElm)		//调用insertBefore或appendChild插入DOM
```

```js
function createChildren (vnode, children, insertedVnodeQueue) {
  if (Array.isArray(children)) {
    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(children)
    }
    for (let i = 0; i < children.length; ++i) {
      // 递归调用 createElm
      createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
    }
  } else if (isPrimitive(vnode.text)) {
    // 创建元素节点并插入父节点中
    nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
  }
}
```

在完成组件的整个 `patch` 过程后，最后执行 `insert(parentElm, vnode.elm, refElm)` 完成组件的 DOM 插入，如果组件 `patch` 过程中又创建了子组件，那么DOM 的插入顺序是先子后父。

## 组件注册

每个组件的创建都是通过 `Vue.extend` 继承而来，然后将组件的 options 和全局构造函数 Vue 的 options 进行 merge 合并。

根组件和子组件的merge options的时机略有不同，根组件是在初始化时合并配置，子组件是在执行生成 vnode 的 `createComponent` 方法中。

在 Vue.js 中，除了它内置的组件如 `keep-alive`、`component`、`transition`、`transition-group` 等，其它用户自定义组件在使用前必须注册。

## 问题

### 1. 为什么data必须是函数？

答：因为组件可能被复用产生多个实例，如果一个组件的 `data` 是一个函数，则每个实例的data对象就是互相独立的；如果不用函数而直接返回一个Object，会导致实例的data值是对这个对象的直接引用，修改其中一个实例的data就会引起联动。

### 2. 为什么每个组件必须只有一个根元素？

>  Render function should return a single root node.

因为`<template>`的内容将替换掉实例的挂载元素（el）

### 3. 节点命名空间

vnode的 `ns` 是针对svg标签的属性，`Document.createElementNS()`创建命名空间

### 4. 组件更新时什么时候更新DOM

会调用 virtual DOM 生命周期的钩子函数，钩子函数主要用于更新节点的属性(attributes)，然后调用浏览器的DOM api来更新DOM

### 5. placeholder怎么创建

如果是 svg 标签，则调用`Document.createElementNS`创建命名空间节点，否则调用`Document.createElement`创建普通元素节点





以一个使用Vue-Router的工程项目为例，main.js是项目入口，在这里可以使用插件，或者自定义扩展全局方法。然后new Vue创建一个全局实例，将App.vue这个单文件组件作为渲染方法，然后将实例挂载到id为app的节点上。

App.vue中就是一个id为app的div容器，其中存放了`<router-view>`组件，用于根据当前路由，动态渲染对应的页面组件。

组件的创建无论是全局注册还是局部注册，都会去调用Vue.extend来构造子类构造函数。

根组件和子组件略有不同，根组件在初始化时合并options，完成一系列初始化后，将template编译为render function，执行render生成组件vnode，也叫占位符vnode，最后使用patch方法将vnode渲染为真实DOM。在根组件的render过程中，如果是普通元素节点，就直接生成vnode；如果碰上组件节点，则会调用createComponent来创建子组件，并安装组件钩子函数，最后生成子组件的vnode。在patch渲染vnode创建DOM的时候，将子组件vnode添加进之前根组件的vnode队列中去，不断递归调用createElm的方式来构建整个组件树，最后insert插入到真实DOM中去。

