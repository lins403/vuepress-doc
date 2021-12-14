# 技巧

## 1）具名传参

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

## 3）批量创建数组

```js
Array(5).map(()=>{console.log(1)})
// [empty × 5]
// 没有打印内容
// ------------------------------------------------------------
Array.apply(null, { length: 5 }).map(()=>{console.log(1)})
// [undefined, undefined, undefined, undefined, undefined]
// 打印了5次1
```
