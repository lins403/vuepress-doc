# 补充

## 网络

【输入URL到页面加载显示完成发生了什么?】首先读取地址栏的URL，然后通过域名解析，找到对应资源服务器的IP地址。通过TCP三次握手建立连接，然后就可以发送http请求了。服务器收到客户端发来的请求后，将资源返回给客户端，最后浏览器解析资源并渲染页面。

浏览器会根据服务器返回的HTML来构建DOM树，构建过程中如果遇到script标签，就会停止构建，转而去下载并执行JavaScript代码。因为浏览器不清楚js代码是否会影响到DOM，所以会同步加载和执行JS代码，从而阻塞了HTML的解析过程。为了改善这种情况，我们通常就把script标签放在body的最后。然后浏览器根据外部的CSS和自己的CSS文件，以及节点的内联样式，构建CSSOM树。构建完成DOM树和CSSOM树以后，就将它们合并为渲染树render tree，这个过程会确定每个DOM节点的计算样式。然后遍历渲染树开始layout布局，根据树中各个节点的位置和尺寸进行排列，生成布局树 layout tree。最后一步就是渲染页面，根据布局信息将像素绘制到屏幕上。

---

【数字签名和数字证书】首先数据在网络传输过程中，要担心的问题是数据被窃听、被篡改、以及数据发送人的身份被冒充。首先是使用非对称加密解决防窃听，然后是通过数字签名可以防数据被篡改，最后是引入一个第三方权威机构来防止身份被冒充，这个就是数字证书的意义。公钥和私钥的作用是，公钥是公开给大众的，用于加密数据和验证签名，而私钥是自己保留的，用于解密数据和数字签名。

【三次握手】假如说先从客户端发送请求，服务端收到以后将确认信息发送给客户端，这时候是两次握手了，客户端已经知道自己的接收和发送能力都没有问题，但是服务端还不能确认自己的发送能力是否没有问题，所以客户端需要再发送一次请求告诉它，这就是第三次握手。

【四次挥手】因为客户端请求关闭连接的时候，服务端自身还有状态，所以需要等到服务端处理完成，可以关闭的时候，再主动告诉客户端说可以关闭连接了。

---

【Cookie】cookie是一种用于维持会话状态的数据，通常是服务端将对应的状态信息，比如说是sessionId或者是token，发送给客户端，然后浏览器通过cookie保存在本地。当下一次有同源的请求时，就会将cookie携带到请求头中发送给服务端。当然cookie也可以通过js代码来设置，可以存放用户的信息比如账号密码，坐标位置等等，用于改善用户体验。但是cookie一般只能存储4k大小的数据，浏览器一般也会有数量的限制，而且cookie只能在同源页面之间使用。

服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。一条cookie 包括了5个属性值 expires、domain、path、secure、HttpOnly。其中 expires 指定了 cookie 失效的时间，domain 是域名、path是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问。secure 规定了 cookie 只能在https请求中传输，HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。

【cookie和session认证方式】服务端验证用户的账号密码后，在session中保存用户信息，然后向浏览器返回一个sessionId，写入用户的cookie中，保存在客户端。随后用户的每次请求都会自动携带这个cookie，将sessionId发送给服务端，服务端只要根据sessionId找到对应的session，就可以取出之前保存的信息，从而维持会话状态。这种方式的缺点是不能实现跨域，而且影响扩展性，因为如果session保存在内存中，那么每次只能由同一台服务器来处理，就不适用于分布式应用中的负载均衡。

【token认证方式】服务端验证成功以后，会将登录凭证做数字签名，然后加密生成一个access token，并发送给客户端。客户端通过cookie或者是localStorage的方式将它保留在本地，以后每次请求都携带这个token。服务端验证token，验证通过时就会向客户端返回数据。当access token失效时，只需要将Refresh Token发送给服务端，而不用重新验证账号密码，就可以刷新 access token。与sessionId的认证方式有点接近，但不同点在于token不像cookie会被自动添加到请求头，token需要手动添加到header中，使用前后端协商以后的字段名称来传输。而且像JWT这样的token，可以在token中保存用户信息和加密的数据，而不需要服务端额外保存会话信息，并且还可以减少服务端对数据库的查询。

