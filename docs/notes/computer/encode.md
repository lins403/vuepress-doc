# 编码

## Unicode、UTF

- `Unicode` 编码只是定义了字符集
- `UTF `(Unicode Transformation Format) 系列编码就是对 Unicode 字符集的**实现**（如何存储）

## 编码空间

- 编码区间是 `0x0~ 0x10FFFF` （17个planes，每个平面占 65536 个字符，共 17 * 2<sup>16</sup>）

- Plane0 (基本多语言平面，Basic Multilingual Plane):  `0x0~0xFFFF`，包含了最常用的字符
- 其余16种辅助平面 (Supplementary Planes): `0x10000 ~ 0x10FFFF`，Plane3至14还没有使用，15和16为私人使用区

## 代码点和码元

`代码点`（Code Point)：一个代码点等同于一个 Unicode 字符，就是某个任意字符在Unicode编码表中对应的代码值

`码元`（Code Unit，也称“代码单元”）指一个已编码的文本中具有最短的**比特组合的单元**，是最小的不可拆分的部分

- 对于 UTF-8 来说，码元是8比特长（1个字节）；对于UTF-16来说，码元是16比特长；对于UTF-32来说，码元是32比特长。码值（Code Value）是过时的用法。

| Unicode 代码点  | U+0041   | U+00DF   | U+6771   | U+10400  |
| --------------- | -------- | -------- | -------- | -------- |
| 表示字形        |          |          |          |          |
| UTF-32 代码单元 | 00000041 | 000000DF | 00006771 | 00010400 |
| UTF-16 代码单元 | 0041     | 00DF     | 6771     | D801DC00 |
| UTF-8 代码单元  | 41       | C39F     | E69DB1   | F0909080 |

## UTF-8、UTF-16、UTF-32

- `UTF-8` 使用 **1-4** 个字节，ASCII 使用一个字节编码
- `UTF-16` 大部分(Plane0区间内的字符)使用 **2** 个字节，小部分是 **4** 个字节
- `UTF-32` 全部使用 **4** 个字节

> `UTF-8` uses anywhere from one to four bytes per character depending on what character you're encoding. Characters within the ASCII range take only one byte while very unusual characters take four.
>
> `UTF-32` uses four bytes per character regardless of what character it is, so it will always use more space than UTF-8 to encode the same string. The only advantage is that you can calculate the number of characters in a UTF-32 string by only counting bytes.
>
> `UTF-16` uses two bytes for most charactes, four bytes for unusual ones.

### UTF-8

