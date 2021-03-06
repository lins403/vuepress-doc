# 概念梳理

## 数据驱动

- MVVM（数据驱动DOM、双向绑定）

- 组件的实例化和实例挂载（编译、渲染、挂载，VNode、Virtual DOM）

数据驱动**核心**是两点，第一点Vue的系统是一个<u>MVVM模型</u>，核心是数据驱动DOM，以及数据和视图的双向绑定；第二点就是<u>组件的实例化和实例挂载</u>，包含了数据层的响应式绑定，视图层template模板的编译和渲染，生成VNode，VNode组成Virtual DOM，然后根据VNode信息去创建真实DOM。

首先是一个应用通常解耦为MVC模式，然后Vue的MVVM模型包括了数据层Model，视图层View，View-Model数据模型层，ViewModel层实现了数据绑定视图，不需要手动操作DOM，只需要更新数据，就会自动响应式更新到视图。同时基于事件机制，实现双向绑定，当视图层发生变化时，通过事件通知来更新数据。比如说input表单的v-model指令，其实就是语法糖，响应式绑定一个value然后添加一个input事件，事件触发的时候修改这个value值。

然后是组件的实例化和实例挂载，实例化时会通过数据劫持的方式，将数据变为响应式数据，然后实例挂载的时候，编译template模板，先parse解析成AST，然后遍历AST节点收集可优化信息，将优化以后的AST，generate生成render函数。执行render函数的时候会创建VNode，VNode节点构成的节点树就是Virtual DOM。最后的patch阶段，就是根据虚拟DOM的信息，来创建真实DOM。



## 响应式原理

- 数据劫持，实现数据变化的观察者模式，也就是我们常说的依赖收集和派发更新，当被观察的数据发生变化时，就会触发收集的观察者即watcher里的处理方法
- DOM异步更新机制

响应式原理底层实现的<u>**核心**是一个`Observer`类，通过它来实现的数据劫持，然后实现一个数据变化的观察者模式</u>。

数据劫持是使用ES5的`Object.defineProperty`方法，劫持一个js对象的属性，它的get和set方法。当访问属性时触发getter，修改属性数据时触发setter。但是对于数组，本身是可以对数组元素进行数据劫持的，但是因为数组元素可能非常多，劫持的开销就很大，而且劫持的方式是没办法监听到数组的长度变化。所以对于数组的响应式监听，是通过重写数组的原型方法来实现的，七个会改变原数组的实例方法，例如splice、pop、push等等。

数据变化的观察者模式，被观察者就是响应式数据，观察者watcher则是在触发getter方法的时候进行依赖收集，将watcher添加进一个subscribers容器中，当触发被观察者的setter时，就会派发更新，也就是去遍历执行容器里的watcher，执行这些watcher里的方法。但是呢watcher并不是被直接执行，这里有个Vue的优化机制，叫<u>DOM异步更新机制</u>。这是一个节流的思想，首先watcher会被先添加进一个队列中，然后会进行去重并将队列进行排序，因为watcher主要是有三种，user watcher也就是我们定义的watch属性，computed watcher我们定义的computed属性，以及会触发页面渲染，用于更新视图的render watcher。经过排序以后，render watcher总是被最后执行。然后去重和排序以后呢，会等到next tick才被执行。`nextTick`方法的实现是基于promise.then方法，也就是一个微任务。根据事件循环机制，微任务的执行要等到执行栈的同步任务都执行完成，才会被从任务队列中读取。这里其实就是一个节流的思想，也就是我这一轮事件循环中，多次修改数据触发的多次更新我先进行收集，然后再一次性执行，将多次更新压缩到一次，从而提升性能。浏览器的重排重绘现在也有这样的节流优化机制。



## 组件化

- 组件实例挂载
- 组件更新与virtual DOM
- merge options &合并策略
- 生命周期
- 组件注册、异步组件、动态组件、缓存组件、slot插槽、transition组件

组件化核心是实例化和实例挂载，组件的生命周期，组件更新时的diff算法，内置组件等等