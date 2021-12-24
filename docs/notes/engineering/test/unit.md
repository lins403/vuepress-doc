# 单元测试

[chai vs jasmine vs jest vs karma vs mocha | npm trends](https://www.npmtrends.com/chai-vs-jasmine-vs-jest-vs-karma-vs-mocha)

[Unit test reports | GitLab](https://docs.gitlab.com/ee/ci/unit_test_reports.html#jest)（GitLab CI）

## 意义

它会让你更有信心地开发新特性而不破坏现有的实现，并帮助其他开发者理解你的组件的作用。

- 提供描述组件行为的文档（Documentation）
- 节省手动测试的时间
- 减少研发新特性时产生的 bug
- 改进设计、促进重构

## Jest 扫盲

| 概念                      |                                                              |
| ------------------------- | ------------------------------------------------------------ |
| Test Suites               | 测试套件，通常是一个 `.spec.js` 或 `.test.js` 文件           |
| Matchers                  | 匹配器，`toBe`、`toEqual` 等，[API文档](https://jestjs.io/docs/expect) |
| Testing Asynchronous Code | 异步，Promises、`.resolves` / `.rejects`、Async/Await        |
| One-Time Setup            | 一次性设置，`beforeAll`、`afterAll`、`beforeEach`、`afterEach` |
| Scoping                   | 作用域，top-level、 inside the `describe` block              |
| Mock Functions            | Mock函数、类、…                                              |
| Snapshot Testing          | 快照测试，make sure your UI does not change unexpectedly.    |
| Coverage                  | 覆盖率                                                       |

Config 配置

- package.json > jest
- jest.config.js 、jest.config.ts
