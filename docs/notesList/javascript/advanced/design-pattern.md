# 设计模式

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

