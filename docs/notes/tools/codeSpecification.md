# 编程规范

[前端代码规范](https://guide.aotu.io/docs/)

[Code Guide](http://imweb.github.io/CodeGuide/#html)

[blogs/12.md at master · senntyou/blogs · GitHub](https://github.com/senntyou/blogs/blob/master/web-advance/12.md)

[《前端科普系列-ESlint：守住优雅的护城河》](https://zhuanlan.zhihu.com/p/184951182)

## 一、EditorConfig

```shell
# .editorconfig

# 告诉EditorConfig插件，这是根文件，不用继续往上查找
root = true

# 匹配全部文件
[*]
# 设置字符集
charset = utf-8
# 缩进风格，可选space、tab
indent_style = space
# 缩进的空格数
indent_size = 2
# 结尾换行符，可选lf、cr、crlf
end_of_line = lf
# 在文件结尾插入新行
insert_final_newline = true
# 删除一行中的前后空格
trim_trailing_whitespace = true

# 匹配md结尾的文件
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```

## 二、eslint & prettier

```shell
npm install -D eslint eslint-plugin-vue babel-eslint #Vue
npm install -D eslint eslint-plugin-react babel-eslint eslint-plugin-import #React
npm install -D --save-exact prettier
npm install -D eslint-plugin-prettier eslint-config-prettier
```

- `eslint-config-prettier`  用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则，但只是关闭rules，需要配合其它配置来使用。

- `eslint-plugin-prettier`  将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。

- 二者结合使用最佳，效果相当于把 ESLint 中与 Prettier 冲突的规则disable掉，这部分转而使用 prettier 的规则做校验。

```js
// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    // 自定义 parser，详见 https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // 每个配置继承，且会覆盖它前面的配置
       // 使用 eslint-plugin-vue 插件，并继承 eslint-config-vue 的 recommended 配置
    'plugin:vue/recommended',
    'eslint:recommended',
      // eslint-config-prettier版本8.0.0以前还需要额外添加"prettier/react"或者"prettier/vue"
    'plugin:prettier/recommended'
  ],
  // add your custom rules here
  "rules": {}
}
```

```json
// .prettierrc
{
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,    // 单引号
  "jsxBracketSameLine": false, // 不将>放置在下一行
  "htmlWhitespaceSensitivity": "ignore", // 忽略空格敏感模式，如<span>等文字空白敏感的标签，格式化后可能导致>单独成行
  "arrowParens": "avoid", // 箭头函数只有一个参数时不加括号
  "trailingComma": "none", // 逗号
  "semi":false    // 不要分号
}
```

[Prettier 所有配置项](https://blog.windstone.cc/front-end-engineering/code-formatter/eslint/eslint-prettier.html#%E9%85%8D%E7%BD%AE-prettier-%E8%A7%84%E5%88%99)

## 三、husky & lint-staged

- Husky 的原理是把Husky配置和 Git Hook 关联起来，便于我们使用 Git Hook 
- 只对本次提交的代码（staged git files）做代码检查

```shell
# 方式一：手动
npm install -D husky lint-staged

# 方式二，基于prettier（https://prettier.io/docs/en/precommit.html）
# 自动安装 husky 和 lint-staged，并在package.json中添加配置
npx mrm@2 lint-staged
```

```json
// package.json
{
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged", //在本地提交之前做 Lint。
      // "pre-commit": "npm run lint"
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    // 将每一个暂存区的 .js、.vue 文件作为参数，依次传给 eslint --fix 和 git add 执行
    // .eslintrc.js 、babel.config.js 等均不合匹配规则
    "*.{js,vue}": ["eslint --fix"],
    "*.{scss,less,styl,css}": ["stylelint --fix", "prettier --write"]
  }
  // ...
}
```

```shell
# .husky/pre-commit (v7)
npx --no-install lint-staged
# or
yarn lint-staged
```

## 延伸问题

::: details eslint 中 plugins 和 extends 的区别是什么？

<br />

#### 1. plugins

[eslint > plugins](https://eslint.org/docs/user-guide/configuring/plugins)

- 指定 Parser（词法、语法分析的工具，解析结果类似于 AST，默认使用 Espree ）
- 指定 Processor（用于从特殊文件如 .vue 中提取 js 代码，也可以在预处理中转换 js 代码）
- 单指配置文件中的 plugins 属性：<u>define additional rules, environments, configs, etc. for ESLint to use.</u>

#### 2. extends

[eslint > extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

- 相当于使用第三方配置好的的 .eslintrc.js，有三种配置来源：文件路径、eslint-config- 、eslint-plugin-
- 配置多个时，后者继承且会覆盖前者规则

🌰

```js
// npm install -D --save-exact prettier
// npm install -D eslint-plugin-prettier eslint-config-prettier

{
  "extends": ["plugin:prettier/recommended"]
}

// ------------this is what it expands to:------------
{
      // 继承了eslint-config-prettier配置
  "extends": ["prettier"],
    // 启用了eslint-plugin-prettier插件
  "plugins": ["prettier"],
  "rules": {
    // 设置了"prettier/prettier"规则为"error"
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

:::

## CSS — BEM 命名规范

- Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

> \-  中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

> __  双下划线：双下划线用来连接块和块的子元素

> _   单下划线：单下划线用来描述一个块或者块的子元素的一种状态

# 参考

[[译] 以和为贵！让 ESlint、Prettier 和 EditorConfig 互不冲突](https://juejin.cn/post/6971783776221265927)

[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

[ESLint--风动之石的博客](https://blog.windstone.cc/front-end-engineering/code-formatter/eslint/#%E8%A7%84%E5%88%99)
