# Vue

- 聚焦视图层
- 响应式数据绑定
- 组件系统

## 基础

### 数据绑定

js操作DOM，一个是消耗高影响性能，另一个是导致js代码中包含过多HTML代码，也就是会导致视图代码和业务逻辑紧密耦合；

vue通过MVVM的模式，分离为视图层View和数据层Model。ViewModel层实现了数据的双向绑定，我们只需要提供视图层需要的数据，vue会自动帮我们更新DOM。（分离视图代码和业务逻辑，数据驱动DOM）

- `{{}}`  Mustache语法插入表达式值
- `v-bind`：动态更新HTML元素的属性，数据变化时会重新渲染

### 指令

在结点上使用 `v-pre` ，会跳过这个元素和它的子元素的编译过程。例如 {{}} 就不会被编译

`v-bind`指令可以传入一个表达式，它会使用表达式计算出的最终字符串，但绑定class和style时可以比较特殊。

```html
<!-- v-bind动态绑定class，绑定style的方式也一样 -->

1. 对象语法
<div class="common" :class="{'active':isActive, 'disabled':isDisable}"></div>
data(){ 
	return{	
    isActive:true, 
    isDisable:false
  }
}
<!------------------------>
2. 数组语法
<div class="common" :class="[activeCls, disableCls]"></div>
<button :class="[isActive? 'active': '']">使用三元表达式</button>	
<button :class="[ {'active': isActive}, disableCls ]">数组中使用对象语法，应用多个class对象</button>
data(){ 
	return{	
    activeCls: 'btn-active', 
    disableCls: 'btn-disabled',
		isActive: 'true'
  }
}
```

#### `v-cloak` 

- 斗篷、遮盖物，用于解决初始化慢导致页面闪动
- 使用插值语法时，页面上显示的是原始值，例如{{message}}，直到vue创建完实例并编译模板时，DOM才会被更新，更新的过程会造成屏幕闪动
- 在编译前先隐藏未编译的Mustache标签，编译结束后将v-cloak移除

```scss
// 避免使用插值语法时屏幕闪动
[v-cloak]{
	display: none;
}
```

但是在工程化的项目里，例如使用vue-cli和v-router的项目里，HTML结构中只有一个id为app的空div元素，其中的内容都是由路由去挂载不同组件来完成渲染的

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```

#### `v-model`

语法糖

```html
<input v-model="searchText">
<!-- 语法糖，等价于 -->
<input :value="searchText" @input="searchText = $event.target.value">
```

#### 自定义指令

我理解本质上就是利用了bind、inserted、update、componentUpdated、unbind这几个钩子，往其中添加自定义的处理方法或回调，可以修改数据、控制函数、操作DOM（例如修改el.innerHTML、修改input.value）等等

举例几个应用场景：

1. 定义一个 v-focus 指令用在 input 标签上，在 inserted 钩子中使用 el.focus()，实现元素插入父节点时调用focus自动聚焦输入框。
2. 在 bind 钩子中使用 addEventListener 绑定DOM事件（click、scroll、input、），在 unbind 钩子中使用 removeEventListener 解绑。
3. 结合 vuex 使用，例如实现一个 v-permission 用于HTML节点的权限过滤，store中的角色名不包含在传入的角色数组中时，将当前节点从父节点中移除。

### 条件渲染与列表渲染

vue在渲染元素时，处于效率考虑，会尽可能地复用已有的元素而并非重新渲染。

如果不想要让vue复用元素，可以使用key属性，key值必须是唯一的

`v-show`只是简单的 display 属性的切换，无论条件是否为真，都会被编译。所以 v-show 不能用在`<template>`上

### 事件与修饰符

#### $event

```vue
<a href="https://www.youtube.com" @click="handleClick('coming', $event)">打开链接🔗</a>

