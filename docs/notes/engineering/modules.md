#  模块化



## 模块化发展

### 历史背景

Google 于2004年推出 Gmail 后，接口 XHR 也就是 AJAX 技术开始流行，方便与服务器通信以后， js 能做的功能越来越多，同时随着业务逐渐复杂， js文件也越来越大，也诞生了许多依赖库和插件。

要避免与依赖库的命名空间冲突（避免全局变量污染），要解决依赖库与依赖库之间的关系（依赖管理）

### 演变

1. 全局 function 模式

```js
function m1(){
  //...
}
function m2(){
  //...
}
```

2. namespace 模式

```js
let myModule = {
  data: 'www.baidu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}
myModule.data = 'other data' // 能直接修改模块内部的数据
myModule.foo() 		// output: foo() other data
```

3. IIFE模式：匿名函数自调用(闭包)

```js
// index.html文件
<script type="text/javascript" src="module.js"></script>
<script type="text/javascript">
	myModule.foo()
	myModule.bar()
	console.log(myModule.data) //undefined 不能访问模块内部数据
  myModule.data = 'xxxx' //不是修改的模块内部的data
  myModule.foo() //没有改变
</script>
```

```js
// module.js文件
(function(window, dependence) {
  let data = 'www.baidu.com'
  function foo() {
    console.log(`foo() ${data}`)
    dependence.otherFun()
  }
  function bar() {
    console.log(`bar() ${data}`)
  }
  // 暴露行为
  window.myModule = { foo, bar }
})(window, invokeModule)
```

- 避免命名冲突(减少命名空间污染)
- 更好的分离, 按需加载
- 更高复用性
- 高可维护性



### 实现

- 按照模块化规范封装模块，将这些模块组成一个复杂的应用（组成）
- 模块内部的变量和方法是私有的，要和其他模块通信的，需要指定暴露给外部（私有）
- 指定引入/导出方式，可以加载嵌套的依赖模块（引入/导出）
- 易于开发人员使用，且还要被有助于部署的优化工具所支持（打包工具）



### 模块化规范

1. 背景
2. 语法
3. 特点&原理

