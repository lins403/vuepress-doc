(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{479:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"执行上下文和作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文和作用域"}},[t._v("#")]),t._v(" 执行上下文和作用域")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("任何变量都存在于某个执行上下文中(也称为作用域)，这个上下文(作用域)决定了变量的生命周期，以及它们可以访问代码的哪些部分")])]),t._v(" "),s("li",[s("p",[t._v("代码执行流每进入一个新上下文，都会创建一个作用域链，用于搜索变量和函数")])])])]),t._v(" "),s("h2",{attrs:{id:"预编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预编译"}},[t._v("#")]),t._v(" 预编译")]),t._v(" "),s("p",[t._v("词法分析「分词」>>> 语法分析「转AST，检查语法错误」>>> 预编译「分配内存」>>> 解释执行")]),t._v(" "),s("p",[t._v("预编译阶段")]),t._v(" "),s("ul",[s("li",[t._v("我理解应该是代码分析阶段，JavaScript是一种解释性脚本语言，代码不进行预编译")]),t._v(" "),s("li",[t._v("创建变量对象 » 创建作用域链 » 确定this指向")])]),t._v(" "),s("p",[t._v("执行阶段")]),t._v(" "),s("ul",[s("li",[t._v("解析变量标识符（沿着作用域链，变量赋值） » 函数引用 » 执行其他代码 » 执行结束，内存回收")])]),t._v(" "),s("h2",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),s("p",[t._v("演示工具："),s("a",{attrs:{href:"https://ui.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A tool for visualizing Execution Context, Hoisting, Closures, and Scopes in JavaScript."),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意义"}},[t._v("#")]),t._v(" 意义")]),t._v(" "),s("p",[t._v("执行上下文就是ECMA规范里面提到的一个抽象概念，仅仅只是一个抽象模型，具体如何实现是v8引擎内部做的事")]),t._v(" "),s("p",[t._v("变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为")]),t._v(" "),s("ul",[s("li",[t._v("确定"),s("mark",[t._v("作用域")]),t._v("，区分代码执行时，全局和函数执行所处的不同作用域")]),t._v(" "),s("li",[t._v("确定"),s("mark",[t._v("生命周期")]),t._v("，变量的执行上下文用于确定什么时候释放内存")]),t._v(" "),s("li",[t._v("（函数的）执行上下文包含了跟踪其关联代码的执行进度所需的任何状态，JS引擎可以添加信息（变量对象/环境记录）来"),s("mark",[t._v("跟踪执行进度")])]),t._v(" "),s("li",[t._v("执行上下文对后续理解 js内存、垃圾回收、闭包等具有深刻意义，它可以帮助我们在不需要很了解基础底层情况下去分析内存，执行过程")])]),t._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GlobalExecutionContext、FunctionExecutionContext（、EvalExecutionContext）")])]),t._v(" "),s("li",[s("p",[t._v("ThisBinding、LexicalEnvironment、VariableEnvironment")])]),t._v(" "),s("li",[s("p",[t._v('EnvironmentRecord ("Declarative"(Function、Module)、"Object"、"GLobal")、outer(外部环境引用)')])]),t._v(" "),s("li",[s("p",[t._v("Variable Object、Activation Object")])])]),t._v(" "),s("h4",{attrs:{id:"执行上下文-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-2"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候上下文和执行上下文的概念要区分，前者通常被认为是 this 的指向")])]),t._v(" "),s("p",[t._v("上下文的生成时机在词法解析阶段，而激活时机在运行阶段")]),t._v(" "),s("p",[t._v("上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ExecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定this的值")]),t._v("\n  ThisBinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建词法环境组件")]),t._v("\n  LexicalEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建变量环境组件")]),t._v("\n  VariableEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("全局上下文")]),t._v("：全局上下文是最外层的上下文")]),t._v(" "),s("ul",[s("li",[t._v("根据 ECMAScript 实现的宿主环境，表示全局上下文的对象可能不一 样。")]),t._v(" "),s("li",[t._v("在浏览器中全局上下文就是 window 对象，因此所有通过 var 定义的全局变量和函数都会成为 window 对象的属性和方法。而使用 let 和 const 的顶级声明不会定义在全局上下文中，但在作用域链解析上效果是一样的")]),t._v(" "),s("li",[t._v("全局上下文在应用程序退出前才会被销毁，比如关闭网页或退出浏览器")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("函数上下文")]),t._v(" / 局部上下文：每个函数调用都有自己的上下文")]),t._v(" "),s("ul",[s("li",[t._v("当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。")]),t._v(" "),s("li",[t._v("在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。")]),t._v(" "),s("li",[t._v("ECMAScript 程序的执行流就是通过这个上下文栈进行控制的。")])])]),t._v(" "),s("h4",{attrs:{id:"词法环境与变量环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法环境与变量环境"}},[t._v("#")]),t._v(" 词法环境与变量环境")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("词法环境")]),t._v("： 词法环境定义了由代码编译过程中，ecma规范词法对应的一些关系，比如记录函数内部的this内容，不对外暴露，可以理解为ecma内部自己的语法关系。")]),t._v(" "),s("p",[s("code",[t._v("变量环境")]),t._v("：变量环境指的的是在词法环境中，代码运行时生成的变量关系，可以理解为由我们创建的变量。")])]),t._v(" "),s("h4",{attrs:{id:"环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境记录"}},[t._v("#")]),t._v(" 环境记录")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("环境记录")]),t._v("：记录的是，在它关联的词法环境的范围内创建的标识符绑定，意味着环境记录会跟踪变量与函数名称，以及它们关联的值。「就是变量名和变量值的映射」")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("声明性环境记录")]),t._v(" (DER)：保存了变量与函数名，以及它们的值；\n"),s("ul",[s("li",[t._v("用在Function、Module，适用性更强，更贴近于环境记录本身的意义")])])]),t._v(" "),s("li",[s("code",[t._v("对象环境记录")]),t._v(" (OER)：保存了绑定对象的属性名与值\n"),s("ul",[s("li",[t._v("全局作用域的 ER 是一个 OER，它的绑定对象也就是 window/global 这个全局对象")])])]),t._v(" "),s("li",[s("code",[t._v("全局环境记录")]),t._v(" (GER)：保存了内置的全局变量（例如NaN、undefined、globalThis(全局作用域中的this) ）\n"),s("ul",[s("li",[t._v("所有脚本共享的最外部作用域")])])])]),t._v(" "),s("p",[s("code",[t._v("outer")]),t._v("：可以通过outer拿到上一层的作用域链")])]),t._v(" "),s("h4",{attrs:{id:"变量对象与活动对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量对象与活动对象"}},[t._v("#")]),t._v(" 变量对象与活动对象")]),t._v(" "),s("p",[t._v("变量对象(VO)是执行上下文创建阶段生成的，只是在执行上下文的执行阶段变成活动对象(AO)，变成AO了以后就可以使用其中的变量、函数标示符、形参...")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("变量对象")]),t._v(" (VO)：每个上下文都有一个关联的变量对象，保存了这个上下文中定义的所有变量和函数")]),t._v(" "),s("ul",[s("li",[t._v("执行上下文创建阶段生成，但代码执行遇到  try/catch 语句的 "),s("code",[t._v("catch")]),t._v(" 块 或者是 "),s("code",[t._v("with")]),t._v(" 语句时，都会在作用域链前端添加一个变量对象")])]),t._v(" "),s("p",[s("code",[t._v("活动对象")]),t._v(" (AO)：如果代码正在执行的上下文是函数，则其活动对象用作变量对象，放置在作用域链的最前端")]),t._v(" "),s("ul",[s("li",[t._v("活动对象最初只有 一个定义变量 "),s("code",[t._v("arguments")]),t._v("。随着函数的执行，还会往活动对象上添加变量")])])]),t._v(" "),s("p",[t._v("从ES5开始概念就被废弃了，可能是因为原来活动对象上的 arguments 可以被直接添加进执行上下文的 "),s("code",[t._v("环境记录(DER)")]),t._v(" 了")]),t._v(" "),s("h2",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("p",[t._v("作用域，是为了区分每个词法作用域下代码的独立性")]),t._v(" "),s("p",[t._v("一个执行上下文定义了一个"),s("strong",[t._v("函数执行时的环境")]),t._v("，所以作用域其实就是"),s("strong",[t._v("变量所处的执行上下文")])]),t._v(" "),s("h3",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),s("p",[t._v("词法（lexical）一词指的是，词法作用域 (lexical scope) "),s("u",[t._v("根据源代码中声明变量的位置来确定该变量在何处可用")]),t._v("。")]),t._v(" "),s("p",[t._v("所以词法作用域也是静态作用域，在代码编写时就确定了作用域")]),t._v(" "),s("h3",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("p",[t._v("上下文中的代码在执行的时候，会创建变量对象的一个作用域链(scope chain)。")]),t._v(" "),s("p",[t._v("作用域链是一个指向各级变量对象的指针列表")]),t._v(" "),s("ul",[s("li",[t._v("这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序，作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文，以此类推直至全局上下文。")]),t._v(" "),s("li",[t._v("代码正在执行的上下文的变量对象始终位于作用域链的最前端，全局上下文的变量对象始终位于作用域链的最后端")]),t._v(" "),s("li",[t._v("代码执行时的标识符解析是通过沿作用域链逐级搜索标识符名称完成的")]),t._v(" "),s("li",[t._v("内部上下文可以通过作用域链访问外部上下文中的一切，但外部上下文无法访问内部上下文中的任何东西。也就是说，嵌套函数可访问声明于它们外部作用域（函数作用域）的变量")])]),t._v(" "),s("h3",{attrs:{id:"函数作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[t._v("#")]),t._v(" 函数作用域")]),t._v(" "),s("p",[t._v("在ES6以前，只有全局作用域和函数作用域")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("当一个函数定义的时候，会创建一个包含全局变量对象和所有包含函数的活动对象的作用域链，并将它保存在这个函数对象的 "),s("code",[t._v("[[Scope]]")]),t._v(" 内部属性上（函数也是一个对象，包含函数体和其他一些可访问或不可访问的属性，比如 name、length 等）、")])]),t._v(" "),s("li",[s("p",[t._v("当这个函数执行的时候，会创建一个 执行上下文，将 "),s("code",[t._v("[[Scope]]")]),t._v(" 复制到执行上下文中的作用域链。然后，创建当前的活动对象，推到作用域链顶端。此刻，函数执行过程中可访问的作用域是：AO + Scope Chain。")])])])]),t._v(" "),s("p",[t._v("子函数引用了外部作用域的变量，这种情况称为闭包，闭包函数会包含完整的作用域链")]),t._v(" "),s("h3",{attrs:{id:"块作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[t._v("#")]),t._v(" 块作用域")]),t._v(" "),s("p",[t._v("ES6新概念，let 和 const 的作用域是块级的，代码块由最近的一对花括号界定，let 和 const 声明的变量，它们的作用域不会超出这个代码块的范围")]),t._v(" "),s("h4",{attrs:{id:"let声明变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let声明变量"}},[t._v("#")]),t._v(" let声明变量")]),t._v(" "),s("blockquote",[s("p",[t._v("严格来讲，let 在 JavaScript 运行时中也会被提升(hoisting)，但由于“暂时性死区”(temporal dead zone)的 缘故，实际上不能在声明之前使用 let 变量。因此，从写 JavaScript 代码的角度说，let 的提升跟 var 是不一样的。")])]),t._v(" "),s("h2",{attrs:{id:"🌰例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌰例子"}},[t._v("#")]),t._v(" 🌰例子")]),t._v(" "),s("ol",[s("li",[t._v("使用 "),s("strong",[t._v("var")]),t._v(" 的函数作用域声明")])]),t._v(" "),s("p",[t._v("var 声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。这个现象叫作“提升”  (hoisting)。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用var声明变量，变量会被自动添加到最接近的上下文")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Uncaught ReferenceError: sum is not defined")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 未经声明就初始化，变量就会自动被添加到全局上下文")]),t._v("\n  sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return sum;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sum在函数退出之后依然存在，从而在后面可以访问到")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("标识符查找")]),t._v(" "),s("p",[t._v("搜索过程中，引用局部变量会让搜索自动停止，而不继续搜索下一级变量对象")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n")])])]),s("h2",{attrs:{id:"伪代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码示例"}},[t._v("#")]),t._v(" 伪代码示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局执行上下文")]),t._v("\nGlobalExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this绑定为全局对象")]),t._v("\n    ThisBinding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    LexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境记录")]),t._v("\n      EnvironmentRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象环境记录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里 let const创建的变量a b在这")]),t._v("\n        a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n        b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n        multiply"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境外部环境引入为null")]),t._v("\n      outer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n    VariableEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象环境记录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  var创建的c在这")]),t._v("\n        c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境外部环境引入为null")]),t._v("\n      outer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数执行上下文")]),t._v("\n  FunctionExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//由于函数是默认调用 this绑定同样是全局对象")]),t._v("\n    ThisBinding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    LexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明性环境记录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  arguments对象在这")]),t._v("\n        Arguments"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境引入记录为</Global>")]),t._v("\n      outer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n    VariableEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明性环境记录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  var创建的g在这")]),t._v("\n        g"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境引入记录为</Global>")]),t._v("\n      outer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("blockquote",[s("p",[t._v("当javascript代码文件被浏览器载入后，默认最先进入的是一个"),s("strong",[t._v("全局的执行上下文")]),t._v("。当在全局上下文中调用执行一个函数时，程序流就进入该被调用函数内，此时引擎就会为该函数创建一个"),s("strong",[t._v("新的执行上下文")]),t._v("，并且将其压入到"),s("strong",[t._v("执行栈顶部（作用域链）")]),t._v("。浏览器总是执行位于"),s("strong",[t._v("执行栈顶部的当前执行上下文")]),t._v("，一旦执行完毕，该执行上下文就会从执行栈顶部"),s("strong",[t._v("弹出")]),t._v("，并且控制权将进入"),s("strong",[t._v("其下的")]),t._v("执行上下文。这样，执行栈中的执行上下文就会被依次执行并且弹出，直到回到全局的执行上下文。")])]),t._v(" "),s("h1",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/11438363.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章看懂JS执行上下文 - 听风是风 - 博客园"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/20139050/what-really-is-a-declarative-environment-record-and-how-does-it-differ-from-an-a",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript - What really is a declarative environment record and how does it differ from an activation object? - Stack Overflow"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/188394420",target:"_blank",rel:"noopener noreferrer"}},[t._v("js没那么简单(1)-- 执行上下文 - 知乎"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/14277a357598",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8底层运行机制之执行上下文及堆栈内存原理刨析 - 简书"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);