|     Unicode Segment（16）      |             Encoding（2）             | Bytes |
| :----------------------------: | :-----------------------------------: | :---: |
| `0x000000 - 0x00007F`（0-127） |              `0xxxxxxx`               |   1   |
| `0x000080 - 0x0007FF`（2048）  |          `110xxxxx 10xxxxxx`          |   2   |
| `0x000800 - 0x00FFFF`（65535） |     `1110xxxx 10xxxxxx 10xxxxxx`      |   3   |
| `0x010000 - 0x10FFFF`（100w+） | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` |   4   |

### UTF-16

|                      Code Point Segment                      |               Encoding                | Bytes |
| :----------------------------------------------------------: | :-----------------------------------: | :---: |
| `0x000000 - 0x00FFFF`（Plane 0，65535）<br /><br />实际上是`0x000000-0xd7FF` `0x00E000-0x00FFFF` |          `xxxxxxxx xxxxxxxx`          |   2   |
|                `0x010000 - 0x10FFFF`（100w+）                | `110110yy yyyyyyyy 110111xx xxxxxxxx` |   4   |

#### 代理对

为了辨别一个UTF-16字符编码，是二个基本平面的字符，还是一个扩展平面的字符，Unicode 将基本平面的两段代码点保留，不表示任意字符，计算机能将16位整数的值匹配上代理，就可以辨别是一个扩展平面的字符

- `110110xx xxxxxxxx`（`0xd800` - `0xdbff`）高位代理 / 前导代理 (High/Lead Surrogate)
- `110111xx xxxxxxxx`（`0xdc00` - `0xdfff`）低位代理 / 后尾代理 (Low/Trail Surrogate)
- `110110yy yyyyyyyy 110111xx xxxxxxxx` 扩展平面字符

辅助平面中的码位从U+10000到U+10FFFF 共计2<sup>20</sup>个，需要20位来表示。如果用两个16位长的整数组成的序列来表示，第一个整数（称为前导代理）要容纳上述20位的前10位，第二个整数（称为后尾代理）容纳上述20位的后10位。

而且需要将前导代理和后尾代理区分开来，因此，需要在基本多语言平面中保留不对应于Unicode字符的2048个码位，就足以容纳前导代理与后尾代理所需要的编码空间。

#### UTF-16与UCS-2的关系

UTF-16 可看成是 UCS-2 的超集。

UCS-2 编码只能表示Plane0范围内（小于0x10000）的字符，这个范围内UTF-16编码就等于UCS码。

在没有辅助平面字符前，UTF-16与UCS-2所指的是同一个意思，但当引入辅助平面字符后，就称为UTF-16了。

### 优缺点比较

- UTF-32 非常浪费存储空间
- UTF-8 节省存储空间
- UTF-16 比起 UTF-8，好处在于大部分字符都以固定大小的 2 字节存储，但 UTF-16 却无法兼容于ASCII编码。



## 大端模式与小端模式

在计算机中，数据的存储是以字节为单位的，那么当一个字符需要使用多个字节来表示的时候，就会产生一个问题，那就是<u>多字节字符应该从前往后组合还是从后往前组合</u>

`大端模式`(Big-endian)：最高有效位保存在第一个字节，而最低有效位保存在最后一个字节

- 数据的高字节位保存在内存的低地址中，而数据的低字节位保存在内存的高地址中

`小端模式` (Little-endian)：最低有效位保存在第一个字节，最高有效位保存在最后一个字节（与二进制表达式方向一致）

```js
// 以 `双` 字为例，转成二进制为：0101001111001100，
// 以一个字节为单位，就可以拆分成：01010011 和 11001100，
// 其中第一部分就称之为高位字节，第二部分就称之为低位字节

大端模式存储为：11001100 01010011	（从左到右）
小端模式存储为：01010011 11001100	（从右到左）
```

#### 优劣势比较

一开始是由于不同架构的CPU处理多个字节数据的顺序不一样，比如X86上运行的是小端模式，KEIL C51是大端模式。但是后来互联网流行，TCP/IP协议规定为大端模式，一般通讯协议都采用的是大端模式。因此大端模式，也称为“网络字节序”，

- `小端模式`强制转换类型时不需要调整字节内容，直接截取低字节即可；
- `大端模式`由于符号位为第一个字节，很方便判断正负。

BMP、GIF – Little Endian

JPEG、Adobe PS – Big Endian

### BOM

`BOM` (byte order mark，字节顺序标记），出现在文本文件头部。

`BOM` 就是用来标记当前文件采用的是大端模式还是小端模式存储。

## URL编码

### charset

> `<meta http-equiv="Content-Type" content="text/html;charset=xxxx">`


如果上面这一行最后的charset是UTF-8，则URL就以UTF-8编码；如果是GB2312，URL就以GB2312编码。

举例来说，百度是GB2312编码，Google是UTF-8编码。因此，从它们的搜索框中搜索同一个词"春节"，生成的查询字符串是不一样的。

```js
console.log(document.charset)
console.log(document.characterSet)
```

### encodeURI() 与 encodeURIComponent()

取代了 escape() 和 unescape()方法，URI 方法始终是首选方法，因为它们对所有 Unicode 字符进行编码，而原来的方 法只能正确编码 ASCII 字符

```js
const partOfURL = 'my-page#with,speci@l&/"characters"?';
const fullURL = 'https://my-website.com/my-page?query="a%b"&user=1';

encodeURIComponent(partOfURL); // Good, escapes special characters
// 'my-page%23with%2Cspeci%40l%26%2F%22characters%22%3F'

encodeURI(fullURL);  // Good, encoded URL is valid
// 'https://my-website.com/my-page?query=%22this%25thing%22&user=1'
```



# 参考

[Unicode 编码及 UTF-32, UTF-16 和 UTF-8 - 知乎](https://zhuanlan.zhihu.com/p/51202412)

[UTF-16 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/UTF-16)

[为了彻底理解乱码问题，一怒之下我把字符集历史扒了个底朝天_zwx900102的博客-CSDN博客](https://blog.csdn.net/zwx900102/article/details/115799469)