![](https://cdn.jsdelivr.net/gh/lins403/assetsSpace/vuepress/img/js_modules.png)

来源：<https://segmentfault.com/a/1190000040001687>



## CommonJS

### 背景

2009 年，随着后端 JavaScript 技术的发展，人们提出了 CommonJS 的模块化规范，CommonJS 最初是服务于服务端的

### 语法

- 暴露模块：`module.exports = value ` 或 `exports.xxx = value`
- 引入模块：`require(xxx)` 或 `require('xxx.js')`

```js
let { stat, exists, readfile } = require('fs');
```

```js
// foo.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;

// bar.js
var foo = require('./foo.js');
console.log(foo.x); // 5
// console.log(require('./foo.js').x); // 5
var x = foo.addX(1);
module.exports.x = x;

// index.js
var bar = require('bar.js')
console.log('bar.x=',bar.x)
```

- exports 变量

```js
// exports变量是导出的快捷方式，指向module.exports。
// 这等同在每个模块头部，var exports = module.exports;
// exports 与 module.exports 不能在同一个模块内混用 

// 对外暴露一个单一的值，只能使用module.exports输出。
exports = function(x) {console.log(x)};	// ❎
module.exports = function (x){ console.log(x);};	// ✅
```

- require 一个目录

```js
// 在目录中放置一个package.json文件，并且将入口文件写入main字段
{
  "license": "MIT",
  "main": "lib/element-ui.common.js",
  "name": "element-ui",
}
  
// require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，然后加载main字段指定的入口文件。
// 如果package.json文件没有main字段，或者根本就没有package.json文件，则会加载该目录下的index.js文件或index.node文件。
```

### 原理

#### module & require

Node内部提供一个`Module`构造函数，所有模块都是`Module`的实例。

```js
function Module(id) {
  this.id = id;
  this.exports = {};
  // this.children = 
  // this.filename = 
  // this.loaded = 
```

```js
// require > load > compile
Module.prototype.require = function(id){
  return Module._load(id, this)  
}

Module._load = function(request, parent, isMain) {
  // 1. 检查 Module._cache，是否缓存之中有指定模块
  // 2. 如果缓存之中没有，就创建一个新的Module实例
  const module = cachedModule || new Module(filename, parent);
  // 3. 将它保存到缓存
  // 4. 使用 module.load() 加载指定的模块文件，
  //    读取文件内容之后，使用 module.compile() 执行文件代码
  // 5. 如果加载/解析过程报错，就从缓存删除该模块
  // 6. 返回该模块的 module.exports
};

Module.prototype.load = function(filename) {
  // ...
  Module._extensions[extension](this, filename);
  this.loaded = true;
  // ...
}

Module._extensions['.js'] = function(module, filename) {
  // ...
  module._compile(content, filename); 
}

Module.prototype._compile = function(content, filename) {
  // 1. 生成一个require函数，指向module.require
  // 2. 加载其他辅助方法到require
  // 3. 将文件内容放到一个函数之中，该函数可调用 require
  // 4. 执行该函数
  result = ReflectApply(compiledWrapper, thisValue,
                          [exports, require, module, filename, dirname]);
  return result
};
```

详细源码：[node/lib/internal/modules/cjs/loader.js](https://github.com/nodejs/node/blob/36e2ffe6dc379043be96ebfd889ccd1a3e38aa84/lib/internal/modules/cjs/loader.js#L991)

#### 浏览器的实现—webpack

在这之前，需要使用全局作用域的 `script` ( the global scope, a "shared space" among all scripts )

**commonjs**

```js
// 加强版 IIFE 闭包
(function(module, exports, require) {
  require(module)
  exports.xxx
})(module, module.exports, require)
```

> 知道这个原理后，就很容易把符合 CommonJS 模块规范的项目代码，转化为浏览器支持的代码。很多工具都是这么实现的，从入口模块开始，把所有依赖的模块都放到各自的函数中，把所有模块打包成一个能在浏览器中运行的 js 文件。譬如 Browserify 、webpack 等等。
>
> 我们使用 webpack 构建时，把各个模块的文件内容按照如下格式打包到一个 js 文件中，因为它是一个立即执行的匿名函数，所以可以在浏览器直接运行。

```js{19-20}
// webpack 打包后的大致核心代码 bundle.js
// IIFE，立即执行然后自动加载入口模块
/************************************************************************/
(function(modules) {
  // 1、模块缓存对象
  var installedModules = {};
  // 2、webpack实现的require
  function __webpack_require__(moduleId) {
      // 3、判断是否已缓存模块
      if(installedModules[moduleId]) {
          return installedModules[moduleId].exports;
      }
      // 4、缓存模块
      var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
      };
      // 5、调用模块函数
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      // 6、标记模块为已加载
      module.l = true;
      // 7、返回module.exports
      return module.exports;
  }
  // 8、require第一个模块
  return __webpack_require__(__webpack_require__.s = 0);
})
/************************************************************************/
([
/* 0 */
function (module, exports, __webpack_require__) {
  "use strict";
  /* 模块index.js的代码 */
  var bar = __webpack_require__(1)
  console.log('bar.x=',bar.x)
},
/* 1 */
function (module, exports, __webpack_require__) {
  // exports.x = __webpack_require__(2).x
    /* 模块bar.js的代码 */
},
/* 2 */
function (module, exports, __webpack_require__) {
    /* 模块foo.js的代码 */
}
]);

<script type="text/javascript" src="js/dist/bundle.js"></script>
```

webpack 相当于去 hack (模拟) 了commonjs 的功能



### 特点

1. 独立的 ==模块作用域== ，不会污染全局作用域
2. ==同步== 加载模块

4. 模块加载 (require) 的 ==缓存==

	- 第一次加载某个模块时，Node会缓存该模块。
	- 以后再加载该模块，就直接从缓存取出该模块的`module.exports`属性。
	- 所有缓存的模块保存在`require.cache`之中。
	- 缓存只是根据 <u>绝对路径</u> 识别模块的

5. 模块的加载机制是，输入的是被输出的值的 ==拷贝==，输出以后模块内的变化不会影响到输出的这个值

```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
// counter输出以后，lib.js模块内部的变化就影响不到counter了。
```

5. 文件查找机制

```js
// 如果 '/home/ry/projects/foo.js' 处的文件调用 require('bar.js')
// 则 Node.js 将按以下顺序查找以下位置
1. /home/ry/projects/node_modules/bar.js
2. /home/ry/node_modules/bar.js
3. /home/node_modules/bar.js
4. /node_modules/bar.js
```



### 兼容性

在2013年5月，npm的作者宣布Node.js已经废弃了CommonJS，Node.js核心开发者应避免使用它 [wiki/CommonJS]。

> 1. 一个是因为 Node.js 本身也不是完全采用 CommonJS 的规范，而当时是决定不再跟随 CommonJS 的发展而发展了。
> 2. 二来就是 Node.js 也在逐步用 ES6 Module 替代 CommonJS。（ v13.2.0 起开始正式支持）



## AMD

### 背景

 CommonJS 在浏览器内并不适用。因为 `require()` 的返回是同步的，意味着有多个依赖的话需要一个一个依次下载，堵塞了 js 脚本的执行。

所以人们就在 CommonJS 的基础上定义了 [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api) 规范(2011年)，使用了异步回调的语法来并行下载多个依赖项。

AMD 规范比 CommonJS 规范在浏览器端实现要来着早。现在也被淘汰了。

### 语法

- 暴露模块

```js
// 定义没有依赖的模块
define(function(){
   return {
     // ...
   }
})

// 定义有依赖的模块
// plus.js
define(["./foo", "./bar"], function(foo, bar) {
  return {
    a: 1,
    add: function() {
      bar.otherFun()
      return a + foo.x
    }
  }
});
```

- 引入模块

```js
// entry.js
require(['module1', 'module2'], function(m1, m2){
   // ...
})

// require() 不需要导出东西，因此回调函数中不需要return值，
// 也无法作为被依赖项被其他文件导入，因此一般用于入口文件.
<script src="js/require.js" data-main="js/entry"></script>
```



## CMD

CMD (Common Module Definition) ---是 SeaJS 在推广过程中对模块定义的规范化产出，是一个同步模块定义。

CMD 是 SeaJS 的一个标准，SeaJS 是 CMD 概念的一个实现。

SeaJS 是淘宝团队提供的一个模块开发的 JS 框架。

### 特点

CMD 是 AMD 在基础上改进的一种规范，和 AMD 不同在于依赖模块的执行机制不同，CMD 是就近依赖，而 AMD 是前置依赖。所以模块代码就更<u>像 commonjs 同步形式的代码书写风格</u>.

依赖 SPM 打包，模块的加载逻辑偏重。

**环境：** 浏览器环境

### 语法

```js
// 所有模块都通过 define 来定义
// 通过 require 引入依赖（就近依赖，而非AMD那般前置依赖）

// main.js
define(function(require, exports, module) {
  var moduleA = require("./module.js");
  alert(moduleA.a); // 打印出：hello world
});
// module.js
define(function(require, exports, module) {
  exports.a = "hello world";
});

<script
  data-main="main"
  src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.js"
></script>
```



## UMD

UMD (Universal Module Definition)

许多情况下，它使用 AMD 作为基础，并添加了特殊的外壳来处理 CommonJS 兼容性。[umd](https://github.com/umdjs/umd)

**环境：** 服务器环境和浏览器端

### 实现

```js
// https://cdn.jsdelivr.net/npm/vue@2.6.14
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
} (this,
function() {
  // ...
});
/************************************************************************/
// CommonJS > AMD > window/global/self
if (("object" == typeof exports) && ("undefined" != typeof module))
  module.exports = t()
else 
  if ("function" == typeof define && define.amd)
    define(t))
  else
    (e = e || self).Vue = t()
```



## ES Module

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

### 语法

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

### 特点

- 编译时加载
  - 静态分析，编译时就能确定模块间的依赖关系
  - import 提升

- 自动采用严格模式
- 被导出的值是引用，而非像commonjs那样的拷贝

```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib'
console.log(counter);	// 3
incCounter();
console.log(counter);	// 4
```

- `import`语句是 Singleton 模式

```js
import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';

// if(INSTANCE == null){ INSTANCE = new Singleton(); }
```



### 应用

#### 浏览器

```js
<script type="module" src="./main.js"></script>
// ... has been blocked by CORS policy: 
// Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
// TODO: express, Babel, webpack
```

[Using ES6 modules in the browser](https://medium.com/ghostcoder/using-es6-modules-in-the-browser-5dce9ca9e911)

#### Node

- `.mjs`
- `"type": "module"`

#### Webpack



#### 兼容性



## ES Module 与 Commonjs

### 原理

```js
// commonjs
Resolution (解析) –> Loading (加载) –> Wrapping (私有化) –> Evaluation (执行) –> Caching (缓存)

// es modules
Construction (解析) -> Instantiation (实例化、建立链接) -> Evaluation (执行)
```

- CommonJS 模块输出的是一个值的拷贝，ES Modules 输出的是值的引用
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



# 补充

具体用法参考：[Chapter 3. Modularizing and Managing JavaScript](https://www.oreilly.com/library/view/modern-javascript/9781491971420/ch03.html)

> Loading Scripts with a Script Loader
>
> Loading Scripts Asynchronously the HTML5 Way
>
> Converting Your JavaScript to **AMD and RequireJS**
>
> Using **RequireJS** with jQuery or Another Library
>
> Loading and Using **Dojo** Modules （Dojo与AMD兼容，却不与RequireJS兼容）
>
> ---
>
> Installing and Maintaining Node Modules with **npm**
>
> Searching for a Specific Node Module via npm
>
> Converting Your Library into a Node Module
>
> Taking Your Code Across **All Module Environments** (Will work with RequireJS, Node, as a plain script, and CommonJS in the browser )
>
> Creating an Installable Node Module (*package.json*)
>
> Packaging and Managing Your Client-Side Dependencies with **Bower** (类似于 npm 的包管理器，已经停止维护)
>
> Compiling Node.js Modules for Use in the Browser with **Browserify**
>
> **Unit Testing** Your Node Modules
>
> Running Tasks with **Grunt**



script 标签中的 `defer` 和 `async` 属性

- 浏览器都不会被阻塞，都是“在后台”加载脚本，然后继续处理 HTML，构建 DOM
- `async` 意味着脚本是完全独立的，脚本会在后台加载，并在加载就绪时运行。DOM 和其他脚本不会等待它们，它们也不会等待其它的东西。
- `defer` 仅适用于外部脚本，等 DOM 构建完成后，脚本才会执行，但在 `DOMContentLoaded` 事件之前执行。

# 参考

[Webpack 4 和单页应用入门](https://juejin.cn/post/6844903650939109384)

[前端模块化详解(完整版)](https://juejin.cn/post/6844903744518389768)

---

[JavaScript 标准参考教程 > CommonJS规范](https://javascript.ruanyifeng.com/nodejs/module.html#)

[Node.js v14.18.0 文档](http://nodejs.cn/api-v14/modules.html)

[前端科普系列-CommonJS：不是前端却革命了前端](https://zhuanlan.zhihu.com/p/113009496)

[webpack模块化原理-commonjs](https://segmentfault.com/a/1190000010349749)

---

[ECMAScript 6 入门 > Module](https://es6.ruanyifeng.com/#docs/module)

[2020年我们可以在Node中使用ES Modules了吗](https://zhuanlan.zhihu.com/p/337796076)

[webpack模块化原理-ES module](https://segmentfault.com/a/1190000010955254)





[前端科普系列-Babel：把 ES6 送上天的通天塔](https://zhuanlan.zhihu.com/p/129089156)

[深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)







```sh
cd public
npm init
npm install express --save
touch server.js
node server.js
```

