# Git 应用

## 一、图例

[图解 Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)



## 二、常用命令

![git命令操作图例](https://i.stack.imgur.com/cZkcV.jpg)

```sh
git status	# 显示工作目录和暂存区的状态

# 创建+切换分支
git checkout -b <name>
git switch -c <name>

# 切换分支
git checkout <name>
git switch <name>

# 推送分支至远端
git push origin <name>
# 手动建立追踪关系
git branch --set-upstream-to=origin/<name> <name>

#创建的分支最好和远端分支如果不同名
git branch --set-upstream-to=origin/master dev
git pull origin master:dev

# 删除本地分支
git branch -d <name>
# 删除远程分支
git push origin --delete <name>

# 查看所有分支
git branch -a
```



## 三、Git Hooks

[all Git hooks](https://git-scm.com/docs/githooks)

Hook 就是在执行某个事件之前或之后进行一些其他额外的操作。

Git Hooks 的实现其实非常简单，就是就 `.git/hooks` 文件下，保存了一些 shell 脚本，然后在对应的钩子中执行这些脚本就行了。

### Husky 

通过配置项目（通常是根路径下的`.husky`）下存放可执行脚本

新版本的husky使用 Git 2.9 的新特性 (`core.hooksPath`) 进行了重构，从而可以指定git hooks可执行脚本的位置；不用再像旧版本中 `.git/hooks/` 和  `huskyrc.js`（或是package.json中的配置）之间不能同步修改（Generating Git hooks from a JS config can get out of sync.）

```sh
npm install husky -D

# manual install（取消了以前在 npm scripts 的 postinstall钩子 中自动安装husky的方式）
npx husky install

# 添加pre-commit钩子的可执行脚本
npx husky add .husky/pre-commit "npx lint-staged"
```

#### 配置

package.json方式

```json
// package.json
// ----------不推荐，可删----------
"husky": {
  "hooks": {
    "pre-commit": "lint-staged" //在本地提交之前做 Lint。
  }
},
// ----------不推荐，可删----------
"lint-staged": {
  "src/**/*.{js,vue}": [ "prettier --write", "eslint --fix", "git add" ]
},
```

```sh
# 需要保留package.json的husky字段配置才能使用
npx --no-install lint-staged
# or
yarn lint-staged
```



### commitlint

```sh
# Install and configure
npm install --save-dev @commitlint/{cli,config-conventional}
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > .commitlintrc.js

# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# test
npx commitlint --from HEAD~1 --to HEAD --verbose
```



#### rule

[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

```js
// type
['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
```

```js
// .commitlintrc.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'subject-case': [0],
    'header-max-length': [2, 'always', 80],
  }
}
```



#### 规范

[Git Commit Message Convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)

[Angular > commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

```js
// Commit Message Header
<type>(<scope>): <short summary>
```



# 参考

- [Why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)
- [husky使用总结](https://zhuanlan.zhihu.com/p/366786798)