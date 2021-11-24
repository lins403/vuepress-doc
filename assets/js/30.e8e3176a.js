(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{430:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[e._v("#")]),e._v(" 浏览器")]),e._v(" "),a("ul",[a("li",[e._v("浏览器对象模型（Browser Object Model，简称 BOM），也就是 "),a("code",[e._v("window")]),e._v(" 对象")]),e._v(" "),a("li",[e._v("文档对象模型（Document Object Model，简称 DOM），也就是 "),a("code",[e._v("document")]),e._v(" 对象")])]),e._v(" "),a("h2",{attrs:{id:"离线存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线存储"}},[e._v("#")]),e._v(" 离线存储")]),e._v(" "),a("p",[e._v("localStorage")]),e._v(" "),a("ul",[a("li",[e._v("Chrome有5M大小限制")]),e._v(" "),a("li",[e._v("只支持字符串")])]),e._v(" "),a("p",[e._v("indexDB")]),e._v(" "),a("ul",[a("li",[e._v("资料："),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5 indexedDB前端本地存储数据库实例教程"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("其它")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Web SQL Database（规范放弃支持，淘汰中）")])]),e._v(" "),a("li",[a("p",[e._v("CacheStorage（experimental）")])])]),e._v(" "),a("h3",{attrs:{id:"indexdb-与-web-sql-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexdb-与-web-sql-database"}},[e._v("#")]),e._v(" indexDB 与 Web SQL Database")]),e._v(" "),a("ul",[a("li",[e._v("Web SQL Database\n"),a("ul",[a("li",[e._v("关系型数据库，类似SQLite")]),e._v(" "),a("li",[e._v("事务操作要写SQL")])])]),e._v(" "),a("li",[e._v("indexDB\n"),a("ul",[a("li",[e._v("NoSQL数据库")]),e._v(" "),a("li",[e._v("写法对JS开发者更友好")])])])]),e._v(" "),a("h3",{attrs:{id:"indexdb-与-localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexdb-与-localstorage"}},[e._v("#")]),e._v(" indexDB 与 localStorage")]),e._v(" "),a("ul",[a("li",[e._v("localStorage兼容IE8+，indexDB兼容IE10+")]),e._v(" "),a("li",[e._v("localStorage仅支持存储字符串，而indexDB几乎可以任何格式，包括图片的Blob数据（IE需要考虑兼容性）")]),e._v(" "),a("li",[e._v("indexDB可以在service workers中使用")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("数据库")])]),e._v(" "),a("p",[e._v("ACID特性：原子性(Atomicity)、一致性(Consistemcy)、隔离性(Isolation)、持久性(Durability)")]),e._v(" "),a("p",[e._v("关系型数据库和非关系型数据库最大的理念区别在于，对数据一致性的要求。")]),e._v(" "),a("p",[e._v("前者非常严格，一个事务操作中只要有一条数据不合规则，前面的也会被放弃掉，整个事务回滚至原来状态，牺牲性能而追求一致性和稳定性；后者数据结构不固定，灵活，扩展性强")]),e._v(" "),a("p",[e._v("数据库中的“锁” lock，是保证数据库数据高并发时候数据一致性的一种机制")]),e._v(" "),a("p",[e._v("回滚rollback、提交commit")])]),e._v(" "),a("h3",{attrs:{id:"localforage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localforage"}},[e._v("#")]),e._v(" localForage")]),e._v(" "),a("ul",[a("li",[e._v("根据浏览器的支持情况，依次选择 "),a("code",[e._v("IndexedDB")]),e._v(" | "),a("code",[e._v("WebSQL")]),e._v(" | "),a("code",[e._v("localStorage")]),e._v(" 其中一种进行存储数据")]),e._v(" "),a("li",[e._v("类似 localStorage 的API风格")]),e._v(" "),a("li",[e._v("异步get和set，支持Promise和callback")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://localforage.docschina.org/#localforage",target:"_blank",rel:"noopener noreferrer"}},[e._v("localforage手册"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"渲染原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染原理"}},[e._v("#")]),e._v(" 渲染原理")]),e._v(" "),a("p",[e._v("The pixel pipeline:  "),a("u",[e._v("JavaScript > Style calculations > Layout > Paint > Composite")])]),e._v(" "),a("p",[a("strong",[e._v("JavaScript")]),e._v("：使用 JavaScript 来实现一些视觉变化的效果")]),e._v(" "),a("p",[a("strong",[e._v("样式计算")]),e._v("：匹配selectors，应用css规则，计算每个元素的最终样式")]),e._v(" "),a("p",[a("strong",[e._v("布局")]),e._v("：计算它要占据的空间大小及其在屏幕的位置")]),e._v(" "),a("p",[a("strong",[e._v("绘制")]),e._v("：创建绘图调用的列表（a list of draw calls），填充像素（栅格化rasterize），绘制多个图层")]),e._v(" "),a("p",[a("strong",[e._v("合成")]),e._v("：合成多个图层")]),e._v(" "),a("p",[e._v("为了确保平滑滚动和动画，占据"),a("u",[a("strong",[e._v("主线程")])]),e._v("的所有内容，包括计算样式，以及reflow和paint，必须让浏览器在"),a("u",[a("strong",[e._v("60帧（16.67毫秒）")])]),e._v("内完成。为了确保重绘repaint的速度比初始绘制的速度更快，屏幕上的绘图通常被分解成数层。如果发生这种情况，则需要进行合成。")]),e._v(" "),a("p",[e._v("绘制可以将Layout tree中的元素分解为多个层。将内容提升到GPU上的层，可以提高绘制和重绘的性能。")]),e._v(" "),a("p",[e._v("渲染进程：主线程、合成线程、栅格线程")]),e._v(" "),a("h2",{attrs:{id:"重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排和重绘"}},[e._v("#")]),e._v(" 重排和重绘")]),e._v(" "),a("h3",{attrs:{id:"重排reflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排reflow"}},[e._v("#")]),e._v(" 重排reflow")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Reflow")]),e._v(" is any subsequent size and position determination of any part of the page or the entire document.")]),e._v(" "),a("p",[e._v("The first time the size and position of nodes are determined is called "),a("em",[e._v("layout")]),e._v(". Subsequent recalculations of node size and locations are called "),a("em",[e._v("reflows")]),e._v(".")])]),e._v(" "),a("p",[e._v("修改了元素的layout属性，影响到其它元素的布局，例如  width, height, position 等等")]),e._v(" "),a("p",[e._v("Recalculate Style--\x3eLayout--\x3eUpdate Layer Tree--\x3e以及之后各个流程")]),e._v(" "),a("h3",{attrs:{id:"重绘repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘repaint"}},[e._v("#")]),e._v(" 重绘repaint")]),e._v(" "),a("p",[e._v("修改了元素的“paint only”属性，不会影响到页面布局，例如 background, text color, shadows 等等，浏览器的渲染会掉过布局，直接进行绘制")]),e._v(" "),a("p",[e._v("Recalculate Style--\x3eUpdate Layer Tree--\x3e以及之后各个流程")]),e._v(" "),a("h3",{attrs:{id:"特殊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊"}},[e._v("#")]),e._v(" 特殊")]),e._v(" "),a("ul",[a("li",[e._v("动画、滚动")]),e._v(" "),a("li",[a("u",[e._v("opacity、transform")]),e._v("（通过transform实现的动画不需要进行样式计算、布局和绘制等操作）")])]),e._v(" "),a("p",[e._v("既不要布局也不要绘制，浏览器会跳过布局和绘制，直接执行合成")]),e._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("重排和重绘都是占用浏览器主线程，主线程JavaScript的执行可能就会给页面的重排和重绘造成影响，造成下一帧的画面不能按时渲染， 例如导致动画卡顿")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("我觉得有不少歧义，按MDN的解释加之我的理解，浏览器会解析css构建CSSOM，然后和DOM树一起合并（combined）生成render tree，随后执行layout布局，去遍历render tree，确定树中每个node的size和position，按照每个元素的盒模型（box model properties，就是content、padding、border、margin等）排列，这样子才得到了Layout tree。")]),e._v(" "),a("p",[e._v("paint阶段就是将Layout tree上的每个box转换成页面上的实际像素。")]),e._v(" "),a("p",[e._v("而为了保证能在60帧内完成渲染，需要确保重绘的性能比原始绘制时高，paint阶段会将layout tree的元素取出分成多个图层，不同图层相互重叠的时候就要合成（composite），按照绘制顺序合成多个图层，然后展示到屏幕上。")]),e._v(" "),a("p",[e._v("把图层分块（tile），对每个块单独栅格化，填充像素到位图上，生成一帧，然后上传GPU。按MDN说的，图层当是将内容提升到GPU上的层。")]),e._v(" "),a("p",[a("code",[e._v("<canvas>")]),e._v(" 和 "),a("code",[e._v("<video>")]),e._v("，以及使用 "),a("code",[e._v("opacity")]),e._v(" 和 "),a("code",[e._v("transform")]),e._v(" 这些css属性的元素，可以实例化一个图层（instantiate a layer），这些元素和它们的后代节点，都会在这个图层上独立进行绘制，从而避开了主线程中的layout与paint环节。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work",target:"_blank",rel:"noopener noreferrer"}},[e._v("Populating the page: how browsers work"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("requestAnimationFrame我看到别的博客提到节流效果，用节流解释太妙了。")]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"browserslist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[e._v("#")]),e._v(" browserslist")]),e._v(" "),a("p",[e._v(".browserslistrc")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("browserslist"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist")]),e._v(" "),a("p",[e._v("https://cli.vuejs.org/zh/guide/css.html#postcss")]),e._v(" "),a("p",[e._v("TODO")])])}),[],!1,null,null,null);t.default=o.exports}}]);