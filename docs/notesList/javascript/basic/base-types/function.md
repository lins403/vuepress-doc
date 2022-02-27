# Function

函数签名：接收参数的类型和数量

ECMAScript没有函数重载

JavaScript 语言的函数是一种独立的数据类型，以及采用基于原型对象（prototype）的继承链。这是它与 Java 语法最大的两点区别。JavaScript 语法要比 Java 自由得多。

## 原型

每个函数都有个`prototype`属性，其`constructor`属性指向函数自身；

每个函数都连接到(原型指针指向) `Function.prototype`，而这个原型本身连接到 `Object.prototype`

```js
function foo(){}
foo.prototype.constructor === foo		//true
foo.__proto__ === Function.prototype		//true
Function.prototype.__proto__ === Object.prototype		//true
```

## 基础

```js
// 函数的属性和方法 .name，.length，.toString()，argument对象
function fun(a, b, ...params) {
    //类数组对象
  console.log(arguments)
  console.log(Array.prototype.slice.call(arguments))
  console.log(Array.from(arguments))
}

//函数标识符
console.log(fun.name)	//'fun' 
//函数的命名参数（形参）个数
console.log(fun.length)	//2

console.log(fun.toString())
console.log(fun(1, 2, 3, 4, 5))
```

函数名就是指向函数的指针，这意味着 一个函数可以有多个名称（`const foo=()=>{ console.log('foo') }; const bar=foo; bar()`）

```js
function foo(){}
function foo(){console.log(123)}
foo()	//123
```

```js
const foo=()=>{}
function foo(){console.log(123)}	//SyntaxError: Identifier 'foo' has already been declared
```


### `arguments` 对象

- `arguments` 对象的值始终会与对应的`命名参数`同步，但只是同步，而并非访问同一个内存地址
- 严格模式下，不会发生同步

```js
function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}
doAdd(1, 2)	// 11

// arguments对象的长度是根据传入的参数个数，如果实参个数少于形参个数，那么arguments就不能同步修改
doAdd(1)	//NaN	//(1+undefined)
```

- 使用默认参数值时，arguments不能与对应的命名参数同步

```js
function doAdd(num1, num2=0) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}
doAdd(1, 2)	// 3
```

#### `arguments.callee`

`arguments.callee`属性包含当前正在执行的函数

```js
// 适合在匿名函数中的递归使用
[1,2,3,4,5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n
})
// [1, 2, 6, 24, 120]
```

```js
// 严格模式下无法使用`arguments.callee`

"use strict"
const arr = [1,2,3,4,5]
arr.map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n
})
// TypeError
```

```js
// 使用命名函数表达式
// 具有比访问arguments对象更好的性能

"use strict"
const arr = [1,2,3,4,5]
console.log(arr.map(function factorial (n) {
  return !(n > 1) ? 1 : factorial(n-1)*n
}))
```

### `this`对象

- 标准函数中，this引用的是把函数当成方法调用的上下文对象（我理解这是活动对象），所以this值在函数运行时才会被确定
- 箭头函数中，this 会保留定义该函数时的上下文（词法分析时就确认了ThisBinding）
- apply()和 call() 可以控制函数调用上下文，即函数体内 this 值

### `caller`对象

（非正式）返回调用指定函数的函数.

```js
function outer() {
  inner();
}
function inner() {
  console.log(inner.caller);
} 

outer();
// ƒ outer() {
//  inner();
// }

inner()	//null
```

### 函数传参

实际参数(arguments) 与 形式参数(parameters)

**按值传参**

- 变量有按值和按引用访问，而函数传参则只有按值传递，不可能按引用传递参数。
- 函数的参数就是局部变量

如果把对象作为参数传递，**复制**了参数在栈内存中的“指针”值，那么传递的值就是这个对象的引用（因为复制一个对象时是复制它栈内存中的内存地址，而不是堆内存上的分配的真实内存空间地址。）

```js
function foo(value, obj, arr){
	value = 1
	obj.a = 1
  arr = [1,2,3]
}
const v = 'hello world'
const o = {}
const a = ['nihao', 'Hola']
foo(v, o, a)
console.log(v)	//'hello world'，按值传递，所以传递的函数参数是独立的值
console.log(o)	//{a: 1}，按值传递，所以传递的函数参数是独立的值，但传递的值是对o对象的引用值，即指针
console.log(a)	//['nihao', 'Hola']
```

