# 数据驱动



## 大致过程

1. new Vue 实例化
2. init 初始化
3. $mount 实例挂载 【compileTofunctions、mountComponent  >>>  `vm._update(vm._render())` 】
4. compile 编译 template 生成 render functions【compile（parse、generate）】
5. render 生成 vnode【createElement、createComponent、new VNode】
6. update 中调用 `vm.__patch__` 更新实例节点 vm.$el
7. patch 中对新旧 vnode 进行 Diff，动态更新【patchVnode、updateChildren、createElm】
8. createElm 中调用 DOM API 来创建真实DOM
9. 最终的DOM

**new Vue => init => $mount => compile => render => vnode => patch => DOM**



## 问题
