# 代码性能提升

## 作用域意识

1. 避免全局查找
   - 变量需要经历作用域链查找，所以全局变量和函数相比于局部值始终是最费时间的
   - 在局部作用域中保存对全局变量对象的引用，来提升性能
2. 不使用with语句
   - 在性能很重要的代码中，应避免使用 with 语句。
   - 与函数类似，with 语句会创建自己的作用域， 因此也会加长其中代码的作用域链。在 with 语句中执行的代码一定比在它外部执行的代码慢，因为作用域链查找时多一步。

## 选择正确的方法

1. 避免不必要的属性查找，或保存局部变量
   - 减少属性查找长度，从而降低查找的算法线性复杂度
2. 优化循环
   - 简化终止条件、简化循环体、使用后测试循环（do-while）
   - 循环次数较少时，展开循环性能更好
   - 避免在循环中创建函数，可能只会带来无谓的计算，还会带来混淆，例如闭包变量的情况。可以把循环中的处理函数提取到循环外部，或者是创建一个辅助函数，接收循环变量作为参数。

3. 其他性能优化注意事项

- 原生方法很快。
  - 应该尽可能使用原生方法，而不是使用 JavaScript 写的方法。原生方法是使用 C 或 C++等编译型语言写的，因此比 JavaScript 写的方法要快得多。 
-  switch语句很快
  - 如果代码中有复杂的 if-else 语句，将其转换成 switch 语句可以变得更快。
-   位操作很快
  - 在执行数学运算操作时，位操作一定比任何布尔值或数值计算更快。选择性地将某些数学操作替换成位操作，可以极大提升复杂计算的效率。像求模、逻辑AND与、逻辑OR或 都很适合替代成位操作。

## 语句最少化

1. 多个变量声明

   ```js
   // 一条语句更好，且比使用多条语句执行速度更快
   let count = 5,
       color = "blue",
       values = [1,2,3],
       now = new Date();
   ```

2. 插入迭代性值

   ```js
   // 任何时候只要使用迭代性值(即会递增或递减的值)，都要尽可能使用组合语句
   let name = values[i++];
   ```

3. 使用数组和对象字面量

   ```js
   // 一条语句创建并初始化数组（不使用new Array()
   let values = [123, 456, 789];
   
   // 一条语句创建并初始化对象（不使用new Object()
   let person = {
     name: "Nicholas",
     age: 29,
     sayName() {
       console.log(this.name);
     }
   };
   ```

## 优化DOM交互

在所有 JavaScript 代码中，涉及 DOM 的部分无疑是非常慢的。DOM 操作和交互需要占用大量时间， 因为经常需要重新渲染整个或部分页面。优化 DOM 交互可以极大地提升脚本的执行速度。

