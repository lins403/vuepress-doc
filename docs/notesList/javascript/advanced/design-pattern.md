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
//--------------/* singleton demo */--------------
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
console.log(p1.name) // lin
console.log(p2.name) // lin
```
