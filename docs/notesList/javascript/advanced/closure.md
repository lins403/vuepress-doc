# 闭包

## 作用

闭包最大的两个用处

1. 可以读取函数内部的变量，避免全局变量的污染（在ES6引入块作用域以前，js中只有全局作用域和函数作用域，IIFE+闭包的形式适合用来封装私有变量，或者是模块）

2. 这些变量始终保持在内存中，使得内部变量记住上一次调用时的运算结果（闭包会使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以 这个变量对象不会被回收）

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

```js
// bind函数实现
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  const fn = this
  return function () {
    return fn.apply(context, [...arguments].concat(args))
  }
}
console.log(Math.max.myBind()(1, 2, 3))
console.log(Math.max.myBind(null, 4, 5)(1, 2, 3))
```

IIFE封装局部变量、单例模式
