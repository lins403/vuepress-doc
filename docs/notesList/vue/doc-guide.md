# 基础

## computed & watch

computed中定义的属性会通过Object.defineProperty的方式直接定义在实例上。

computed 有缓存，watch 支持异步

```js
computed: {
  aDouble: vm => vm.a * 2    // 如果不用this
}

watch: {
  someObj: {
    handler: function (val, oldVal) { /* ... */ },
    deep: true,        // 只针对对象的deep监听，数组并不需要
    immediate: true    // 初始化时就会触发
  },
},
```

#### computed的getter和setter

```js
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
// this.fullName = 'Hermes'
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
        <!--TODO：不需要key，为什么-->
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

<!-- 组件中的原生事件，vue3中 .native 修饰符已被移除 -->
<my-component @click.native="onClick"></my-component>
```

modifiers，事件修饰符：.stop, .prevent, .capture, .self, .native, .once, .{keyCode | keyAlias}, ...

::: warning Vue3

`v-on` 的 `.native` 修饰符已被移除。

新增 `emits` 选项，强烈建议使用 `emits` 记录每个组件所触发的所有事件。

```vue
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>

<!-- MyComponent.vue -->
<script>
  export default {
    emits: ['close']
  }
</script>
```

- **非兼容**：不再支持使用数字 (即键码) 作为 `v-on` 修饰符
- **非兼容**：不再支持 `config.keyCodes`

:::

### v-model

```vue
<input v-model="searchText">

<!-- 语法糖，等价于 -->

<input
  :value="searchText"
  @input="searchText = $event.target.value"
>
```

可以在自定义组件上使用 `v-model`，

- 利用它的语法糖特性，在子组件中emit一个名为input的事件，然后父组件上可以直接使用v-model来监听事件

- 修改model选项，创建自定义的表单输入组件

```vue
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',		//default:'value'
    event: 'change'		//default: 'input'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

<base-checkbox v-model="lovingVue"></base-checkbox>
```



::: warning Vue3

- 非兼容：用于自定义组件时，`v-model` prop 和事件默认名称已更改：
  - prop：`value` -> `modelValue`；
  - 事件：`input` -> `update:modelValue`；

```vue{7}
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

:::

#### 修饰符

```js
.lazy        // 取代 input 监听 change 事件，当光标离开输入框时，v-model绑定的value值才会改变
.number        // parseFloat()
.trim        // 首尾空格过滤
.native				// 添加在自定义组件的事件上，直接监听组件根元素的原生事件
```

### v-bind

```vue
// post: {id:1, title:'My Journey'}

<blog-post v-bind="post"></blog-post>

<!-- 传入一个对象的所有 property，等价于 -->

<blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>


props: {
    post: {		//--->空的
      type: Object,
      default: () => ({})
    },
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
},
```

#### .sync

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
<!-- 结合.sync, 传入所有属性 -->
<text-document v-bind.sync="post"></text-document>
```

- 都是语法糖，都可以实现父子组件中的数据的双向通信。但`v-model`只能用一次，`.sync`可以有多个。

::: warning Vue3

- **非兼容**：`v-bind` 的 `.sync` 修饰符和组件的 `model` 选项已移除，可在 `v-model` 上加一个参数代替；

```vue
<!-- Vue2 -->
<text-document v-bind:title.sync="doc.title"></text-document>

<!-- Vue3 -->
<text-document v-model:title="doc.title"></text-document>
```

:::

#### 动态指令参数 (2.6.0+)

```vue
<a v-bind:[attributeName]="url"> ... </a>
<!--
    值的约束: `字符串`，异常情况下值为 null    ，null 值可以被显性地用于移除绑定
    表达式的约束: 某些字符，如空格和引号，放在 HTML attribute 名里是无效的
-->
```

```vue
<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
<a @[event]="doSomething"> ... </a>
```

### `v-once`

只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

Virtual DOM 的diff和patch过程可以跳过这个节点和它的子元素。

