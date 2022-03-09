# call 与 apply



```js
// apply的第二个参数可以是一个类数组对象
Math.max.apply(null, {0:5, 1:10, length:2})
```



#### 安全地apply函数

在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性(虽然可能性极小)。 为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如:`Function.prototype.apply.call(myFunc, thisVal, argumentList);`

这种可怕的代码完全可以使用 Reflect.apply 来避免: `Reflect.apply(myFunc, thisVal, argumentsList);`

### Reflect.apply