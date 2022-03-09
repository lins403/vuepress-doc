(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{502:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[t._v("#")]),t._v(" 进阶")]),t._v(" "),a("h2",{attrs:{id:"私有变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有变量"}},[t._v("#")]),t._v(" 私有变量")]),t._v(" "),a("p",[t._v("私有变量包括函数参数、局部变量，以及函数内部定义的其他函数。")]),t._v(" "),a("p",[t._v("特权方法 (privileged method) 是能够访问函数私有变量(及私有函数)的公有方法，实现方式有几种：")]),t._v(" "),a("ol",[a("li",[t._v("闭包：所有私有变量和私有函数都定义在"),a("strong",[t._v("构造函数")]),t._v("中，再创建一个能够访问这些私有成员的特权方法\n"),a("ul",[a("li",[t._v("构建开销相对会大一点，每个实例都会重新创建一遍新方法和变量")])])]),t._v(" "),a("li",[t._v("IIFE：通过使用"),a("strong",[t._v("私有作用域")]),t._v("定义私有变量和函数来实现，特权方法定义在prototype原型上，被实例共享\n"),a("ul",[a("li",[t._v("本质上是基于原型模式自定义类型，然后使用IIFE进行封装这个类和私有变量，私有变量就只能在这个IIFE的作用域内（的类）被访问和操作）")])])]),t._v(" "),a("li",[t._v("也可以通过模块模式或模块增强模式，返回一个单例对象，在单例对象上实现")]),t._v(" "),a("li",[t._v("最简单的方式是私有变量名的命名约定，例如在变量名前加上"),a("code",[t._v("_")]),t._v(" ；更多实现还有使用ES6中WeakMap、Symbol、Proxy的方式")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903565769572366",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] JavaScript 中的私有变量"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("使用闭包和私有变量会导致作用域链变长，作用域链越长，则查找变量所需的时间也越多。")])]),t._v(" "),a("p",[t._v("例子：在私有作用域中的实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Example "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _private "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      _private "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'private'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _private"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// private")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_private"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("h3",{attrs:{id:"高性能脚本工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能脚本工具"}},[t._v("#")]),t._v(" 高性能脚本工具")]),t._v(" "),a("h3",{attrs:{id:"webassembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[t._v("#")]),t._v(" WebAssembly")]),t._v(" "),a("p",[t._v("WebAssembly 项目(简称 Wasm)正在实现一门语言，该语言可以在多处执行(可移植)并以二进 制语言形式存在，可以作为多种低级语言(如 C++和 Rust)的编译目标。WebAssembly 代码在浏览器的 一个与 JavaScript 完全独立的虚拟机中运行，与各种浏览器 API 交互的能力极为有限。它可以与 JavaScript 和 DOM 以间接、受限的方式交互，但其更大的目标是创造一门可以在 Web 浏览器中(以及在任何地方) 运行的速度极快的语言，并提供接近原生的性能和硬件加速。WebAssembly 系列规范在 2019 年 12 月 5 日已成为 W3C 的正式推荐标准，是浏览器技术中非常值得期待的领域。")]),t._v(" "),a("h3",{attrs:{id:"asm-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asm-js"}},[t._v("#")]),t._v(" asm.js")]),t._v(" "),a("p",[t._v("asm.js 的理论基础是 JavaScript 编译后比硬编码 JavaScript 运行得更快。asm.js 是 JavaScript 的子集， 可以作为低级语言的编译目标，并在常规浏览器或 Node.js 引擎中执行。现代 JavaScript 引擎在运行时推 断类型，而 asm.js 代码通过使用词法提示将这些类型推断(及其相关操作)的计算大大降低。asm.js 广 泛使用了定型数组(TypedArray)，相比常规的 JavaScript 数组能够显著提升性能。asm.js 没有 WebAssembly 快，但通过编译显著提升了性能。")])])}),[],!1,null,null,null);s.default=e.exports}}]);