# 🚫💩

## 入门

<https://github.com/senntyou/blogs/blob/master/web-advance/12.md>

<https://zhuanlan.zhihu.com/p/184951182>

## Vue2配置方案

1. **EditorConfig**: For the same project across various editors and IDEs.
2. **Eslint**: Find and fix problems in your JavaScript code.
3. **Prettier**: code formatter
4. **Babel**: Babel is a compiler for writing next generation JavaScript.
5. **Stylelint**: styles linter
6. **Husky**: Use git hooks easily
7. **lint-staged**: Run linters on git staged files.
8. **commitlint**: Lint commit messages.

## eslint & prettier

### 安装

```shell
npm install -D eslint@7 eslint-plugin-vue babel-eslint # eslint8与vue-eslint-parser不兼容
npm install -D --save-exact prettier
npm install -D eslint-plugin-prettier eslint-config-prettier
```

- `eslint-config-prettier` 用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则，但只是关闭rules，需要配合其它配置来使用。
- `eslint-plugin-prettier` 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。
- 二者结合使用最佳，效果相当于把 ESLint 中与 Prettier 冲突的规则disable掉，这部分转而使用 prettier 的规则做校验。

### 命令行使用

### eslint

```shell
npx eslint --fix .
```

#### prettier

```shell
# --write
npx prettier -w .

# --check
npx prettier -c "src/**/*.js"

# use config
npx prettier -w . --print-width 120
```

## babel

```shell
npm install -D @babel/core @babel/eslint-parser
```

```js
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
npm i -D stylelint-prettier stylelint-config-prettier
```

命令行使用

```shell
npx stylelint "**/*.scss"
npx stylelint --fix "**/*.scss"
```

## husky

新版本的husky使用 Git 2.9 的新特性 `core.hooksPath` 进行了重构，原来在 package.json 中的配置方式不再推荐

```shell
npm install husky -D

npx husky install

# 添加pre-commit钩子的可执行脚本
npx husky add .husky/pre-commit "npx lint-staged"
```

```shell
# 跳过校验（--no-verify）
git commit -m "yolo!" -n    
```

## lint-staged

结合 husky 使用，在执行 Git Hooks 时对暂存区的代码使用 eslint 和 stylelint

```shell
npm install -D lint-staged
```

```json
// package.json
  "lint-staged": {
    "*.{js,vue}": [
      "eslint --fix"
    ],
    "*.{scss,less,styl,css}": [
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

## VSCode

### 插件

- EditorConfig for VS Code
- ESLint
- Prettier - Code formatter
- stylelint (stylelint-plus supports auto fix on save)
  - 要修改配置，添加对 `.scss` 文件的校验

关闭 vetur 样式校验（可选）

```json
"vetur.validation.style": false
```