### 函数声明与函数表达式

JavaScript引擎在加载数据时，对函数声明和函数表达式是区别对待的

- JavaScript 引擎在任何代码执行之前（代码分析阶段？），会先读取函数声明，并在执行上下文中生成函数定义
- 而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义

#### 1）函数声明

**函数声明提升**(function declaration hoisting)：函数声明会在任何代码执行之前先被读取并添加到执行上下文，这意味着函数声明可以出现在调用它的代码之后。

在执行代码时，JavaScript 引擎会先执行一遍扫描， 把发现的函数声明提升到源代码树的顶部。

```js
console.log(sum(10, 10))	//20
function sum(num1, num2) {
  return num1 + num2
}
```

#### 2）函数表达式

```js
console.log(sum(10, 10))	//TypeError: sum is not a function
var sum = function(num1, num2) {
  return num1 + num2
}
```

```js
let foo = function bar(){}
foo()
bar()		//ReferenceError: bar is not defined
```

适合用于需要条件判断的函数创建，还是下文中的递归

```js
// 没问题
let sayHi;
if (condition) {
  sayHi = function() {
    console.log("Hi!");
  };
} else {
  sayHi = function() {
    console.log("Yo!");
  }; 
}
```



## 应用

### 递归

递归写法主要有如下三种：

```js
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// 改进一：arguments.callee
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  } 
}

// 改进二：命名函数表达式(named function expression)
const factorial = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});
```

再改进：严格模式下，JavaScript引擎会使用**尾调用优化**

```js
"use strict";
const factorial = function f(num, res=1) {
  return (num <= 1) ? res: f(num-1, res*num)
}
```



### 尾调用优化

ECMAScript 6 规范新增了一项内存管理优化机制，让 JavaScript引擎在满足条件时可以重用栈帧，从而让嵌套函数被执行时，栈内存都只有一个栈帧（调用帧），条件如下：

1. 代码在严格模式下执行;
2. 外部函数的返回值是对尾调用函数的调用
3. 尾调用函数返回后不需要执行额外的逻辑
4. 尾调用函数不是引用外部函数作用域中自由变量的闭包

```js
"use strict";

// 有优化:栈帧销毁前执行参数计算 
function outerFunction1(a, b) { 
  return innerFunction(a + b);
}

// 有优化:初始返回值不涉及栈帧 
function outerFunction2(a, b) {
  if (a < b) {
    return a;
  }
  return innerFunction(a + b);
}

// 有优化:两个内部函数都在尾部 
function outerFunction3(condition) {
  return condition ? innerFunctionA() : innerFunctionB();
}

// 无优化:尾调用没有直接返回 
function outerFunction4() {
  let innerFunctionResult = innerFunction();
  return innerFunctionResult;
}
```

优化需要运算的尾调用递归，栈内存中每次就只需要保存一个调用帧，所以可以节省栈空间，而且永远不会发生“栈溢出”错误

```js
// 无优化:尾调用返回后还需要运算 - O(n)
function fib(n) {
  if (n < 2) {
    return n; 
  }
  return fib(n - 1) + fib(n - 2);
}

// workaround - O(1)
"use strict";
function fib(n, a=0, b=1) {
  if(n<1) return a
  return fib(n-1, b, a+b);
}
```

### 闭包

闭包（closure）指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。

[执行上下文与作用域](../../advanced/execution-context.md)

闭包的作用域链一直向外串起了所有包含函数的活动对象，直到全局执行上下文才终止。

包含函数执行完毕后，其执行上下文的作用域链会销毁，但它的活动对象仍然会保留在内存中，直到闭包被销毁后才会被销毁。因此闭包比其他函数更占用内存。过度使用闭包可能导致内存过度占用，因此建议仅在十分必要时使用

闭包经典实用场景（柯里化、防抖节流）

- return函数
- 函数作为参数
- IIFE自执行函数
- setTimeout
- 所有的回调函数

#### this指向

如果内部函数没有使用箭头函数定义，则 this 对象会在运 行时绑定到执行函数的上下文

