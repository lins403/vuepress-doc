# Array

## 极限值

JavaScript 使用一个32位整数，保存数组的元素个数，这意味着，数组成员最多只有 4294967295 （`2^32 - 1`）个

## 常用方法

```js
// instance
console.log(Array.prototype)


const arr = ['a', 'b', 'c']

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

toString()

// 不会改变原数组
flat()
map()
filter()
reduce()
slice()  // arr.slice(-2,-1)  //['b']

// 会改变原数组
pop()
push()
shift()
unshift()    // arr.unshift(1,2,3) //[1, 2, 3, 'a', 'b', 'c']
reverse()
sort()
splice()  // arr.splice(1,2,'bbb')  //['a', 'bbb']
```

```js
// static
console.dir(Array)

new Array(1,2,3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
Array.of(1, 2, 3); // [1, 2, 3]

Array.from('foo')  // ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x)  // [2, 4, 6]

Array.isArray('foobar');   // false
```

## 拷贝

[JavaScript中十种一步拷贝数组的方法](https://segmentfault.com/a/1190000018947028)

## Skills

### 批量创建数组

```js
Array(5).map(()=>{console.log(1)})
// [empty × 5]
// 没有打印内容
// ------------------------------------------------------------
Array.apply(null, { length: 5 }).map(()=>{console.log(1)})
// [undefined, undefined, undefined, undefined, undefined]
// 打印了5次1
```

### 数组去重

```js
Array.from(new Set(arr))
// or
[...new Set(arr)]

const str = [...new Set("zhhsajwnns")].join(""); //字符串去重
```
