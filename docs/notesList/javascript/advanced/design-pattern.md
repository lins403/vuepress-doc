# 设计模式

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