```js
window.identity = 'The Window';
let object = {
  identity: 'My Object',
  getIdentityFunc() {
    const that = this
    return function() {
      console.log(that.identity)	//'My Object'
      return this.identity;
    }; 
  }
};
console.log(object.getIdentityFunc()()); // 'The Window'
```

### 立即调用函数

立即调用的匿名函数又被称作立即调用的函数表达式(IIFE，Immediately Invoked Function Expression)。

把函数声明转成表达式的形式来执行函数

```js
0 + (function(text) {
  console.log(text)
})('与数字相加变成表达式')

true && (function(text) {
  console.log(text)
})('利用逻辑运算符变成表达式')

// ...
```

#### 模拟块作用域

```js
// ES6引入块作用域以前，使用 IIFE 模拟块级作用域是相当普遍的
(function() { 
  // 块级作用域
  var foo = 'hello world'
})()
console.log(foo)	//ReferenceError: foo is not defined
```

#### 锁定参数

```js
// 使用IIFE锁定参数
for(var i = 0; i < 3; i++) {
  (function(j){
    setTimeout(function() {
      console.log(j)
    }, 0)
  })(i)
}

// 使用let声明循环变量
for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 0)
}
```

### 函数记忆

memoization，利用闭包缓存运算结果，避免重复运算之前已经被处理的输入，以减少（递归）运算次数

```js
function fib(n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

// 尾调用优化
function fib(n, a=0, b=1) {
  "use strict";
  if(n<1) return a
  return fib(n-1, b, a+b);
}

// 函数记忆优化
function fib(n){
  const memo = [0, 1]
  if(memo[n]) return memo[n]
  const result = fib(n - 1) + fib(n - 2)
  memo[n] = result
  return result
}
```

```js
// 封装通用模式
'use strict'
var memoizer = function (memo, formula) {
  const recur = function (n) {
    if (memo[n]) return memo[n]
    const result = formula(recur, n)
    memo[n] = result
    return result
  }
  return recur
}
function fib(recur, n) {
  if (n < 2) return n
  return recur(n - 1) + recur(n - 2)
}
var fib_memo = memoizer([0, 1], fib)
console.log(fib_memo(7))
```

### 纯函数

- 给定相同的输入，始终返回相同的输出（不能依赖任何外部可变状态，例如随机数、time）
- 不会产生副作用（无法更改任何外部状态）

## Skills技巧

### 函数具名传参

```js
const func1 = ({ param1, param2 ...params }) => { console.log(param1, param2, params) }
func1({param1:2, param3:'hello world'})
func1()  // TypeError

// 改进
const func = ({ param1, param2, ...params }={}) => { console.log(param1, param2, params) }
func()  // ✔️
```

### eval()

解释代码字符串并执行

Function构造器也是eval的一种形式。

setTimeout和setInterval函数，可以接受字符串参数或函数参数，如果传递的是字符串参数，则会像eval那样去处理。

eval与eval相关的语法，非必要则不使用。

```js
let msg = "hello world";
  eval("console.log(msg)");  // "hello world"

eval("function sayHi() { console.log('hi'); }");
	sayHi();	// "hi"，但严格模式下会报错

eval("let msg = 'hello world';");
	console.log(msg);  // Reference Error: msg is not defined
```

在严格模式下，在 eval()内部创建的变量和函数无法被外部访问

### 函数柯里化

柯里化允许把函数与传递给它的参数相结合，产生出一个新的函数

#### 管道函数(简易版)

```js
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)		//从左向右
console.log(pipe(Math.ceil, Math.abs)(-1.49))	//1
console.log(pipe(Math.abs, Math.ceil)(-1.49))	//2
```

#### 组合函数(复杂版)

```js
// https://github.com/reduxjs/redux/blob/master/src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // return funcs.reduce((a, b) => (...args) => a(b(...args)))	//从右向左（reduceRight）
  return funcs.reduce((a, b) => (...args) => b(a(...args)))
}

const composeMixins = (...mixins) => (
  instance = {},
  mix = compose
) => mix(...mixins)(instance)
composeMixins(Math.ceil, Math.abs)(-1.49)

const minus = (a,b) => a-b
const positive = v => !!(v>0)
const chains = compose(minus, positive)
console.log(chains(2,1))	// true
```

