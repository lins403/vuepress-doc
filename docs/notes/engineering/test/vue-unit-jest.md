# Vue单元测试

## 意义

它会让你更有信心地开发新特性而不破坏现有的实现，并帮助其他开发者理解你的组件的作用。

- 提供描述组件行为的文档
- 节省手动测试的时间
- 减少研发新特性时产生的 bug
- 改进设计、促进重构

## 配置

### vue2

```shell
# 方式一
vue add unit-jest
  # @vue/test-utils
  # @vue/cli-plugin-unit-jest
```

```shell
# 方式二：手动
npm install --save-dev jest @vue/test-utils vue-jest babel-jest
```
