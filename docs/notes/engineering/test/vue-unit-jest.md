# Vue2单元测试

Stub：存根

## 配置

```shell
# 方式一
vue add unit-jest
  # @vue/test-utils
  # @vue/cli-plugin-unit-jest：借助这个插件来运行jest测试
```

```shell
# 方式二：手动
npm install --save-dev jest @vue/test-utils vue-jest babel-jest babel-core@^7.0.0-bridge.0
# https://vue-test-utils.vuejs.org/zh/installation/
```

```js
module.exports = {
  // https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-unit-jest/presets/default/jest-preset.js
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverage: true
}
```

## 快照

```shell
# update snapshots
npm run test:unit -- -u
# or
yarn test:unit -u
```



## 教程

[Vue 组件的单元测试 — Vue.js|Cookbook](https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html)

[Vue Test Utils 文档](https://vue-test-utils.vuejs.org/zh/)

[VUE-UnitTest | 瓜田李下](https://holylovelqq.github.io/vue/VueUnitTest.html)

[GitHub - lmiller1990/vue-testing-handbook: A guide on testing Vue components and applications](https://github.com/lmiller1990/vue-testing-handbook)



## Demo

[GitHub - alexjoverm/vue-testing-series](https://github.com/alexjoverm/vue-testing-series)

✨
