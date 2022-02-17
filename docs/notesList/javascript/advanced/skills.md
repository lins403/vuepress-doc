# 技巧

## 综合

### 位运算

会比运算符更快。

1）整除

```js
8 >> 1		// 4
9 >> 1		// 4
17 >> 1		// 8
```

2）2的次方

```js
1 << 10		//1024
2 << 9		//1024
8 << 7		//1024
```

3）判断奇偶数

```js
9 & 1		// 1，奇数
2 & 1		// 0，偶数
```

4）取整

```js
console.log(~~ 6.83)    // 6
console.log(6.83 >> 0)  // 6
console.log(6.83 << 0)  // 6
console.log(6.83 | 0)   // 6

// >>>不可对负数取整
console.log(6.83 >>> 0)   // 6		
```



## 变量

### 判断变量是否存在

```js
// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined
// ---------------------------------------
// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

### Object.freeze()冻结一个常量对象

const声明一个对象，但这个对象的属性值依然可以修改，要避免这种情况，可以使用 Object.freeze() 进行冻结

```js
const o3 = Object.freeze({});
o3.name = 'Jake';
console.log(o3.name); // undefined
```

### 使用Object.is比较多个值

```js
// 递归
function recursivelyCheckEqual(x, ...rest) {
  return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}
```



## 循环遍历

### for 循环简写

```js
// --- before ---
for(let i = 0; i < arr.length; i++) {...}

// --- after ---
for(let i = arr.length; i--;) {...} // 注意 i-- 后面的分号别漏了
```

### 循环的几种方法

```
1) forEach（只能用在数组和类数组对象上）
  - break和return都不能中断循环
  - forEach 遍历数组会自动跳过空元素

2) for-in（遍历对象）
  - 使用for in会遍历数组所有的可枚举属性，不包括symbol键，但会输出继承自原型的可枚举属性，即prototype上的原型和方法；可以使用hasOwnProperty进一步过滤出自身的可枚举属性
  - for in更适合遍历对象，不应该用来遍历数组或类数组对象。

3) for-of（遍历可迭代对象）
  - for (var value of myArray) { console.log(value) }
  - 按照可迭代对象的 next() 方法产生值的顺序进行迭代元素
  - ES2018进行了扩展，增加了 for-await-of 循环，以支持生成promise的异步可迭代对象
```

#### 🌰例子

```js
const arr = [11, , 22]
for(let i = arr.length; i--;) {console.log(arr[i])}
// 22
// undefined
// 11
//=================================
// forEach会跳过空元素，会影响索引；
// forEach不会跳过falsy值（undefined、null、NaN、false、…）
arr.forEach((item,key)=>{console.log(item, key)})
// 11 0
// 22 2
```

```js
// 遍历字符串
for(let i in 'foo'){ console.log(i) }	// 0 1 2
for(let v of 'foo'){ console.log(v) }	// f o o
Array.prototype.forEach.call('foo', (item,key)=>{console.log(item, key)})	// f 0 o 1 o 2

// 遍历数组
var arr = [123, true, ['hello', 2022]]
for(let i in arr){ console.log(i) }	// 0 1 2
for(let v of arr){ console.log(v) }	// 123 true ['hello', 2022]
arr.forEach((item, index)=>{console.log(item, index)})

// 遍历类数组对象(有索引和length属性)
var arrLike = { 0:'hello', length: 3 }
for(let i in arrLike){ console.log(i) }	// 0 length
for(let v of arrLike){ console.log(v) }		// TypeError: arrLike is not iterable
Array.prototype.forEach.call(arrLike, (item,key)=>{console.log(item, key)})	// hello 0

// 遍历对象
var obj = { foo:'bar', [Symbol()]:1, getFoo(){console.log(this.foo)} }
for(let i in obj){ console.log(i) }	// foo getFoo //自身的可枚举属性，不包括symbol键，但会输出继承自原型的可枚举属性
for(let v of obj){ console.log(v) }	// TypeError: obj is not iterable

// 遍历可迭代对象(数组、字符串、部署了Symbol.iterator接口的对象、generator函数执行结果、matchAll匹配结果、…)
var iter = {
  *[Symbol.iterator](){
    yield 'a'
    yield 'b'
    yield 'c'
  }
}
for(let i in iter){ console.log(i) }	//无结果
for(let v of iter){ console.log(v) }	// a b c
Array.prototype.forEach.call(iter, (item,key)=>{console.log(item, key)})	//无结果

// generator函数生成的遍历器
function* generatorFn() {
  yield* ['a', 'b', 'c']
}
for (const x of generatorFn()) { console.log(x) }		// a b c
```





## Promise

### 进度追踪

```js
class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = []
    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map((handler) => handler(status)); });
    })
    this.notifyHandlers = notifyHandlers
  }
  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler)
    return this
  } 
}

let p = new TrackablePromise((resolve, reject, notify) => { 
  function countdown(x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`)
      setTimeout(() => countdown(x - 1), 1000)
    } else {
      resolve()
    }
  }
  countdown(5)
})
```

## 2）void

在很多语言中，void是一种类型，表示没有值。但是在JavaScript中，void是一个运算符，它接受一个运算数，并返回undefined。

一些情况下 `undefined` 会被编译为 `void 0`，所以理论上后者要快一些

void的妙用

1. Immediately Invoked Function Expressions

   ```js
   void function iife() {
    console.log("Executed!");
   }();
   
   // Output: "Executed!"
   ```

2. Non-leaking Arrow Functions

   ```js
   button.onclick = () => void doSomething();
   // doSomething()返回什么result都不会出错
   ```

3. JavaScript URIs

   ```html
   <a href="javascript:void(0);">Click here to do nothing</a>
   <a href="javascript: void(dosomething())">文字</a>
   <!--操作DOM-->
   <a href="javascript:void(document.body.style.backgroundColor='green');">Click here for green background</a>
   <a href="javascript:void(document.form.submit())">提交</a>
   ```



## 其它

### 一、控制台

#### 打印变量

在开发者工具的 Element(元素)标签页内，单击 DOM 树中一个节点，就可以在 Console(控制台)标签页中使用 `$0` 引用该节点的 JavaScript 实例。它就跟普通的 JavaScript 实例一样，因此可以读取属性(如`$0.scrollWidth`)，或者调用成员方法(如`$0.remove()`)。

```js
// 打印vue
document.querySelector('#app').__vue__    //等同于app.__vue__，app就是Vue的实例,root
document.querySelector('.app-main').__vue__
```

```js
(!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]]*~+[]]		//sb
```

#### 调试

```js
function pauseExecution(){
  console.log("Will print before breakpoint");
  debugger;
  console.log("Will not print until breakpoint continues");
}
pauseExecution()
```

#### 抛出错误

```js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
assert(1>2, 'false~~')
```