### 自定义指令

- 全局指令：`Vue.directive`
- 局部指令：`vm.directives`

#### 钩子函数

```js
bind	// 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
inserted	// 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
update	//所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
componentUpdated	//指令所在组件的 VNode 及其子 VNode 全部更新后调用。
unbind

:function(el, binding, vnode, oldVnode){
  const {name, value, oldValue, expression, arg, modifiers} = binding

// <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
// name: "demo"
// value: "hello!"
// expression: "message"
// arg: "foo"
// modifiers: {"a":true,"b":true}
```

::: warning Vue3

指令的钩子函数已经被重命名，以更好地与组件的生命周期保持一致。

最终的 API 如下：

```js
const MyDirective = {
  created(el, binding, vnode, prevVnode) {}, // 新增
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, // 新增
  updated() {},
  beforeUnmount() {}, // 新增
  unmounted() {}
}
```

:::

## 组件

### 注册

- 全局注册
- 局部注册

#### `Vue.component(id, [definition])`

注册或获取全局组件

```js
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

// 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
```



#### 解析 DOM 模板时的注意事项

```vue
有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。

<table>
  <!-- 会被作为无效的内容提升到外部，并导致最终渲染结果出错。-->
  <blog-post-row></blog-post-row>	
  
  <!-- 利用特殊的is属性做一个变通的办法 -->  
  <tr is="blog-post-row"></tr>    
</table>
```

### 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且<u>会把结果缓存起来</u>供未来重渲染。

可以实现动态的异步组件，以加载远程组件。远程组件就可以实现配置化，就可以脱离代码本身而进行前端的组件构建。

```js
// 工厂函数
Vue.component('async-example', function (resolve, reject) {
  // 使用setTimeout模拟异步。
  setTimeout(function () {
    // （在收到从服务器下载的组件定义时）向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

将异步组件和 <u>webpack 的 code-splitting</u> 功能一起配合使用，webpack 自动将你的构建代码切割成多个包，这些包会通过 Ajax 请求加载。

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

// 处理状态的工厂函数
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
1. props , events( $emit, $on, .sync, v-model )
2. $refs , $parent , $children
3. $attrs , $listeners
4. provide/inject
5. webStorage
6. eventbus    ❌
7. vuex
8. Vue.observable
```

```vue{4,5}
<template>
  <label>
    <input type="text" v-bind="$attrs" v-on="$listeners" />
        <!-- Vue3 -->
        <input type="text" v-bind="$attrs" />
  </label>
</template>
<script>
  export default {
    inheritAttrs: false
  }
</script>
```

关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！`$refs` 也<u>不是响应式的</u>，因此应该避免用它在模板或计算属性中做数据绑定。

::: warning Vue3

`$children` 实例 property 已从 Vue 3.0 中移除，不再支持。如果你需要访问子组件实例，我们建议使用 `$refs`。

Vue3从实例中完全移除了 `$on`、`$off` 和 `$once` 方法。`$emit` 仍然包含于现有的 API 中，因为它用于触发由父组件声明式添加的事件处理函数。

在 Vue 3 的虚拟 DOM 中，事件监听器现在只是以 `on` 为前缀的 attribute，这样它就成为了 `$attrs` 对象的一部分，因此 `$listeners` 被移除了。

:::

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

