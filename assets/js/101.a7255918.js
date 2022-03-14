(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{502:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"二进制数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制数据"}},[t._v("#")]),t._v(" 二进制数据")]),t._v(" "),s("h2",{attrs:{id:"arraybuffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraybuffer"}},[t._v("#")]),t._v(" ArrayBuffer")]),t._v(" "),s("p",[s("code",[t._v("ArrayBuffer")]),t._v(" 是核心对象，是所有的基础，"),s("u",[t._v("是原始的二进制数据")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("ArrayBuffer")]),t._v("对象、"),s("code",[t._v("TypedArray")]),t._v("视图和"),s("code",[t._v("DataView")]),t._v("视图是 JavaScript 操作二进制数据的一个接口。")]),t._v(" "),s("p",[t._v("它们都是以数组的语法处理二进制数据，所以统称为二进制数组。")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("ArrayBuffer")]),t._v(" 是对固定长度的连续内存空间的引用")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个长度为 16 的 buffer，会分配一个 16 字节的连续内存空间，并用 0 进行预填充")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("如要操作 "),s("code",[t._v("ArrayBuffer")]),t._v("，我们需要使用“视图”对象，\n"),s("ul",[s("li",[t._v("视图可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的 预分配内存")]),t._v(" "),s("li",[t._v("ArrayBuffer 是所有定型数组(typed array)及视图引用的基本单位")])])])]),t._v(" "),s("h3",{attrs:{id:"视图arraybufferview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图arraybufferview"}},[t._v("#")]),t._v(" 视图ArrayBufferView")]),t._v(" "),s("p",[t._v("这是一种简化规范的辅助数据类型，它不是一个接口，也没有实现它的对象")]),t._v(" "),s("h4",{attrs:{id:"elementtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elementtype"}},[t._v("#")]),t._v(" ElementType")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("ElementType")]),t._v(" "),s("th",[t._v("字节")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("等价的C类型")]),t._v(" "),s("th",[t._v("值的范围")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Int8")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("8 位有符号整数")]),t._v(" "),s("td",[t._v("signed char")]),t._v(" "),s("td",[t._v("-128~127")])]),t._v(" "),s("tr",[s("td",[t._v("Uint8")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("8 位无符号整数")]),t._v(" "),s("td",[t._v("unsigned char")]),t._v(" "),s("td",[t._v("0~255")])]),t._v(" "),s("tr",[s("td",[t._v("Int16")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("16 位有符号整数")]),t._v(" "),s("td",[t._v("short")]),t._v(" "),s("td",[t._v("-32 768~32 767")])]),t._v(" "),s("tr",[s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("16 位无符号整数")]),t._v(" "),s("td",[t._v("unsigned short")]),t._v(" "),s("td",[t._v("0~65 535")])]),t._v(" "),s("tr",[s("td",[t._v("Int32")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("32 位有符号整数")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("32 位无符号整数")]),t._v(" "),s("td",[t._v("unsigned int")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Float32")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("32 位 IEEE-754 浮点数")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Float64")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("64 位 IEEE-754 浮点数")]),t._v(" "),s("td",[t._v("double")]),t._v(" "),s("td")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个长度为 16 的 buffer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Uint32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 buffer 视为一个 32 位整数的序列")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Uint32Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BYTES_PER_ELEMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4，每个整数 4 个字节")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4，它存储了 4 个整数")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16，字节中的大小")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-dataview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-dataview"}},[t._v("#")]),t._v(" 1）DataView")]),t._v(" "),s("p",[s("code",[t._v("DataView")]),t._v("这个视图专为文件 I/O 和网络 I/O 设计，其 API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些")]),t._v(" "),s("ul",[s("li",[t._v("DataView 对存储在缓冲内的数据类型没有预设")]),t._v(" "),s("li",[t._v("DataView 为上表中的每种 ElementType 都暴露了 get 和 set 方法，这些方法强制开发者在读、写时指定一个ElementType，然后 DataView 就会为读、写而完成相应的转换，使用 byteOffset(字节偏移量)定位要读取或写入值的位置。")]),t._v(" "),s("li",[t._v("DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 要读或写的字节偏移量。可以看成 DataView 中的某种“地址”\n2. DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换\n3. 内存中值的字节序。默认为大端字节序\n")])])]),s("h4",{attrs:{id:"_2-定型数组typedarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-定型数组typedarray"}},[t._v("#")]),t._v(" 2）定型数组TypedArray")]),t._v(" "),s("p",[t._v("定型数组/类型化数组是另一种形式的 ArrayBuffer 视图。")]),t._v(" "),s("p",[s("strong",[t._v("特点：")])]),t._v(" "),s("ul",[s("li",[t._v("与 DataView 的区别在于，定型数组特定于一种 ElementType 且遵循系统原生的字节序。")]),t._v(" "),s("li",[t._v("相应地，定型数组提供了适用面更广的 API 和更高的性能。")]),t._v(" "),s("li",[t._v("从很多方面看，定型数组与普通数组都很相似")])]),t._v(" "),s("p",[s("strong",[t._v("意义：")])]),t._v(" "),s("ul",[s("li",[t._v("设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。")]),t._v(" "),s("li",[t._v("由于定型数组的二进制表示对操作系统而言是一种容易使用的格式，JavaScript 引擎可以重度优化算术运算、 按位运算和其他对定型数组的常见操作，因此使用它们速度极快")])]),t._v(" "),s("p",[s("strong",[t._v("例子：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Uint8Array")]),t._v("：将 ArrayBuffer 中的"),s("strong",[t._v("每个字节")]),t._v("视为 0 到 2"),s("sup",[t._v("8")]),t._v("-1 之间的单个数字，无符号整数")]),t._v(" "),s("li",[s("code",[t._v("Uint16Array")]),t._v("："),s("strong",[t._v("每 2 个字节")]),t._v("视为一个 0 到 2"),s("sup",[t._v("16")]),t._v("-1 之间的整数，无符号整数")]),t._v(" "),s("li",[s("code",[t._v("Uint32Array")]),t._v("：每 4 个字节，无符号整数")]),t._v(" "),s("li",[s("code",[t._v("Float64Array")]),t._v("：每 16 个字节，有符号浮点数")])]),t._v(" "),s("h2",{attrs:{id:"blob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob"}},[t._v("#")]),t._v(" Blob")]),t._v(" "),s("p",[s("em",[t._v("Binary large object")]),t._v("，二进制大对象，是 JavaScript 对不可修改二进制数据的封装类型，")]),t._v(" "),s("p",[t._v("Blob表示一个不可变、原始数据的类文件对象，实际上是File的超类/父类")]),t._v(" "),s("p",[s("code",[t._v("Blob")]),t._v(" 则表示“具有类型的二进制数据”，这样可以方便 "),s("code",[t._v("Blob")]),t._v(" 用于在浏览器中常见的上传/下载操作。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("XMLHttpRequest，fetch 等进行 Web 请求的方法可以自然地使用 "),s("code",[t._v("Blob")]),t._v("，也可以使用其他类型的二进制数据。")])]),t._v(" "),s("li",[s("p",[t._v("我们可以轻松地在 "),s("code",[t._v("Blob")]),t._v(" 和低级别的二进制数据类型之间进行转换：")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造器，第一个参数必须是一个数组 [...]，并在其中指定 MIME 类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<html>…</html>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"a\": 1}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Blob 用作 URL")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Blob 转换为 base64")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nreader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 Blob 转换为 base64 并调用 onload")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Image 转换为 blob")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" canvasElem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBlob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Blob 转换为 ArrayBuffer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fileReader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsArrayBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arrayBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"blob-slice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob-slice"}},[t._v("#")]),t._v(" Blob.slice")]),t._v(" "),s("p",[s("code",[t._v("Blob.slice()")]),t._v("方法用于创建一个，包含源 Blob 的，指定字节范围内的数据，的新 Blob 对象，即子集Blob。")]),t._v(" "),s("p",[s("code",[t._v("File")]),t._v(" 也从 Blob 接口继承了这个方法")]),t._v(" "),s("h2",{attrs:{id:"file-和-filereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-和-filereader"}},[t._v("#")]),t._v(" File 和 FileReader")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3.org/TR/FileAPI/#dfn-file",target:"_blank",rel:"noopener noreferrer"}},[t._v("File"),s("OutboundLink")],1),t._v(" 对象继承自 "),s("code",[t._v("Blob")]),t._v("，并扩展了与文件系统相关的功能，相当于特殊类型的Blob对象；")]),t._v(" "),s("p",[t._v("可以查看有关文件的信息，并允许网页中的 JavaScript 访问其内容；")]),t._v(" "),s("p",[t._v("用户在一个 "),s("code",[t._v("<input>")]),t._v(" 元素上选择文件后返回的 "),s("code",[t._v("FileList")]),t._v(" 就是 "),s("code",[t._v("File")]),t._v(" 对象。")]),t._v(" "),s("p",[t._v("File对象可以用在任意的 Blob 类型的 context 中。比如说， "),s("code",[t._v("FileReader")]),t._v(", "),s("code",[t._v("URL.createObjectURL()")]),t._v(", "),s("code",[t._v("createImageBitmap()")]),t._v(" , 及 "),s("code",[t._v("XMLHttpRequest.send()")]),t._v(" 都能处理 "),s("code",[t._v("Blob")]),t._v(" 和"),s("code",[t._v("File")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"filereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader"}},[t._v("#")]),t._v(" FileReader")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3.org/TR/FileAPI/#dfn-filereader",target:"_blank",rel:"noopener noreferrer"}},[t._v("FileReader"),s("OutboundLink")],1),t._v(" 类型表示一种异步文件读取机制，FileReader是一个对象，其唯一目的是从 "),s("code",[t._v("Blob")]),t._v("（因此也从 "),s("code",[t._v("File")]),t._v("）对象中读取数据。")]),t._v(" "),s("p",[t._v("FileReader Demo: "),s("a",{attrs:{href:"https://github.com/lins403/html-css-demos/blob/main/js-basic/file-reader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-css-demos/file-reader.html at main · lins403/html-css-demos · GitHub"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("FileReaderSync")]),t._v("类型就是 FileReader 的同步版本，接口允许以同步的方式读取"),s("code",[t._v("File")]),t._v("或"),s("code",[t._v("Blob")]),t._v("对象中的内容。这个类型拥有与 FileReader 相同的方法，只有在整个文件都加载到内存之后才会继续执行。该接口只在web workers里可用，因为在主线程里进行同步I/O操作可能会阻塞用户界面。")]),t._v(" "),s("h2",{attrs:{id:"streams-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streams-api"}},[t._v("#")]),t._v(" Streams API")]),t._v(" "),s("p",[t._v("支持以全新的方式（将资源拆分成小块，然后按位处理它）读取、写入和处理数据")]),t._v(" "),s("p",[t._v("Stream API 定义了三种流")]),t._v(" "),s("ol",[s("li",[t._v("可读流：对底层数据源的封装。数据在内部从底层源进入流，然后由消费者(consumer)进行处理。")]),t._v(" "),s("li",[t._v("可写流：对底层数据槽的封装。生产者(producer)将数据写入流，数据在内部传入底层数据槽(sink)。")]),t._v(" "),s("li",[t._v("转换流：由两种流组成，可写流用于接收数据(可写端)，可读流用于输出数据(可读端)。这两个流之间是转换程序(transformer)，可以根据需要检查和修改流内容。")])]),t._v(" "),s("h1",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zh.javascript.info/binary",target:"_blank",rel:"noopener noreferrer"}},[t._v("二进制数据，文件 - javascript.info"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("《JavaScript高级程序设计（第4版）》")]),t._v(" "),s("ul",[s("li",[t._v("6.3 - 定型数组")]),t._v(" "),s("li",[t._v("20.4 - File API 与 Blob API")]),t._v(" "),s("li",[t._v("20.9 - Streams API")])])])}),[],!1,null,null,null);a.default=n.exports}}]);