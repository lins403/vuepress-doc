(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{551:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[t._v("#")]),t._v(" 入门")]),t._v(" "),a("h2",{attrs:{id:"全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[t._v("#")]),t._v(" 全局变量")]),t._v(" "),a("img",{staticStyle:{zoom:"36%"},attrs:{src:"https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/global-objects.png",alt:"https://tuture.co/2019/12/03/892fa12/"}}),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/api-v14/globals.html#global-objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("global 全局变量"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("__dirname：当前模块的路径名")]),t._v(" "),a("li",[t._v("__filename：当前模块的文件名")]),t._v(" "),a("li",[t._v("exports：对 "),a("code",[t._v("module.exports")]),t._v(" 的引用")]),t._v(" "),a("li",[t._v("module：对当前模块的引用")]),t._v(" "),a("li",[t._v("require()：用于导入模块、JSON 和本地文件\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://lins403.github.io/vuepress-doc/notes/engineering/modules/#%E7%89%B9%E7%82%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS特点 > 文件加载机制"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"核心模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心模块"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http：提供HTTP服务器功能。\nurl：解析URL。\nfs：与文件系统交互。\nquerystring：解析URL的查询字符串。\nchild_process：新建子进程。\nutil：提供一系列实用小工具。\npath：处理文件路径。\ncrypto：提供加密和解密功能，基本上是对OpenSSL的包装。\n")])])]),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("开发 HTTP 服务器和客户端")]),t._v(" "),a("h3",{attrs:{id:"fs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs"}},[t._v("#")]),t._v(" fs")]),t._v(" "),a("p",[t._v("文件系统")]),t._v(" "),a("h3",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),a("p",[t._v("文件和目录路径")]),t._v(" "),a("h3",{attrs:{id:"os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[t._v("#")]),t._v(" os")]),t._v(" "),a("p",[t._v("操作系统")]),t._v(" "),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("p",[t._v("网址处理和解析")]),t._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("buffer缓冲区，处理二进制")])]),t._v(" "),a("li",[a("p",[t._v("crypto 加密")])]),t._v(" "),a("li",[a("p",[t._v("events事件触发器")])]),t._v(" "),a("li",[a("p",[t._v("process进程")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("process.argv")]),t._v(" 读取命令行参数")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ node process-args.js one "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("two")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("three four\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# output")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(": /usr/local/bin/node\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": /Users/mjr/work/node/process-args.js\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": one\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("two")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("three\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(": four\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print process.argv")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("process.env")]),t._v(" 环境变量（"),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("cross-env")]),a("OutboundLink")],1),t._v(" 跨平台设置 process.env.NODE_ENV）")])])])]),t._v(" "),a("li",[a("p",[t._v("Stream流：处理流数据的抽象接口，流的读写要通过buffer缓冲来实现")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);