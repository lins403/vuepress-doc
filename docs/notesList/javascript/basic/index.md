# 基础

[那些不常见，但却非常实用的js知识(整理不易)](https://segmentfault.com/a/1190000023111128)

## 变量

- 原始值(primitive value)就是最简单的数据
- 引用值(reference value)则是由多个值构成的对象，引用类型的实例
  - 引用值是保存在内存中的对象，而JavaScript不允许直接访问内存位置
  - 操作对象时，实际上操作的是对该对象的引用，而非实际的对象本身
  - 引用实际上是一个指针，它指向存储在**堆内存**中的对象
  - 复制引用值只会复制指针，都指向同一个对象
- 任何变量都存在于某个执行上下文中(也称为作用域)，这个上下文(作用域)决定了变量的生命周期，以及它们可以访问代码的哪些部分

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

[严格模式 - JavaScript 教程 - 网道](https://wangdoc.com/javascript/oop/strict.html)

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`。

类的内部，默认就是严格模式，
