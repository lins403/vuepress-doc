# 面向对象

## 基础

> 每个构造函数都有一个**原型对象**`prototype`，原型有一个属性`constructor`指回构造函数，而实例有一个内部指针`[[prototype]]`（**原型指针**）指向原型 `person1.__proto__ === Person.prototype`

### 1）new操作符

1. 在内存中创建一个新对象
2. 这个新对象内部的`[[Prototype]]`特性，即`__proto__`属性，被赋值为构造函数的 prototype 属性
3. 构造函数内部的 this 被赋值为这个新对象 (即 this 指向新对象)
4. 执行构造函数内部的代码 (给新对象添加属性)
5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

```js
function MyNew(Constructor, ...arg) {
  // 1.创建一个对象
  const newObj = {}
 	// 2.绑定prototype(实例构造器的原型)
  newObj.__proto__ = Constructor.prototype
	// 3.改变this指向
  Constructor.call(newObj, ...arg)
  // 4.给新对象添加属性
  this.key = value
 	// 5.返回新的对象
  return newObj
}
```

### 2）构造函数

```js
// 作为构造函数
let person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); // "Nicholas"

// 作为函数调用
Person("Greg", 27, "Doctor"); //添加到 window 对象
window.sayName(); // "Greg"

// 在另一个对象的作用域中调用
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse"); 
o.sayName(); // "Kristen"
```

构造函数的主要问题在于，其定义的方法会在每个实例上都创建一遍，而不能共享方法

### 3）原型prototype

每个函数都会创建一个 `prototype` 属性，指向原型对象，使用这个构造函数创建的实例的内部`[[Prototype]]`指针指向这个原型对象

```js
// 1. 默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数
Person.prototype.constructor === Person

// 2. 每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构造函数的原型对象
// 脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome 会在每个对象上暴露__proto__属性，通过这个属性可以访问对象的原型
person1.__proto__ === Person.prototype
person1.__proto__.constructor === Person

// 3. 同一个构造函数创建的两个实例，共享同一个原型对象，原型上的所有属性也在实例间共享
person1.__proto__ === person2.__proto__
```

#### 原型的动态性

```js
let friend = new Person();
Person.prototype.sayHi = function() {
	console.log("hi");
};
friend.sayHi(); // "hi"
```

#### 原型的缺陷

```js
function Person() {}
Person.prototype = {
  constructor: Person,
  name: "小眯嘻",
  friends: ["张三", "李四"],
}
let person1 = new Person();
let person2 = new Person();

// 修改原型上的引用属性，会影响到所有实例（所以Vue中要求data属性必须是一个函数）
person1.friends.push('王五')

console.log(person1.friends)	// ['张三', '李四', '王五']
console.log(person2.friends)	// ['张三', '李四', '王五']
```

### 4）原型链

```js
// 正常的原型链都会终止于 Object 的原型对象，Object原型的原型是null
Person.prototype.__proto__ === Object.prototype	//true
Person.prototype.__proto__.constructor === Object	//true
Person.prototype.__proto__.__proto__ === null	//true
```

#### isPrototypeOf

测试一个对象是否存在于另一个对象的原型链上

```js
Person.prototype.isPrototypeOf(person1)	//true
Person.prototype.isPrototypeOf(person2)	//true
Object.prototype.isPrototypeOf(person1)	//true
```

#### instanceof

检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
person1 instanceof Person		//true
person1 instanceof Object		//true
person1 instanceof null		//TypeError: Right-hand side of 'instanceof' is not an object
```

#### Object.create

创建一个新对象，使用传入的参数作为`__proto__`值

```js
// Object.create()只有一个参数时，效果大致如下
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
```

```js
const p1 = {name:'xiaomixi', age:24}
const p2 = Object.create(p1)
p2.name	//'xiaomixi'
const p3 = Object.create(p2)
p3.name	//'xiaomixi'
p3.__proto__	//{}
p3.__proto__.__proto__		//{name: 'xiaomixi', age: 24}

// 修改原型链对象的属性，会影响到下游，但不会影响到上游
p1.sex='male'
p2.sex	//'male'
p3.sex	//'male'

p2.job='dreamer'
p1.job	//undefined
p3.job	//'dreamer'

p2.name='xiaomi'
p1.name	//'xiaomixi'
p3.name	//'xiaomi'
```

#### 其它原型方法

```js
// 方法也是可遍历属性，但constructor不能被枚举
p1.getName=function(){console.log(this.name)}

// 判断是否有对应的自身属性
p1.hasOwnProperty('name')	//true
p3.hasOwnProperty('name')	//false

// 获得对象上所有可枚举的实例属性
Object.keys(p1)	//['name', 'age', 'sex', 'getName']
Object.keys(p3)	//[]

Object.getOwnPropertyNames(p1)	//['name', 'age', 'sex', 'getName']
Object.getOwnPropertyNames(p3)	//[]

// 判断属性名是否在对象原型上
function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object);
}
```



## 创建对象

### 1. 工厂模式（被构造函数模式取代）

```js
function createPerson(name, age, job) {
  // 显式地创建对象
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  // return对象
  return o; 
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");
```

### 2. 构造函数模式

缺陷：原型方法不能在实例之间共享

```js
// 自定义引用类型
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  }; 
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

