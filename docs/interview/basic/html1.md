# HTML

## XML

`XML`（Extensible Markup Language，可扩展标记语言），是一种标记语言。XML 曾一度是在互联网上 <u>存储和传输</u> 结构化数据的标准， JSON 格式用于取代 XML 格式进行服务器和网页之间的数据交换。

`HTML`（HyperText Markup Language，超文本标记语言），是一种用于创建网页的标准标记语言。

`DOM` （文档对象模型）是HTML 和 XML 文档的编程接口，但 DOM 标准不仅是为了在浏览器中使用，而且还为了在桌面和服务器应用程序中处理 XML 数据结构

`XHTML`（Extensible HyperText Markup Language，可扩展超文本标记语言），是使用 XML1.0 改写自 HTML4.01 的独立语言。它不再被作为单独标准开发。

`XPath`（XML Path Language，XML路径语言），用来确定XML文档中某部分位置。XPath 是为了在 DOM 文档中定位特定节点而创建的。

## 知识点

### 语义化标签

- `<head>`中的 title 和元数据 meta 标签等，利于SEO
- aside、section、article、footer等，可读性，便于阅读和代码的规范性
- code、pre、cite、blockquote等，有实际渲染意义，参照markdown

### <!DOCTYPE> 声明

`<!DOCTYPE>` 声明不是 HTML 标签，用它来指示以何种方式来渲染页面

HTML 4.01 中有三种声明，在 HTML5 中只有一种：`<!DOCTYPE html>`

### script 标签中的 `defer` 和 `async` 属性

- 浏览器在后台加载脚本，然后继续解析HTML构建DOM
- `async` 异步加载，加载完成时执行，不会阻塞页面的解析。下载完成就立马执行，不保证执行的顺序。
  - async脚本会在<u>加载完成时执行</u>，且完全独立，独立于DOM和其它脚本，不能确保执行次序
  - <u>适用于独立脚本</u>，例如计数器或广告，这些脚本的相对执行顺序无关紧要
  - 保证会在页面的 `load` 事件前执行，但可能会在 DOMContentLoaded 之前或之后
- `defer` 脚本的加载与页面的解析同步，但文档完成解析后才会执行；defer脚本可以保证按添加的顺序执行
  - defer特性仅适用于外部脚本，如果\<script> 脚本没有 src，则会忽略 defer 特性
  - defer脚本将推迟执行，直到<u>文档完成解析后</u>，触发 `DOMContentLoaded ` 事件前执行。
  - defer脚本<u>可以确保按照文档顺序执行</u>，即使第二个defer脚本先下载完成，也要等待第一个defer脚本下载完成后执行
  - <u>适用于需要整个 DOM 的脚本</u>，以及脚本的相对执行顺序很重要的时候

异步加载JS方式，除了使用`defer` 和 `async` 属性，还可以使用立即执行函数动态创建script标签然后加载外部js

```js
(function(){
  var scriptEle = document.createElement("script");
  scriptEle.type = "text/javasctipt";
  scriptEle.async = true;
  scriptEle.src = "http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js";
  var x = document.getElementsByTagName("head")[0];
  x.insertBefore(scriptEle, x.firstChild);  
})();
```



### link 标签

规定了当前文档与外部资源的关系

`rel` 属性 —  names a relationship of the linked document to the current document.

- `rel=preload`：告诉浏览器要预加载这个资源。
- `rel=prefetch`：告诉浏览器这个资源空闲的时候给我加载一下。(因为它可能被用户加载，即懒加载)
- `rel="icon"` 、`rel="stylesheet"`

`as` 属性 — Potential destination for a preload request 

- `as=script`：告诉浏览器这个资源是script，提升加载的优先级。

🌰demo：[SPA打包后的index.html](https://lins403.github.io/vuepress-doc/notesList/vue/vue-cli/vue-cli.html#index-html)

`crossorigin`属性 — 表示该资源是否应该使用一个CORS请求来获取

`href`属性

`media`属性 — 规定了外部资源适用的媒体类型，资源将只在满足媒体条件的情况下才被加载进来

### 特殊标签

- `<dt>`, `<dd>` description描述

- `<svg>`, `<symbol>`, ...
