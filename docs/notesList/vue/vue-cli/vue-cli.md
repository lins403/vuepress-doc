# VueCli

## 全局配置

`~/.vuerc`

```bash
vue config
```

## vue.config.js

class Service: [vue-cli/Service.js at v4 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/v4/packages/%40vue/cli-service/lib/Service.js)

- `this.projectOptions = defaultsDeep(userOptions, defaults())`
- defaultOptions: [vue-cli/options.js at v4 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/v4/packages/@vue/cli-service/lib/options.js)
- userOptions: `./vue.config.js` , `./vue.config.cjs`

```js
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
}
```

### publicPath

- Default: `'/'`
- webpack > `output.publicPath`

### outputDir

- Default: `'dist'`

### assetsDir

- Default: `''`

静态资源存放路径，放置生成的静态资源 (js、css、img、fonts) 的 (相对于 `outputDir` 的) 目录。



## 打包后的文件

### TL;DR:

> build打包以后，dist/static/js 下主要包含以下3个类型的js文件
>
> 1. app.js 是项目的入口js文件，会在第一次及SPA应用时加载
> 2. chunk-vendors.js 是第三方库也就是 node_modules 打包得到的
> 3. split出来的chunk文件
>
> > chunk文件是经过webpack整合，多个module的合集。通过使用Promise、定时器等策略，以及浏览器的 preload 和 prefetch 属性，实现通过 JSONP 模式懒加载路由对应的 chunk 文件。chunk文件会被缓存，防止重复加载。

### index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <title>hello-world</title>
    <link href="/js/about.48a4e6a2.js" rel="prefetch" />
    <link href="/css/app.2a78f6ae.css" rel="preload" as="style" />
    <link href="/js/app.18f0495a.js" rel="preload" as="script" />
    <link href="/js/chunk-vendors.de8704c6.js" rel="preload" as="script" />
    <link href="/css/app.2a78f6ae.css" rel="stylesheet" />
  </head>
  <body>
    <noscript><strong>We're sorry but hello-world doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
    <div id="app"></div>
    <script src="/js/chunk-vendors.de8704c6.js"></script>
    <script src="/js/app.18f0495a.js"></script>
  </body>
</html>

```

`<link>` types

- `rel=preload`：告诉浏览器这个资源要给我提前加载。
- `rel=prefetch`：告诉浏览器这个资源空闲的时候给我加载一下。(因为它可能被用户加载，即懒加载)

`as` — Potential destination for a preload request 

- `as=script`：告诉浏览器这个资源是script，提升加载的优先级。

### chunk-vendors.js

`node_modules` 文件打包结果

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-vendors"],{
	"0049":(function(module, exports, __webpack_require__) {
    "use strict";
    //......
	}),
  "00ee":(function(module, exports, __webpack_require__) {
  	//......
	}),
  //......
}]);
```

### app.js

项目的入口文件，包含一个自执行函数，使用 JSONP 模式加载chunk

```js
(function(modules) { 
	// install a JSONP callback for chunk loading
	function webpackJsonpCallback(data) {
		// ...
	};
	function checkDeferredModules() {
		// ...
	};
	// ...
	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
	// ...
}({
  0:(function(module, exports, __webpack_require__) {
  module.exports = __webpack_require__("56d7");
  })
  // ...
}))
```

调用`window["webpackJsonp"]`的`push`方法都会执行`webpackJsonpCallback`函数

- `webpackJsonpCallback`
  - `module`是指任意的代码块，`chunk`是webpack处理过程中被分组的module的合集
  - `modules`缓存所有的module（代码块），调用`modules`中的module就可以执行里面的代码。
  - `installedChunks`缓存所有chunk的加载状态，如果`installedChunks[chunk]`为0，代表chunk已经加载完毕。
  - `deferredModules`中每项也是一个数组，例如`[module,chunk1,chunk2,chunk3]`,其作用是如果要执行module，必须在chunk1、chunk2、chunk3都加载完毕后才能执行。
- `checkDeferredModules`
- `__webpack_require__` 调用模块
  - `modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);`
- `webpackAsyncContext`
  - 判断是否有对应模块，没有则抛出抛出`Cannot find module …`，有则执行`__webpack_require__.e`方法
- **`webpack_require.e` 方法是实现懒加载的核心**（Promise、setTimeout）
  1. 使用JSONP模式加载路由对应的js文件，也可以称为chunk。
  2. 设置chunk加载的三种状态并缓存在`installedChunks`中，防止chunk重复加载。
  3. 处理chunk加载超时和加载出错的场景。
- `installedChunks[chunkId]` 三种状态
  - 0 - 该chunk已经加载完毕
  - undefined - 该chunk加载失败、加载超时、从未加载过
  - Promise - 该chunk正在加载

### about.js

```js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{
	"f820":(function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
    // ...
    // 把里面的module缓存到app.js里面的modules中
  })
}]);
```

# 参考

[『Webpack系列』—— 路由懒加载的原理 - 掘金](https://juejin.cn/post/6844904180285456398)
