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
|- MyComponent.vue		// PascalCase
|- my-component.vue		// kebab-case	[DOM模板中使用，因为HTML大小写不敏感]
```

- **参考**： [模板中的组件名大小写](https://cn.vuejs.org/v2/style-guide/#模板中的组件名大小写强烈推荐)

```js
// 只有一个active实例的组件，应该以 The 前缀命名，以示其唯一性
components/
|- TheHeading.vue
|- TheSidebar.vue
```

```js{9-12}
// 和父组件紧密耦合的子组件应该以父组件名作为前缀命名
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



## option的属性顺序

==温故而知新==

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



## 补充

### js 文件

所有的`.js`文件都遵循横线连接 (kebab-case)



# 参考

[Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/)

