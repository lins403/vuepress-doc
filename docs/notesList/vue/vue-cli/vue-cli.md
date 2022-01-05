# VueCli

## 全局配置

`~/.vuerc`

```bash
vue config
```

## vue.config.js

class Service: [vue-cli/Service.js at v4 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/v4/packages/%40vue/cli-service/lib/Service.js)

- `this.projectOptions = defaultsDeep(userOptions, defaults())`
- defaultOptions: [vue-cli/options.js at v4 · vuejs/vue-cli · GitHub](https://github.com/vuejs/vue-cli/blob/v4/packages/@vue/cli-service/lib/options.js)
- userOptions: `./vue.config.js` , `./vue.config.cjs`

```js
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
}
```

### publicPath

- Default: `'/'`
- webpack > `output.publicPath`

### outputDir

- Default: `'dist'`

### assetsDir

- Default: `''`

静态资源存放路径，放置生成的静态资源 (js、css、img、fonts) 的 (相对于 `outputDir` 的) 目录。
