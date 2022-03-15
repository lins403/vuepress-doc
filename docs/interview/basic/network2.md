# Cookie、Session、Token、Storage

:::tip 摘要

会话跟踪技术，还是比较紊乱和模糊，会持续改进这篇内容

1. cookie
2. session
3. cookie和session的认证方式与缺陷
4. token：Access Token 和 Refresh Token
5. jwt的结构，和token的区别
6. oauth
7. sessionStorage和localStorage的异同
8. 浏览器强缓存、协商缓存

:::

## 认证、授权和凭证

认证（Authentication）

- 验证当前用户的身份，如用户登录、短信验证

授权（Authorization）

- 实现授权的方式有：cookie、session、token、OAuth
- 请求头header中的Authorization通常存放的是jwt

凭证（Credentials）

- 实现认证和授权的前提
- 例如银行办理手续，银行卡密码是认证，而身份证是凭证

### 常见的前后端鉴权方式

- Session-Cookie
- Token 验证（包括 JWT，SSO）
- OAuth2.0（开放授权，如微信登录）

（SSO，Single sign-on，单点登录，在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。）

## Cookie

```
console.log(document.cookie)
```

> cookie 是服务器提供的一种用于维护会话状态信息的数据，通过服务器发送到浏览器，浏览器保存在本地，当下一次有同源的请求时，将保存的 cookie 值添加到请求头部，发送给服务端。这可以用来实现记录用户登录状态等功能。cookie 一般可以存储 4k 大小的数据，并且只能够被同源的网页所共享访问。
>
> 服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。一条cookie 包括了5个属性值 expires、domain、path、secure、HttpOnly。其中 expires 指定了 cookie 失效的时间，domain 是域名、path是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问。secure 规定了 cookie 只能在确保安全的情况下传输，HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。

### 用途

- **客户端**保持状态
- cookie默认随着http请求一起发送，除了用于认证授权，cookie还可用于存放用户的操作信息，改善用户体验，例如存放账号密码、用户偏好等等。使用github的cookie，有效期内访问授权登录的网站就不用重新授权登录
- 重要属性：domain、path、maxAgecookie、expires、secure、httpOnly
- 尽量不要在cookie中放入敏感信息；控制cookie的生命周期；加密cookie以降低被破解的可能性

### 特点

- 服务端通过HTTP响应头set-cookie，或客户端使用 JavaScript 设置
- 不可跨域，每个 cookie 都会绑定单一的域名，而一级域名和二级域名之间是允许共享使用的
- 只要 `Domain` 和 `Path` 一致情况下，不同 Tab 之间即可相互读取
- 移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token
- 使用Cookie需要防范XSS攻击（`secure`：只允许请求为https时发送cookie，`httponly`：禁止JS脚本访问cookie）
- 数量和长度的限制：很多浏览器例如IE和Firefox会限制同一个站点的cookie数量不能超过50个，保存的数据不能超过4k

### cookie和webStorage

- cookie设置的value值不能超过4k，而且浏览器一般对同个站点也有cookie数量的限制；webStorage通常为5M
- cookie会伴随着request一起发送，但webStorage并不会
- server端也能使用cookie，但webStorage只能用在浏览器

### js-cookie

因为在 JavaScript 中读写 cookie 不是很直观，需要设置成拼接字符串，而且读写还需要进行URL编码，因此使用`js-cookie`库

```js
import Cookies from 'js-cookie'
Cookies.get()
Cookies.set('name', 'value', { expires: 365, path: '' })
Cookies.get('name')
Cookies.remove('name', { path: '' })	//如果添加时设置了path或domain，那么删除时也需要指定
```

## Session

- **服务端**保持状态
- 比cookie更适合用于存放重要信息
- Session存储在服务器上，可以放在文件、数据库、Redis或内存中，一般只将**session的id**存储在cookie中。
- session 的运行依赖 session id，而 SESSIONID 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但可通过其它方式实现，比如**在 url 中传递** session_id「sid」）
- session 需要手动删除，通常服务器会在用户退出登录时删除，或者会为 session 设置一个失效时间，以便把 session 删除，节省存储空间

### cookie和session认证

#### 用户认证的一般流程

1、用户向服务器发送用户名和密码。

2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。

3、服务器向用户返回一个 session_id，写入用户的 Cookie。

4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。

5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。

#### 认证方式的缺陷

1. 扩展性
  
   - 用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上，这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。这也意味着限制了应用的扩展能力。

