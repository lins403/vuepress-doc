# 进阶

## 路由懒加载

当用户访问某一个路由时，才会去服务端获取相应的组件代码。可以减少没有用到的代码却被加载的情况，加快页面渲染速度，同时可以节省流量。

结合

1. Vue的异步组件（[Async Components](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)）
   - Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。
   - Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染
2. Webpack的代码分割功能（[Code Splitting](https://webpack.docschina.org/guides/code-splitting/#root)）

```js
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

**改进一**：在工厂函数中返回一个 `Promise`

```js
Vue.component(
  'async-webpack-example',
  () => import('./my-async-component')
)
```

**改进二**：当使用局部注册的时候，直接提供一个返回 `Promise` 的函数

```js
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

**改进三**：在路由模块中使用

```js
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
	// 在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：
  routes: [{ path: '/foo', component: Foo }]
})
```

**改进四**：命名chunk（需要 Webpack > 2.4）

```js
import Home from '../views/Home.vue'
const routes = [
  // 如果没有配置懒加载，则会被默认打包进 dist/js/app.[hash].js
  { path: '/', name: 'Home', component: Home },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
```



## 路由组件传参

```js{15}
{
  path: '/analysis',
  component: () => import('@/views/dispute/analysis'),
  redirect: '/analysis/global',
  children: [
    {
      path: 'global',
      component: () => import('@/views/dispute/analysis/main-chart'),
      name: 'MainChart',
      meta: { title: '全局分析', icon: 'chart' }
    },
    {
      path: 'global/:chartType',
      component: () => import('@/views/dispute/analysis/sub-chart'),
      props: true,
      name: 'SubChart',
      meta: { title: '全局分析子图', icon: 'edit' }
    }
  ]
}
```

```vue
<!--views/dispute/analysis/index.vue-->
<template>
  <keep-alive>
    <router-view />
    <!-- <router-view :key="$route.fullPath" include="MainChart, SubChart" /> -->
  </keep-alive>
</template>
```

[路由组件传参 | Vue Router](https://router.vuejs.org/zh/guide/essentials/passing-props.html)