# ES6

## 箭头函数

### 限制

- 不能使用 arguments、super 和 new.target，也不能用作构造函数。

- 没有 prototype 属性
- 不能用来定义Generator函数

不能使用arguments对象的两种解决办法

```js
// 扩展符
const foo = (...arguments)=>{ console.log(arguments) }
foo(1,2,3)

// 包装函数
function foo2() {
  let bar = () => { console.log(arguments) }
  bar()
}
foo2(1,2,3)
```

### this指向

箭头函数中的 this 会保留定义该函数时的上下文（词法作用域）

```js
/***** 标准函数与箭头函数的一个对比例子 *****/

window.color = 'red'
let o = { color: 'aliceblue' }

// 标准函数（this引用的是把函数当成方法调用的上下文对象，所以this值在函数运行时才会被确定）
function sayColor() {
  console.log(this.color)
}
sayColor()    // 'red'
o.sayColor = sayColor
o.sayColor()  // 'aliceblue'

// 箭头函数
let sayColor2 = () => console.log(this.color)
sayColor2()    // 'red'
o.sayColor = sayColor2
o.sayColor()  // 'red'
```

```js
window.value = 'global'
function ThisValue(){
	this.value = 'function'
	setTimeout(()=>{ console.log(this.value) }, 100)		// "function"
	setTimeout(function(){ console.log(this.value) }, 100)		// "global"
}
new ThisValue()
```



## 解构赋值

```js
let person = { name: 'Matt', age: 27 }
let { name, age, job } = person
console.log(job)	//undefined
// 添加别名
let { name: personName, age: personAge } = person
// 添加默认值
let { name, job='Software engineer' } = person
```

```js
// 用在函数的arguments对象上
function printPerson(foo, {name: personName, age: personAge}, bar) { 
  console.log(arguments);
	console.log(personName, personAge);
}
```



## Promise

通过promise的链式调用，串行化异步任务，解决回调地狱问题

### 状态

1. pending
2. fulfilled / resolved
3. rejected

