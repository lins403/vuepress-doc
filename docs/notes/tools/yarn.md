# yarn <Badge text="v1.22.10" type="tip" />

Yarn stands for “*Yet Another Resource Negotiator*”, developed in 2016 by Facebook.

```
yarn
yarn add
yarn upgrade
```

[Migrating from npm | Yarn](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)

## yarn install

`yarn install` will install the exact version in the lockfile

```shell
$ yarn
yarn install v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
# [5/5] ♻️  Cleaning modules...
```

## yarn.lock

yarn.lock 的  exact versions 能匹配 package.json 时，就会直接安装这个版本，不能满足时才会重新安装并更新 yarn.lock

```shell
# If you want to ensure yarn.lock is not updated, use --frozen-lockfile.
yarn install --frozen-lockfile
```

重要字段与其作用

- `version` 字段是唯一确定的版本号，没有用^或~表示版本区间，**可以锁定 package 的唯一版本**

- `integrity` 字段是一串哈希值，用于对通过`resolved`下载的文件进行**完整性校验**。如果出现 diff，说明同一个下载链接对应的文件被修改过。

注意📢

- `yarn.lock` 是自动生成的，你不应该去手动的修改。
- 不要通过修改 `package.json` 来升级版本，这样会导致 yarn.lock 没有更新。
- 通过 `yarn add` 和 `yarn upgrade` 来自动更新 package.json 和 yarn.lock



### resolutions

resolutions 可以突破版本限制

[Selective dependency resolutions | Yarn](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/#toc-how-to-use-it)

## autoclean

Cleans and removes unnecessary files from package dependencies.

删除 `node_modules` 的在 `.yarnclean` 中声明的文件和文件夹，以减小依赖包的大小

```bash
yarn autoclean -I #--init
yarn autoclean -F #--force
```



# 参考

[yarn.lock 你锁明白了吗？](https://zhuanlan.zhihu.com/p/400193691)