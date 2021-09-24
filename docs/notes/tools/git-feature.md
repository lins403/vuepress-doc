# Git 特性

## 一、版本管理

代码集中化管理，记录文件所有历史变化，支持多人团队协作开发

### 集中式

- 版本库集中存放在中央服务器，工作前要先从服务器拉取最新版本，结束时再把自己干的活推送给服务器
- 单点故障；必须联网，无法单机工作
- SVN、CVS

### 分布式

- 每个人的电脑上都是一个完整的版本库，客户端保存的是完整的代码仓库镜像，而非快照
- 可以离线工作，大部分操作在本地执行
- 安全性高，速度快



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

[集中式vs分布式--廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600/896202780297248)

[Git三大特色之WorkFlow(工作流)](https://blog.csdn.net/qq_32452623/article/details/78905181)

[What's the difference between HEAD, working tree and index, in Git?](https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git)

