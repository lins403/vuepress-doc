# 技巧

## 1）函数具名传参

```js
const func1 = ({ param1, param2 ...params }) => { console.log(param1, param2, params) }
func1({param1:2, param3:'hello world'})
func1()  // TypeError

// 改进
const func = ({ param1, param2, ...params }={}) => { console.log(param1, param2, params) }
func()  // ✔️
```

## 2）判断变量是否存在

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

## 3）void

一些情况下 `undefined` 会被编译为 `void 0`，所以理论上后者要快一些

[void operator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

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

## 4）批量创建数组

```js
Array(5).map(()=>{console.log(1)})
// [empty × 5]
// 没有打印内容
// ------------------------------------------------------------
Array.apply(null, { length: 5 }).map(()=>{console.log(1)})
// [undefined, undefined, undefined, undefined, undefined]
// 打印了5次1
```

## 5）遍历

### for 循环简写

```js
// --- before ---
for(let i = 0; i < arr.length; i++) {...}

// --- after ---
for(let i = arr.length; i--;) {...} // 注意 i-- 后面的分号别漏了
```

### Array.prototype.forEach.call

```js
function print(value, index) {
  console.log(index + ' : ' + value);
}
Array.prototype.forEach.call("abc", print)
Array.prototype.forEach.call([3,2,1], print)
```
