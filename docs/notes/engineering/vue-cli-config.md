# VueCli

## Service

<https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/Service.js>

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
  },
```



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