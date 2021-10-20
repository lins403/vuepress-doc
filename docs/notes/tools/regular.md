# 正则表达式

## 规则

```javascript
\s	匹配一个空白字符，包括空格、制表符、换页符和换行符。
\w	匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]
\b	匹配一个词的边界
\B	匹配一个非单词边界
\n	在正则表达式中，它返回最后的第n个子捕获匹配的子字符串(捕获的数目以左括号计数)。
// '厦门在福建，深圳在广东。福建的省会是福州，广东的省会是广州。'.replace(/厦门在(.*?)，.*?\1的省会是(.*?)，.*/,'$2')
// '桔子和柚子杂交得到橙子，柚子和香橼杂交得到青柠，橙子和青柠杂交得到柠檬，橙子和桔子杂交得到柑子，橙子和柚子杂交得到葡萄柚'

*		等价于 {0,}
+		等价于 {1,}
?		等价于 {0,1}

{n}		n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。
{n,}	至少出现了n次
{n,m}	至少n次，最多m次

(x)		捕获括号，用 $1/$2/... 进行匹配

// 断言
(?:x)			匹配 'x' 但是不记住匹配项。非捕获组，不返回该组匹配的内容
x(?=y)		匹配'x'仅当'x'后面着'y'，这种叫做先行断言。
(?<=y)x		匹配'x'仅当'x'前面是'y'，这种叫做后行断言。
x(?!y)		匹配'x'仅当'x'后面不是'y'，这被称为正向否定查找。
(?<!y)x		匹配'x'仅当'x'前面不是'y'，这被称为反向否定查找。
```

### 标志

```js
g
i
m
s		// 允许 . 匹配换行符
u		// 使用unicode码的模式进行匹配
y		// 执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始		//仅当 lastIndex 等于设定值时匹配成功
```

```js
// 使用带 sticky 标志的正则表达式
var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true （译注：此例仅当 lastIndex = 1 时匹配成功，这就是 sticky 的作用）
regex.lastIndex = 5;
regex.test(str); // false （lastIndex 被 sticky 标志考虑到，从而导致匹配失败）
regex.lastIndex; // 0 （匹配失败后重置）
```

### Escaping

```js
// 需要转义的字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // $&表示整个被匹配的字符串
}
escapeRegExp('/$1 equals ￥6.44/g')		// '/\$1 equals ￥6\.44/g'

// Escaping和分组没关系
'a123b456'.replace(/\D(\d+)\D(\d+)/g, '$&')		// 'a123b456'
```



## API

```javascript
RegExp 
	test()		// 返回一个数组，在未匹配到时会返回 null
	exec()		// 返回 true 或 false

String
	match()			// 返回一个数组，在未匹配到时会返回 null
	matchAll()		// 返回一个迭代器（iterator）
	replace()		// 返回匹配到的位置索引，或者在失败时返回-1
	replaceAll()
	search()
	split()
```



## 🌰

```javascript
// 中文
/[\u4E00-\u9FA5]/g
// no emoji
/[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
```



```javascript
// 动态变量
const maxLength = 16
const reg = new RegExp(`(.{${maxLength}}).*`, 'g')
value = value.replace(reg, '$1')	// 超过16位的字符被删除
```



## 易错

```JavaScript
[1-31]	// 不代表1到31，只代表1到3。

// . 只是匹配单个字符，通常要结合其它匹配字符使用，例如 *?+
'1234567890'.replace(/(.{5})./g, '$1')		// '1234567890'
```





# 参考

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions>

