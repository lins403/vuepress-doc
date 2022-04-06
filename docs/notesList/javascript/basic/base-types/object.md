# Object

:::tip 要点

1. 对象的几种创建方法
2. 属性描述对象
3. 控制对象状态
4. 常用API
5. 属性类型和查询某个对象是否有某个属性的方法

:::

ECMA-262 将对象定义为一组属性的无序集合。严格来说，这意味着对象就是一组没有特定顺序的值

## 基础

### 创建方法

- 使用 new 操作符和 Object 构造函数创建一个实例，然后再给它添加属性和方法

  ```js
  let person = new Object();
  person.name = "Nicholas";
  person.age = 29;
  ```

- 使用对象字面量(object literal)表示法（并不会调用Object构造函数）

  ```js
   let person = {
     name: "Nicholas",
     age: 29
  };
  ```

- 原型模式 `Object.create`

  ```js
  // 创建一个无任何属性的对象
  Object.create(null)
  ```
  
  ```js
  const p1 = {name:'xiaomixi', age:24}
  const p2 = Object.create(p1)
  p2		//{}
  p2.name		//'xiaomixi'
  p2.__proto__		//{name: 'xiaomixi', age: 24}
  
  p1.sex='male'
  p2.sex		//male
  ```
  
  

### API

[对象属性的可枚举性和所有权](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#%E7%BB%9F%E8%AE%A1%E8%A1%A8)

`in` 操作符判断，以下全部属性都符合。

- 自身的可枚举属性、不可枚举属性、Symbol 键
- 继承的可枚举属性、不可枚举属性、Symbol 键

```js
var triangle = {a: 1, b: 2, c: 3};
function ColoredTriangle() {
  this.color = 'red';
}
ColoredTriangle.prototype = triangle;
var obj = new ColoredTriangle();
```

```js
const s1 = Symbol()
const s2 = Symbol()
var obj = Object.create({ hello: 1, [s1]: 2, getHello(){console.log(this.hello)} })
obj = Object.assign(obj, { a:1, [s2]:2, getA(){console.log(this.a)} })
Object.defineProperty(obj, 'b', {
  value: 3,
  enumerable: false
})

// in 和 for...in 是唯二会包含继承属性的语法
for(let i in obj){ console.log(i) }		// a getA hello getHello

Object.keys(obj)		// ['a', 'getA']
Object.getOwnPropertyNames(obj)		// ['a', 'getA', 'b']
Object.getOwnPropertySymbols(obj)		// [Symbol()]

Reflect.ownKeys(obj)		// ['a', 'getA', 'b', Symbol()]

Object.hasOwn(obj, 'b')		// true
Object.hasOwn(obj, 'hello')		// false

obj.propertyIsEnumerable('a')		//true
obj.propertyIsEnumerable(s2)		//true
obj.propertyIsEnumerable('b')		//false
obj.propertyIsEnumerable('hello')		//false

JSON.stringify(obj)		// '{"a":1}'
```

| 静态方法                       |                                                              |
| ------------------------------ | ------------------------------------------------------------ |
| Object.keys()                  | 只返回对象自身的、可遍历的属性（不包含继承的，也不返回symbol类型的属性名）<br />而`for...in`的遍历会返回自身的和继承的可枚举属性 |
| Object.entries()               | 同上，返回一个二维数组，包含属性值                           |
| Object.getOwnPropertyNames()   | 返回对象自身的全部属性（不会返回symbol类型的属性名）         |
| Object.getOwnPropertySymbols() | 仅返回`symbol`类型的属性名                                   |
| Object.hasOwn()                | 结果可以包含symbol属性名，被用来取代hasOwnProperty()，提案中… |
| Object.getPrototypeOf()        | 获取对象的`Prototype`对象                                    |
| Object.create()                | 可以指定原型对象和属性，返回一个新的对象                     |
| Object.is()                    | ES6，判断两个值是否为同一个值                                |
| **Reflect.ownKeys()**          | 自有属性，即符合hasOwnProperty判断的属性                     |

| 实例方法                   |                                                |
| -------------------------- | ---------------------------------------------- |
| obj.hasOwnProperty()       | 自有属性（可枚举、不可枚举、symbol键）         |
| obj.propertyIsEnumerable() | 可枚举属性（包含symbol键）                     |
| obj.isPrototypeOf()        | 判断当前对象是否为另一个对象的原型             |
| valueOf()                  | 返回指定对象的原始值，如果没有则将返回对象本身 |
| toString()                 | 返回一个表示该对象的字符串                     |

### 属性描述对象

| 元属性           |                                                              | 默认值 |
| ---------------- | ------------------------------------------------------------ | ------ |
| [[Configurable]] | 属性的可配置性，是否可以通过 delete 删除并重新定义，是否可以改写它的属性描述对象 | true   |
| [[Enumerable]]   | 属性是否可以遍历，比如`for...in`循环、`Object.keys()`        | true   |
| [[Writable]]     | 属性的值是否可以被修改                                       | true   |
| [[Value]]        | 属性实际的值                                                 |        |
| [[Get]]          | 在读取属性时调用                                             |        |
| [[Set]]          | 在写入属性时调用                                             |        |

#### `Object.getOwnPropertyDescriptor()`

获取属性描述对象，只能用于对象自身的属性，不能用于继承的属性。

```js
let s1 = Symbol('foo'),
	s2 = Symbol('bar');
let o = {
  [s1]: 'foo val',
  [s2]: 'bar val',
  baz: 'baz val',
  qux: 'qux val'
};

Object.getOwnPropertyDescriptor(o,'baz')
// {value: 'baz val', writable: true, enumerable: true, configurable: true}

Object.getOwnPropertyDescriptor(o, s1)
// {value: 'foo val', writable: true, enumerable: true, configurable: true}

Object.getOwnPropertyDescriptor(o,'toString')		
// undefined

Object.getOwnPropertyDescriptors(o)	// ECMAScript2017 
// {baz: {…}, qux: {…}, Symbol(foo): {…}, Symbol(bar): {…}}
```

#### `Object.defineProperty()`

```js
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: false,
  configurable: false
});
```

```js
const student = {name: 'ZhangSan'}
Object.defineProperty(student, 'age', {value: 22})
Object.defineProperty(student, 'sex', {value: 'male', enumerable: true})
console.log(student)		//{ name: 'ZhangSan', sex: 'male' }
console.log(Object.keys(student))		//["name","sex"]
```

#### `Object.defineProperties()`

```js
var obj = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});
```

### 控制对象状态

可以冻结数组

| API                        | 功能                                                         |                         |
| -------------------------- | ------------------------------------------------------------ | ----------------------- |
| `Object.preventExtensions` | 可以使得一个对象无法再添加新的属性                           | `Object.isExtensible()` |
| `Object.seal`              | 将元属性 configurable 设为 false，只是禁止新增或删除属性，并不影响修改某个属性的值 | `Object.isSealed()`     |
| `Object.freeze`            | 可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量 | `Object.isFrozen()`     |

冻结方法存在两点局限性：

1. 可以通过改变prototype来为对象增加属性（可以把原型对象也冻结了，`Object.preventExtensions(Object.getPrototypeOf(obj))` ）
2. 被冻结对象的属性如果是对象，引用虽然无法修改，但内容值可以被修改



## 操作

### 合并对象

 `Object.assign()`，将每个源对象中<u>可枚举</u>和<u>自有属性</u>复制到目标对象。浅拷贝，后者覆盖前者。

`JSON.parse(JSON.stringify(obj))` 深拷贝，但是部分数据类型的值并不能成功被转换

### 完整的拷贝对象

ES2017 - Object.create

```js
// 确保拷贝后的对象，与原对象具有同样的原型和实例属性，以及属性的描述对象
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```

兼容版

```js
var extend = function (to, from) {
  for (var property in from) {
    if (!from.hasOwnProperty(property)) continue
    Object.defineProperty(to, property, Object.getOwnPropertyDescriptor(from, property))
  }
  return to;
}

extend({}, { get a(){ return 1 } })
// { get a(){ return 1 } })
```

### valueOf

```js
var obj = {
  valueOf: function () {
    return 1
  },
  toString(){
    return 'hello~'
  }
}

obj + 2
// 3

`${obj} Alex`
// 'hello~ Alex'
```

### 其它

#### 对象的key也可以是一个对象

```js
var a = {}, b = {key:'123'}
a[b] = 1
console.log(a[b])		//1
```

#### Number转换

Number(一个对象)	

- 调用valueOf()方法，如果转换结果是NaN，则调用toString()方法，再按照转换字符串的规则转换。

```js
Number({key:'123'})	//NaN
Number({key:'123', toString(){return '456'}})	//456
Number({key:'123', toString(){return '456'}, valueOf(){return '789'}})	//789
Number({key:'123', toString(){return '456'}, valueOf(){return this.key}})	//123
```

String(一个对象)

```js
String(Number({key:'123', toString(){return '456'}, valueOf(){return '789'}}))		//'789'
(Number({key:'123', toString(){return '456'}, valueOf(){return '789'}})).toString()		//456
```

## Recap

【对象的创建方法】使用 new 操作符和 Object 构造函数创建一个实例，然后再给它添加属性和方法；使用对象字面量表示法创建；使用原型模式 `Object.create`创建；继承Object类来创建一个子类，实例化子类来创建新对象（适合量产对象，例如工厂模式、构造函数模式、组合模式、寄生组合模式等等）。

【属性描述对象】元属性，描述对象属性的属性。[[Configurable]]可配置性，[[Enumerable]]可枚举性、[[Writable]]是否可以修改、[[Value]]属性值，以及[[Get]]和[[Set]]。`Object.getOwnPropertyDescriptor()`用于获取自身属性的描述对象，获取所有时使用Object.getOwnPropertyDescriptors。`Object.defineProperty()`用于定义对象的一个新属性，并定义属性的描述对象，批量定义时使用Object.defineProperties()。

【控制对象状态】通过Object.preventExtensions、Object.seal、Object.freeze这三种方法不同程度上控制对象的扩展性。`Object.preventExtensions`使一个对象不能再添加新属性；`Object.seal`将元属性 configurable 设为 false，同时禁止新增或删除属性，并不影响修改某个属性的值；`Object.freeze`使一个对象无法添加、修改和删除属性，实际上就把对象变味了一个不可变的常量。三种方式都仅阻止添加自身的属性，原型依然可以添加和删除属性，所以需要将原型也冻结起来`Object.preventExtensions(Object.getPrototypeOf(obj))`。还有个局限性是只能冻结到第一层，也就是如果被冻结的属性值是个对象，则依然可以被修改。

【常用API】实例方法obj.toString()、obj.valueOf()、obj.hasOwnProperty()、obj.propertyIsEnumerable()、obj.isPrototypeOf()；类方法Object.assign()、Object.create()、Object.is()、Object.getPrototypeOf()、Object.keys()、Object.entries()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Object.defineProperty()

【属性类型】自身的可枚举属性、不可枚举属性、Symbol 键；继承的可枚举属性、不可枚举属性、Symbol 键。

【查询某个对象是否有某个属性的方法】

- `obj.key` 直接按判断是否为undefined
- `in` 操作符可以判断以上情况的全部属性
- `for...in` 遍历自身的和继承的可枚举属性，不包含symbol键
- `Object.keys` 仅包含自身的可枚举属性，不包含symbol键
- `Object.getOwnPropertyNames` 包含自身的可枚举属性与不可枚举属性（除symbol键外的所有自身属性）
- `Object.getOwnPropertySymbols()` 仅包含symbol类型的自身属性
- `obj.hasOwnProperty()` 和 `Object.hasOwn()` 用于判断所有的自身属性，包含symbol键
- `obj.propertyIsEnumerable()` 用于判断自身的可枚举属性和symbol键



# 参考

[属性描述对象 - JavaScript 教程 - 网道](https://wangdoc.com/javascript/stdlib/attributes.html)
