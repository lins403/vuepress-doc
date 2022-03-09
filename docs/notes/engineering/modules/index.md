# 模块化

## 模块化发展

### 历史背景

Google 于2004年推出 Gmail 后，接口 XHR 也就是 AJAX 技术开始流行，方便与服务器通信以后， js 能做的功能越来越多，同时随着业务逐渐复杂， js文件也越来越大，也诞生了许多依赖库和插件。

要避免与依赖库的命名空间冲突（避免全局变量污染），要解决依赖库与依赖库之间的关系（依赖管理）

### 演变

1. #### 全局 function 模式

```js
function m1(){
  //...
}
function m2(){
  //...
}
```

2. #### namespace 模式

```js
let myModule = {
  data: 'www.baidu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}
myModule.data = 'other data' // 能直接修改模块内部的数据
myModule.foo()         // output: foo() other data
```

3. #### IIFE模式：匿名函数自调用(利用函数作用域+闭包)

模块的基本形式：一个IIFE函数，其中定义了私有变量和内部函数，利用闭包创建可以访问私有变量和内部函数的特权函数，最后返回这个特权函数，或将它们暴露到一个可以被访问的地方。

使用模块模式，可以避免全局变量污染，利于应用程序的封装，构造单例对象，以及其它优秀的设计实践等等。

```js
// index.html文件
<script type="text/javascript" src="module.js"></script>
<script type="text/javascript">
    myModule.foo()	// 123
    myModule.bar()
    console.log(myModule.data) //undefined 
		//不能访问和修改模块内部私有变量
		myModule.data = 'xxxx'
    myModule.foo() //123
</script>
```

```js
// module.js文件
(function (window, dependence) {
  let data = '123'
  function foo() {
    console.log(`foo() ${data}`)
    dependence.otherFun()
  }
  function bar() {
    console.log(`bar() ${data}`)
  }
  // 暴露行为
  window.myModule = { foo, bar }
})(window, window.invokeModule || { otherFun: () => {} })
```

优点：

- 避免命名冲突(减少命名空间污染)
- 更好的分离, 按需加载
- 更高复用性
- 高可维护性

缺陷：

- 需要使用不安全的 eval() 方法来实现动态加载依赖
- 要添加异步加载和循环依赖也非常困难
- 静态分析不友好

### 实现

- 按照模块化规范封装模块，将这些模块组成一个复杂的应用（组成）
- 模块内部的变量和方法是私有的，要和其他模块通信的，需要指定暴露给外部（私有）
- 指定引入/导出方式，可以加载嵌套的依赖模块（引入/导出）
- 易于开发人员使用，且还要被有助于部署的优化工具所支持（打包工具）

### 模块化规范

1. 背景
2. 语法
3. 特点&原理

![](https://cdn.jsdelivr.net/gh/lins403/assetsSpace/vuepress/img/js_modules.png)

source： [一次搞懂-JavaScript模块化详解](https://segmentfault.com/a/1190000040001687)

### 模块系统-概念

- 模块标识符：本质上是键/值实体，每个模块都有个可用于引用它的标识符，可以是字符串或具体的文件路径
- 模块依赖：模块系统的核心是管理依赖
- 模块加载：模块加载是“同步阻塞的”，递归地分析并加载模块依赖，直到所有模块依赖都加载完成
- 入口：相互依赖的模块必须指定一个模块作为入口(entry point)，这也是代码执行的起点
- 依赖分析、递归加载

#### 异步依赖

```js
// 在模块A里面 
load('moduleB').then(function(moduleB) {
  moduleB.doStuff();
});
```

#### 动态依赖

```js
// 动态依赖可以支持更复杂的依赖关系，但代价是增加了对模块进行静态分析的难度。
if (loadCondition) {
  require('./moduleA');	//同步阻塞
}
```

#### 静态分析

相关分析工具，会在JavaScript代码被发送给浏览器执行以前，检查代码结构，并在不实际执行代码的情况下，推断模块行为，包括模块依赖之间的引用。

对静态分析比较友好的模块，可以让模块打包系统更容易推断模块行为，并将代码处理为较少的文件

#### 循环依赖

例如模块A，递归加载依赖时，最终依赖的依赖指向模块A自身，以此作为加载终点。

循环加载的应用程序中，加载器会执行深度优先的依赖加载，可以话依赖图来解析。

## 补充

工程化具体用法参考：[Chapter 3. Modularizing and Managing JavaScript](https://www.oreilly.com/library/view/modern-javascript/9781491971420/ch03.html)

# 参考

[Webpack 4 和单页应用入门](https://juejin.cn/post/6844903650939109384)

[前端模块化详解(完整版)](https://juejin.cn/post/6844903744518389768)
