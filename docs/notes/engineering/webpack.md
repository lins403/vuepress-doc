# Webpack

打包模块，解析模块依赖，构建你的 images、styles、assets、scripts 等静态资源

## 快速上手

```sh
mkdir webpack-demo
cd webpack-demo
git init
npm init -y
npm install webpack webpack-cli --save-dev
code .
echo "/node_modules" > .gitignore
```

1. 创建一个 bundle ( npx webpack、dist/index.html ）
2. 添加配置文件 webpack.config.js
3. 添加 npm scripts 快捷方式（npm run build）
4. [官方在线demo](https://stackblitz.com/github/webpack/webpack.js.org/tree/master/examples/getting-started?terminal=)



## 核心概念

> 本质上，**webpack** 是一个用于现代 JavaScript 应用程序的 *静态模块打包工具*。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 *bundles*，它们均为静态资源，用于展示你的内容。

- 入口(entry)
- 输出(output)
- loader
- 插件(plugin)
- 模式(mode): `'production'(默认) / 'development' / 'none'`

### loader

```js
// test 和 use 属性
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/' // 不检查 node_modules 下的 js 文件
      },
    ],
  },
};

// 链式
webpackConfig.module
        .rule('vue')
          .test(/\.vue$/)
          .use('cache-loader')
          .use('vue-loader')
```



### plugins

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');	// require插件
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```



## 配置

### module

决定了如何处理项目中的[不同类型的模块](https://webpack.docschina.org/concepts/modules)

```js
const rules = require('./webpack.rules.js')
module: {
  // 忽略大型的 library 可以提高构建性能
  noParse: /jquery|lodash/,
  // loader配置
  rules
},
```



### resolve

```js
resolve: {
  extensions: ['.js', '.jsx'], 	// ['.js', '.json', '.wasm']
    // import模块时就不带上后缀名，按顺序依次解析查找，找到时就跳过后面的
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '_a': path.resolve(__dirname, 'src/pages/main/api'),
    '_v': path.resolve(__dirname, 'src/pages/main/views'),
    '_ov': path.resolve(__dirname, 'src/pages/outside/views'),
  }
}
```



### devServer

@vue/cli-service > webpack-dev-server

[webpack gzip 和 nginx gzip的区别](https://blog.csdn.net/sd4015700/article/details/118650050)



### optimization

#### splitchunks





## VueCli

### base

[base 配置](https://github.com/vuejs/vue-cli/blob/3f0b782bca7df17740b72509c42e5e2ea6562ac9/packages/%40vue/cli-service/lib/config/base.js)



### plugins

https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-service/lib/webpack

@vue/preload-webpack-plugin

case-sensitive-paths-webpack-plugin

copy-webpack-plugin

html-webpack-plugin

pnp-webpack-plugin

terser-webpack-plugin

### webpack-chain

https://github.com/neutrinojs/webpack-chain



## 技巧

### 多页面应用程序

- 多页面打包的原理就是：配置多个 `entry` 和多个 `HtmlWebpackPlugin`
- 应用场景：多页面之间比较独立，例如数据不同，但依赖模块相通的场景，或者可以独立部署的场景（活动页面；可视化大屏；不同角色定制页面入口）

### 拆分webpack配置

```js
build
├── webpack.base.js // 共用部分
├── webpack.dev.js
└── webpack.prod.js
```

### 代码分割

### hash

- `[fullhash]`
- `[chunkhash]`
- `[contenthash]`

### mock和proxy

### webpack & HTTP/2

https://medium.com/webpack/webpack-http-2-7083ec3f3ce6



## 延伸问题

:::details loader 和 plugin 的区别

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

:::



# 参考

[webpack多页面打包实践](https://juejin.cn/post/6844904074421207047)

[详细的 webpack4 多入口配置](https://segmentfault.com/a/1190000021555875)

