# Vue基础

【Vue的特点】渐进式、组件化、数据驱动DOM、虚拟DOM、单页面路由；单页面应用不利于SEO，首屏加载时间长

【Vue与React的异同点】都属于单页面应用的框架，都是组件化开发和单向数据流，都使用了Virtual DOM，并支持SSR。不同的地方在于，React的UI代码是通过 JSX 来写的而Vue是template，React数据是单向绑定而Vue可以双向绑定，React需要手动设置数据变化，而Vue在初始化时就实现了数据的响应式处理。Vue内置了很多API和指令，实现了丰富的功能，而React中需要开发人员自己实现。

【MVVM】Model-View-ViewModel，将系统分离为数据层Model和视图层View，ViewModel层实现了数据的双向绑定，通过数据绑定的方式将数据更新到DOM，而通过事件监听，基于DOM上的变化更新数据。通过v-text、v-html、{{}}、v-bind等方式将数据绑定到视图，通过v-model实现双向绑定。总之，通过MVVM模式分离视图代码和业务逻辑，数据驱动DOM。

## 应用

【为什么data是个函数并且返回一个对象呢？】因为组件可能被多次用于创建实例，如果data属性是一个对象，则这个对象会被所有实例所共享引用，组件实例修改数据时就会造成数据污染。将data设置为一个函数，每次会调用就会生成一个新对象，就可以避免造成的数据污染。

【使用过哪些Vue的修饰符呢？】组件通用的修饰符.stop、.prevent、.capture、.self、.once、.native等等事件相关的，表单组件v-model使用的.lazy、.trim、.number等等

【`.native`】只有组件节点才可以添加自定义事件，并且添加原生 DOM 事件需要使用 `native` 修饰符。而普通元素使用 `.native` 修饰符是没有作用的，也只能添加原生 DOM 事件。

【使用过哪些Vue的内部指令呢？】v-bind、v-model、v-on、`v-show`（v-show只是简单的 display 属性的切换，无论条件是否为真，都会被编译，所以 v-show 不能使用在`<template>`上）、v-if、v-else、v-else-if、v-for、v-slot、v-once、`v-pre`（跳过节点元素和子元素的编译过程）、v-cloak（用于解决初始化慢导致页面闪动，在编译前先隐藏未编译的Mustache标签，编译结束后将v-cloak移除）、v-html、v-text

【如何设置动态class，动态style？】v-bind动态绑定，可以使用数组语法，或者对象语法。

【如何实现自定义指令？】可以添加全局指令或局部指令，在节点的bind、inserted、update、componentUpdated、unbind这几个生命周期钩子中可以获取到指令绑定的元素节点，和节点编译生成的vnode，在钩子中针对元素节点或vnode添加处理逻辑，例如操作DOM或修改实例数据。例如在元素节点上添加指令，在bind钩子中添加DOM事件监听，在unbind时移除事件监听，在inserted钩子添加输入框的focus等等。还可以结合vuex实现权限过滤，如果当前角色权限不符合时，就将节点移除。

【关于条件渲染和列表渲染，以及为什么要使用key？】vue在重新渲染DOM元素的时候，出于效率考虑，会尽可能地复用已存在的元素。如果不想要让vue复用元素，可以使用key属性。patch更新时，如果key不同则会被认为是新节点，就直接替换掉旧节点。key相同才会考虑复用旧节点。如果没有key，则会遍历查找对应的节点。

【组件之间的传值方式有哪些？】

- 父子通信最常用的方式props+$emit，父组件传值给子组件，子组件使用`props`进行接收。子组件使用`$emit`一个事件给父组件传值，父组件通过v-on监听事件。
- 语法糖`.sync` 和 `v-model` ，`.sync` 相当于在父作用域上添加了一个update事件的监听，`v-model`则相当于v-bind绑定表单数据，同时基于表单事件更新数据。一个组件上只能使用一个`v-model`但是可以使用多个`.sync` 。
- 适合用于多级组件嵌套的`$attrs`和`$listeners`，经常用在组件的二次封装。`$attrs`包含父作用域中class和style除外，以及不作为prop的属性。`$listeners`包含了父作用域中的 v-on 事件监听器（作用在这个组件上的所有事件监听器），除了通过.native方式绑定的原生事件。
- 适合用于多级组件的还有`provide`和`inject`依赖注入，就像react的context特性
- 通过 `$refs`、 `$parent`和`$children` 这些API，获取对应的组件实例，从而可以访问实例数据。
- 跨组件通信可以使用eventBus，直接实例化Vue来创建一个事件中心，利用vue的on和emit的API，来实现事件的发布订阅，通过事件来传递数据。
- 还可以使用`Vuex`来实现状态的全局管理，使用`Vue.observable()`来添加一个响应式对象然后在组件之间使用，使用indexDB或者webStorage来存储数据等等方式

【slot】组件之间的数据传递方式除了组件通信外，还有使用slot内容分发。将父组件作用域的内容通过slot或具名插槽分发给子组件，将子组件的数据绑定在子组件的slot上，父组件就能通过作用域插槽的方式使用子组件的数据。如果父组件有分发内容给子组件，那么子组件的 `$slots` 就会有值，然后使用`<slot>`来承接内容。

【单向数据流】父组件通过props给子组件传递数据，但是子组件不能直接修改父组件的状态。如果父组件通过props传递的是一个引用值，那么子组件修改它的时候也会更新父组件的状态，但是这种做法是不安全的，在只有父组件重新渲染的时候，子组件中修改的值就会被父组件原来的值覆盖掉。所以如果是个引用值，子组件就应该先对其进行深拷贝，然后再修改。



## 生态

【路由模式】hash模式，更改URL中#符号后面的内容时，触发hashchange事件，实现路由切换。优点是跳转只需要客户端就能实现，浏览器的兼容性也更好。缺点是页面发生跳转也只是location.hash的变化，URL实际没有变化，所以不利于SEO。history模式下，利用history对象的pushState和replaceState方式来完成跳转，URL会发生变化，产生新的http请求，所以需要服务端支持，让服务端在接收到所有的请求后都指向同一个html文件，以实现单页面应用在路由跳转时不刷新页面。

## 源码

【虚拟DOM】利用虚拟DOM的技术，大大提高了更新DOM时的性能

【DOM异步更新机制与`$nextTick`】视图上的响应式数据更新的时候，会将更新派发给render watcher，会调用updateComponent方法，触发组件重新渲染生成vnode，然后patch更新到DOM上。在更新时维护一个异步更新的watcher队列，相同的watcher只会被添加进一次队列，这里是一个优化点，做了watcher去重。然后给队列做排序，以保证父组件的watcher比子组件先执行，更新的时候先渲染父组件。然后这个队列会在下一个tick中才会被取出watcher执行

## 其它

【Vue2】Vue2.x 与 Vue1.x 最大的区别在于 2.x 使用了 Virtual DOM 来更新DOM节点，提升渲染性能。以及提供了服务端渲染技术。

【组件】props传递数据、events触发事件、slot内容分发，这三者构成了Vue组件

【组件递归】必须添加name选项

【动态组件】 `<component :is="currentView" />`

【异步组件】只在组件需要渲染时触发工厂函数，并且会缓存解析结果。