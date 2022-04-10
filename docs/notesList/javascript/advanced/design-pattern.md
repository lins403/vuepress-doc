# 设计模式

## 原则

**S – Single Responsibility Principle 单一职责原则**

- 一个程序只做好一件事
- 如果功能过于复杂就拆分开，每个部分保持独立

**O – OpenClosed Principle 开放/封闭原则**

- 对扩展开放，对修改封闭
- 增加需求时，扩展新代码，而非修改已有代码

L – Liskov Substitution Principle 里氏替换原则

- 子类能覆盖父类
- 父类能出现的地方子类就能出现

I – Interface Segregation Principle 接口隔离原则

- 保持接口的单一独立
- 类似单一职责原则，这里更关注接口

D – Dependency Inversion Principle 依赖倒转原则

- 面向接口编程，依赖于抽象而不依赖于具体
- 使用方只关注接口而不关注具体类的实现

##### SO体现较多，举个栗子：（比如Promise）

- 单一职责原则：每个then中的逻辑只做好一件事
- 开放封闭原则（对扩展开放，对修改封闭）：如果新增需求，扩展then



## 类型

1. 创建型模式：创建对象
   - 工厂方法
   - 抽象工厂
   - 生成器（Builder）
   - 原型
   - 单例
2. 结构型模式：对象与类组装成较大的结构
   - 适配器
   - 桥接
   - 组合
   - 装饰
   - 外观（Facade）
   - 享元（Flyweight）
   - 代理
3. 行为模式：对象间
   - 责任链
   - 命令
   - 迭代器
   - 中介者
   - 备忘录
   - 观察者
   - 状态
   - 策略
   - 模板方法
   - 访问者

## 单例模式

```js
//--------------/* 构造函数 */--------------
class Person {
  constructor(name) {
    if (!Person.instance) {
      this.name = name
      Person.instance = this
    }
    return Person.instance
  }
}
const p1 = new Person('lin')
const p2 = new Person('chen')
console.log(p1===p2)	//true
```

```js
//--------------/* 闭包 */--------------
const Singleton = (function () {
  const SingleClass = function () {}
  
  //通过闭包保存一个变量以供全局访问
  let instance
  
  return function () {
    if (!instance) {
      // 如果不存在则new一个
      instance = new SingleClass()
    }
    return instance
  }
})()
```

```js
//--------------/* 将函数作为一个参数传递（代理-通用惰性） */--------------
var Singleton = function(fn) {
  var instance
  const singleConstructor = function() {
    // 通过apply的方式收集参数并执行传入的参数将结果返回
    return instance || (instance = fn.apply(this, arguments))
  }
  singleConstructor.prototype = Object.create(constructor.prototype)
  return singleConstructor
}
```



# 参考

[JavaScript设计模式es6（23种)](https://juejin.cn/post/6844904032826294286)

[设计模式这样学也太简单了吧！](https://juejin.cn/post/6953423646664687652)
