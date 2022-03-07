# 扩展

## event

src/platforms/web/runtime/modules/events.js

#### parse 阶段

- `processAttrs`
  - 在对标签属性的处理过程中，判断如果是指令，首先通过 `parseModifiers` 解析出修饰符，然后判断如果事件的指令，则执行 `addHandler(el, name, value, modifiers, false, warn)` 方法
- `addHandler`
  1. 首先根据 `modifier` 修饰符对事件名 `name` 做处理，
  2. 接着根据 `modifier.native` 判断是一个纯原生事件还是普通事件，分别对应 `el.nativeEvents` 和 `el.events`，
  3. 最后按照 `name` 对事件做归类，并把回调函数的字符串保留到对应的事件中。

parse后的结果

```js
// 父组件
el.events = {
  select: {
    value: 'selectHandler'
  }
}

el.nativeEvents = {
  click: {
    value: 'clickHandler',
    modifiers: {
      prevent: true
    }
  }
}
```

```js
// 子组件
el.events = {
  click: {
    value: 'clickHandler($event)'
  }
}
```

#### generate 阶段

- genData
  - 根据 AST 元素节点上的 `events` 和 `nativeEvents` 生成 `data` 数据
- genHandlers
  - 方法遍历事件对象，处理 `modifiers`

父组件生成的 `data` 串为：

```js
{
  on: {"select": selectHandler},
  nativeOn: {"click": function($event) {
      $event.preventDefault();
      return clickHandler($event)
    }
  }
}
```

子组件生成的 `data` 串为：

```js
{
  on: {"click": function($event) {
      clickHandler($event)
    }
  }
}
```

### 事件

由于一个事件可能会对应多个回调函数，所以这里做了数组的判断，多个回调函数就依次调用。

两种事件类型

1. DOM事件

   - updateListeners更新回调函数时，保证了事件回调只添加一次，之后仅仅去修改它的回调函数的引用。
   - 在原生 DOM 事件中添加回调和移除回调函数，实际上是去调用原生 `addEventListener` 和 `removeEventListener`
   - 但它们的`hanlder` 会用 `withMacroTask(hanlder)` 包裹一下。实际上就是强制在 DOM 事件的回调函数执行期间如果修改了数据，那么这些数据更改推入的队列会被当做 `macroTask` 在 `nextTick` 后执行。

2. 自定义事件

   - 把所有的事件用 vm._events 存储起来，对于用户自定义的事件添加和删除就是利用了这几个事件中心的 API

     ```js
     // Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
     // 按事件的名称 event 把回调函数 fn 存储起来
     	(vm._events[event] || (vm._events[event] = [])).push(fn)
     ```

     ```js
     // Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {
     	if (!fn) {
         vm._events[event] = null
         return vm
       }
       if (fn) {
         // specific handler
         // ...
         cbs.splice(i, 1)
       }
     ```

     ```js
     // Vue.prototype.$once = function (event: string, fn: Function): Component {
     // 调用 vm.$on 执行后 vm.$off
     	function on () {
         vm.$off(event, on)
         fn.apply(vm, arguments)
       }
       vm.$on(event, on)
     ```

     ```js
     // Vue.prototype.$emit = function (event: string): Component {
       let cbs = vm._events[event]
       if (cbs) {
         cbs = cbs.length > 1 ? toArray(cbs) : cbs
         const args = toArray(arguments, 1)
         for (let i = 0, l = cbs.length; i < l; i++) {
           try {
             cbs[i].apply(vm, args)
           } catch (e) {
             handleError(e, vm, `event handler for "${event}"`)
           }
         }
       }
     ```

     往当前实例上派发事件，但是事件回调定义在父组件中，以这种方式来完成父子组件的通信。

     当子组件的 `button` 被点击了，它通过 `this.$emit('select')` 派发事件，那么子组件的实例就监听到了这个 `select` 事件，并执行它的回调函数——定义在父组件中的 `selectHandler` 方法，这样就相当于完成了一次父子组件的通讯。

## v-model

双向绑定除了数据驱动 DOM 外， DOM 的变化反过来影响数据，是一个双向关系，在 Vue 中，我们可以通过 `v-model` 来实现双向绑定。

`v-model` 即可以作用在普通<u>表单元素</u>上，又可以作用在<u>自定义组件</u>上，它其实是一个语法糖。

### parse 阶段

`v-model` 被当做普通的指令解析到 `el.directives` 中

### generate阶段

执行 `genData` 的时候，会执行 `const dirs = genDirectives(el, state)`

对于 `v-model` 而言，对应的 `gen` 函数是在 `src/platforms/web/compiler/directives/model.js` 中定义的 `model` 函数，它会根据 AST 元素节点的不同情况去执行不同的逻辑。

```js
// 处理组件和不同的表单元素，都是语法糖，区别在于生成的事件代码会略有不同。
	if (el.component) {
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers)
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers)
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers)
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers)
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  } 
```

```js
data.props = {
  value: (message),
}
data.on = {
  input: function ($$v) {
    message=$$v
  }
} 
```

