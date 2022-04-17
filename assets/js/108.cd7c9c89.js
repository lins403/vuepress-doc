(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{509:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-api"}},[t._v("#")]),t._v(" Web API")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web API 接口参考"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_1-读取本地文件-filereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-读取本地文件-filereader"}},[t._v("#")]),t._v(" 1）读取本地文件（FileReader）")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000021436482",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 如何读取本地文件"),s("OutboundLink")],1),t._v("，主要四个步骤：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("<input type='file' />")])]),t._v(" "),s("li",[t._v("input file 节点有一个"),s("code",[t._v("files")]),t._v("属性，包含对应文件的"),s("code",[t._v("File")]),t._v("对象")]),t._v(" "),s("li",[t._v("实例化"),s("code",[t._v("FileReader")]),t._v("类，给实例绑定"),s("code",[t._v("onload")]),t._v("事件，读取结果保存在实例的"),s("code",[t._v("result")]),t._v("属性")]),t._v(" "),s("li",[t._v("使用实例方法来读取对应类型的文件，如\n"),s("ul",[s("li",[t._v("readAsText(file, encoding)，从文件中读取纯文本内容并保存在 result 属性中")]),t._v(" "),s("li",[t._v("readAsDataUrl(file)，文件内容保存成数据"),s("code",[t._v("URI")]),t._v("的形式，可以用于作为src属性显示图片")]),t._v(" "),s("li",[t._v("readAsBinaryString(file)，涵盖每个字符的二进制数据")]),t._v(" "),s("li",[t._v("readAsArrayBuffer(file)，转成ArrayBuffer，再转成Blob然后用于读取Excel和Word文件等")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://lins403.github.io/vuepress-doc/notesList/javascript/advanced/binary.html#file-%E5%92%8C-filereader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blob、File 和 FileReader"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_2-performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-performance"}},[t._v("#")]),t._v(" 2）Performance")]),t._v(" "),s("p",[t._v("High Resolution Time，高时间采样率，其精确度可达千分之一毫秒（受硬件或软件限制）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(window.performance)\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只适用于日期时间相关操作，而且是不要求计时精度的操作")]),t._v("\ndate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个精确到毫秒的DOMHighResTimeStamp，但这个时间戳实际上并不是高精度的，为了降低安全威胁，浏览器做了不同程度上的四舍五入处理。")]),t._v("\nperformance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个表示 the performance measurement 开始时间的高精度timestamp")]),t._v("\nperformance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeOrigin\n")])])]),s("h4",{attrs:{id:"使用mark-和measure-测量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用mark-和measure-测量"}},[t._v("#")]),t._v(" 使用mark()和measure()测量")]),t._v(" "),s("ul",[s("li",[t._v("度量数据进出的浏览器时间差（执行上下文）")])]),t._v(" "),s("p",[s("code",[t._v("performance.measure(name, startMark, endMark)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以一个标志开始。")]),t._v("\nperformance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout-start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待一些时间。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标志时间的结束。")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout-end"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测量两个不同的标志。")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout-start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout-end"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有的测量输出（duration）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" measures "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySetTimeout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" measure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" measures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTimeout milliseconds:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除存储的标志位")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearMarks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearMeasures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("《高程4》20.10 计时API")]),t._v(" "),s("h3",{attrs:{id:"_3-beacon-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-beacon-api"}},[t._v("#")]),t._v(" 3）Beacon API")]),t._v(" "),s("p",[t._v("为了把尽量多的页面信息传到服务器，很多分析工具需要在页面生命周期中尽量晚的时候向服务器 发送遥测或分析数据。因此，理想的情况下是通过浏览器的 unload 事件发送网络请求。在 unload 事件触发时，分析工具要停止收集信息并把收集到的数据发给服务器。")]),t._v(" "),s("p",[t._v("但是，在 unload 事件处理程序中创建的任何异步请求都会被浏览器取消。为此，异步 XMLHttpRequest 或 fetch()不适合这个任务。分析工具可以使用同步 XMLHttpRequest 强制发送请求，但这样做会导致用户体验问题。浏览器会因为要等待 unload 事件处理程序完成而延迟导航到下一个页面。")]),t._v(" "),s("p",[t._v("为解决这个问题，W3C 引入了补充性的 Beacon API，这个 API 给 navigator 对象增加了一个 sendBeacon() 方法")]),t._v(" "),s("p",[t._v("信标（Beacon ）请求使用HTTP协议中的POST方法，请求通常不需要响应。这个请求被保证在页面的unload状态，从发起到完成之前被发送。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" analyticsData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{foo: \"bar\"}'")]),t._v("\n  navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBeacon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/analytics-reporting-url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" analyticsData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"javascript-workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-workers"}},[t._v("#")]),t._v(" Javascript Workers")]),t._v(" "),s("p",[t._v("都是运行在浏览器主线程外的，独立线程上的脚本；")]),t._v(" "),s("p",[t._v("不同之处在于它们各自的用处和具备的特性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Web workers")]),t._v(" "),s("ul",[s("li",[t._v("通用脚本，用于分担主线程上处理器密集型的工作")])])]),t._v(" "),s("li",[s("p",[t._v("Service workers")]),t._v(" "),s("ul",[s("li",[t._v("浏览器与网络间的代理，拦截request然后返回缓存，实现离线访问")])])]),t._v(" "),s("li",[s("p",[t._v("Worklets")]),t._v(" "),s("ul",[s("li",[t._v("浏览器渲染管道的hooks，开发者可以通过它访问浏览器渲染进程，例如样式计算和布局")])])])]),t._v(" "),s("h2",{attrs:{id:"messagechannel-和-broadcastchannel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagechannel-和-broadcastchannel"}},[t._v("#")]),t._v(" MessageChannel 和 BroadcastChannel")]),t._v(" "),s("ul",[s("li",[t._v("The Channel Messaging API is a great way to send 1-to-1 messages from a window to an iframe, from a window to a Web Worker, and so on.")]),t._v(" "),s("li",[t._v("The BroadcastChannel API can be used to send 1-to-many messages, communicating to multiple entities at the same time.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);