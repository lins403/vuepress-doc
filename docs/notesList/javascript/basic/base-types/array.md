# Array

:::tip 要点

1. 数组的几种创建方法
2. 数组常用的类方法
3. 数组常用的实例方法
4. 定型数组

:::

## 基础

### 创建方法

- 使用 new 操作符和 Array 构造函数

  ```js
  const colors = new Array("red", "blue", "green")
  Array("red", "blue", "green")		// 没有new的时候会被自动补上
  
  Array(3).fill()	//[undefined, undefined, undefined]
  Array(3).fill(0)	//[0, 0, 0]
  ```

- 使用数组字面量(array literal)表示法（并不会调用Array构造函数）

  ```js
  const colors = ["red","blue","green"]
  
  const options = [,,,,,]; // 创建包含 5 个元素的数组，占位数组(undefined填充)
  ```

- 使用ES6新增的静态方法 `Array.of`

  ```js
  Array.of(7);       // [7]
  Array.of(1, 2, 3); // [1, 2, 3]
  
  Array(7);          // [ , , , , , , ]
  Array(1, 2, 3);    // [1, 2, 3]
  ```


- `Array.from`转换类数组对象

  ```js
  Array.from({ length: 3 }, () => 1)	//[1, 1, 1]
  Array.from({ length: 3 }, (value, index)=>index)	//[0, 1, 2]
  ```

  

### 极限值

JavaScript 使用一个32位整数，保存数组的元素个数，这意味着，数组成员最多只有 4294967295 （`2^32 - 1`）个

## 常用方法

```js
Array.isArray([,,,])	//true
[,,,] instanceof Array	//true
```

### 实例方法

```js
// instance
console.log(Array.prototype)
const arr = ['a', 'b', 'c']

copyWithin()
fill(value[, start[, end]])

forEach()
keys()
values()
entries()    // for (const [index, element] of arr.entries()) console.log(index, element)

find()
findIndex()    // arr.findIndex(i=>i==='c')    //2
includes()
indexOf()    // arr.indexOf('c', 1)    //2
lastIndexOf()

every()
some()

toLocaleString()
toString()
valueOf()

// 不会改变原数组，遍历时会跳过数组空元素
flat()
map()
filter()
reduce()
reduceRight()	//反方向遍历
slice()  // 适合用于复制数组片段，arr.slice(-2,-1)  //['b']

// 会改变原数组
pop()
push()		//返回改变后的数组长度
shift()
unshift()    // arr.unshift(1,2,3) //[1, 2, 3, 'a', 'b', 'c']
reverse()
sort()
splice()  // arr.splice(1,2,'bbb','ccc')  //['a', 'bbb', 'ccc']
// splice()适合用于往数组中间插入元素的场景，可以是删除、插入、替换
```

slice与splice

- slice不会改变原数组，适合用于复制数组片段
- splice会改变原数组，适用于插入、删除、替换的场景

### 静态方法

```js
console.dir(Array)
new Array(1,2,3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

/* Array.of() 一组参数=>数组实例 */
Array.of(1, 2, 3); // [1, 2, 3]
```

#### `Array.from`

```js
Array.from(arrayLike[, mapFn[, thisArg]])

/* Array.from() 类数组结构(任何可迭代对象)=>数组实例 */
Array.from('foo')  // ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x)  // [2, 4, 6]
Array.from({length: 5}, (v, i) => i);	// [0, 1, 2, 3, 4]

// 传入一个迭代器
const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
} };
console.log(Array.from(iter)); // [1, 2, 3]

// 将函数的arguments对象转换为数组
function getArgsArray() {
  return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
```

## 类数组对象

一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。 

常见的类数组对象有 arguments 和 DOM 方法的返回结果，函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数。

```js
Array.from(()=>{return 123})	//[]
```

```js
// 类数组对象不能被解构，但是函数的arguments对象可以，所以？
var a = {0:1,length:1}
[...a]		// TypeError: a is not iterable
```



## 定型数组

定型数组包含一套不同的引用类型，用于管理数值在内存中的类型。