这就是典型的 Vue 的父子组件通讯模式，父组件通过 `prop` 把数据传递到子组件，子组件修改了数据后，把改变通过 `$emit` 事件的方式通知父组件。父组件会在事件回调函数中修改通过prop传递给子组件的值，同时 `value prop `也会发生变化，子组件的 `input`值被更新。

子组件的 `value prop` 以及派发的 `input` 事件名是可以配置的，通过修改子组件的`model` 选项

## slot

### 普通插槽

子组件的 `init` 时机是在父组件执行 `patch` 过程的时候，那这个时候父组件已经编译完成了。并且子组件在 `init` 过程中会执行 `initRender` 函数，`initRender` 的时候获取到 `vm.$slot`

```js
export function initRender (vm: Component) {
  // ...
  const parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
  const renderContext = parentVnode && parentVnode.context
	// 子组件的初始化。所以这是子组件的vm.$slots
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  // 第一个参数 chilren 对应的是父 vnode 的 children，也就是父组件内包裹的内容。
  // 第二个参数 context 是父 vnode 的上下文，也就是父组件的 vm 实例。
}
```

`resolveSlots` 函数的功能是遍历 `chilren`，把 `child vnode`（不是子组件，而是父组件标签包裹的内容，这段也是编译过的所以是vnode） 插入到父组件 vnode 对应的 `slot` 中。

在子组件的编译过程中( genSlot )，就能使用`vm.$slots`，根据插槽名称获取到对应的 `vnode` 数组（因为它可以有多个同名插槽），用这些父组件的vnode替换子组件插槽的内容。

多个同名插槽，通常出现在v-for遍历创建slot的情况，不会起冲突。

### 作用域插槽

普通插槽和作用域插槽的实现有一个很大的差别是数据作用域。

普通插槽是在父组件编译和渲染阶段生成 `vnodes`，所以数据的作用域是父组件实例，子组件渲染的时候直接拿到这些渲染好的 `vnodes`。

而对于作用域插槽，父组件在编译和渲染阶段并不会直接生成 `vnodes`，而是在父节点 `vnode` 的 `data` 中保留一个 `scopedSlots` 对象，存储着不同名称的插槽以及它们对应的渲染函数，只有在编译和渲染子组件阶段才会执行这个渲染函数生成 `vnodes`，由于是在子组件环境执行的，所以对应的数据作用域是子组件实例。

简单地说，两种插槽的目的都是让<u>子组件 `slot` 占位符生成的内容</u>由父组件来决定，但数据的作用域会根据它们 `vnodes` 渲染时机不同而不同。普通插槽是在父组件的编译和渲染阶段，作用域插槽是在子组件的编译和渲染阶段。

## keep-alive

它提供了include与exclude两个属性，允许组件有条件地进行缓存。以及用于设置最大缓存个数的max属性

### 内置组件

`<keep-alive>` 是 Vue 源码中实现的一个组件，直接定义了render function。

在 `src/core/components/keep-alive.js` 中

### 子组件渲染

#### 首次渲染

第一次渲染时，`<keep-alive>` 的 `render` 函数会先执行，得到slot插槽中的第一个组件，获取该组件的name（存在组件名则直接使用组件名，否则会使用tag）。接下来会将这个name通过include与exclude属性进行匹配，匹配不成功（说明不需要进行缓存）则不进行任何操作直接返回vnode，匹配成功则将组件vnode缓存.

```js
/** patch --> createElm --> createComponent --> initComponent **/
// 缓存了 `vnode` 创建生成的 DOM 节点
vnode.elm = vnode.componentInstance.$el
```

#### 缓存渲染

`<keep-alive>` 内组件vnode没有children，它的更新是在`patchVnode` 做各种 diff 之前先执行 `prepatch` 的钩子函数。它会重新解析`<keep-alive>` 组件的slots，重新执行 `<keep-alive>` 的 `render` 方法，判断是否命中缓存。如果命中缓存，则直接返回缓存中的组件实例`vnode.componentInstance`，接着执行patch（-->createComponent-->reactivateComponent）的时候，使用vnode中缓存的DOM对象。通过执行 `insert(parentElm, vnode.elm, refElm)` 就把缓存的 DOM 对象直接插入到目标元素中，这样就完成了在数据更新的情况下的渲染过程。

被 `<keep-alive>` 包裹的组件在有缓存的时候就不会再执行组件的 `created`、`mounted` 等钩子函数

### 生命钩子

keep-alive提供了两个生命钩子，分别是activated与deactivated。

因为keep-alive会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的created等方法，需要用activated与deactivated这两个生命钩子来得知当前组件是否处于活动状态。

activated：被 keep-alive 缓存的组件激活时调用。

deactivated：被 keep-alive 缓存的组件失活时调用。



## transition

`<transition>` 组件针对单一元素实现过渡效果，是 web 平台独有的

`<transition>` 组件和 `<keep-alive>` 组件有几点实现类似，同样是抽象组件，同样直接实现 `render` 函数，同样利用了默认插槽。

transition的内部实现中，会给目标元素添加/删除 CSS 类名，调用添加的JavaScript钩子

### transition-group

`<transition-group>` 组件实现了列表的过渡效果