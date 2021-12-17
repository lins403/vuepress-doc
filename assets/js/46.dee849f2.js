(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{446:function(s,e,t){"use strict";t.r(e);var a=t(43),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),t("p",[t("code",[s._v("npm outdated")]),s._v("    # 列出所以可以更新的package")]),s._v(" "),t("p",[t("code",[s._v("npm install")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("--save        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-S")]),s._v("\n--save--dev        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-D")]),s._v("\n--global        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-g")]),s._v("\n--no-save\n--force     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Recommended protections disabled. overriding peer dependency")]),s._v("\n--registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("域名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/commands/npm-install#configuration",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm-install > configuration"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("code",[s._v("npm shrinkwrap")]),s._v(" npm-shrinkwrap.json （npm5以前用来lock版本的）")]),s._v(" "),t("p",[t("code",[s._v("npm prune")])]),s._v(" "),t("h2",{attrs:{id:"npmrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npmrc"}},[s._v("#")]),s._v(" .npmrc")]),s._v(" "),t("p",[s._v("查看npm配置："),t("code",[s._v("npm config ls -l")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在安装时忽略lock文件。")]),s._v("\nloglevel"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("timing；      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装依赖包的时候指定日志的类型")]),s._v("\n")])])]),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/using-npm/config",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm v6 配置文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),t("h3",{attrs:{id:"与"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与"}},[s._v("#")]),s._v(" ~与^")]),s._v(" "),t("p",[s._v("Tilde Range")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("~1.5.2")]),s._v(" := [1.5.2, 1.6.0)")])]),s._v(" "),t("p",[s._v("Caret Range")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("^1.5.2")]),s._v(" := [1.5.2, 2.0.0)")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/using-npm/semver",target:"_blank",rel:"noopener noreferrer"}},[s._v("semver - The semantic versioner for npm"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方配置文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[s._v("#")]),s._v(" 踩坑")]),s._v(" "),t("h3",{attrs:{id:"nrm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[s._v("#")]),s._v(" nrm")]),s._v(" "),t("p",[s._v("管理切换仓库源，包括npm的私有服")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nrm -g --save\n")])])]),t("h3",{attrs:{id:"升级-npm7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级-npm7"}},[s._v("#")]),s._v(" 升级 npm7")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.blog/2021-02-02-npm-7-is-now-generally-available/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm 7 is now generally available!"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --global npm@6\n")])])]),t("h4",{attrs:{id:"_1-peerdependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-peerdependencies"}},[s._v("#")]),s._v(" 1）peerDependencies")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Could not resolve dependency:\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ERR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" peer eslint@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('">=7.0.0"')]),s._v(" from eslint-config-prettier@7.2.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm 7 will block installations if an upstream dependency conflict is present that cannot be automatically resolved.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You have the option to retry with --force to bypass the conflict or --legacy-peer-deps command to ignore peer dependencies entirely (this behavior is similar to versions 4-6).")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --force\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --legacy-peer-deps\n\nnpx install-peerdeps --dev \n")])])]),t("p",[t("a",{attrs:{href:"https://yarn.bootcss.com/docs/dependency-types/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dependencies类型"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904134248759309",target:"_blank",rel:"noopener noreferrer"}},[s._v("一文搞懂peerDependencies"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/237532427",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm与yarn对peerDependencies处理的差异"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"_2-node与node-sass的兼容性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-node与node-sass的兼容性问题"}},[s._v("#")]),s._v(" 2）node与node-sass的兼容性问题")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("NodeJS")]),s._v(" "),t("th",[s._v("Supported node-sass version")]),s._v(" "),t("th",[s._v("Node Module")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Node 14")]),s._v(" "),t("td",[s._v("4.14+")]),s._v(" "),t("td",[s._v("83")])]),s._v(" "),t("tr",[t("td",[s._v("Node 12")]),s._v(" "),t("td",[s._v("4.12+")]),s._v(" "),t("td",[s._v("72")])]),s._v(" "),t("tr",[t("td",[s._v("Node 10")]),s._v(" "),t("td",[s._v("4.9+, <6.0")]),s._v(" "),t("td",[s._v("64")])])])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/sass/node-sass#node-version-support-policy",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node version support policy"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i node-sass@4.14.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后把package.json和lock.json的更改取消掉，留着node_modules里的package就好")]),s._v("\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改 node-sass 为 dart-sass")]),s._v("\n-    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node-sass"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.9.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sass"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.30.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("h3",{attrs:{id:"更换镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换镜像源"}},[s._v("#")]),s._v(" 更换镜像源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --registry https://registry.npmjs.org\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" outdated --registry https://skimdb.npmjs.com/registry\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);