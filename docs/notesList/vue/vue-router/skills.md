# 技巧

## 基础功能

### 动态重定向

```js
const router = new VueRouter({
  routes: [
    {
      path: '/dynamic-redirect/:id?',
      redirect: to => {
        const { hash, params, query } = to
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
    }
  ]
})
```

### 路由别名

```js
routes: [
  { path: '/root', component: Root, alias: '/root-alias' },
  {
    path: '/home',
    component: Home,
    children: [
      // default child route with empty string as alias.
      { path: 'default', component: Default, alias: '' },
      
      // absolute alias
      { path: 'foo', component: Foo, alias: '/foo' },
      
      // relative alias (alias to /home/bar-alias)
      { path: 'bar', component: Bar, alias: 'bar-alias' },
      
      // multiple aliases
      { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] },
      
      // nested alias
      { path: 'nested', component: Nested, alias: 'nested-alias', children: [{ path: 'foo', component: NestedFoo }] }
    ]
  }
]
```



## `<router-link>` 属性

### 不留下 history 记录（replace）

```html
<!-- 当点击时，会调用 router.replace() 而不是 router.push() -->
<router-link :to="{ path: '/abc'}" replace></router-link>
```

### 精确匹配路由高亮菜单（exact）

```html
<!-- 这个链接只会在地址为 / 的时候被激活 -->
<router-link to="/" exact></router-link>
```

### 更改 router-link 的渲染效果（tag）

```html
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```

### 新开标签页

```html
<router-link to="/bar" target="_blank">bar</router-link>
```

```js
const {href} = this.$router.resolve({
  path: "/index",
  query: {}
})
window.open(href, '_blank')
```



## `<router-view>`

> `<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。

### 使用多个视图

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```js{5}
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

### 配合 `<transition>` 和 `<keep-alive>` 使用

```html
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
```

### 自定义渲染组件（v4.x）

```html
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <keep-alive>
      <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
    </keep-alive>
  </transition>
</router-view>
```



## 其它

### 打开blank窗口

方法一：`<router-link target="_blank" to="/login">登录</router-link>`

方法二

```js
methods:{
  makeCase(row) {
    // this.caseWindow&&this.caseWindow.opener? this.caseWindow.focus(): this.showWindow()
    this.showWindow(row.id)
  },
  showWindow(id) {
    const { href } = this.$router.resolve({
      path: "/hello-world",
      query: { id }
    });
    this.caseWindow = window.open(href, "") //默认是_blank
    this.caseWindow.focus() //定位到新打开的窗口
  }
}
```

### 页面离开前提示用户

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

### 处理页面缓存（全局挂载路由守卫）

```js
import Vue from 'vue'
import store from './store'
Vue.mixin({
  beforeRouteEnter: function (to, from, next) {
    next(() => {})
  },
  beforeRouteLeave: function (to, from, next) {
    if (from && from.meta.keepAlive) {
      console.log(this.$vnode)
    }
    next()
  }
})
```

### 动态transition

```html
<!-- 使用动态的 transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```

```js
// 接着在父组件内
// watch $route 决定使用哪种过渡
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
```

### 保持原先滚动位置

```js
export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
    if (savedPosition) {
      return savedPosition
    } else {
      // 保存原来 keepAlive 页面的滚动位置，返回这个页面时，滚动回原来的位置
      // 需要触发popstate，也就是浏览器的前进/后退，或者是router.push/replace方法
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.documentElement.scrollTop || window.scrollY || document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes
})
```

```js
// v4.x
{ left: 0, top: 0 }
```

