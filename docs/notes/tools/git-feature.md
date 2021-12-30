# Git 特性

关于 Git 原理，阮一峰更系统全面的说明：[git-tutorial/basic.md at master · wangdoc/git-tutorial · GitHub](https://github.com/wangdoc/git-tutorial/blob/master/docs/basic.md)

## 一、版本控制

记录文件历史变化，便于团队的协作开发

### 1. 集中式

Centralized Version Control Systems，简称 CVCS

版本库集中存放在中央服务器

- 每次需要先拉取最新版本作为本地副本（local copy，可以不是完整的项目代码），工作完成以后将修改推送回服务器。
- 一般只有一个主仓库一个主分支，修改都会直接被commit至主分支，然后解决合并冲突。
- 所有的命令都要和中央服务器进行交互，影响开发效率。
- SVN、CVS

#### 优点

- 可以更好的处理**二进制文件**（太复杂的二进制或XML文件，占据空间较大，分布式需要全部完整的拉取，集中式可以只拉取部分代码，效率更高）
- 可以使用文件锁机制（file locking），保证文件每次只有一个用户可以修改，解决合并冲突以后再打开
- 操作简易、学习成本低，便于管理员控制权限和维护
- 适合能够快速沟通的小团队

#### 缺点

- 单点故障，导致数据（项目的整个变更历史）丢失的风险
- 网络故障，会直接导致团队的协作开发停滞
- 不稳定，影响开发效率
  - 所有命令都需要联网与中央服务器交互
  - 同块代码的修改需要等待前一个人的修改提交且解决合并冲突以后，后者才能提交

### 2. 分布式

Distributed Version Control System，简称 DVCS

每个人的本地都是一个完整的版本库，包括完整的代码、变更历史、分支等等

- 中央服务器的意义是为了开发者之间交换代码更新，这也是开发者唯一需要联网的操作
- Git、Mercurial、Bazaar 以及 Darcs 

#### 优点

- 安全性较高，不用担心单点故障，而且错误操作多了可以通过本地版本来恢复这一途径
- 可以离线工作，可以先在本地完成提交
- Git 速度很快，且git的三大特色：Branch、Stage、Workflow

#### 缺点

- 第一次克隆很慢
- 占据的存储空间较大
- 太复杂的二进制或XML文件处理效果不如集中式

## 二、workflow工作流

工作流，即分支管理策略，制定分支模型，更好的管理版本迭代、版本发布等

### 1. Git Flow

- 长期分支：master、dev
- 阶段辅助分支：功能 feature、补丁 hotfix 、预发 release
- 版本记录：通过 master 上的 tag 来记录

### 2. GitHub Flow

- 长期分支：master，被protected，提交权限比较严格，永远是可发布状态

### 3. GitLab Flow

- Environment Branches，每个环境，都对应一个分支。prodution 分支专门用来发布版本，pre-production预发、test-production测试。
- Upstream First。代码合并的顺序，要按环境依次推送，确保代码被充分测试过，才会从上游分支合并到下游分支。（🌰: feature=>dev=>production）

## 三、Git 对象

对象数据库包含四类对象，blob、tree、commit、tag

### Blob

- **数据对象（blob object）**，保存文件内容，`.git/objects/*/*`，文件名是该对象40位的SHA-1值
- 描述文件内容的二进制数据，文件内容改变时在对象数据库中生成
- blob对象只保存文件内容，不含文件名、文件存储位置等信息

### Tree

- **树对象（tree object）**，解决文件名保存的问题

- blob对象的集合，以及它们的文件名和权限
- 一个tree对象包含了一条或多条树对象记录（tree entry），每条记录含有一个指向数据对象或者子树对象的 SHA-1 指针，以及相应的模式、类型、文件名信息。

### Commit

- 提交对象，保存项目快照信息
- 先指定一个顶层树对象，代表当前项目快照， 然后是父提交（除了第一次Commit外）； 以及作者/提交者信息、提交注释等

### 数据模型

> 每次我们运行 `git add` 和 `git commit` 命令时，Git 所做的工作实质就是将被改写的文件保存为数据对象， 更新暂存区，记录树对象，最后创建一个指明了顶层树对象和父提交的提交对象。 
>
> 这三种主要的 Git 对象——数据对象、树对象、提交对象——最初均以单独文件的形式保存在 `.git/objects` 目录下。 

```shell
$ find .git/objects -type f
.git/objects/d6/70460b4b4aece5915caf5c68d12f560a9fe3e4 	# 'test content'
.git/objects/d8/329fc1cc938780ffdd9f94e0d364e0ea74f579 	# tree 1
.git/objects/fa/49b077972391ad58037050f2a75f74e3671e92 	# new.txt
.git/objects/fd/f4fc3344e67ab068f836878b6c4951e3b15f3d # commit 1
# …
```

![](https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/git_data_model_astah_11.png)

### Tag

**lightweight** tags

- `git tag v1.2.1`

**annotated** tags

- 产生 **Tag Object**
- created with `-a`, `-s`, or `-u` ，一般用于发布
-  `git tag -a v1.2.0 -m "my version 1.2.0"`

## 四、HEAD、工作树、索引

打开 `.git` 文件来看

### HEAD

> 指针，Reference，ref: refs/heads/branch_name
> 
> > 指向 `.git/refs/heads/branch_name` ，其中保存了最新的提交即 commitId
> 
> HEAD指针 => 分支指针 => 最新提交

#### detached head

如果使用的是 `git checkout < commit id>`，即切换到指定的某一次提交，HEAD 就会处于 detached 状态（游离状态）

detached 状态有利有弊，可以作临时分支，保存临时状态等，还是谨慎使用，及时切回其他分支HEAD。

### HEAD^ and HEAD~

> 1. `~n` 表示向上取到第 n 个祖先，`^n` 表示第 n 个 parent
> 2. `HEAD~` 等价于 `HEAD^`，`~3` 等价于 `^1^1^1` 等价于 `^^^`
> 3. `~` 适用于线性情况，`^` 适用于分叉情况，可以组合使用，例如 `HEAD~3^2`

**有多个parent的分叉情况**

- 创建新分支然后在新分支上提交
- 分支落后，本地的commit与落下的commit直接使用`git merge`合并
- ...

<img src="https://i.stack.imgur.com/pDAzG.png" style="zoom:75%;" />

### 工作树 & 索引

工作树（workspace，工作区）、索引（index，暂存区 / staging area）

在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域。

1. the **workspace** is the directory tree of (source) files that you see and edit.
2. The **index** is a single, large, binary file in `<baseOfRepo>/.git/index`, which lists all files in the current branch, their *sha1* checksums, time stamps and the file name -- it is not another directory with a copy of files in it.
3. The **local repository** is a hidden directory (`.git`) including an `objects` directory containing all versions of every file in the repo (local branches and copies of remote branches) as a compressed "blob" file.

## 延伸问题

::: details 一、集中式 VS 分布式

都是为了实现版本控制，记录文件变更历史，便于团队协作开发。

**集中式**最大的特点在于，版本库只保存在中央服务器上，开发者的大多数工作都需要联网与中央服务器进行交互；对于同块代码的修改，需要前一个人的更新先提交，解决完合并冲突以后，自己的更新才能提交。集中式的优势在于对复杂的二进制文件处理方式较好，同时操作更简单，适合沟通方便的小团队。但劣势更明显，单点故障会导致版本数据丢失，开发者的命令都需要联网操作等等情况都可能降低开发效率。现在主要的集中式版本控制工具有SVN和CVS。

**分布式**最大的特点在于，开发者的客户端都可以维护一个完整的版本库，中央服务器的作用在于让开发者之间可以交换代码更新，所以不用担心服务器的故障问题。同时可以支持离线工作，查询版本历史、代码提交等等都可以在本地完成。应用最广的工具就是Git，Git速度很快，同时又有分支管理、暂存区等强大功能。

:::

::: details 二、Git 中 HEAD、工作树和索引之间的区别？

HEAD指针保存的ref指向分支指针，分支指针保存的一个commit哈希值，指向最新提交。

工作树相当于文件目录树，工作区的修改可能不需要全部提交，就需要通过暂存区，即中间的索引来指定要提交的文件。对开发者而言，暂存区也可以被用于校验错误，便于恢复代码状态。

:::

::: details 三、Git Commit 发生了什么？

1. 根据文件内容生成 `Blob object`
2. 写入 file mode, blob SHA1, file name 到暂存区 `staging area`
3. 根据 staging area 产生 `Tree object`
4. 用顶层树对象（root tree SHA1）和 父提交（parent commit SHA1）生成 `Commit object`
5. 用 commit SHA1 更新 `分支的指针`（HEAD指针 => 分支指针 => 最新Commit）

:::

# 参考

[Git - 关于版本控制](http://git-scm.com/book/zh/v2/起步-关于版本控制)

[What is a centralized version control system | GitLab](https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/)

[Git三大特色之WorkFlow(工作流)](https://blog.csdn.net/qq_32452623/article/details/78905181)

[What's the difference between HEAD^ and HEAD~ in Git? - Stack Overflow](https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git)

[What's the difference between HEAD, working tree and index, in Git? - Stack Overflow](https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git)

