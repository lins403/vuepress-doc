# Vue Router

- **this.$router**
  
  router 实例

- **this.$route**
  
  当前激活的[路由信息对象](https://router.vuejs.org/zh/api/#路由对象)。这个属性是只读的，里面的属性是 immutable (不可变) 的，不过你可以 watch (监测变化) 它。

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