inheritAttrs: false, // 设置为false时，默认行为将会被去掉，但不影响 class 和 style 绑定
```

- **参考**： [基础 > Props](https://cn.vuejs.org/v2/guide/components-props.html)
- **参考**： [API > props](https://cn.vuejs.org/v2/api/#props)

### 递归组件

组件是可以在它们自己的模板中调用自身的，不过它们只能通过 `name` 选项来做这件事。

```js
name: 'stack-overflow',
template: '<div><stack-overflow></stack-overflow></div>'
```

请确保递归调用是条件性的 (例如使用一个最终会得到 `false` 的 `v-if`)，来限制递归数量，否则将会导致“max stack size exceeded”错误

### 函数式组件

组件是比较简单，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。实际上，它只是一个接受一些 prop 的函数。用一个简单的 `render` 函数返回虚拟节点使它们渲染的代价更小。

在这样的场景下，我们可以将组件标记为 `functional`，这意味它无状态 (没有响应式数据)，也没有实例 (没有 `this` 上下文).

```js
Vue.component('my-component', {
  functional: true,
  // Props 是可选的
  props: {
    // ...
  },
  // 为了弥补缺少的实例，提供第二个参数 context 作为上下文
  render: function (createElement, context) {
    console.log(context.props, context.data)
    console.log(context.children)	//this.$slots
  }
})
```

::: tip 应用场景

需要优化一个有很多节点的组件，其中节点都是状态组件，同时每个组件还嵌套了更多组件。

如果这些颗粒较小的组件不需要维护自己的state，只是简单的接受数据并进行展示，而且它们被很多地方复用，则可以考虑将它们转成函数式组件，以提升性能。

例如图片容器、Avatar 组件、transition封装组件等等

:::

::: warning Vue3

在 Vue 2 中，函数式组件主要有两个应用场景：

- 作为性能优化，因为它们的初始化速度比有状态组件快得多
- 返回多个根节点

然而，在 Vue 3 中，有状态组件的性能已经提高到它们之间的区别可以忽略不计的程度。此外，有状态组件现在也支持返回多个根节点。因此我们建议只使用有状态的组件。

- 函数式组件只能由接收 `props` 和 `context` (即：`slots`、`attrs`、`emit`) 的普通函数创建
- **非兼容**：`functional` attribute 已从单文件组件 (SFC) 的 `<template>` 中移除
- **非兼容**：`{ functional: true }` 选项已从通过函数创建的组件中移除

:::

### inline-template

当 `inline-template` 这个特殊的 attribute 出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。

```vue
<template>
  <my-component inline-template>
    <div>
      <p>These are compiled as the component's own template.</p>
      <p>Not parent's transclusion content.</p>
      <!-- 这里渲染的是子组件中的数据，'child-component' -->
      <p>{{ message }}</p>
    </div>
  </my-component>
</template>
<script>
import Vue from 'vue'
Vue.component('my-component', {
  data() {
    return {
      message: 'child-component'
    }
  },
  created() {
    console.log(this.$slots)	// {}
  }
})
export default {
  name: '',
  data() {
    return {
      message: 'parent-component'
    }
  }
}
</script>
```

不过，`inline-template` 会让模板的作用域变得更加难以理解。所以作为最佳实践，请在组件内优先选择 `template` 选项或 `.vue` 文件里的一个 `<template>` 元素来定义模板。

### X-Template

适用于template内容较多的情况，我实测不能用，而且在工程项目中通常做法都是为子组件创建一个 `.vue` 文件并使用webpack来编译

```vue
<template>
	<hello-world />
	<script type="text/x-template" id="hello-world-template">
    <p>Hello hello hello</p>
  </script>
</template>

<script>
  Vue.component('hello-world', {
    template: '#hello-world-template'
  })
