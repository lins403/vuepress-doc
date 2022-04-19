# CSS 进阶

## 特殊属性

裁剪图案：`clip-path`

滤镜：`background-blend-mode` , `mix-blend-mode` , `filter`

模糊：`filter`(元素自身) , `backdrop-filter`(元素背景)

渐变：`gradirent`

文字环绕：`shape-outside`

文字阴影：`text-shadow`

图片填充：`object-fit` , `object-position`

图片边框：`border-image: image-source image-height image-width image-repeat`

为一个滚动框指定滚动行为：`scroll-behavior: smooth;`（平滑滚动）

## 特殊应用

### CSS Sprites

- 图片精灵、雪碧图

- 把背景图整合到一张图片，再利用css的background一族的属性进行偏移定位。

- 可以减少图片请求，以降低系统请求资源的开销

## CSS函数

### clamp

```scss
clamp(MIN, VAL, MAX) // 其实就是表示 max(MIN, min(VAL, MAX))
// 🌰
<p class="fluid-type">Hello World!</p>
.fluid-type {
  font-size: clamp(1rem, 8vw - 2rem, 3rem);
}
```

## 性能优化

- 不建议用@import导入css

## 构建打包

Vendor prefixes

- postcss > autofixer (browserslist)

### loaders

- vue-loader > css-loader > vue-style-loader
- style-loader
  - dynamically inject CSS into the document as style tags. (in header tags)
  - 使用多个`<style>`将 CSS 插入到 DOM 中，反应会更快，适用于 `development` 模式。
- vue-style-loader支持SSR，与style-loader功能一致，但style-loader 支持的功能还是丰富些

> 1. `vue-loader`解析.vue文件的style标签
>
> 2. `css-loader`会加载样式，处理过后会把样式都变成 module 的形式，然后直接导出这个模块，模块中包含了 css 的源码跟模块的 id（如果添加了scoped）。
> 3. 处理过后会被 `vue-style-loader` 引用，与style-loader类似，主要是往DOM中插入一个 style 标签让样式生效。

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
- `background : url("//example.com/a/b/c/d.png");` 根据站点类型自动补上http或https
- 可以被继承的样式：字体相关的（font-size、font-family、color、text-indent）
- 不能被继承的样式：布局相关的（width、height、margin、border、padding）
- 页面百分百显示，需要同时设置html和body的 `width:100%;height:100%;`
- background-size:
  - contain: 
  - 100%
  - 100% 100%
  - cover


### 