【sessionStorage 和 localStorage】sessionStorage是会话级别的存储，浏览器窗口关闭时就会被清除。而localStorage是持久化数据，会被永久保存在本地，直到通过js代码清除或者用户清理浏览器缓存。页面点击或者js的页面跳转打开的新标签页，还是同一个session，因此可以共享sessionStorage，但新建浏览器标签页或窗口打开时则不是同一个session。而localStorage没有session的限制，和cookie一样可以在所有同源标签页和窗口之间共享。

---

【浏览器缓存】浏览器缓存是针对http get请求的一种优化策略。当浏览器收到资源请求的响应后，在一段时间内都会保留它的副本，如果在设定的有效时间内，对这份资源再次请求，那么浏览器就会直接使用缓存的副本，而不用再发起一次完整的请求。好处是可以<u>提升页面的访问速度，并降低对网络带宽的消耗</u>。

浏览器缓存策略由服务器或代理服务器指定，分为强缓存策略和协商缓存策略。强缓存策略允许在缓存资源有效时直接使用缓存资源，而协商缓存则还需要每次发送请求给浏览器确认资源是否发生变化，如果资源未发生变化则返回304状态码，浏览器就可以使用缓存。

​	使用强缓存策略时，如果缓存资源还有效，就直接使用缓存资源，不必再向浏览器发起请求。强缓存策略主要通过http headers中的 `Expires` 属性或者 `Cache-Control` 属性。后者是HTTP1.1中新引入的，精确度更高，用于替换前者，同时使用时后者的优先级也更高。先从内存加载缓存(from cache)，如果没有，则从磁盘中加载缓存(from disk)

​	如果缓存已经过期，那么就需要使用协商缓存。浏览器会向服务器发送一个请求，如果服务器确认资源没有发生修改，则返回一个304状态，让浏览器使用本地的缓存副本。如果资源发生变化，就返回修改后的资源给客户端。协商缓存的设置是通过http headers 中的 Last-Modified 属性和 Etag 属性。`Last-Modified`值表示资源上一次更改的时间，它只能精确到秒级。而 `Etag` 是资源的唯一标识符，资源变化时这个值也会变化，所以用Etag判断会更加准确，优先级更高，但是性能比前者稍差。浏览器为了让服务器判断资源是否做了修改，就将前一次请求的response header 中的 last-modified 值作为 `if-modified-since`，将 etag 值作为 `If-None-Match`，添加到request header中，发送给服务器校验。同时使用时，If-None-Match的优先级别更高。

---

【同源策略与跨域】浏览器的同源策略下，一个域下的js脚本不允许修改另一个域的内容。只允许URL路径不同，其它情况都算跨域。跨域实现方式中，JSONP利用的是img和script标签的src属性允许加载外域脚本；CORS本质上是浏览器与服务器的协商，从而允许使用跨域资源。CORS的配置方式只需要后端在response header上添加字段，而不需要前端再修改。CORS请求分为简单请求和复杂请求，复杂请求会多一次预检请求，服务器确认以后返回204状态码，然后就可以像简单请求一样正常访问。使用nginx反向代理，或者webpack的DevServer中使用的http-proxy-middleware中间件。

### 网络攻击

网络攻击的类型有代码注入、钓鱼，以及DDOS。

【XSS】XSS（Cross-site scripting, 跨站脚本攻击）是一种代码注入攻击，会在目标网站注入恶意脚本，当用户访问时就会执行恶意脚本，从而窃取敏感信息。可能通过表单提交让恶意代码被保存到数据库中，也可能构造一个包含恶意代码的URL，然后URL中的恶意脚本可能被服务端处理以后拼接到HTML中去，或者被JavaScript代码取出并执行。**防御策略**有，输入过滤，比如过滤掉script标签；前端开发谨慎使用innerHTML、document.write()这类动态修改DOM的方式；还可以给网站使用 `CSP` 策略，添加白名单，限制网站使用的资源和脚本的来源。

【CSRF】CSRF（Cross-site request forgery, 跨站点请求伪造）是设法伪造带有 cookie 的 HTTP 请求，比如骗取用户点击从而盗取用户的cookie。cookie本身不能跨域，但是CORS的请求会自动使用cookie，所以需要再额外限制外域对cookie的使用，比如同源检测，通过header中的`Referer`字段检测用户之前的位置是否是同源，还可以让服务器通过 `Set-Cookie` 字段，设置cookie的`samesite`属性限制第三方cookie。

