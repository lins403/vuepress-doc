# Solutions

## 技巧

### 1）运行打包后的数据

```bash
npm install --g http-server

http-server ./dist
```

### 2) 打包去掉代码压缩混淆

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.optimization.minimize(false);
  },
}
```

### 3）index.html中加载外部脚本

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- 最好带上type="text/javascript"，否则在https域名下可能有意外的错误 -->
<script type="text/javascript" src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

## 踩坑

### 2）eslint8与vue-eslint-parser不兼容

> Syntax Error: TypeError: eslint.CLIEngine is not a constructor

解决：

[Add support for ESlint 8.0 in `vue-eslint-parser` · Issue #6759 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/issues/6759)

```shell
npm i eslint@7 -D  
```

### 3）runtime-only build of Vue

>  [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

解决：

https://github.com/vuejs/vue-cli/issues/2754

方式一：

```js
// vue.config.js
module.exports = { runtimeCompiler: true, }
```

方式二：

```js
// change
import Vue from 'vue'

to
import Vue from 'vue/dist/vue.js';
```

