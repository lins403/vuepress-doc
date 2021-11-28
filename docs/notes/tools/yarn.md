# yarn

`yarn autoclean --init`

`yarn autoclean --force`

## 命令

```
yarn
yarn add
yarn upgrade
```

## yarn 安装

```sh
yarn install v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > img-loader@3.0.1" has incorrect peer dependency "imagemin@^5.0.0 || ^6.0.0".
[4/4] 🔨  Building fresh packages...
```

## yarn.lock

重要字段与其作用

- `version` 字段是唯一确定的版本号，没有用^或~表示版本区间，**可以锁定 package 的唯一版本**

- `integrity` 字段是一串哈希值，用于对通过`resolved`下载的文件进行**完整性校验**。如果出现 diff，说明同一个下载链接对应的文件被修改过。

注意📢

- `yarn.lock` 是自动生成的，你不应该去手动的修改。
- 不要通过修改 `package.json` 来升级版本，这样会导致 yarn.lock 没有更新。
- 通过 `yarn add` 和 `yarn upgrade` 来自动更新 package.json 和 yarn.lock

### resolutions

resolutions 可以突破版本限制

**[resolutions](https://link.zhihu.com/?target=https%3A//classic.yarnpkg.com/en/docs/selective-version-resolutions/%23toc-how-to-use-it)**

# 参考

[yarn.lock 你锁明白了吗？](https://zhuanlan.zhihu.com/p/400193691)