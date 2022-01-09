# VueCli@2

- [vue-cli的webpack模板项目配置文件分析](https://blog.csdn.net/hongchh/article/details/55113751)
- [vue-cli中理不清的assetsSubDirectory 和 assetsPublicPath](https://juejin.cn/post/6844903702419996685)
- [Integrate with Backend Framework · GitBook](http://vuejs-templates.github.io/webpack/backend.html)
- [How To Use Environment Variables in Vue.js | DigitalOcean](https://www.digitalocean.com/community/tutorials/vuejs-working-with-environment-variables)

```
├─build
│   ├─build.js
│   ├─check-versions.js
│   ├─dev-client.js
│   ├─dev-server.js
│   ├─utils.js
│   ├─vue-loader.conf.js
│   ├─webpack.base.conf.js
│   ├─webpack.dev.conf.js
│   ├─webpack.prod.conf.js
│   └─webpack.test.conf.js
├─config
│   ├─dev.env.js
│   ├─index.js
│   ├─prod.env.js
│   └─test.env.js
├─...
└─package.json
————————————————
```

```json
// package.json
"scripts": {
  "dev": "node build/dev-server.js",
  "build": "node build/build.js",
  "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
  "e2e": "node test/e2e/runner.js",
  "test": "npm run unit && npm run e2e",
  "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs"
}
```