</script>
```

### 手动挂载实例

如果实例化时没有 `el` 选项，则实例处于未挂载状态，可以使用`$mount`手动挂载实例，即关联到指定的DOM元素上。

```html
<div id="mount-point"></div>
```

```js
// 使用 Vue.extend 创建构造器（“子类”）
var Profile = Vue.extend({
	//  el: '#mount-point',
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')

// 另一种方式
var component = new Profile().$mount()
document.getElementById('mount-point').appendChild(component.$el)
```



## 插槽 slot

slot分发的内容，其编译的作用域是在父组件上的，也就是绑定的父组件的数据，而并非子组件

> 因为它渲染成 `vnode` 的时机的上下文是父组件的实例。

```vue
<!-- 属性 url 则根据 inheritAttrs 配置，被作为组件内部属性使用 -->
<navigation-link url="/profile">
  
  <!--
    这里的 `url` 会是 undefined，因为它属于父组件的编译作用域，
		是父组件中定义的，而不是子组件<navigation-link>内部定义的。
  -->
  Clicking here will send you to: {{ url }}
  
</navigation-link>
```

规则：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。简单的情况就是父组件中 `<child> {{ childVariable }}</child>` 是不行的，<u>父组件中要使用子组件的变量需要通过作用域插槽</u>

### 具名插槽

```vue
 <template v-slot:header>        // <template #header>
 <template v-slot:default>    // <template v-slot> 或者 <template #default>

 <!--不可混用-->
    <template v-slot:header>
    <template v-slot>

<!-- 除作用域插槽的使用以外，v-slot只能被用在<template>上 -->
<current-user v-slot="slotProps">{{ slotProps.user.firstName }}</current-user>
```

### 作用域插槽

```vue
<span>
  <slot v-bind:user="user" :title="childTitle">
    {{ user.lastName }}
  </slot>
</span>

<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
		<span>{{ slotProps.title }}</span>
  </template>
</current-user>
```

```vue
<!-- 作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里 -->
function (slotProps) {
  // 插槽内容
}

<!--解构-->
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>

<!--重命名-->
<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>

<!--undefined时的后备值-->
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```

### 动态插槽名

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### render函数

```js
// this.$slots

// this.$scopedSlots

// scopedSlots field

所有的 $slots 现在都会作为函数暴露在 $scopedSlots 中。
如果你在使用渲染函数，不论当前插槽是否带有作用域，我们都推荐始终通过 $scopedSlots 访问它们。
这不仅仅使得在未来添加作用域变得简单，也可以让你最终轻松迁移到所有插槽都是函数的 Vue 3。
```

```vue
<template>
  <div id="app">
    <!-- <my-component-name :message="message">hello, {{ message }}</my-component-name> -->
    <my-component-name :message="message">
      <h1>this.$slots</h1>
      <template v-slot:content="scopeData">
        {{ scopeData.message }}
      </template>
    </my-component-name>
  </div>
</template>

<script>
Vue.component("my-component-name", {
  props: ["message"],
  render: function (createElement) {
    console.log(this.$slots, this.$scopedSlots);

    return createElement("div", [
      createElement("div", this.$slots.default),
      createElement("div", this.$scopedSlots.default()),
      this.$scopedSlots.content({
        message: this.message
      })
    ]);
  }
});

export default {
  data() {
    return {
      message: "Welcome to Vue!"
    };
  }
};
</script>
```

```vue
<script>
var MyComponentName = {
  props: ["message"],
  render: function (createElement) {
    return createElement("div", [
      createElement("div", this.$scopedSlots.header()),
      createElement("div", this.$scopedSlots.default()),
      this.$scopedSlots.content({
        message: this.message,
      }),
    ]);
  },
};
export default {
  // my-component-name
  components: {
    MyComponentName,
  },
  data() {
    return {
      message: "Welcome to Vue!",
    };
  },
  render(h) {
    return h("div", [
      // h("div", "this.$slots"),
      h("my-component-name", {
        attrs: {
          message: this.message,
        },
        scopedSlots: {
          header: () => h("div", { slot: "header" }, ["this is header", h("hr")]),
          default: () => h("div", "always access slots via $scopedSlots instead of $slots"),
          content: function (props) {
            return h("div", props.message);
          },
        },
      }),
    ]);
  },
};
</script>
```

::: warning Vue3

- `this.$slots` 现在将插槽作为函数公开
- **非兼容**：移除 `this.$scopedSlots`

```js
// 2.x 语法
this.$scopedSlots.header

// 3.x 语法
this.$slots.header()
```

迁移策略

1. 在 3.x 中，将所有 `this.$scopedSlots` 替换为 `this.$slots`。
2. 将所有 `this.$slots.mySlot` 替换为 `this.$slots.mySlot()`。

:::

## 过渡 transition

### 进入/离开 & 列表过渡

#### 1. 单元素/组件

1）使用场景

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件 (`<component v-bind:is="view"></component>`)
- 组件根节点
- 使用v-for，在数据插入和删除时触发过渡

2）类名和CSS

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

3）结合动画

- @keyframes
- Animate.css

4）显性的过渡时间： `duration`

```vue
<transition :duration="1000">...</transition>
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

5）JavaScript 钩子： before-enter , <u>enter</u>, afterEnter, enterCancelled, before-leave , <u>leave</u>, afterLeave, leaveCancelled...

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

6）初始渲染的过渡 `appear`

#### 2. 多个元素

- v-if / v-else （标签名一样时就要用key）
  
  ```vue
        <!-- <transition :duration="200" mode="out-in">
          <el-button @click="handleEdit" :key="blockStatus">
            {{ blockStatus ? '编辑' : '编辑中..' }}
          </el-button>
        </transition> -->
  
  <template>
    <transition :duration="2000" name="fade">
      <el-button
        @click="handleEdit"
        :key="blockStatus"
        style="position: absolute"
      >
        {{ blockStatus ? '编辑' : '编辑中' }}
      </el-button>
    </transition>
  </template>
  
  <style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
      transition: all 1s;
    }
    .fade-enter,
    .fade-leave-active {
      opacity: 0;
    }
    .fade-enter {
      transform: translateX(100px);
    }
    .fade-leave-active {
      transform: translateX(-100px);
    }
  </style>
  ```

- 过渡模式 **mode** 
  
  - `in-out` 新元素先 in 后当前元素 out
  - `out-in`

#### 3. 多个组件

```vue
<!--动态组件-->
<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>
```

#### 4. 列表过渡

同一时间渲染整个列表，而非渲染多个节点中的一个

- v-for
- `<transition-group>`

```vue
<transition-group name="list" tag="p">
  <span v-for="item in items" v-bind:key="item" class="list-item">
  {{ item }}
  </span>
</transition-group>
```

#### 5. 可复用的过渡

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

#### 6. 动态过渡

```vue
<transition v-bind:name="transitionName">
  <!-- ... -->
</transition>

<!-- 事件钩子也可以获取上下文中的所有数据 -->
```

### 状态过渡

集合侦听器 `watch` 使用

## render函数

`Vue.compile(template)`将一个模板字符串编译成 render 函数。

### createElement 参数

`createElement` 执行返回一个“虚拟节点 ( virtual node，VNode )”，“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

#### 数据对象

<https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象>

#### 约束

组件树中所有的 VNode 必须是唯一的，也就是组件的render function中不能重复使用一个VNode，但是可以通过循环和工厂函数的方式重复渲染多个组件或元素（即生成多个VNode）

```js
render: function (createElement) {
  var myParagraphVNode = createElement('p', 'hi')
  return createElement('div', [
    // 错误 - 重复的 VNode
    myParagraphVNode, myParagraphVNode
  ])
}

render: function (createElement) {
  return createElement('div',
    Array.apply(null, { length: 20 }).map(function () {
      return createElement('p', 'hi')
    })
  )
}
```

### 使用 JavaScript 代替模板功能

#### `v-model`

```js
props: ['value'],
render: function (createElement) {
  var self = this
  return createElement('input', {
  	/**** domProps ****/
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.$emit('input', event.target.value)
      }
    }
  })
}
```

#### 事件 & 按键修饰符

对于 `.passive`、`.capture` 和 `.once` 这些事件修饰符，Vue 提供了相应的前缀可以用于 `on`：

| 修饰符                             | 前缀 |
| :--------------------------------- | :--- |
| `.passive`                         | `&`  |
| `.capture`                         | `!`  |
| `.once`                            | `~`  |
| `.capture.once` 或 `.once.capture` | `~!` |

例如：

```js
on: {
  '!click': this.doThisInCapturingMode,
  '~keyup': this.doThisOnce,
  '~!mouseover': this.doThisOnceInCapturingMode
}
```

#### renderError

只在开发者环境下工作。

当 `render` 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 `renderError`。这个功能配合 hot-reload 非常实用。

```js
new Vue({
  render (h) {
    throw new Error('oops')
  },
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app')
```

## JSX

### babel

```js
@vue/babel-preset-jsx > @vue/babel-preset-app > @vue/cli-plugin-babel

// https://github.com/vuejs/vue-cli/blob/master/packages/@vue/cli-plugin-babel/preset.js
module.exports = require('@vue/babel-preset-app')
```

```js
// 所有的 Vue CLI 应用都使用 @vue/babel-preset-app，
// 它包含了 babel-preset-env、JSX 支持以及为最小化包体积优化过的配置。

// babel.config.js
module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
}
```

### 使用

**[Babel Preset JSX](https://github.com/vuejs/jsx)**



## 插件

插件通常用来为 Vue 添加全局功能。

### 开发插件

插件的功能范围没有严格的限制

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // ...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // ...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // ...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // ...
  }
}

// 5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router
```

### 使用插件

```js
// 如果插件是一个对象，则调用 `MyPlugin.install(Vue)`。如果插件是一个函数，它会被作为 install 方法
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

`Vue.use` 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

Vue.js 官方提供的一些插件 (例如 `vue-router`) 在检测到 `Vue` 是可访问的全局变量时会自动调用 `Vue.use()`

```js
export default class VueRouter {
  // ...
}
VueRouter.install = install
// ...
const inBrowser = typeof window !== 'undefined'
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}
```



## 深入响应式原理

Vue **不能检测**数组和对象的变化（引用类型）

### 对象

```js
// 向嵌套对象添加响应式 property
Vue.set(vm.someObject, 'b', 2)
this.$set(this.someObject,'b',2)
// 添加多个新 property，要创建一个新对象
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

### 数组

```js
// 根据索引修改值
vm.items[indexOfItem] = newValue // 不能起效
// 方法一
vm.$set(vm.items, indexOfItem, newValue)
// 方法二
vm.items.splice(indexOfItem, 1, newValue)
// 方法三
this.$set(this.items, 1, newValue)
```

```js
// 修改数组长度
vm.items.length = newLength // 不能起效
// 方法
vm.items.splice(newLength)
```

```js
// 会改变原数组的方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
```

::: warning Vue3

- 全局函数 `set` 和 `delete` 以及实例方法 `$set` 和 `$delete`。基于代理的变化检测已经不再需要它们了。

:::

### 异步更新队列

Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

如果使用for循环来动态修改数据100次，由于异步更新队列机制，实际上只会应用最后一次改变，否则就会导致DOM重绘100次，带来巨大的性能开销。

```js
vm.someData = 'new value' 
>>> update > queueWatcher > nextTick(flushSchedulerQueue)

// src/core/util/next-tick.js
// 微任务 microtasks
Promise.then
MutationObserver
setImmediate
setTimeout(fn, 0) // 如果执行环境不支持，则会采用
```

nextTick() 用于在下次DOM更新后执行指定的回调函数。

换言之，如果我们的某些方法依赖了数据修改后的 DOM 变化，我们就必须在 `nextTick` 后执行，例如`$el`访问节点，操作DOM等

`Vue.$nextTick()`/`vm.$nextTick()` 的应用示例：

```js
// 解决数据变化后需要操作 DOM 的情况
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: '未更新'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = '已更新'
      console.log(this.$el.textContent) // => '未更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '已更新'
      })
    },
    // $nextTick() 返回一个 Promise 对象，用 async/await 改写
    $_updateMessage: async function () {
        this.message = '已更新'
      console.log(this.$el.textContent) // => '未更新'
      await this.$nextTick()
      console.log(this.$el.textContent) // => '已更新'
    }
  }
})
```

## 生命周期

beforeCreate

created

beforeMount

- 调用时机在template编译成render函数之后、创建Watcher之前

mounted

- 调用时机在生成 DOM 树之后

beforeUpdate

- 调用时机在生成 Virtual DOM 之后、生成 DOM 树之前

updated

activated

- 生成 DOM 树之后（keep-alive）

deactivated

- 实例销毁时（keep-alive）

beforeDestroy

destroyed

errorCaptured

- 在捕获一个来自后代组件的错误时被调用。
- 此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
- 此钩子可以返回 `false` 以阻止该错误继续向上传播。

> **服务器端渲染期间**只有beforeCreate、created、errorCaptured会被调用

## 延伸问题

::: details data必须是一个函数

> 当一个**组件**被定义，`data` 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 `data` 仍然是一个纯粹的对象，则所有的实例将**共享引用**同一个数据对象！通过提供 `data` 函数，每次创建一个新实例后，我们能够调用 `data` 函数，从而返回初始数据的一个全新副本数据对象。（ initData --> getData --> data.call(vm,vm) ）
>
> > 组件可能被多次用于创建实例，data是一个函数，每次会调用生成一个新对象，可以避免不同组件修改自身数据时不会互相污染

:::

::: details 每个组件必须只有一个根元素

every component must have a single root element.

> 因为`<template>`的内容将替换实例的挂载元素，所以模板的顶级元素始终是单个元素。

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

::: details extends 和 mixins 的区别

> Vue.mixin(mixin) 会影响到所有组件，应该只在插件中使用
>
> Vue.extend(options) 组件构造器，在 Vue3 中已被移除。
>
> ```js
> const Profile = Vue.extend({
>   template: '<p>hello {{name}}</p>',
>   data() {
>     return {
>      name: 'Aidan'
>     }
>   }
> })
> // 创建一个 Profile 的实例，并将它挂载到一个元素上
> new Profile().$mount('#app')
> ```
>
> extends 选项用于扩展另一个组件，且继承该组件的options
>
> ```js
> var CompA = { ... }
> 
> // 在没有调用 `Vue.extend` 时候继承 CompA
> var CompB = {
>   extends: CompA,
>   ...
> }
> ```
>
> mixins 可以用于dispatch组件间的可复用功能
>
> ```js
> var myMixin = {
>  ...
> }
> new Vue({
> 	mixins: [myMixin],
> })
> ```
>
> 在 Vue 3 中，我们强烈建议使用 `Composition API` 来替代继承与 mixin。如果因为某种原因仍然需要使用组件继承，你可以使用 `extends` 选项 来代替 `Vue.extend`。
>
> ---
>
> ```js
> extends: Object | Function
> mixins: Array<Object>
> ```
>
> **总结：** 
>
> extends 和 mixins 实现方式几乎一致，都用同样的选项合并策略。主要都是为了便于扩展单文件组件。
>
>  继承 extends 被用于需要考虑继承的情况，扩展另一个组件 (可以是一个简单的option对象或构造函数)，而无需使用 `Vue.extend`。
>
> 混合 mixins 则用于拆分或复用options，同时多个mixins时后面的options优先级更高，会覆盖前面的。
>
> 早期版本vue中组件自身的options优先级比extends的高，比mixins的低，目前vue2.6中组件自身的options优先级最高
>
> > 同质化较多的功能和页面，例如项目的图表统计分析中可以用到extends或mixins

:::

Vue3

- 没有特殊指令的标记 (`v-if/else-if/else`、`v-for` 或 `v-slot`) 的 `<template>` 现在被视为普通元素，并将渲染为（Web Components）原生的 `<template>` 元素，而不是渲染其内部内容。

# 参考

[Vue2 文档](https://cn.vuejs.org/index.html)

[Vue3 > 从 Vue 2 迁移](https://v3.cn.vuejs.org/guide/migration/introduction.html)