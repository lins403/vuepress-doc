# VueCli

## Service

<https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/Service.js>

```json
  "scripts": {
    // development
    "serve": "vue-cli-service serve",
    // production
    "build": "vue-cli-service build",
    // test
    "test": "vue-cli-service test:unit",
    // eslint
    "lint": "vue-cli-service lint",
  },
```

### 模式和环境变量

node `process.env`

- [dotenv](https://github.com/motdotla/dotenv)
- [dotenv-expand](https://github.com/motdotla/dotenv-expand)

源码：<https://github.com/vuejs/vue-cli/blob/e41ef41540802723eb146f2a630c460c95883c7e/packages/%40vue/cli-service/lib/Service.js#L58>

文档：**[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)**

扩展：

- [cross-env](https://www.npmjs.com/package/cross-env): Cross platform setting of environment scripts
- [How is cross-env different from dotenv ?](https://github.com/kentcdodds/cross-env/issues/56#issuecomment-280095704)

## 配置

https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config

[base 配置](https://github.com/vuejs/vue-cli/blob/3f0b782bca7df17740b72509c42e5e2ea6562ac9/packages/%40vue/cli-service/lib/config/base.js)

[dev 配置](https://github.com/vuejs/vue-cli/blob/f9863409739c8917b24c4844432f984d68877c63/packages/@vue/cli-service/lib/config/app.js)

## plugins

https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-service/lib/webpack

@vue/preload-webpack-plugin

case-sensitive-paths-webpack-plugin

copy-webpack-plugin

html-webpack-plugin

```js
  plugins: [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: `./src/pages/index.html`,
      filename: `hello.html`,
    })
  ],
```

pnp-webpack-plugin

terser-webpack-plugin

### webpack-chain

https://github.com/neutrinojs/webpack-chain