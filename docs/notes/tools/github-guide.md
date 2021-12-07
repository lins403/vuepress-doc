# GitHub指南

## 一、本地项目推送至github

1. 本地项目 `git init`
2. 到 github 上 `Create a new repository`
3. 复制项目的线上 git 地址
4. 本地终端 `cd ~/githubRespositories/lins-template` 
5. `git remote add origin https://github.com/lins403/lins-template.git`
6. 【如果远端新建了 README 】`git pull --rebase origin master`
7. `git push -u origin master` （线上默认是main分支了，推送以后就被master分支覆盖了）

## 二、fork贡献代码

要贡献代码的repo称为上游仓库

```shell
# 对上游仓库进行fork得到自己的origin仓库，clone至本地，创建新分支用于自己的开发
git clone https://github.com/your_github/project_repo.git

# 添加远程仓库，源于上游仓库
git remote add upstream https://github.com/original_github/project_repo.git
# 添加完成以后，可以看到有 origin 和 upstream 两个远程仓库
git remote -v

# 查看所有分支，因为是clone所以默认指向origin，而此时并没有upstream的分支
git branch -a

# 将远程仓库upstream抓取到本地仓库，然后就可以看到本地upstream的分支了
git fetch upstream

# 同步本地代码，也可以用 `git merge upstream/master`
git rebase upstream/master

# 通常一个issue创建一个分支，用完即删
git checkout -b dev

# 将dev分支推送至远端
git push origin dev
# 提 PR
create pull request

# 删除远程仓库
git remote rm upstream
```

----

----

<img :src="$withBase('/assets/img/notes/github_fork.png')">

```shell
# 操作实录
cd Documents
git clone https://github.com/lins403/ant-design-pro.git

cd ant-design-pro
git remote -v
git remote add upstream https://github.com/ant-design/ant-design-pro.git
git remote -v

git branch -a
git fetch upstream
git branch -a

git rebase upstream/master
git push
```

参考：

- [Git-fork分支整理](https://sheltonliu.github.io/2017/12/04/git-fork-knowledge/)
- [远程仓库的使用](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8)
- [Syncing a fork](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

## 三、GitHub Pages

> [如何使用Github Pages?](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Using_Github_pages)
> 
> [新增 SSH 密钥到 GitHub 帐户](https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

## 四、Github API

基于 GraphQL

> [一篇文章搞定Github API 调用 (v3）](https://segmentfault.com/a/1190000015144126)
> 
> [GitHub GraphQL API](https://docs.github.com/en/graphql)
> 
> [Show off Github repos in your Gatsby site using Github GraphQL API](https://dev.to/lennythedev/show-off-your-github-repos-in-your-gatsby-site-using-graphql-421l)

## 五、GitHub actions

> [github actions 入门指南及实践](https://shanyue.tech/no-vps/github-action-guide.html#快速开始)

🌰：部署Hexo静态博客到 github pages

创建 Workflow 文件：`.github/workflows/deploy.yml`

```yaml
# 模板源于B站「objtube的卢克儿」
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2 
        with:
          persist-credentials: false

      - name: Install and Build 🔧
        run: |
          npm install
          npm run build
        env:
          CI: false

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: public # The folder the action should deploy.
```

## 六、自建图床

PicGo: <https://molunerfinn.com/PicGo/>

配置：[GitHub图床](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A)

jsDelivr CDN : [jsDelivr - A free, fast, and reliable CDN for open source](https://www.jsdelivr.com/?docs=gh)

```shell
# 访问路径
https://cdn.jsdelivr.net/gh/<user_name>/>repo_name>/<file_name>
# 🌰
https://cdn.jsdelivr.net/gh/lins403/assetsSpace/vuepress/img/Klose.jpg
```

## 七、GitHub badge

工具1（推荐）: <https://shields.io/>

工具2: <https://badge.fury.io/for/js>

```js
// npm

// packageName(webpack)
https://img.shields.io/npm/v/webpack

// scope(@vue/cli)
https://img.shields.io/npm/v/@vue/cli

// tag(vue@next)
https://img.shields.io/npm/v/vue/next
```

```html
<a href="https://github.com/webpack/webpack/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/webpack/webpack"></a>
<a href="https://www.npmjs.com/package/@vue/cli" target="_blank" noopener noreferrer><img src="https://img.shields.io/npm/v/@vue/cli"></a>
```

<a href="https://www.bilibili.com/" target="_blank"><img src="https://img.shields.io/badge/bilibili-%40%E5%B0%8F%E7%9C%AF%E5%98%BB-ff69b4"></a>

<a href="https://github.com/webpack/webpack/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/webpack/webpack"></a>

[150+ Badges for GitHub](https://dev.to/envoy_/150-badges-for-github-pnk)

## 八、开源 license

![开元许可证](http://www.ruanyifeng.com/blogimg/asset/201105/bg2011050101.png)
