# ES6—ES12

## ES6

- 表达式：变量声明，解构赋值，箭头函数
- 内置对象：字符串拓展、数值拓展、对象拓展、数组拓展、函数拓展、正则拓展、Symbol、Set、Map、Proxy、Reflect
- 语句与运算：Class、Module、Iterator
- 异步编程：Promise、Generator、Async

【let和const】使用let和const声明的变量，叫块级作用域变量，变量只在所在的代码块内有效。const在声明变量时就必须初始化。

【暂时性死区】temporal dead zone，在代码块内如果使用了let声明变量，那么在该条声明语句之前，该变量不可用。

【箭头函数】this指向函数定义时外层的this值；不能使用 arguments、super 和 new.target，也不能用作构造函数；没有 prototype 属性；不能用来定义Generator函数。

【Symbol】symbol表示表示独一无二的值，属于Symbol类型的属性名都是独一无二的，可以保证不会与其他属性名产生冲突。作为对象的属性名时，通过`Object.getOwnPropertySymbols(obj)`和`Reflect.ownKeys(obj)`方法获取到对象的属性名包含symbol键。JavaScript语言内部也有很多地方内置了symbol值，比如使用`Symbol.iterator`定义返回一个对象默认迭代器的方法，以及Symbol.hasInstance、Symbol.toPrimitive。

【代理Proxy】`Proxy`对象用于创建一个对象的代理，拦截对目标对象的基本操作，添加自定义的额外行为。

【反射Reflect】指对Object的反射，Reflect对象被设计用于调整Object的行为，让其行为变得更加合理。更多的用处是结合proxy对象使用，proxy对象要完成对象的默认行为时，proxy代理对象的handler中所有可以捕获的方法都有对应的反射(Reflect) API 方法，使用Reflect的方法更直观，功能也更强大。

### Set和Map

ECMAScript 6 新增了一批引用类型:Map、WeakMap、Set 和 WeakSet。这些类型为组织应用程序数据和简化内存管理提供了新能力。

【Map和Object】Object 的键值只能是string或symbol，而 Map 中各种类型的值（包括对象）都可以当作键。Map的内存占用更小，插入和删除性能更佳，但是查找操作Object有时候可能更好。

【WeakMap】WeakMap 只接受对象作为键名（`null`除外），不接受其他类型的值作为键名，且键不可迭代。而且 WeakMap 的键名对所指向的对象的引用是弱引用，不计入垃圾回收机制，有助于防止内存泄漏。适用于想给对象上添加数据，但又不干扰对这个对象的垃圾回收，适合用于保存关联元数据。例如使用WeakMap结构来添加对DOM的引用关系，当该DOM元素被清除时，其所对应的WeakMap记录就会自动被移除。

【Set】Set函数可以接受一个数组（或者具有 iterable 接口的可迭代对象）作为参数，用来初始化。

【WeekSet】WeakSet 中的成员只能是对象，且值不可迭代；WeakSet 中的对象都是弱引用。与WeakMap同理，可以用于存储DOM节点，而不用担心这些节点从文档移除时，需要手动释放引用以避免可能引发内存泄漏。

### 异步编程

【promise】promise的意义在于，通过promise的链式调用，串行化异步任务，解决回调地狱问题。promise有三种状态，`pending`、`fulfilled`、`rejected`。promise实例的`then()`方法，用于添加成功或失败的回调到当前Promise，并返回一个新的Promise，`catch()`方法会隐式调用then(undefined, onRejected)。then方法在promise成功或失败后，都将会被异步调用，然后返回一个新的promise，所以可以实现promise的链式调用。

【Promise的方法】`Promise.resolve()`方法返回一个解析过的Promise对象；`Promise.reject()`方法返回一个带有拒绝原因的Promise对象；`Promise.all()`返回一个新的promise对象，在所有的promise对象都成功的时候才会触发成功；`Promise.allSettled()`返回一个新的promise对象，在所有Promises都完成后（包含成功和失败）返回；`Promise.race()`返回第一个完成后（包含成功和失败）的 promise；`Promise.any()`返回第一个成功的promise。

#### 迭代器、生成器、async/await

ES6规范新增了两个高级特性：迭代器(/遍历器)和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代。

【迭代器】解构赋值、遍历 (for...of、Array.from、…) 会调用 `[Symbol.iterator]` 从而生成一个 `Iterator` (迭代器/遍历器)，所以可以自定义[Symbol.iterator]方法，让它返回一个自定义的Iterator。

【生成器】`Generator`函数执行结果会返回一个**生成器对象**，而生成器对象也实现了 Iterator 接口，可以用于遍历。所以将[Symbol.iterator]直接赋值为一个generator函数，返回结果也能用于遍历，这种方式比起自定义实现Iterator要更简便。与迭代器最大的区别在于，生成器支持 yield 关键字，可以用于暂停执行Generator函数。

【generator函数的异步应用】generator函数另外一个更大的用处是用于调整函数的行为，可以实现一系列异步操作的**自动执行**，它的`yield`可以暂停函数的执行，将控制权交出，而generator函数返回的生成器对象的`next`方法则可以接过控制权，来恢复函数的执行。（与promise不一样，promise是为了解决异步任务产生的回调地狱问题，而generator则使用回调方式或者是promise来实现异步任务的自动执行）。通过给生成器对象的`next`方法传参来给函数内部注入值，也可以使用`throw`方法抛出异常，或使用`return`的方式，提前终结 Generator 函数的遍历。

【async/await】async/await可以看作是 Generator 函数的语法糖，`*`对应`async`，`yield`对应`await`，但实际上async的实现原理是将 Generator函数和自动执行器，包装在这个async函数里。

【async/await和Promise的区别】async/await是基于Promise实现的，前者以同步的方式执行异步任务，而promise需要以链式方式处理。

### 类Class

ECMAScript 6 新增的类很大程度上是基于既有原型机制的语法糖。类的语法让开发者可以优雅地定义向后兼容的类，既可以继承内置类型，也可以继承自定义类型。类有效地跨越了对象实例、对象原型和对象类之间的鸿沟。

`class` 体内部的代码总是在严格模式下（"use strict" ）执行

- 原型方法：在类块中定义的方法
- 静态类方法 static
- 实例属性：在构造函数中定义
- 静态属性 static
- 原型的属性 Person.prototype.prototypeAge = 25
- get/set函数
- extends
- super

【类构造函数与普通构造函数】调用类构造函数必须使用 new 操作符，而普通构造函数如果不使用 new 调用，那么就会以全局的this作为内部对象。

【超类和派生类】超类即被继承的父类，派生类即子类。

【super】`super` 关键字用于调用父类的构造函数或其它方法，只能在子类构造函数和静态方法中使用。而且如果在子类中显式定义了构造函数，则要么必须在其中调用super()，要么必须在其中return一个对象。子类构造函数需要调用super函数返回自己的this对象，然后才能使用this。super作为函数调用时，相当于执行父类的构造函数。

【多态】没有原生支持多类继承，但可以通过reduce实现mixin混入的方式，来模拟多态。

## More