[二进制数据 > ArrayBuffer](https://lins403.github.io/vuepress-doc/notesList/javascript/advanced/binary.html#arraybuffer)

## Skills

### 拷贝

| 数组/对象方法                     |        |                                                              |
| --------------------------------- | ------ | ------------------------------------------------------------ |
| 扩展运算符 `[...arr]`             | 浅拷贝 |                                                              |
| for、while循环遍历拷贝            | 浅     |                                                              |
| arr.map、arr.filter、arr.reduce   | 浅     |                                                              |
| arr.slice                         | 浅     |                                                              |
| arr.concat                        | 浅     |                                                              |
| Array.from                        | 浅     |                                                              |
| `JSON.parse(JSON.stringify(arr))` | 深拷贝 | [特殊情况](https://lins403.github.io/vuepress-doc/notesList/javascript/basic/json.html#%E7%89%B9%E6%AE%8A%E6%83%85%E5%86%B5) |
| `lodash.cloneDeep(arr)`           | 深拷贝 | 递归拷贝                                                     |

```js
const users = [
	{name: 'Alan', age: 18},
  {name: 'Bruce', age: 28},
]

const users_shallow_copy = users.slice()
console.log(users[0]===users_shallow_copy[0])		//true

var foo = [].concat(users)
console.log(users[0]===foo[0])		//true

// 一种深拷贝的捷径思路：手动对第二层实现浅拷贝
const users_deep_copy = users.map(obj => ({...obj}) )
console.log(users[0]===users_deep_copy[0])	//false
```

### 基础

#### 批量创建数组

```js
Array(5).map(()=>{console.log(1)})
// [empty × 5]
// 没有打印内容
```

```js
Array.apply(null, { length: 5 }).map(()=>{console.log(1)})
// [undefined, undefined, undefined, undefined, undefined]
// 打印了5次1
```

#### 数组去重

```js
// 数组去重
Array.from(new Set(arr))
// or
[...new Set(arr)]


//字符串去重
const str = [...new Set("zhhsajwnns")].join("")


// 数组去重合并
function combine(){
  const arr = Array.from(arguments).flat()
  return Array.from(new Set(arr))
}
var m = [1, 2, 2], n = [2,3,3]
combine(m,n)	//[1, 2, 3]
```

#### 清空数组

```js
arr = []	//只是赋值为一个空数组，原来的数组需要等待被垃圾回收
arr.length = 0
arr.splice(0, arr.length);
```

#### 数组求和

```js
arr.reduce((acc,cur)=>acc+cur)
```

### 进阶

#### 序列生成器

```js
const range = (start, end, step) => Array.from({ length: (end - start) / step + 1 }, (_, index) => start + index * step)
// 示例
range(0, 4, 1)		// [0, 1, 2, 3, 4]
range(1,10,2)		// [1, 3, 5, 7, 9]
```

#### flat的polyfill

```js
const flatDeep = (arr, depth = 1) => {
  if (depth === 0) return arr.slice()
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatDeep(cur, depth - 1) : cur), [])
}
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]
flatDeep(arr1)
flatDeep(arr1, 2)
flatDeep(arr1, Infinity)
```

### 其它



## Recap

【数组的几种创建方法】使用构造函数Array，没有new时也会被自动补上；使用字面量表示法；使用`Array.from`用一个类数组对象或迭代器创建一个数组；使用`Array.of`接收一组参数并创建一个数组实例，我觉得这个设计是用来取代构造函数Array接收多个参数的情况，这样构造函数Array方法就只需要用于创建一个初始化长度为n位的空数组。

【数组常用的实例方法】会改变原数组的有pop、push、shift、unshift、reverse、sort、splice。不会改变原数组的常用方法有fill；forEach、keys、values、entries；find、findIndex、includes、indexOf、lastIndexOf；every、some；flat、map、filter、reduce、reduceRight、slice等等。数组的原型Array.prototype是个数组.

【slice与splice】`slice`不会改变原数组，适合用于复制数组片段；`splice`会改变原数组，适用于插入、删除、替换的场景。

【定型数组】ArrayBuffer是原始的二进制数据，所有二进制数据处理的基础，定型数组是一种ArrayBuffer的视图，被设计用于提高与WebGL等原生库进行二进制数据交换的效率。例如使用Uint32Array来创建视图，就把buffer转换为一个32位整数的序列，每个整数4个字节，序列的长度就是buffer的长度除以4。定型数组更面向底层，js引擎针对做了优化，所以定型数组的速度非常快。
