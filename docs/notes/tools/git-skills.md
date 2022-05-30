# Git 使用技巧

🖖📔：[阮一峰 Git 教程](https://www.bookstack.cn/books/git-tutorial)

## 一、命令

### git log

```bash
git log --after="2021-12-16" --before="2022-1-15" --author="lins403"
git log 1055ca..23be39 --author="lins403"

# 显示修改文件
git log --after="2021-12-16" --before="2022-1-15" --author="lins403" --name-only

# 输出日志到指定文件
git log --after="2021-12-16" --before="2022-1-15" --author="lins403" > git-log.txt
```

### git config

```shell
# 执行 git push 时默认带上 --follow-tags
git config --global push.followTags true
```

### git clone

```shell
--branch
--depth
# git clone https://github.com/lins403/vue2-cli-boilerplate.git --branch master --depth 1 myVueProject
```

### git commit

- 对未push的最近一条commit，使用 `git commit --amend` 命令修改提交消息。

```shell
<commit message>
# 中间要隔开一行
<description>
```

### git diff

```shell
不加参数，比较工作区与暂存区
--cached 比较暂存区与最新本地版本库
git diff HEAD [<path>...]
git diff commit-id [<path>...]
git diff [<commit-id>] [<commit-id>]
```

### git checkout

git commit 保存快照，而 checkout 本质上是去操作HEAD指针，用快照内容覆盖工作目录和暂存区。

从历史commit，或者Index暂存区中，拷贝文件到工作区，也可以用于切换分支。

### git stash

```shell
git stash    # 可以执行多次
git stash list
git stash pop [stash_id]    # 会把工作区和暂存区的改动都恢复到工作区
git stash pop --index    # 会把工作区和暂存区的改动都恢复到工作区
git stash drop [stash_id]
git stash clear
```

### git cherry-pick

```bash
git cherry-pick <commit-id>    # 将指定commit应用于当前分支，用于不同分支的同步修改
```

### git merge

```shell
--ff        默认情况采用fast-forward模式【快进模式，不会产生新的merge commit】
--no-ff        即使可以使用fast-forward模式，也要创建一个新的合并节点
--squash    合并中间的commit【所有修改被保存到工作区，需要重新commit，导致原来commit的author信息会丢失】
--abort        终止产生冲突的合并
--no-commit    合并后不自动commit
```

> 个人而言，单个分支用 `git fetch & git merge`，多个分支合并中，自己的分支同步主分支使用 `git rebase`，主分支合并pull request 用常规的 no-ff

### git rebase

1. 合并多次提交纪录，减少了无用的提交信息，保持分支整洁
  
   ```shell
   # 合并最近的 4 次提交纪录，-i开启交互，还可以自定义合并，例如合并第2第3条
   git rebase -i HEAD~4
   ```

2. 分支合并，相比 merge 来说会减少分支合并的记录（但如果feature这个分支也有其他人在使用，则会造成一定困扰）
  
   把分支的冲突在本地解决了以后，远端 pr 合并时管理员不需要在解决冲突
   
   ```shell
   # 🌰:同步dev的commit至dev-lin
   git checkout dev-lin
   git rebase dev        # 交互式：git rebase -i master
   git push
   ```
   
   ```shell
   # 更复杂的分支合并情况
   # 基于dev-lin分支创建feature分支，将feature分支上的commit直接应用在dev上
   git rebase --onto dev dev-lin feature
   ```

3. 同个分支的合并
  
   ```shell
   # 有本地的commit和远端已经fetch下来的commit
   # 把本地的分支rebase到origin的这个分支上，然后再commit
   # 就不会像merge那样多出一条commit信息
   git rebase
   ```

4. 指定多个commit的分支合并（有点问题⚠️）
  
   ```shell
   # 如果不用cherry-pick
   # 假如 master 落后 dev 5个提交，而只想要dev的前3个commit同步到master上
   # 选中dev的第4条commit，新建分支 temp
   git switch -c dev <commit-id>
   git rebase --onto dev temp master
   ```

### git revert

- 回滚某个特定commit，相当于恢复
- 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程（适用于公共分支）

### git reset

- 回滚到某个commit，相当于重置，重置的是这个指定commit以后的所有commit
- 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了（适用于个人分支）
  - `--mixed` 默认选项，被回退的修改会放在工作区
  - `--soft` 被回退的修改会被放在暂存区
  - `--hard` 被回退的那些版本的修改会直接舍弃（可以再通过 git reflog 找回，但依然要小心使用）
- 可以用 `git reset -p`, `git checkout -p`进入交互模式。

### git 撤销修改和版本回退

丢弃工作区的修改：`git restore file`（`git checkout -- file` ）

从暂存区恢复到工作区：`git restore --staged` （`git reset HEAD <file>`）

直接丢弃工作区和暂存区的修改：`git checkout HEAD .`

`git checkout HEAD~ .` 将当前提交节点的父节点中的修改复制到暂存区域中，但不影响commit。

已经commit过的：

- `git reset HEAD~`  退回到工作目录上（等同于HEAD~1）
- `git reset <commit-id>`

::: tip
已push的commit用 `revert`，未push就用 `reset`（也可以参考在GUI中undo回退到暂存区），否则工作区和暂存区的就使用 `restore`

```
git reset HEAD~
git restore .
```

:::

### git tag

给某一个有特别意义的commit打标签

```shell
# 创建轻量标签（lightweight）
git tag v1.3

# 创建附注标签（annotated）
git tag -a v1.4 -m "my version 1.4"

# 查看标签信息和对应的commit信息
git show v1.4

# 给历史commit打标签
git tag -a v1.2 <commit-id>

# 删除标签
git tag -d v1.4
git push origin --delete <tagname>    # 远端

# 提交标签
git push && git push --tags		# tag需要单独推送
git push --follow-tags		# 使得 commit 以及与之相关的 tag 一起推送
```

有更多的意义也可以考虑新建 stable 分支

## 二、工具

- [commitlint、conventional-changelog](./git-application.md)
- gitkeep
  - 当需要 git 追踪(track)一个空的文件夹的时候，把一个称为`.gitkeep`的文件放在这些文件夹里

## 三、心得

- 结合使用GUI客户端（github desktop 、VSCode 插件）
- 用 git restore、git switch 等新命令取代 checkout
- ...

# 参考

[Git Documentation Reference](https://git-scm.com/docs)

[彻底搞懂 Git-Rebase](http://jartto.wang/2018/12/11/git-rebase/)

[Git恢复之前版本的两种方法reset、revert（图文详解）](https://blog.csdn.net/yxlshk/article/details/79944535)

[Git Commit Message Convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)

[Angular > commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).
