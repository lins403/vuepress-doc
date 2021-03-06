# ES6

<figure  style="text-align:center;">
  <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc8c31f52e848b396d05e2e8f2c9138~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" width="66%" class="zoom-imgs">
  <figcaption>source: https://juejin.cn/post/7012412166254886942</figcaption>
</figure>

ES6的更新主要是体现在以下方面：

- 表达式：变量声明，解构赋值，箭头函数
- 内置对象：字符串拓展、数值拓展、对象拓展、数组拓展、函数拓展、正则拓展、Symbol、Set、Map、Proxy、Reflect
- 语句与运算：Class、Module、Iterator
- 异步编程：Promise、Generator、Async。

IE11市占率约12%但不支持ES6


## 箭头函数

### 限制

- 不存在自己的this
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

## ES2020

可选链操作符`?.`

```js
a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
```

空值合并运算符 `??`

```js
// 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
height = height ?? 100;
```