【XSS与CSRF】`XSS`是将恶意代码植入网站中，骗取的是用户对网站的信任；而`CSRF`盗用 cookie 伪造用户请求，骗取的是网站对用户的信任。

【点击劫持】通常是用 iframe 或图片覆盖，伪造骗取用户点击。防御策略可以限制iframe的跨域；设置cookie的samesite属性

- 加密数据、防范XSS（禁用innerHTML、v-html；在index.html文件的head中添加meta设置CSP策略，限制外部资源的来源）、防范CSRF（主要是后端在做，后端设置cookie的samesite属性，前端有时候会用js修改cookie，然后尽量不在cookie中使用敏感信息）

## HTML

【XML】`XML`是一种标记语言，用于存储和传输结构化数据，但是在网络传输上基本已经被JSON取代。`HTML`超文本标记语言，是一种用于创建网页的标记语言。`DOM`文本对象模型是 HTML 和 XML 的编程接口。`XPath`则用于在XML或DOM中定位特定节点。

【语义化标签】`<head>`中的 title 和元数据 meta 标签等，利于SEO。`<meta>`中设置的属性可以被浏览器解析，比如设置编码格式、浏览器兼容性、视图viewpoint、CSP策略、缓存策略等等。aside、section、article、footer等，增强可读性，便于阅读和代码的规范性。code、pre、cite、blockquote等，有实际渲染意义，参照markdown

【<!DOCTYPE>】声明文档类型，指定以何种方式来渲染页面，HTML 4.01 中有三种声明，在 HTML5 中只有一种：`<!DOCTYPE html>`

【script 标签中的 async 和 defer 属性】因为HTML的解析过程在遇到script标签时，会停下来下载并执行脚本代码。添加 defer 和 async 属性以后，脚本就会被异步下载，而不会阻塞HTML的解析。

【async】添加了 `async` 属性的脚本被异步加载，但是加载完成就会被立即执行，并且不保证脚本之间的执行顺序。它只能确保在页面的onload事件前完成，但是可能在DOM加载完成触发DOMContentLoaded事件之前，也可能在之后。所以 async 属性很适合用于独立脚本，例如页面广告或者计数器。

【defer】添加了 `defer` 属性的脚本被异步加载，但是会被推迟执行，一直等到<u>浏览器解析HTML完成以后</u>才会被执行，但是会在DOMContentLoaded事件之前。defer可以确保脚本按文档顺序执行，即使后面的先加载完成，也要等前面的先执行。适用于需要整个DOM的脚本，以及需要保证脚本相对执行顺序的时候。

【link】`<link>`表示当前文档与外部资源的关系，最经常被用于添加 css(`rel=stylesheet`) 和 icon(`rel=icon`) 图标。`rel=preload`告诉浏览器要预加载这个资源，`rel=prefetch`告诉浏览器这个资源要在空闲的时候加载，通常是在页面加载完成后加载这些未来可能会被访问的资源，通过Vue-cli打包的项目中懒加载的chunk代码就会被加上prefetch。`as`属性用于告诉浏览器资源类型，通常结合preload一起使用。`href`属性表示资源的地址。`crossorigin`属性表示该资源是否应该使用一个CORS请求来获取。`media`属性设置媒体类型/媒体查询，只有符合媒体条件的情况下才会加载这个资源。



## CSS

【伪类和伪元素】伪类使用一个冒号，表示类的状态例如 :focus、:hover，或者用于选出特定的类例如 ~~:after~~（在css3中被替换为::after）、:nth-child()、:nth-of-type()。伪元素使用两个冒号，常见的例如::before、::after、::first-line等等

【css权重优先级】正常而言范围越小优先级越高，也有些运算符如+~>等，不会影响优先级。优先级从高到低的排列，!important、行内样式、id、class或伪类、元素或伪元素、通配符或相邻选择器等等

【transition 和 animation】`transition`为一个元素在不同状态之间切换的时候定义不同的过渡效果，更强调状态的变化，通常需要外部的触发，例如显示或隐藏之间的切换（transition不能对display生效，只能对visibility生效）。`animation`被用来指定一组或多组动画，可以自动触发并无限播放，通过`@keyframes`来定义动画中的各个状态（to、from、百分比）。

