# 闭包

## 作用

闭包最大的两个用处

1. 可以读取函数内部的变量（在ES6引入块作用域以前，js中只有全局作用域和函数作用域，IIFE+闭包的形式适合用来封装私有变量，或者是模块）

2. 这些变量始终保持在内存中，使得内部变量记住上一次调用时的运算结果

## 例子🌰

```js
function createIncrementor(start) {
  return function ( {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
```

```js
// 
const once = function (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
```
