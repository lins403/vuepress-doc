(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{426:function(t,s,e){"use strict";e.r(s);var a=e(43),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css基础"}},[t._v("#")]),t._v(" CSS基础")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("盒模型")])]),t._v(" "),e("li",[e("p",[t._v("伪类和伪元素，选择器的权重优先级")])])])]),t._v(" "),e("h2",{attrs:{id:"一、盒模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、盒模型"}},[t._v("#")]),t._v(" 一、盒模型")]),t._v(" "),e("h4",{attrs:{id:"box-sizing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing"}},[t._v("#")]),t._v(" box-sizing")]),t._v(" "),e("p",[e("code",[t._v("content-box")]),t._v("（标准盒模型）")]),t._v(" "),e("ul",[e("li",[t._v("元素实际占据的空间由 "),e("u",[t._v("设置的宽高 + padding + border")]),t._v(" 组成")])]),t._v(" "),e("p",[e("code",[t._v("border-box")]),t._v("（IE盒模型）")]),t._v(" "),e("ul",[e("li",[t._v("设置的宽高包含了 padding 和 border 的大小")]),t._v(" "),e("li",[t._v("width/height = content + padding + border")])]),t._v(" "),e("h4",{attrs:{id:"margin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin"}},[t._v("#")]),t._v(" margin")]),t._v(" "),e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid darkblue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// padding和margin的长度一样，且四个方向大小都一致")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是相对**父元素的宽度**，没有的话接着往上找，找到有设置宽度的祖先节点，直至100%width的body")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// margin不是子元素的真实空间，所以不会撑开父元素的高度，除非将父元素创建为BFC")]),t._v("\n")])])]),e("h4",{attrs:{id:"dom-element的宽高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-element的宽高"}},[t._v("#")]),t._v(" DOM element的宽高")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("clientWidth")]),t._v(" 【内部宽高】（设定的width + padding）")]),t._v(" "),e("li",[e("code",[t._v("offsetWidth")]),t._v(" 【布局宽高】（= clientWidth + border + 滚动条）")]),t._v(" "),e("li",[e("code",[t._v("scrollWidth")]),t._v(" 【内容宽高】（包含overflow隐藏(scroll/hidden)的内容）")])]),t._v(" "),e("h2",{attrs:{id:"二、选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、选择器"}},[t._v("#")]),t._v(" 二、选择器")]),t._v(" "),e("h3",{attrs:{id:"伪类和伪元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪类和伪元素"}},[t._v("#")]),t._v(" 伪类和伪元素")]),t._v(" "),e("p",[t._v("伪类：Pseudo-classes")]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":focus")]),t._v(" "),e("code",[t._v(":hover")]),t._v(" "),e("code",[t._v(":checked")]),t._v(" "),e("code",[t._v(":enabled")]),t._v(" "),e("code",[t._v(":disabled")])]),t._v(" "),e("li",[e("code",[t._v(":nth-child()")]),t._v(" "),e("code",[t._v(":nth-of-type()")])]),t._v(" "),e("li",[e("code",[t._v(":root")]),t._v("、"),e("code",[t._v(":visited")]),t._v("、"),e("code",[t._v(":not()")])])]),t._v(" "),e("p",[t._v("伪元素：Pseudo-element")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("::first-line")]),t._v(" "),e("code",[t._v("::first-letter")])]),t._v(" "),e("li",[e("code",[t._v("::after (:after)")])]),t._v(" "),e("li",[e("code",[t._v("::selection")])])]),t._v(" "),e("h3",{attrs:{id:"权重优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权重优先级"}},[t._v("#")]),t._v(" 权重优先级")]),t._v(" "),e("p",[t._v("正常而言范围越小优先级越高，也有些运算符，如+~>等，不会影响优先级。")]),t._v(" "),e("p",[e("em",[t._v("!important无限大，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("选择器")]),t._v(" "),e("th"),t._v(" "),e("th",[t._v("权重")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("通配符/相邻选择器/子选择器")]),t._v(" "),e("td",[e("code",[t._v("*")]),t._v(" "),e("code",[t._v("h1+p")]),t._v(" "),e("code",[t._v("ul>li")])]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("标签 / 伪元素")]),t._v(" "),e("td",[e("code",[t._v("p::first-line")])]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("class / 伪类 / 属性")]),t._v(" "),e("td",[e("code",[t._v("a:hover")]),t._v(" "),e("code",[t._v("li:nth-child")]),t._v(" / "),e("code",[t._v('a[rel="external"]')])]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[e("code",[t._v("#myId")])]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("行内样式")]),t._v(" "),e("td",[t._v("style={}")]),t._v(" "),e("td",[t._v("1000")])]),t._v(" "),e("tr",[e("td",[t._v("!important")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("∞")])])])]),t._v(" "),e("h3",{attrs:{id:"selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" selector")]),t._v(" "),e("h4",{attrs:{id:"css-selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-selector"}},[t._v("#")]),t._v(" css_selector")]),t._v(" "),e("ul",[e("li",[t._v("控制台下使用 "),e("code",[t._v("document.querySelector()")]),t._v(" 或者 "),e("code",[t._v("$()")]),t._v(" 进行测试")]),t._v(" "),e("li",[t._v("不能迭代查找（TypeError: 'WebElement' object is not iterable）")])]),t._v(" "),e("h4",{attrs:{id:"xpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xpath"}},[t._v("#")]),t._v(" xpath")]),t._v(" "),e("ul",[e("li",[t._v("控制台下使用 "),e("code",[t._v("$x()")]),t._v("进行测试")])]),t._v(" "),e("h2",{attrs:{id:"三、样式渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、样式渲染"}},[t._v("#")]),t._v(" 三、样式渲染")]),t._v(" "),e("h3",{attrs:{id:"border-和-outline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-和-outline"}},[t._v("#")]),t._v(" border 和 outline")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/border",target:"_blank",rel:"noopener noreferrer"}},[t._v("border"),e("OutboundLink")],1),t._v(" 和 outline 很类似，但有如下区别：")]),t._v(" "),e("ul",[e("li",[t._v("outline不占据空间，绘制于元素内容周围。")]),t._v(" "),e("li",[t._v("根据规范，outline通常是矩形，但也可以是非矩形的。")])]),t._v(" "),e("h3",{attrs:{id:"serif-和-sans-serif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serif-和-sans-serif"}},[t._v("#")]),t._v(" serif 和 sans-serif")]),t._v(" "),e("ul",[e("li",[t._v("serif，衬线体，白体、"),e("strong",[t._v("宋体")]),t._v("（有棱有角）")]),t._v(" "),e("li",[t._v("sans-serif，无衬线体，哥特体、"),e("strong",[t._v("黑体")])])]),t._v(" "),e("h3",{attrs:{id:"transition-和-animation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transition-和-animation"}},[t._v("#")]),t._v(" transition 和 animation")]),t._v(" "),e("p",[t._v("transition：为一个元素在不同状态之间切换的时候定义不同的过渡效果")]),t._v(" "),e("p",[t._v("animation：用来指定一组或多组动画，每组之间用逗号相隔")]),t._v(" "),e("p",[t._v("@keyframes：用来定义animation中的各个状态")]),t._v(" "),e("h4",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("ul",[e("li",[t._v("transition更强调状态的变化，开始到结束两种状态，通常需要外部触发，例如伪元素（:hover）之间的切换；")]),t._v(" "),e("li",[t._v("animation更强调帧的变化，可以自动触发，且可以被设置成无限次播放")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://lins403.github.io/vuepress-doc/notesList/css/animation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("动画 | 小眯嘻的文档博客"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"渐变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐变"}},[t._v("#")]),t._v(" 渐变")]),t._v(" "),e("p",[e("code",[t._v("linear-gradirent")]),t._v(" 线性渐变")]),t._v(" "),e("p",[e("code",[t._v("radial-gradirent")]),t._v(" 径向渐变")]),t._v(" "),e("p",[e("code",[t._v("repeating-linear-gradient")]),t._v(" 重复渐变")]),t._v(" "),e("h3",{attrs:{id:"尺寸单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸单位"}},[t._v("#")]),t._v(" 尺寸单位")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.30secondsofcode.org/articles/s/css-units-cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS units Cheat Sheet - 30 seconds of code"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"四、特殊属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、特殊属性"}},[t._v("#")]),t._v(" 四、特殊属性")]),t._v(" "),e("h3",{attrs:{id:"import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" @import")]),t._v(" "),e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigation.css"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Using a string */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigation.css"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Using a url */")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Import the "mobstyle.css" style sheet ONLY if the media is screen and the viewport is maximum 768 pixels:')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobstyle.css"')]),t._v(" screen "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"与-link-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与-link-的区别"}},[t._v("#")]),t._v(" 与"),e("code",[t._v("<link>")]),t._v("的区别")]),t._v(" "),e("ul",[e("li",[t._v("link属于HTML标签，而@import属于css语法")]),t._v(" "),e("li",[t._v("页面被加载时link会被同步加载，而@import要等到页面加载完成才会被加载")]),t._v(" "),e("li",[t._v("link中css样式的权重高于@import的css")])]),t._v(" "),e("h4",{attrs:{id:"不要使用-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不要使用-import"}},[t._v("#")]),t._v(" 不要使用@import")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("比 "),e("code",[t._v("<link>")]),t._v(" 慢")])]),t._v(" "),e("li",[e("p",[t._v("影响浏览器的并行下载")])]),t._v(" "),e("li",[e("p",[t._v("多个@import会导致下载顺序紊乱")])])]),t._v(" "),e("p",[t._v("替代办法：")]),t._v(" "),e("ul",[e("li",[t._v("使用多个 "),e("code",[t._v("<link>")]),t._v(" 元素")]),t._v(" "),e("li",[t._v("通过CSS预处理器将多个CSS文件编译为一个文件")])]),t._v(" "),e("h3",{attrs:{id:"其它"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),e("p",[e("code",[t._v("all")]),t._v(": Reset all styles")]),t._v(" "),e("ul",[e("li",[t._v("initial | inherit | unset(不能inherit的值使用initial)")])]),t._v(" "),e("p",[e("code",[t._v("::selection")]),t._v(": Changes the styling of text selection.")]),t._v(" "),e("p",[e("code",[t._v("counter-reset")]),t._v(": Create a new css counter of the given name.")]),t._v(" "),e("p",[e("code",[t._v("user-select")]),t._v(": 控制用户能否选中文本")]),t._v(" "),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("h3",{attrs:{id:"参考-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考-推荐"}},[t._v("#")]),t._v(" # 参考/推荐")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.nowcoder.com/tutorial/96/1678a0fd35cd4db486af18589e34e4d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("【前端工程师面试宝典】学习说明_互联网校招面试真题面经汇总_牛客网"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6990928915120275470",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端复习-----css, html篇 - 掘金"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.w3.org/TR/cssom-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Object Model (CSSOM)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.w3.org/html/ig/zh/wiki/Cssom",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cssom - HTML5 Chinese Interest Group Wiki"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);