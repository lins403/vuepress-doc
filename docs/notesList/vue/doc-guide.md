# 文档学习笔记

## 一、基础

### computed & watch

computed 有缓存，watch 支持异步

```js
computed: {
  aDouble: vm => vm.a * 2	// 如果不用this
}
```

### 指令

#### v-for

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

#### v-on

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

#### v-model

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

#### v-bind

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

### 组件

#### 全局注册

#### 局部注册

#### 异步组件

#### 组件通信



## 二、技巧

### 组件批量自动化注册

`require.context`

```js
// TODO: Demo(router)
```

- **参考**：[基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#基础组件的自动化全局注册)

