# call 与 apply



```js
// apply的第二个参数可以是一个类数组对象
Math.max.apply(null, {0:5, 1:10, length:2})
```



#### 安全地apply函数

在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性(虽然可能性极小)。 为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如:`Function.prototype.apply.call(myFunc, thisVal, argumentList);`

这种可怕的代码完全可以使用 Reflect.apply 来避免: `Reflect.apply(myFunc, thisVal, argumentsList);`

### Reflect.apply





## 手写

### call

```js
// call函数实现
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}
console.log(Math.max.myCall(null,1,2,3))
console.log(Math.max.myCall())
```

### apply

```js
// apply函数实现
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  context = context || window
  context.fn = this
  const result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}
console.log(Math.max.myApply(null, [1, 2, 3]))
console.log(Math.max.myApply())
```

### bind

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

