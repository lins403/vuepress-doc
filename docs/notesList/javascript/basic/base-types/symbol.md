# Symbol

```js
/* Symbol工厂函数 */
const s = Symbol('foo')
s.toString().match(/bar/)
```

## Symbol.for(key)

- `Symbol.for(key)` 返回对应key的symbol，如果存在的话，否则新建一个对应的symbol，并放入全局 symbol 注册表中。
- `Symbol.keyFor` 查询全局注册表

```js
/* Symbol.for */
Symbol('foo')===Symbol('foo')	//false
Symbol.for('foo')===Symbol.for('foo')	//true
Symbol.for('foo')===Symbol('foo')	//false

/* Symbol.keyFor */
let s = Symbol.for('foo'); // foo
console.log(Symbol.keyFor(s));
let s2 = Symbol('bar'); 
console.log(Symbol.keyFor(s2)); // undefined
```

## 作为属性值

```js
let s1 = Symbol('foo'),
	s2 = Symbol('bar');
let o = {
  [s1]: 'foo val',
  [s2]: 'bar val',
  baz: 'baz val',
  qux: 'qux val'
};

Object.getOwnPropertyNames(o)	//['baz', 'qux']
Object.getOwnPropertySymbols(o)	//[Symbol(foo), Symbol(bar)]
/* Reflect.ownKeys */
Reflect.ownKeys(o)	//['baz', 'qux', Symbol(foo), Symbol(bar)]
Object.getOwnPropertyDescriptors(o)	//{baz: {…}, qux: {…}, Symbol(foo): {…}, Symbol(bar): {…}}

o.hasOwnProperty(Symbol('foo'))	//false
o[Symbol('foo')]	//undefined
o.s1	//undefined
o[s1]	//'foo val'
```

## 常用内置symbol

### Symbol.iterator

- 为每一个对象定义了默认的迭代器，该迭代器可以被 `for...of` 循环使用。
- 当需要对一个对象进行迭代时，它的`@@iterator`方法都会在不传参情况下被调用，返回一个迭代器

```js
// 一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有
// @@iterator 指的就是 Symbol.iterator 
Array.prototype[@@iterator]()
TypedArray.prototype[@@iterator]()
String.prototype[@@iterator]()
Map.prototype[@@iterator]()
Set.prototype[@@iterator]()
```

#### 给 Object 添加迭代器

```js
/* 自定义迭代器 */
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable] // [1, 2, 3]
for(var i of myIterable){ console.log(i) }
```



### Symbol.hasInstance

- 用于判断某对象是否为某构造器的实例
- `instanceof` 会使用 `Symbol.hasInstance` 函数来确定关系
- 这个属性定义在 `Function` 的原型上，因此默认在所有函数和 类上都可以调用。

```js
function Foo() {}
let f = new Foo();
  console.log(f instanceof Foo); // true
  console.log(Foo[Symbol.hasInstance](f)); //true
```



### 其它

- `Symbol.isConcatSpreadable` - Array.prototype.concat
- `Symbol.match` - String.prototype.match
- `Symbol.replace` - String.prototype.replace()
- `Symbol.search` - String.prototype.search()
- `Symbol.species` - 用于在构造函数上创建派生对象(derived objects)
- `Symbol.split` - String.prototype.split()
- `Symbol.toPrimitive` - 当一个对象转换为对应的原始值时，会调用此函数，例如 `+obj1`
- `Symbol.toStringTag` - Object.prototype.toString()



