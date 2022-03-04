# 概要

## 一、数据驱动

【做一个简单的梳理，从数据到DOM视图】

## 二、响应式原理

- Observer
  - 给每个要被观察的对象添加一个observer实例，给对象的属性添加getter和setter，将其变为响应式对象
- Watcher
  - 共有4种类型的watcher实例，在派发更新时，调用watcher中的方法进行逻辑处理
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

TODO

|               | 作用 | 补充 |
| ------------- | ---- | ---- |
| beforeCreate  |      |      |
| created       |      |      |
| beforeMount   |      |      |
| mounted       |      |      |
| beforeUpdate  |      |      |
| update        |      |      |
| activated     |      |      |
| deactivated   |      |      |
| beforeDestroy |      |      |
| destroyed     |      |      |
| errorCaptured |      |      |

> 父子组件的生命周期顺序：父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted



