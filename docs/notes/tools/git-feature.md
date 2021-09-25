# Git 特性

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

- 最大的优势在于，可以更好的处理**二进制文件**（太复杂的二进制或XML文件，占据空间较大，分布式需要全部完整地拉取，集中式可以只拉取部分代码，效率更高）
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

- 长期分支：master，protected，提交权限比较严格，永远是可发布状态

### 3. GitLab Flow

- Environment Branches，每个环境，都对应一个分支。prodution 分支专门用来发布版本，pre-production预发、test-production测试。
- Upstream First。代码合并的顺序，要按环境依次推送，确保代码被充分测试过，才会从上游分支合并到下游分支。



## 三、HEAD、工作树、索引

打开 `.git` 文件来看

### HEAD

> ref: refs/heads/branch_name
>
> > 指向 `.git/refs/heads/branch_name` ，其中保存了最新的提交即 commitId
>
> HEAD指针 => 分支指针 => 最新提交

#### detached head

如果使用的是 `git checkout < commit id>`，即切换到指定的某一次提交，HEAD 就会处于 detached 状态（游离状态）

detached 状态有利有弊，可以作临时分支，保存临时状态等，还是谨慎使用，及时切回其他分支HEAD。

### 工作树 & 索引

工作树（workspace，工作区）、索引（index，暂存区 / staging area）

在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域。

1. the **workspace** is the directory tree of (source) files that you see and edit.
2. The **index** is a single, large, binary file in `<baseOfRepo>/.git/index`, which lists all files in the current branch, their *sha1* checksums, time stamps and the file name -- it is not another directory with a copy of files in it.
3. The **local repository** is a hidden directory (`.git`) including an `objects` directory containing all versions of every file in the repo (local branches and copies of remote branches) as a compressed "blob" file.



## 延伸问题

### Git 中 HEAD、工作树和索引之间的区别？

答：HEAD指针指向分支指针，分支指针指向最新提交。工作树相当于文件目录树，工作区的修改可能不需要全部提交，就需要通过暂存区，即中间的索引来指定要提交的文件。对开发者而言，暂存区也可以被用于校验错误，便于恢复代码状态。



# 参考

[起步 - 关于版本控制](http://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

[What is a centralized version control system](https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/)

[分布式版本控制](https://zh.wikipedia.org/wiki/%E5%88%86%E6%95%A3%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

[Git三大特色之WorkFlow(工作流)](https://blog.csdn.net/qq_32452623/article/details/78905181)

[What's the difference between HEAD, working tree and index, in Git?](https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git)

