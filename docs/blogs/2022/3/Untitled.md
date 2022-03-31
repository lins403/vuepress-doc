# 首页优化

Chrome中Lighthouse生成报告

## CDN

loads the resources asynchronously without delaying page rendering.

```html
<head>
  <!-- 会影响页面渲染的css -->
  <link rel="stylesheet" href="<%= BASE_URL %>cdn/element-ui/2.15.1/theme-chalk/index.css">
  <!-- 优先级高的css 预加载preload -->
  <link rel="preload" as="style" href="<%= BASE_URL %>cdn/screen/media/index.css">
  <!-- 优先级低 异步加载，利用的是浏览器不支持print模式 -->
  <link rel="stylesheet" href="<%= BASE_URL %>cdn/animate/3.5.2/animate.css" media="print" onload="this.media='all'">
</head>
<body>
  <!-- 会影响页面加载的js -->
  <script src="<%= BASE_URL %>cdn/element-ui/2.15.1/index.js" charset="utf-8"></script>
  <!--首页/登录页加密相关 defer-->
  <script src="<%= BASE_URL %>util/aes.js" charset="utf-8" defer></script>
  <!--大屏可视化相关 async-->
  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=……" async></script>
</body>
```



## webpack

1. 首先安装webpack的可视化资源分析工具（Vue-cli内置了依赖）

   ```sh
   npm i webpack-bundle-analyzer -D
   ```

2. 然后在webpack的dev开发模式配置中，引入插件，代码如下：

   ```js
   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
   
   plugins: [
       new BundleAnalyzerPlugin()
   ]
   ```

   







webpack内置了compression用于压缩，通过设置 compress 为 true 开启gzip compression。但是nginx中还可以在设置zip压缩，如果该文件资源的响应头里显示有Content-Encoding: gzip，表示浏览器支持并且启用了Gzip压缩的资源

Vue-cli帮忙做了很多配置：

- `cache-loader` 会默认为 Vue/Babel/TypeScript 编译开启。文件会缓存在 `node_modules/.cache` 中——如果你遇到了编译方面的问题，记得先删掉缓存目录之后再试试看。
- `thread-loader` 会在多核 CPU 的机器上为 Babel/TypeScript 转译开启。
- terser-webpack-plugin
- webpack-bundle-analyzer



## CSS优化

[CSS performance optimization - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS)

```html
<link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'">
```

[The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)