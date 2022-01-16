(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{432:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jsdoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc"}},[t._v("#")]),t._v(" JSDoc")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" getting started")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g jsdoc\n")])])]),e("p",[e("a",{attrs:{href:"http://yuri4ever.github.io/jsdoc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDoc Guide"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jsdoc.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Use JSDoc: Index"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://knightyun.github.io/2020/03/13/js-comment-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript之注释规范化（JSDoc）"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"vscode插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件"}},[t._v("#")]),t._v(" vscode插件")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=HookyQR.JSDocTagComplete",target:"_blank",rel:"noopener noreferrer"}},[t._v("Complete JSDoc Tags - Visual Studio Marketplace"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/mlucool/gulp-jsdoc3",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDoc Gulp plugin"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/andstor/jsdoc-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDoc GitHub Action"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" demo")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/bradtraversy/jsdoc-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub - bradtraversy/jsdoc-examples: Examples of using JSDoc to document JavaScript"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"axios拦截器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axios拦截器"}},[t._v("#")]),t._v(" axios拦截器")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用 typedef 添加一个自定义类型，类似于TypeScript中 interface 的效果")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把它添加到 global 域，jsdoc下的其它source文件都能直接访问到")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @global\n * @typedef ResponseData\n * @property {number} code 状态码\n * @property {boolean} success 是否成功\n * @property {any[]|{}} data 承载数据 //可以根据需求进一步限制data中的具体字段\n * @property {string} msg 返回消息\n */")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @func\n * @desc 根据角色分配权限\n * @param {{type}} params 角色参数\n * @param {number} params.type 角色类型（1-帅哥，2-美女）\n * @return {Promise<ResponseData>}\n * @example getAuth({ type: 1 }) // 帅哥\n * @example getAuth({ type: 2 }) // 美女\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/balabala'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("同类型：@enum {number}\n不同类型：@type {{a: string, b: number}}\n")])])]),e("h2",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),e("ul",[e("li",[t._v("TODO: 写个demo用grunt或gulp集成，再结合CI，实现自动化构建部署api文档")]),t._v(" "),e("li",[t._v("用jsdoc会大大加强代码的可阅读性，但它只是一个生成文档的工具，并不能有效实现类型检查，所以结合TypeScript会更完善")]),t._v(" "),e("li",[t._v("再有一点是，jsdoc只能有效用于js文件，要增强组件的代码规范和可阅读性，更推荐的是写单元测试，还有个主流工具是storybook，秉承的是组件驱动开发的思想")])])])}),[],!1,null,null,null);a.default=r.exports}}]);