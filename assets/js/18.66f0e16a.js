(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{418:function(t,s,e){"use strict";e.r(s);var o=e(43),a=Object(o.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cookie、session、token、storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie、session、token、storage"}},[t._v("#")]),t._v(" Cookie、Session、Token、Storage")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),e("p",[t._v("会话跟踪技术，还是比较紊乱和模糊，会持续改进这篇内容")]),t._v(" "),e("ol",[e("li",[t._v("cookie")]),t._v(" "),e("li",[t._v("session")]),t._v(" "),e("li",[t._v("cookie和session的结合使用")]),t._v(" "),e("li",[t._v("token：Access Token 和 Refresh Token")]),t._v(" "),e("li",[t._v("jwt的结构，和token的区别")]),t._v(" "),e("li",[t._v("oauth")]),t._v(" "),e("li",[t._v("sessionStorage和localStorage的异同")]),t._v(" "),e("li",[t._v("浏览器强缓存、协商缓存")])])]),t._v(" "),e("h2",{attrs:{id:"认证、授权和凭证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证、授权和凭证"}},[t._v("#")]),t._v(" 认证、授权和凭证")]),t._v(" "),e("p",[t._v("认证（Authentication）")]),t._v(" "),e("ul",[e("li",[t._v("验证当前用户的身份，如用户登录、短信验证")])]),t._v(" "),e("p",[t._v("授权（Authorization）")]),t._v(" "),e("ul",[e("li",[t._v("实现授权的方式有：cookie、session、token、OAuth")]),t._v(" "),e("li",[t._v("请求头header中的Authorization通常存放的是jwt")])]),t._v(" "),e("p",[t._v("凭证（Credentials）")]),t._v(" "),e("ul",[e("li",[t._v("实现认证和授权的前提")]),t._v(" "),e("li",[t._v("如银行办理手续，银行卡密码是认证，而身份证是凭证")])]),t._v(" "),e("h3",{attrs:{id:"常见的前后端鉴权方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的前后端鉴权方式"}},[t._v("#")]),t._v(" 常见的前后端鉴权方式")]),t._v(" "),e("ul",[e("li",[t._v("Session-Cookie")]),t._v(" "),e("li",[t._v("Token 验证（包括 JWT，SSO）")]),t._v(" "),e("li",[t._v("OAuth2.0（开放授权，如微信登录）")])]),t._v(" "),e("p",[t._v("（SSO，单点登录，在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。）")]),t._v(" "),e("h2",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),e("h3",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("客户端")]),t._v("保持状态")]),t._v(" "),e("li",[t._v("cookie默认随着http请求一起发送，除了用于认证授权，cookie还可用于存放用户的操作信息，改善用户体验，例如存放账号密码、用户偏好等等。使用github的cookie，有效期内访问授权登录的网站就不用重新授权登录")]),t._v(" "),e("li",[t._v("重要属性：domain、path、maxAgecookie、expires、"),e("strong",[t._v("secure")]),t._v("、"),e("strong",[t._v("httpOnly")])])]),t._v(" "),e("h3",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[t._v("服务端通过HTTP响应头set-cookie，或客户端使用 JavaScript 设置")]),t._v(" "),e("li",[t._v("不可跨域，每个 cookie 都会绑定单一的域名，而一级域名和二级域名之间是允许共享使用的")]),t._v(" "),e("li",[t._v("移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token")]),t._v(" "),e("li",[t._v("使用Cookie需要防范XSS攻击（secure：只允许请求为https时发送cookie，httponly：禁止JS脚本访问cookie）")])]),t._v(" "),e("h3",{attrs:{id:"cookie和webstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie和webstorage"}},[t._v("#")]),t._v(" cookie和webStorage")]),t._v(" "),e("ul",[e("li",[t._v("cookie设置的value值不能超过4k，而且浏览器一般对同个站点也有cookie数量的限制；webStorage通常为5M")]),t._v(" "),e("li",[t._v("cookie会伴随着request一起发送，但webStorage并不会")]),t._v(" "),e("li",[t._v("server端也能使用cookie，但webStorage只能用在浏览器")])]),t._v(" "),e("h2",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("服务端")]),t._v("保持状态")])]),t._v(" "),e("li",[e("p",[t._v("Session存储在服务器上，可以放在文件、数据库、Redis或内存中，一般只将"),e("strong",[t._v("session的id")]),t._v("存储在cookie中。")])]),t._v(" "),e("li",[e("p",[t._v("session 的运行依赖 session id，而 sessionid 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但可通过其它方式实现，比如"),e("strong",[t._v("在 url 中传递")]),t._v(" session_id「sid」）")])]),t._v(" "),e("li",[e("p",[t._v("session 需要手动删除，通常服务器会在用户退出登录时删除，或者会为 session 设置一个失效时间，以便把 session 删除，节省存储空间")])])]),t._v(" "),e("h3",{attrs:{id:"cookie和session认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session认证"}},[t._v("#")]),t._v(" cookie和session认证")]),t._v(" "),e("p",[t._v("用户认证的一般流程：")]),t._v(" "),e("blockquote",[e("p",[t._v("1、用户向服务器发送用户名和密码。")]),t._v(" "),e("p",[t._v("2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。")]),t._v(" "),e("p",[t._v("3、服务器向用户返回一个 session_id，写入用户的 Cookie。")]),t._v(" "),e("p",[t._v("4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),t._v(" "),e("p",[t._v("5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")])]),t._v(" "),e("h2",{attrs:{id:"token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" token")]),t._v(" "),e("blockquote",[e("p",[t._v("后端将token传给前端，前端保存在本地，以后需要权限才可以访问的时候，就可以在请求头上携带这个token")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Access Token")]),t._v(" "),e("ul",[e("li",[t._v("服务端验证成功后，签发一个 token（将登录凭证做数字签名，加密之后得到token），把这个 token 发送给客户端。")]),t._v(" "),e("li",[t._v("客户端收到 token 以后，将token保存在本地，比如cookie里或者 localStorage 里，以后每次请都携带这个token")]),t._v(" "),e("li",[t._v("服务端验证请求里的token串（做解密和签名认证，判断其有效性），如果验证成功，就向客户端返回请求的数据")])])]),t._v(" "),e("li",[e("p",[t._v("Refresh Token：用来刷新 access token")])])]),t._v(" "),e("h3",{attrs:{id:"token-和-session-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-和-session-的区别"}},[t._v("#")]),t._v(" token 和 session 的区别")]),t._v(" "),e("ul",[e("li",[t._v("session_id跟token的作用比较类似")]),t._v(" "),e("li",[t._v("session使服务端有状态化，可以记录会话信息；而token是凭证，使服务端无状态化，不会存储会话信息。")])]),t._v(" "),e("blockquote",[e("p",[t._v("做的项目中存在本地（cookie）的是token而没用session_id，token值用的是前后端约定的字段名来传输。在登录成功后，前端将获取到的accessToken和refreshToken存到cookie中，在之后的每次请求中添加到请求头header上，交由后端验证，验证成功则返回请求的数据。")])]),t._v(" "),e("h2",{attrs:{id:"jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),e("p",[t._v("JSON Web Token（简称 JWT）是目前最流行的 "),e("strong",[t._v("跨域认证")]),t._v(" 解决方案。是一种认证授权机制。")]),t._v(" "),e("p",[t._v("结构："),e("code",[t._v("Header.Payload.Signature")])]),t._v(" "),e("ul",[e("li",[t._v("Header：一个 JSON 对象，描述 JWT 的元数据")]),t._v(" "),e("li",[t._v("Payload：一个 JSON 对象，用来存放实际需要传递的数据")]),t._v(" "),e("li",[t._v("Signature：对前两部分的签名，防止数据篡改")])]),t._v(" "),e("p",[t._v("jwt与token不一样在于：JWT 自包含了用户信息和加密的数据，可以减少查询数据库")]),t._v(" "),e("h2",{attrs:{id:"oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[t._v("#")]),t._v(" Oauth")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 授权成功以后的重定向地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" redirect_uri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx/redirect?redirect='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/auth-redirect'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拼接微信的授权认证地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://open.weixin.qq.com/connect/qrconnect?appid='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" appid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&redirect_uri='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" redirect_uri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&response_type=code&scope=snsapi_login#wechat_redirect'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新窗口打开拼接的地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("openWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thirdpart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("540")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("540")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"sessionstorage-和-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage-和-localstorage"}},[t._v("#")]),t._v(" sessionStorage 和 localStorage")]),t._v(" "),e("ul",[e("li",[t._v("sessionStorage\n"),e("ul",[e("li",[t._v("浏览器当前窗口关闭后自动清除")])])]),t._v(" "),e("li",[t._v("localStorage\n"),e("ul",[e("li",[t._v("保存在浏览器本地，数据不会过期也不会被清除，浏览器重启后依然还在")]),t._v(" "),e("li",[t._v("和cookie一样在所有同源标签页和窗口之间共享")])])]),t._v(" "),e("li",[t._v("都有容量大小限制，只支持字符串")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Browser")]),t._v(" "),e("th",[t._v("localStorage")]),t._v(" "),e("th",[t._v("sessionStorage")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Mac Chrome")]),t._v(" "),e("td",[t._v("约5M")]),t._v(" "),e("td",[t._v("约5M")])]),t._v(" "),e("tr",[e("td",[t._v("IOS WeChat")]),t._v(" "),e("td",[t._v("约2.5M")]),t._v(" "),e("td",[t._v("大于10M")])]),t._v(" "),e("tr",[e("td",[t._v("Mac Safria")]),t._v(" "),e("td",[t._v("约2.5M")]),t._v(" "),e("td",[t._v("大于10M")])])])]),t._v(" "),e("p",[t._v("TODO: 测试一下sessionStorage在不同标签页的共享和清理情况")]),t._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),e("p",[t._v("针对HTTP get请求的缓存")]),t._v(" "),e("ul",[e("li",[t._v("强缓存")]),t._v(" "),e("li",[t._v("协商缓存")])]),t._v(" "),e("p",[t._v("根据response header中的 "),e("code",[t._v("Cache-Control")]),t._v(" 和 "),e("code",[t._v("Expires")]),t._v(" 判断缓存是否过期，同时记录header中的 "),e("code",[t._v("etag")]),t._v(" 和 "),e("code",[t._v("last-modified")]),t._v("，如果没有过期则直接使用浏览器缓存，如果过期，将etag值作为 "),e("code",[t._v("If-None-Match")]),t._v("，last-modified值作为 "),e("code",[t._v("if-modified-since")]),t._v("，添加到request header中发送给服务器校验。如果服务器判断缓存不需要更新，则会返还304状态码(Not Modified资源无更新)，不返回任何资源，让浏览器直接使用缓存")]),t._v(" "),e("ul",[e("li",[t._v("Cache-Control: max-age=31536000（使用相对时间，同时使用时优先级更高）")]),t._v(" "),e("li",[t._v("Expires: Wed, 19 Oct 2022 04:54:02 GMT（使用基于服务器的绝对时间）")])]),t._v(" "),e("p",[t._v("精确度：Etag要优于Last-Modified（后者只能精确到秒的颗粒度）")]),t._v(" "),e("p",[t._v("优先级：服务器校验优先考虑Etag（例如适用于文件内容未修改但是修改时间变动的情况）")]),t._v(" "),e("p",[t._v("性能上：Etag要逊于Last-Modified（etag需要每次服务端的读写，后者是个常量只要读取）")]),t._v(" "),e("h1",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844904034181070861",target:"_blank",rel:"noopener noreferrer"}},[t._v("傻傻分不清之 Cookie、Session、Token、JWT"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6933389518997291015",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的localStorage/sessionStorage的大小"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);