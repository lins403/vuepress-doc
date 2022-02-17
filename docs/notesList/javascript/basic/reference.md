# 引用类型

## 基本引用类型

### Date

- `GMT` (**G**reenwich **M**ean **T**ime) 格林尼治平均时间
  - 格林尼治子午线为量度经度的本初子午线
- `UTC` (**C**oordinated **U**niversal **T**ime) 协调世界时
  - 地球每天的自转是有些不规则的，因为 GMT 基于天文观测本身的缺陷，所以已经被原子钟报时的 UTC 所取代
- `Unix time` (/ Posix time / Epoch time) 纪元时间
  - 1970-01-01 00:00:00  UTC

```js
// 由于浏览器差异和不一致性，强烈建议不要使用Date构造函数（MDN）
new Date()

// Date.now()返回自 Unix time 至今所经过的毫秒数。
Date.now()
typeof Date.now()	//number
typeof new Date(Date.now())	//object

// Date.parse()解析一个表示日期的字符串，并返回毫秒数（浏览器实现的差异,不推荐使用；也会被Date构造函数隐式调用）
Date.parse()

// Date.UTC()接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 Unix time 开始所经过的毫秒数
Date.UTC()
Date.UTC(year, month, day, hours, minutes, seconds, millisec)
```

```js
const pastSeconds = Math.floor(Date.now() / 1000)
const d = new Date(Date.now())
console.dir(d)
d.getFullYear()	//2022
d.getDay()	// 0-6, returns 0 on Sunday
d.getMonth()	// 0-11, returns 0 on January
d.getTime()

new Date(2022, 0, 1)	//Sat Jan 01 2022 00:00:00 GMT+0800 (中国标准时间)
new Date(2022, 0, 1).toLocaleDateString()	// '2022/1/1'
new Date(2022, 0, 1).toLocaleTimeString()	// '上午12:00:00'
new Date(2021, 11, 1).toLocaleString()	// '2021/12/1 上午12:00:00'
new Date(2021, 11, 1).toString()	// 'Wed Dec 01 2021 00:00:00 GMT+0800 (中国标准时间)'
```

#### utility libraries

[date-fns vs dayjs vs moment | npm trends](https://www.npmtrends.com/date-fns-vs-dayjs-vs-moment)

### RegExp

[正则表达式 | 小眯嘻的文档博客](https://lins403.github.io/vuepress-doc/notes/tools/regular.html)

### 原始值包装类型

#### 意义

由于原始值包装类型的存在，JavaScript 中的原始值可以被当成对象来使用，从而可以更方便的操作原始值

- 继承对象原型（Object.prototype）的方法，例如 `toString`、`valueOf`，并且可以重写这些方法
- 在自己的原型上定义方法，例如String的 `replace`，Number的 `toFixed`

#### 类型

有 3 种原始值包装类型:

1. `Boolean`
2. `Number`
3. `String`

在以读模式访问 字符串/布尔值/数字 的任何时候，后台都会执行以下三步：

```js
/* 伪代码，以string为例，boolean与number同理 */

// 1）创建一个 String 类型的实例
		let s1 = new String("some text");

// 2）调用实例上的特定方法如substring
		let s2 = s1.substring(2);

// 3）涉及原始值的语句执行完毕后，包装对象就会被销毁
    s1 = null;
```

`String()` 与 `new String()` 不同，前者只是一个转换类型的api

```js
/* String() */
typeof String(123)	//'string'
String(123) instanceof String	//false
'123' instanceof String		//false

/* new String() */
typeof new String(123)	//'object'
new String(123) instanceof String	//true
new String(123) instanceof Object	//true
```

`new Object()` 工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例

```js
new Object("some text") instanceof String		//true
new Object("some text") instanceof Object		//true
new Object(123) instanceof Number		//true
new Object(!!123) instanceof Boolean		//true
```

#### 其它

原始布尔值和 Boolean 对象之间存在较大区别，容易引起歧义，强烈建议永远不要使用 Boolean 对象

### 单例内置对象

当代码开始执行时，全局上下文中会存在两个内置对象

1. `Global`
   - 无法直接访问，但浏览器将 window 对象实现为 Global 对象的代理
   - 所有全局变量和函数都是 Global 对象的属性
   - isNaN()、isFinite()、parseInt()、parseFloat()、encodeURI()、eval()
   - 我理解它就是全局执行上下文的对象环境记录所绑定的对象
2. `Math`



## 集合引用类型

Object

Array

Map

WeakMap

Set

WeakSet