```js
/*** 实例对象都有一个 constructor 属性指向 Person ***/
console.log(person1.constructor == Person); // true

/* constructor用于标识对象类型，instanceof用于确定对象类型会更可靠 */
console.log(person1 instanceof Object);  // true
console.log(person1 instanceof Person);  // true
```

### 3. 原型模式

```js
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.sayName = function() {
  console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
person1.sayName(); // "Nicholas"
person2.sayName(); // "Nicholas"
console.log(person1.sayName == person2.sayName); // true
```



## 继承

> 很多面向对象语言都支持两种继承:`接口继承`和`实现继承`。 前者只继承方法签名，后者继承实际的方法。
>
> 接口继承在 ECMAScript 中是不可能的，因为函数没有签名。
>
> 实现继承是 ECMAScript 唯一支持的继承方式，而这主要是通过`原型链`实现的

```js
// SubType继承SuperType
SubType.prototype = new SuperType();
```

JavaScript 的继承主要通过原型链来实现。原型链涉及把构造函数的原型赋值为另一个类型的实例。 这样一来，子类就可以访问父类的所有属性和方法，就像基于类的继承那样。

### 模式

<img src="https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/js_inherit_mode.png" style="zoom:50%;" />

1. #### 原型链继承

   - 共享的原型属性被污染
     - 原型中包含的引用值会在所有实例间共享，所以属性通常会在构造函数中定义而不会定义在原型上
   - 子类型在实例化时不能给父类型的构造函数传参

2. #### 盗用构造函数

   - 在子类构造函数中调用父类构造函数，从而可以让每个实例继承的属性都是私有的
   - 主要问题：父类方法必须在构造函数中定义，因此函数不能重用；子类也不能访问父类原型上定义的方法

   ```js
   function SuperType(name){
     this.name = name;
   }
   function SubType() {
     // 继承 SuperType 并传参 
     SuperType.call(this, "Nicholas");
     // 实例属性
     this.age = 29;
   }
   let instance = new SubType();
   console.log(instance.name); // "Nicholas";
   console.log(instance.age);  // 29
   ```

3. #### 组合继承

   - 是 JavaScript 中使用最多的继承模式
   - 使用`原型链`继承原型上的属性和方法，而通过`盗用构造函数`继承实例属性
   - 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的父类属性的副本
   - 组存在效率问题，父类构造函数始终会被调用两次：一次在是创建子类原型时调用，另一次是在子类构造函数中调用

   ```js
   function SuperType(name){
     this.name = name;
     this.colors = ["red", "blue", "green"];
   }
   SuperType.prototype.sayName = function() {
     console.log(this.name);
   };
   
   function SubType(name, age){ 
     // 继承属性 
     SuperType.call(this, name);
     this.age = age;
   }
   // 继承方法
   SubType.prototype = new SuperType();
   SubType.prototype.sayAge = function() {
     console.log(this.age);
   };
   
   let instance1 = new SubType("Nicholas", 29);
   ```

   

4. #### 原型式继承

   - 原型式继承可以无须明确定义构造函数而实现继承，本质上是对给定对象执行浅复制
   - 但是跟原型链继承一样，属性中包含的引用值始终会在相关对象间共享

   ```js
   let person = {
     name: "Nicholas",
     friends: ["Shelby", "Court", "Van"]
   };
   let anotherPerson = Object.create(person, {
     name: {
       value: "Greg"
     }
   });
   console.log(anotherPerson.name);  // "Greg"
   ```

   

5. #### 寄生式继承

   - parasitic inheritance
   - 思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象

   ```js
   function createAnother(original){
     // 通过调用函数创建一个新对象
     let another = Object.create(original);
     // 以某种方式增强这个对象
     another.sayHi = function() { 
       console.log("hi");
     };
     return another; // 返回这个对象
   }
   ```

   

6. #### 寄生组合继承

   - 寄生组合继承被认为是实现基于类型继承的最有效方式

   ```js
   function SuperType(name){
     this.name = name;
     this.colors = ["red", "blue", "green"];
   }
   SuperType.prototype.sayName = function() {
     console.log(this.name);
   };
   
   function SubType(name, age){ 
     // 继承属性 
     SuperType.call(this, name);
     this.age = age;
   }
   
   /***************** 与组合继承不一样的地方 *****************/
   
   function inheritPrototype(subType, superType) {
     let prototype = Object.create(superType.prototype); // 创建对象 
     prototype.constructor = subType; // 增强对象，保证实例的constructor等于subType，而不是superType
     subType.prototype = prototype; // 赋值对象
     // subType.prototype.__proto__ = superType.prototype
   }
   
   // 继承方法（组合继承中通过调用构造函数来赋予子类原型，而寄生组合继承则选择直接复制父类原型）
   // - SubType.prototype = new SuperType();
   // + inheritPrototype(SubType, SuperType);
   inheritPrototype(SubType, SuperType);
   
   /***************** 与组合继承不一样的地方 *****************/
   
   SubType.prototype.sayAge = function() {
     console.log(this.age);
   };
   
   let instance1 = new SubType("Nicholas", 29);
   ```



# 参考

[一篇文章理解JS继承——原型链/构造函数/组合/原型式/寄生式/寄生组合/Class extends](https://segmentfault.com/a/1190000015727237)

《JavaScript高级程序设计（第4版）》— 第 8章 对象、类与面向对象编程