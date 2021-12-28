# CSS模块与预处理器

## CSS Modules

把 CSS 视作一个独立的模块，将 css 内容导出为一个对象，用 js 来加载

规范：[Documentation about css-modules](https://github.com/css-modules/css-modules)

基础用法：[CSS Modules 用法教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

VueCLi 的集成使用：[CSS Modules | Vue CLI](https://cli.vuejs.org/zh/guide/css.html#css-modules)

```vue
<template>
  <div>
    <p :class="{ [$style.red]: isRed }">
      Am I red?
    </p>
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$style.red)
  }
}
</script>

<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

React 直接使用 CSS-in-JS ：[styled-components](https://github.com/styled-components/styled-components)

## 预处理器

[Vue Loader > 使用预处理器](https://vue-loader.vuejs.org/zh/guide/pre-processors.html#%E4%BD%BF%E7%94%A8%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)

## PostCSS

- Add vendor prefixes. » [autoprefixer](https://github.com/postcss/autoprefixer)
- convert future syntax. » [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- add suffix for selectors in a <u>css module</u> to avoid global namespace conflicts. » [css-modules](https://github.com/css-modules/css-modules)
- lint your stylesheets. » [stylelint](https://github.com/stylelint/stylelint)

### 配置

[GitHub - postcss/postcss-load-config: Autoload Config for PostCSS](https://github.com/postcss/postcss-load-config)

配置参考： [vue 移动端 使用postcssrc.js 并配置文件](https://segmentfault.com/a/1190000021196911)

### VueCli

VueCli 内置 postcss、postcss-loader、用于添加浏览器前缀的插件 autoprefixer，以及browserslist

[@vue/cli-service > postcss配置](https://github.com/vuejs/vue-cli/blob/e661a923751c2f49a24cb065b5dd5999169e86af/packages/%40vue/cli-service/lib/config/css.js#L50)



## SCSS

- < 3.0 `.sass`

- ≥ 3.0 `.scss`

### Dart Sass

相关：[Sass: Dart Sass](https://sass-lang.com/dart-sass)

升级方案：[Node Sass to Dart Sass](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#node-sass-to-dart-sass)

[vue.js - TypeError: this.getOptions is not a function - Stack Overflow](https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function)

```shell
# sass-loader@11.0.0 doesn't work with vue@2.6.12
npm i -D sass sass-loader@10
```

### SCSS Lint

早期的 [scss-lint](https://github.com/sds/scss-lint) 支持的是已经被淘汰的 Ruby Sass；

#### 使用方案：

1. [`stylelint`](https://stylelint.io/)
  
   - [postcss](https://postcss.org/)
   
   - ...postcss plugins
2. [`stylelint-config-recommended-scss`](https://www.npmjs.com/package/stylelint-config-recommended-scss)
  
   - stylelint-config-recommended
   
   - postcss-scss ( Parse SCSS syntax and apply PostCSS transformations directly to SCSS source code. )
   
   - stylelint-scss
3. [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order)
  
   - stylelint-order
4. [`stylelint-prettier`](https://github.com/prettier/stylelint-prettier)
5. [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)
5. [`postcss-html`](https://www.npmjs.com/package/postcss-html)

```shell
npm i -D stylelint stylelint-config-recommended-scss
npm i -D stylelint-config-recess-order
npm i -D stylelint-prettier stylelint-config-prettier
npm i -D postcss-html # parse .vue files
```

#### vscode插件

安装vscode插件 **stylelint** ( *stylelint-plus* supports auto fix on save)，然后修改配置，添加对 `scss` 文件的校验

#### 配置文件

项目配置文件，rules中添加规则覆盖

```js
/** .stylelintrc.js **/
module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'export'] }]
  }
}
```

```js
/** .stylelintignore **/
dist/*
public/*
```

#### 命令行

命令行检测和修复，可以配合 *.stylelintignore* 使用

```shell
npx stylelint "**/*.scss"
npx stylelint --fix "**/*.scss"
```

#### Ignoring code

disable complains：<https://stylelint.io/user-guide/ignore-code/>

```scss
/*stylelint-disable*/
```

#### 🌰🌰

```scss
// Bad
@import './variables.scss';
// Good
@import './variables';

:export {
  /* stylelint-disable-next-line property-no-unknown */
  theme: $--color-primary;
}
```

#### .vue文件的支持

[Vue Loader >  stylelint](https://vue-loader.vuejs.org/zh/guide/linting.html#stylelint)

stylelint 插件的设置中，添加 `vue` 文件的支持很多时候，例如使用模板字符串、或者使用带$的私有变量，会带来多余的complains，所以 lint-staged 中 .vue 文件也不使用 `stylelint --fix`

### 语法

#### 注释

```scss
// This comment won't be included in the CSS.

/* But this comment will, except in compressed mode. */

/*! This comment will be included even in compressed mode. */

p .sans
  font: Helvetica, /* Inline comments must be closed. Also won't be included in the CSS. */ sans-serif
```

#### Basic

- Variables
- Nesting
- Modules ( _partial.scss, @use partial, partial.$my-value )
- Mixins
- Extend/Inheritance
- Math Operators

#### Advanced

```scss
// function
@function
  @return

// flow control
@if and @else
@each
@for
@while
```

## less-vs-sass-vs-stylus

[less vs sass vs stylus | npm trends](https://www.npmtrends.com/less-vs-sass-vs-stylus)

- 变量、嵌套、模块、mixins、继承、运算符、内建函数、控制流

- Less 和 Stylus 都是用 JavaScript 写的，能直接用在浏览器端和 node，Sass 用 Dart 写的，~~需要在服务端做处理，~~ 但 npm 发布的 package 是纯 JavaScript 的

- Less 不能使用`条件语句`、不能自定义`function`、不能使用带参数的`mixins`，SCSS 的`extend`也更直观好用

- Stylus 差异较大，采用缩进，其它特性的语法也偏简洁

- 总之，SCSS 更面向编程，Less 只能说是 css 的拓展，不喜欢 Stylus 的风格，趋势热度上亦或是语法功能上，都倾向于选择 scss