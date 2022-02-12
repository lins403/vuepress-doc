# CommonJS、AMD、CMD、UMD

## CommonJS

### 背景

2009 年，随着后端 JavaScript 技术的发展，人们提出了 CommonJS 的模块化规范，CommonJS 最初是服务于服务端的

### 语法

- 暴露模块：`module.exports = value ` 或 `exports.xxx = value`
- 引入模块：`require(xxx)` 或 `require('xxx.js')`
  - 无论一个模块在 require()中被引用多少次，模块永远是单例，只会加载一次
  - 模块第一次加载后会被缓存，后续加载会取得缓存的模块
  - 模块加载顺序由依赖图决定


```js
// 解构赋值
let { stat, exists, readfile } = require('fs');
```

一个简单的示例：在nodejs环境下执行：node index.js

```js
// index.js
var bar = require('./bar.js')
console.log('bar.x=', bar.x)	//6

// bar.js
var foo = require('./foo.js')
console.log(foo.x) //5
console.log(require('./foo.js').x) //5	//单例模式，只会加载一次
var x = foo.addX(1)
module.exports.x = x

// foo.js
var x = 5
var addX = function (value) {
  return value + x
}
module.exports.x = x
module.exports.addX = addX
```

- exports 变量

```js
// exports变量是导出的快捷方式，指向module.exports。这等同在每个模块头部，var exports = module.exports;
// exports 与 module.exports 不能在同一个模块内混用 

// 对外暴露一个单一的值，只能使用module.exports输出。
exports = function(x) {console.log(x)};    // ❎
module.exports = function (x){ console.log(x);};    // ✅
 module.exports = 'foo';	// ✅
```

- require 一个目录
  - require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，然后加载main字段指定的入口文件。
  - 如果package.json文件没有main字段，或者根本就没有package.json文件，则会加载该目录下的index.js文件或index.node文件。


```js
// 在目录中放置一个package.json文件，并且将入口文件写入main字段
{
  "license": "MIT",
  "main": "lib/element-ui.common.js",	//main属性对应CommonJS模块；module属性对应ES Module模块
  "name": "element-ui",
}
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
/*** CommonJS 依赖几个全局属性如 require 和 module.exports；将模块代码封装在函数闭包中，最终只提供一个文件，这样子就可以避免 CommonJS 代码在浏览器中执行时创建全局变量 ***/
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

1. 独立的 <mark>模块作用域</mark> ，不会污染全局作用域

2. <mark>同步</mark> 加载模块

3. 模块加载 (require) 的 <mark>缓存</mark>

   - 第一次加载某个模块时，Node会缓存该模块。
   - 以后再加载该模块，就直接从缓存取出该模块的`module.exports`属性。
   - 所有缓存的模块保存在`require.cache`之中。
   - 缓存只是根据 <u>绝对路径</u> 识别模块的

4. 模块的加载机制是，输入的是被输出的值的 <mark>拷贝</mark>，输出以后模块内的变化不会影响到输出的这个值

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
>
> > Node.js 使用了轻微修改版本的 CommonJS，因为 Node.js 主要在服务器环境下使用，所以不需要考虑网络延迟问题。

## AMD

### 背景

 CommonJS 在浏览器内并不适用。因为 `require()` 的返回是同步的，意味着有多个依赖的话需要一个一个依次下载，堵塞了 js 脚本的执行。

所以人们就在 CommonJS 的基础上定义了 [Asynchronous Module Definition (AMD)规范](https://github.com/amdjs/amdjs-api) (2011年)，使用了异步回调的语法来并行下载多个依赖项。

> CommonJS 以服务器端为目标环境，能够一次性把所有模块都加载到内存，而异步模块定义(AMD，Asynchronous Module Definition)的模块定义系统则以浏览器/客户端为目标执行环境，这需要考虑网络延迟的问题。

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

`SeaJS` 是淘宝团队提供的一个模块开发的 JS 框架。

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

为了统一 CommonJS 和 AMD 生态系统，通用模块定义(UMD，Universal Module Definition)规范应运而生。

UMD 可用于创建这两个系统都可以使用的模块代码。本质上，UMD 定义的模块会在启动时检测要使用哪个模块系统，然后进行适当配置，并把所有逻辑包装在一个立即调用的函数表达式(IIFE) 中。虽然这种组合并不完美，但在很多场景下足以实现两个生态的共存。

许多情况下，它使用 AMD 作为基础，并添加了特殊的外壳来处理 CommonJS 兼容性。[umd API 规范](https://github.com/umdjs/umd)

环境： 服务器环境和浏览器端

### 实现

```js
// https://cdn.jsdelivr.net/npm/vue@2.6.14
function(e, t) {
  "object" <mark> typeof exports && "undefined" != typeof module ? module.exports = t() : "function" </mark> typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
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



# 参考

[JavaScript 标准参考教程 > CommonJS规范](https://javascript.ruanyifeng.com/nodejs/module.html#)

[Node.js v14.18.0 文档](http://nodejs.cn/api-v14/modules.html)

[前端科普系列-CommonJS：不是前端却革命了前端](https://zhuanlan.zhihu.com/p/113009496)

[webpack模块化原理-commonjs](https://segmentfault.com/a/1190000010349749)