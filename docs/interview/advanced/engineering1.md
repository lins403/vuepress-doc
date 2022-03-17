# 前端工程化

## Webpack

### 优化

 build --report 生成打包结果分析报告，Chrome中可以使用Lighthouse生成网站分析报告，以及性能和内存的分析工具

alias名称、devServer代理、svg配置loader、externals配置cdn、config.optimization.splitChunks

【首页加载速度优化】最有效的是压缩文件，webpack中给生产环境默认启用了tree-shaking、terser代码压缩、compression压缩文件，经过webpack的压缩以后，nginx中还可以设置压缩，这个效果最明显。然后分割代码、使用路由懒加载；拆分打包构建后的bundle文件，将大的chunk拆分 (config.optimization.splitChunks)；图片懒加载 (vue-lazyload)；外部资源通过async和defer设置成异步加载而不影响DOM解析，也可以给资源使用preload和prefetch属性。首页白屏时间久还可以使用骨架图，尤其是移动端，SSR首页渲染也可以。剩余的是业务代码上的优化，例如图片懒加载、减少重排重绘。

【打包构建优化】loader层面上，cache-loader缓存编译结果，thread-loader启用**多进程**进行编译。插件层面上，terser压缩代码、mini-css那个插件压缩css、compression压缩文件。使用cdn的方式，让Webpack不打包这些资源，然后在index.html中配置async和defer属性，让资源异步加载而不会阻塞页面解析；

【我的分包策略】拆分代码依赖的第三方的 library 或 "vendor" 代码，比如node_modules单独打包成一个chunk，还可以将其中例如elementUI、echarts这类比较大的依赖模块，如果没有cdn的方式，也单独打包成chunk，优先级设置的比node_modules高一些。项目的通用组件components也拆分成一个chunk。然后就是路由懒加载方式（es6的import或者webpack的require方法），将异步组件打包成chunk，可以设置webpackChunkName。最后就是webpack自己默认的分包策略，符合一定条件也会自行拆分chunk。

【业务代码优化】减少重排重绘（DocumentFragment、css样式opacity、transform等等）、图片懒加载、图片切片比如背景图、雪碧图等等，css不要使用import，使用link方式然后放在head中，js放到body内的底部；优化DOM交互

### 构建流程

webpack的构建流程包括初始化`compile`对象、`make`编译模块、`build`构建模块依赖关系、`seal`组装chunk输出文件、`emit`输出到output，执行完这些阶段就完成了构建过程。

1. 初始化参数：解析webpack配置，根据shell传入参数和webpack.config.js配置文件的参数，形成最后的配置结果
2. 开始编译：将第一步初始化得到的参数用于初始化创建compiler对象，注册所有配置的插件（插件内部使用的就是compiler对象），插件监听webpack构建周期的事件节点，做出相应的逻辑处理，然后执行run方法开始编译（构建模块、收集依赖、输出文件）。
2. 确定入口：通过打包入口entry (Vue-cli项目是src/main.js) 开始解析代码。利用babel的解析器将js源码解析成AST，遍历AST节点，收集模块依赖，同时根据babel-core以及presets，将ES6的代码转换成ES5，实现代码的polyfill。
2. 编译模块：解析的过程中，将文件类型通过rule规则的判断，使用对应的loader对文件进行转换。递归解析和编译模块，直到依赖图所有对应的模块文件都转换完成。
2. 输出：将loader转换以后的模块，根据模块之间的依赖关系，组装成一个个包含多个模块的代码块chunk，然后将chunk转换成一个单独的文件，输出到文件系统。



### loader

`vue-loader`

`file-loader`：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件（然后代码中就能引用使用相对路径的客户端本地资源，而不用使用http请求资源。例如图片的src和css的url中，相对路径可以在webpack配置alias别名，src或者js中也可以使用require引入资源作为一个模块被解析）

`url-loader`：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去

`source-map-loader`：加载额外的 Source Map ⽂件，以⽅便断点调试

`image-loader`：加载并且压缩图⽚⽂件

`babel-loader`：把 ES6 转换成 ES5

`css-loader`：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性

`style-loader`：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。

`eslint-loader`：通过 ESLint 检查 JavaScript 代码

### Plugin

- **`html-webpack-plugin`** 将css文件和js文件自动注入到HTML文件中（打包后的bundle）
  - 因为 index 文件被用作模板，所以你可以使用 lodash template 语法插入内容

- **`terser-webpack-plugin`**  压缩代码，还可以去掉console和debug信息，webpack5开始内置支持
- **`mini-css-extract-plugin`**  从js文件中提取css代码到单独的文件中，对css代码进行代码压缩等（因为有时我们会把css给import进js文件）
- **`@vue/preload-webpack-plugin`** 给资源的link添加Preload和Prefetch
  - `<link rel="preload">`是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。会自动给初始化渲染需要的文件加上preload（预加载）
  - `<link rel="prefetch">`是一种 resource hint，用来告诉浏览器在<u>页面加载完成后</u>，利用空闲时间提前获取用户未来可能会访问的内容。通过路由懒加载splitchunks方式生成的css和js都会被自动加上prefetch（预获取，类似于script标签的async，会比较消耗带宽）。

### 原理

【HMR热替换】webpack的devServer其实是开启了一个express的server，它会与浏览器建立websocket的连接，文件变化时webpack重新编译完成以后，通过socket消息通知浏览器更新。webpack通过中间件webpack-dev-middleware，将生成文件发送给server，通过对比生成文件的hash值更新对应模块，而不用刷新整个页面

【manifest】webpack 的 runtime 和 manifest，管理所有模块的交互。

【hash码】三种计算方式，`hash`、`chunkhash`、`contenthash`

### 其它

- 开发环境和生产环境共用的配置，借助`webpack-merge`插件，可以merge到开发环境或生产环境，从而减少重复配置。
- 引入了Node环境变量`process.env.NODE_ENV`，可以根据传入的环境参数，动态更改配置。
- devServer默认启用<u>模块热替换</u> (hot module replacement 或 HMR)，它允许在运行时更新所有类型的模块，而无需完全刷新。



经过`webpack`打包出来的是一个匿名闭包函数（`IIFE`），第一个参数`modules`是一个数组，其中每一项是一个模块初始化函数。参数`__webpack_require__`用来加载模块，返回`module.exports`。通过`WEBPACK_REQUIRE_METHOD(0)`启动程序

## 代码性能提升





# 参考

[webpack 十连问你能接住几题](https://juejin.cn/post/7002839760792190989)