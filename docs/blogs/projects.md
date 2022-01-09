# 踩坑

## 基于 vue-element-admin 的项目

改进路由懒加载以后，可以显著提高第一次加载页面的速度，但代码拆分到一定颗粒度后也是把双刃剑，拆分太多模块会导致项目启动、打包和热更新的时间过久，以及懒加载导致页面加载过慢的问题

### 路由懒加载失效

#### solution1

剔除可能影响打包结果的因素，在  `.env.production` 文件中删除配置 `VUE_CLI_BABEL_TRANSPILE_MODULES = true`

```shell
# vue-cli会通过这个环境变量来区分是否使用babel-plugin-dynamic-import-node
VUE_CLI_BABEL_TRANSPILE_MODULES = true
```

[Pull Request #1267 · PanJiaChen/vue-element-admin · GitHub](https://github.com/PanJiaChen/vue-element-admin/pull/1267#issuecomment-434619054)

[路由懒加载 | vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html#vue-cli-3-该方案已淘汰)

#### solution2

如果方法一不能解决，那可能是 `webpack4` 中动态 import 不支持变量方式导致的，试试用 `require` 改写

```js
// origin
component: () => import(/* webpackChunkName: "login" */ '@/views/dispute/login'),
  
// use require instead
component: resolve => require(['@/views/login/index'], resolve),

// name chunk(最后一个参数只能是静态字符串，不能使用变量)
component: resolve => require.ensure([], () => resolve(require('@/views/login/index')), 'login'),
```

[webpack import() 动态加载模块踩坑](https://segmentfault.com/a/1190000015648036)

[模块方法 > import() 中的表达式 | webpack 中文文档](https://webpack.docschina.org/api/module-methods/#dynamic-expressions-in-import)，`Webpack5` 中优化了，允许import语句中使用带有模块路径信息的动态变量名，以后有用到webpack5时实测验证一下



### 动态路由视图加载失败

**开发环境**下，Error: Cannot find module ...

```js
// 动态路由懒加载
export const loadView = view => {
  // webpack4+中动态import不支持变量方式，导致动态路由失效
  // 然后开发环境下，这里 babel-plugin-dynamic-import-node 不能予以转换
  return () => import(`@/views/${view}`)
}
```

#### solution 

```js
export const loadView = view => {
  // 改用require
  return resolve => require([`@/views/${view}`], resolve)
}
```

#### workaround

更稳妥的折中方案

```js
export const loadView = view => {
  if (process.env.NODE_ENV === 'production') {
    return () => import(`@/views/${view}`);
  } else {
    return (resolve) => require([`@/views/${view}`], resolve)
  }
}
```



### 优化热更新速度的方案

> 使用 babel 的 plugins [`babel-plugin-dynamic-import-node`](https://github.com/airbnb/babel-plugin-dynamic-import-node)，它只做一件事就是将所有的`import()`转化为`require()`
>
> > [路由懒加载 | vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html#新方案)

#### vue-cli@4

```bash
npm install babel-plugin-dynamic-import-node -D
```

```js
// babel.config.js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  }
}
```



### 动态路由懒加载

question：

- 之前项目是前台和后台管理的前端代码在同一个application里，考虑到后台管理页面懒加载的性价比不高，所以我做的方案是相对于前台页面的整块懒加载，也就是都打包进一个chunk里

- 我们采用的方案中，前端没有保存映射，而是直接使用数据库保存的较为完整的映射，然后在permission中动态拉取后台路由时，通过后端传来的映射中与之相应的前端页面路径信息，加载这个路径的页面组件，转换成组件对象，从而实现懒加载
- 结果反而是在开发环境下，才会有代码分块和懒加载，打包构建时，反而代码在同一个chunk没有被分割
- 然后，虽说性价比很低，但如果就要实现后台管理的每个路由组件的代码分块，以及实现线上后台管理页面之间独立的懒加载，要怎么做？

[动态路由懒加载有解决方案么？ · Issue #3709 · PanJiaChen/vue-element-admin · GitHub](https://github.com/PanJiaChen/vue-element-admin/issues/3709)

[路由权限的修改 · Issue #167 · PanJiaChen/vue-element-admin · GitHub](https://github.com/PanJiaChen/vue-element-admin/issues/167#issuecomment-401584177)

TODO

