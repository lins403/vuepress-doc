# PDF

- iframe、embed

- [GitHub - mozilla/`pdf.js`: PDF Reader in JavaScript](https://github.com/mozilla/pdf.js)
  
  - 一个完整的 PDF 查看器，可以直接使用其提供的 viewer.html 查看 PDF 内容，包含完整样式和相关功能

- [GitHub - mozilla/`pdfjs-dist`: Generic build of PDF.js library.](https://github.com/mozilla/pdfjs-dist)
  
  - 只包含 PDF 内容的渲染功能，需要借助canvas来渲染，同时需要自定义样式和功能

## iframe

```html
<!-- 将PDF文件放置在 public/static 路径下 -->
<iframe id="viewer" src="static/demo.pdf" />

<!--同理-->
<embed src="static/demo.pdf" type="application/pdf">
```

```js
// 从后端接口读取PDF
<iframe id="viewer" :src="pdfUrl" />
// …
this.pdfUrl = window.URL.createObjectURL(blob)
```

## pdf.js

### viewer

下载：[Getting Started - download](https://mozilla.github.io/pdf.js/getting_started/#download)

#### 在vue项目中引入

将下载的文件解压重命名为pdf.js，放置在 public/static 下

```shell
tree -L 3 public
.
├── favicon.ico
├── index.html
└── static
    ├── demo.pdf
    └── pdf.js
        ├── LICENSE
        ├── build
        └── web
```

#### 使用

```js
// 不能跨域
const pdfUrl = '/static/demo.pdf'
window.open(`static/pdf.js/web/viewer.html?file=${pdfUrl}`)
```

#### 工具栏汉化

```html
// public/static/pdf.js/web/viewer.html
- <link rel="resource" type="application/l10n" href="locale/locale.properties">
+ <link rel="resource" type="application/l10n" href="locale/zh-CN/viewer.properties">
```

#### 支持跨域

1）配置CORS或者代理

```js
// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 1024,
    proxy: {
      '/remote-assets': {
        target: 'https://www.*******',
        pathRewrite: { '^/remote-assets': '' }
      }
    }
  }
}
```

```js
const pdfUrl = 'http://localhost:1024/remote-assets/pdf/demo.pdf'
window.open(`static/pdf.js/web/viewer.html?file=${pdfUrl}`)
```

2）将这段异常抛出代码注释掉

```js
// public/static/pdf.js/web/viewer.js
if (origin !== viewerOrigin && protocol !== "blob:") {
  throw new Error("file origin does not match viewer's");
}
```

## vue-pdf

基于 `pdfjs-dist` 的组件封装

Usage: [GitHub - FranckFreiburger/vue-pdf: vue.js pdf viewer](https://github.com/FranckFreiburger/vue-pdf)

## 添加水印

方法①：通过修改 `viewer.js` 的源码实现静态添加水印

方法②：通过集成 `pdfjs-dist` 的功能，自定义渲染，实现动态添加水印

### 方法①

[Vue pdf.js在线预览添加水印并禁用打印功能 - 掘金](https://juejin.cn/post/7039607610793803789)

### 方法②

[Vue 集成 PDF.js 实现 PDF 预览和添加水印 - 掘金](https://juejin.cn/post/6920148445084778510#comment)

## 优化策略

分片加载：[如何实现高性能的在线 PDF 预览 - 政采云前端团队](https://www.zoo.team/article/pdf-preview)
