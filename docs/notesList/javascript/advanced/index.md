# 进阶

## 私有变量

私有变量包括函数参数、局部变量，以及函数内部定义的其他函数。

特权方法 (privileged method) 是能够访问函数私有变量(及私有函数)的公有方法，实现方式有几种：

1. 闭包：所有私有变量和私有函数都定义在**构造函数**中，再创建一个能够访问这些私有成员的特权方法
   - 构建开销相对会大一点，每个实例都会重新创建一遍新方法和变量
2. IIFE：通过使用**私有作用域**定义私有变量和函数来实现，特权方法定义在prototype原型上，被实例共享
   - 本质上是基于原型模式自定义类型，然后使用IIFE进行封装这个类和私有变量，私有变量就只能在这个IIFE的作用域内（的类）被访问和操作）
3. 也可以通过模块模式或模块增强模式，返回一个单例对象，在单例对象上实现
4. 最简单的方式是私有变量名的命名约定，例如在变量名前加上`_` ；更多实现还有使用ES6中WeakMap、Symbol、Proxy的方式

[[译] JavaScript 中的私有变量](https://juejin.cn/post/6844903565769572366)

> 使用闭包和私有变量会导致作用域链变长，作用域链越长，则查找变量所需的时间也越多。

例子：在私有作用域中的实现

```js
const Example = (function() {
  var _private = '';

  class Example {
    constructor() {
      _private = 'private';
    }
    getName() {
      return _private;
    }
  }
  
  return Example;
})();

var ex = new Example();
console.log(ex.getName()); // private
console.log(ex._private); // undefined
```

### 高性能脚本工具

### WebAssembly

WebAssembly是一种新的编码方式，可以在现代的网络浏览器中运行 － 它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如C / C ++等语言提供一个编译目标，以便它们可以在Web上运行。它也被设计为可以与JavaScript共存，允许两者一起工作。

WebAssembly 项目(简称 Wasm)正在实现一门语言，该语言可以在多处执行(可移植)并以二进制语言形式存在，可以作为多种低级语言(如 C++和 Rust)的编译目标。WebAssembly 代码在浏览器的一个与 JavaScript 完全独立的虚拟机中运行，与各种浏览器 API 交互的能力极为有限。它可以与 JavaScript 和 DOM 以间接、受限的方式交互，但其更大的目标是创造一门可以在 Web 浏览器中(以及在任何地方) 运行的速度极快的语言，并提供接近原生的性能和硬件加速。WebAssembly 系列规范在 2019 年 12 月 5 日已成为 W3C 的正式推荐标准，是浏览器技术中非常值得期待的领域。

### asm.js

asm.js 的理论基础是 JavaScript 编译后比硬编码 JavaScript 运行得更快。asm.js 是 JavaScript 的子集， 可以作为低级语言的编译目标，并在常规浏览器或 Node.js 引擎中执行。现代 JavaScript 引擎在运行时推 断类型，而 asm.js 代码通过使用词法提示将这些类型推断(及其相关操作)的计算大大降低。asm.js 广 泛使用了定型数组(TypedArray)，相比常规的 JavaScript 数组能够显著提升性能。asm.js 没有 WebAssembly 快，但通过编译显著提升了性能。
