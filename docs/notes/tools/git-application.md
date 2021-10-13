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

Hook 就是在执行某个事件之前或之后进行一些其他额外的操作。

Git Hooks 的实现其实非常简单，就是就 `.git/hooks` 文件下，保存了一些 shell 脚本，然后在对应的钩子中执行这些脚本就行了。

### Husky 

一个让配置 Git 钩子变得更简单的工具

Husky 的原理是让我们在项目根目录中写一个配置文件，然后在安装 Husky的时候把配置文件和 Git Hook 关联起来，这样我们就能在团队中使用 Git Hook 了。

```sh
npm install husky -D
```

```json
// package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged" //在本地提交之前做 Lint。
  }
},
"lint-staged": {
  "src/**/*.{js,vue}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ]
},
```



# 参考

[一文带你彻底学会 Git Hooks 配置](https://developers.weixin.qq.com/community/develop/article/doc/00042ce53e8b308f558ad1d6558c13)