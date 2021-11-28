# 响应式原理

![](https://wangtunan.github.io/blog/assets/img/reactive.c9e2ac37.png)

# props

有多种定义方法，处理逻辑较复杂。

值得注意的是，this._init()的mergeOptions中，会处理normalizeProps，这个阶段在initProps以前。

初始化 initProps(vm, propsOptions) 

```js
for (const key in propsOptions) {
// 1. 验证prop并处理默认值
  const value = validateProp(key, propsOptions, propsData, vm)
// 2. 定义响应式
  defineReactive(props, key, value)
// 3. 代理_props
  // _props保存了初次render时的props，用于处理default值和updateChildComponent中更新props
  // 方便获取props值的同时避免触发响应式的getter
  if (!(key in vm)) {
    proxy(vm, `_props`, key)
  }
}
```

# data

初始化 initData(vm)

```js
// 1. 代理
proxy(vm, `_data`, keys[i])
// 2. observe data 
  // => new Observer => observeArray || defineReactive，其中都会进行递归，以完成所有嵌套属性的依赖收集
observe(data, true /* asRootData */)
```

# computed

初始化 initComputed(vm, opts.computed)

```js
const computedWatcherOptions = { lazy: true }

// 1. 为computed的属性创建一个内部watcher
watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions)
// 2. 将computed的属性添加到vm上
if (!(key in vm)) {
  defineComputed(vm, key, userDef) // >>> 会在update渲染时通过watcher.depend()完成依赖收集
} 
```

更新

```js

```

# watch

初始化 initWatch(vm, opts.watch)

```
createWatcher ==> vm.$watch(expOrFn, handler, options)
```

Vue.prototype.$watch

```

```

---

# Watcher

1. render watcher
2. computed watcher
3. user watcher

# Observer

# Dep

<img :src="$withBase('/assets/img/vue2-source-code/reactivity_goodnotes.jpeg')">
