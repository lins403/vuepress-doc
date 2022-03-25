# 网络安全

## 一、跨域

### 域名

```
主机名.次级域名.顶级域名.根域名
www.baidu.com.root
# 域名解析从右向左
```

#### 域名记录的类型

DNS，*Domain Name System*，基于 UDP 协议

- A记录（Address），把一个域名解析到一个 IP 地址
- CNAME记录（Canonical Name），把一个域名解析到另外一个域名，可应用于CDN服务
- NS 记录（Name Server，域名服务器），返回保存下一级域名信息的服务器地址，只能设置为域名而非IP地址

### 同源策略

浏览器的同源策略下，一个域下的 js 脚本在未经允许的情况下，不能够访问和修改另一个域的内容。只允许URL路径不同，协议、域名、主机名(计算机名+域名) 、端口不同，都算是跨域

cookie只允许同源，浏览器会在http请求中带上cookie，所以禁止跨域可以保证cookie与用户信息的相对安全性

### JSONP

- JSON with Padding

- 利用html中 <u>img 和 script 标签</u> 的源文件，即src属性允许跨域的特性

- 只能是get请求

### iframe

使用 <u>空的 iframe + form 表单</u> 实现 POST 请求

### CORS

CORS，Cross-Origin Resource Sharing，<u>跨域资源共享</u>，定义了浏览器与服务器如何实现跨源通信。 

CORS 背后的基本思路就是使用自定义的 HTTP 头部允许浏览器和服务器相互了解，以确实请求或响应应该成功还是失败。

后端在响应头上配置，前端不用修改。

浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）

只要同时满足以下两大条件，就属于简单请求。

