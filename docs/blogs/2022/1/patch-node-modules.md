# 修改 node_modules 中的源码

方式一：将对应package的源代码作为组件，在主项目中引入，然后改写功能

方式二：fork源码，在本地修改以后重新打包，然后覆盖node_modules中对应文件（lib）

方式三：fork源码，将改写的源码重新打包发布至npm，或npm私服

<mark>方式四</mark>：使用 **[patch-package](https://github.com/ds300/patch-package)** 对 `node_modules` 中文件的修改生成补丁记录，可以配合 `postinstall` 钩子，在 `install` 时自动应用补丁记录，形成持久化更改的效果



## 安装配置

```bash
# npm
npm i -D patch-package

# yarn（因为yarn只会在 `yarn install` 和 `yarn add` 时执行 postinstall，而遗漏了 `yarn remove`）
yarn add -D patch-package postinstall-postinstall
```

```js
// package.json
 "scripts": {
+  "postinstall": "patch-package"
 }
```



## 命令行使用

```bash
# 在主项目根路径下的 patches 文件夹中，存放.patch文件，记录修改
npx patch-package <package-name>
# or
yarn patch-package <package-name>
```

```bash
# Applying patches...
npx patch-package
```

```bash
# 如果只想在开发环境下保留修改（This will allow those patch files to be safely ignored when NODE_ENV=production.）
- package-name+0.44.0.patch
	# rename
+ package-name+0.44.0.dev.patch
```



## 例子：修改 element-ui 源码 

- 修改 el-button 的默认字体，以及 type 为 primary 时的样式

### 全局引入 element-ui

```js
// main.js
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
```

1. node_modules/element-ui/lib/element-ui.common.js 
   - element-ui/package.json > `"main": "lib/element-ui.common.js"`

```js
- _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
+ _vm.$slots.default ? _c("h4", [_vm._t("default")], 2) : _vm._e()
```

2. node_modules/element-ui/lib/theme-chalk/index.css

```css
- .el-button--primary{color:#FFF;background-color:#409EFF;border-color:#409EFF}
+ .el-button--primary{color:#FFF;background-color:#123;border-color:#409EFF}
```

### 按需引入

```js
// main.js
import { Button } from 'element-ui';
import './element-variables.scss'
Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

```scss
// element-variables.scss
/*icon字体路径变量*/
$--font-path: '~element-ui/lib/theme-chalk/fonts';

/*按需引入用到的组件的scss文件和基础scss文件*/
@import '~element-ui/packages/theme-chalk/src/base.scss';
@import '~element-ui/packages/theme-chalk/src/button.scss';
```

1. node_modules/element-ui/lib/button.js
2. node_modules/element-ui/lib/theme-chalk/button.css
   - 不懂为什么不能生效，所以干脆在 element-variables.scss 中覆盖样式，例如 `$--color-primary: #004393;`

### patch

```bash
# 生成patch
npx patch-package element-ui

# 应用更改
npx patch-package
# or
npm run postinstall
```

