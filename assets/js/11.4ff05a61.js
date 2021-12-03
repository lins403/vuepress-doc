(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(t,s,a){"use strict";a.r(s);var r=a(43),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css基础"}},[t._v("#")]),t._v(" CSS基础")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("盒模型")])]),t._v(" "),a("li",[a("p",[t._v("伪类和伪元素，选择器的权重优先级")])])])]),t._v(" "),a("h2",{attrs:{id:"一、盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、盒模型"}},[t._v("#")]),t._v(" 一、盒模型")]),t._v(" "),a("h4",{attrs:{id:"box-sizing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[t._v("#")]),t._v(" box-sizing")]),t._v(" "),a("p",[a("code",[t._v("content-box")]),t._v("（标准盒模型）：占据的空间由 "),a("u",[t._v("设置的宽高 + padding + border ")]),t._v("组成")]),t._v(" "),a("p",[a("code",[t._v("border-box")]),t._v("（IE盒模型）：设置的宽高包含了padding和border的大小")]),t._v(" "),a("h4",{attrs:{id:"margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[t._v("#")]),t._v(" margin")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid darkblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// padding和margin的长度一样，且四个方向大小都一致")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是相对**父元素的宽度**，没有的话接着往上找，找到有设置宽度的祖先节点，知道100%width的body")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// margin不是子元素的真实空间，所以不会撑开父元素的高度，除非将父元素创建为BFC")]),t._v("\n")])])]),a("h2",{attrs:{id:"二、选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、选择器"}},[t._v("#")]),t._v(" 二、选择器")]),t._v(" "),a("h3",{attrs:{id:"伪类和伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类和伪元素"}},[t._v("#")]),t._v(" 伪类和伪元素")]),t._v(" "),a("p",[t._v("伪类：Pseudo-classes")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(":focus")]),t._v(" "),a("code",[t._v(":hover")])]),t._v(" "),a("li",[a("code",[t._v(":nth-child()")]),t._v(" "),a("code",[t._v(":nth-of-type()")])])]),t._v(" "),a("p",[t._v("伪元素：Pseudo-element")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("::first-line")]),t._v(" "),a("code",[t._v("::first-letter")])]),t._v(" "),a("li",[a("code",[t._v("::after (:after)")])])]),t._v(" "),a("h3",{attrs:{id:"权重优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权重优先级"}},[t._v("#")]),t._v(" 权重优先级")]),t._v(" "),a("p",[t._v("正常而言范围越小优先级越高，也有些运算符，如+~等，不会影响优先级。")]),t._v(" "),a("p",[a("em",[t._v("从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。")]),t._v(" !important无限大")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),t._v(" "),a("th",[t._v("权重")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("通配符")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("标签 / 伪元素")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("class / 伪类 / 属性")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("行内样式")]),t._v(" "),a("td",[t._v("1000")])]),t._v(" "),a("tr",[a("td",[t._v("!important")]),t._v(" "),a("td",[t._v("∞")])])])]),t._v(" "),a("h3",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" selector")]),t._v(" "),a("p",[t._v("css_selector")]),t._v(" "),a("ul",[a("li",[t._v("控制台下使用 "),a("code",[t._v("document.querySelector()")]),t._v(" 或者 "),a("code",[t._v("$()")]),t._v(" 进行测试")]),t._v(" "),a("li",[t._v("不能迭代查找（TypeError: 'WebElement' object is not iterable）")])]),t._v(" "),a("p",[t._v("xpath")]),t._v(" "),a("ul",[a("li",[t._v("控制台下使用 "),a("code",[t._v("$x()")]),t._v("进行测试")])]),t._v(" "),a("h2",{attrs:{id:"三、样式渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、样式渲染"}},[t._v("#")]),t._v(" 三、样式渲染")]),t._v(" "),a("h3",{attrs:{id:"serif-和-sans-serif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serif-和-sans-serif"}},[t._v("#")]),t._v(" serif 和 sans-serif")]),t._v(" "),a("ul",[a("li",[t._v("serif，衬线体，白体、"),a("strong",[t._v("宋体")]),t._v("（有棱有角）")]),t._v(" "),a("li",[t._v("sans-serif，无衬线体，哥特体、"),a("strong",[t._v("黑体")])])]),t._v(" "),a("h3",{attrs:{id:"transition-和-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition-和-animation"}},[t._v("#")]),t._v(" transition 和 animation")]),t._v(" "),a("p",[t._v("transition：为一个元素在不同状态之间切换的时候定义不同的过渡效果")]),t._v(" "),a("p",[t._v("animation：用来指定一组或多组动画，每组之间用逗号相隔")]),t._v(" "),a("p",[t._v("@keyframes：用来定义animation中的各个状态")]),t._v(" "),a("h4",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("ul",[a("li",[t._v("transition更强调状态的变化，开始到结束两种状态，通常需要外部触发，例如伪元素（:hover）之间的切换；")]),t._v(" "),a("li",[t._v("animation更强调帧的变化，可以自动触发，且可以被设置成无限次播放")])]),t._v(" "),a("h3",{attrs:{id:"渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渐变"}},[t._v("#")]),t._v(" 渐变")]),t._v(" "),a("p",[t._v("linear-gradirent 线性渐变")]),t._v(" "),a("p",[t._v("radial-gradirent 径向渐变")]),t._v(" "),a("p",[t._v("repeating-linear-gradient 重复渐变")]),t._v(" "),a("h2",{attrs:{id:"四、特殊属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、特殊属性"}},[t._v("#")]),t._v(" 四、特殊属性")]),t._v(" "),a("h3",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" @import")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigation.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Using a string */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigation.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Using a url */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Import the "mobstyle.css" style sheet ONLY if the media is screen and the viewport is maximum 768 pixels:')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobstyle.css"')]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[a("u",[t._v("不要使用@import")])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("比 "),a("code",[t._v("<link>")]),t._v(" 慢")])]),t._v(" "),a("li",[a("p",[t._v("影响浏览器的并行下载")])]),t._v(" "),a("li",[a("p",[t._v("多个@import会导致下载顺序紊乱")])])]),t._v(" "),a("p",[t._v("替代办法：")]),t._v(" "),a("ul",[a("li",[t._v("使用多个 "),a("code",[t._v("<link>")]),t._v(" 元素")]),t._v(" "),a("li",[t._v("通过CSS预处理器将多个CSS文件编译为一个文件")])]),t._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("p",[a("code",[t._v("all")]),t._v(": Reset all styles")]),t._v(" "),a("ul",[a("li",[t._v("initial | inherit | unset(inherit外的值使用initial)")])]),t._v(" "),a("p",[a("code",[t._v("::selection")]),t._v(": Changes the styling of text selection.")]),t._v(" "),a("p",[a("code",[t._v("counter-reset")]),t._v(": Create a new css counter of the given name.")]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h3",{attrs:{id:"_1-画一个三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-画一个三角形"}},[t._v("#")]),t._v(" 1）画一个三角形")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*下三角形*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*上三角形*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-添加省略号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加省略号"}},[t._v("#")]),t._v(" 3）添加省略号")]),t._v(" "),a("h4",{attrs:{id:"单行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单行"}},[t._v("#")]),t._v(" 单行")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 必须设置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"多行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行"}},[t._v("#")]),t._v(" 多行")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3行文字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" ...）扩展")]),t._v(" "),a("h4",{attrs:{id:"条纹渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条纹渐变"}},[t._v("#")]),t._v(" 条纹渐变")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.30secondsofcode.org/css/s/stripes-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stripes background pattern"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.30secondsofcode.org/css/s/zig-zag-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zig zag background pattern"),a("OutboundLink")],1)])])]),t._v(" "),a("h4",{attrs:{id:"全景图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全景图片"}},[t._v("#")]),t._v(" 全景图片")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.30secondsofcode.org/css/s/full-width",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full-width image"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("margin-left: -50vw;margin-right: -50vw;")]),t._v(" 可以使用 "),a("code",[t._v("transform: translateX(-50%)")])])]),t._v(" "),a("h1",{attrs:{id:"参考-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考-推荐"}},[t._v("#")]),t._v(" 参考/推荐")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/tutorial/96/1678a0fd35cd4db486af18589e34e4d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("【前端工程师面试宝典】学习说明_互联网校招面试真题面经汇总_牛客网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6990928915120275470",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端复习-----css, html篇 - 掘金"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/cssom-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Object Model (CSSOM)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/html/ig/zh/wiki/Cssom",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cssom - HTML5 Chinese Interest Group Wiki"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);