# npm

## 命令

`npm outdated`    # 列出所以可以更新的package

`npm install`

```sh
--save        #-S
--save--dev        #-D
--global        #-g
--no-save
--force     #Recommended protections disabled. overriding peer dependency
```

[npm-install > configuration](https://docs.npmjs.com/cli/v7/commands/npm-install#configuration)

`npm shrinkwrap` npm-shrinkwrap.json （npm5以前用来lock版本的）

## 踩坑

### 升级 npm7

[npm 7 is now generally available!](https://github.blog/2021-02-02-npm-7-is-now-generally-available/)

```sh
# 回退版本
npm install --global npm@6
```

#### 1）peerDependencies

```sh
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@">=7.0.0" from eslint-config-prettier@7.2.0
# npm 7 will block installations if an upstream dependency conflict is present that cannot be automatically resolved.
# You have the option to retry with --force to bypass the conflict or --legacy-peer-deps command to ignore peer dependencies entirely (this behavior is similar to versions 4-6).
```

```sh
npm install --force
npm install --legacy-peer-deps
```

[Dependencies类型](https://yarn.bootcss.com/docs/dependency-types/)

[一文搞懂peerDependencies](https://juejin.cn/post/6844904134248759309)

#### 2）node与node-sass的兼容性问题

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 14 | 4.14+                       | 83          |
| Node 12 | 4.12+                       | 72          |
| Node 10 | 4.9+, <6.0                  | 64          |

[Node version support policy](https://github.com/sass/node-sass#node-version-support-policy)

```sh
npm i node-sass@4.14.0
# 然后把package.json和lock.json的更改取消掉，留着node_modules里的package就好
```

```json
// 修改 node-sass 为 dart-sass
-    "node-sass": "^4.9.0",
+    "sass": "1.30.0",
```

### 更换镜像源

```sh
npm config set registry https://registry.npm.taobao.org/
npm config get registry
npm config set registry https://registry.npmjs.org

# 临时
npm install <package-name> --registry https://registry.npmjs.org
npm outdated --registry https://skimdb.npmjs.com/registry
```

## CDN

### unpkg

<https://unpkg.com/>

```html
<script src="https://unpkg.com/@babel/standalone/babel.js"></script>
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
<div id="root"></div>
<script type="text/babel">
  function Example() {
    return (
      <>
        Some text.
      </>
     );
  }
  ReactDOM.render(<Example />, document.getElementById('root'));
</script>
```

### BootCDN

```js
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

## Package

fuse.js 模糊搜索

vue-pdf 基于pdf.js的展示PDF
