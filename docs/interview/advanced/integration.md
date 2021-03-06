# 进阶

- 组件封装
- 时间分片和虚拟滚动
- 数据驱动、响应式原理、组件化思想
- 设计模式

## 时间分片和虚拟滚动

大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次，`FPS`为60frame/s

一次性插入大量数据，性能的瓶颈主要在页面渲染上，包括样式的计算、布局、绘制、合成等等，实现高性能渲染有两种解决方案：

### 时间分片

原理是对大量的数据实现<u>分批渲染</u>。

假如我们使用定时器`setTimeout`来分批渲染，因为setTimeout只能设置一个固定的时间间隔，这个时间不一定会和页面重排重绘的时间相同，而且setTimeout还是一个宏任务，异步循环机制，宏任务需要等到同步任务和微任务先执行完成，因此setTimeout不一定会在设定的时间到了以后被执行。这两个原因都会导致使用setTimeout来分批渲染时导致的闪屏丢帧现象。

解决这个问题是使用 `requestAnimationFrame` 这个API，把渲染任务添加到它的回调方法中，会在每次页面的重排重绘以前被执行，跟页面刷新的时机保持一致，就不会出现掉帧。

然后我们每次渲染时会批量插入数据，每次插入就会引起一次重排重绘，所以可以使用`DocumentFragment`来优化，现将这些数据作为子节点插入到这个DOM片段中，然后一次性插入真是DOM中，这样就只会触发一次重排，性能更佳。

### 虚拟滚动

requestAnimationFrame需要兼容到IE10，虚拟滚动则不需要。

原理很简单，就是数据懒加载，<u>按需显示</u>，只对可见区域进行渲染，对非可见区域中的数据不渲染或部分渲染的技术，从而达到极高的渲染性能。

根据列表项的高度和当前滚动位置，计算出接下来要渲染片段的数据区间，然后渲染这个区间内的数据。

我们生产环境使用的是开源的一个npm库 `vue-virtual-scroll-list`

## 设计模式

### 一、创建型

#### 工厂模式

JavaScript以前是用工厂函数的模式来创建一个对象，但是后来基本被new构造函数的方式取代了。

webpack的require方法是一个工厂函数，用来加载异步组件，加载以后就会把结果缓存起来以供后面使用。

JQuery的$()就是一个工厂函数，它根据传入参数的不同创建元素或者去寻找上下文中的元素，创建成相应的jQuery对象

#### 单例模式

Vuex的store就是一个全局的单例对象；

commonjs的require方法也是一个单例模式，无论引用模块多少次，只会被加载一次；

项目中的message提示也是单例模式，只允许同时显示一条message；

可以用闭包来创建一个单例模式

#### 原型模式

原型模式（prototype）是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。



### 二、结构型

#### 适配器模式

vue的computed属性，或者vuex的getters属性

#### 代理模式

DOM的事件委托

#### 装饰器模式

HOC高阶组件、高阶函数，这个React中用的多一些

#### 享元模式

实现享元模式的核心就是学会划分内部状态(可共享) 和外部状态(不可共享)，目标是尽量减少共享对象的数量

我在封装组件的时候，外层的dialog让它共享，但是具体内容呢，用动态组件来渲染，路由的组件router-view根据路由动态切换组件，那其实也是享元模式。 

#### 外观模式

外部与一个子系统的通信必须通过一个统一的外观对象进行，为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。外观模式又称为门面模式，它是一种对象结构型模式。

模块化开发，开发第三方依赖等等



### 三、行为型

#### 观察者模式

一对多，没有中介者，只有观察者(多) 和被观察者(一) 

Vue响应式原理的实现，就是基于数据劫持实现数据变化的观察者模式，也就是我们常说的依赖收集和派发更新，当被观察的数据发生变化时，就会触发收集的观察者即watcher里的处理方法

#### 发布订阅模式

发布者和订阅者不直接通信，而是通过发布订阅中心这个中介，来实现消息的发布和通知。

vue中跨组件的通信，可以使用发布订阅模式来实现。因为Vue需要使用自定义事件，所以源码内部已经实现了一个发布订阅中心，所以我们可以借鸡生蛋，直接实例化一个Vue来创建一个全局的事件中心，通过emit方法来发布消息，通过on方法来订阅消息。

通常做法是在created钩子中就去on订阅，否则可能接收不到其它组件在created时emit发出的事件；然后在beforeDestroy钩子中off移除监听。

DOM的原生事件也是发布订阅模式

#### 策略模式

策略模式的目的就是将算法的使用和算法的实现分离开来。

偏函数的思想，固定部分参数并返回一个新函数，来接收其它参数。

我在写vue的自定义指令就是用到这种思想，<u>把DOM事件通过自定义指令来实现，事件的回调通过指令的表达式来传递，从而可以解耦事件的监听和事件的回调处理</u>

#### 迭代器模式

提供一种方法顺序一个聚合对象中各个元素，而又不暴露该对象的内部表示。

forEach、for…of遍历

#### 职责链模式

原型链、作用域链、事件冒泡

#### 中介者模式