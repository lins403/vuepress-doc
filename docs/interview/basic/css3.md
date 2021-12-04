# CSS 进阶

## 特殊属性

裁剪图案：`clip-path`

滤镜：`background-blend-mode` , `mix-blend-mode` , `filter`

模糊：`filter`(元素自身) , `backdrop-filter`(元素背景)

渐变：`gradirent`

文字环绕：`shape-outside`

## 层叠上下文

## 性能优化

不建议用@import导入css，因为会增加http请求，但预处理器中使用会被先编译，所以使用@import没有副作用

## 构建打包

Vendor prefixes

- postcss > autofixer (browserslist)

### loaders

- vue-loader > css-loader > vue-style-loader
- style-loader
  - dynamically inject CSS into the document as style tags. (in header tags)
  - 使用多个`<style>`将 CSS 插入到 DOM 中，反应会更快，适用于 `development` 模式。
- vue-style-loader支持SSR，与style-loader功能一致

### plugins

- extract-text-webpack-plugin  <Badge text="deprecated" type="error"/>
- mini-css-extract-plugin  <Badge text=">=webpack4" type="tip" />
  - 对每个包含CSS的JS文件进行处理，将CSS提取出来创建一个独立的css文件
  - 适用于 `production` 模式
  - 不要同时使用 `style-loader` *与* `mini-css-extract-plugin`
- css-minimizer-webpack-plugin

## Tips & Tricks

### 经验心得

- margin一般是用来设置兄弟元素之间的间距。padding一般是设置父子元素之间的间距

### 
