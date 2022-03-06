# 核心模块

1. 数据驱动：init、$mount、compile、render（vnode）、update、patch（diff）
2. 组件化：组件注册（Vue.extend、createElement、createComponent）、mergeOptions策略、生命周期、异步组件
3. 响应式对象：响应式原理（observe、Observer、Watcher、Dep（subs、targetStack、DefineReactive、depend、notify）、WatcherQueue、nextTick）、computed、watch
4. 编译：compile（parse、generate）、Vnode、patch（diff）
5. 扩展：event、指令(v-model)、slot、keep-alive、transition、Vue.use



# 难点

1. $mount实例挂载中主要做了什么？
2. 为什么data必须是函数而不能是对象？
3. mergeOptions策略
4. 对生命周期的理解
5. 响应式原理，依赖收集和派发更新
6. 如何自己实现一个简单的双向绑定？
7. 对Vue事件机制的理解？
8. 指令和修饰符的实现原理？
9. template编译
10. key的意义
11. Diff算法
12. Vue有哪些瓶颈或缺陷？