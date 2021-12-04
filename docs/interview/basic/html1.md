# HTML

> `XML`（Extensible Markup Language，可扩展标记语言），是一种标记语言。
> 
> `XPath`（XML Path Language，XML路径语言），用来确定XML文档中某部分位置。
> 
> `HTML`（HyperText Markup Language，超文本标记语言），是一种用于创建网页的标准标记语言
> 
> `XHTML`（Extensible HyperText Markup Language，可扩展超文本标记语言），是使用 XML1.0 改写自 HTML4.01 的独立语言。它不再被作为单独标准开发。

## 知识点

### 语义化标签

- 部分head中的title和元数据meta标签，利于SEO
- aside、section、article、footer等，便于阅读和代码的规范性
- code、pre、cite、blockquote等，有实际渲染意义，参照markdown

### <!DOCTYPE> 声明

`<!DOCTYPE>` 声明不是 HTML 标签，用它来指示以何种方式来渲染页面

HTML 4.01 中有三种声明，在 HTML5 中只有一种：`<!DOCTYPE html>`

### script 标签中的 `defer` 和 `async` 属性

- 浏览器在后台加载脚本，然后继续解析HTML构建DOM
- `async` 
  - async脚本会在<u>加载完成时执行</u>，且完全独立，独立于DOM和其它脚本
  - 适用于独立脚本，例如计数器或广告，这些脚本的相对执行顺序无关紧要
- `defer` 
  - defer特性仅适用于外部脚本，如果\<script> 脚本没有 src，则会忽略 defer 特性
  - defer脚本将在<u>文档完成解析后</u>，触发 `DOMContentLoaded ` 事件前执行。
  - defer脚本可以确保<u>按照文档顺序执行</u>，即使后面的先下载完成，也要等待前面的下载完成后执行
  - 适用于需要整个 DOM 的脚本，和/或脚本的相对执行顺序很重要的时候

### 特殊标签

- `<dt>`, `<dd>`

- `svg`, `<symbol>`, ...
