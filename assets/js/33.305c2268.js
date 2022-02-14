(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{434:function(t,s,n){"use strict";n.r(s);var a=n(43),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"编码规范工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编码规范工具"}},[t._v("#")]),t._v(" 编码规范工具")]),t._v(" "),n("h2",{attrs:{id:"预备知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[t._v("#")]),t._v(" 预备知识")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/senntyou/blogs/blob/master/web-advance/12.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎样提升代码质量"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/184951182",target:"_blank",rel:"noopener noreferrer"}},[t._v("《前端科普系列-ESlint：守住优雅的护城河》"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6971783776221265927",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 以和为贵！让 ESlint、Prettier 和 EditorConfig 互不冲突"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"一、editorconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、editorconfig"}},[t._v("#")]),t._v(" 一、EditorConfig")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .editorconfig")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 告诉EditorConfig插件，这是根文件，不用继续往上查找")]),t._v("\nroot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配全部文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置字符集")]),t._v("\ncharset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf-8\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进风格，可选space、tab")]),t._v("\nindent_style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" space\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进的空格数")]),t._v("\nindent_size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结尾换行符，可选lf、cr、crlf")]),t._v("\nend_of_line "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在文件结尾插入新行")]),t._v("\ninsert_final_newline "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除一行中的前后空格")]),t._v("\ntrim_trailing_whitespace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 限定每行最多字符")]),t._v("\nmax_line_length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配md结尾的文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ninsert_final_newline "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\ntrim_trailing_whitespace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),n("h2",{attrs:{id:"二、eslint-prettier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、eslint-prettier"}},[t._v("#")]),t._v(" 二、eslint & prettier")]),t._v(" "),n("p",[t._v("《JavaScript 高级程序设计》作者 Nicholas C. Zakas 于 2013 年 6 月创建了 ESLint，ESLint 将源代码解析成 AST，然后检测 AST 来判断代码是否符合规则，为 ESLint 的高可扩展性奠定了结实的基础。")]),t._v(" "),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint eslint-plugin-vue babel-eslint "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Vue")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint eslint-plugin-react babel-eslint eslint-plugin-import "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#React")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D --save-exact prettier\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint-plugin-prettier eslint-config-prettier\n")])])]),n("ul",[n("li",[n("p",[n("code",[t._v("eslint-config-prettier")]),t._v("  用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则，但只是关闭rules，需要配合其它配置来使用。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("eslint-plugin-prettier")]),t._v("  将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。")])]),t._v(" "),n("li",[n("p",[t._v("二者结合使用最佳，效果相当于把 ESLint 中与 Prettier 冲突的规则disable掉，这部分转而使用 prettier 的规则做校验。")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parserOptions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义 parser，详见 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser")]),t._v("\n    parser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-eslint'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourceType"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  env"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    browser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    es6"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个配置继承，且会覆盖它前面的配置")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 eslint-plugin-vue 插件，并继承 eslint-config-vue 的 recommended 配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:vue/recommended'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint:recommended'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// eslint-config-prettier版本8.0.0以前还需要额外添加"prettier/react"或者"prettier/vue"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:prettier/recommended'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add your custom rules here")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .prettierrc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabWidth"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"printWidth"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"singleQuote"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单引号")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsxBracketSameLine"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不将>放置在下一行")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"htmlWhitespaceSensitivity"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略空格敏感模式，如<span>等文字空白敏感的标签，格式化后可能导致>单独成行")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"arrowParens"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avoid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数只有一个参数时不加括号")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trailingComma"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逗号")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"semi"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要分号")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("a",{attrs:{href:"https://blog.windstone.cc/front-end-engineering/code-formatter/eslint/eslint-prettier.html#%E9%85%8D%E7%BD%AE-prettier-%E8%A7%84%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier 所有配置项"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"格式化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --write")]),t._v("\nnpx prettier -w "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --check")]),t._v("\nnpx prettier -c "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.js"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --print-width <int>")]),t._v("\nnpx prettier -w "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --print-width "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n")])])]),n("h3",{attrs:{id:"vue3配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3配置"}},[t._v("#")]),t._v(" vue3配置")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint:recommended'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:vue/vue3-recommended'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:prettier/recommended'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// override/add rules settings here, such as:")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("可选：Disable vetur in VSCode's settings (if you had it installed)")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vetur.validation.style"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),n("h2",{attrs:{id:"三、husky-lint-staged"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、husky-lint-staged"}},[t._v("#")]),t._v(" 三、husky & lint-staged")]),t._v(" "),n("ul",[n("li",[t._v("Husky 的原理是把Husky配置和 Git Hook 关联起来，便于我们使用 Git Hook")]),t._v(" "),n("li",[t._v("只对本次提交的代码（staged git files）做代码检查")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式一：手动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D husky lint-staged\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式二，基于prettier（https://prettier.io/docs/en/precommit.html）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动安装 husky 和 lint-staged，并在package.json中添加配置")]),t._v("\nnpx mrm@2 lint-staged\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在本地提交之前做 Lint。")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "pre-commit": "npm run lint"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将每一个暂存区的 .js、.vue 文件作为参数，依次传给 eslint --fix 和 git add 执行")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js 、babel.config.js 等均不合匹配规则")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{js,vue}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{scss,less,styl,css}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint --fix"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .husky/pre-commit (v7)")]),t._v("\nnpx --no-install lint-staged\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" lint-staged\n")])])]),n("h2",{attrs:{id:"延伸问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#延伸问题"}},[t._v("#")]),t._v(" 延伸问题")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("eslint 中 plugins 和 extends 的区别是什么？")]),t._v(" "),n("br"),t._v(" "),n("h4",{attrs:{id:"_1-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-plugins"}},[t._v("#")]),t._v(" 1. plugins")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint > plugins"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("指定 Parser（词法、语法分析的工具，解析结果类似于 AST，默认使用 Espree ）")]),t._v(" "),n("li",[t._v("指定 Processor（用于从特殊文件如 .vue 中提取 js 代码，也可以在预处理中转换 js 代码）")]),t._v(" "),n("li",[t._v("单指配置文件中的 plugins 属性："),n("u",[t._v("define additional rules, environments, configs, etc. for ESLint to use.")])])]),t._v(" "),n("h4",{attrs:{id:"_2-extends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-extends"}},[t._v("#")]),t._v(" 2. extends")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint > extends"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("相当于使用第三方配置好的的 .eslintrc.js，有三种配置来源：文件路径、eslint-config- 、eslint-plugin-")]),t._v(" "),n("li",[t._v("配置多个时，后者继承且会覆盖前者规则")])]),t._v(" "),n("p",[t._v("🌰")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm install -D --save-exact prettier")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm install -D eslint-plugin-prettier eslint-config-prettier")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ------------this is what it expands to:------------")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承了eslint-config-prettier配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用了eslint-plugin-prettier插件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 设置了"prettier/prettier"规则为"error"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/prettier"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arrow-body-style"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prefer-arrow-callback"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("h1",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("PanJiaChen/vue-element-admin"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.windstone.cc/front-end-engineering/code-formatter/eslint/#%E8%A7%84%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint--风动之石的博客"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);