# 数据类型

## 判断数据类型

```js
// typeof
typeof function(){}  //"function"
typeof []  //"object"
typeof undefined  //"undefined"
typeof null  //"object"
typeof NaN  //"number"
```

```js
typeof []  //"object"
[] instanceof Object  //true
[] instanceof Array  //true

[].constructor === Array  //true
Array.isArray([]) // true

Object.prototype.toString.call([])  //'[object Array]'
Object.prototype.toString.call([]).slice(8, -1)  //'Array
```

## undefined和null

```js
undefined === undefined    //true
typeof undefined    //"undefined"

null === null        // true
typeof null            //"object"

undefined === null  //false
undefined == null  //true

Number('') // 0
Number(null)  //0
Number(undefined)  //NaN
```

## Number运算

```js
1 === 1.0  //true
0.1 + 0.2 === 0.3  //false
```

```js
NaN === NaN  //false
typeof NaN  //"number"
```

```js
+'123.456'  //123.456

~~'123.456'  //123
```

## 字符串

```js
var longString = 'Long \
long \
long \
string';

console.log(longString)    // "Long long long string"
```

由于历史原因，JavaScript只支持 UTF-16 两字节的字符，不支持四字节的字符，因此JavaScript 的单位字符长度固定为16位长度，即2个字节。

## 数组

JavaScript 使用一个32位整数，保存数组的元素个数，这意味着，数组成员最多只有 4294967295 （`2^32 - 1`）个

[JavaScript中十种一步拷贝数组的方法](https://segmentfault.com/a/1190000018947028)

## JSON

JavaScript Object Notation

JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null 

### JSON.stringify

```js
/**
 * @description: undefined、任意的函数以及symbol值在序列化过程中会被忽略，或转换为null
 * @param {*} value
 * @param { Array<String>|null } replacer :指定需要序列化的属性值
 * @param { Number|String } space :指定缩进用的空白字符串，用于美化输出
 * @return {JSON字符串}
 */
JSON.stringify(value[, replacer [, space]])
```

```js
// 🌰
var book = {
  title: 'Professional JavaScript',
  authors: ['Nicholas C. Zakas'],
  edition: 3,
  year: 2011
}
// var jsonText = JSON.stringify(book, null)  //全选
// var jsonText = JSON.stringify(book, null, "--")
var jsonText = JSON.stringify(book, ['title', 'edition'], 2)
original_download(jsonText, 'demo.json')
```

### JSON.parse

```js
/**
 * @description: 
 * @param { String } text :要被解析成 JavaScript 值的字符串
 * @param {*} reviver :转换器
 * @return { Object }
 */
JSON.parse(text[, reviver])
```

```js
// 🌰
var book = {
  title: 'Professional JavaScript',
  authors: ['Nicholas C. Zakas'],
  edition: 3,
  year: 2011,
  releaseDate: new Date(2011, 11, 1)
}

var jsonText = JSON.stringify(book)
var bookObj = JSON.parse(jsonText)
var bookCopy = JSON.parse(jsonText, function (key, value) {
  if (key == 'releaseDate') {
    return new Date(value)
  } else {
    return value
  }
})
```



## 二进制数据

Blob (Binary large object)
