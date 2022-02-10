# Object

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

- `Object.create`

  ```js
  const p1 = {name:'xiaomixi', age:24}
  const p2 = Object.create(p1)
  p2		//{}
  p2.name		//'xiaomixi'
  p2.__proto__		//{name: 'xiaomixi', age: 24}
  ```
  
  

### API

| 静态方法                       |                                                              |
| ------------------------------ | ------------------------------------------------------------ |
| Object.keys()                  | 只返回对象自身的、可遍历的属性（不会返回symbol类型的属性名） |
| Object.entries()               | 同上，返回一个二维数组，包含属性值                           |
| Object.getOwnPropertyNames()   | 返回对象自身的全部属性（不会返回symbol类型的属性名）         |
| Object.getOwnPropertySymbols() | 仅返回`symbol`类型的属性名                                   |
| Object.hasOwn()                | 结果可以包含symbol属性名，被用来取代hasOwnProperty()，提案中… |
| Object.getPrototypeOf()        | 获取对象的`Prototype`对象                                    |
| Object.create()                | 可以指定原型对象和属性，返回一个新的对象                     |
| Object.is()                    | ES6，判断两个值是否为同一个值                                |

| 实例方法                   |                                                |
| -------------------------- | ---------------------------------------------- |
| obj.hasOwnProperty()       | 自有属性                                       |
| obj.propertyIsEnumerable() | 可枚举属性                                     |
| obj.isPrototypeOf()        | 判断当前对象是否为另一个对象的原型             |
| valueOf()                  | 返回指定对象的原始值，如果没有则将返回对象本身 |
| toString()                 | 返回一个表示该对象的字符串                     |

### 属性描述对象

| 元属性           |                                                              |
| ---------------- | ------------------------------------------------------------ |
| [[Configurable]] | 属性的可配置性，是否可以通过 delete 删除并重新定义，是否可以改写它的属性描述对象 |
| [[Enumerable]]   | 属性是否可以遍历，比如`for...in`循环、`Object.keys()`        |
| [[Writable]]     | 属性的值是否可以被修改                                       |
| [[Value]]        | 属性实际的值                                                 |
| [[Get]]          | 在读取属性时调用                                             |
| [[Set]]          | 在写入属性时调用                                             |

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
  enumerable: true,
  configurable: false
});
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

 `Object.assign()`，将每个源对象中<u>可枚举</u>和<u>自有属性</u>复制到目标对象

浅拷贝，后者覆盖前者

### 完整的拷贝对象

```js
var extend = function (to, from) {
  for (var property in from) {
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }

  return to;
}

extend({}, { get a(){ return 1 } })
// { get a(){ return 1 } })
```



# 参考

[属性描述对象 - JavaScript 教程 - 网道](https://wangdoc.com/javascript/stdlib/attributes.html)
