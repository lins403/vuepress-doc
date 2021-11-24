# CSS模块与预处理器

## CSS Modules

https://vue-loader.vuejs.org/zh/guide/css-modules.html



## 预处理器

[Vue Loader > 使用预处理器](https://vue-loader.vuejs.org/zh/guide/pre-processors.html#%E4%BD%BF%E7%94%A8%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)



### PostCSS

- Add vendor prefixes ([autoprefixer](https://github.com/postcss/autoprefixer))
- convert future syntax ([postcss-preset-env](https://github.com/csstools/postcss-preset-env))
- add suffix for selectors in a module to avoid global namespace conflicts ([css-modules](https://github.com/css-modules/css-modules))
- lint your stylesheets ([stylelint](https://github.com/stylelint/stylelint))

VueCli内置postcss、postcss-loader、postcss用于添加浏览器前缀的插件autoprefixer，以及browserslist

[@vue/cli-service > postcss配置](https://github.com/vuejs/vue-cli/blob/e661a923751c2f49a24cb065b5dd5999169e86af/packages/%40vue/cli-service/lib/config/css.js#L50)



## SCSS

### Dart Sass

[Node Sass to Dart Sass](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#node-sass-to-dart-sass)



### SCSS Lint

早期的 [scss-lint](https://github.com/sds/scss-lint) 支持的是已经被淘汰的 Ruby Sass；

使用方案：

- [stylelint](https://stylelint.io/)
  - [postcss](https://postcss.org/)
  - ...postcss plugins
- [stylelint-config-recommended-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)
  - [stylelint-config-recommended](https://www.npmjs.com/package/stylelint-config-recommended)
  - [postcss-scss](https://www.npmjs.com/package/postcss-scss) ( Parse SCSS syntax and apply PostCSS transformations directly to SCSS source code. )
  - [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)
  - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

```sh
npm i -D stylelint stylelint-config-recommended-scss
npm i -D stylelint-config-recess-order
npm i -D stylelint-prettier stylelint-config-prettier
```

安装vscode插件 **stylelint** (stylelint-plus supports auto fix on save)，然后修改配置，添加对 `scss` 文件的校验

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

命令行检测，可以配合 .stylelintignore 使用

```sh
npx stylelint "**/*.scss"
```

disable complains：<https://stylelint.io/user-guide/ignore-code/>

```scss
/*stylelint-disable*/
```

🌰

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

.vue文件

[Vue Loader >  stylelint](https://vue-loader.vuejs.org/zh/guide/linting.html#stylelint)

stylelint 插件的设置中，添加 `vue` 文件的支持很多时候，例如使用模板字符串、或者使用带$的私有变量，会带来多余的complains，所以 lint-staged 中 .vue 文件也不使用 `stylelint --fix`



### 使用

注释

```scss
// This comment won't be included in the CSS.
   This is also commented out.

/* But this comment will, except in compressed mode.

p .sans
  font: Helvetica, /* Inline comments must be closed. Also won't be included in the CSS. */ sans-serif
```

