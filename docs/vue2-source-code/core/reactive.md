# 深入响应式原理

## initState(vm)

初始化，将 data 和 props 的属性添加到 vm 实例上，并给它们添加 `Observer`，从而将它们变成响应式对象

- initProps
  - 在初始化props之前的`mergeOptions`中，首先会对 `props` 做一次 `normalize`
- initData
- initComputed
- initWatch

## Observer

observe --> new Observer()

`Observer` 是一个类（”调度属性绑定和发布订阅“），每一个被观察对象都会被添加一个observer实例，它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新；

执行Observer构造函数时：

- 首先实例化 `Dep` 对象
  - Dep是依赖收集的核心
  - Dep是一个class，实际上就是对 `Watcher` 的一种管理，有一个静态属性 `target`，这是一个全局唯一的 `Watcher`
  - 通过Dep.target，保证在同一时间只能有一个全局的 `Watcher` 被计算
  - `Watcher` 是一个 Class，在它的构造函数中，定义了一些和 `Dep` 相关的属性，用于依赖收集
- 接着通过执行 `def` 函数把自身实例添加到数据对象 `value` 的 `__ob__` 属性上
- `defineReactive` 的功能就是定义一个响应式对象，给对象动态添加 getter 和 setter
  - 目的就是为了在我们访问数据以及写数据的时候能自动执行一些逻辑
  - getter 做的事情是依赖收集，setter 做的事情是派发更新



## getter和setter

- 每个对象值的 getter 都持有一个 `dep`，在触发 getter 的时候会调用 `dep.depend()` 方法，也就会执行 `Dep.target.addDep(this)`，然后将当前的watcher添加进Dep容器中。
- 数据变化会触发重新渲染，然后会递归访问实例对象的所有属性，触发所有数据的 getter，这样实际上已经完成了一个依赖收集的过程。



## 依赖收集和派发更新

使用 Object.defineProperty 方法，给对象添加getter和setter，在getter中通过 `dep.depend()` 进行依赖收集。收集依赖的目的是为了当这些响应式数据发生变化，触发它们的 setter 的时候，通过 `dep.notify()` 去通知订阅者去做相应的逻辑处理，我们把这个过程叫派发更新。

其实 `Watcher` 和 `Dep` 就是一个非常经典的观察者设计模式的实现。

> 在实例初始化时，需要将data、props、computed等属性添加到实例上，并给每一个被观察对象都添加一个 observer 实例，给对象的属性添加 getter 和 setter，用于依赖收集和派发更新。
>
> 创建observer实例时，会遍历对象的每个属性，并给每个属性调用`defineReactive`方法。每个属性都会添加一个dep实例，每个dep实例都维护一个订阅者容器 subscribers（subs）；然后使用 `Object.defineProperty` 方法，给对象属性添加 getter 和 setter。当对象触发getter时，通过 `dep.depend()` 进行依赖收集，将watcher实例添加进 subscribers 容器中。当对象数据发生变化时，触发setter，然后调用 `dep.notify()` ，遍历 subscribers 容器中的每个watcher，然后调用 watcher 中的方法进行更新，完成相应的逻辑处理。
>
> 实例在 `mountComponent` 挂载时会首次渲染，然后生成一个 `render watcher`，递归访问实例的所有属性，并触发它们的getter。然后初始化的时候就会执行它们的回调函数
>
> 初始化computed属性时，也会生成一个 `computed watcher`，不同于其它的watcher，computed watcher的内部做了优化，当计算属性的计算的最终值发生变化时，才会触发watcher并重新渲染，而不是计算属性依赖的值发生变化时就更新。

## Watcher

`Watcher` 的构造函数对 `options` 做的了处理，

```js
if (options) {
  this.deep = !!options.deep
  this.user = !!options.user
  this.computed = !!options.computed
  this.sync = !!options.sync
  // ...
} else {
  this.deep = this.user = this.computed = this.sync = false
}
```

所以 `watcher` 总共有 4 种类型

1. deep watcher
   - `deep: true`，会对一个对象做深层递归遍历进行依赖收集和派发更新
2. user watcher
   - 实例的 option 中定义的 watch 属性，或者通过 `vm.$watch` 创建的 `watcher` 是一个 `user watcher`
3. computed watcher
4. sync watcher
   - `immediate: true`
   - 当响应式数据发送变化后，触发了 `watcher.update()`，只是把这个 `watcher` 推送到一个队列中，在 `nextTick` 后才会真正执行 `watcher` 的回调函数。而一旦我们设置了 `immediate`，就可以在当前 `Tick` 中同步执行 `watcher` 的回调函数

计算属性本质上是 `computed watcher`，而侦听属性本质上是 `user watcher`，但通过设置deep或者immediate，又可以衍生出 `deep watcher` 和 `sync watcher`

## 简易Polyfill

```js
class Dep {
  constructor () {
    this.subscribers = new Set()
  }

  depend () {
    if (activeUpdate) {
      this.subscribers.add(activeUpdate)
    }
  }

  notify () {
    this.subscribers.forEach(sub => sub())
  }
}

function observe (obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]

    const dep = new Dep()
    Object.defineProperty(obj, key, {
      // 在getter收集依赖项，当触发notify时重新运行
      get () {
        dep.depend()
        return internalValue
      },

      // setter用于调用notify
      set (newVal) {
        const changed = internalValue !== newVal
        internalValue = newVal
        if (changed) {
          dep.notify()
        }
      }
    })
  })
  return obj
}

let activeUpdate = null

function autorun (update) {
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate
    update()
    activeUpdate = null
  }
  wrappedUpdate()
}
```

