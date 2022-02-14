(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{425:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"网络安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[t._v("#")]),t._v(" 网络安全")]),t._v(" "),s("h2",{attrs:{id:"一、跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、跨域"}},[t._v("#")]),t._v(" 一、跨域")]),t._v(" "),s("h3",{attrs:{id:"域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("主机名.次级域名.顶级域名.根域名\nwww.baidu.com.root\n# 域名解析从右向左\n")])])]),s("h4",{attrs:{id:"域名记录的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名记录的类型"}},[t._v("#")]),t._v(" 域名记录的类型")]),t._v(" "),s("p",[t._v("DNS，"),s("em",[t._v("Domain Name System")]),t._v("，基于 UDP 协议")]),t._v(" "),s("ul",[s("li",[t._v("A记录（Address），把一个域名解析到一个 IP 地址")]),t._v(" "),s("li",[t._v("CNAME记录（Canonical Name），把一个域名解析到另外一个域名，可应用于CDN服务")]),t._v(" "),s("li",[t._v("NS 记录（Name Server，域名服务器），返回保存下一级域名信息的服务器地址，只能设置为域名而非IP地址")])]),t._v(" "),s("h3",{attrs:{id:"同源策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),s("p",[t._v("只允许URL路径不同，端口、协议、主机不同，都算是跨域")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的同源策略"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("cookie只允许同源，浏览器会在http请求中带上cookie，所以禁止跨域可以保证cookie与用户信息的相对安全性")]),t._v(" "),s("h3",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JSON with Padding")])]),t._v(" "),s("li",[s("p",[t._v("利用html中 "),s("u",[t._v("img 和 script 标签")]),t._v(" 的源文件，即src属性允许跨域的特性")])]),t._v(" "),s("li",[s("p",[t._v("只能是get请求")])])]),t._v(" "),s("h3",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("p",[t._v("使用 "),s("u",[t._v("空的 iframe + form 表单")]),t._v(" 实现 POST 请求")]),t._v(" "),s("h3",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),s("p",[t._v("CORS，Cross-Origin Resource Sharing，跨域资源共享，定义了浏览器与服务器如何实现跨源通信。")]),t._v(" "),s("p",[t._v("CORS 背后的基本思路就是使用自定义的 HTTP 头部允许浏览器和服务器相互了解，以确实请求或响应应该成功还是失败。")]),t._v(" "),s("p",[t._v("后端在响应头上配置，前端不用修改。")]),t._v(" "),s("p",[t._v("浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）")]),t._v(" "),s("p",[t._v("只要同时满足以下两大条件，就属于简单请求。")]),t._v(" "),s("blockquote",[s("p",[t._v("（1) 请求方法是以下三种方法之一：")]),t._v(" "),s("ul",[s("li",[t._v("HEAD")]),t._v(" "),s("li",[t._v("GET")]),t._v(" "),s("li",[t._v("POST")])]),t._v(" "),s("p",[t._v("（2）HTTP的头信息不超出以下几种字段：")]),t._v(" "),s("ul",[s("li",[t._v("Accept")]),t._v(" "),s("li",[t._v("Accept-Language")]),t._v(" "),s("li",[t._v("Content-Language")]),t._v(" "),s("li",[t._v("Last-Event-ID")]),t._v(" "),s("li",[t._v("Content-Type：只限于三个值"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),s("code",[t._v("multipart/form-data")]),t._v("、"),s("code",[t._v("text/plain")])])])]),t._v(" "),s("h4",{attrs:{id:"简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),s("p",[t._v("简单请求直接访问，浏览器会在头信息上添加一个 "),s("code",[t._v("origin")]),t._v(" 字段，然后请求服务器的CORS接口。")]),t._v(" "),s("p",[t._v("如果服务器决定响应请求，那么应该发送 "),s("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 头部。")]),t._v(" "),s("h4",{attrs:{id:"复杂请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[t._v("#")]),t._v(" 复杂请求")]),t._v(" "),s("p",[t._v("复杂请求（允许使用自定义头部、除 GET 和 POST 之外的方法，以及不同请求体内容类型）")]),t._v(" "),s("ul",[s("li",[t._v("复杂请求会多一次预检请求(preflighted request)，服务器可以确定是否允许这种类型的请求。")]),t._v(" "),s("li",[t._v("返回状态码204，通过预检请求后就像简单请求一样正常访问。")]),t._v(" "),s("li",[t._v("预检请求返回后，结果会按响应指定的时间缓存一段时间。换句话说，只有第一次发送这种类型的 请求时才会多发送一次额外的 HTTP 请求。")])]),t._v(" "),s("h3",{attrs:{id:"代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("nginx")])]),t._v(" "),s("li",[s("p",[t._v("webpack devserver")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("正向代理和反向代理的概念")]),t._v(" "),s("ul",[s("li",[t._v("正向代理：客户端的代理，为客户端服务的，隐藏客户端，一般针对的是和所有的服务器，而不是特定的（所以我理解devServer也是反向代理，科学上网才是正向代理）")]),t._v(" "),s("li",[t._v("反向代理：服务端的代理，隐藏服务器")])]),t._v(" "),s("h2",{attrs:{id:"二、xhr、promise、ajax、axios、fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、xhr、promise、ajax、axios、fetch"}},[t._v("#")]),t._v(" 二、XHR、Promise、Ajax、Axios、Fetch")]),t._v(" "),s("h3",{attrs:{id:"xhr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xhr"}},[t._v("#")]),t._v(" XHR")]),t._v(" "),s("ul",[s("li",[t._v("通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。")])]),t._v(" "),s("h3",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Asynchronous JavaScript And XML")])]),t._v(" "),s("li",[s("p",[t._v("基于XHR的技术实践")])])]),t._v(" "),s("h3",{attrs:{id:"jquery-ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery-ajax"}},[t._v("#")]),t._v(" jQuery ajax")]),t._v(" "),s("ul",[s("li",[t._v("基于原生的XHR开发")])]),t._v(" "),s("h3",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),s("ul",[s("li",[t._v("本质上就是一个函数的返回对象")]),t._v(" "),s("li",[t._v("为异步操作提供统一接口，作为异步操作和回调函数的中介代理层，可以让异步回调像同步一样的代码风格，不用陷入回调地狱")])]),t._v(" "),s("h3",{attrs:{id:"fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),s("ul",[s("li",[t._v("Fetch API 是原生的JS，基于ES6的import设计，是现代浏览器引入的作为XHR的替代品。XMLHttpRequest 可以选择异步，而 Fetch API 则必须是异步")]),t._v(" "),s("li",[t._v("返回一个Promise，无法处理HTTP状态码，错误处理也比较麻烦")]),t._v(" "),s("li",[t._v("Fetch发送post请求的时候，总是发送2次，第一次状态码是204，实际上是发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `fetch()`返回一个promise")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ok"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// post请求，发送JSON数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" payload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//let payload = 'foo=bar&baz=qux';")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" jsonHeaders "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/send-me-json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求体时必须使用一种 HTTP 方法 body: payload,")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" jsonHeaders\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" Axios")]),t._v(" "),s("ul",[s("li",[t._v("基于Promise的http库，可以用在浏览器和nodejs中，底层实现还是基于XHR对象")])]),t._v(" "),s("h2",{attrs:{id:"三、网络攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、网络攻击"}},[t._v("#")]),t._v(" 三、网络攻击")]),t._v(" "),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("ol",[s("li",[t._v("病毒")]),t._v(" "),s("li",[t._v("钓鱼")]),t._v(" "),s("li",[t._v("DDOS（distributed denial-of-service attack），攻击目标网站至瘫痪、资源耗尽")])]),t._v(" "),s("h3",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("p",[t._v("xss（Cross-site scripting，跨站脚本攻击），是一种代码注入攻击。")]),t._v(" "),s("p",[t._v("黑客在目标网站注入恶意脚本，用户访问操作目标网站时，会在自己的浏览器上运行恶意脚本，进而被窃取敏感信息如cookie、sessionId等，被用于恶意操作")]),t._v(" "),s("h4",{attrs:{id:"攻击类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击类型"}},[t._v("#")]),t._v(" 攻击类型")]),t._v(" "),s("ul",[s("li",[t._v("存储型\n"),s("ul",[s("li",[t._v("将恶意代码提交到目标网站的数据库中")])])]),t._v(" "),s("li",[t._v("反射型\n"),s("ul",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码。如网站搜索、跳转等")])])]),t._v(" "),s("li",[t._v("DOM型\n"),s("ul",[s("li",[t._v("客户端 JavaScript 取出 URL 中的恶意代码并执行")]),t._v(" "),s("li",[t._v("属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞")])])])]),t._v(" "),s("h4",{attrs:{id:"防御策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防御策略"}},[t._v("#")]),t._v(" 防御策略")]),t._v(" "),s("ul",[s("li",[t._v("防止攻击者提交恶意代码（输入过滤）")]),t._v(" "),s("li",[t._v("防止浏览器执行~（开发者慎用 innerHTML、document.write()、v-html 等）")]),t._v(" "),s("li",[t._v("启用 CSP (Content Security Policy，白名单机制，HTTP 头信息的"),s("code",[t._v("Content-Security-Policy")]),t._v("的字段）")])]),t._v(" "),s("h3",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("p",[t._v("CSRF（Cross-site request forgery, 跨站点请求伪造），黑客可以设法伪造带有正确 Cookie 的 HTTP 请求，就是利用用户的cookie骗过目标网站，让网站以为是用户自己的操作。")]),t._v(" "),s("ul",[s("li",[t._v("xss通过在网站植入恶意脚本，骗取的是用户对网站的信任；")]),t._v(" "),s("li",[t._v("csrf（骗取用户点击例如广告等然后盗取cookie）伪造真实用户的请求，骗取的是网站对用户（网页浏览器）的信任")])]),t._v(" "),s("p",[t._v("cookie本身不能跨域，但是请求可能是CORS请求（Access-Control-Allow-Origin），而允许跨域的情况下浏览器的请求都会带上cookie，所以cookie不是被获取，而是被使用")]),t._v(" "),s("h4",{attrs:{id:"防御策略-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防御策略-2"}},[t._v("#")]),t._v(" 防御策略")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("禁止外域使用cookie")]),t._v(" "),s("ul",[s("li",[t._v("同源检测（Header中的Referer，来源URL地址，告诉服务器用户访问当前资源之前的位置）")]),t._v(" "),s("li",[t._v("设置cookie的samesite属性（设置为Strict则禁止第三方使用该cookie，为Lax则禁止get以外的请求）")])])]),t._v(" "),s("li",[s("p",[t._v("添加校验token")])])]),t._v(" "),s("h3",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),s("p",[t._v("click Jacking，通常是用iframe或图片覆盖，伪造骗取用户点击")]),t._v(" "),s("p",[t._v("防御：限制iframe的跨域；设置cookie的samesite属性")]),t._v(" "),s("h1",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000015597029",target:"_blank",rel:"noopener noreferrer"}},[t._v("不要再问我跨域的问题了"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（一）：如何防止XSS攻击？"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（二）：如何防止CSRF攻击？"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域资源共享 CORS 详解"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);