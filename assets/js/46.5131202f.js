(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{446:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github指南"}},[t._v("#")]),t._v(" GitHub指南")]),t._v(" "),a("h2",{attrs:{id:"一、本地项目推送至github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、本地项目推送至github"}},[t._v("#")]),t._v(" 一、本地项目推送至github")]),t._v(" "),a("ol",[a("li",[t._v("本地项目 "),a("code",[t._v("git init")])]),t._v(" "),a("li",[t._v("到 github 上 "),a("code",[t._v("Create a new repository")])]),t._v(" "),a("li",[t._v("复制项目的线上 git 地址")]),t._v(" "),a("li",[t._v("本地终端 "),a("code",[t._v("cd ~/githubRespositories/lins-template")])]),t._v(" "),a("li",[a("code",[t._v("git remote add origin https://github.com/lins403/lins-template.git")])]),t._v(" "),a("li",[t._v("【如果远端新建了 README 】"),a("code",[t._v("git pull --rebase origin master")])]),t._v(" "),a("li",[a("code",[t._v("git push -u origin master")]),t._v(" （线上默认是main分支了，推送以后就被master分支覆盖了）")])]),t._v(" "),a("h2",{attrs:{id:"二、fork贡献代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、fork贡献代码"}},[t._v("#")]),t._v(" 二、fork贡献代码")]),t._v(" "),a("p",[t._v("要贡献代码的repo称为上游仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对上游仓库进行fork得到自己的origin仓库，clone至本地，创建新分支用于自己的开发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/your_github/project_repo.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库，源于上游仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/original_github/project_repo.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加完成以后，可以看到有 origin 和 upstream 两个远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支，因为是clone所以默认指向origin，而此时并没有upstream的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将远程仓库upstream抓取到本地仓库，然后就可以看到本地upstream的分支了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步本地代码，也可以用 `git merge upstream/master`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase upstream/master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通常一个issue创建一个分支，用完即删")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将dev分支推送至远端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提 PR")]),t._v("\ncreate pull request\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" upstream\n")])])]),a("hr"),t._v(" "),a("hr"),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/img/notes/github_fork.png")}}),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作实录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Documents\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/lins403/ant-design-pro.git\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ant-design-pro\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/ant-design/ant-design-pro.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase upstream/master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://sheltonliu.github.io/2017/12/04/git-fork-knowledge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git-fork分支整理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("远程仓库的使用"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork",target:"_blank",rel:"noopener noreferrer"}},[t._v("Syncing a fork"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"三、github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、github-pages"}},[t._v("#")]),t._v(" 三、GitHub Pages")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Using_Github_pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用Github Pages?"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("新增 SSH 密钥到 GitHub 帐户"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.dozer.cc/2015/06/github-pages-and-cdn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用 CDN 解决百度爬虫被 Github Pages 拒绝的问题"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"四、github-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、github-api"}},[t._v("#")]),t._v(" 四、Github API")]),t._v(" "),a("p",[t._v("基于 GraphQL")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000015144126",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章搞定Github API 调用 (v3）"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/en/graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub GraphQL API"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dev.to/lennythedev/show-off-your-github-repos-in-your-gatsby-site-using-graphql-421l",target:"_blank",rel:"noopener noreferrer"}},[t._v("Show off Github repos in your Gatsby site using Github GraphQL API"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"五、github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、github-actions"}},[t._v("#")]),t._v(" 五、GitHub actions")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://shanyue.tech/no-vps/github-action-guide.html#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("github actions 入门指南及实践"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("🌰：部署Hexo静态博客到 github pages")]),t._v(" "),a("p",[t._v("创建 Workflow 文件："),a("code",[t._v(".github/workflows/deploy.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模板源于B站「objtube的卢克儿」")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout 🛎️\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2 \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install and Build 🔧\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install\n          npm run build")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch the action should deploy to.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" public "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder the action should deploy.")]),t._v("\n")])])]),a("h2",{attrs:{id:"六、自建图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、自建图床"}},[t._v("#")]),t._v(" 六、自建图床")]),t._v(" "),a("p",[t._v("PicGo: "),a("a",{attrs:{href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://molunerfinn.com/PicGo/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("配置："),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub图床"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("jsDelivr CDN : "),a("a",{attrs:{href:"https://www.jsdelivr.com/?docs=gh",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsDelivr - A free, fast, and reliable CDN for open source"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问路径")]),t._v("\nhttps://cdn.jsdelivr.net/gh/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("repo_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 🌰")]),t._v("\nhttps://cdn.jsdelivr.net/gh/lins403/assetsSpace/vuepress/img/Klose.jpg\n")])])]),a("h2",{attrs:{id:"七、github-badge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、github-badge"}},[t._v("#")]),t._v(" 七、GitHub badge")]),t._v(" "),a("p",[t._v("工具1（推荐）: "),a("a",{attrs:{href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://shields.io/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("工具2: "),a("a",{attrs:{href:"https://badge.fury.io/for/js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://badge.fury.io/for/js"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// packageName(webpack)")]),t._v("\nhttps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webpack\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scope(@vue/cli)")]),t._v("\nhttps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("@vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tag(vue@next)")]),t._v("\nhttps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("next\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://github.com/webpack/webpack/stargazers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("GitHub stars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://img.shields.io/github/stars/webpack/webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.npmjs.com/package/@vue/cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("noopener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("noreferrer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://img.shields.io/npm/v/@vue/cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/badge/bilibili-%40%E5%B0%8F%E7%9C%AF%E5%98%BB-ff69b4"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack/webpack/blob/main/LICENSE"}},[a("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/webpack/webpack"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dev.to/envoy_/150-badges-for-github-pnk",target:"_blank",rel:"noopener noreferrer"}},[t._v("150+ Badges for GitHub"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"八、开源-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、开源-license"}},[t._v("#")]),t._v(" 八、开源 license")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/201105/bg2011050101.png",alt:"开元许可证"}})]),t._v(" "),a("h2",{attrs:{id:"九、其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、其它"}},[t._v("#")]),t._v(" 九、其它")]),t._v(" "),a("h3",{attrs:{id:"webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhooks"}},[t._v("#")]),t._v(" webhooks")]),t._v(" "),a("p",[t._v("通过定制 Webhooks 来监测你在 Github.com 上的各种事件；")]),t._v(" "),a("p",[t._v("Travis-Cli 也可以配置 webhooks，借助后者来自动触发一些 CI 的运作。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("About webhooks - GitHub Docs"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apps"}},[t._v("#")]),t._v(" Apps")]),t._v(" "),a("p",[t._v("Github App 可以通过 Github 提供的认证信息去调用 Github API。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/en/developers/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apps - GitHub Docs"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/apps/settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Apps - Settings · GitHub"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);