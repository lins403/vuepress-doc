# Webpack <Badge text="v5"/>

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
5. npm i webpack-dev-server -D



## 核心概念

> 本质上，**webpack** 是一个用于现代 JavaScript 应用程序的 *静态模块打包工具*。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 *bundles*，它们均为静态资源，用于展示你的内容。

- 入口(entry)
- 输出(output)
- loader
- 插件(plugin)
- 模式(mode): `'production'(默认) / 'development' / 'none'`

### loader

webpack 默认只能解析 JavaScript 和 JSON 文件，但支持使用 loader 对其他类型的文件(扩展名)进行预处理，从而这些静态资源转换为模块，然后就可以被作为模块依赖引用

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

- babel-loader



### plugins

插件可以改变webpack的工作方式，拓展webpack的能力

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');	// require插件
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```



## 配置

### 1) output

```js
module.exports = {
//...
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-bundle.[contenthash:8].js',
    chunkFilename: 'js/[name]-bundle.[contenthash:8].js',  // splitChunks提取公共js时的命名规则
    publicPath: '/',
  },
}
```



### 2) module

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



### 3) resolve

```js
resolve: {
  extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'], 	// ['.js', '.json', '.wasm']
    // import模块时就不带上后缀名，按顺序依次解析查找，找到时就跳过后面的
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '_a': path.resolve(__dirname, 'src/pages/main/api'),
    '_v': path.resolve(__dirname, 'src/pages/main/views'),
    '_ov': path.resolve(__dirname, 'src/pages/outside/views'),
  }
}
```



### 4) devServer

==webpack-dev-server==

- express
- ws

```sh
npm i webpack-dev-server -D

# package.json
{
	"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
	},
}
```

[@vue/cli-service > webpack-dev-server](https://github.com/vuejs/vue-cli/blob/967f948e1770f314a3d906c32d22d3909f71a04d/packages/%40vue/cli-service/lib/commands/serve.js#L183)

#### 重要配置

```js
module.exports = {
  //...
  externals: {
    // 防止import的依赖包被打包进bundle，而在运行时再去从<script>标签获取依赖，比如CDN
    jquery: 'jQuery',		// key: global variable（依赖包暴露的全局变量）
  },
  devServer: {
    static: {
      // 参考Express中static(root, [options])的配置
      directory: path.join(__dirname, 'public'),	// webpack4的contentBase，监听静态资源的目录(index.html所在位置)
      publicPath: '/assets',		// 告诉服务器在哪个 URL 上提供 static.directory 的内容（拦截资源路径，相当于directory的访问路径的前缀）
      watch: process.env.NODE_ENV === 'development',		// 文件更改时触发整个页面重新加载
    },
    compress: true,		// gzip compression
    port: 9000,
    open: true,		// 启动后打开浏览器
    // open: ['/login'],		// 启动后打开设置页面
    client: {
      overlay: true,		// 浏览器页面上显示错误
    },
    hot: true,		// 热更新
    devtool: 'cheap-eval-source-map',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: false,		// 默认是true时，request header中的host会被替换为target
      },
    },
  },
};
```



#### compress

`boolean = true`，启用 gzip compression

- gzip 能在用 TerserPlugin 已经压缩以后的结果上，再进行压缩，生成 `.gz` 文件
- nginx 有静态压缩和实时压缩(always)两种方式，如果 `gzip_static` 设置为 on 以后，检查本地是否有 precompressed files( `.gz` 文件)，如果有就直接作为压缩结果使用，而不再进行实时压缩

[webpack gzip 和 nginx gzip的区别](https://blog.csdn.net/sd4015700/article/details/118650050)



### 5) optimization

webpack5内置支持 `terser-webpack-plugin`

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: 'runtime',		// 为每个entry添加一个 只含有runtime 的额外chunk，也会被自动引入到index.html
      // 重复打包哈希值不变，可以充分利用浏览器缓存
    },
    // minimize: true,		// mode为production时自动启用(为development时不能生效？？)
    minimizer: [
      new TerserPlugin({ // 去掉console
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
        },
      }),
    ],
  }
}
```

#### splitChunks

通用分块策略(common chunk strategy)

> webpack 将根据以下条件自动拆分 chunks：
>
> - 新的 chunk 可以被共享，或者模块来自于 `node_modules` 文件夹
> - 新的 chunk <u>体积大于 20kb</u>（在进行 min+gz 之前的体积）
> - 当<u>按需加载 chunks 时</u>，并行请求的最大数量小于或等于 30
> - 当<u>加载初始化页面时</u>，并发请求的最大数量小于或等于 30
>
> 当尝试满足最后两个条件时，最好使用较大的 chunks。

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial' // 只打包最初依赖（initial dependent）的package
        },
        elementUI: {
          name: 'chunk-elementUI', // split elementUI into a single package
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  }
}
```



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



因为webpack-dev-server启动了一个服务器，所以在开发时，前端去请求真正的后台接口，是存在跨域问题的。webpack提供了跨域的解决方案，原理就是让服务器反向代理请求真正的接口

### webpack & HTTP/2

https://medium.com/webpack/webpack-http-2-7083ec3f3ce6



## 延伸问题

:::details loader 和 plugin 的区别

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

:::



# 参考

[webpack5 中文文档](https://webpack.docschina.org/)

[webpack多页面打包实践](https://juejin.cn/post/6844904074421207047)

[详细的 webpack4 多入口配置](https://segmentfault.com/a/1190000021555875)





https://www.valentinog.com/blog/webpack/

https://juejin.cn/post/6855129007785328653#heading-5

https://webpack.toobug.net/zh-cn/
