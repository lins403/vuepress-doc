(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{439:function(t,e,a){"use strict";a.r(e);var r=a(43),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("h2",{attrs:{id:"文档内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档内容"}},[t._v("#")]),t._v(" 文档内容")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.vuejs.org/v2/guide/components.html"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("组件基础")]),t._v(" "),a("li",[t._v("组件注册")]),t._v(" "),a("li",[t._v("Props")]),t._v(" "),a("li",[t._v("自定义事件")]),t._v(" "),a("li",[t._v("插槽")]),t._v(" "),a("li",[t._v("动态组件&异步组件")]),t._v(" "),a("li",[t._v("处理边界情况")])]),t._v(" "),a("h2",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("parse > preTransformNode > processElement > processAttrs > addDirective > el.directives.push({ name, rawName, value, arg, modifiers })")])]),t._v(" "),a("li",[a("p",[t._v("generate > genElement > genData > genDirectives")])]),t._v(" "),a("li",[a("p",[t._v("patch > createPatchFunction / baseModules > updateDirectives , unbindDirectives > _update(oldVnode, vnode)")])])]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"_1-为什么data必须是函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么data必须是函数"}},[t._v("#")]),t._v(" 1. 为什么data必须是函数？")]),t._v(" "),a("p",[t._v("答：因为组件可能被复用产生多个实例，如果一个组件的 "),a("code",[t._v("data")]),t._v(" 是一个函数，则每个实例的data对象就是互相独立的；如果不用函数而直接返回一个Object，会导致实例的data值是对这个对象的直接引用，修改其中一个实例的data就会引起联动。")]),t._v(" "),a("h3",{attrs:{id:"_2-为什么每个组件必须只有一个根元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么每个组件必须只有一个根元素"}},[t._v("#")]),t._v(" 2. 为什么每个组件必须只有一个根元素？")]),t._v(" "),a("blockquote",[a("p",[t._v("Render function should return a single root node.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);