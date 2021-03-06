# 技巧

## 基础

### 1) 组件批量自动化注册

`require.context`是一个webpack的api，通过执行require.context函数获取一个特定的上下文，主要用来实现自动化导入模块。

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

## 性能优化

### 1）冻结不需要响应式的对象数据

```js
data () {
  return {
    obj: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
    list: Object.freeze([x, xx, xxx])
  }
}
```

### 2）v-for 节点不要用 index 做 key

index的值是按照绑定的数组的索引顺序，所以如果在数组头部或者中间再插入数据，则会导致原来的index顺序被打破，使得更新时需要计算更多的节点，更消耗性能

### 3）给元素或组件使用v-once

```vue
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```



## 其它

### 控制台上打印vue

```js
document.querySelector('#app').__vue__    //等同于app.__vue__，app就是Vue的实例,root

document.querySelector('.app-main').__vue__
```

# 参考

[Vue 文档中没有告诉你的事 · Issue #1 · javoski/blog · GitHub](https://github.com/javoski/blog/issues/1)
