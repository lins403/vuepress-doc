(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{445:function(t,e,a){"use strict";a.r(e);var s=a(43),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码"}},[t._v("#")]),t._v(" 编码")]),t._v(" "),a("h2",{attrs:{id:"unicode、utf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode、utf"}},[t._v("#")]),t._v(" Unicode、UTF")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Unicode")]),t._v(" 编码只是定义了字符集")]),t._v(" "),a("li",[a("code",[t._v("UTF")]),t._v("(Unicode Transformation Format) 系列编码就是对 Unicode 字符集的"),a("strong",[t._v("实现")]),t._v("（如何存储）")])]),t._v(" "),a("h2",{attrs:{id:"编码空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码空间"}},[t._v("#")]),t._v(" 编码空间")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编码区间是 "),a("code",[t._v("0x0~ 0x10FFFF")]),t._v(" （17个planes，每个平面占 65536 个字符，共 17 * 2"),a("sup",[t._v("16")]),t._v("）")])]),t._v(" "),a("li",[a("p",[t._v("Plane0 (基本多语言平面，Basic Multilingual Plane):  "),a("code",[t._v("0x0~0xFFFF")]),t._v("，包含了最常用的字符")])]),t._v(" "),a("li",[a("p",[t._v("其余16种辅助平面 (Supplementary Planes): "),a("code",[t._v("0x10000 ~ 0x10FFFF")]),t._v("，Plane3至14还没有使用，15和16为私人使用区")])])]),t._v(" "),a("h2",{attrs:{id:"代码点和码元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码点和码元"}},[t._v("#")]),t._v(" 代码点和码元")]),t._v(" "),a("p",[a("code",[t._v("代码点")]),t._v("（Code Point)：一个代码点等同于一个 Unicode 字符，就是某个任意字符在Unicode编码表中对应的代码值")]),t._v(" "),a("p",[a("code",[t._v("码元")]),t._v("（Code Unit，也称“代码单元”）指一个已编码的文本中具有最短的"),a("strong",[t._v("比特组合的单元")]),t._v("，是最小的不可拆分的部分")]),t._v(" "),a("ul",[a("li",[t._v("对于 UTF-8 来说，码元是8比特长（1个字节）；对于UTF-16来说，码元是16比特长；对于UTF-32来说，码元是32比特长。码值（Code Value）是过时的用法。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Unicode 代码点")]),t._v(" "),a("th",[t._v("U+0041")]),t._v(" "),a("th",[t._v("U+00DF")]),t._v(" "),a("th",[t._v("U+6771")]),t._v(" "),a("th",[t._v("U+10400")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("表示字形")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UTF-32 代码单元")]),t._v(" "),a("td",[t._v("00000041")]),t._v(" "),a("td",[t._v("000000DF")]),t._v(" "),a("td",[t._v("00006771")]),t._v(" "),a("td",[t._v("00010400")])]),t._v(" "),a("tr",[a("td",[t._v("UTF-16 代码单元")]),t._v(" "),a("td",[t._v("0041")]),t._v(" "),a("td",[t._v("00DF")]),t._v(" "),a("td",[t._v("6771")]),t._v(" "),a("td",[t._v("D801DC00")])]),t._v(" "),a("tr",[a("td",[t._v("UTF-8 代码单元")]),t._v(" "),a("td",[t._v("41")]),t._v(" "),a("td",[t._v("C39F")]),t._v(" "),a("td",[t._v("E69DB1")]),t._v(" "),a("td",[t._v("F0909080")])])])]),t._v(" "),a("h2",{attrs:{id:"utf-8、utf-16、utf-32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-8、utf-16、utf-32"}},[t._v("#")]),t._v(" UTF-8、UTF-16、UTF-32")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("UTF-8")]),t._v(" 使用 "),a("strong",[t._v("1-4")]),t._v(" 个字节，ASCII 使用一个字节编码")]),t._v(" "),a("li",[a("code",[t._v("UTF-16")]),t._v(" 大部分(Plane0区间内的字符)使用 "),a("strong",[t._v("2")]),t._v(" 个字节，小部分是 "),a("strong",[t._v("4")]),t._v(" 个字节")]),t._v(" "),a("li",[a("code",[t._v("UTF-32")]),t._v(" 全部使用 "),a("strong",[t._v("4")]),t._v(" 个字节")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("UTF-8")]),t._v(" uses anywhere from one to four bytes per character depending on what character you're encoding. Characters within the ASCII range take only one byte while very unusual characters take four.")]),t._v(" "),a("p",[a("code",[t._v("UTF-32")]),t._v(" uses four bytes per character regardless of what character it is, so it will always use more space than UTF-8 to encode the same string. The only advantage is that you can calculate the number of characters in a UTF-32 string by only counting bytes.")]),t._v(" "),a("p",[a("code",[t._v("UTF-16")]),t._v(" uses two bytes for most charactes, four bytes for unusual ones.")])]),t._v(" "),a("h3",{attrs:{id:"utf-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-8"}},[t._v("#")]),t._v(" UTF-8")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Unicode Segment（16）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Encoding（2）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Bytes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x000000 - 0x00007F")]),t._v("（0-127）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0xxxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x000080 - 0x0007FF")]),t._v("（2048）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("110xxxxx 10xxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x000800 - 0x00FFFF")]),t._v("（65535）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("1110xxxx 10xxxxxx 10xxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x010000 - 0x10FFFF")]),t._v("（100w+）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("11110xxx 10xxxxxx 10xxxxxx 10xxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")])])])]),t._v(" "),a("h3",{attrs:{id:"utf-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-16"}},[t._v("#")]),t._v(" UTF-16")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Code Point Segment")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Encoding")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Bytes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x000000 - 0x00FFFF")]),t._v("（Plane 0，65535）"),a("br"),a("br"),t._v("实际上是"),a("code",[t._v("0x000000-0xd7FF")]),t._v(" "),a("code",[t._v("0x00E000-0x00FFFF")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("xxxxxxxx xxxxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0x010000 - 0x10FFFF")]),t._v("（100w+）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("110110yy yyyyyyyy 110111xx xxxxxxxx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")])])])]),t._v(" "),a("h4",{attrs:{id:"代理对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理对"}},[t._v("#")]),t._v(" 代理对")]),t._v(" "),a("p",[t._v("为了辨别一个UTF-16字符编码，是二个基本平面的字符，还是一个扩展平面的字符，Unicode 将基本平面的两段代码点保留，不表示任意字符，计算机能将16位整数的值匹配上代理，就可以辨别是一个扩展平面的字符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("110110xx xxxxxxxx")]),t._v("（"),a("code",[t._v("0xd800")]),t._v(" - "),a("code",[t._v("0xdbff")]),t._v("）高位代理 / 前导代理 (High/Lead Surrogate)")]),t._v(" "),a("li",[a("code",[t._v("110111xx xxxxxxxx")]),t._v("（"),a("code",[t._v("0xdc00")]),t._v(" - "),a("code",[t._v("0xdfff")]),t._v("）低位代理 / 后尾代理 (Low/Trail Surrogate)")]),t._v(" "),a("li",[a("code",[t._v("110110yy yyyyyyyy 110111xx xxxxxxxx")]),t._v(" 扩展平面字符")])]),t._v(" "),a("p",[t._v("辅助平面中的码位从U+10000到U+10FFFF 共计2"),a("sup",[t._v("20")]),t._v("个，需要20位来表示。如果用两个16位长的整数组成的序列来表示，第一个整数（称为前导代理）要容纳上述20位的前10位，第二个整数（称为后尾代理）容纳上述20位的后10位。")]),t._v(" "),a("p",[t._v("而且需要将前导代理和后尾代理区分开来，因此，需要在基本多语言平面中保留不对应于Unicode字符的2048个码位，就足以容纳前导代理与后尾代理所需要的编码空间。")]),t._v(" "),a("h4",{attrs:{id:"utf-16与ucs-2的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-16与ucs-2的关系"}},[t._v("#")]),t._v(" UTF-16与UCS-2的关系")]),t._v(" "),a("p",[t._v("UTF-16 可看成是 UCS-2 的超集。")]),t._v(" "),a("p",[t._v("UCS-2 编码只能表示Plane0范围内（小于0x10000）的字符，这个范围内UTF-16编码就等于UCS码。")]),t._v(" "),a("p",[t._v("在没有辅助平面字符前，UTF-16与UCS-2所指的是同一个意思，但当引入辅助平面字符后，就称为UTF-16了。")]),t._v(" "),a("h3",{attrs:{id:"优缺点比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点比较"}},[t._v("#")]),t._v(" 优缺点比较")]),t._v(" "),a("ul",[a("li",[t._v("UTF-32 非常浪费存储空间")]),t._v(" "),a("li",[t._v("UTF-8 节省存储空间")]),t._v(" "),a("li",[t._v("UTF-16 比起 UTF-8，好处在于大部分字符都以固定大小的 2 字节存储，但 UTF-16 却无法兼容于ASCII编码。")])]),t._v(" "),a("h2",{attrs:{id:"大端模式与小端模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大端模式与小端模式"}},[t._v("#")]),t._v(" 大端模式与小端模式")]),t._v(" "),a("p",[t._v("在计算机中，数据的存储是以字节为单位的，那么当一个字符需要使用多个字节来表示的时候，就会产生一个问题，那就是"),a("u",[t._v("多字节字符应该从前往后组合还是从后往前组合")])]),t._v(" "),a("p",[a("code",[t._v("大端模式")]),t._v("(Big-endian)：最高有效位保存在第一个字节，而最低有效位保存在最后一个字节")]),t._v(" "),a("ul",[a("li",[t._v("数据的高字节位保存在内存的低地址中，而数据的低字节位保存在内存的高地址中")])]),t._v(" "),a("p",[a("code",[t._v("小端模式")]),t._v(" (Little-endian)：最低有效位保存在第一个字节，最高有效位保存在最后一个字节（与二进制表达式方向一致）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以 `双` 字为例，转成二进制为：0101001111001100，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以一个字节为单位，就可以拆分成：01010011 和 11001100，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其中第一部分就称之为高位字节，第二部分就称之为低位字节")]),t._v("\n\n大端模式存储为："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11001100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01010011")]),t._v("\t（从左到右）\n小端模式存储为："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01010011")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11001100")]),t._v("\t（从右到左）\n")])])]),a("h4",{attrs:{id:"优劣势比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优劣势比较"}},[t._v("#")]),t._v(" 优劣势比较")]),t._v(" "),a("p",[t._v("一开始是由于不同架构的CPU处理多个字节数据的顺序不一样，比如X86上运行的是小端模式，KEIL C51是大端模式。但是后来互联网流行，TCP/IP协议规定为大端模式，一般通讯协议都采用的是大端模式。因此大端模式，也称为“网络字节序”，")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("小端模式")]),t._v("强制转换类型时不需要调整字节内容，直接截取低字节即可；")]),t._v(" "),a("li",[a("code",[t._v("大端模式")]),t._v("由于符号位为第一个字节，很方便判断正负。")])]),t._v(" "),a("p",[t._v("BMP、GIF – Little Endian")]),t._v(" "),a("p",[t._v("JPEG、Adobe PS – Big Endian")]),t._v(" "),a("h3",{attrs:{id:"bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),a("p",[a("code",[t._v("BOM")]),t._v(" (byte order mark，字节顺序标记），出现在文本文件头部。")]),t._v(" "),a("p",[a("code",[t._v("BOM")]),t._v(" 就是用来标记当前文件采用的是大端模式还是小端模式存储。")]),t._v(" "),a("h2",{attrs:{id:"url编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url编码"}},[t._v("#")]),t._v(" URL编码")]),t._v(" "),a("h3",{attrs:{id:"charset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charset"}},[t._v("#")]),t._v(" charset")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v('<meta http-equiv="Content-Type" content="text/html;charset=xxxx">')])])]),t._v(" "),a("p",[t._v("如果上面这一行最后的charset是UTF-8，则URL就以UTF-8编码；如果是GB2312，URL就以GB2312编码。")]),t._v(" "),a("p",[t._v('举例来说，百度是GB2312编码，Google是UTF-8编码。因此，从它们的搜索框中搜索同一个词"春节"，生成的查询字符串是不一样的。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("characterSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"encodeuri-与-encodeuricomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encodeuri-与-encodeuricomponent"}},[t._v("#")]),t._v(" encodeURI() 与 encodeURIComponent()")]),t._v(" "),a("p",[t._v("取代了 escape() 和 unescape()方法，URI 方法始终是首选方法，因为它们对所有 Unicode 字符进行编码，而原来的方 法只能正确编码 ASCII 字符")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" partOfURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-page#with,speci@l&/\"characters\"?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fullURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://my-website.com/my-page?query=\"a%b\"&user=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partOfURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good, escapes special characters")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'my-page%23with%2Cspeci%40l%26%2F%22characters%22%3F'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good, encoded URL is valid")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'https://my-website.com/my-page?query=%22this%25thing%22&user=1'")]),t._v("\n")])])]),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/51202412",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode 编码及 UTF-32, UTF-16 和 UTF-8 - 知乎"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/UTF-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTF-16 - 维基百科，自由的百科全书"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zwx900102/article/details/115799469",target:"_blank",rel:"noopener noreferrer"}},[t._v("为了彻底理解乱码问题，一怒之下我把字符集历史扒了个底朝天_zwx900102的博客-CSDN博客"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);