handleClick(message, event){
	event.preventDefault()
}
```

#### 修饰符

通用

```js
.stop		// event.stopPropagation()
.prevent		// event.preventDefault()
.capture
.self		// if(event.target!==event.currentTarget) return
.once
.enter .13		// if(event.keyCode!==13) return
```

表单(v-model)

```js
.lazy		//输入框内容变化时，v-model绑定的数据不会立即更新，要等到失焦的时候，或者按回车以后（如果是lazy，则只监听change事件；没有设置lazy时，还监听input事件）
.number		//调用parseFloat，解析一个参数并返回一个浮点数
.trim
```

## 组件

组件之间的数据传递方式

1. props
2. 组件通信
3. slot

### 单向数据流

父组件通过props给子组件传递数据，但是子组件不能直接修改父组件的状态。

从Vue2.x开始才实现了单向的数据流。`.sync`修饰符是在Vue1.x中引入来支持双向绑定。之所以这样设计，是为了尽可能的将父子组件解耦，避免子组件无意中修改了父组件的状态。

```js
// 当传入的props是个对象，子组件需要修改这个对象时，
// 1. 常见方式有二：data中可以使用一个变量来保存然后对这个新变量进行修改，或者使用computed来计算变量；这两种方式都是复制的引用值，修改它们均无异于直接修改props值。
// 2. 如果使用了.sync修饰符，要么在父组件传参时进行解构，要么在子组件中要对对象进行深拷贝
export default {
  props: {
    post: {
      type: Object,
      default: () => ({id:1, title:''})
    },
    author: {
      type: String,
      default: 'foo'
    }
  },
  data() {
    return {
      deepObj: JSON.parse(JSON.stringify(this.post)),
      obj: this.post,
      str: this.author
    }
  },
  computed: {
    item: {
      get: function () {
        return this.post
      },
      // setter
      set: function (newValue) {
        console.log(newValue)
      }
    }
  },
  created() {
    console.log(this.$attrs)	//$attrs而不是$props
    console.log(this.obj === this.post)		// true
    console.log(this.item === this.post)		// true
    console.log(this.deepObj === this.post)		// false
    
    this.str = 'bar'
    console.log(this.str, this.author)	// bar foo
  }
}
```

### 组件通信

父子、兄弟、跨级

```js
1. props , events( $emit, $on, .sync, v-model )
2. $parent , $children
3. $attrs , $listeners
4. ref $refs 
5. provide/inject
6. webStorage
7. eventbus
8. vuex
9. Vue.observable
```

观察者模式 `$emit` `$on` `v-on`

Vue1.x中的 `$diapath`、`$broadcast` 在Vue2.x中已经被废除

`$refs` 只在组件渲染完成后才填充，并且它是非响应式的，因此应该避免用在模板或计算属性中。

#### eventBus

使用一个空的Vue实例作为中央事件总线（bus），可以用作任何组件之间通信的桥梁。

可以扩展bus实例，给它添加data、methods、computed等选项，让组件之间共享数据。

### slot内容分发

transclusion，内容分发、嵌入

> props传递数据、events触发事件、slot内容分发，这三者构成了Vue组件

- 分发内容的作用域属于父组件
- 作用域插槽：让父组件中使用子组件的数据，具体做法是将数据作为属性通过v-bind绑定在子组件的插槽`slot`上
- 具名插槽
- 通过 `$slots` 访问 slot，只要父组件有分发内容给子组件，子组件的 `$slots` 就会有值，然后使用`<slot>`来承接内容

### 组件高级用法

- 递归组件： `name` 选项
- 内联模板： `inline-template` 属性
- 动态组件： `<component :is="currentView" />`
- 异步组件： 只在组件需要渲染时触发工厂函数，并且会缓存解析结果

### 其它

- `$nextTick` 与 DOM异步更新机制
- X-Templates
- 手动挂载实例
- keep-alive
  - 保留组件的状态或者避免重新渲染
  - 只会执行一次完整的生命周期
  - 之后每次只会触发 `activated` 和 `deactivated` 钩子
  - 通常用来包裹动态组件，如果这个特性存在，则重复创建组件时，会通过缓存机制来快速创建组件
  - `<router-view />`  `<component :is=""`


## Render函数

[渲染函数 & JSX — Vue.js](https://cn.vuejs.org/v2/guide/render-function.html)

Vue2.x 与 Vue1.x 最大的区别在于 2.x 使用了 Virtual DOM 来更新DOM节点，提升渲染性能。以及提供了服务端渲染技术。

> 【对以前学习源码的总结】
>
> new Vue => init => $mount => compile => render => vnode => patch => DOM
>
> 创建一个Vue实例时，会进行init初始化，首先merge options，然后再调用 initState 初始化相关属性，将data、props、methods等等option添加到这个vue实例上，然后将实例 mount 挂载到DOM节点上。
>
> 在开始挂在前，会先判断是否有template模板，如果有的话就会进行 compile 编译，先 parse 解析成 AST 对象，并且对AST进行 optimize 优化（深度遍历AST树，标记静态属性和静态节点）。然后再 generate 生成对应的 render function，如果没有template的话则会将当前el节点与其后代元素（outerHTML）用于创建一个template模板。
>
> 执行编译生成的 render function，通过 createElement 方法生成 VNode，建立起来的整个 VNode 树就是 Virtual DOM。
>
> （TODO：确认一下update和patch的调用时机）如果是第一次渲染，则 patch 方法中直接调用 createElm 方法，基于VNode的信息，调用浏览器的 DOM API 来创建真实 DOM 并完成挂载。
>
> 如果在这过程中数据发生变化，则会触发update更新，re-render重新渲染生成新的VNode，patch方法会将新旧 VNode 进行比较，首先通过 `sameVNode(oldVnode, vnode)`方法判断它们是否是相同的 VNode，来决定走不同的更新逻辑。如果新旧 `vnode` 不同，就替换掉已存在的节点，主要分为三步：创建新节点、更新父的占位符节点、

将模板template解析成 AST 结构的JavaScript对象，通过 render 函数调用生成 VNode，通过 diff 算法比较新旧 VNode 然后生成补丁对象，遍历补丁对象，更新DOM节点。

`createElement` 执行返回一个“虚拟节点 ( virtual node，VNode )”，包含创建DOM所需要的信息。

VNode的生成方式，一种是由普通 DOM 元素生成，另一种是由 Vue 组件生成。

“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

除了使用slot或者函数式组件以外的应用场景，我觉得template的可读性和开发效率都更高，工程化项目中webpack还会调用vue-template-compiler预编译为render function

## webpack

在工程项目中，任何静态资源都会被webpack当成模块，解析并处理这些模块之间的依赖关系，然后将它们打包起来。

SPA，意味着最终只有一个HTML文件，其余都是静态资源，动态注入到html中。SPA的核心是前端路由

#### 使用单文件组件SFC

- vue-loader
- vue-style-loader
- @babel/core、babel-loader、
- vue-template-compiler

#### loader和plugin

- html-webpack-plugin
- terser-webpack-plugin

## 插件

### Vue-router

#### 前端路由

- 利用URL的hash (即锚点#)，通过 hashChange 事件来监听 url 的变化
- HTML5的 History 模式，需要服务端支持。
  - 服务端在接受到所有的请求后，都指向同一个html文件，不然会出现404。
  - 因此 SPA 只有一个html，整个网站所有的内容都在这个html里，通过JavaScript来处理，动态填充html中的内容和样式。

如果要独立开发一个前端路由，需要考虑到页面的可插拔、页面的生命周期、内存管理等问题

#### 使用

- `<router-view>`会根据当前路由渲染对应的页面组件
  - `<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。
  - `<router-view>` 渲染的组件还可以内嵌自己的 `<router-view>`，根据嵌套路径，渲染嵌套组件。

