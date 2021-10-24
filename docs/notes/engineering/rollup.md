# rollup.js

## demo

 [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib)

- 生成 library，适用于打包开源 package
- 打包文件包含 `*.cjs.js` ,  `*.esm.js` ,  `*.umd.js` 等三种模块规范文件

[rollup-starter-app](https://github.com/rollup/rollup-starter-app) 

- 创建 web application
- 热更新、打包



## Tree-shaking

- 使用 ES6 模块时，无需导入整个对象，可以通过 import 按需加载
- Rollup 会静态分析代码中的 import，并将排除任何未实际使用的代码
- Rollup 只引入最基本最精简代码，所以可以生成轻量、快速，以及低复杂度的 library 和应用程序。



## 兼容性



## 与webpack比较

> Rollup 已被许多主流的 JavaScript 库使用，也可用于构建绝大多数应用程序。但是 Rollup 还不支持一些特定的高级功能，尤其是用在构建一些应用程序的时候，特别是代码拆分和运行时态的动态导入 [dynamic imports at runtime](https://github.com/tc39/proposal-dynamic-import). 如果你的项目中更需要这些功能，那使用 [Webpack](https://webpack.js.org/)可能更符合你的需求。





# 参考

<https://www.rollupjs.com/>

