# 概要

## 一、数据驱动

【做一个简单的梳理，从数据到DOM视图】

## 二、响应式原理

- Observer
  - 数据劫持。给每个要被观察的对象添加一个observer实例，给对象的属性添加getter和setter，将其变为响应式对象
- Watcher
  - 观察者。共有4种类型的watcher实例，在派发更新时，调用watcher中的方法进行逻辑处理
- Dep
  - 给对象的每个属性添加一个dep实例，每个dep中都维护了一个用于管理watcher的subscribers
- Object.defineProperty
  - 给对象属性添加 getter 和 setter
- 依赖收集、派发更新
  - 当对象触发getter时，通过 `dep.depend()` 进行依赖收集，将watcher实例添加进 subscribers 容器中。
  - 当对象数据发生变化时，触发setter，然后调用 `dep.notify()` ，遍历 subscribers 容器中的每个 watcher，然后调用 watcher 中的方法进行更新，完成相应的逻辑处理。
- nextTick
  - vue的异步更新机制
  - 响应式数据发生变化时会派发更新，只是把 watcher 推送到一个队列中，在 `nextTick` 后才会真正执行 watcher 的回调函数
  - Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列 (queueWatcher)，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
- computed & watch
  - computed 计算属性本质上是 `computed watcher`，当计算的最终值发生变化时才会触发 watcher 并重新渲染
  - 而 watch 侦听属性本质上是 `user watcher`，但通过设置 `deep` 或者 `immediate`，又可以衍生出深度遍历对象属性的 `deep watcher` ，与在当前 Tick 中同步执行 watcher 回调函数的 `sync watcher`

## 三、组件化

- $mount实例挂载
- merge options &合并策略
- 生命周期
- 组件注册
- 异步组件

## 四、编译

- compile（parse、optimize、codegen）
- VDOM & VNode
- Diff



## 生命周期

初始化 Vue 实例 ---> 编译 template 模板 ---> 挂载实例到 DOM ---> 在数据变化时更新 DOM

|               | 调用时机                                              | 补充                                                         |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| beforeCreate  | 在实例初始化之后，进行数据侦听和事件/侦听器的配置之前 | initState之前                                                |
| created       | 在实例创建完成后被立即同步调用                        | initState之后；<br />可以访问到数据                          |
| beforeMount   | 在挂载开始之前被调用：相关的 `render` 函数首次被调用  | 在template编译成render function之后、创建Render Watcher之前  |
| mounted       | 在实例被挂载（生成 DOM 树）后调用                     | 可以访问到 DOM；<br />执行顺序是先子后父                     |
| beforeUpdate  | 在数据发生改变后，DOM 被更新之前                      | 生成 Virtual DOM 之后、生成 real DOM 树之前                  |
| updated       | 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后       | watcher 的回调执行完毕后；<br />执行顺序是先子后父；<br />组件 DOM 已经更新但不会保证所有的子组件也都被重新渲染完毕，要使用$nextTick |
| activated     | 被 keep-alive 缓存的组件激活时调用                    | 生成 DOM 树之后（keep-alive）                                |
| deactivated   | 被 keep-alive 缓存的组件失活时调用                    | 实例销毁时（keep-alive）                                     |
| beforeDestroy | 实例销毁之前调用                                      | 在这一步，实例仍然完全可用                                   |
| destroyed     | 实例销毁后调用                                        | 解绑指令、移除事件监听器、销毁子组件实例                     |
| errorCaptured | 在捕获一个来自后代组件的错误时被调用                  | 可以返回 false 以阻止该错误继续向上传播                      |

> 父子组件的生命周期顺序：父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted（因为`insertedVnodeQueue` 的添加顺序是先子后父）

**服务器端渲染期间**只有beforeCreate、created、errorCaptured会被调用

如果组件的模板中没有用到的数据被更新，即使是更改响应式数据但不会触发DOM更新时，就不会触发beforeUpdate和updated。





# 资料

[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)

[answershuto/learnVue: Vue.js 源码解析](https://github.com/answershuto/learnVue)
