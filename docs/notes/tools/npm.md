# npm

## 命令

```bash
# 列出所以可以更新的package
npm outdated

# view/v/show/info
npm view vue
```

### `npm install`

```shell
npm add -h

# arg
-S, --save	#default in npm5+, but -P(--save-prod) in npm6?
-D, --save--dev
-g, --global
-E, --save-exact
--no-save
-f, --force	#force npm to fetch remote resources even if a local copy exists on disk.
--registry=[域名]

# @<tag>|@<version>|@<version range>
npm install sax@latest
npm install sax@">=0.1.0 <0.2.0"

# <tarball file>
npm install ./myPackage.tgz		#.tar/.tar.gz/.tgz

# <alias>@npm:<name>
npm install vue2@npm:vue@2
npm install vue3@npm:vue@next
```

[npm-install > configuration](https://docs.npmjs.com/cli/v7/commands/npm-install#configuration)

#### 从github

```bash
# install
npm i lins403/vue2-cli-boilerplate
npm i https://github.com/lins403/vue2-cli-boilerplate
npm i git+https://github.com/lins403/vue2-cli-boilerplate.git
npm i github:lins403/vue2-cli-boilerplate

# specify branch
npm i "lins403/vue2-cli-boilerplate#dev"

# uninstall
npm un vue2-cli-boilerplate

#==================================================
# from gitlab
npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]

# from gist
npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]

# from bitbucket
npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]

#==================================================
# base
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
<protocol> is one of git, git+ssh, git+http, git+https, or git+file.
```

#### 算法

1. 从磁盘加载 node_modules，并克隆树（目录菜单树？）
2. 获取 package.json 和其中的元数据，添加到克隆树上
3. 遍历克隆树，然后添加没有被安装的依赖（不破坏其它模块的前提下，依赖会尽可能被添加到更接近顶层域上）
4. 比较原来的树和克隆树，深度优先，比对然后执行 install, update, remove and move 等操作
5. ~~下载压缩包，存放在缓存目录（`~/.npm`），解压压缩包到当前项目的 `node_modules` 目录~~

### `npm ci`

> **`npm ci`** (named after **C**ontinuous **I**ntegration) installs dependencies directly from `package-lock.json` and uses `package.json` only to validate that there are no mismatched versions. **If any dependencies are missing or have incompatible versions, it will throw an error**.
>
> Use `npm ci` if you need a deterministic, repeatable build. For example during continuous integration, automated jobs, etc. and when installing dependencies for the first time, instead of `npm install`.

```yaml
# .travis.yml
install:
- npm ci	#to build using npm ci instead of npm install

# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"	#https://github.com/actions/cache/issues/67
```

### 其它

#### `npm shrinkwrap` 

npm-shrinkwrap.json （npm5以前用来lock版本的）

#### `npm prune`

```bash
# 或者将 NODE_ENV 环境变量设置为production
npm prune --production	#remove the packages specified in your devDependencies.
```

## cache

`npm install` 或 `npm update` 命令，会生成cache。

从 registry 下载压缩包之后，~~都存放在本地的缓存目录~~。

```bash
# 查看缓存地址
npm config get cache	# ~/.npm
# *只是奇怪为什么我的tarball实际上是放在~/.npminstall_tarball中，~/.npm中的像哈希文件or ETag?

npm cache verify
# Cache verified and compressed (~/.npm/_cacache):
 
# add cache
npm cache add <tarball file>|<folder>|<tarball url>|<git url>|<name>@<version>

# 清除缓存
npm cache clean --force
```

### CI

- [Caching dependencies to speed up workflows - GitHub Docs](https://docs.github.com/cn/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#example-using-the-cache-action)
- [GitLab CI/CD | 小眯嘻的文档博客](https://lins403.github.io/vuepress-doc/notes/engineering/CI-CD/gitlab-ci.html#cache)

## .npmrc

查看npm配置：`npm config ls -l`

```js
package-lock=false;     //在安装时忽略lock文件。
loglevel=timing；      // 安装依赖包的时候指定日志的类型
```

[npm v6 配置文档](https://docs.npmjs.com/cli/v6/using-npm/config)



## package.json

[package.json | npm Docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

### ~ 与 ^ ( semver range operator)

Tilde Range (limits updates to the most recent patch-level version)

- `~1.5.2` := [1.5.2, 1.6.0)

Caret Range

- `^1.5.2` := [1.5.2, 2.0.0)

> - Patch releases: `1.0` or `1.0.x` or `~1.0.4`
> - Minor releases: `1` or `1.x` or `^1.0.4`
> - Major releases: `*` or `x`

## nrm

管理切换仓库源，包括npm的私有服

```shell
npm install nrm -g --save
```



## 升级 npm7

[npm 7 is now generally available! | The GitHub Blo](https://github.blog/2021-02-02-npm-7-is-now-generally-available/)

```shell
# 回退版本
npm install --global npm@6
```

#### 1）peerDependencies

```shell
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@">=7.0.0" from eslint-config-prettier@7.2.0
# npm 7 will block installations if an upstream dependency conflict is present that cannot be automatically resolved.
# You have the option to retry with --force to bypass the conflict or --legacy-peer-deps command to ignore peer dependencies entirely (this behavior is similar to versions 4-6).
```

```shell
npm install --force
npm install --legacy-peer-deps

npx install-peerdeps --dev 
```

[Dependencies类型](https://yarn.bootcss.com/docs/dependency-types/)

[一文搞懂peerDependencies](https://juejin.cn/post/6844904134248759309)

[npm与yarn对peerDependencies处理的差异](https://zhuanlan.zhihu.com/p/237532427)

#### 2）node与node-sass的兼容性问题

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 14 | 4.14+                       | 83          |
| Node 12 | 4.12+                       | 72          |
| Node 10 | 4.9+, <6.0                  | 64          |

```json
// 修改 node-sass 为 dart-sass
-    "node-sass": "^4.9.0",
+    "sass": "1.30.0",
```

## 更换镜像源

```shell
npm config set registry https://registry.npm.taobao.org/
npm config get registry
npm config set registry https://registry.npmjs.org

# 临时
npm install <package-name> --registry https://registry.npmjs.org
npm outdated --registry https://skimdb.npmjs.com/registry
```
