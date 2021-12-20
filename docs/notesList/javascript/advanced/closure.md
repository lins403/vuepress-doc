# 闭包

## 作用

闭包最大的两个用处

1. 可以读取函数内部的变量

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
