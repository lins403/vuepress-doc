# 技巧

## 1）控制台

### 打印变量

在开发者工具的 Element(元素)标签页内，单击 DOM 树中一个节点，就可以在 Console(控制台)标签页中使用 `$0` 引用该节点的 JavaScript 实例。它就跟普通的 JavaScript 实例一样，因此可以读取属性(如`$0.scrollWidth`)，或者调用成员方法(如`$0.remove()`)。

```js
// 打印vue
document.querySelector('#app').__vue__    //等同于app.__vue__，app就是Vue的实例,root
document.querySelector('.app-main').__vue__
```

### 调试

```js
function pauseExecution(){
  console.log("Will print before breakpoint");
  debugger;
  console.log("Will not print until breakpoint continues");
}
pauseExecution()
```

### 抛出错误

```js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
assert(1>2, 'false~~')
```



## 2）void

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

## 3）遍历

### for 循环简写

```js
// --- before ---
for(let i = 0; i < arr.length; i++) {...}

// --- after ---
for(let i = arr.length; i--;) {...} // 注意 i-- 后面的分号别漏了
```

### 循环的几种方法

```
1) forEach
  - break和return都不能中断循环
  - forEach 遍历数组会自动跳过空元素

2) for-in
  - 使用for in会遍历数组所有的可枚举属性，包括prototype上的原型和方法，例如keys、values、forEach、length、...
  - for in更适合遍历对象，不应该用来遍历数组或类数组对象。

3) for-of
  - for (var value of myArray) { console.log(value) }
  - 按照可迭代对象的 next() 方法产生值的顺序进行迭代元素
  - ES2018进行了扩展，增加了 for-await-of 循环，以支持生成promise的异步可迭代对象
```

### Array.prototype.forEach.call

```js
function print(value, index) {
  console.log(index + ' : ' + value);
}
Array.prototype.forEach.call("abc", print)
Array.prototype.forEach.call([3,2,1], print)
```



## 4）变量

## 判断变量是否存在

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
