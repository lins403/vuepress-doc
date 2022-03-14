# babel

[前端科普系列-Babel：把 ES6 送上天的通天塔](https://zhuanlan.zhihu.com/p/129089156)

核心依赖

### polyfill

### presets

- babel 转换代码其实就是用了 AST，babel 核心包并不会去转换代码，核心包只提供一些核心 API，真正的代码转换工作由插件或者预设来完成.
- presets 是 plugins 的集合，一个 presets 内部包含了很多 plugin。
- 所以可以按照AST的差异自己实现babel插件来改变代码的AST结构

### core.js

[core-js@3带来的惊喜](https://www.cnblogs.com/sefaultment/p/11631314.html)

## 配置文件

.baelrc

babel.config.js

webpack会依赖此配置文件来使用babel进行编译SE6代码

## 自定义babel
