(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{434:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🚫💩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🚫💩"}},[t._v("#")]),t._v(" 🚫💩")]),t._v(" "),a("h2",{attrs:{id:"预备知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[t._v("#")]),t._v(" 预备知识")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/senntyou/blogs/blob/master/web-advance/12.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎样提升代码质量 · senntyou/blogs · GitHub"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/184951182",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端科普系列-ESlint：守住优雅的护城河 - 知乎"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"vue2配置方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2配置方案"}},[t._v("#")]),t._v(" Vue2配置方案")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("EditorConfig")]),t._v(": For the same project across various editors and IDEs.")]),t._v(" "),a("li",[a("strong",[t._v("Eslint")]),t._v(": Find and fix problems in your JavaScript code.")]),t._v(" "),a("li",[a("strong",[t._v("Prettier")]),t._v(": code formatter")]),t._v(" "),a("li",[a("strong",[t._v("Babel")]),t._v(": Babel is a compiler for writing next generation JavaScript.")]),t._v(" "),a("li",[a("strong",[t._v("Stylelint")]),t._v(": styles linter")]),t._v(" "),a("li",[a("strong",[t._v("Husky")]),t._v(": Use git hooks easily")]),t._v(" "),a("li",[a("strong",[t._v("lint-staged")]),t._v(": Run linters on git staged files.")]),t._v(" "),a("li",[a("strong",[t._v("commitlint")]),t._v(": Lint commit messages.")])]),t._v(" "),a("h2",{attrs:{id:"eslint-prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-prettier"}},[t._v("#")]),t._v(" eslint & prettier")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint@7 eslint-plugin-vue babel-eslint "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint8与vue-eslint-parser不兼容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D --save-exact prettier\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint-plugin-prettier eslint-config-prettier\n")])])]),a("ul",[a("li",[a("code",[t._v("eslint-config-prettier")]),t._v(" 用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则，但只是关闭rules，需要配合其它配置来使用。")]),t._v(" "),a("li",[a("code",[t._v("eslint-plugin-prettier")]),t._v(" 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。")]),t._v(" "),a("li",[t._v("二者结合使用最佳，效果相当于把 ESLint 中与 Prettier 冲突的规则disable掉，这部分转而使用 prettier 的规则做校验。")])]),t._v(" "),a("h3",{attrs:{id:"命令行使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行使用"}},[t._v("#")]),t._v(" 命令行使用")]),t._v(" "),a("h4",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" eslint")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("npx eslint --fix "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nnpx eslint --fix src/**/*."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("js,vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" prettier")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --write")]),t._v("\nnpx prettier -w "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --check")]),t._v("\nnpx prettier -c src/**/*.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use config")]),t._v("\nnpx prettier -w "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --print-width "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n")])])]),a("h2",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D @babel/core\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" un babel-eslint\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#deprecated")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D @babel/eslint-parser\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/eslint-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    requireConfigFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylelint"}},[t._v("#")]),t._v(" stylelint")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D stylelint stylelint-config-recommended-scss\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D stylelint-config-recess-order\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D stylelint-prettier@1 stylelint-config-prettier\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D postcss-html\n")])])]),a("p",[t._v("命令行使用")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("npx stylelint "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.scss"')]),t._v("\nnpx stylelint --fix "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.scss"')]),t._v("\n")])])]),a("p",[t._v("兼容性说明")]),t._v(" "),a("blockquote",[a("p",[t._v('error stylelint-prettier@2.0.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.16.1"')]),t._v(" "),a("blockquote",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D stylelint-prettier@1\t//yarn add -D stylelint-prettier@1.2.0\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[t._v("#")]),t._v(" husky")]),t._v(" "),a("p",[t._v("新版本的husky使用 Git 2.9 的新特性 "),a("code",[t._v("core.hooksPath")]),t._v(" 进行了重构，原来在 package.json 中的配置方式不再推荐")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky -D\n\nnpx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跳过校验（--no-verify）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yolo!"')]),t._v(" -n    \n")])])]),a("h2",{attrs:{id:"lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged"}},[t._v("#")]),t._v(" lint-staged")]),t._v(" "),a("p",[t._v("结合 husky 使用，在执行 Git Hooks 时对暂存区的代码使用 eslint 和 stylelint")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D lint-staged\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加pre-commit钩子的可执行脚本")]),t._v("\nnpx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" .husky/pre-commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx lint-staged"')]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.{scss,less,styl,css}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint --fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令行使用")]),t._v("\nnpx --no-install lint-staged\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" lint-staged\n")])])]),a("h2",{attrs:{id:"commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[t._v("#")]),t._v(" commitlint")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install and configure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D @commitlint/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cli,config-conventional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"module.exports = { extends: ['@commitlint/config-conventional'] };\"")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" .commitlintrc.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add hook")]),t._v("\nnpx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" .husky/commit-msg "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npx --no -- commitlint --edit "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test")]),t._v("\nnpx commitlint --from HEAD~1 --to HEAD --verbose\n")])])]),a("h2",{attrs:{id:"vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[t._v("#")]),t._v(" VSCode")]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("ul",[a("li",[t._v("EditorConfig for VS Code")]),t._v(" "),a("li",[t._v("ESLint")]),t._v(" "),a("li",[t._v("Prettier - Code formatter")]),t._v(" "),a("li",[t._v("stylelint (stylelint-plus supports auto fix on save)\n"),a("ul",[a("li",[t._v("要修改配置，添加对 "),a("code",[t._v(".scss")]),t._v(" 和 "),a("code",[t._v(".vue")]),t._v(" 文件的校验")])])])]),t._v(" "),a("p",[t._v("关闭 vetur 样式校验（可选）")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vetur.validation.style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[t._v("#")]),t._v(" 踩坑")]),t._v(" "),a("h3",{attrs:{id:"如果安装依赖有冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果安装依赖有冲突"}},[t._v("#")]),t._v(" 如果安装依赖有冲突")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --ignore-engines\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --force\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);