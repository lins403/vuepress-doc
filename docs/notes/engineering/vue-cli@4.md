# VueCli4

## 从 v3 迁移

`npm outdate`  查看可以更新的 npm packages

- <https://github.com/PanJiaChen/vue-element-admin/pull/3028>
- <https://cli.vuejs.org/migrating-from-v3/>



## 修改 node-sass 为 dart-sass

```json
-	"node-sass": "^4.9.0",
+	"sass": "1.30.0",
"sass-loader": "10.1.0",
```

deep selectors 原本使用的 `/deep/`  与  `>>>`  要全部替换为 `::v-deep`

[ Vue Loader > Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#scoped-css)



## babel

移除 @babel/core ，使用 core.js@3



## webpack 4

webpack 4 内置分包策略，一定程度上智能的帮你做了代码分包

我理解分块的意义在于可以利用浏览器缓存（304）依赖或共用组件；实现业务代码组件的懒加载



[vue-element-admin > Webpack 指南](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/webpack.html#webpack-%E6%8C%87%E5%8D%97)

