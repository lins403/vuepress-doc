# Function

函数签名：接收参数的类型和数量

ECMAScript没有函数重载

## 基础

```js
// 函数的属性和方法 .name，.length，.toString()，argument对象
function fun(a, b, ...params) {
    //类数组对象
  console.log(arguments)
  console.log(Array.prototype.slice.call(arguments))
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
doAdd(1, 2)	//11

// arguments对象的长度是根据传入的参数个数，如果实参个数少于形参个数，那么arguments就不能同步修改
doAdd(1)	//NaN	//(1+undefined)
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

- 变量有按值和按引用访问，而传参则只有按值传递，不可能按引用传递参数
- 函数的参数就是局部变量

如果把对象作为参数传递，那么传递的值就是这个对象的引用

```js
function foo(value, obj){
	value = 1
	obj.a = 1
}
const v = 'hello world'
const o = {}
foo(v, o)
console.log(v)	//'hello world'
console.log(o)	//{a: 1}
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

### 尾调用

### 闭包

### 立即调用函数



## Skills

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

解释代码字符串

```js
let msg = "hello world";
  eval("console.log(msg)");  // "hello world"

eval("function sayHi() { console.log('hi'); }");
	sayHi();	// "hi"，但严格模式下会报错

eval("let msg = 'hello world';");
	console.log(msg);  // Reference Error: msg is not defined
```

在严格模式下，在 eval()内部创建的变量和函数无法被外部访问
