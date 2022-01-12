# ES Modules

## 简介

AMD 和 CMD 是社区的开发者们制定的模块加载方案，并不是语言层面的标准。**从 ES6 开始，在语言标准的层面上，实现了模块化功能，而且实现得相当简单，完全可以取代 CommonJS 和 CMD、AMD 规范，成为浏览器和服务器通用的模块解决方案**。

ES6模块是编译时加载，在编译时就确定了依赖关系，而CommonJS和AMD只能在运行时确定

```javascript
// bar.js
console.log('bar.js')
import { message } from './foo.js'
console.log(message)

// foo.js
console.log('foo.js')
export const message = 'hello foo~'

// output:
// 因为`import`在静态解析阶段执行，所以它是一个模块之中最早执行的
foo.js
hello foo~
bar.js
```

除了静态加载带来的各种好处，ES6 模块还有以下好处。

- 不再需要`UMD`模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者`navigator`对象的属性。
- 不再需要对象作为命名空间（比如`Math`对象），未来这些功能可以通过模块提供。

## 语法

```javascript
import
export
// 只能用于模块最外层，便于静态分析，所以不能用在代码块中
// 或者说由于import是静态执行，所以不能使用需要运行才能得到结果的表达式和变量

export default    
// 一个模块只能用一次，对应的import不需要{}
// 本质上就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字

import()
// import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载
// 运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块
// 可以用于实现 按需加载、条件加载、动态路径(路径为表达式或变量)
```

```javascript
// import()返回一个 Promise 对象
// 类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。

const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
```

```javascript
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// ===
export default add;


// app.js
import { default as foo } from 'modules';
// ===
import foo from 'modules';
```

```js
// demo.js
export default function bar () {
    return 1;
};
export function foo () {
    return 2;
}

// index.js
import bar, {foo} from './demo';
bar();
foo();
```

## 特点

- <mark>编译时加载</mark>
  
  - 静态分析，编译时就能确定模块间的依赖关系
  - import 提升

- 自动采用严格模式

- 被导出的值是 <mark>引用</mark>，而非像commonjs那样的拷贝

```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib'
console.log(counter);    // 3
incCounter();
console.log(counter);    // 4
```

- `import`语句是 Singleton 模式

```js
import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';

// if(INSTANCE == null){ INSTANCE = new Singleton(); }
```

## 应用

#### 浏览器

```js
<script type="module" src="./main.js"></script>
// ... has been blocked by CORS policy: 
// Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
```

[Using ES6 modules in the browser](https://medium.com/ghostcoder/using-es6-modules-in-the-browser-5dce9ca9e911)【自用express未解决】

```shell
cd public
npm init
npm install express --save
touch server.js
node server.js
```

#### Node

- `.mjs`
- `"type": "module"`

#### Webpack

[在线调试](https://stackblitz.com/github/webpack/webpack.js.org/tree/master/examples/getting-started?terminal=)

```js
// "webpack": "^5.38.1", webpack-cli": "^4.7.2"

// m.js
'use strict';
export default function bar() {
  return 1;
}
export function foo() {
  return 2;
}


// index.js
'use strict';
import bar, { foo } from './m';
bar();
foo();


// webpack.config.js
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

```js
// 打包后的文件main.js
// 现在commonjs和esm混用的情况并没有额外的处理逻辑，都交由eval执行
// TODO: 还要确认一下线下的webpack环境
var __webpack_modules__ = ({
  "./src/index.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _m__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m */ \"./src/m.js\");\n// index.js\n\n\n(0,_m__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_m__WEBPACK_IMPORTED_MODULE_0__.foo)();\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/index.js?");}),
  "./src/m.js": //...
}),

// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {
  // ...
}

var __webpack_exports__ = __webpack_require__("./src/index.js");
```

### 兼容性

webpack 2 支持原生的 ES6 模块语法，意味着你无须额外引入 babel 这样的工具，就可以使用 `import` 和 `export`。

Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。

## ES Module 与 Commonjs

### 原理

```js
// commonjs
Resolution (解析) –> Loading (加载) –> Wrapping (私有化) –> Evaluation (执行) –> Caching (缓存)

// es modules
Construction (解析) -> Instantiation (实例化、建立链接) -> Evaluation (执行)
```

- CommonJS 模块输出的是一个值的拷贝，ES Modules 输出的是值的引用（所以不存在module变量？）
- import 在静态解析阶段执行，所以它是一个模块之中最早执行的
- ES Modules 的加载、解析和执行都是异步的，而 require() 的过程是同步的

```js
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// ES6模块
import { stat, exists, readFile } from 'fs';
```

### 混用

- 可以用 import() 来引用一个commonjs模块
- 不能通过 require() 来引用一个 ES6 模块，同样需要使用 import()

```js
// 使用 then() 来进行模块导入后的操作
import(“es6-modules.mjs”).then((module)=>{/*…*/}).catch((err)=>{/**…*/})
// 或者使用 async 函数
(async () => {
  await import('./es6-modules.mjs');
})();
```

webpack的兼容策略

```js
(function(module, __webpack_exports__, __webpack_require__) {
  // ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);
})
```

::: details 为什么ES模块比CommonJS更好?

> ES模块是官方标准，也是JavaScript语言明确的发展方向，而CommonJS模块是一种特殊的传统格式，在ES模块被提出之前做为暂时的解决方案。 ES模块允许进行静态分析，从而实现像 tree-shaking 的优化，并提供诸如循环引用和动态绑定等高级功能。

:::

#### 混用demo

```js
// events.mjs（只能是.mjs文件）
export const sleep = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval)
  })
}

// runtime.js
;(async () => {
// const module = await import('./event.mjs')
  const { sleep } = await import('./event.mjs')
  console.log('Do some thing, ' + new Date())
  await sleep(2000)
  console.log('Do other things, ' + new Date())
})()


> node runtime.js
```

## Tree-Shaking

TODO

# 参考

[ECMAScript 6 入门 > Module](https://es6.ruanyifeng.com/#docs/module)

[2020年我们可以在Node中使用ES Modules了吗](https://zhuanlan.zhihu.com/p/337796076)

[webpack模块化原理-ES module](https://segmentfault.com/a/1190000010955254)

[深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)

[webpack文档 > 模块方法](https://webpack.docschina.org/api/module-methods/)
