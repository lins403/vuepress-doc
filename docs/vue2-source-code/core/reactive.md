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

`Observer` 是一个类（”调度属性绑定和发布订阅“），每一个被观察对象都会被添加一个observer实例（将Observer实例绑定到data的`__ob__`属性上面去），它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新；

执行Observer构造函数时：

- 首先实例化 `Dep` 对象
  - Dep是依赖收集的核心
  - Dep是一个class，实际上就是对 `Watcher` 的一种管理，有一个静态属性 `target`，这是一个全局唯一的 `Watcher`
  - 通过Dep.target，保证在同一时间只能有一个全局的 `Watcher` 被计算
  - `Watcher` 是一个 Class，在它的构造函数中，定义了一些和 `Dep` 相关的属性，用于依赖收集
  
- 接着通过执行 `def` 函数把自身实例添加到数据对象 `value` 的 `__ob__` 属性上

- 如果是个数组，则会先进行数组遍历，（只）对每一个对象或数组的成员进行observe，但是可以通过使用`Vue.set`来拓展监听成员

  ```js
  arr: ['a', 'bb', 'ccc', { value: 1 }]	
  
  this.arr[0] = 0		// 无响应式更新
  this.arr[3] = { value: 2 }		// 无响应式更新
  this.arr[3].value = 2		// 可以响应式更新
  ```

- `defineReactive` 的功能就是定义一个响应式对象，使用`Object.defineProperty`给对象的每个属性添加 getter 和 setter

  - 目的就是为了在我们访问数据以及写数据的时候能自动执行一些逻辑
  - getter 做的事情是依赖收集，setter 做的事情是派发更新

- `Dep.target`
  - the current target watcher being evaluated. This is globally unique because there could be only one watcher being evaluated at any time.
  
  - watcher实例的evaluate方法only gets called for lazy watchers.
  
    ```js
    /*创建计算属性的getter*/
    function createComputedGetter (key) {
      return function computedGetter () {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
          /*实际是脏检查，在计算属性中的依赖发生改变的时候dirty会变成true，在get的时候重新计算计算属性的输出值*/
          if (watcher.dirty) {
            watcher.evaluate()
          }
          /*依赖收集*/
          if (Dep.target) {
            watcher.depend()
          }
          return watcher.value
        }
      }
    }
    ```
  
    

## getter和setter

- 每个对象值的 getter 都持有一个 `dep`，在触发 getter 的时候会调用 `dep.depend()` 方法，也就会执行 `Dep.target.addDep(this)`，然后将当前的watcher添加进Dep容器中。
- 数据变化会触发重新渲染，然后会递归访问实例对象的所有属性，触发所有数据的 getter，这样实际上已经完成了一个依赖收集的过程。



## 依赖收集和派发更新

使用 Object.defineProperty 方法，给对象添加getter和setter，在getter中通过 `dep.depend()` 进行依赖收集。收集依赖的目的是为了当这些响应式数据发生变化，触发它们的 setter 的时候，通过 `dep.notify()` 去通知订阅者去做相应的逻辑处理，我们把这个过程叫派发更新。

其实 `Watcher` 和 `Dep` 就是一个非常经典的观察者设计模式的实现。

> 在实例初始化时，需要将data、props、computed等属性添加到实例上，并给每一个被观察对象都添加一个 observer 实例，给对象的属性添加 getter 和 setter，用于依赖收集和派发更新。
>
> 创建observer实例时，会遍历对象的每个属性，并给每个属性调用`defineReactive`方法。每个属性都会添加一个dep实例，每个dep实例都维护一个订阅者容器 subscribers（subs）；然后使用 `Object.defineProperty` 方法，给对象属性添加 getter 和 setter。当对象触发getter时，通过 `dep.depend()` 进行依赖收集，将watcher实例添加进 subscribers 容器中，也就是把watcher收集到依赖中。当对象数据发生变化时，触发setter，然后调用 `dep.notify()` ，遍历 subscribers 容器中的每个watcher，然后调用 watcher 中的方法进行更新，完成相应的逻辑处理。

#### Render Watcher

实例在 `mountComponent` 挂载时会首次渲染，然后生成一个 `render watcher`，递归访问实例的所有属性，并触发它们的getter。在渲染的过程中完成对实例属性的依赖收集，~~然后初始化的时候就会执行它们的回调函数~~。

