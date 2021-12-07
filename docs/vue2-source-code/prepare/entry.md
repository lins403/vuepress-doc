# 入口

## Vue

从 `npm run dev` 开始，找到 `web/entry-runtime-with-compiler.js` ，这里主要定义了 `Vue.prototype.$mount` 和 `Vue.compile`，并默认导出Vue。

入口这里使用到的 Vue 构造函数，其实还经过了三层的封装，从后往前分别是：

**1. platforms/web/runtime/index**

- 主要定义了web平台专属的方法，包括全局的Vue.config，Vue.prototype的mount、patch等等
- 定义了 public mount method ，也就是不带compiler的`Vue.prototype.$mount`，调用`mountComponent`完成组件的挂载

---

**2. core/index**

- `initGlobalAPI(Vue)`

---

**3. core/instance/index**

- 原始定义 `function Vue (options)` ，其中会调用初始化方法 `this._init(options)`
- <u>initMixin(Vue)</u>
  - 定义 `Vue.prototype._init`
  - mergeOptions、init初始化、vm.$mount挂载组件
- stateMixin(Vue)
- eventsMixin(Vue)
- lifecycleMixin(Vue)
- renderMixin(Vue)

---

## 图例

![](https://wangtunan.github.io/blog/assets/img/process.8f86c136.png)

来源：<https://wangtunan.github.io/blog/vueAnalysis/entry/>

## 问题

### 1. Vue是什么？

答：Vue本质上就是通过function实现的Class类，然后扩展了自身和原型prototype上的属性和方法。不用ES6是因为，用ES5扩展原型的方式更方便将功能划分不同的文件模块，更清晰也更方便代码的维护管理。

### 2. new Vue 发生了什么？

答：Vue构造函数只能通过new关键字调用，然后会去调用 `this._init(options)` 方法完成初始化。实例的init方法被定义在initMixin中，主要做了merge options、相关属性的init初始化、以及通过vm.$mount挂载实例这三件事。

**延伸**

1. init初始化中的merge options
   
   需要区分实例化的是component还是Vue，
   
   - 前者调用 `initInternalComponent` 只需要做简单的赋值拷贝，而不涉及递归与合并策略等复杂逻辑，从而使实例化的速度快很多（optimize internal component instantiation）
   - 后者使用 `mergeOptions` 方法，同时在 `resolveConstructorOptions` 中还需要进一步细分是通过new Vue或者是Vue.extend的方式来引入的额外options，如果是extend则需要继承父类的options，同时根据缓存的options判断是否需要更新父类的options，因为它有可能也会被mixin或extend的方式改变。

2. 相关属性的init初始化
   
   ```js
   initProxy(vm)    
   // render的Proxy代理【TODO: 理清过程】
   // vm._renderProxy = new Proxy(vm, handlers)
   // vnode = render.call(vm._renderProxy, vm.$createElement)    [Vue.prototype._render()]
   
   initLifecycle(vm)
   initEvents(vm)
   initRender(vm)
   callHook(vm, 'beforeCreate')
   // --------------------------------------------
   initInjections(vm) // resolve injections before data/props
   initState(vm)
   initProvide(vm) // resolve provide after data/props
   callHook(vm, 'created')
   // --------------------------------------------
   if (vm.$options.el) vm.$mount(vm.$options.el)
   ```
   
   - init留意两个分割点，'beforeCreate'、 'created'，结合生命周期图例来看。
   - initState中初始化的顺序依次是：props、methods、data、computed、watch，这对后面的响应式分析很有帮助。

3. vm.$mount挂载实例
   
   会判断 vm.$options.el 是否存在，存在则 `vm.$mount(vm.$options.el)` ，然后会去调用入口文件中 \$mount 方法，通过compiler和render，将template渲染成实际的DOM，完成vm实例的挂载。