【动画函数】 贝塞尔曲线`cubic-bezier()`，常用可选值有ease、ease-in、ease-out、ease-in-out、linear 

【渐变】`linear-gradirent` 线性渐变、`radial-gradirent` 径向渐变、`repeating-linear-gradient` 重复渐变

【@import】@import属于css语法，要等到页面加载完成才会被加载。性能比link差，而且多个@import会导致下载顺序紊乱。

### 布局

【盒模型】两张盒模型。默认是`content-box`标准盒模型，元素实际占用的空间由设置的宽高和padding以及border的大小组成；`border-box` IE盒模型，设置的宽高就是实际占用的空间大小，包含了padding和border的大小。

【margin】四个方向上，padding和margin的大小都取决于父元素的宽度，没有的话会接着网上找一直到100%宽度的body。相邻的margin会发生重叠，取二者最大的那个。margin不是子元素的真实空间，所以不会撑开父元素的高度，除非将父元素创建为BFC。margin通常被用来设置兄弟之间的间隔，而padding适合用于父子元素之间的间距。

【border和outline】outline不占据空间大小，可以理解为只是一个单独的图层，以覆盖元素的方式进行显示。

【window的 innerWidth、outerWidth】`window.innerWidth` 表示视口viewpoint宽高，控制台高度、书签页高度会影响；`window.outerWidth` 表示浏览器窗口宽高，受浏览器缩放大小影响。

【screen.width、screen.availWidth】`screen.width` 表示屏幕宽高；`screen.availWidth` 表示屏幕可用宽高，不受浏览器缩放大小影响，和书签栏高度、标签页高度等等有关

【元素的 height、clientHeight、offsetHeight、scrollHeight】`clientWidth` 表示内部宽高（=设定的width + padding）、`offsetWidth` 为布局宽高（= clientWidth + border + 滚动条）、`scrollWidth` 表示内容宽高（包含overflow隐藏(scroll/hidden)的内容）

---

【文档流和文本流】文档流，Normal Flow是相对于盒子模型的概念，包含了BFC块状格式上下文、inline格式上下文以及relative相对位置。文本流，text flow则是相对文字段落的概念。

【display属性】inline (无法设置宽度和高度，只能设置左右方向的margin和padding，但是padding, margin, border都不会占据文本流，因此会和其它元素发生重叠)、block (会将自己的width填充到整个窗口100%的宽度大小)、inline-block (可以像inline一样水平排列，但是又可以像block一样设置元素的宽高、margin、padding)、contents (会使元素本身不被渲染，但是子元素和伪类元素会被正常渲染)。还有none、flex、grid、table等等

【position属性】static (元素处于正常流的位置，没有定位，top/right/bottom/left、z-index均无效)、relative (相对static正常位置时的偏移，但不改变布局，正常位置占据的文档流不会变动)、absolute (相对于最近的已定位(非static)的父/祖先元素；会改变布局，元素脱离文档流，后面的元素会挤占它的空间，发生重叠)、fixed (相对浏览器窗口，元素脱离文档流)、sticky (需要指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效)

【float】float、absolute、fixed 属性可以使一个元素脱离标准文档流，但其中float不会脱离文本流，也就是后面的文本会跟在float的元素后面，而不是被覆盖。float 需要使用块布局，会将 display 值为 inline 或 table 的布局，自动转为block。经典的三列布局的圣杯布局和双飞翼布局，都是基于float来实现。

【清除浮动】清除浮动有几种方式，但是要考虑撑起父元素的高度。可以在浮动元素的父元素后面，添加一个空的div或者使用伪类追加一个隐藏的block，然后给它使用 clear:both 清除浮动；还有一种方式是给父元素创建BFC，通常是设置overflow属性，只要不为visible就可以创建。或者设置display属性，inline-block、flex、grid、table等等，都会创建BFC。

【BFC】Block Formatting Context 块级格式上下文，一种布局方式。BFC区域内部和外部的文档流和文本流互不影响，BFC的高度包含了内部浮动元素的高度。创建方式：设置不为visible的overflow属性；设置display属性，inline-block、flex、grid、table等；float、或者position为absolute或fixed等脱离文档流的方式。BFC的用途有，父元素的高度包含子元素的margin、以及浮动元素的高度，还可以避免margin发生重叠。

