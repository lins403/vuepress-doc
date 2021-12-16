# npm

## 命令

`npm outdated`    # 列出所以可以更新的package

`npm install`

```shell
--save        #-S
--save--dev        #-D
--global        #-g
--no-save
--force     #Recommended protections disabled. overriding peer dependency
--registry=[域名]
```

[npm-install > configuration](https://docs.npmjs.com/cli/v7/commands/npm-install#configuration)

`npm shrinkwrap` npm-shrinkwrap.json （npm5以前用来lock版本的）

`npm prune`

## .npmrc

查看npm配置：`npm config ls -l`

```js
package-lock=false;     //在安装时忽略lock文件。
loglevel=timing；      // 安装依赖包的时候指定日志的类型
```

[npm v6 配置文档](https://docs.npmjs.com/cli/v6/using-npm/config)

## package.json

### ~与^

Tilde Range

- `~1.5.2` := [1.5.2, 1.6.0)

Caret Range

- `^1.5.2` := [1.5.2, 2.0.0)

[semver - The semantic versioner for npm](https://docs.npmjs.com/cli/v6/using-npm/semver)

[官方配置文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

## 踩坑

### nrm

管理切换仓库源，包括npm的私有服

```shell
npm install nrm -g --save
```

### 升级 npm7

[npm 7 is now generally available!](https://github.blog/2021-02-02-npm-7-is-now-generally-available/)

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

[Node version support policy](https://github.com/sass/node-sass#node-version-support-policy)

```shell
npm i node-sass@4.14.0
# 然后把package.json和lock.json的更改取消掉，留着node_modules里的package就好
```

```json
// 修改 node-sass 为 dart-sass
-    "node-sass": "^4.9.0",
+    "sass": "1.30.0",
```

### 更换镜像源

```shell
npm config set registry https://registry.npm.taobao.org/
npm config get registry
npm config set registry https://registry.npmjs.org

# 临时
npm install <package-name> --registry https://registry.npmjs.org
npm outdated --registry https://skimdb.npmjs.com/registry
```