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
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageReporters: ['lcov', 'text-summary']
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

[Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/zh-CN)



## Demo

[GitHub - alexjoverm/vue-testing-series](https://github.com/alexjoverm/vue-testing-series)

✨



## 注意

### setMethods

`setMethods` 已经被废弃并会在未来的发布中被移除。

Solution 1: `jest.spyOn(Component.methods, 'METHOD_NAME')`

```js
describe('ButtonComponent', () => {
  it('click does something', async () => {
    const wrapper = shallowMount(ButtonComponent)
    const mockMethod = jest.spyOn(ButtonComponent.methods, 'doSomething')
    await shallowMount(ButtonComponent).find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
    // expect(mockMethod.called).toBe(true)
  })
})
```

Solution 2: Move methods into separate file that could be mocked ( `jest.mock(moduleName, factory, options)` )

```js
// MyComponent.vue
import { asyncAction } from 'actions'
const MyComponent = {
  methods: {
    async someAsyncMethod() {
      this.result = await asyncAction()
    }
  }
}


// spec.js
import MyComponent from '@/components/MyComponent'
import { asyncAction } from 'actions'
jest.mock('actions')

describe('MyComponent', () => {
  beforeEach(() => asyncAction.mockClear())
  it('click does something', async () => {
    await shallowMount(MyComponent).find('button').trigger('click')
    expect(asyncAction).toHaveBeenCalled()
    // asyncAction.mockResolvedValue({ foo: 'bar' })
  })
})
```

Solution3: Silence the super annoying deprecations messages 

```js
import { config } from '@vue/test-utils'
config.showDeprecationWarnings = false
```

More:

- [Explain what the replacement for deprecations are · Issue #1541 · vuejs/vue-test-utils · GitHub](https://github.com/vuejs/vue-test-utils/issues/1541)
- [vue.js - Mocking methods on a Vue instance during TDD - Stack Overflow](https://stackoverflow.com/questions/53799460/mocking-methods-on-a-vue-instance-during-tdd)