Render Watcher被派发更新以后，会调用在实例化watcher时传入的updateComponent方法，会触发组件更新并重新渲染生成新的vnode，然后patch更新到DOM上。Watcher内部有个id，在更新队列中会做排序，Render Watcher是最后被更新的。

在渲染的时候访问过这个值，才会生成一个 `render watcher`，这样修改这个值的时候才会触发DOM更新，才会响应式更新视图。换句话说，没有绑定在视图(模板)上的响应式数据，即使更改了数据，也不会触发重新渲染和视图更新。

#### computed watcher

初始化computed属性时，也会生成一个 `computed watcher`，不同于其它的watcher，computed watcher的内部做了优化，当计算属性的计算的最终值发生变化时，才会触发watcher并重新渲染，而不是计算属性依赖的值发生变化时就更新。

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
   - 当响应式数据发生变化后，触发了 `watcher.update()`，只是把这个 `watcher` 推送到一个队列中，在 `nextTick` 后才会真正执行 `watcher` 的回调函数。而一旦我们设置了 `immediate`，就可以在当前 `Tick` 中同步执行 `watcher` 的回调函数

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

## 父子组件



### props

会进行规范化、初始化，将props变为响应式数据.



`this.$props` 

- 当前组件接收到的 props 对象

`vm.$attrs`

- 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (`class` 和 `style` 除外)。



修改props触发子组件重新渲染的情况有两种：

1. `prop` 值被修改
   - 子组件直接修改props值时，只会触发子组件的re-render，而且会有[Vue warn]告知当父组件重新渲染时，这个修改的值会被父组件的状态所覆盖
   - 做依赖收集的是在子组件初始化的initProps时被添加到实例上的prop属性名，只要子组件模板中有使用，也就是在渲染时访问过这个属性名，它的render watcher就会被依赖所收集，在修改prop值触发setter时被派发更新，然后就会重新渲染子组件。
2. 对象类型的 `prop` 内部属性的变化
   - 当子组件直接修改对象类型的props时，会修改到父组件的状态，触发父组件和子组件的re-render
   - 修改对象类型的props的属性时，与上面不同，子组件的这个prop值并不会触发setter，而是会修改到父组件的状态，从而触发父组件中的这个值的setter，由它来派发更新，但是只要子组件模板中有使用这个值，父组件和子组件的render watcher就都会被触发



子组件的 `prop` 值始终指向父组件的 `prop` 值，只要父组件的 `prop` 值变化，就会触发子组件的重新渲染.

通过`.sync`和`$emit`的方式修改props时，无论是基本数据类型或者是对象，都会触发父组件和子组件的re-render

```vue
<Child :post="post" :author.sync="post.author" :num.sync="num" />
这种情况下，如果子组件中修改author，也会导致父组件的post中的author被修改
```



## 其它

[Vue 数据更新了但页面没有更新的 7 种情况汇总及延伸总结](https://segmentfault.com/a/1190000022772025)

1. 无法检测实例被创建时不存在于 `data` 中的 property
2. 无法检测对象 property 的添加或移除
3. 无法检测通过数组索引直接修改一个数组项
4. 无法检测直接修改数组长度的变化
5. 在异步更新执行之前操作 DOM 数据（`vm.$el`）不会变化
6. 循环嵌套层级太深，视图不更新（vm.$forceUpdate()，但通常不应该用到）
7. 路由参数变化时，页面不更新（组件被复用，数据不更新，可以监听 `$route`然后修改数据）

只是没有被响应式立即更新，但是当下一次修改触发更新时，只要数据是变化的，那么之前没有响应式立即更新的视图也会被一起补上

```js
this.arr[1] = 'bbbb'
this.arr[2] = 'cccc'
// 上面两个修改都不能响应式更新视图
// 但是当发生一个响应式修改时，上面的两个修改也会被应用上，即使不在同一个处理函数中，例如一个在mounted，一个在点击事件的回调
// 所以改动数组或对象，只要保证最后一次修改能响应式更新即可
this.items[0].text = 'some value'
```

```js
  mounted() {
    this.arr[1] = 1
  },
  methods: {
    handleClick() {
      this.arr.splice(0, 0, 0)
    }
  }
```

对数组的处理需要特化出来以提高性能。

1）通过数组索引直接修改一个数组项

本来Object.defineproperty()是可以劫持数组的，但是这样开销很大，所以没有使用。不过可以使用`Vue.set`指定成员进行监听。

2）Object.defineproperty()监听不到数组的增加或删除的

重写了数组的原型，修改数据原型上的方法，对数组的修改进行拦截，然后响应式修改
