(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{422:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css布局"}},[t._v("#")]),t._v(" CSS布局")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("文档流、文本流")])]),t._v(" "),s("li",[s("p",[t._v("display属性、position属性")])]),t._v(" "),s("li",[s("p",[t._v("浮动与清除浮动的三种方法")])]),t._v(" "),s("li",[s("p",[t._v("BFC")])]),t._v(" "),s("li",[s("p",[t._v("Flex布局、Grid布局")])]),t._v(" "),s("li",[s("p",[t._v("居中布局")])]),t._v(" "),s("li",[s("p",[t._v("三栏布局（圣杯与双飞翼）")])]),t._v(" "),s("li",[s("p",[t._v("多列布局、瀑布流布局")])]),t._v(" "),s("li",[s("p",[t._v("层叠上下文、层叠水平、层叠顺序")])]),t._v(" "),s("li",[s("p",[t._v("三种隐藏方法的区别")])])])]),t._v(" "),s("h2",{attrs:{id:"基础布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础布局"}},[t._v("#")]),t._v(" 基础布局")]),t._v(" "),s("p",[s("code",[t._v("文档流")]),t._v("："),s("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visuren.html#block-formatting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Normal flow"),s("OutboundLink")],1),t._v("，相对于盒子模型的概念")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Block formatting contexts")])]),t._v(" "),s("li",[s("p",[t._v("Inline formatting contexts")])]),t._v(" "),s("li",[s("p",[t._v("Relative positioning")])])]),t._v(" "),s("p",[s("code",[t._v("文本流")]),t._v("： Text flow，相对于文字段落的概念")]),t._v(" "),s("h3",{attrs:{id:"display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("none")])]),t._v(" "),s("li",[s("code",[t._v("inline")]),t._v(" "),s("ul",[s("li",[t._v("无法设置宽度和高度，只有文本流的真实尺寸")]),t._v(" "),s("li",[t._v("只能设置左右方向的 padding 和 margin")]),t._v(" "),s("li",[t._v("padding, margin, border 不会占据文本流，即不会推开其他元素，会发生重叠")])])]),t._v(" "),s("li",[s("code",[t._v("block")]),t._v(" "),s("ul",[s("li",[t._v("会将自己的width填充到整个viewpoint的宽度大小")])])]),t._v(" "),s("li",[s("code",[t._v("inline-block")])]),t._v(" "),s("li",[s("code",[t._v("contents")]),t._v(" "),s("ul",[s("li",[t._v("元素本身不会渲染，但是子元素和伪元素会正常渲染，用来充当无语义的包裹框")])])])]),t._v(" "),s("h3",{attrs:{id:"position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" position")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("static")])]),t._v(" "),s("ul",[s("li",[t._v("默认值，没有定位，元素位于正常流的位置")]),t._v(" "),s("li",[t._v("top, right, bottom, left 和 z-index属性无效")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("relative")])]),t._v(" "),s("ul",[s("li",[t._v("相对static正常位置时的偏移，不改变布局，即偏移后元素正常位置占据文档流不会变动")]),t._v(" "),s("li",[t._v("position:relative; left:20px;")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("absolute")])]),t._v(" "),s("ul",[s("li",[t._v("相对于"),s("strong",[t._v("最近的已定位(非static)的"),s("u",[t._v("父/祖先元素")])]),t._v(" （absolute / relative / fixed / sticky ），没有的话最终会相对于"),s("code",[t._v("<html>")])]),t._v(" "),s("li",[t._v("会改变布局，元素脱离文档流，后面的元素会挤占它的空间，发生重叠")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("fixed")])]),t._v(" "),s("ul",[s("li",[t._v("相对浏览器窗口，元素脱离文档流")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sticky")])]),t._v(" "),s("ul",[s("li",[t._v("需要指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效")])])])]),t._v(" "),s("h3",{attrs:{id:"浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[t._v("#")]),t._v(" 浮动")]),t._v(" "),s("p",[t._v("float、absolute、fixed 属性可以使一个元素脱离标准文档流，但其中"),s("u",[t._v("float不会脱离文本流")]),t._v("，也就是后面的文本会跟在float的元素后面，而不是被覆盖。")]),t._v(" "),s("p",[t._v("float 需要使用块布局，会将 display 值为 inline 或 table 的布局，自动转为 "),s("strong",[t._v("block")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"清除浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),s("p",[t._v("清除浮动的同时，也要考虑是否能撑起父元素的高度")]),t._v(" "),s("p",[t._v("清除浮动的3种方法")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .container.clearfix > .box.float */")]),t._v("\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"container clearfix"')]),t._v(">\n  <div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box float"')]),t._v(">Lorem ipsum ...</div>\n</div>\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),t._v(">\n  Hello\n</div>  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法一：在浮动元素的父元素.clearfix后边追加一个隐藏的block,带一个clear:both属性 */")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*block宽度会横向填充满屏幕，在父元素的最后追加一个height:0，占满屏幕的看不见的细长条*/")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*这个最下边细长条左右两边都清除float*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法二：不用调用clearfix类，在父元素结束标签之前，插入下面这段 */")]),t._v("\n<div style="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear: both;"')]),t._v("></div>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法三：给父元素创建BFC */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//hidden也可以,visible不行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),s("p",[t._v("块格式化上下文（Block Formatting Context，BFC），我把它当作是文档流 normal flow 中的一种 layout 布局方式。")]),t._v(" "),s("p",[s("u",[t._v("BFC区域内部和外部的渲染（文档流、文本流）互不影响，BFC的高度包含了内部浮动元素的高度")])]),t._v(" "),s("p",[t._v("用途：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("将子元素的margin也计算入父元素的高度")])]),t._v(" "),s("li",[s("p",[t._v("撑起浮动元素父元素的高度；")]),t._v(" "),s("ul",[s("li",[t._v("通常用 "),s("code",[t._v("overflow: 不为visible")]),t._v(" 来清除浮动，副作用较小")])])]),t._v(" "),s("li",[s("p",[t._v("避免外边距overlap")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("block 布局下，上下方向的margin会自动重叠，实际margin为二者大的那个")])]),t._v(" "),s("li",[s("p",[t._v("display 为 inline-block 、flex、grid、table 的情况，都会创建BFC，四个方向的margin都不会重叠")])])])])]),t._v(" "),s("p",[t._v("创建条件："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("块格式化上下文 - Web 开发者指南 | MDN"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"flex布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[t._v("#")]),t._v(" Flex布局")]),t._v(" "),s("p",[s("code",[t._v("flex / inline-flex")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25303493",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 分钟学会 Flex 布局"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.30secondsofcode.org/articles/s/flexbox-cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flexbox Cheat Sheet - 30 seconds of code"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"flex-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-容器"}},[t._v("#")]),t._v(" Flex 容器")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("flex-flow (flex-direction、flex-wrap)")])]),t._v(" "),s("li",[s("p",[t._v("justify-content")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[t._v("space-between  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首个元素放置于起点，末尾元素放置于终点")]),t._v("\nspace-around  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每个元素周围分配相同的空间")]),t._v("\nspace-evenly  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每个元素之间的间隔相等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("align-items")])]),t._v(" "),s("li",[s("p",[t._v("align-content")])])]),t._v(" "),s("h3",{attrs:{id:"容器的-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器的-item"}},[t._v("#")]),t._v(" 容器的 item")]),t._v(" "),s("ol",[s("li",[t._v("order")]),t._v(" "),s("li",[t._v("flex (flex-grow、flex-shrink、flex-basis)")]),t._v(" "),s("li",[t._v("align-self")])]),t._v(" "),s("p",[s("code",[t._v("justify-items 和 justify-self")]),t._v(" 在 flexbox 中未被实现，水平方向上只能使用 justify-content，因为 flexbox 本质上是一维的，所以无法让其中的item单独在水平方向上做不一样的偏移")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 1 auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跨度扩展系数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认宽度之和大于容器的时候才会发生收缩，不同情况下shrink和grow只有一个能生效")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主轴方向上的初始大小，grow和shrink的基础大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flex: 1表示的含义就是等分剩余空间")]),t._v("\n")])])]),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"grid布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid布局"}},[t._v("#")]),t._v(" Grid布局")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6854573220306255880",target:"_blank",rel:"noopener noreferrer"}},[t._v("最强大的 CSS 布局 —— Grid 布局 - 掘金"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"grid-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-容器"}},[t._v("#")]),t._v(" Grid 容器")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("grid-template-rows")])]),t._v(" "),s("li",[s("p",[t._v("grid-template-columns")])]),t._v(" "),s("li",[s("p",[t._v("grid-gap (grid-row-gap、grid-column-gap)")])]),t._v(" "),s("li",[s("p",[t._v("place-items (align-items、justify-items)")])]),t._v(" "),s("li",[s("p",[t._v("place-content (align-content、justify-content)")])]),t._v(" "),s("li",[s("p",[t._v("grid-template-areas")])]),t._v(" "),s("li",[s("p",[t._v("grid-auto-columns、grid-auto-rows")])])]),t._v(" "),s("h3",{attrs:{id:"容器的-item-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器的-item-2"}},[t._v("#")]),t._v(" 容器的 item")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("grid-row-start、grid-row-end")])]),t._v(" "),s("li",[s("p",[t._v("grid-column-start、grid-column-end")])]),t._v(" "),s("li",[s("p",[t._v("place-self (justify-self、align-self)")])]),t._v(" "),s("li",[s("p",[t._v("grid-area")])])]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关键字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nautofill\nfr    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fraction")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nauto\n")])])]),s("h3",{attrs:{id:"flex-和-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-和-grid"}},[t._v("#")]),t._v(" Flex 和 Grid")]),t._v(" "),s("ul",[s("li",[t._v("flex 适合一维，适合对齐元素内的内容，比如说用在页面的header，弹性强但行和列没有实质性关系。flex也可以实现grid实现不了的功能。")]),t._v(" "),s("li",[t._v("grid 适合多维，适合布局大画面，可以处理一些不规则和非对称的设计")]),t._v(" "),s("li",[t._v("不是二选一，而是二合一，可以混合使用")])]),t._v(" "),s("h2",{attrs:{id:"表格布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格布局"}},[t._v("#")]),t._v(" 表格布局")]),t._v(" "),s("p",[t._v("display：table、inline-table、table-caption、table-cell、table-row、table-row-group")]),t._v(" "),s("p",[t._v("用表格布局替换 "),s("code",[t._v("<table>")]),t._v(" 系表格元素")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"进阶布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶布局"}},[t._v("#")]),t._v(" 进阶布局")]),t._v(" "),s("h3",{attrs:{id:"居中布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#居中布局"}},[t._v("#")]),t._v(" 居中布局")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6990928915120275470#heading-30",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端复习-----css, html篇 > 居中布局"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("思路：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("inline：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("水平："),s("code",[t._v("text-align: center;")])])]),t._v(" "),s("li",[s("p",[t._v("垂直")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通用：设置上下 padding 相等")])]),t._v(" "),s("li",[s("p",[t._v("单行：设置 height 与 line-height 相等")])]),t._v(" "),s("li",[s("p",[t._v("多行："),s("code",[t._v("vertical-align: middle;")]),t._v("(inline/table-cell)")])])])])])]),t._v(" "),s("li",[s("p",[t._v("块block："),s("code",[t._v("margin: auto")])])]),t._v(" "),s("li",[s("p",[t._v("flexbox：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("margin: auto;")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("justify-content: center; align-items: center;")])])])])]),t._v(" "),s("li",[s("p",[t._v("absolute positioning："),s("code",[t._v("position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);")])])])]),t._v(" "),s("h3",{attrs:{id:"三栏布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三栏布局"}},[t._v("#")]),t._v(" 三栏布局")]),t._v(" "),s("p",[t._v("圣杯布局和双飞翼布局，两列定宽一列自适应，都是利用float+负的margin的方式")]),t._v(" "),s("h4",{attrs:{id:"圣杯布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[t._v("#")]),t._v(" 圣杯布局")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://codesandbox.io/s/html-css-qwonu?file=/css-layout/shengbei.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("圣杯布局 - CodeSandbox"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("中间部分main的宽度是100%，利用padding的方式，将左右位置腾出来；两侧部分的position设置为relative，然后为它们设置负的margin-left，以及left、right的大小，偏移至main的左右侧")])]),t._v(" "),s("li",[s("p",[t._v("中间部分宽度小于左侧时布局会混乱")])])]),t._v(" "),s("h4",{attrs:{id:"双飞翼布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局"}},[t._v("#")]),t._v(" 双飞翼布局")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://codesandbox.io/s/html-css-qwonu?file=/css-layout/shuangfeiyi.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("双飞翼布局 - CodeSandbox"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("中间main部分再内嵌一层wrapper，设置wrapper的margin顶开左右位置；因为margin不同于padding，两侧部分不用设置relative的定位，只需要设置margin-left偏移就可以实现")])]),t._v(" "),s("li",[s("p",[t._v("是针对圣杯布局的改进")])])]),t._v(" "),s("h4",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("absolute")])]),t._v(" "),s("li",[s("p",[t._v("flexbox")])])]),t._v(" "),s("h2",{attrs:{id:"多列布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多列布局"}},[t._v("#")]),t._v(" 多列布局")]),t._v(" "),s("p",[t._v("Multi-clolumns Layout")]),t._v(" "),s("h3",{attrs:{id:"column-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-count"}},[t._v("#")]),t._v(" column-count")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-column-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Firefox */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-column-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("column-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"flex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space-between"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非必需")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 容器必须有固定高度，且高度大于item的最高列高")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"瀑布流布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#瀑布流布局"}},[t._v("#")]),t._v(" 瀑布流布局")]),t._v(" "),s("p",[t._v("Masonry Layout")]),t._v(" "),s("p",[t._v("TODO")]),t._v(" "),s("h3",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904032868253710",target:"_blank",rel:"noopener noreferrer"}},[t._v("蘑菇街PC首页瀑布流实践 - 掘金"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("核心思路")]),t._v(" "),s("ul",[s("li",[t._v("监测滚动，判断是否符合渲染条件，如果符合条件则开始渲染。")]),t._v(" "),s("li",[t._v("定义一个渲染索引 renderIndex，每渲染一个元素后 renderIndex + 1, 实时监测 renderIndex 的变化， 判断是否符合渲染和数据请求条件。")]),t._v(" "),s("li",[t._v("拿到最小高度列索引后，将下一个元素插入到该列中，并触发 renderIndex + 1 进行下一轮渲染判断。")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904178544820237",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个前端竟然用动态规划写瀑布流布局？给我打死他！ - 掘金"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jessieji.com/2019/pure-css-masonry",target:"_blank",rel:"noopener noreferrer"}},[t._v("纯 CSS 实现横向排序的瀑布流式布局 - The Trivial"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"隐藏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏"}},[t._v("#")]),t._v(" 隐藏")]),t._v(" "),s("p",[s("code",[t._v("opacity: 0;")])]),t._v(" "),s("ul",[s("li",[t._v("隐藏元素，不改变布局，绑定的事件依然会触发")])]),t._v(" "),s("p",[s("code",[t._v("visibility: hidden;")])]),t._v(" "),s("ul",[s("li",[t._v("隐藏元素，不改变布局，"),s("u",[t._v("事件不会触发")])])]),t._v(" "),s("p",[s("code",[t._v("display: none;")])]),t._v(" "),s("ul",[s("li",[t._v("会改变页面布局")])]),t._v(" "),s("h2",{attrs:{id:"层叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠"}},[t._v("#")]),t._v(" 层叠")]),t._v(" "),s("p",[t._v("stacking")]),t._v(" "),s("h3",{attrs:{id:"层叠上下文-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文-context"}},[t._v("#")]),t._v(" 层叠上下文 (~ context)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("要符合"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("既定条件"),s("OutboundLink")],1),t._v("，才会产生")])]),t._v(" "),s("li",[s("p",[t._v("层叠上下文可以嵌套，受制于父元素的层叠上下文（如果有），且会影响后代元素（当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中）")])]),t._v(" "),s("li",[s("p",[t._v("层叠上下文的"),s("u",[t._v("层叠水平")]),t._v("要比普通元素高，但"),s("u",[t._v("层叠顺序")]),t._v("却位于较低的位置")])])]),t._v(" "),s("h3",{attrs:{id:"层叠水平-level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠水平-level"}},[t._v("#")]),t._v(" 层叠水平 (~ level)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("每个元素都具备的，用于在"),s("u",[t._v("同个层叠顺序规则下")]),t._v("的比较")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("z-index")]),t._v(" 是一种层叠水平标识")])])]),t._v(" "),s("h3",{attrs:{id:"层叠顺序-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠顺序-order"}},[t._v("#")]),t._v(" 层叠顺序 (~ order)")]),t._v(" "),s("ul",[s("li",[t._v("渲染覆盖规则")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/stacking_order.png",alt:"stacking order"}})]),t._v(" "),s("h1",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903504545316877",target:"_blank",rel:"noopener noreferrer"}},[t._v("清除浮动的四种方式及其原理理解"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zwwill/blog/issues/11",target:"_blank",rel:"noopener noreferrer"}},[t._v("【布局】聊聊为什么淘宝要提出「双飞翼」布局 · Issue #11 · zwwill/blog · GitHub"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS中的层叠上下文和层叠顺序 « 张鑫旭-鑫空间-鑫生活"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);