# 概要

1. 数据驱动【做一个简单的梳理，从数据到DOM视图】
2. 响应式原理
   - Observer
   - Watcher
   - Dep
   - 依赖收集、派发更新
   - nextTick
   - computed & watch
3. 组件化
   - $mount实例挂载
   - merge options &合并策略
   - 生命周期
   - 组件注册
   - 异步组件
4. 编译
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



