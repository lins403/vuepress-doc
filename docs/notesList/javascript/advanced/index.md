# 进阶

## 严格模式

严格模式是 ES5 引入的，不属于 ES6

严格模式主要有以下限制。

- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用`with`语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量`delete prop`，会报错，只能删除属性`delete global[prop]`
- `eval`不会在它的外层作用域引入变量
- `eval`和`arguments`不能被重新赋值
- `arguments`不会自动反映函数参数的变化
- 不能使用`arguments.callee`
- 不能使用`arguments.caller`
- 禁止`this`指向全局对象（如果在全局函数中调用，则 this 在非严格模式下等于 window，在严格模式下等于undefined）
- 不能使用`fn.caller`和`fn.arguments`获取函数调用的堆栈
- 增加了保留字（比如`protected`、`static`和`interface`）

[ECMAScript 6 入门 > Module > 严格模式](https://es6.ruanyifeng.com/#docs/module#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F)



## 私有变量

私有变量包括函数参数、局部变量，以及函数内部定义的其他函数。

特权方法 (privileged method) 是能够访问函数私有变量(及私有函数)的公有方法，实现方式有几种：

1. 闭包：所有私有变量和私有函数都定义在**构造函数**中，再创建一个能够访问这些私有成员的特权方法
   - 构建开销相对会大一点，每个实例都会重新创建一遍新方法和变量
2. IIFE：通过使用**私有作用域**定义私有变量和函数来实现，特权方法定义在prototype原型上，被实例共享
   - 本质上是基于原型模式自定义类型，然后使用IIFE进行封装这个类和私有变量，私有变量就只能在这个IIFE的作用域内（的类）被访问和操作）
3. 也可以通过模块模式或模块增强模式，返回一个单例对象，在单例对象上实现
4. 最简单的方式是私有变量名的命名约定，例如在变量名前加上`_` ；更多实现还有使用ES6中WeakMap、Symbol、Proxy的方式

[[译] JavaScript 中的私有变量](https://juejin.cn/post/6844903565769572366)

> 使用闭包和私有变量会导致作用域链变长，作用域链越长，则查找变量所需的时间也越多。

例子：在私有作用域中的实现

```js
const Example = (function() {
  var _private = '';

  class Example {
    constructor() {
      _private = 'private';
    }
    getName() {
      return _private;
    }
  }
  
  return Example;
})();

var ex = new Example();
console.log(ex.getName()); // private
console.log(ex._private); // undefined
```

