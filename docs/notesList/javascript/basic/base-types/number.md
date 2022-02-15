# Number

## 浮点数精度

- JavaScript 中所有数字，包括整数和小数都只有一种类型，即 Number类型
- javascript以 <mark>64 位双精度浮点数</mark> 存储所有 Number 类型值
  - 但整数运算的情况下，JavaScript 会自动把 64 位浮点数，转成 32 位整数
  - 因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript总是想方设法把值转换为整数，例如小数点后没有数字，以及小数点后只有0的情况
  - `Number.isInteger` 辨别一个数值是否保存为整数

### 存储

|                       | size    |
| --------------------- | ------- |
| Sign bit              | 1 bit   |
| Exponent              | 11 bits |
| Significant precision | 52 bits |

::: tip 关于指数偏移量

在32位浮点数中，指数位有8位，偏移量是127；（要扣除0和255）

在64位浮点数中，指数位有11位，偏移量是1023；（要扣除0和2048）

指数位也需要表示正负，所以一种做法是把高位置是1的数字当作负数，但这会给变量比较运算带来麻烦，所以通过给所有数加上偏移量，这样的话进行比较运算时就不存在负数，不会混淆。

:::

#### 🌰例子

```js
27.5 转换为二进制 11011.1
11011.1 转换为科学记数法 1.10111*2^4

符号位 为1(正数)
指数位 为(4 + 指数偏移量1023)，即1027，因为它是十进制的需要转换为二进制即 10000000011
小数部分为10111，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000

符号位+指数位+小数部分 (阶数)
0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000
```

### 极限值

安全整数

- `Number.isSafeInteger()`

- <u>在此范围内的整数和双精度浮点数是一一对应的</u>，不会存在一对多或多对一的情况。默认情况下，ECMAScript中的所有整数都表示为有符号数，即占用符号位

`Number.EPSILON`：ES6，极小的常量，目的在于为浮点数计算设置一个误差范围，如果误差能够小于Number.EPSILON，我们就可以认为结果是可靠的。

`Number.isFinite()`

```js
Number.MAX_SAFE_INTEGER: 9007199254740991	// 2^53 - 1
Number.MIN_SAFE_INTEGER: -9007199254740991	// -2^53 + 1
Number.EPSILON: 2.220446049250313e-16
Number.MIN_VALUE: 5e-324
Number.POSITIVE_INFINITY: Infinity
Number.NEGATIVE_INFINITY: -Infinity
Number.NaN: NaN
```

### 拓展

浮点数在机内用指数型式表示，分解为：**数符，尾数，指数符，指数** 四部分：

- 数符/符号位 (Sign bit)：占 1 位二进制，表示数的正负。

- 指数符：占 1 位二进制，表示指数的正负。

- 尾数：表示浮点数有效数字，0.xxxxxxx, 但不存开头的 0 和点。

- 指数 (Exponent)：存指数的有效数字。

知道了这四部分的占位，按二进制估计大小范围，再换算为十进制，就是你想知道的数值范围。

单精度浮点数（`float`）

- 在内存中占 4 个字节
- 数符加尾数占 24 位，指数位（指数符加指数）占 8 位，指数偏移量 2<sup>7</sup>-1
- 2^23 = 8388608，一共七位，这意味着最多能有 7 位有效数字，但绝对能保证的为 6 位，也即float的精度为 6~7 位有效数字

双精度浮点数（`double`）

- 在内存中占 8 个字节
- 数符加尾数占 ~~48~~ 53 位，指数符加指数占 ~~16~~ 11 位，指数偏移量 2<sup>10</sup>-1
- 2^52 = 4503599627370496，一共16位，同理，double的精度为15~16 位



## 精度丢失

> 之所以存在这种舍入错误，是因为使用了IEEE 754（二进制浮点数算术标准）数值，这种错误并非ECMAScript所独有。其他使用相同格式的语言也有这个问题。

#### 原理

计算机存储双精度浮点数，需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则 {符号位+(指数位+指数偏移量的二进制)+小数部分} 存储二进制的科学记数法。

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差。

#### 解决方案

[number-precision: 🚀1K tiny](https://github.com/nefe/number-precision)

- 实现原理是将浮点数转为整数进行运算（基于「乘法运算」，转成字符串，将小数点replace掉）



## Number实例方法

```js
// 保留 digits 位小数
toFixed(digits)

// 取 precision 位有效数字
toPrecision(precision)

// 基于 radix 进制解析，并转换为string
toString(radix)		//radix是2-36之间的整数
Number(10).toString(2)	//'1010'
Number(10).toString(16)		//'a'
```



## 数值运算

```js
1 === 1.0  //true
0.1 + 0.2 === 0.3  //false
0.3 / 0.1  //false
```

```js
NaN === NaN  //false
'NaN'==NaN	//false
typeof NaN  //"number"
Object.is(NaN,NaN)	//true
```

### Number

```js
Number(NaN)	//NaN
Number(undefined)	//NaN
Number(null)	//0
Number('')	//0
Number('abc')	//NaN
Number(一个对象)	//调用valueOf()方法，如果转换结果是NaN，则调用toString()方法，再按照转换字符串的规则转换。
Number({})	//NaN
```

### parseInt

```js
// 为避免解析出错，应该始终传递第二个参数
parseInt('16px',10)  //16
parseInt('110',2)  //6，二进制
parseInt('110',8)  //72，八进制

+'123.456'  //123.456
~~'123.456'  //123
```

### parseFloat

```js
parseFloat("1234blue")	//1234
parseFloat("0xA")	//0
parseFloat("0908.5")	//908.5
parseFloat("3.125e7")	//31250000
```

### Math

```js
Math.floor(Math.PI)  //3
Math.ceil(Math.PI)  //4
Math.round(Math.PI)  //3
Math.PI.toFixed(3)  //'3.142'
```

### 操作符

```js
1 + '2' // '12'
1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5

// 比较首字母的ASCII值
"Brick" < "alphabet" // true
"Brick".toLowerCase() < "alphabet".toLowerCase() // false
```

### 进制

```js
// 0 - 八进制前缀（但不推荐使用，严格模式下010是10）
010	//8

// 0o - 八进制前缀
0o11	//9

// 0x - 十六进制前缀
0xA	//10
0xa	//10
0x1f	//31
```

### Infinity

```js
0/0	//NaN
1/0	//Infinity
Infinity + 1	//Infinity
Infinity * 2	//Infinity
Infinity * 0	//NaN
Infinity * Infinity	//Infinity
-Infinity*Infinity	//-Infinity
Infinity - Infinity	//NaN
Infinity / Infinity	//NaN
```

### 其它

```js
`+0` 和 `-0` 所有情况下始终等同

false == 0 && true == 1	//true
```

  



## 参考

[js精度丢失问题-看这篇文章就够了(通俗易懂)](https://zhuanlan.zhihu.com/p/100353781)
