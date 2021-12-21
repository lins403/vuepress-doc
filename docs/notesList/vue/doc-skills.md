# 技巧

### 1) 组件批量自动化注册

`require.context`

```js
require.context(/*要搜索的目录*/, /*是否搜索其子目录*/, /*匹配的正则*/)
// return
ƒ webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
```

```js
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

- **参考**：[基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#基础组件的自动化全局注册)

### 2) 批量创建子节点Vnode

```js
render: function (createElement) {
  return createElement('div',
    Array.apply(null, { length: 20 }).map(function () {
      return createElement('p', 'hi')
    })
  )
}
```

### 3) 动态 key

```vue
<!--给同一个元素的 `key` attribute 设置不同的状态来代替 `v-if` 和 `v-else`-->
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```

### 4) 使用vue内置的混入策略

```js
const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
}
```

- [手摸手，带你用vue撸后台 系列五(v4.0新版本)](https://juejin.cn/post/6844903840626507784#heading-16)

### 5) 任何HTML标签都可以作为动态组件使用

<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->

<template>
  <div id="app">
    <anchored-heading :level="1">hello~</anchored-heading>
    <anchored-heading :level="3">hello~</anchored-heading>
    <anchored-heading :level="5">hello~</anchored-heading>
  </div>
</template>

```vue
<template>
  <div id="app">
    <anchored-heading :level="1">hello~</anchored-heading>
    <anchored-heading :level="3">hello~</anchored-heading>
    <anchored-heading :level="5">hello~</anchored-heading>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('AnchoredHeading', {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // template: `<component :is="'h' + level"><slot /></component>`,
  render(h) {
    return h(
      'component',
      {
        is: 'h' + this.level
      },
      this.$slots.default
    )
  }
})
export default {
  data() {
    return {}
  }
}
</script>
```

## 6) 控制台上打印vue

```js
document.querySelector('#app').__vue__    //等同于app.__vue__，app就是Vue的实例,root

document.querySelector('.app-main').__vue__
```

# 参考

[Vue 文档中没有告诉你的事 · Issue #1 · javoski/blog · GitHub](https://github.com/javoski/blog/issues/1)
