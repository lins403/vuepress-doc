# 类

- ECMAScript 6 新增的类很大程度上是基于既有原型机制（寄生组合继承）的语法糖
- 类有效地跨越了对象实例、对象原型和对象类之间的鸿沟

## 定义

```js
// 类声明
class Person {}
typeof Person	//'function'

// 类表达式
const Student = class {}
typeof Student	//'function'
```

`class` 体内部的代码总是在严格模式下（"use strict" ）执行

### 类构造函数

类构造函数与构造函数的主要区别

- 调用类构造函数必须使用 new 操作符（默认情况下，类构造函数会在执行之后返回 this 对象，即实例对象）
- 而普通构造函数如果不使用 new 调用，那么就会以全局的 this (通常是 window) 作为内部对象

 每个实例都对应一个唯一的成员对象，这意味着所有成员都不会在原型上共享

### 原型方法

- 为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法。

- 类方法等同于类的原型对象的属性，因此可以使用字符串、symbol或计算的值作为键

### 静态类方法

```js
class Person {
  constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
    this.locate = () => console.log('instance', this);
  }
  
  // 在类块中定义的所有内容都会定义在类的原型对象上
  locate() {
    console.log('prototype', this);
  }
  
  // 定义在类本身上 
  static locate() {
    console.log('class', this);
  }
}

let p = new Person()
p.locate()	//instance Person {locate: ƒ}
Person.prototype.locate()	//prototype {constructor: ƒ, locate: ƒ}
Person.locate()	//class, class Person {}
```

### get/set函数

```js
class Person {
	set name(newName){
    // 不能是this.name，否则造成死循环栈溢出
		this.name_ = newName
	}
	get name(){
		return this.name_
	}
}
let p = new Person()
p.name='李白'
console.log(p.name, p.name_)
```

### 类成员

```js
class Person {}

// 在类上定义数据成员 
Person.greeting = 'My name is'

// 在原型上定义数据成员 
Person.prototype.name = 'Jake'
```



## 继承

向后兼容

```js
class Vehicle {}
// 继承类
class Bus extends Vehicle {}

function Person() {}
// 继承普通构造函数
class Engineer extends Person {}
```

### super

super 只能在派生类构造函数和静态方法中使用

如果在派生类中显式定义了构造函数，则要么必须在其中调用super()，要么必须在其中return一个对象

```js
class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
  static identify() {
    console.log('vehicle');
  }
}
class Bus extends Vehicle {
  constructor() {
    // 要在引用 this 之前调用super()
    super(); // 相当于super.constructor()
    this.paid = true;
  }
  static identify() {
    super.identify();
  }
}

const bus = new Bus()
console.log(bus)
console.log(Bus.identify())
```

```js
// 重写构造函数
class Bus extends Vehicle {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
```



## 🌰例子

### 实例工厂函数

```js
// 静态类方法非常适合作为实例工厂:
class Person {
  constructor(age) {
    this.age_ = age;
  }
  sayAge() {
    console.log(this.age_);
  }
  static create() {
    // 使用随机年龄创建并返回一个 Person 实例
    return new Person(Math.floor(Math.random()*100));
  } 
}
console.log(Person.create()); // Person { age_: ... }
```

### 生成可迭代实例

```js
class Person {
  constructor() {
    this.nicknames = ['Jack', 'Jake', 'J-Dog'];
  }
  *[Symbol.iterator]() {
    yield *this.nicknames.entries();
    // return this.nicknames.entries()
  } 
}

let p = new Person();
for (let [idx, nickname] of p) {
  console.log(nickname);
}
```

### 抽象基类

```js
// 抽象基类 
class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated');
    }
    if (!this.foo) {
      throw new Error('Inheriting class must define foo()');
    }
    console.log('success!');
  }
}

// 派生类
class Bus extends Vehicle {
  foo() {} 
}

// 派生类
class Van extends Vehicle {}
new Bus(); // success!
new Van(); // Error: Inheriting class must define foo()
```

### 扩展内置类型

```js
class SuperArray extends Array {
  shuffle() {
    // 洗牌算法
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  } }
let a = new SuperArray(1, 2, 3, 4, 5);
console.log(a);  // [1, 2, 3, 4, 5]
a.shuffle();
console.log(a);  // [3, 1, 4, 5, 2]
```

### 多类继承（多态/类混入/mixin）

`Object.assign()` 方法是为了混入对象行为而设计的

```js
class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
  foo() {
    console.log('foo');
  }
};
let BarMixin = (Superclass) => class extends Superclass {
  bar() {
    console.log('bar');
  } };
let BazMixin = (Superclass) => class extends Superclass {
  baz() {
    console.log('baz');
  }
};

/***** 关键代码 *****/
function mix(BaseClass, ...Mixins) {
  return Mixins.reduce((accumulator,current) => current(accumulator), BaseClass);
}
class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}
/***** 关键代码 *****/

let b = new Bus();
b.foo();  // foo
b.bar();  // bar
b.baz();  // baz
```

很多JavaScript框架(特别是React)已经抛弃混入模式，转向了组合模式(把方法提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承)。这反映了那个众 所周知的软件设计原则: “组合胜过继承(composition over inheritance)。”这个设计原则被很多人遵循，在代码设计中能提供极大的灵活性。

- 复用组件代码，React使用Composition，Vue使用slot
- 要在组件间复用非 UI 的功能，将其提取为一个单独的JavaScript模块，组件可以直接import引入而无需去extend继承
- Vue中的mixin模式其实是基于策略的对象合并，而非继承。Vue的mixin模式也存在缺陷，在Vue3中代码重用应该通过Composition API来实现

# 参考

《JavaScript高级程序设计（第4版）》— 第 8章 对象、类与面向对象编程

[组合 vs 继承 – React](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)