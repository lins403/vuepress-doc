# 迭代器、生成器、async/await

ECMAScript 6 规范新增了两个高级特性:迭代器(/遍历器)和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代

> 😊
>
> 1. Generator 函数可以通过`yield`暂停执行，通过`thunk函数`恢复执行，所以它可以被用于封装异步任务，以实现异步操作的同步化表达
>
> 2. Generator 函数返回一个生成器对象，生成器对象也实现了 Iterator 接口，因此通过`生成器对象`的next、throw、return等方法，实现在 Generator 函数执行遍历时，还能调整函数的行为
> 3. 通过给生成器对象的`next`方法传参来给函数内部注入值，也可以使用`throw`方法抛出异常，或使用`return`的方式，提前终结 Generator 函数的遍历

- 解构赋值、遍历 (for...of、Array.from、…) 会调用 `[Symbol.iterator]` 从而生成一个 `Iterator` (迭代器/遍历器)，所以可以自定义[Symbol.iterator]方法，让它返回一个自定义的Iterator。
- `generator`函数执行结果会返回一个**生成器对象**，而生成器对象也实现了 Iterator 接口，可以用于遍历。所以将[Symbol.iterator]直接赋值为一个generator函数，返回结果也能用于遍历，这种方式比起自定义实现Iterator要更简便。
- generator函数另外一个更大的用处是用于调整函数的行为，可以实现一系列异步操作的**自动执行**，它的`yield`可以暂停函数的执行，将控制权交出，而`next`方法则可以接过控制权，来恢复函数的执行。（与promise不一样，promise是为了解决回调地狱问题，而generator则使用回调方式或者是promise来实现自动执行器）
- async/await 可以看作是 Generator 函数的语法糖，`*`对应`async`，`yield`对应`await`，但实际上async的实现原理是将 Generator 函数和自动执行器，包装在这个async函数里。

## 迭代器Iterator

- 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）
- 默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性

```js
const obj = {
  // `Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的迭代器生成函数（迭代器工厂函数）
  [Symbol.iterator] : function () {
    // 执行这个函数，就会返回一个迭代器
    return {
      // next()方法返回的迭代器对象 IteratorResult 包含两个属性:done 和 value
      next: function () {
        return { value: 1,done: true };
      }
    };
  }
};
console.log(obj[Symbol.iterator]().next())		// {value: 1, done: true}
```

### 方法

```js
// next()方法是必须部署的，return()方法和throw()方法是否部署是可选的
next()

// 如果for...of循环提前退出，就会调用return()方法；
// 反之则不成立，调用 return()不会强制迭代器进入关闭状态；
// 如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代
return()

// throw()方法主要是配合 Generator 函数使用
throw() 
```



### 调用 Iterator 接口的场合

这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器

（1）解构赋值

（2）扩展运算符

（3）yield*

（4）其他场合

- 数组的遍历会调用迭代器接口，所以任何接受数组作为参数的场合，其实都调用了迭代器接口
  - for...of
  - Array.from()
  - Map(), Set(), WeakMap(), WeakSet()
  - Promise.all()、Promise.race()

### for...of 循环

`for...of`循环内部调用的是数据结构的`Symbol.iterator`方法。

`for...of`循环可以使用的范围包括如下，实现了 Iterable 接口的内置类型：

- Array、类数组对象（arguments、DOM NodeList）、String、Set、Map、Generator

`for...of`循环通过 break、continue、return 或 throw 提前退出

### 🌰例子

实现方式

1. 可以覆盖原生的`Symbol.iterator`方法，达到修改迭代器行为的目的
2. 用 Generator 函数实现`Symbol.iterator`方法，是实现迭代器对象最简便的一种方法

#### 自定义迭代方法（部署 Iterator 接口）

```js
// 通用方法
const iterableObj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
[...iterableObj]		// ['hello', 'world']
for(const v of iterableObj) console.log(v)
```

```js
// 类似数组的对象（存在数值键名和length属性），部署 Iterator 接口的简便方法
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
  // [Symbol.iterator]: [][Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}
