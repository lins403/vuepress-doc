(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{449:function(t,v,_){"use strict";_.r(v);var e=_(43),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"linux"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),_("h2",{attrs:{id:"专业术语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#专业术语"}},[t._v("#")]),t._v(" 专业术语")]),t._v(" "),_("h3",{attrs:{id:"posix"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#posix"}},[t._v("#")]),t._v(" POSIX")]),t._v(" "),_("p",[t._v("(Portable Operating System Interface，可移植操作系统接口) 是IEEE为要在各种 UNIX 操作系统上运行软件，而定义API的一系列互相关联的标准的总称。")]),t._v(" "),_("p",[t._v("有了这个规范，你就可以调用通用的API了，Linux提供的POSIX系统调用在Unix上也能执行，因此学习Linux的底层接口最好就是理解POSIX标准。（Unix、Linux、macOS是Unix-based的；Windows开始部分支持标准）")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nodejs")]),t._v("\npath"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix\n")])])]),_("p",[_("a",{attrs:{href:"http://nodejs.cn/api-v14/path.html#windows-vs-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 与 POSIX 的对比 | Node.js API 文档"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"文件操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),_("ul",[_("li",[t._v("系统调用（system call）\n"),_("ul",[_("li",[t._v("面向底层硬件，是为了方便使用操作系统的接口")])])]),t._v(" "),_("li",[t._v("库函数调用（Library functions）\n"),_("ul",[_("li",[t._v("面向应用开发")]),t._v(" "),_("li",[t._v("一类是C语言标准规定的库函数，一类是编译器特定的库函数。")]),t._v(" "),_("li",[t._v("库函数调用与系统无关，不同的系统，调用库函数，库函数会调用不同的底层函数实现，因此"),_("strong",[t._v("可移植性")]),t._v("好。")])])])]),t._v(" "),_("h2",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),_("p",[t._v("类型一(TODO)")]),t._v(" "),_("h4",{attrs:{id:"wget"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wget"}},[t._v("#")]),t._v(" wget")]),t._v(" "),_("p",[t._v("文件下载")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://www.Linuxcool.com/testfile.zip\n-c,  --continue        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断点续传")]),t._v("\n-b,  --background        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台下载")]),t._v("\n")])])]),_("h4",{attrs:{id:"curl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[t._v("#")]),t._v(" curl")]),t._v(" "),_("p",[t._v("文件传输工具")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o response.txt https://catonmat.net        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -o参数将服务器的回应保存成文件，等同于wget命令")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O https://www.example.com/foo/bar.html        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -O参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST https://catonmat.net        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -X参数指定 HTTP 请求的方法")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -I -XHEAD http://www.baidu.com\n")])])]),_("ul",[_("li",[_("a",{attrs:{href:"https://catonmat.net/cookbooks/curl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Curl Cookbook"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[t._v("#")]),t._v(" Vim")]),t._v(" "),_("h3",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("光标移动")]),t._v(" "),_("th"),t._v(" "),_("th",[t._v("插入/删除")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("0")])]),t._v(" "),_("td",[t._v("移动光标至本行开头")]),t._v(" "),_("td",[_("code",[t._v("d0")])]),t._v(" "),_("td",[t._v("删至行首")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("$")])]),t._v(" "),_("td",[t._v("移动光标至本行末尾")]),t._v(" "),_("td",[_("code",[t._v("d$")])]),t._v(" "),_("td",[t._v("删至行末")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("w")])]),t._v(" "),_("td",[t._v("向前移动一个词")]),t._v(" "),_("td",[_("code",[t._v("dw")])]),t._v(" "),_("td",[t._v("删除一个词")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("5w")])]),t._v(" "),_("td",[t._v("向前移动五个词")]),t._v(" "),_("td",[_("code",[t._v("A")])]),t._v(" "),_("td",[t._v("在行末插入文本")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("b")])]),t._v(" "),_("td",[t._v("向后移动一个词")]),t._v(" "),_("td",[_("code",[t._v("o")])]),t._v(" "),_("td",[t._v("（小写字母 o）在光标下方新开一行")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("5b")])]),t._v(" "),_("td",[t._v("向后移动五个词")]),t._v(" "),_("td",[_("code",[t._v("O")])]),t._v(" "),_("td",[t._v("（大写字母 O）在光标上方新开一行")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("G")])]),t._v(" "),_("td",[t._v("移动至文件末尾")]),t._v(" "),_("td",[_("code",[t._v("dG")])]),t._v(" "),_("td",[t._v("删至文件末尾")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("gg")])]),t._v(" "),_("td",[t._v("移动至文件开头")]),t._v(" "),_("td",[_("code",[t._v("dgg")])]),t._v(" "),_("td",[t._v("删至文件开头")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("搜索替换")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("/search_text")])]),t._v(" "),_("td",[t._v("在文档后面的部分搜索")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("?search_text")])]),t._v(" "),_("td",[t._v("在文档前面的部分搜索")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("n")])]),t._v(" "),_("td",[t._v("移动到后一个检索结果")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("N")])]),t._v(" "),_("td",[t._v("移动到前一个检索结果")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(":%s/original/replacement")])]),t._v(" "),_("td",[t._v("第一个 “original” 替换为 “replacement”")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(":%s/original/replacement/g")])]),t._v(" "),_("td",[t._v("所有的 “original” 替换为 “replacement”")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(":%s/original/replacement/gc")])]),t._v(" "),_("td",[t._v("替换前先询问是否替换")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编辑")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("u")])]),t._v(" "),_("td",[t._v("撤销最后的操作")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("Ctrl+r")])]),t._v(" "),_("td",[t._v("重做最后撤销的操作")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(":w new_name")])]),t._v(" "),_("td",[t._v("用 new_name 作为文件名保存文件")])])])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://linux.cn/article-8144-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术|Vim 快捷键速查表"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);