1. 实时更新最小化
   - 访问 DOM 时，只要访问的部分是显示页面的一部分，就是在执行实时更新操作。每次这样的更新，浏览器需要为此重新计算数千项指标，之后才能执行更新，从而导致性能损失。需要减少实时更新的次数。
   - 多次操作DOM节点子元素时，可以使用[DocumentFragment](https://lins403.github.io/vuepress-doc/notesList/javascript/basic/dom.html#documentfragments)来构建 DOM 结构，然后再把构建好的 DOM 结构实时更新到文档中。可以减少浏览器重排。
2. 使用 innerHTML

   - 在页面中创建新 DOM 节点的方式有两种: 使用 DOM 方法如 createElement()和 appendChild()， 以及使用 innerHTML。对于少量 DOM 更新，这两种技术区别不大，但对于大量 DOM 更新，使用 innerHTML 要比使用标准 DOM 方法创建同样的结构快很多。
   - 在给 innerHTML 赋值时，后台会创建 HTML 解析器，然后会使用原生 DOM 调用而不是 JavaScript 的 DOM 方法来创建 DOM 结构。原生 DOM 方法速度更快，因为该方法是执行编译代码而非解释代码。
   - 使用innerHTML可以提升性能，但也会暴露巨大的XSS攻击面。无论何时使用它填充不受控的数据，都有可能被攻击者注入可执行代码。此时必须要当心。
3. 使用事件委托
4. 注意 HTMLCollection

   - 在循环中使用 HTMLCollection 时，应该首先取得对要使用的元素的引用，从而避免在循环体内多次调用 [`HTMLCollection`](https://lins403.github.io/vuepress-doc/notesList/javascript/basic/dom.html#htmlcollection-%E4%B8%8E-nodelist) 


### 减少重排重绘

A. 需要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示

B. 需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document

C. 尽量避免用table布局(table元素一旦触发回流就会导致table里所有的其它元素回流)

## 压缩

- 代码大小(code size)：浏览器需要解析的字节数
- 传输负载(wire weight)：服务器实际发送给浏览器的字节数

### 1）代码压缩

压缩工具可以通过如下操作减少代码大小:

- 删除空格(包括换行);
- 删除注释;
- 缩短变量名、函数名和其他标识符。

压缩”(compression)不等同于“最小化”(minification)，压缩算法可能破坏语法结构，且通常能得到比最小化更小的文件

### 2）JavaScript 编译

类似于最小化，JavaScript 代码编译通常指的是，把源代码转换为一种逻辑相同但字节更少的形式。 与最小化的不同之处在于，编译后代码的结构可能不同，但仍然具备与原始代码相同的行为。

编译可能会执行如下操作:

 删除未使用的代码;

 将某些代码转换为更简洁的语法; 

 全局函数调用、常量和变量行内化。

### 3）JavaScript 转译

转译可以将现代的代码转换成更早的 ECMAScript 版本，通常是 ES3 或 ES5，具体取决于你的需求。这样可以确保代码能够跨浏览器兼容。

“转译”(transpilation)不同于“编译”(compilation)。编译是将源代码从一种语言转换为另一种语言。转译在本质上跟编译是一样的，只是目标语言与源语言是一种语言的不同级别的抽象。

### 4）HTTP 压缩

传输负载不一定与代码大小相同，因为服务器和浏览器都具有压缩能力。

1. 浏览器通过请求头部(`Accept-Encoding`)标明自己支持的格式，服务器则据此选择一种用来压缩 JavaScript 文件。
2. 在传输压缩后的文件时，服务器响应的头部会有字段(`Content-Encoding`)标明使用了哪种压缩格式。
3. 浏览器看到这个头部字段后，就会根据这个压缩格式进行解压缩。

使用 Apache 服务器上的两个模块(mod_gzip 和 mod_deflate)可以减少原始 JavaScript 文件的约 70%。这很大程度上是因为 JavaScript 的代码是纯文件，所以压缩率非常高。

也可以在 Nginx 服务器中配置 GZip 压缩

### GZip 压缩

#### 适合 GZip 压缩的资源类型

实际上，gzip 主要用于对文本类型的资源进行压缩，例如常用见的文本资源：

- HTML 文件：text/html（nginx 服务器默认就会压缩）、application/xhtml+xml
- CSS 文件：text/css
- JS 文件：application/x-javascript、application/javascript、text/javascript
- JSON 文件（或者API请求结果）：application/json、application/geo+json、application/ld+json application/manifest+json、application/x-web-app-manifest+json
- XML 文件：application/xml、application/atom+xml、application/rdf+xml、application/rss+xml
- SVG 文件：image/svg+xml;

除了常用的文本文件，gzip 也支持压缩以下 MIME 类型的文件：

- application/vnd.ms-fontobject
- application/wasm
- font/eot
- font/otf
- font/ttf
- image/bmp
- text/cache-manifest
- text/calendar
- text/markdown
- text/plain
- text/vcard
- text/vnd.rim.location.xloc
- text/vtt
- text/x-component
- text/x-cross-domain-policy

GZip 对基于文本的内容的资源压缩效果最好，在压缩较大文件时往往可实现高达 70-90% 的压缩率，而如果对已经通过替代算法压缩过的资源（例如，大多数图片格式）运行 gzip，则效果甚微，甚至毫无效果。

[如何在 Nginx 服务器中配置 GZip 压缩？](http://www.yaohaixiao.com/blog/how-to-configure-gzip-compression-with-nginx/)