```

#### 使用 Generator 函数部署 Iterator 接口

```js
let iterable = {
  [Symbol.iterator]: function* () {
    yield 'a';
    yield 'b';
    yield 'c';
  }
};
[...iterable]		// ['a', 'b', 'c']
```

```js
// 简写
let iterableObj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
}
[...iterableObj]		// ['hello', 'world']
```

```js
let obj = {
  * [Symbol.iterator]() {
    yield* [1,2,3]
  }
}
[...obj]		// [1, 2, 3]
```



## Generator函数

- `Generator`函数就是迭代器生成函数，调用以后会返回一个迭代器对象
- 以把`Generator`赋值给对象的`Symbol.iterator`属性，从而使得该对象具有 Iterator 接口

> 调用生成器函数会产生一个生成器对象。生成器对象一开始处于暂停执行(suspended)的状态。与迭代器相似，生成器对象也实现了 Iterator 接口，因此具有 next()方法。调用这个方法会让生成器 开始或恢复执行 ——《JavaScript高级程序设计（第4版）》
>
> 我理解与迭代器最大的区别在于，生成器支持 yield 关键字，这个关键字能够暂停执行生成器函数，其它感觉都一样没什么特殊的

### yield

- Generator 函数返回的迭代器对象，每次需要通过 next() 方法来获取下一个值`value`和状态`done`
- next() 遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值

所以本质上 Generator 函数是一个可以在执行时被控制的函数，而 yield 是其中的关键，暂停函数执行然后返回任意表达式的值

> Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权

```js
// yield*的用法
function* generatorFn() {
  yield* [1, 2, 3];
}
let generatorObject = generatorFn();
for (const x of generatorFn()) {
  console.log(x);
}
// 1 
// 2 
// 3
```

### next()、throw()、return()

三个方法本质上是同一件事，它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换`yield`表达式

|            | 作用                                  |
| ---------- | ------------------------------------- |
| `next()`   | 将`yield`表达式替换成一个值           |
| `return()` | 将`yield`表达式替换成一个`return`语句 |
| `throw()`  | 将`yield`表达式替换成一个`throw`语句  |

### next方法传参

yield可以带上值或表达式，作为next返回的value，但`yield`表达式本身没有返回值，

- 如果`next`方法没有参数，则`yield`表达式总是返回undefined，

- 如果`next`方法带一个参数，则该参数就会被当作**上一个**`yield`表达式的返回值

第一次调用next方法，传参是无效的，从语义上讲，第一个`next`方法用来启动迭代器对象，所以不用带有参数

```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```

> 这个功能有很重要的语法意义。
>
> Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过`next`方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。

Generator 函数返回的迭代器对象的`return()`方法，可以返回给定的值，并且终结遍历 Generator 函数。

### 🌰例子

#### 使用 **yield\*** 实现递归算法

```js
function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1;
  } 
}

for (const x of nTimes(3)) {
	console.log(x);
}
// 0
// 1 
// 2 
```



#### 使用 Generator 函数实现斐波那契数列

```js
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

// for...of 遍历执行 Generator 函数生成的迭代器
for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
```

### 关于thunk函数

```js
function f(m) {
  return m * 2;
}
f(x + 5);

// 等同于

var thunk = function () {
  return x + 5;
};
function f(thunk) {
  return thunk() * 2;
}
```



### 使用 Generator 实现异步操作的自动执行

两种方法

（1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。

（2）Promise 对象。将异步操作包装成 Promise 对象，用`then`方法交回执行权。

#### 基于 Thunk 函数

```js
/* 一个 Generator 函数的自动执行器 */
function autoRun(fn) {
  var g = fn();
  
  function autoNext(err, data) {
    if (err) throw err;
    var result = g.next(data);
    if (result.done) return;
    result.value(autoNext);
  }
  autoNext();
}

/* 一个Generator函数 */
function* gen(value1) {
  // 为了实现自动执行Thunk，需要回调三层
  var ft = Thunk(f);	//用于将autoNext方法传入，处理完前面的异步后，再接力处理autoNext
  try {
    var value2 = yield ft(step1(value1));	
    // step1(value1)(autoNext)，最后类似于Thunk(f)(step1)(autoNext)这样子三层回调
    var value3 = yield ft(step2(value2));
    var value4 = yield ft(step3(value3));
  } catch (e) {}
}

/* 执行 */
autoRun(gen);

/****************** 解析 ******************/
autoRun是一个自动执行一系列异步操作的函数，fn是一个Generator函数，autoNext是一个Thunk函数；
1. 第一次执行autoNext，gen.next(data)实际并未传参，主要用于启动迭代器，返回的result.value就是第一个异步函数，然后将autoNext函数作为回调函数传给这个异步函数，并执行它；
2. 第二次执行autoNext，将第一个异步函数的执行结果即data，通过next方法注入给第二个异步函数，同样的也要将autoNext函数作为回调函数传给这个异步函数，然后执行
3. …以此类推
//相当于执行如下代码：
var g = gen();
var r1 = g.next();
r1.value(function (err, data) {
  var r2 = g.next(data);
  r2.value(function (err, data) {
    var r3 = g.next(data);
  });
});
```

#### 基于 Promise 对象

```js
// 会在传入的异步操作的then方法中调用autoNext

