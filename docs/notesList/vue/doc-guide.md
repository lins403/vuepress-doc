# 基础

::: danger warning
临时笔记，搬运工，没有自己的整理
:::

## computed & watch

computed 有缓存，watch 支持异步

```js
computed: {
  aDouble: vm => vm.a * 2	// 如果不用this
}

watch: {
  someObj: {
    handler: function (val, oldVal) { /* ... */ },
    deep: true,			// 只针对对象的deep监听，数组并不需要
    immediate: true	// 初始化时就会触发
  },
},
```

## 指令

### v-for

```vue
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>

<!--在组件上使用v-for-->
<ul>
  <li
    is="todo-item"
    v-for="(todo, index) in todos"
    v-bind:key="todo.id"
    v-bind:title="todo.title"
    v-on:remove="todos.splice(index, 1)"
  ></li>
</ul>

<!-- v-for、v-if 可以在 <template> 上使用，
		 v-show 不支持 <template> 元素，也不支持 v-else -->
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

`v-for` 也可以在实现了可迭代协议的值上使用，包括原生的 `Map` 和 `Set`。不过Vue 2.x 目前并不支持可响应的 `Map` 和 `Set` 值，所以无法自动探测变更。

### v-on

```vue
<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>
```

modifiers，事件修饰符：.stop, .prevent, .capture, .self, .native, .once, .{keyCode | keyAlias}, ...

### v-model

```vue
<input v-model="searchText">
	<!-- 语法糖，等价于 -->
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

修饰符

```js
.lazy		// 取代 input 监听 change 事件
.number	// parseFloat()
.trim		// 首尾空格过滤
```

### v-bind

```vue
<text-document v-bind:title.sync="doc.title"></text-document>
	<!-- .sync语法糖，等价于 -->
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
this.$emit('update:title', newTitle)
```

```vue
<blog-post v-bind="post"></blog-post>		// post: {id:1, title:'My Journey'}
	<!-- 传入一个对象的所有 property，等价于 -->
<blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>

<!-- 结合.sync -->
<text-document v-bind.sync="post"></text-document>
```

## 组件

### 注册

- 全局注册

- 局部注册

#### 异步组件

将异步组件和 <u>webpack 的 code-splitting</u> 功能一起配合使用，

webpack 自动将你的构建代码切割成多个包，这些包会通过 Ajax 请求加载

```js
// 全局注册
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)

// 局部注册
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})

// 工厂函数
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

- **参考**：[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)

### 组件通信

```js
1. props , events( $emit, $on, .sync )
2. $refs , $parent , $children
3. $attrs , $listeners
4. provide/inject
5. webStorage
6. eventbus
7. vuex
8. Vue.observable
```

#### props

> 单向数据流：父级 prop 的更新会向下流动到子组件中，但是反过来则不行

```js
// 子组件
props: ['initialCounter'],
//
data: function () {
  return {
    counter: this.initialCounter
  }
},
//
computed: {
  normalizedCounter: function () {
    return this.initialCounter.trim().toLowerCase()
  }
}
```

传值

```vue
<!-- 传入一个对象的所有 property -->
<blog-post v-bind="postData"></blog-post>
```

非 Prop 的 Attribute

```js
// attribute会自动添加到子组件的根元素上
// 已有的 Attribute 会被覆盖，class 和 style attribute 会被合并
Vue.component('my-component', {
  inheritAttrs: true, // 默认值
})

inheritAttrs: false, // 默认行为将会被去掉，但不影响 class 和 style 绑定
```

- **参考**： [基础 > Props](https://cn.vuejs.org/v2/guide/components-props.html)
- **参考**： [API > props](https://cn.vuejs.org/v2/api/#props)

### 函数式组件

什么时候使用函数式组件

- 组件是比较简单，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。
- 实际上，它只是一个接受一些 prop 的函数。用一个简单的 `render` 函数返回虚拟节点使它们渲染的代价更小。
- 在这样的场景下，我们可以将组件标记为 `functional`，这意味它无状态 (没有响应式数据)，也没有实例 (没有 `this` 上下文)
- 应用场景比如：根据传入 prop 的值来代为渲染更具体的组件



## 过渡 transition

### 进入/离开 & 列表过渡

#### 单元素/组件

使用场景

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件 (`<component v-bind:is="view"></component>`)
- 组件根节点

类名和CSS

```css
<transition name="slide-fade">
	<p v-if="show">hello</p>
</transition>

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
```

结合动画

- @keyframes
- Animate.css

显性的过渡时间 (`duration`)

JavaScript 钩子 (`before-enter` , `before-leave` , ...)

```vue
<transition
  v-on:before-enter="beforeEnter"
  ...
>
  <!-- ... -->
</transition>

methods: {
  beforeEnter: function (el) {
    // ...
  },
}
```

初始渲染的过渡 (`appear`)



#### 多个元素

- v-if / v-else
- 过渡模式 mode 
  - `in-out` 新元素先 in 后当前元素 out
  -  `out-in`



#### 多个组件

```vue
<!--动态组件-->
<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>
```



#### 列表过渡

同一时间渲染整个列表，而非渲染多个节点中的一个

- v-for
- `<transition-group>`



#### 可复用的过渡

```js
Vue.component('my-special-transition', {
  functional: true,
  render: function (createElement, context) {
    var data = {
      props: {
        name: 'very-special-transition',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function (el) {
          // ...
        },
        afterEnter: function (el) {
          // ...
        }
      }
    }
    return createElement('transition', data, context.children)
  }
})
```



#### 动态过渡

```vue
<transition v-bind:name="transitionName">
  <!-- ... -->
</transition>

<!-- 事件钩子也可以获取上下文中的所有数据 -->
```



### 状态过渡

集合侦听器 `watch` 使用



## 延伸问题

::: details data必须是一个函数

> 当一个**组件**被定义，`data` 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 `data` 仍然是一个纯粹的对象，则所有的实例将**共享引用**同一个数据对象！通过提供 `data` 函数，每次创建一个新实例后，我们能够调用 `data` 函数，从而返回初始数据的一个全新副本数据对象。（ initData --> getData --> data.call(vm,vm) ）

:::



::: details 每个组件必须只有一个根元素

every component must have a single root element.

> 

:::



::: details 为什么Vue不支持IE8及以下版本？

> 因为`Object.defineProperty` 是 ES5 中一个无法 shim 的特性.

:::



::: details 不推荐挂载 root 实例到 < html> 或者 < body> 上

> - 提供的元素el只能作为挂载点。不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。
>
> - 模板将会**替换**挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。

:::



::: details 为什么生命周期中可以使用this？

> 所有的生命周期钩子自动绑定 `this` 上下文到实例中，因此你可以访问数据，对 property 和方法进行运算。
>
> 这意味着你不能使用箭头函数来定义一个生命周期方法 。

:::



::: details key的作用

> - 使用 key 时，它会基于 key 的变化重新排列元素顺序
> - 也可以用于强制替换元素/组件而不是重复使用它

:::



::: details extends和mixins的区别

> 

:::