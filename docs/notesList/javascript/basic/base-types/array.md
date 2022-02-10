# Array

## 基础

### 创建方法

- 使用 new 操作符和 Array 构造函数

  ```js
  const colors = new Array("red", "blue", "green")
  
  Array(3).fill()	//[undefined, undefined, undefined]
  Array(3).fill(0)	//[0, 0, 0]
  ```

- 使用数组字面量(array literal)表示法（并不会调用Array构造函数）

  ```js
  const colors = ["red","blue","green"]
  
  const options = [,,,,,]; // 创建包含 5 个元素的数组，占位数组(undefined填充)
  ```

- 使用ES6新增的静态方法 `Array.of`

  ```
  Array.of("red", "blue", "green")
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

// 不会改变原数组
flat()
map()
filter()
reduce()
reduceRight()	//反方向遍历
slice()  // 适合用于复制数组片段，arr.slice(-2,-1)  //['b']

// 会改变原数组
pop()
push()
shift()
unshift()    // arr.unshift(1,2,3) //[1, 2, 3, 'a', 'b', 'c']
reverse()
sort()
splice()  // arr.splice(1,2,'bbb')  //['a', 'bbb']
// splice()适合用于往数组中间插入元素的场景，可以是删除、插入、替换
```

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

## 定型数组

定型数组包含一套不同的引用类型，用于管理数值在内存中的类型。

[二进制数据 > ArrayBuffer](https://lins403.github.io/vuepress-doc/notesList/javascript/basic/binary.html#arraybuffer)

## Skills

### 拷贝

[JavaScript中十种一步拷贝数组的方法](https://segmentfault.com/a/1190000018947028)

### 批量创建数组

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

### 数组去重

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

### 序列生成器

```js
const range = (start, end, step) => Array.from({ length: (end - start) / step + 1 }, (_, index) => start + index * step)
// 示例
range(0, 4, 1)		// [0, 1, 2, 3, 4]
range(1,10,2)		// [1, 3, 5, 7, 9]
```

### flat的polyfill

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

