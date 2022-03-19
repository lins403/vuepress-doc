(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{427:function(v,_,e){"use strict";e.r(_);var t=e(43),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"javascript进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript进阶"}},[v._v("#")]),v._v(" JavaScript进阶")]),v._v(" "),e("h2",{attrs:{id:"面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[v._v("#")]),v._v(" 面向对象")]),v._v(" "),e("p",[v._v("【new操作符】调用new时，首先在内存中创建一个新对象，将对象的原型指针指向构造函数的原型对象prototype，将构造函数内部的this赋值为这个新对象，然后执行构造函数内部的代码，给新对象添加属性。最后，如果构造函数没有返回对象，那么就会返回这个新创建的实例对象。")]),v._v(" "),e("p",[v._v("【原型对象与原型链】每个构造函数都有一个原型对象prototype，构造函数的实例对象有个属性"),e("code",[v._v("__proto__")]),v._v("，这个原型指针指向了其构造函数的prototype。prototype本身也是个对象，也有自己的原型，通过对象的原型指针串联起来的一层一层原型关系称为原型链。每个对象都会从原型prototype上继承属性和方法，当对象内也就是当前执行环境内找不到这个属性和方法时，就会从原型中去找，原型中没有时，就会继续顺着原型链往上找，直至终点Object.prototype.")]),v._v(" "),e("p",[v._v("【构造函数】JavaScript中对象可以利用原型链的方式，直接继承另一个对象的属性和方法，但构造函数独特的用处在于，可以接受参数进行创建/构造实例对象，给实例对象添加自己的属性。"),e("code",[v._v("new")]),v._v("操作符的意义在于，将构造函数内部的 this 指向这个被创建的新对象。实例对象的"),e("code",[v._v("constructor")]),v._v("属性指向其构造函数，构造函数的原型对象（prototype属性）有一个属性constructor指向了构造函数本身，定义在构造函数原型对象上的属性和方法，可以被所有实例共享。")]),v._v(" "),e("p",[v._v("【构造函数的缺陷】构造函数的缺陷在于，如果方法定义在构造函数内部，会被重复创建，而不能在实例之间共享，也不能被子类所继承。所以通常实例属性定义在构造函数中，而实例方法需要定义在原型prototype上。两面性，prototype被实例共享，所以原型对象/原型链的缺陷在于定义在原型上面的引用属性，也会被实例共享，从而导致被污染的情况。")]),v._v(" "),e("p",[v._v("【继承】继承是子类继承父类的属性与方法，有利用构造函数与原型链的方式，但两种方式各自有如上面所说的缺陷。比较完善的方式是组合继承和寄生组合继承，综合了构造函数与原型链的优点。二者的区别在于原型继承的方式，"),e("u",[v._v("组合继承")]),v._v("的实现是调用父类的构造函数并将结果赋值给子类的原型对象（即子类的原型对象是父类构造函数的一个实例），而"),e("u",[v._v("寄生组合继承")]),v._v("则利用"),e("code",[v._v("Object.create")]),v._v("方法，直接将父类原型对象复制给子类的原型对象（Object.create的原理是将实例对象的原型指针指向传入的参数，即使用传入的对象作为"),e("code",[v._v("__proto__")]),v._v("值）。所以"),e("strong",[v._v("组合继承的缺陷")]),v._v("在于效率问题，父类构造函数始终会被调用两次，一次在是创建子类原型时调用，另一次是在子类构造函数中调用（即盗用构造函数，在子类构造函数中call调用父类构造函数，从而可以让每个实例继承的属性都是私有的）。而"),e("strong",[v._v("寄生组合继承")]),v._v("被认为是实现基于类型继承的最有效方式（JavaScript没有接口继承，只有实现继承），ES6的"),e("code",[v._v("class")]),v._v("与"),e("code",[v._v("extends")]),v._v("关键字便是基于这种方式改造的。")]),v._v(" "),e("h2",{attrs:{id:"v8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[v._v("#")]),v._v(" V8")]),v._v(" "),e("p",[v._v("【V8引擎如何执行JavaScript代码】核心是三大模块，解析器Parser、解释器 Ignition、优化编译器TurboFan。首先初始化基础环境，解析器模块解析源码生成 AST ，同时还会创建执行上下文。解释器根据AST生成字节码，解释并执行字节码。在这过程中会收集执行反馈信息，如果一个函数被多次执行，就会被标记为热点函数。然后根据解释器收集的信息，将热点代码的字节码编译为优化后的机器码。后续执行它们就只需要执行机器码，进而显著提升执行速度。如果优化后的机器码不能匹配上执行条件，例如函数参数的数据类型不能匹配对应的机器码，就会回退到字节码，重新优化编译为正确的机器码。")]),v._v(" "),e("p",[v._v("【JIT即时编译】Just In Time Compilation，即时编译，在运行时编译成机器代码，是一种混合使用编译器和解释器的技术。JavaScript开始都是采用解释执行，速度很慢，但是在V8引擎引入JIT机制，权衡策略综合了编译执行的速度和解释执行的灵活性，极大的提升了JavaScript代码的执行性能。（代码启动速度：一开始不需要直接编译成机器码，生成了中间层的字节码，从而节约了时间；编译速度：优化编译阶段不需要从源码重新解析，直接通过字节码进行优化）")]),v._v(" "),e("h2",{attrs:{id:"执行上下文和作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文和作用域"}},[v._v("#")]),v._v(" 执行上下文和作用域")]),v._v(" "),e("p",[v._v("词法分析、语法分析生成AST，检查语法错误，预编译分配内存，解释执行。")]),v._v(" "),e("p",[v._v("【执行上下文】执行上下文就是ECMA规范里面提到的一个抽象概念，仅仅只是一个抽象模型，具体如何实现是v8引擎内部做的事。变量或函数的上下文决定了它们的作用域和生命周期。执行上下文对后续理解 js内存、垃圾回收、闭包等具有深刻意义，它可以帮助我们在不需要很了解基础底层情况下去分析内存、跟踪执行过程。")]),v._v(" "),e("p",[v._v("【执行上下文的类型】任何变量都存在于某个执行上下文 (也称为"),e("code",[v._v("作用域")]),v._v(") 中，分为全局上下文、函数局部上下文，以及eval上下文。"),e("code",[v._v("全局上下文")]),v._v("在应用程序开始时创建，退出前才会被销毁。"),e("code",[v._v("函数上下文")]),v._v("在函数执行时创建，并被推到"),e("strong",[v._v("上下文栈")]),v._v("顶部，函数执行结束后出栈销毁。")]),v._v(" "),e("p",[v._v("【变量对象VO和活动对象AO】每个执行上下文中都会有一个"),e("strong",[v._v("包含其中变量的对象")]),v._v("。全局上下文中的叫"),e("code",[v._v("变量对象")]),v._v("，它会在代码执行期间始终存在。而函数局部上下文中的局部变量对象叫"),e("code",[v._v("活动对象")]),v._v("，只在函数执行期间存在，被闭包引用的活动对象除外。从ES5以后这两个概念就被词法环境和变量环境中的"),e("code",[v._v("环境记录")]),v._v("这个概念替代了。")]),v._v(" "),e("p",[v._v("【执行流程】ECMAScript 程序的执行流就是通过这个上下文栈进行控制的。当 javascript 代码文件被浏览器载入后，默认最先进入的是一个"),e("code",[v._v("全局执行上下文")]),v._v("。当在全局上下文中调用执行一个函数时，程序流就进入该被调用函数内，此时引擎就会为该函数创建一个新的执行上下文，即函数局部上下文，并且将其压入到执行栈顶部。浏览器总是执行位于执行栈顶部的当前执行上下文，一旦执行完毕，该执行上下文就会从执行栈顶部弹出，并且控制权返还给下方的（原来的）执行上下文。这样，执行栈中的执行上下文就会被依次执行并且弹出，直到回到全局的执行上下文。（也就是函数被调用，执行结束以后，将控制权交还给调用该函数的程序）")]),v._v(" "),e("p",[v._v("【作用域链】JavaScript的作用域分为全局作用域、函数作用域、以及ES6新支持的块作用域。函数在被定义时，就会为其创建作用域链，这是一个指向各级变量对象的指针列表，首先指向全局变量对象Global，并将指针列表保存在内部属性"),e("code",[v._v("[[Scopes]]")]),v._v("中。函数被调用时，创建对应的函数上下文，然后复制函数的"),e("code",[v._v("[[Scopes]]")]),v._v("属性来创建其作用域链。接着会用 arguments 和其他命名参数来初始化创建函数的"),e("code",[v._v("活动对象")]),v._v("，并将其推入"),e("strong",[v._v("作用域链的前端")]),v._v("。这时候作用域链中有两个变量对象：局部变量对象（活动对象）和全局变量对象。随着函数的执行，还会往活动对象上添加变量。函数作用域就是函数上下文。")]),v._v(" "),e("p",[v._v("【词法作用域】词法作用域 (lexical scope) 根据源代码中声明变量的位置，来确定该变量在何处可用。普通函数的 "),e("code",[v._v("this")]),v._v(" 对象会在运行时绑定到执行函数的上下文；而箭头函数比较特殊，属于词法作用域，this 会保留定义该函数时的上下文。")]),v._v(" "),e("p",[v._v("【块作用域】块作用域 (block scope) 是ES6新概念，在这之前只有全局作用域和函数作用域。代码块由最近的一对花括号界定，具备块作用域的变量，例如 let 和 const 声明的变量、function、class类中声明的变量等，它们的作用域不会超出这个代码块的范围。")]),v._v(" "),e("p",[v._v("【变量提升的原理】造成变量声明提升的本质原因是 js 引擎在代码执行前有一个解析的过程，创建了执行上下文，初始化了一些代码执行时需要用到的对象。当我们访问一个变量时，我们会到当前执行上下文中的作用域链中去查找，而作用域链的首端指向的是当前执行上下文的变量对象，这个变量对象是执行上下文的一个属性，它包含了函数的形参、所有的函数和变量声明，这个对象的是在代码解析的时候创建的。这就是会出现变量声明提升的根本原因。（JS引擎解析代码阶段创建执行上下文和上下文的变量对象，代码中声明的变量也在这个时候被创建，代码运行时，在变量被声明赋值以前，就已经能访问到变量。let和const也有变量提升，只不过是存在暂时性死区，不允许在初始化前使用）")]),v._v(" "),e("h2",{attrs:{id:"event-loop-事件循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-事件循环"}},[v._v("#")]),v._v(" Event Loop 事件循环")]),v._v(" "),e("p",[v._v("【事件循环机制】JavaScript是单线程的，基于事件循环机制，浏览器中的事件循环机制由V8引擎实现。JavaScript主线程执行时会调用一些外部API，例如setTimeout、Ajax、用户交互事件等等，它们会生成异步任务。这些任务在经过JS引擎内部对应的模块处理后，异步任务执行完成后的结果会被注册为一个事件，并被添加到任务队列中去。事件被添加到任务队列中以后，JS引擎会持续不断检查主线程执行栈的同步任务是否执行完成，一旦发现执行栈为空，就回去读取任务队列，取出任务并放入执行栈中执行对应事件的回调处理。执行栈中执行代码，会向任务队列中添加事件，执行栈中的代码执行结束后，事件会被从任务队列中取出放入执行栈中执行，以此形成一轮循环。"),e("s",[v._v("一次循环的执行称之为 tick")]),v._v("（不完全对，tick确切指的是这一轮事件已经执行完毕，执行栈为空，然后下一个tick优先开始读取微任务队列）， 在这个循环里执行的代码称作 task 任务，task又可以分为宏任务和微任务。")]),v._v(" "),e("p",[v._v("【宏任务和微任务】JavaScript中的异步任务根据事件类型，可以划分为宏任务和微任务。微任务只有来自于我们的代码，包括promise.then方法，await，nodejs的process.nextTick()等等。不是微任务的异步任务基本就是宏任务，包括主程序、setTimeout、用户交互、IO事件等等。事件循环中可以有一个或多个宏任务队列，但是只能有一个微任务队列。每一轮的事件循环中，首先从宏任务开始执行，通常是我们的主脚本程序。当执行栈清空以后，事件循环机制就会优先检测微任务队列中的事件，并将其push进栈交由主线程执行。")]),v._v(" "),e("p",[v._v("微任务的执行可能产生新的异步任务，从而注册新的事件并被添加进对应的任务队列中去。而每一轮的异步循环中，微任务队列中的所有微任务都需要被执行完毕，才能开启下一轮事件循环。然后下一轮的事件循环，就从宏任务队列中取出任务，执行完成后再去执行本轮的微任务。所以每一轮的事件循环，都是从宏任务开始，微任务结束，每一轮的微任务队列中的任务必须被全部执行完成，才能开启下一轮事件循环。")]),v._v(" "),e("p",[v._v("浏览器和Node11起的实现中，微任务在对应的宏任务阶段就会被执行，而不会将宏任务与微任务分阶段执行（等到这轮事件循环的宏任务都执行结束后才执行微任务）。")]),v._v(" "),e("h2",{attrs:{id:"内存管理与垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存管理与垃圾回收"}},[v._v("#")]),v._v(" 内存管理与垃圾回收")]),v._v(" "),e("p",[v._v("【内存管理/生命周期】分配内存、使用内存、释放内存")]),v._v(" "),e("p",[v._v("【全局变量的生命周期】全局上下文在应用程序退出前才会被销毁，比如关闭网页或退出浏览器。在这之前，全局上下文的变量对象中的变量，也就是全局变量，不会被当成垃圾回收。")]),v._v(" "),e("p",[v._v("【栈内存和堆内存】栈内存在线程创建时就被分配了固定大小的空间，不能动态调整空间，所以可能引起的错误是栈溢出。堆内存在应用进程启动时分配，可以被动态分配空间大小。所以JavaScript中的基本数据类型（原始值）存储在栈内存中，它们占据空间小而且大小固定。引用类型和闭包中的变量存储在堆内存中，它们占据空间大而且大小不固定。除了动态空间大小的原因以外，如果把较大的引用类型也放入栈内存中，则会影响执行上下文的切换，从而影响程序的执行效率。栈会导致"),e("em",[v._v("stack overflow")]),v._v("，而堆会出现内存碎片化 "),e("em",[v._v("fragmentation")]),v._v("，导致没有足够的连续空间用于分配给新变量。")]),v._v(" "),e("p",[v._v("【垃圾回收】JavaScript通过自动内存管理实现内存分配和内存空间回收。垃圾回收的策略是确定哪个变量不会再使用，然后就可以释放它占用的内存。垃圾回收程序周期性运行，每隔一定时间就会自动运行。")]),v._v(" "),e("p",[v._v("【V8垃圾回收机制】栈内存回收发生在栈顶的执行上下文被推出栈的时候。V8中针对堆内存的垃圾回收策略主要基于"),e("u",[v._v("分代式垃圾回收机制")]),v._v("，在堆中按照对象的存活时间，把存储空间分为新生代和老生代两个部分，对着两个部分分别应用不同的回收算法。")]),v._v(" "),e("p",[v._v("【新生代】新生代的内存空间比老生代的空间小很多，存储的是新生成的对象和生命周期短的对象。如果新生成的对象体积非常大，就会被直接分配到大对象空间(Large Object Space) 。针对新生代的垃圾回收算法叫 Scavenge 算法，将堆内存一分而二，其中一个处于使用状态的空间称为From空间，另一个处于闲置状态的空间称为To空间。给新对象分配内存时在from空间中进行分配，当开始进行垃圾回收时，释放 From 空间中非存活对象所占用的空间，存活对象如果已经经历过垃圾回收，就会被复制到老生代中，否则就会被复制到 To 空间，完成以后 To 空间和 From 空间角色互换。所以，新生代的垃圾回收，相当于将内存空间中的存活对象，在划分的两个分区之间进行复制，牺牲空间换时间，适合生命周期短的对象。")]),v._v(" "),e("p",[v._v("【老生代】当一个对象符合条件时，会被从新生代晋升到老生代中进行管理，这时需要采用新的算法进行垃圾回收。从新生代晋升到老生代的条件主要有两个，一个是对象是否经历过新生代的垃圾回收，一个是 To 空间的内存占用超过25%的时候。老生代的垃圾回收算法采用的是"),e("code",[v._v("Mark-Sweep")]),v._v(" 标记清除法和"),e("code",[v._v("Mark-Compact")]),v._v(" 标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以为了解决内存碎片的问题引入了标记压缩法。标记压缩法比标记清除法多了一个整理的过程，在标记过程中会将存活的对象都往一端移动，完成以后再对另一端的非存活对象进行垃圾回收。Mark-Compact算法执行后的内存空间更合理，但是因为需要移动对象，所以它的执行速度没有Mark-Sweep快。")]),v._v(" "),e("p",[v._v("【增量标记】js是单线程语言，在垃圾回收的时候就会阻塞主线程的进行，尤其是在对老生代空间进行垃圾回收时，标记阶段很耗时，可能会导致明显的卡顿，所以v8采用增量标记的方法进行优化。本质上做的事，相当于"),e("strong",[v._v("将标记阶段分步骤进行")]),v._v("，每个步骤控制在5ms以内。标记一段后，就将主线程交还继续执行应用逻辑，如此交替以保障程序的流畅性。标记阶段结束之后，进入循环进行内存碎片的整理。")]),v._v(" "),e("h2",{attrs:{id:"web-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[v._v("#")]),v._v(" Web Worker")]),v._v(" "),e("p",[v._v("【Web Worker工作者线程】使用web workers，可以开启一个独立于主线程的后台线程，这个独立线程中可以执行脚本的任何操作，除了操作DOM和访问window对象。好处是可以在worker线程中执行费时的处理任务，从而避免这些任务在主线程中执行所导致的阻塞或影响性能。workers和主线程间的数据传递是通过消息机制实现的。双方都使用"),e("code",[v._v("postMessage()")]),v._v("方法发送各自的消息，使用"),e("code",[v._v("onmessage")]),v._v("事件处理函数来响应消息。")]),v._v(" "),e("p",[v._v("【Web Worker的类型】专用线程(Dedicated workers)、共享线程(Shared Workers)、服务线程(Service Workers)。专用worker只能被创建它的页面使用，共享worker可以被同源的不同页面之间共享，Service Workers是浏览器与服务器间的代理，拦截request然后从缓存中加载资源，实现离线访问，它们也可以在 PWA 中支持推送通知。")]),v._v(" "),e("h2",{attrs:{id:"more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[v._v("#")]),v._v(" More")]),v._v(" "),e("p",[v._v("【window.performance】")]),v._v(" "),e("p",[v._v("【RequestAnimationFrame】")]),v._v(" "),e("p",[v._v("【FileReader】")]),v._v(" "),e("p",[v._v("【Beacon API】")])])}),[],!1,null,null,null);_.default=r.exports}}]);