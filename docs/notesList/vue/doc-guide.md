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

