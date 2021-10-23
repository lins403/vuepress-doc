# 技巧

### 组件批量自动化注册

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

### 批量创建子节点Vnode

```js
render: function (createElement) {
  return createElement('div',
    Array.apply(null, { length: 20 }).map(function () {
      return createElement('p', 'hi')
    })
  )
}
```

### 动态 key

```vue
<!--给同一个元素的 `key` attribute 设置不同的状态来代替 `v-if` 和 `v-else`-->
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```



### 使用vue内置的混入策略

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