function autoRun(gen){
  var g = gen();

  function autoNext(data){
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      autoNext(data);
    });
  }
  autoNext();
}

autoRun(gen2);

function* gen2() {
  // 与上面有所不同，上面的gen中每次yield一个包裹着异步函数的回调函数，而这里可以直接yield异步函数
}

// 本质上就是：
1. 通过yield方法暂停generator函数的执行，并取到yield后面定义的异步操作；
2. 异步执行结束后，将异步执行结果作为参数传递给next方法来恢复generator的执行，找到下一个yield；
3. 如果没有yield了，状态就变为done，然后return最后这个值
// Thunk函数实现的自动执行也是同理，只是说yield后面要返回的Promise，变成了参数是回调函数的这么一个Thunk函数
// 因为autoNext中少了一层Promise then方法这一回调处理，所以Thunk函数实现的自动执行中generator函数需要多加一层thunk的包裹
```

## async/await

### 原理

Async-Await ≈ Generators + Promises

- async 函数是 Generator 函数的语法糖，`*`对应`async`，`yield`对应`await`
- async/await 的 polyfill 是通过 generator 实现
- <u>async 实现原理，就是将 Generator 函数和自动执行器，包装在这个async函数里</u>

JavaScript 运行时在碰 到 await 关键字时，会记录在哪里暂停执行。等到 await 右边的值可用了，JavaScript 运行时会向消息队列中推送一个任务，这个任务会恢复异步函数的执行。

```js
async function fn(args){
  // ...
}

// 等同于

function fn(args){ 
  return autoRun(function*() {
    // ...
  }); 
}
```

### 特性

1. `async`函数不管有没有 return 语句，总是返回一个 `Promise` 对象
2. 正常情况下`await`命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值
3. `async`函数返回的 Promise 对象，必须等到内部所有`await`命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到`return`或者`throw`语句
4. 任何一个`await`语句后面的 Promise 对象变为`reject`状态，那么整个`async`函数都会中断执行。需要catch异步操作失败，才能不中断后面的异步操作

### 例子

#### 1)

```js
async function foo() {
  console.log(2);
  console.log(await 4);
  console.log(5);
}
console.log(1);
foo();
console.log(3);
//1 2 3 4 5
```

打印1，调用异步函数foo；

打印2，遇到await时暂停执行，并且将await后面的表达式或值，作为一个异步任务添加到消息队列中，然后退出 foo 函数的执行；

打印3，这时同步线程的代码执行完毕，然后JavaScript runtime（运行时）从消息队列中取出任务，求得异步任务的值4，然后注入并恢复异步函数的执行；

foo函数恢复执行，await 取得值4，然后打印 4；

打印5，然后foo函数return，执行结束。

#### 2)

```js
async function foo() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}
async function bar() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);
//1 2 3 4 5 6 7 8 9
// Promise.resolve 属于微任务
```

#### 3) sleep

```js
const sleep = delay => {
	return new Promise(async resolve => {
		await setTimeout(resolve, delay)
	})
}
console.log(1)
await sleep(2000)
console.log(3.14159265358979323846264)
```

#### 4) 并行加速（没有严格按照词法顺序执行）

```js
async function foo() {
  const t0 = Date.now();
  const p1 = asyncFunction(1);
  const p2 = asyncFunction(2);
  const p3 = asyncFunction(3);
  await p1;
  await p2;
  await p3;
  setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
}
foo();
```

```js
// 使用for循环改进写法
async function foo() {
  const t0 = Date.now();
  const promises = Array(5).fill(null).map((_, i) => asyncFunction(i));
  for (const p of promises) {
    await p;
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}
foo();
```



```js
function fooPromiseExecutor(resolve, reject) {
  setTimeout(reject, 1000, 'bar');
}
async function foo() {
  await new Promise(fooPromiseExecutor);
}
foo()
```



# 参考

[《ECMAScript 6 入门教程》](https://es6.ruanyifeng.com/#docs/iterator)

《JavaScript高级程序设计（第4版）》— 第7章 迭代器与生成器
