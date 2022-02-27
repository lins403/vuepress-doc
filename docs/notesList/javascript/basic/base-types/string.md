# String

## 基础

### 不可变性

```js
var lang = 'Java';
lang[0] = 'H'
console.log(lang)		// 'Java'
lang.length = 2
console.log(lang)		// 'Java'
```

### 编码

JavaScript 字符串使用了两种 Unicode 编码混合的策略:UCS-2 和 UTF-16。对于可以采用 16 位编码的字符(BMP即Plane0区间: U+0000~U+FFFF)，这两种编码实际上是一样的。

所以实际上，JavaScript只支持 UTF-16 两字节的字符，不支持四字节的字符。

因此，JavaScript 的单位字符长度固定为16位长度，即2个字节。

```js
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`);  // \u00A9

// 返回指定的字符
'\u00A9'.charAt()	//'©'

// c返回0-65535的整数，即对应的UTF-16代码单元
'\u00A9'.charCodeAt()	//169

// 通过一串 Unicode 创建字符串
String.fromCodePoint(169)	//'©'

// 通过一串 码点 创建字符串。
String.fromCharCode(169)	//'©'
```

### 字符字面量

|          | 含义        |
| -------- | ----------- |
| `\n`     | 换行        |
| `\t`     | 水平制表符  |
| `\v`     | 垂直制表符  |
| `\b`     | 退格        |
| `\r`     | 回车        |
| `\f`     | 换页        |
| `\\\\`   | 反斜杠( \ ) |
| `\uXXXX` | unicode 码  |

### 模板字面量

```js
var longString = 'Long \
long \
long \
string';

console.log(longString)    // "Long long long string"
```

## API

### String()

```js
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1));  // "10"
console.log(String(value2));  // "true"
console.log(String(value3));  // "null"
console.log(String(value4));  // "undefined"
```

```js
new String('A') == 'A'		//true
new String('A') === 'A'		//false
String('A') === 'A'		//true
```

### Number.prototype.toString()

```js
let num = 10;
console.log(num.toString())	//"10"
console.log(num.toString(2))	//"1010"
console.log(num.toString(8))	// "12"
console.log(num.toString(10))	// "10"
console.log(num.toString(16))	// "a"
```

```js
// length计算包含的字符数量，与字节数无关
'你好，美女'.length	//5
'hello,'.length		//6
```

### String.prototype

好像所有方法都返回的是副本，不会覆盖原来的字符串

```js
concat()	//不改变原字符串
includes()
startsWith()
endsWith()
indexOf()
lastIndexOf()
match()
matchAll()
padStart()
padEnd()
repeat()
replace()	//不改变原字符串
replaceAll()
search()
slice()
split()	//第一个参数可以是字符串或 RegExp 对象，第二个参数即分割后得到的数组大小
substr()
substring()
toLowerCase()
toUpperCase()
trim()
trimStart()
trimEnd()
trimLeft()
trimRight()
toString()
valueOf()
String.prototype[@@iterator]()	//用于迭代与解构，const iterator = str[Symbol.iterator]()
```

```js
'12ab3cd'.split(/\d/)
// ['', '', 'ab', 'cd']
```

#### substring、substr、slice

```js
// substring、substr、slice 都不会改变原字符串
// MDN中推荐使用substring来替代substr
str.substring(indexStart[, indexEnd])
str.slice(beginIndex[, endIndex])
str.substr(start[, length])
```

- 参数为负值时
  - `substring`中转换为0
  - `slice`中转化为length+参数值（即反向索引）
  - `substr`中第一个参数也是反向索引，但第二个参数为负时会被转换为0

```js
let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil"
console.log(text.slice(2,5))  // => "zil"

// substring与slice，前者会交换顺序，如果第一个参数indexStart大于第二个参数indexEnd
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""

// 参数为负时
text.substring(-3)	//'Mozilla'，将所有负参数值都转换为0
text.slice(-3)	//'lla'，将所有负值参数都当成字符串长度加上负参数值（反方向索引）
text.substr(-3)	//'lla'，将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0

text.substring(3,-1)	//'Moz'
text.slice(3,-1)	//'ill'
text.substr(3,-1)	//''

text.substring(-3,-1)	//''
text.slice(-3,-1)	//'ll'
text.substr(-3,-1)	//''
```

