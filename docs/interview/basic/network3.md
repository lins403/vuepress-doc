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

只允许URL路径不同，端口、协议、主机不同，都算是跨域

[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

cookie只允许同源，浏览器会在http请求中带上cookie，所以禁止跨域可以保证cookie与用户信息的相对安全性

### JSONP

- JSON with Padding

- 利用html中 <u>img 和 script 标签</u> 的源文件允许跨域的特性

- 只能是get请求

### iframe

使用 <u>空的 iframe + form 表单</u> 实现 POST 请求

### CORS

后端在响应头上配置，前端不用修改。

- 简单请求直接访问，浏览器会在头信息上添加一个 `origin` 字段，然后请求服务器的CORS接口。

- 复杂请求会多一次预检请求，返回状态码204，通过预检请求后就像简单请求一样正常访问。

[跨域资源共享 CORS 详解](https://www.ruanyifeng.com/blog/2016/04/cors.html)

### 代理

- nginx

- webpack devserver

---

正向代理和反向代理的概念

- 正向代理：客户端的代理，为客户端服务的，隐藏客户端，一般针对的是和所有的服务器，而不是特定的（所以我理解devServer也是反向代理，科学上网才是正向代理）
- 反向代理：服务端的代理，隐藏服务器

## 二、XHR、Promise、Ajax、Axios、Fetch

### XHR

- 通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。

### AJAX

- Asynchronous JavaScript And XML

- 基于XHR的技术实践

### jQuery ajax

- 基于原生的XHR开发

### Promise

- 本质上就是一个函数的返回对象
- 为异步操作提供统一接口，作为异步操作和回调函数的中介代理层，可以让异步回调像同步一样的代码风格，不用陷入回调地狱

### Fetch

- Fetch API 是原生的JS，基于ES6的import设计，是现代浏览器引入的作为XHR的替代品
- 返回一个Promise，无法处理HTTP状态码，错误处理也比较麻烦
- Fetch发送post请求的时候，总是发送2次，第一次状态码是204，实际上是发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求

### Axios

- 基于Promise的http库，可以用在浏览器和nodejs中，底层实现还是基于XHR对象

## 三、网络攻击

### 类型

- 病毒
- DDOS
  - DDoS（distributed denial-of-service attack），攻击目标网站至瘫痪、资源耗尽
- 钓鱼

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

### CSRF

CSRF（Cross-site request forgery, 跨站点请求伪造），黑客可以设法伪造带有正确 Cookie 的 HTTP 请求，就是利用用户的cookie骗过目标网站，让网站以为是用户自己的操作。

- xss通过在网站植入恶意脚本，骗取的是用户对网站的信任；
- csrf（骗取用户点击例如广告等然后盗取cookie）伪造真实用户的请求，骗取的是网站对用户（网页浏览器）的信任

cookie本身不能跨域，但是请求可能是CORS请求（Access-Control-Allow-Origin），而允许跨域的情况下浏览器的请求都会带上cookie，所以cookie不是被获取，而是被使用

#### 防御策略

- 禁止外域使用cookie
  
  - 同源检测（Header中的Referer，来源URL地址，告诉服务器用户访问当前资源之前的位置）
  - 设置cookie的samesite属性（设置为Strict则禁止第三方使用该cookie，为Lax则禁止get以外的请求）

- 添加校验token

### 点击劫持

click Jacking，通常是用iframe或图片覆盖，伪造骗取用户点击

防御：限制iframe的跨域；设置cookie的samesite属性

# 参考

[不要再问我跨域的问题了](https://segmentfault.com/a/1190000015597029)

[前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)

[前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)