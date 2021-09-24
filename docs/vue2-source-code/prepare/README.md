# 个人准备

【目标】：用自己的话梳理清楚，能把Vue初学者讲明白

【背景（前置基础）】：需要结合官方文档、项目实践经验来学习

【现阶段】：

- 复习过官方文档，具备一定的项目经验，已经盲人摸象的梳理完一遍源码核心部分，现在要问题驱动学习思考，同时结合前辈的分析合集来整理汇总（2021/9/19）

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