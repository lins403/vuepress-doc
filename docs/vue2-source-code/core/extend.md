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