> （1) 请求方法是以下三种方法之一：
>
> - HEAD
> - GET
> - POST
>
> （2）HTTP的头信息不超出以下几种字段：
>
> - Accept
> - Accept-Language
> - Content-Language
> - Last-Event-ID
> - Content-Type：只限于三个值`application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

#### 简单请求

简单请求直接访问，浏览器会在头信息上添加一个 `origin` 字段，然后请求服务器的CORS接口。

如果服务器决定响应请求，那么应该发送 `Access-Control-Allow-Origin` 头部。

#### 复杂请求

复杂请求（允许使用自定义头部、除 GET 和 POST 之外的方法，以及不同请求体内容类型）

- 复杂请求会多一次预检请求(preflighted request)，服务器可以确定是否允许这种类型的请求。
- 返回状态码204，通过预检请求后就像简单请求一样正常访问。
- 预检请求返回后，结果会按响应指定的时间缓存一段时间。换句话说，只有第一次发送这种类型的 请求时才会多发送一次额外的 HTTP 请求。

### `crossorigin`

在 HTML5 中，一些 HTML 元素提供了对 CORS 的支持， 例如 `<audio>`、 `<img>`、 `<link>`、 `<script>`和 `<video>` 均有一个跨域属性 (`crossOrigin` property)，它允许你配置元素获取数据的 CORS 请求。 

script标签的src本就支持跨域，但设置 `crossorigin`属性后相当于开启了CORS校验。script标签去请求资源的时候request会带上origin头，然后会要求服务器进行cors校验。

- `anonymous`  对此元素的 CORS 请求将不设置凭据标志。
  - 同域会带上cookie，跨域请求则不会带上cookie
- `use-credentials` 对此元素的 CORS 请求将设置凭证标志；这意味着请求将提供凭据。
  - 跨域也会带上cookie，这种情况下跨域的response header 需要设置`'Access-Control-Allow-Credentials' = true`，否则cors失败。

设置了crossorigin以后，跨域脚本就允许被我们访问，当我们引用的资源在报错的时候，onerror事件就能得到完整的错误信息，而不只是一个script error。

### 代理

- nginx
- webpack devserver 使用的nodejs中间件代理 http-proxy-middleware

正向代理和反向代理的概念

- 正向代理：客户端的代理，为客户端服务的，隐藏客户端，一般针对的是和所有的服务器，而不是特定的（所以我理解devServer也是反向代理，科学上网才是正向代理）
  - 访问原来不能访问的资源、隐藏客户端信息、做缓存以加速资源访问、授权客户端 
- 反向代理：服务端的代理，隐藏服务器
  - 保证内网的安全（如果服务器部署在内网，则可以反向代理作为公网访问地址）、负载均衡

### 其它

- postMessage 跨域
- WebSocket 协议跨域

## 二、XHR、Promise、Ajax、Axios、Fetch

### XHR

- 通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。

### AJAX

- Asynchronous JavaScript And XML
  - 指的是通过javascript的异步通信，从服务器获取XML文档，并从中提取数据，通过DOM动态更新到当前网页上，只需要局部刷新而不用刷新整个页面
- 基于XHR的技术实践

### jQuery ajax

- 基于原生的XHR开发

### Promise

- 本质上就是一个函数的返回对象
- 为异步操作提供统一接口，作为异步操作和回调函数的中介代理层，可以让异步回调像同步一样的代码风格，不用陷入回调地狱

### Fetch

- Fetch API 是原生的 JavaScript 方法，基于 ES6 的 import 设计，是现代浏览器引入的作为 XHR 的替代品。XMLHttpRequest 可以选择异步，而 Fetch API 则必须是异步
- 返回一个Promise，无法自动通过 HTTP 状态码来表示成功与否，需要去自定义处理，错误处理也比较麻烦
- Fetch 发送 post 请求的时候，总是发送2次，第一次状态码是204，实际上是发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求
- 跨域请求比较方便，只需要在配置中添加 `mode： 'no-cors'`

```js
// `fetch()`返回一个promise
fetch('url')
  .then((response) => {
  if (!response.ok) {
    console.log(response.status)
    throw Error(response.statusText);
  }
  return response.json()
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// post请求，发送JSON数据
let payload = JSON.stringify({
  foo: 'bar'
});
//let payload = 'foo=bar&baz=qux';
let jsonHeaders = new Headers({
  'Content-Type': 'application/json'
});
fetch('/send-me-json', {
  method: 'POST', // 发送请求体时必须使用一种 HTTP 方法 body: payload,
  headers: jsonHeaders
});
```

### Axios

- 基于Promise的http库，可以用在浏览器和nodejs中，底层实现还是对XHR对象的封装

### Content-Type

```js
{
  'Content-Type': 'application/json'		//后台使用@RequestBody注解
  'Content-Type': 'application/x-ww-form-urlencoder'		//后台使用@RequestParam注解，前端需要进行序列化，例如使用qs.stringify()
  'Content-Type': 'multipart/form-data'
}
```

> encodeURIComponent不能序列化嵌套对象，qs.stringify()可以

## 三、网络攻击

### 类型

1. 病毒
2. 钓鱼
3. DDOS（distributed denial-of-service attack），攻击目标网站至瘫痪、资源耗尽

### XSS

xss（Cross-site scripting，跨站脚本攻击），是一种代码注入攻击。

黑客在目标网站注入恶意脚本，用户访问操作目标网站时，会在自己的浏览器上运行恶意脚本，进而被窃取敏感信息如cookie、sessionId等，被用于恶意操作

#### 攻击类型

- 存储型
  - 将恶意代码提交到目标网站的数据库中
- 反射型
  - 攻击者构造出特殊的 URL，其中包含恶意代码。如网站搜索、跳转等
- DOM型
  - 客户端 JavaScript 取出 URL 中的恶意代码并执行
  - 属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞

#### 防御策略

- 防止攻击者提交恶意代码（输入过滤）

- 防止浏览器执行~（开发者慎用 innerHTML、document.write()、v-html 等）

- 启用 CSP (Content Security Policy，白名单机制，HTTP 头信息的`Content-Security-Policy`的字段）

  - 让服务器在https headers中返回Content-Security-Policy，或者通过 `<meta>` 元素来配置

    ```js
    // 一个网站管理者想要所有内容均来自站点的同一个源
    Content-Security-Policy: default-src 'self'
    
    // 添加受信任的域名
    Content-Security-Policy: default-src 'self' *.trusted.com
    
    // 允许网页应用的用户在他们自己的内容中包含来自任何源的图片, 但是限制音频或视频需从信任的资源提供者获得，所有脚本必须从特定主机服务器获取可信的代码
    Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
    ```

    ```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
    ```

    

  

### CSRF

CSRF（Cross-site request forgery, 跨站点请求伪造），黑客可以设法伪造带有正确 Cookie 的 HTTP 请求，就是利用用户的cookie骗过目标网站，让网站以为是用户自己的操作。

- `xss`通过在网站植入恶意脚本，骗取的是用户对网站的信任；
- `csrf`（骗取用户点击例如广告等然后盗取cookie）伪造真实用户的请求，骗取的是网站对用户（网页浏览器）的信任

cookie本身不能跨域，但是请求可能是CORS请求（Access-Control-Allow-Origin），而允许跨域的情况下浏览器的请求都会带上cookie，所以cookie不是被获取，而是被使用

#### 防御策略

- 禁止外域使用cookie
  
  - 同源检测（Header中的 `Referer`，来源URL地址，告诉服务器用户访问当前资源之前的位置）
  - 设置 cookie 的 `samesite` 属性（设置为Strict则禁止第三方使用该cookie，为Lax则禁止get以外的请求）

- 添加校验token

### 点击劫持

click Jacking，通常是用iframe或图片覆盖，伪造骗取用户点击

防御：限制 iframe 的跨域；设置 cookie 的 samesite 属性

# 参考

[不要再问我跨域的问题了](https://segmentfault.com/a/1190000015597029)

[前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)

[前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

[跨域资源共享 CORS 详解](https://www.ruanyifeng.com/blog/2016/04/cors.html)