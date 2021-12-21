# 技巧

## 1）判断变量是否存在

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

## 2）void

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

## 3）遍历

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
