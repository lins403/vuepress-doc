# VueCli

安装

```shell
npm install -g @vue/cli
#
vue --version
vue add -h
vue serve -h
vue build -h
vue create <project-name>
```

## Service

[vue-cli/Service.js at dev · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/Service.js)

```shell
npx vue-cli-service help
```

```json
  "scripts": {
    // development
    "serve": "vue-cli-service serve",
    // production
    "build": "vue-cli-service build",
    // test
    "test": "vue-cli-service test:unit",
    // eslint
    "lint": "vue-cli-service lint",
  },
```

### 模式和环境变量

node `process.env`

- [dotenv](https://github.com/motdotla/dotenv)
- [dotenv-expand](https://github.com/motdotla/dotenv-expand)

源码：[vue-cli/Service.js#L58 at dev · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/Service.js#L58)

文档：**[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)**

扩展：

- [cross-env](https://www.npmjs.com/package/cross-env): Cross platform setting of environment scripts
- [How is cross-env different from dotenv ?](https://github.com/kentcdodds/cross-env/issues/56#issuecomment-280095704)

## 配置

[vue-cli/packages/@vue/cli-service/lib/config at dev · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config)

[base 配置](https://github.com/vuejs/vue-cli/blob/3f0b782bca7df17740b72509c42e5e2ea6562ac9/packages/%40vue/cli-service/lib/config/base.js)

[dev 配置](https://github.com/vuejs/vue-cli/blob/f9863409739c8917b24c4844432f984d68877c63/packages/@vue/cli-service/lib/config/app.js)

## plugins

[vue-cli/packages/@vue/cli-service/lib/webpack at dev · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-service/lib/webpack)

@vue/preload-webpack-plugin

case-sensitive-paths-webpack-plugin

copy-webpack-plugin

html-webpack-plugin

```js
  plugins: [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: `./src/pages/index.html`,
      filename: `hello.html`,
    })
  ],
```

pnp-webpack-plugin

terser-webpack-plugin

### webpack-chain

[GitHub - neutrinojs/webpack-chain: A chaining API to generate and simplify the modification of Webpack configurations.](https://github.com/neutrinojs/webpack-chain)

## 升级到VueCli4

### 从 v3 迁移

`npm outdate` 查看可以更新的 npm packages

- [bump: update to vue-cli@4 by dihak · Pull Request #3028 · PanJiaChen/vue-element-admin · GitHub](https://github.com/PanJiaChen/vue-element-admin/pull/3028)
- [Roadmap for Vue-cli4](https://github.com/vuejs/vue-cli/issues/3649)
- [migrating-from-v3](https://cli.vuejs.org/migrating-from-v3/)

### 修改 node-sass 为 dart-sass

```json
-    "node-sass": "^4.9.0",
+    "sass": "1.30.0",
"sass-loader": "10.1.0",
```

deep selectors 原本使用的 `/deep/` 与 `>>>` 要全部替换为 `::v-deep`

[Vue Loader > Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#scoped-css)

### babel

移除 @babel/core ，使用 core.js@3

### webpack 4

webpack 4 内置分包策略，一定程度上智能的帮你做了代码分包

我理解分块的意义在于可以利用浏览器缓存（304）依赖或共用组件；实现业务代码组件的懒加载

[vue-element-admin > Webpack 指南](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/webpack.html#webpack-%E6%8C%87%E5%8D%97)