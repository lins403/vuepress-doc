# 🚫💩

## 预备知识

[怎样提升代码质量 · senntyou/blogs · GitHub](https://github.com/senntyou/blogs/blob/master/web-advance/12.md)

[前端科普系列-ESlint：守住优雅的护城河 - 知乎](https://zhuanlan.zhihu.com/p/184951182)

## Vue2配置方案

1. **EditorConfig**: For the same project across various editors and IDEs.
2. **Eslint**: Find and fix problems in your JavaScript code.
3. **Prettier**: code formatter
4. **Babel**: Babel is a compiler for writing next generation JavaScript.
5. **Stylelint**: styles linter
6. **Husky**: Use git hooks easily
7. **lint-staged**: Run linters on git staged files.
8. **commitlint**: Lint commit messages.
8. **jscpd**: Find duplicated blocks

## eslint & prettier

### 安装

```shell
npm install -D eslint@7
# eslint8与vue-eslint-parser@7不兼容，eslint-config-prettier@8 peer eslint@">=7.0.0"
npm install -D eslint-plugin-vue babel-eslint
npm install -D --save-exact prettier
npm install -D eslint-plugin-prettier eslint-config-prettier
```

- `eslint-config-prettier` 用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则，但只是关闭rules，需要配合其它配置来使用。
- `eslint-plugin-prettier` 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。
- 二者结合使用最佳，效果相当于把 ESLint 中与 Prettier 冲突的规则disable掉，这部分转而使用 prettier 的规则做校验。

### 命令行使用

#### eslint

```shell
npx eslint --fix .
npx eslint --fix src/**/*.{js,vue}
eslint --fix --ext .js,.vue src test/unit/specs test/e2e/specs
```

#### prettier

```shell
# --write
npx prettier -w .

# --check
npx prettier -c src/**/*.js

# use config
npx prettier -w . --print-width 120
```

## babel

```shell
npm install -D @babel/core
npm un babel-eslint	#deprecated
npm install -D @babel/eslint-parser
```

```js
// .eslintrc.js
module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  },
};
```

## stylelint

安装

```shell
npm i -D stylelint stylelint-config-recommended-scss
npm i -D stylelint-config-recess-order
npm i -D stylelint-prettier@1 stylelint-config-prettier
npm i -D postcss postcss-html	#需要再手动装postcss@8
```

命令行使用

```shell
npx stylelint "**/*.scss"
npx stylelint --fix "**/*.scss"
```

兼容性说明

[Cannot resolve custom syntax module "postcss-scss"](https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/2#issuecomment-951636774)

> error stylelint-prettier@2.0.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.16.1"
>
> > ```
> > npm i -D stylelint-prettier@1	//yarn add -D stylelint-prettier@1.2.0
> > ```

## husky

新版本的husky使用 Git 2.9 的新特性 `core.hooksPath` 进行了重构，原来在 package.json 中的配置方式不再推荐

```shell
npm install husky -D

npx husky install
```

```shell
# 跳过校验（--no-verify）
git commit -m "yolo!" -n    
```

## lint-staged

结合 husky 使用，在执行 Git Hooks 时对暂存区的代码使用 eslint 和 stylelint

```shell
npm install -D lint-staged

# 添加pre-commit钩子的可执行脚本
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
// package.json
  "lint-staged": {
    "*.{js,vue}": [
      "eslint --fix"
    ],
    "src/**/*.{scss,less,styl,css}": [
      "stylelint --fix",
      "prettier --write"
    ]
  },
```

```shell
# 命令行使用
npx --no-install lint-staged
# or
yarn lint-staged
```

## commitlint

```shell
# Install and configure
npm install -D @commitlint/{cli,config-conventional}
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > .commitlintrc.js

# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# test
npx commitlint --from HEAD~1 --to HEAD --verbose
```

关于 changelog 与 release：[Git 应用 > conventional-changelog | 小眯嘻的文档博客](https://lins403.github.io/vuepress-doc/notes/tools/git-application.html#五、conventional-changelog)

## jscpd

[文档](https://github.com/kucherenko/jscpd/tree/master/packages/jscpd)

```shell
npm install -D jscpd
```

```shell
npx jscpd src/utils

npx jscpd -p "src/**/*.js"
npx jscpd src/ -f 'javascript,scss'
npx jscpd src/ --ignore-pattern "import.*from\s*'.*'"
```

```json
// .jscpd.json
{
  // The threshold for duplication level
  "threshold": 0.1,
  "minLines": 5,
  "minTokens": 25,
  "format": "javascript,scss",
  "reporters": ["html", "console"],
  "ignore": ["**/__snapshots__/**", "**/*.min.js", "**/*.map"],
  "absolute": true,
  "gitignore": true
}
```



## VSCode

### 插件

- EditorConfig for VS Code
- ESLint
- Prettier - Code formatter
- stylelint (stylelint-plus supports auto fix on save)
  - 要修改配置，添加对 `.scss` 和 `.vue` 文件的校验

关闭 vetur 样式校验（可选）

```json
"vetur.validation.style": false
```

##  踩坑

### 如果安装依赖有冲突

```shell
yarn install --ignore-engines
# or
npm install --force
```

### CHANGELOG.md不显示chore和build

[Chores section · Issue #135 · conventional-changelog/standard-version · GitHub](https://github.com/conventional-changelog/standard-version/issues/135)

[docs(FAQ): explain why is chore entries not in my CHANGELOG](https://github.com/conventional-changelog/standard-version/pull/195)

**Solution1**: fork一份 preset，在运行 conventional-changelog 时指定这份 preset

- 实现参考：[conventional-changelog-config  -  npm](https://www.npmjs.com/package/conventional-changelog-config)

**Solution2**: 使用 `standard-version` ，配置 `.versionrc.js`，通过官方支持实现preset平替

- 使用参考：[feat: adds new configurable conventionalcommits preset](https://github.com/conventional-changelog/standard-version/pull/323)
