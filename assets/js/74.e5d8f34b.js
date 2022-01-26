(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{475:function(t,v,_){"use strict";_.r(v);var e=_(43),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"自适应-响应式布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自适应-响应式布局"}},[t._v("#")]),t._v(" 自适应/响应式布局")]),t._v(" "),_("h2",{attrs:{id:"像素pixel"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#像素pixel"}},[t._v("#")]),t._v(" 像素Pixel")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("像素")]),t._v(" "),_("th"),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("设备像素 / 物理像素")]),t._v(" "),_("td",[t._v("物理设备")]),t._v(" "),_("td",[t._v("屏幕实际单位，是设备控制显示的最小单位，"),_("br"),t._v("固定不变，只与设备的硬件密度有关")])]),t._v(" "),_("tr",[_("td",[t._v("设备独立像素(DIPs)")]),t._v(" "),_("td",[t._v("操作系统")]),t._v(" "),_("td",[t._v("逻辑上衡量像素的虚拟单位，与设备的像素密度相关，"),_("br"),t._v("操作系统基于设备像素比，将其转换为合理的物理像素")])]),t._v(" "),_("tr",[_("td",[t._v("CSS像素")]),t._v(" "),_("td",[t._v("浏览器")]),t._v(" "),_("td",[t._v("为web开发者提供，在css中使用的一个抽象单位")])])])]),t._v(" "),_("h3",{attrs:{id:"_1-css像素与设备独立像素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-css像素与设备独立像素"}},[t._v("#")]),t._v(" 1）css像素与设备独立像素")]),t._v(" "),_("p",[t._v("视图缩放时，"),_("strong",[t._v("元素的")]),t._v(" css 像素数量不会改变，改变的只是每个 css 像素的大小")]),t._v(" "),_("ul",[_("li",[t._v("缩放比例 = css像素 / 设备独立像素")]),t._v(" "),_("li",[t._v("缩放比例100%时，像素相等")]),t._v(" "),_("li",[t._v("缩放比例200%时，1个css 像素大小 =  (2 * 2) 个设备独立像素")])]),t._v(" "),_("h3",{attrs:{id:"_2-css像素与设备像素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-css像素与设备像素"}},[t._v("#")]),t._v(" 2）css像素与设备像素")]),t._v(" "),_("p",[t._v("设备像素比 = 设备像素分辨率 / CSS 像素分辨率（相同长度下的像素数量比）= 1个CSS像素大小 / 1个设备像素大小")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("window.devicePixelRatio")]),t._v(" ，告诉浏览器应使用多少设备像素来绘制单个CSS像素")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("无视网膜设备为"),_("code",[t._v("1")]),t._v("，视网膜设备(Retina)为"),_("code",[t._v("2")])])]),t._v(" "),_("li",[_("p",[t._v("在iOS设备，"),_("code",[t._v("screen.width")]),t._v("乘以"),_("code",[t._v("devicePixelRatio")]),t._v("得到的是物理像素值。")])]),t._v(" "),_("li",[_("p",[t._v("在Android以及Windows Phone设备，"),_("code",[t._v("screen.width")]),t._v("除以"),_("code",[t._v("devicePixelRatio")]),t._v("得到的是设备独立像素(dips)值。")])])])]),t._v(" "),_("li",[_("p",[t._v("视图缩放时，设备像素比会等比例发生变化，缩小50%时值就从原来的2变为1，放大50%则变为3")])])]),t._v(" "),_("blockquote",[_("p",[t._v("我理解，设备独立像素比趋于衡量块的像素大小，而设备像素比是边长的像素大小比。两者不冲突，css像素转换为设备独立像素，后者在操作系统的解析下，转换为屏幕设备像素。")])]),t._v(" "),_("h2",{attrs:{id:"视口viewpoint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视口viewpoint"}},[t._v("#")]),t._v(" 视口Viewpoint")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("布局视口（layout viewport）")]),t._v(" "),_("td",[t._v("网页布局的区域（html内容的真实渲染区域，包含可视区以外需要手指滑动的区域）")])]),t._v(" "),_("tr",[_("td",[t._v("视觉视口（visual viewport）")]),t._v(" "),_("td",[t._v("网页在屏幕上显示的区域")])]),t._v(" "),_("tr",[_("td",[t._v("理想视口（ideal viewport）")]),t._v(" "),_("td",[t._v("这时视口宽度等于移动设备的屏幕宽度（分辨率）")])])])]),t._v(" "),_("h2",{attrs:{id:"rem"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),_("p",[t._v("rem（font size of the root element）相对于根元素"),_("code",[t._v("<html>")]),t._v("font-size 计算值的倍数")]),t._v(" "),_("h2",{attrs:{id:"vw、wh"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vw、wh"}},[t._v("#")]),t._v(" vw、wh")]),t._v(" "),_("p",[t._v("css3中引入，在被浏览器广泛支持以前，常用方案是阿里的 "),_("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib-flexible"),_("OutboundLink")],1),t._v("，使用 js 动态来设置根字体，本质上也是在模拟 viewpoint 的效果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("单位")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("vw")]),t._v(" "),_("td",[t._v("相对于视窗的宽度，视窗宽度是100vw")])]),t._v(" "),_("tr",[_("td",[t._v("vh")]),t._v(" "),_("td",[t._v("相对于视窗的高度，视窗高度是100vh")])]),t._v(" "),_("tr",[_("td",[t._v("vmin")]),t._v(" "),_("td",[t._v("vw和vh中的较小值")])]),t._v(" "),_("tr",[_("td",[t._v("vmax")]),t._v(" "),_("td",[t._v("vw和vh中的较大值")])])])]),t._v(" "),_("h1",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/forthealllight/blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.cn/post/7046169975706353701",target:"_blank",rel:"noopener noreferrer"}},[t._v("2022 年移动端适配方案指南 — 全网最新最全 - 掘金"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);