- `<router-link>` 会被渲染为 `<a>`
- 实例 `$router`

### Vuex

- state

- mutation
  - 在组件内，来自store的数据只能读取，不能直接修改，修改的唯一途径是显示地提交mutations
  - 不能进行异步操作
  - `this.$store.commit`
- action
  - 可以进行任意的异步操作
  - actions不会直接修改数据，也是通过提交mutations的方式
  - `this.$store.dispatch`
- getters (可以看作是给组件共享的computed属性)
- modules
  - 可以将store分割到不同模块中，每个模块可以维护自己的state、mutation、action、getters
  - 只是将代码拆分模块，store依然是单例，全局唯一的

### 自定义插件

第三方库用的多，自己项目中很少用到，一般就按模块来处理，utils、directives等等集中管理，然后引入使用。不过有个项目中的eventBus是用插件封装的，然后挂载到Vue的原型上，作为全局方法，就可以不用在每个组件中都引入Bus。

注意项：

1. `$bus.on` 应该在 created 钩子内使用，如果是在mounted内使用，则可能接收不到其它组件在created时emit发出的事件。
2. 在 beforeDestroy 钩子中解除事件监听 `$bus.off`

- $on
- $emit
- $once
- $off

## 生命周期

`beforeCreate`

`created`

`beforeMount`

`mounted`

`beforeUpdate`

`updated`

`activated`

`deactivated`

`beforeDestroy`

`destroyed`

## 组件更新

`sameVnode` 的逻辑非常简单，如果两个 `vnode` 的 `key` 不相等，则是不同的；否则继续判断对于同步组件，则判断 `isComment`、`data`、`input` 类型等是否相同，对于异步组件，则判断 `asyncFactory` 是否相同。

所以根据新旧 `vnode` 是否为 `sameVnode`，会走到不同的更新逻辑.

如果新旧 `vnode` 不同，那么更新的逻辑非常简单，它本质上是要替换已存在的节点，大致分为 3 步

- 创建新节点
- 更新父的占位符节点
  - vue 的组件在生成 vnode 的过程中，对于原生节点就直接生成 tag 为对应原生 tag 的vnode 节点，而对于组件节点就生成 tag 是`vue-component-1-App`的节点，这种节点就是占位符节点，或者叫 placeholder 节点。

- 删除旧节点

如果新旧节点相同，它会调用 `patchVNode` 方法，是把新的 `vnode` `patch` 到旧的 `vnode` 上，核心逻辑分为3步

- 当更新的 `vnode` 是一个组件 `vnode` 的时候，会执行 `prepatch` 钩子函数
- 执行所有 `module` 的 `update` 钩子函数以及用户自定义 `update` 钩子函数
- 完成 `patch` 过程
  - 如果 `vnode` 是个文本节点且新旧文本不相同，则直接替换文本内容。
  - 如果不是文本节点，则判断它们的子节点，并分了几种情况处理

- 执行 `postpatch` 钩子函数





### Diff

 当新旧 VNode 同时存在 children，通过 updateChildren 对子节点做更新。

```js
let oldStartIdx = 0
let newStartIdx = 0
let oldEndIdx = oldCh.length - 1
let oldStartVnode = oldCh[0]
let oldEndVnode = oldCh[oldEndIdx]
let newEndIdx = newCh.length - 1
let newStartVnode = newCh[0]
let newEndVnode = newCh[newEndIdx]

while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
  //
}
```

只需要 `createElement` `insertBefore` 等实际DOM操作来完成更新，并且复用了DOM节点，比起 innerHTML 这类直接更改所有子节点的方式，开销低很多，节点越复杂，DOM更新的性能提升越明显



## SSR

1. 加快首屏渲染速度
2. SEO
3. 减少HTTP请求



把 VNode 对象渲染成 DOM 元素