2. 安全性：
  
   - 不能跨域，若是支持跨域则容易遭受 CSRF 此类盗用cookie的网络攻击

## token

> 后端将token传给前端，前端保存在本地，以后需要权限才可以访问的时候，就可以在请求头上携带这个token

- `Access Token`
  - 服务端验证成功后，签发一个 token（将登录凭证做数字签名，加密之后得到token），把这个 token 发送给客户端。
  - 客户端收到 token 以后，将token保存在本地，比如cookie里或者 localStorage 里，以后每次请都携带这个token
  - 服务端验证请求里的token串（做解密和签名认证，判断其有效性），如果验证成功，就向客户端返回请求的数据
  
- `Refresh Token`：用来刷新 access token

### token 和 session 的区别

- session_id跟token的作用比较类似
- session使服务端有状态化，可以记录会话信息；而token是凭证，使服务端无状态化，不会存储会话信息。

> 做的项目中存在本地（cookie）的是token而没用session_id，token值用的是前后端约定的字段名来传输。在登录成功后，前端将获取到的accessToken和refreshToken存到cookie中，在之后的每次请求中添加到请求头header的`xxx-Auth`属性上，交由后端验证，验证成功则返回请求的数据。

## JWT

JSON Web Token（简称 JWT）是目前最流行的 **跨域认证** 解决方案。是一种认证授权机制。

结构：`Header.Payload.Signature`

- Header：一个 JSON 对象，描述 JWT 的元数据
- Payload：一个 JSON 对象，用来存放实际需要传递的数据
- Signature：对前两部分的签名，防止数据篡改

一般是在请求头里加入`Authorization`，并加上`Bearer`标注

```js
axios.get('/api/list', {
  headers: {
    Authorization: 'Bearer ' + getToken()
  }
})
```

jwt与token不一样在于：JWT 自包含了用户信息和加密的数据，可以减少查询数据库

### 优点

1. 相较 token 而言，JWT 可以在 payload 部分存放一些业务逻辑所必要的非敏感信息，以减少数据库查询

2. 相较session而言，JWT 不需要在服务端保持会话信息，减少内存占用且易于服务端扩展

3. 结构简单体积小，便于传输，以及 JSON 的多语言通用性

## OAuth

Open Authorization，开放授权

```js
// 使用微信第三方登录的模板

const appid = 'xxxxx'

// 授权成功以后的重定向地址
const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')

// 拼接微信的授权认证地址
const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'

// 新窗口打开拼接的地址
openWindow(url, thirdpart, 540, 540)
```

## sessionStorage 和 localStorage

Storage 类型只能存储字符串。非字符串数据在存储之前会自动转换为字符串（ toString() ）。

- `sessionStorage`
  - 会话级别的存储。
  - 跨会话的存储机制，浏览器当前窗口关闭后自动清除
- `localStorage`
  - 持久化的本地存储。
  - 永久存储机制，保存在浏览器本地，数据不会过期也不会被清除，浏览器重启后依然还在
  - 会一直保留至通过 JavaScript 删除，或者用户清除浏览器缓存。
  - 和cookie一样在所有同源标签页和窗口之间共享
- 都有容量大小限制，只支持字符串

| Browser    | localStorage | sessionStorage |
| ---------- | ------------ | -------------- |
| Mac Chrome | 约5M          | 约5M            |
| IOS WeChat | 约2.5M        | 大于10M          |
| Mac Safria | 约2.5M        | 大于10M          |

关于 sessionStorage 的共享

> ...data stored in sessionStorage gets cleared <u>when the page session ends</u>...
> 
> **Opening a page in a new tab or window will cause a new session to be initiated**, which differs from how session cookies work.
> 
> > 通过点击 `target="_blank"` 链接（或者用了 `window.open`）打开的新标签页之间是属于同一个 session 的，而如果新开一个独立的标签页访问，则总是会初始化一个新的 session.

### 使用

```
clear()
getItem(name)
key(index)
removeItem(name)
setItem(name, value)
```

所有现代浏览器在实现存储写入时都使用了同步阻塞方式，因此数据会被立即提交到存储。通过 Web Storage 写入的任何数据都可以立即被读取

```js
// 使用方法存储数据 
sessionStorage.setItem("name", "Nicholas");

// 使用属性存储数据
sessionStorage.book = "Professional JavaScript";
```

