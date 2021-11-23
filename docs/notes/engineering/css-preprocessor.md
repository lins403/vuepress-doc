# CSS预处理器



[Vue Loader > 使用预处理器](https://vue-loader.vuejs.org/zh/guide/pre-processors.html#%E4%BD%BF%E7%94%A8%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)

VueCli4及之前，默认内置postcss和postcss-loader



## SCSS

### Dart Sass

[Node Sass to Dart Sass](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#node-sass-to-dart-sass)



### SCSS Lint

早期的 [scss-lint](https://github.com/sds/scss-lint) 支持的是已经被淘汰的 Ruby Sass；

[stylelint](https://github.com/stylelint/stylelint) ➕ [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss) : vscode的stylelint插件不能识别，使用`stylelint-scss`插件扩展后对scss规则的配置，所以放弃这个方案；

改用 [stylelint-config-recommended-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss) ➕ [stylelint-prettier](https://github.com/prettier/stylelint-prettier) ➕ [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) 的方案

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

disable complains：https://stylelint.io/user-guide/ignore-code/

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

