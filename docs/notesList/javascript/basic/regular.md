# 正则表达式

## 规则

```javascript
\s    匹配一个空白字符，包括空格、制表符、换页符和换行符。
\w    匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]
\b    匹配一个词的边界
\B    匹配一个非单词边界
\n    在正则表达式中，它返回最后的第n个子捕获匹配的子字符串(捕获的数目以左括号计数)。
// '厦门在福建，深圳在广东。福建的省会是福州，广东的省会是广州。'.replace(/厦门在(.*?)，.*?\1的省会是(.*?)，.*/,'$2')
// '桔子和柚子杂交得到橙子，柚子和香橼杂交得到青柠，橙子和青柠杂交得到柠檬，橙子和桔子杂交得到柑子，橙子和柚子杂交得到葡萄柚'

\k转义符可用于引用命名子表达式
/(?<title>\w+), yes \k<title>/.test('Sir, yes Sir" in "Do you copy? Sir, yes Sir!')	//true
'Np1234'.replace(/(?<title>\D+)\d+/g,"$<title>")	//'Np'

*        等价于 {0,}
+        等价于 {1,}
?        等价于 {0,1}

{n}        n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。
{n,}    至少出现了n次
{n,m}    至少n次，最多m次

(x)        捕获括号，用 $1/$2/... 进行匹配

// 断言
(?:x)            匹配 'x' 但是不记住匹配项。非捕获组，不返回该组匹配的内容
x(?=y)        匹配'x'仅当'x'后面着'y'，这种叫做先行断言。
(?<=y)x        匹配'x'仅当'x'前面是'y'，这种叫做后行断言。
x(?!y)        匹配'x'仅当'x'后面不是'y'，这被称为正向否定查找。
(?<!y)x        匹配'x'仅当'x'前面不是'y'，这被称为反向否定查找。
```

### 标志

| flags | **RegExp**实例属性 |                                                              |
| ----- | ------------------ | ------------------------------------------------------------ |
| g     | global             | 全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束 |
| i     | ignoreCase         | 不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写  |
| m     | multiline          | 多行模式，表示查找到一行文本末尾时会继续查找                 |
| y     | sticky             | 粘附模式，表示只查找从 lastIndex 开始及之后的字符串          |
| u     | unicode            | Unicode 模式，启用 Unicode 匹配                              |
| s     | dotAll             | dotAll 模式，表示元字符 `.` 匹配任何字符(包括\n 或\r)。      |

```js
// 粘附模式，使用带 sticky 标志的正则表达式
var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true （译注：此例仅当 lastIndex = 1 时匹配成功，这就是 sticky 的作用）
regex.lastIndex = 5;
regex.test(str); // false （lastIndex 被 sticky 标志考虑到，从而导致匹配失败）
regex.lastIndex; // 0 （匹配成功或失败后都会重置为0）
```

### Escaping

```js
// 需要转义的字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // $&表示整个被匹配的字符串
}
escapeRegExp('/$1 equals ￥6.44/g')        // '/\$1 equals ￥6\.44/g'

// Escaping和分组没关系
'a123b456'.replace(/\D(\d+)\D(\d+)/g, '$&')        // 'a123b456'
```

## API

```javascript
RegExp 
    test()        // 返回 true 或 false
    exec()        // 返回一个数组，在未匹配到时会返回 null

String
    match()            // 返回一个数组，在未匹配到时会返回null（与exec()的返回结果一致！）
    matchAll()        // 返回一个迭代器（iterator）
    replace()        // 返回匹配到的位置索引，或者在失败时返回-1
    replaceAll()
    search()
    split()
```

### replace()

| 字符序列  | 替换文本                          |
| --------- | --------------------------------- |
| `$$`      | $                                 |
| `$&`      | 匹配整个模式的子字符串            |
| `$'`      | 匹配的子字符串之前的字符串        |
| $`        | 匹配的子字符串之后的字符串        |
| `$n`      | 匹配第 n 个捕获组的字符串，n是0~9 |
| `$<Name>` | 匹配捕获组名称                    |

```js
'Np1234'.replace(/\d/g,"$'")	//'Np234344'
'Np1234'.replace(/\d/g,"$`")	//'NpNpNp1Np12Np123'
'Np1234'.replace(/\d/g,"+$&")	//'Np+1+2+3+4'
'Np1234'.replace(/(?<words>\D+)\d+/g,"$<words>")	//'Np'
```

```js
const regEscape = function(str) {
  var specials = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g"); // .*+?|()[]{}\
  return str.replace(specials, "\\$&");
}
const regStr = regEscape('[ab]=a+b')		//=> '\\[ab\\]=a\\+b'
new RegExp(regStr)	//=> /\[ab\]=a\+b/
```

#### 第二个参数使用函数

```js
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
    }
  })
}
console.log(htmlEscape('<p class="greeting">Hello world!</p>')) 
// '&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;'
```



## 🌰Case

```javascript
// 中文
/[\u4E00-\u9FA5]/g
/^[\u4E00-\u9FA5]+$/

// no emoji
/[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
```

```javascript
// 动态变量
const maxLength = 16
const reg = new RegExp(`(.{${maxLength}}).*`, 'g')
value = value.replace(reg, '$1')    // 超过16位的字符被删除
```

## 易错

```JavaScript
[1-31]    // 不代表1到31，只代表1到3。

// . 只是匹配单个字符，通常要结合其它匹配字符使用，例如 *?+
'1234567890'.replace(/(.{5})./g, '$1')        // '1234567890'
```

# 参考

[正则表达式 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
