(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{440:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("p",[a("code",[t._v("npm outdated")]),t._v("    # 列出所以可以更新的package")]),t._v(" "),a("p",[a("code",[t._v("npm install")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("--save        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-S")]),t._v("\n--save--dev        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-D")]),t._v("\n--global        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#-g")]),t._v("\n--no-save\n--force     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Recommended protections disabled. overriding peer dependency")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/commands/npm-install#configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm-install > configuration"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("npm shrinkwrap")]),t._v(" npm-shrinkwrap.json （npm5以前用来lock版本的）")]),t._v(" "),a("h2",{attrs:{id:"踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[t._v("#")]),t._v(" 踩坑")]),t._v(" "),a("h3",{attrs:{id:"升级-npm7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级-npm7"}},[t._v("#")]),t._v(" 升级 npm7")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.blog/2021-02-02-npm-7-is-now-generally-available/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 7 is now generally available!"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global npm@6\n")])])]),a("h4",{attrs:{id:"_1-peerdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-peerdependencies"}},[t._v("#")]),t._v(" 1）peerDependencies")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Could not resolve dependency:\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" peer eslint@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=7.0.0"')]),t._v(" from eslint-config-prettier@7.2.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm 7 will block installations if an upstream dependency conflict is present that cannot be automatically resolved.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You have the option to retry with --force to bypass the conflict or --legacy-peer-deps command to ignore peer dependencies entirely (this behavior is similar to versions 4-6).")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --force\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --legacy-peer-deps\n")])])]),a("p",[a("a",{attrs:{href:"https://yarn.bootcss.com/docs/dependency-types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dependencies类型"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904134248759309",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文搞懂peerDependencies"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"_2-node与node-sass的兼容性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-node与node-sass的兼容性问题"}},[t._v("#")]),t._v(" 2）node与node-sass的兼容性问题")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("NodeJS")]),t._v(" "),a("th",[t._v("Supported node-sass version")]),t._v(" "),a("th",[t._v("Node Module")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Node 14")]),t._v(" "),a("td",[t._v("4.14+")]),t._v(" "),a("td",[t._v("83")])]),t._v(" "),a("tr",[a("td",[t._v("Node 12")]),t._v(" "),a("td",[t._v("4.12+")]),t._v(" "),a("td",[t._v("72")])]),t._v(" "),a("tr",[a("td",[t._v("Node 10")]),t._v(" "),a("td",[t._v("4.9+, <6.0")]),t._v(" "),a("td",[t._v("64")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sass/node-sass#node-version-support-policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node version support policy"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i node-sass@4.14.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后把package.json和lock.json的更改取消掉，留着node_modules里的package就好")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 node-sass 为 dart-sass")]),t._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node-sass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.9.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.30.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"更换镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换镜像源"}},[t._v("#")]),t._v(" 更换镜像源")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config get registry\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npmjs.org\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --registry https://registry.npmjs.org\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" outdated --registry https://skimdb.npmjs.com/registry\n")])])]),a("h2",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("h3",{attrs:{id:"unpkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unpkg"}},[t._v("#")]),t._v(" unpkg")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@babel/standalone/babel.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/react/umd/react.development.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/react-dom/umd/react-dom.development.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        Some text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Example "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"bootcdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootcdn"}},[t._v("#")]),t._v(" BootCDN")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[t._v("#")]),t._v(" Package")]),t._v(" "),a("p",[t._v("fuse.js 模糊搜索")]),t._v(" "),a("p",[t._v("vue-pdf 基于pdf.js的展示PDF")])])}),[],!1,null,null,null);s.default=e.exports}}]);