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
