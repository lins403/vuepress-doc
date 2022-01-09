# 基础

## 使用

### HTML

```html
<!-- <router-link> 默认会被渲染成一个 <a> 标签 -->
<!-- 当对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->
  <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/bar">Go to Bar</router-link>

<!-- 路由出口(outlet)，路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
```

### JavaScript

```js
// vue-cli@4.5 peer "vue-router": "^3.2.0"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

```js
// 1. 定义路由组件
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#app')
```



## location对象

```js
// http://localhost:8080/#/demo/index【SPA】

hash: "#/demo/index"
host: "localhost:8080"
hostname: "localhost"
href: "http://localhost:8080/#/demo/index"
origin: "http://localhost:8080"
pathname: "/"		// 像 'index.html' 或者 '/en-US/search' 
port: "8080"
protocol: "http:"
search: ""		// '?a=100&b=20'

assign(url)	// causes the window to load and display the document at the URL specified. 
reload()
replace(url)	// 与 assign() 方法 不同的是，调用 replace() 方法后，当前页面不会保存到会话历史中（session History），这样，用户点击回退按钮时，将不会再跳转到该页面。
```



## history对象

```js
console.dir(window.history)

length	// readonly
state	// readonly
// state: {key: '14504.800'}

// trigger a popstate event
back()	// Equivalent to history.go(-1).
forward()	// history.go(1)
go()

// update the session history stack
pushState()
replaceState()
```



## 路由模式

mode

- 默认值: `"hash" (浏览器环境) | "abstract" (Node.js 环境)`
- 可选值: `"hash" | "history" | "abstract"`

### hash模式

-  `location.hash` 值改变时
  - 触发 `hashchange` 事件，通过监听这个事件，实现前端路由变化
  - 所有跳转都是在客户端完成，不会向server端发出请求，因此也就不会刷新页面
  - 改变hash并没有改变url，所以页面路径还是之前的路径，nginx也不会拦截

-  支持所有浏览器，但少了http请求，所以不利于SEO

### history模式

- 需要浏览器支持 HTML5 History API 

- 利用 `history.pushState` 和 `history.replaceState` API 来完成 URL 跳转，而无须重新加载页面

  - 调用这两个API时并不会触发 `popstate` 事件，只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的前进/回退按钮（或者在Javascript代码中调用`history.back()`或者`history.forward()`方法）
  - vue-router 在 HTML5 history 模式下，`router-link` 会守卫点击事件，让浏览器不再重新加载页面。
  - 当你在 vue-router 的 HTML5 history 模式下使用 `base` 选项之后，所有的 `to` 属性都不需要写 (基路径) 了（域名子项目，nginx alias的应用场景）

- 需要 server端 支持

  - 而且要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 app 依赖的页面

  ```nginx
  # nginx的404页面很丑而且不能灵活自定义，所以通过这种方式来覆盖路由地址，以避免404
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

  ```js
  // 这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。
  // 为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后再给出一个 404 页面。
  const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '*', component: NotFoundComponent }
    ]
  })
  ```
  
  ---

> v4.x 中有所变化，都被归类为历史模式
>
> ```js
> import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
> 
> const router = createRouter({
>   // Hash 模式
>   history: createWebHashHistory(),
>   // HTML5 模式
>   history: createWebHistory(),
>   routes: [
>     //...
>   ],
> })
> ```



## `this.$router` 与 `this.$route`

`this.$router`

- router 实例

`this.$route`

- 当前激活的[路由信息对象](https://router.vuejs.org/zh/api/#路由对象)。这个属性是只读的，里面的属性是 immutable (不可变) 的，不过你可以 watch (监测变化) 它

  ```js
  watch: {
    '$route' (to, from) {
      const {path, query, name, params, fullPath, matched} = from
      console.log(path, query, name, params, fullPath, matched)
    }
  }
  ```



## Navigation Guards （导航守卫）

[导航守卫 > 完整的导航解析流程 | Vue Router](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#完整的导航解析流程)

- Global Before Guards

  ```js
  // 适合用于控制整个应用的权限判断，例如没有token时就定向到login页面
  router.beforeEach((to, from, next) => {
    // ...
  })
  ```

- Global After Hooks `router.afterEach((to, from) => {})`

- Per-Route Guard

  ```js
  // 很少应用到，一般优先考虑到在组件内部使用钩子
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        }
      }
    ]
  })
  ```

-  In-Component Guards

  - `beforeRouteEnter(to, from, next) `
  - `beforeRouteUpdate(to, from, next) ` 在当前路由改变，但是该组件被复用时调用，例如在 /foo/1 和 /foo/2 之间跳转的时候
  - `beforeRouteLeave(to, from, next) `

  ```js
  // beforeRouteEnter 守卫不能访问 this
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  }
  ```



## 返回页面

```js
goBack() {
  window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
}
```