在Storage.prototype上自定义方法实现 [给localStorage设置一个过期时间](https://www.jianshu.com/p/50b4c89d3be3)

## 浏览器缓存

针对 HTTP get 请求的缓存

- 强缓存
- 协商缓存
  - 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程


用户请求资源，浏览器发送请求前，检查是否存在缓存，如果存在，则先根据 response header 中的 `Cache-Control` 和 `Expires` 判断缓存是否过期，同时记录header中的 `etag` 和 `last-modified`，如果没有过期则直接使用浏览器缓存，如果过期，将 etag 值作为 `If-None-Match`，last-modified 值作为 `if-modified-since`，添加到request header 中发送给服务器校验。如果服务器判断缓存不需要更新，则会返还304状态码(Not Modified资源无更新)，不返回任何资源，让浏览器直接使用缓存

- Expires: Wed, 19 Oct 2022 04:54:02 GMT（使用基于服务器的绝对时间）
- Cache-Control: max-age=31536000（使用相对时间，同时使用时优先级更高）
  - Expires 是 http1.0 中的方式，因为它的一些缺点，在 http 1.1 中提出了一个新的头部属性就是 Cache-Control 属性， 它提供了对资源的缓存的更精确的控制。

精确度：Etag 要优于 Last-Modified（后者只能精确到秒的颗粒度）

优先级：服务器校验优先考虑 Etag（例如适用于文件内容未修改但是修改时间变动的情况）

性能上：Etag 要逊于 Last-Modified（etag需要每次服务端的读写，后者是个常量只要读取）

> 【浏览器缓存】
>
> 浏览器缓存是针对http get请求的一种优化策略。当浏览器收到资源请求的响应后，在一段时间内都会保留它的副本，如果在设定的有效时间内，对这份资源再次请求，那么浏览器就会直接使用缓存的副本，而不用再发起一次完整的请求。好处是可以提高页面的打开速度，并降低对网络带宽的消耗。
>
> 浏览器缓存策略由服务器或代理服务器指定，分为强缓存策略和协商缓存策略。
>
> ​	使用强缓存策略时，如果缓存资源还有效，就直接使用缓存资源，不必再向浏览器发起请求。强缓存策略主要通过http headers中的 Expires 属性或者 Cache-Control 属性。后者是HTTP1.1中新引入的，精确度更高，用于替换前者，同时使用时后者的优先级也更高。先从内存加载缓存(from cache)，如果没有，则从磁盘中加载缓存(from disk)
>
> ​	如果缓存已经过期，那么就需要使用协商缓存。浏览器会向服务器发送一个请求，如果服务器确认资源没有发生修改，则返回一个304状态，让浏览器使用本地的缓存副本。如果资源发生变化，就返回修改后的资源给客户端。协商缓存的设置是通过http headers 中的 Last-Modified 属性和 Etag 属性。`Last-Modified`值表示资源上一次更改的时间，它只能精确到秒级。而 `Etag` 是资源的唯一标识符，资源变化时这个值也会变化，所以用Etag判断会更加准确，优先级更高，但是性能比前者稍差。浏览器为了让服务器判断资源是否做了修改，就将前一次请求的response header 中的 last-modified 值作为 `if-modified-since`，将 etag 值作为 `If-None-Match`，添加到request header中，发送给服务器校验。同时使用时，If-None-Match的优先级别更高。
>
> 【如何禁用浏览器缓存】
>
> 客户端：
>
> - 在 html 页面前面加 meta 标签
>
>   ```html
>   <meta http-equiv="pragram" content="no-cache">
>   <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
>   ```
>
> - Ajax请求的request header中添加 `Cache-control: no-cache`或者`"If-Modified-Since","0"`
> - 在URL后面加上一个属性，属性值使用一个随机数或者是时间戳
> - `CTRL+Shift+R`手动刷新
>
> 服务器：
>
> - 给reponse header添加 `Cache-Control no-cache`或者`etag off`等等许多方式
>
> - 代理服务器nginx也能设置
>
>   ```nginx
>   add_header Cache-Control "no-cache, no-store";
>   ```
>
> - webpack中给css 和 js 的名字都加上哈希值，就会被当成新的资源而不会使用缓存，vue-cli 里已默认配置。

# 参考

[傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)

[什么是 JWT -- JSON WEB TOKEN - 简书](https://www.jianshu.com/p/576dbf44b2ae)

[sessionStorage 的数据会在同一网站的多个标签页之间共享吗 · Issue #66 · lmk123/blog · GitHub](https://github.com/lmk123/blog/issues/66)

[浏览器的localStorage/sessionStorage的大小](https://juejin.cn/post/6933389518997291015)