# 风格指南

## 私有 property 名

```js
// 模块作用域
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```

```js{6}
// 始终为插件、混入等不考虑作为对外公共 API 的自定义私有 property 使用 $_ 前缀。
// 并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```

## 组件名

组件名不要使用单个单词，避免跟现有的以及未来的 HTML 元素相冲突

```js
// .vue 组件名大写，不要用驼峰，不要用驼峰
components/
|- MyComponent.vue        // PascalCase (帕斯卡)
|- my-component.vue        // kebab-case (烤串)    [DOM模板中使用，因为HTML大小写不敏感]
```

- **参考**： [模板中的组件名大小写](https://cn.vuejs.org/v2/style-guide/#模板中的组件名大小写强烈推荐)

```js
// 只有一个active实例的组件，应该以 The 前缀命名，以示其唯一性
components/
|- TheHeading.vue
|- TheSidebar.vue
```

```js{10-13}
// 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
// 组件名称应该倾向于完整的单词，而不是缩写。
components/
|- TodoList/
   |- Item/
      |- index.vue
      |- Button.vue
   |- index.vue

components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

```js
// 组件名单词顺序，应该以高级别的单词开头，以描述性的修饰词结尾
components/
|- SearchInputQuery.vue
|- SettingsCheckboxTerms.vue
```

```vue
<!-- 在单文件组件、字符串模板和 JSX 中自闭合 -->
<MyComponent/>
```

```js
// 组件名应该倾向于完整单词而不是缩写。
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

## Prop 名

```js
// 在声明的时候，其命名应该始终使用 camelCase
props: {
  greetingText: String
}
// 而在模板和 JSX 中应该始终使用 kebab-case
<WelcomeMessage greeting-text="hi"/>
  
// hello_world (snake case )
```

## computed

```js
// 应该把复杂计算属性分割为尽可能多的更简单的 property
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

## 事件名

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

因此，我们推荐你**始终使用 kebab-case 的事件名**。

```vue
<my-component v-on:my-event="doSomething"></my-component>
```

## option的属性顺序

<mark>温故而知新</mark>

1. **Side Effects** (triggers effects outside the component)
   - `el`
2. **Global Awareness** (requires knowledge beyond the component)
   - `name`
   - `parent`
3. **Component Type** (changes the type of the component)
   - `functional`
4. **Template Modifiers** (changes the way templates are compiled)
   - `delimiters`：改变纯文本插入分隔符
   - `comments`：当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。
5. **Template Dependencies** (assets used in the template)
   - `components`
   - `directives`
   - `filters`
6. **Composition** (merges properties into the options)
   - `extends`
   - `mixins`
7. **Interface** (the interface to the component)
   - `inheritAttrs`
   - `model`
   - `props`/`propsData`
8. **Local State** (local reactive properties)
   - `data`
   - `computed`
9. **Events** (callbacks triggered by reactive events)
   - `watch`
   - Lifecycle Events (in the order they are called)
     - `beforeCreate`
     - `created`
     - `beforeMount`
     - `mounted`
     - `beforeUpdate`
     - `updated`
     - `activated`
     - `deactivated`
     - `beforeDestroy`
     - `destroyed`
10. **Non-Reactive Properties** (instance properties independent of the reactivity system)
    - `methods`
11. **Rendering** (the declarative description of the component output)
    - `template`/`render`
    - `renderError`

[组件/实例的选项的顺序](https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序推荐)

> 记忆：越早影响组件的越靠前，组件的扩展比组件内部状态方法更靠前，data、computed 比 watch、lifecycle 靠前，template和render方法最后。
> 
> initLifecycle > initEvents > initRender > initInjections > initState > initProvide
> 
> initProps > initMethods > initData > initComputed > initWatch

## 元素 attribute 的顺序

1. **Definition** (provides the component options)
   - `is`
2. **List Rendering** (creates multiple variations of the same element)
   - `v-for`
3. **Conditionals** (whether the element is rendered/shown)
   - `v-if`
   - `v-else-if`
   - `v-else`
   - `v-show`
   - `v-cloak`
4. **Render Modifiers** (changes the way the element renders)
   - `v-pre`
   - `v-once`
5. **Global Awareness** (requires knowledge beyond the component)
   - `id`
6. **Unique Attributes** (attributes that require unique values)
   - `ref`
   - `key`
7. **Two-Way Binding** (combining binding and events)
   - `v-model`
8. **Other Attributes** (all unspecified bound & unbound attributes)
9. **Events** (component event listeners)
   - `v-on`
10. **Content** (overrides the content of the element)
    - `v-html`
    - `v-text`

[元素 attribute 的顺序](https://cn.vuejs.org/v2/style-guide/#元素-attribute-的顺序推荐)

> 记忆：影响组件渲染方式的属性优先，跟元素节点相关的 id、ref、key 次之，然后是状态相关的属性，依次是双向绑定的 v-model ，其他属性，事件，内容渲染等等。

## 补充

所有的`.js`文件都遵循横线连接 (kebab-case) 

```js
@/src/utils/open-window.js
@/src/views/svg-icons/require-icons.js
@/src/components/MarkdownEditor/default-options.js
```

在`views`文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

```js
@/src/views/svg-icons/index.vue
@/src/views/svg-icons/require-icons.js
```

 `.vue` 文件可以使用多个style，可以通过src引入外部的html、js、css等

```vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

# 参考

[Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/)

[Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html#简介)

[vue-element-admin > 命名规范](https://juejin.cn/post/6844903840626507784#heading-9)
