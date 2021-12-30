# Git 应用

## 一、图例

[图解 Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)

## 二、常用命令

![git命令操作图例](https://i.stack.imgur.com/cZkcV.jpg)

```shell
git status    # 显示工作目录和暂存区的状态

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

[Git - githooks Documentation](https://git-scm.com/docs/githooks)

Hook 就是在执行某个事件之前或之后进行一些其他额外的操作。

Git Hooks 的实现其实非常简单，就是就 `.git/hooks` 文件下，保存了一些 shell 脚本，然后在对应的钩子中执行这些脚本就行了。

### Husky

通过配置项目（通常是根路径下的`.husky`）下存放可执行脚本

新版本的husky使用 Git 2.9 的新特性 (`core.hooksPath`) 进行了重构，从而可以指定git hooks可执行脚本的位置；不用再像旧版本中 `.git/hooks/` 和  `huskyrc.js`（或是package.json中的配置）之间不能同步修改（Generating Git hooks from a JS config can get out of sync.）

```shell
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

```shell
# 需要保留package.json的husky字段配置才能使用
npx --no-install lint-staged
# or
yarn lint-staged
```

#### 命令行

```shell
# 跳过校验
git commit -m "yolo!" --no-verify
git commit -m "yolo!" -n
```

## 四、commitlint

[Commitizen](http://commitizen.github.io/cz-cli/)：通过命令行交互的方式生成规范的commit message

[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：校验 commit message

因为习惯使用 `git commit` 或者 GUI 的方式，所以就不使用 `commitizen` 了

```shell
# Install 
npm install --save-dev @commitlint/{cli,config-conventional}
# or @commitlint/config-angular，but not support chore and style

# configure
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > .commitlintrc.js

# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# test
npx commitlint --from HEAD~1 --to HEAD --verbose
```

### Specification

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

```shell
[header]	# <type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

```js
// Git Commit Message Convention
/^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/
```

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: changes aside from src

### Rule

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

## 五、conventional-changelog

[Modules Important to Conventional Changelog Ecosystem](https://github.com/conventional-changelog/conventional-changelog#modules-important-to-conventional-changelog-ecosystem)

[`conventional-changelog-cli`  -  npm](https://www.npmjs.com/package/conventional-changelog-cli)

```shell
npm install -g conventional-changelog-cli
# conventional-changelog -p angular -i CHANGELOG.md -s -r 0
```

[`standard-version`  -  npm](https://www.npmjs.com/package/standard-version)

1. `bump` the version in bumpFiles based on your commits.（自动修改 package.json 中的 version）
2. Generates a `changelog` based on your commits 
3. Creates a new `commit` including your bumpFiles and updated CHANGELOG.
4. Creates a new `tag` with the new version number.

```shell
npm install -g standard-version
# Or
npm i -D standard-version
```

```shell
{
  "scripts": {
    "release": "standard-version"
    # "release": "standard-version --dry-run"
  }
}
```

```shell
# see what commands would be run, without committing to git or updating files.
standard-version --dry-run

# first-release(This will tag a release without bumping the version bumpFiles.)
npm run release -- -f		#npm scripts
standard-version -f		#global bin
npx standard-version -f		#npx

# 1.0.0 -> 1.1.0
npm run release -- -r minor		# major, minor, patch
# Or
npm run release -- -r 1.1.0

# tag prefix
standard-version -t "stable-"

# pre-release
standard-version --release-as major --prerelease alpha
```



## 六、配置文件

`.gitignore`

`.gitattributes`

- 最大用途在于统一文件的`endOfLine`，Windows(CRLF)与Linux(LF)

# 参考

- [Typicode's blog - Why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)
- [husky使用总结 - 知乎](https://zhuanlan.zhihu.com/p/366786798)
- [git commit 、CHANGELOG 和版本发布的标准自动化 - 知乎](https://zhuanlan.zhihu.com/p/51894196)
- [vue/COMMIT_CONVENTION.md at dev · vuejs/vue · GitHub](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)
- [angular/CONTRIBUTING.md at master · angular/angular · GitHub](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)