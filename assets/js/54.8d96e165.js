(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{455:function(t,e,a){"use strict";a.r(e);var _=a(43),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-特性"}},[t._v("#")]),t._v(" Git 特性")]),t._v(" "),a("p",[t._v("关于 Git 原理，阮一峰更系统全面的说明："),a("a",{attrs:{href:"https://github.com/wangdoc/git-tutorial/blob/master/docs/basic.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-tutorial/basic.md at master · wangdoc/git-tutorial · GitHub"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"一、版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、版本控制"}},[t._v("#")]),t._v(" 一、版本控制")]),t._v(" "),a("p",[t._v("记录文件历史变化，便于团队的协作开发")]),t._v(" "),a("h3",{attrs:{id:"_1-集中式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-集中式"}},[t._v("#")]),t._v(" 1. 集中式")]),t._v(" "),a("p",[t._v("Centralized Version Control Systems，简称 CVCS")]),t._v(" "),a("p",[t._v("版本库集中存放在中央服务器")]),t._v(" "),a("ul",[a("li",[t._v("每次需要先拉取最新版本作为本地副本（local copy，可以不是完整的项目代码），工作完成以后将修改推送回服务器。")]),t._v(" "),a("li",[t._v("一般只有一个主仓库一个主分支，修改都会直接被commit至主分支，然后解决合并冲突。")]),t._v(" "),a("li",[t._v("所有的命令都要和中央服务器进行交互，影响开发效率。")]),t._v(" "),a("li",[t._v("CVS、SVN（ SVN全名Subversion，它的设计目标就是取代CVS ）")])]),t._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("可以更好的处理"),a("strong",[t._v("二进制文件")]),t._v("（太复杂的二进制或XML文件，占据空间较大，分布式需要全部完整的拉取，集中式可以只拉取部分代码，效率更高）")]),t._v(" "),a("li",[t._v("可以使用文件锁机制（file locking），保证文件每次只有一个用户可以修改，解决合并冲突以后再打开")]),t._v(" "),a("li",[t._v("操作简易、学习成本低，便于管理员控制权限和维护")]),t._v(" "),a("li",[t._v("适合能够快速沟通的小团队")])]),t._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("单点故障，导致数据（项目的整个变更历史）丢失的风险")]),t._v(" "),a("li",[t._v("网络故障，会直接导致团队的协作开发停滞")]),t._v(" "),a("li",[t._v("不稳定，影响开发效率\n"),a("ul",[a("li",[t._v("所有命令都需要联网与中央服务器交互")]),t._v(" "),a("li",[t._v("同块代码的修改需要等待前一个人的修改提交且解决合并冲突以后，后者才能提交")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-分布式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分布式"}},[t._v("#")]),t._v(" 2. 分布式")]),t._v(" "),a("p",[t._v("Distributed Version Control System，简称 DVCS")]),t._v(" "),a("p",[t._v("每个人的本地都是一个完整的版本库，包括完整的代码、变更历史、分支等等")]),t._v(" "),a("ul",[a("li",[t._v("中央服务器的意义是为了开发者之间交换代码更新，这也是开发者唯一需要联网的操作")]),t._v(" "),a("li",[t._v("Git、Mercurial、Bazaar 以及 Darcs")])]),t._v(" "),a("h4",{attrs:{id:"优点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("安全性较高，不用担心单点故障，而且错误操作多了可以通过本地版本来恢复这一途径")]),t._v(" "),a("li",[t._v("可以离线工作，可以先在本地完成提交")]),t._v(" "),a("li",[t._v("Git 速度很快，且git的三大特色：Branch、Stage、Workflow")])]),t._v(" "),a("h4",{attrs:{id:"缺点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("第一次克隆很慢")]),t._v(" "),a("li",[t._v("占据的存储空间较大")]),t._v(" "),a("li",[t._v("太复杂的二进制或XML文件处理效果不如集中式")])]),t._v(" "),a("h2",{attrs:{id:"二、workflow工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、workflow工作流"}},[t._v("#")]),t._v(" 二、workflow工作流")]),t._v(" "),a("p",[t._v("工作流，即分支管理策略，制定分支模型，更好的管理版本迭代、版本发布等")]),t._v(" "),a("h3",{attrs:{id:"_1-git-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-flow"}},[t._v("#")]),t._v(" 1. Git Flow")]),t._v(" "),a("ul",[a("li",[t._v("长期分支：master、dev")]),t._v(" "),a("li",[t._v("阶段辅助分支：功能 feature、补丁 hotfix 、预发 release")]),t._v(" "),a("li",[t._v("版本记录：通过 master 上的 tag 来记录")])]),t._v(" "),a("h3",{attrs:{id:"_2-github-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-flow"}},[t._v("#")]),t._v(" 2. GitHub Flow")]),t._v(" "),a("ul",[a("li",[t._v("长期分支：master，被protected，提交权限比较严格，永远是可发布状态")])]),t._v(" "),a("h3",{attrs:{id:"_3-gitlab-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitlab-flow"}},[t._v("#")]),t._v(" 3. GitLab Flow")]),t._v(" "),a("ul",[a("li",[t._v("Environment Branches，每个环境，都对应一个分支。prodution 分支专门用来发布版本，pre-production预发、test-production测试。")]),t._v(" "),a("li",[t._v("Upstream First。代码合并的顺序，要按环境依次推送，确保代码被充分测试过，才会从上游分支合并到下游分支。（🌰: feature=>dev=>production）")])]),t._v(" "),a("h2",{attrs:{id:"三、git-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、git-对象"}},[t._v("#")]),t._v(" 三、Git 对象")]),t._v(" "),a("p",[t._v("对象数据库包含四类对象，blob、tree、commit、tag")]),t._v(" "),a("h3",{attrs:{id:"blob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blob"}},[t._v("#")]),t._v(" Blob")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据对象（blob object）")]),t._v("，保存文件内容，"),a("code",[t._v(".git/objects/*/*")]),t._v("，文件名是该对象40位的SHA-1值")]),t._v(" "),a("li",[t._v("描述文件内容的二进制数据，文件内容改变时在对象数据库中生成")]),t._v(" "),a("li",[t._v("blob对象只保存文件内容，不含文件名、文件存储位置等信息")])]),t._v(" "),a("h3",{attrs:{id:"tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree"}},[t._v("#")]),t._v(" Tree")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("树对象（tree object）")]),t._v("，解决文件名保存的问题")])]),t._v(" "),a("li",[a("p",[t._v("blob对象的集合，以及它们的文件名和权限")])]),t._v(" "),a("li",[a("p",[t._v("一个tree对象包含了一条或多条树对象记录（tree entry），每条记录含有一个指向数据对象或者子树对象的 SHA-1 指针，以及相应的模式、类型、文件名信息。")])])]),t._v(" "),a("h3",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" Commit")]),t._v(" "),a("ul",[a("li",[t._v("提交对象，保存项目快照信息")]),t._v(" "),a("li",[t._v("先指定一个顶层树对象，代表当前项目快照， 然后是父提交（除了第一次Commit外）； 以及作者/提交者信息、提交注释等")])]),t._v(" "),a("h3",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),a("blockquote",[a("p",[t._v("每次我们运行 "),a("code",[t._v("git add")]),t._v(" 和 "),a("code",[t._v("git commit")]),t._v(" 命令时，Git 所做的工作实质就是将被改写的文件保存为数据对象， 更新暂存区，记录树对象，最后创建一个指明了顶层树对象和父提交的提交对象。")]),t._v(" "),a("p",[t._v("这三种主要的 Git 对象——数据对象、树对象、提交对象——最初均以单独文件的形式保存在 "),a("code",[t._v(".git/objects")]),t._v(" 目录下。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" .git/objects -type f\n.git/objects/d6/70460b4b4aece5915caf5c68d12f560a9fe3e4 \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'test content'")]),t._v("\n.git/objects/d8/329fc1cc938780ffdd9f94e0d364e0ea74f579 \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tree 1")]),t._v("\n.git/objects/fa/49b077972391ad58037050f2a75f74e3671e92 \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# new.txt")]),t._v("\n.git/objects/fd/f4fc3344e67ab068f836878b6c4951e3b15f3d "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# …")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/git_data_model_astah_11.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" Tag")]),t._v(" "),a("p",[a("strong",[t._v("lightweight")]),t._v(" tags")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git tag v1.2.1")])])]),t._v(" "),a("p",[a("strong",[t._v("annotated")]),t._v(" tags")]),t._v(" "),a("ul",[a("li",[t._v("产生 "),a("strong",[t._v("Tag Object")])]),t._v(" "),a("li",[t._v("created with "),a("code",[t._v("-a")]),t._v(", "),a("code",[t._v("-s")]),t._v(", or "),a("code",[t._v("-u")]),t._v(" ，一般用于发布")]),t._v(" "),a("li",[a("code",[t._v('git tag -a v1.2.0 -m "my version 1.2.0"')])])]),t._v(" "),a("h2",{attrs:{id:"四、head、工作树、索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、head、工作树、索引"}},[t._v("#")]),t._v(" 四、HEAD、工作树、索引")]),t._v(" "),a("p",[t._v("打开 "),a("code",[t._v(".git")]),t._v(" 文件来看")]),t._v(" "),a("h3",{attrs:{id:"head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" HEAD")]),t._v(" "),a("blockquote",[a("p",[t._v("指针，Reference，ref: refs/heads/branch_name")]),t._v(" "),a("blockquote",[a("p",[t._v("指向 "),a("code",[t._v(".git/refs/heads/branch_name")]),t._v(" ，其中保存了最新的提交即 commitId")])]),t._v(" "),a("p",[t._v("HEAD指针 => 分支指针 => 最新提交")])]),t._v(" "),a("h4",{attrs:{id:"detached-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detached-head"}},[t._v("#")]),t._v(" detached head")]),t._v(" "),a("p",[t._v("如果使用的是 "),a("code",[t._v("git checkout < commit id>")]),t._v("，即切换到指定的某一次提交，HEAD 就会处于 detached 状态（游离状态）")]),t._v(" "),a("p",[t._v("detached 状态有利有弊，可以作临时分支，保存临时状态等，还是谨慎使用，及时切回其他分支HEAD。")]),t._v(" "),a("h3",{attrs:{id:"head-and-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head-and-head"}},[t._v("#")]),t._v(" HEAD^ and HEAD~")]),t._v(" "),a("blockquote",[a("ol",[a("li",[a("code",[t._v("~n")]),t._v(" 表示向上取到第 n 个祖先，"),a("code",[t._v("^n")]),t._v(" 表示第 n 个 parent")]),t._v(" "),a("li",[a("code",[t._v("HEAD~")]),t._v(" 等价于 "),a("code",[t._v("HEAD^")]),t._v("，"),a("code",[t._v("~3")]),t._v(" 等价于 "),a("code",[t._v("^1^1^1")]),t._v(" 等价于 "),a("code",[t._v("^^^")])]),t._v(" "),a("li",[a("code",[t._v("~")]),t._v(" 适用于线性情况，"),a("code",[t._v("^")]),t._v(" 适用于分叉情况，可以组合使用，例如 "),a("code",[t._v("HEAD~3^2")])])])]),t._v(" "),a("p",[a("strong",[t._v("有多个parent的分叉情况")])]),t._v(" "),a("ul",[a("li",[t._v("创建新分支然后在新分支上提交")]),t._v(" "),a("li",[t._v("分支落后，本地的commit与落下的commit直接使用"),a("code",[t._v("git merge")]),t._v("合并")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://i.stack.imgur.com/pDAzG.png"}}),t._v(" "),a("h3",{attrs:{id:"工作树-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作树-索引"}},[t._v("#")]),t._v(" 工作树 & 索引")]),t._v(" "),a("p",[t._v("工作树（workspace，工作区）、索引（index，暂存区 / staging area）")]),t._v(" "),a("p",[t._v("在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域。")]),t._v(" "),a("ol",[a("li",[t._v("the "),a("strong",[t._v("workspace")]),t._v(" is the directory tree of (source) files that you see and edit.")]),t._v(" "),a("li",[t._v("The "),a("strong",[t._v("index")]),t._v(" is a single, large, binary file in "),a("code",[t._v("<baseOfRepo>/.git/index")]),t._v(", which lists all files in the current branch, their "),a("em",[t._v("sha1")]),t._v(" checksums, time stamps and the file name -- it is not another directory with a copy of files in it.")]),t._v(" "),a("li",[t._v("The "),a("strong",[t._v("local repository")]),t._v(" is a hidden directory ("),a("code",[t._v(".git")]),t._v(") including an "),a("code",[t._v("objects")]),t._v(' directory containing all versions of every file in the repo (local branches and copies of remote branches) as a compressed "blob" file.')])]),t._v(" "),a("h2",{attrs:{id:"延伸问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸问题"}},[t._v("#")]),t._v(" 延伸问题")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("一、集中式 VS 分布式")]),t._v(" "),a("p",[t._v("都是为了实现版本控制，记录文件变更历史，便于团队协作开发。")]),t._v(" "),a("p",[a("strong",[t._v("集中式")]),t._v("最大的特点在于，版本库只保存在中央服务器上，开发者的大多数工作都需要联网与中央服务器进行交互；对于同块代码的修改，需要前一个人的更新先提交，解决完合并冲突以后，自己的更新才能提交。集中式的优势在于对复杂的二进制文件处理方式较好，同时操作更简单，适合沟通方便的小团队。但劣势更明显，单点故障会导致版本数据丢失，开发者的命令都需要联网操作等等情况都可能降低开发效率。现在主要的集中式版本控制工具有SVN和CVS。")]),t._v(" "),a("p",[a("strong",[t._v("分布式")]),t._v("最大的特点在于，开发者的客户端都可以维护一个完整的版本库，中央服务器的作用在于让开发者之间可以交换代码更新，所以不用担心服务器的故障问题。同时可以支持离线工作，查询版本历史、代码提交等等都可以在本地完成。应用最广的工具就是Git，Git速度很快，同时又有分支管理、暂存区等强大功能。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("二、Git 中 HEAD、工作树和索引之间的区别？")]),t._v(" "),a("p",[t._v("HEAD指针保存的ref指向分支指针，分支指针保存的一个commit哈希值，指向最新提交。")]),t._v(" "),a("p",[t._v("工作树相当于文件目录树，工作区的修改可能不需要全部提交，就需要通过暂存区，即中间的索引来指定要提交的文件。对开发者而言，暂存区也可以被用于校验错误，便于恢复代码状态。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("三、Git Commit 发生了什么？")]),t._v(" "),a("ol",[a("li",[t._v("根据文件内容生成 "),a("code",[t._v("Blob object")])]),t._v(" "),a("li",[t._v("写入 file mode, blob SHA1, file name 到暂存区 "),a("code",[t._v("staging area")])]),t._v(" "),a("li",[t._v("根据 staging area 产生 "),a("code",[t._v("Tree object")])]),t._v(" "),a("li",[t._v("用顶层树对象（root tree SHA1）和 父提交（parent commit SHA1）生成 "),a("code",[t._v("Commit object")])]),t._v(" "),a("li",[t._v("用 commit SHA1 更新 "),a("code",[t._v("分支的指针")]),t._v("（HEAD指针 => 分支指针 => 最新Commit）")])])]),t._v(" "),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - 关于版本控制"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is a centralized version control system | GitLab"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_32452623/article/details/78905181",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git三大特色之WorkFlow(工作流)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the difference between HEAD^ and HEAD~ in Git? - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the difference between HEAD, working tree and index, in Git? - Stack Overflow"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);