[Flex布局](https://lins403.github.io/vuepress-doc/interview/basic/css2.html#flex%E5%B8%83%E5%B1%80)

[Grid布局](https://lins403.github.io/vuepress-doc/interview/basic/css2.html#grid%E5%B8%83%E5%B1%80)

[居中布局](https://lins403.github.io/vuepress-doc/interview/basic/css2.html#%E5%B1%85%E4%B8%AD%E5%B8%83%E5%B1%80)

【多列布局】使用`column-count`属性，或者使用flex设置flex-direction为column

【瀑布流布局】设置一个固定高度的容器，使用flex设置flex-direction为column，当列的高度不足时就会换行，但是又通过nth-child伪类的方式，给每个子元素设置order，让它们按顺序沿着水平方向布局。

【隐藏的3种方式】`opacity: 0;`不改变布局，绑定的事件依然会触发；`visibility: hidden;`不改变布局，事件不会触发；

`display: none;`会改变页面布局

【层叠上下文】元素重叠时渲染的层级效果。要符合既定条件才会产生层叠上下文，层叠上下文的层叠优先级最低。首先判断两个层叠的元素是否在同一个层叠上下文，如果是则比较元素的z-index大小，如果不是则要先比较层叠上下文的z-index。

#### 响应式布局

【像素比】`DPI` 表示物理设备的单位像素密度，而 `window.devicePixelRatio` 表示物理像素与逻辑像素 (CSS像素)之间的缩放系数。对于分辨率从 1920×1080 转换为 640×320 的手机设备，window.devicePixelRatio 的值就是 3。这样一来，12 像素(CSS 像素)的文字实际上就会用 36 像素的物理像素来显示。

【rem】rem（font size of the root element）相对于根元素`<html>` 的 font-size 计算值的倍数

【Viewpoint视窗】css3中引入，在这之前常用的方案是通过js去动态设置rem的大小，来模拟viewpoint的效果，以实现的响应式布局。常用单位有vh相对于视窗的高度、vw相对于视窗的宽度、vmin取vw和vh中的较小值、vmax取vw和vh中的较大值。可以利用HTML中的 `<meta>` 标签对 viewport 进行控制。响应式布局的方案中通常将px换算成vw，`1 px = (1/ 设备分辨率) *100 vw`

```scss
// 例如750的分辨率
750px = 100vw
1px = 100 / 750 vw = 0.13333333333333333vw

html {
	font-size: 13.333333vw	//100px
}
body{
	font-size: 0.16rem;	//16px
}
```

我的响应式方案：@media+vw+rem（详细化适配不同设备，在 `@media` 中直接使用 `vw` 来设置根 html 的 font-size，css中的真实尺寸用 `rem` 表示）。元素的font-size用 rem 避免混乱，宽度可以用百分比，高度有时候用vh例如内容不需要滚动的页面、border用px，其他元素基本都用em。图片的响应式可以通过srcset属性来设置，但是通过max-width样式设置会更简便。字体的响应式使用clamp函数，将值的大小限制在一个范围内。不考虑兼容性的情况下，优先使用 flex 或 grid 布局。

### 模块化

【CSS Modules】把css视作一个独立的模块，将css内容导出为一个对象，用js来加载。

【PostCSS】postcss把css转换成js能处理的数据格式，然后将接口提供给js插件，让js插件来完成css的拓展功能，例如lint校验、使用变量、mixins等等。最常用的是autofixer插件，会根据browserify配置支持的浏览器，来自动给css添加浏览器特定的前缀。stylelint插件校验css代码，然后还有用来转换新语法的preset插件等等

【less、sass、stylus】Less 和 Stylus 都是用 JavaScript 写的，Sass 用 Dart 写的，但是npm的发布的package也是js，所以都能直接运行。语法上Stylus采用缩进语法，语法功能偏简洁；less和sass的语法都像css，但是sass更面向编程，功能更加强大， 比如还支持ifelse条件语句、extend继承、自定义函数等等less并不支持的。趋势热度上，sass热度最高，less次之，所以我选sass，然后3.0以后sass就改名为scss了