![](https://mdn.mozillademos.org/files/8633/promises.png)

### 方法

| 实例方法                                        |                                                          |
| ----------------------------------------------- | -------------------------------------------------------- |
| Promise.prototype.then(onFulfilled, onRejected) | 添加成功或失败的回调到当前Promise, 并返回一个新的Promise |
| Promise.prototype.catch(onRejected)             | 添加失败的回调到当前Promise, 并返回一个新的Promise       |
| Promise.prototype.finally(onFinally)            | 添加一个回调到当前Promise（无论成功或者失败）            |

| 静态方法                       |                                                              |
| ------------------------------ | ------------------------------------------------------------ |
| `Promise.resolve(value)`       | 返回一个以给定值解析后的Promise对象；如果这个值是：<br />1. 一个 promise ，那么将返回这个 promise； <br />2. thenable对象（即带有`"then" `方法），返回的promise会采用它的最终状态；<br />3. 其它，返回的promise将以此值完成 |
| `Promise.reject(reason)`       | 返回一个状态为失败的Promise对象，并将给定的失败信息reason传递给对应的处理方法 |
| `Promise.all(iterable)`        | 返回一个新的promise对象，在iterable参数对象里所有的promise对象都成功的时候才会触发成功 |
| `Promise.allSettled(iterable)` | 返回一个新的promise对象，在iterable参数里所有Promises都完成后（包含成功和失败）返回 |
| `Promise.any(iterable)`        | 只要其中的一个 promise 成功，就返回那个已经成功的 promise    |
| `Promise.race(iterable)`       | 返回第一个完成后（包含成功和失败）的 promise                 |

```js
p.then(value => {
  // fulfillment callback
}, reason => {
  // rejection callback
})

Promise.resolve('会被then的onFulfilled处理').then(console.log)
Promise.reject('会被then的onRejected处理').then(console.log, console.warn)
Promise.reject('只会被then的onRejected处理').then(console.log, console.warn).catch(console.error)
Promise.reject('只会被catch的onRejected处理').catch(console.error).then(console.log, console.warn)
Promise.reject('会被catch的onRejected处理').then(console.log).catch(console.error)
// .then()和.catch()都是返回<fulfilled>状态的promise
// 事实上, catch(onRejected) 内部会调用 then(undefined, onRejected)
// 所以二者行为基本相同，谁在前就给谁处理
```

### 非重入特性

- 每次 then / catch 方法都会返回一个新的 Promise 对象，从而实现**链式调用**。
- 而本质上是在**微任务队列**进行执行，所以 then/catch/finally 等处理方法需要被当作微任务来排期（异步）执行，而非立即执行。这个特性被称为”非重入”(non-reentrancy)“ 特性

[【技术分享】手写一个A+规范的完整版Promise，让异步处理更流畅](https://gzg.me/posts/2021/promise/)

## async/await

```js
async function foo() { 
  console.log(1)
  // 即使 await 后面跟着一个立即可用的值，函数的其余部分也会被异步求值
  await console.log(2)
  console.log(3)
  console.log(await Promise.resolve(4))
  await setTimeout(()=>console.log(5), 0)
  return 6
  // return Promise.resolve(6)
}
foo().then(console.log)
console.log(7)

// 打印顺序：1 2 7 3 4 6 5
```

### 异步版本

异步迭代：`Symbol.asyncIterator`、`for-await-of` (ES2018)

```js
async function* asyncGenerator() {
  yield await Promise.resolve(1)
  // yield await Promise.reject(0);	//被拒绝的Promise会强制退出迭代器
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
  // yield await getRemoteData();
}

const asyncIterator = asyncGenerator()
typeof asyncIterator[Symbol.asyncIterator] // 'function'
async function run() {
  for await (const value of asyncIterator) {
    console.log(value)
  }
}
run()
// 1
// 2
// 3
```

异步迭代器会维护一个回调队列，以保证早期值的迭代器处理程序总是会在处理晚期值之前完成，即使后面的值早于之前的值解决。也就是保证了Promise resolve的顺序不会干扰迭代顺序。



## ES9和ES10

### 异步迭代

`Symbol.asyncIterator`

`for-await-of` 

### 对象字面量的剩余操作符和扩展操作符

剩余操作符

```js
const person = { name: 'Matt', age: 27, job: { title: 'Engineer', level: 10 } }; 
const { name, job: { title, ...remainingJobData }, ...remainingPersonData } = person;
```

```js
// 剩余操作符在对象间执行浅复制，复制所有自有可枚举属性，包括symbol
const person = { name: 'Matt', age: 27, job: { title: 'Engineer', level: 10 } };
const { ...remainingData } = person;
console.log(person === remainingData);          // false
console.log(person.job === remainingData.job);  // true
```

扩展操作符

```js
const s = Symbol();
const foo = { a: 1 };
const bar = { [s]: 2 };
const foobar = {...foo, c: 3, ...bar};
console.log(foobar);		// { a: 1, c: 3, Symbol(): 2 }
```

### Promise.prototype.finally()

```js
new Promise((resolve, reject) => {
  // ...
})
  .then(resolveHandler, rejectHandler)
  .finally(finalHandler);

// finally()处理程序不传递任何参数，也不知道自己处理的Promise是解决的还是拒绝的。
```

### 正则表达式相关特性

#### dotAll标志

正则表达式中用于匹配任意字符的点(`.`)不匹配换行符，比如\n 和\r 或非 BMP 字符，如表情符号。

为此，规范新增了 s 标志(意思是单行，singleline)，从而解决了这个问题

```js
/^.$/.test('\n')		//false
/^.$/s.test('\n')		//true

const text = `
  foo
  bar
`
const re = /foo.+bar/s
console.log(re.test(text)) // true
```

#### 向后查找断言

```js
const text = 'foobar';

// 肯定式向后查找
// 断言前面是某个值，但不捕获该值
const rePositiveMatch = /(?<=foo)bar/; 
const rePositiveNoMatch = /(?<=baz)bar/;
console.log(rePositiveMatch.exec(text));		// ["bar"]
console.log(rePositiveNoMatch.exec(text));		// null


// 否定式向后查找
// 断言前面不是某个值，但不捕获该值
const reNegativeNoMatch = /(?<!foo)bar/; 
const reNegativeMatch = /(?<!baz)bar/;
console.log(reNegativeNoMatch.exec(text));		// null
console.log(reNegativeMatch.exec(text));		// ["bar"]
```

```js
// 肯定式向前查找
const rePositiveMatch = /foo(?=bar)/;

// 否定式向前查找
const reNegativeNoMatch = /foo(?!bar)/;
```

#### 命名捕获组

```js
const text = '2018-03-14';
const re = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/;
console.log(re.exec(text).groups);		// { year: "2018", month: "03", day: "14" }
```

#### Unicode 属性转义

```js
/^.$/.test('😀')		//false
/^.$/u.test('😀')		//true
```

### 数组打平方法

ECMAScript 2019在Array.prototype上增加了两个方法: flat() 和 flatMap()

Array.prototype.flatMap()方法会在打平数组之前执行一次映射操作。在功能上，arr.flatMap(f) 与 arr.map(f).flat()等价; 但 arr.flatMap()更高效，因为浏览器只需要执行一次遍历。

```js
const arr = [[1], [3], [5]];
console.log(arr.map(([x]) => [x, x + 1]));		// [[1, 2], [3, 4], [5, 6]]
console.log(arr.flatMap(([x]) => [x, x + 1])); 	// [1, 2, 3, 4, 5, 6]
```

### Object.fromEntries()

用于通过键/值对数组的 集合构建对象。这个方法执行与 Object.entries()方法相反的操作

```js
const obj = {
  foo: 'bar',
  baz: 'qux'
};
const objEntries = Object.entries(obj);
console.log(objEntries);		// [["foo", "bar"], ["baz", "qux"]]
console.log(Object.fromEntries(objEntries));		// { foo: "bar", baz: "qux" }

// 这个方法可以方便地将 Map 实例转换为 Object 实例
const map = new Map().set('foo', 'bar');
console.log(Object.fromEntries(map));		// { foo: "bar" }
```

### 字符串修理方法

- trimStart()

- trimEnd()

这两个方法旨在取代之前的 trimLeft()和 trimRight()， 因为后两个方法在从右往左书写的语言(如阿拉伯语和希伯来语)中有歧义

### Symbol.prototype.description

```js
const s = Symbol('foo');
console.log(s.toString());	// Symbol(foo)
console.log(s.description);	// foo
```

### Function.prototype.toString()

ES2019 以前，浏览器厂商可以自由决定 Function.prototype.toString()返回什么。

ES2019 要求这个方法尽可能返回函数的源代码，否则返回{ [native code] }。
