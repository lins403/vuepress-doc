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

[webpack - You are using the runtime-only build of Vue where the template compiler is not available - Stack Overflow](https://stackoverflow.com/questions/47332728/you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-a)

