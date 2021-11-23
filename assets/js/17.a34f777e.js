(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{417:function(s,t,e){"use strict";e.r(t);var o=e(43),a=Object(o.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cookie、session、token、storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie、session、token、storage"}},[s._v("#")]),s._v(" Cookie、Session、Token、Storage")]),s._v(" "),e("p",[s._v("会话跟踪技术")]),s._v(" "),e("h2",{attrs:{id:"认证、授权和凭证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证、授权和凭证"}},[s._v("#")]),s._v(" 认证、授权和凭证")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("认证（Authentication）")]),s._v(" "),e("ul",[e("li",[s._v("验证当前用户的身份，如用户登录、短信验证")])])]),s._v(" "),e("li",[e("p",[s._v("授权（Authorization）")]),s._v(" "),e("ul",[e("li",[s._v("实现授权的方式有：cookie、session、token、OAuth")]),s._v(" "),e("li",[s._v("请求头header中的Authorization通常存放的是jwt")])])]),s._v(" "),e("li",[e("p",[s._v("凭证（Credentials）")]),s._v(" "),e("ul",[e("li",[s._v("实现认证和授权的前提")]),s._v(" "),e("li",[s._v("如银行办理手续，银行卡密码是认证，而身份证是凭证")])])])]),s._v(" "),e("p",[s._v("常见的前后端鉴权方式")]),s._v(" "),e("ul",[e("li",[s._v("Session-Cookie")]),s._v(" "),e("li",[s._v("Token 验证（包括 JWT，SSO）")]),s._v(" "),e("li",[s._v("OAuth2.0（开放授权，如微信登录）")])]),s._v(" "),e("p",[s._v("（SSO，单点登录，在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。）")]),s._v(" "),e("h3",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" cookie")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("客户端")]),s._v("保持状态")]),s._v(" "),e("li",[s._v("服务端通过HTTP响应头set-cookie，或客户端使用 JavaScript 设置")]),s._v(" "),e("li",[s._v("不可跨域，每个 cookie 都会绑定单一的域名，而一级域名和二级域名之间是允许共享使用的")]),s._v(" "),e("li",[s._v("重要属性：domain、path、maxAgecookie、expires、"),e("strong",[s._v("secure")]),s._v("、"),e("strong",[s._v("httpOnly")])]),s._v(" "),e("li",[s._v("移动端对 cookie 的支持不是很好，而 session 需要基于 cookie 实现，所以移动端常用的是 token")]),s._v(" "),e("li",[s._v("除了用于认证授权，cookie还可用于存放用户的操作信息，改善用户体验，例如存放账号密码、用户偏好等等。使用github的cookie，有效期内访问授权登录的网站就不用重新授权登录")]),s._v(" "),e("li",[s._v("使用Cookie需要防范XSS攻击（secure：只允许请求为https时发送cookie，httponly：禁止JS脚本访问cookie）")])]),s._v(" "),e("h4",{attrs:{id:"cookie和webstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie和webstorage"}},[s._v("#")]),s._v(" cookie和webStorage")]),s._v(" "),e("ul",[e("li",[s._v("cookie设置的value值不能超过4k，而且浏览器一般对同个站点也有cookie数量的限制；webStorage通常为5M")]),s._v(" "),e("li",[s._v("cookie会伴随着request一起发送，但webStorage并不会")]),s._v(" "),e("li",[s._v("server端也能使用cookie，但webStorage只能用在浏览器")])]),s._v(" "),e("h3",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" session")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("服务端")]),s._v("保持状态")])]),s._v(" "),e("li",[e("p",[s._v("Session存储在服务器上，可以放在文件、数据库、Redis或内存中，一般只将"),e("strong",[s._v("session的id")]),s._v("存储在cookie中。")])]),s._v(" "),e("li",[e("p",[s._v("session 的运行依赖 session id，而 sessionid 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但可通过其它方式实现，比如"),e("strong",[s._v("在 url 中传递")]),s._v(" session_id「sid」）")])]),s._v(" "),e("li",[e("p",[s._v("session 需要手动删除，通常服务器会在用户退出登录时删除，或者会为 session 设置一个失效时间，以便把 session 删除，节省存储空间")])])]),s._v(" "),e("h2",{attrs:{id:"cookie和session认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session认证"}},[s._v("#")]),s._v(" cookie和session认证")]),s._v(" "),e("p",[s._v("用户认证的一般流程：")]),s._v(" "),e("blockquote",[e("p",[s._v("1、用户向服务器发送用户名和密码。")]),s._v(" "),e("p",[s._v("2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。")]),s._v(" "),e("p",[s._v("3、服务器向用户返回一个 session_id，写入用户的 Cookie。")]),s._v(" "),e("p",[s._v("4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),s._v(" "),e("p",[s._v("5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")])]),s._v(" "),e("h2",{attrs:{id:"token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[s._v("#")]),s._v(" token")]),s._v(" "),e("blockquote",[e("p",[s._v("后端将token传给前端，前端保存在本地，以后需要权限才可以访问的时候，就可以在请求头上携带这个token")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Access Token")]),s._v(" "),e("ul",[e("li",[s._v("服务端验证成功后，签发一个 token（将登录凭证做数字签名，加密之后得到token），把这个 token 发送给客户端。")]),s._v(" "),e("li",[s._v("客户端收到 token 以后，将token保存在本地，比如cookie里或者 localStorage 里，以后每次请都携带这个token")]),s._v(" "),e("li",[s._v("服务端验证请求里的token串（做解密和签名认证，判断其有效性），如果验证成功，就向客户端返回请求的数据")])])]),s._v(" "),e("li",[e("p",[s._v("Refresh Token：用来刷新 access token")])])]),s._v(" "),e("h3",{attrs:{id:"token-和-session-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-和-session-的区别"}},[s._v("#")]),s._v(" token 和 session 的区别")]),s._v(" "),e("ul",[e("li",[s._v("session_id跟token的作用比较类似")]),s._v(" "),e("li",[s._v("session使服务端有状态化，可以记录会话信息；而token是凭证，使服务端无状态化，不会存储会话信息。")])]),s._v(" "),e("blockquote",[e("p",[s._v("做的项目中session不清楚，但是存的是token，字段存的是前后端约定的字段名。在登录成功后，前端将获取到的accessToken和refreshToken存到cookie中，在之后的每次请求中添加到请求头header上，交由后端验证，验证成功则返回请求的数据。")])]),s._v(" "),e("h2",{attrs:{id:"jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[s._v("#")]),s._v(" JWT")]),s._v(" "),e("p",[s._v("JSON Web Token（简称 JWT）是目前最流行的 "),e("strong",[s._v("跨域认证")]),s._v(" 解决方案。是一种认证授权机制。")]),s._v(" "),e("p",[s._v("结构："),e("code",[s._v("Header.Payload.Signature")])]),s._v(" "),e("ul",[e("li",[s._v("Header：一个 JSON 对象，描述 JWT 的元数据")]),s._v(" "),e("li",[s._v("Payload：一个 JSON 对象，用来存放实际需要传递的数据")]),s._v(" "),e("li",[s._v("Signature：对前两部分的签名，防止数据篡改")])]),s._v(" "),e("p",[s._v("jwt与token不一样在于：JWT 自包含了用户信息和加密的数据，可以减少查询数据库")]),s._v(" "),e("h2",{attrs:{id:"oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[s._v("#")]),s._v(" Oauth")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" appid "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 授权成功以后的重定向地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" redirect_uri "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("encodeURIComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx/redirect?redirect='")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/auth-redirect'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拼接微信的授权认证地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://open.weixin.qq.com/connect/qrconnect?appid='")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" appid "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&redirect_uri='")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" redirect_uri "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&response_type=code&scope=snsapi_login#wechat_redirect'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新窗口打开拼接的地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("openWindow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" thirdpart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("540")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("540")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("h2",{attrs:{id:"sessionstorage-和-localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage-和-localstorage"}},[s._v("#")]),s._v(" sessionStorage 和 localStorage")]),s._v(" "),e("ul",[e("li",[s._v("sessionStorage\n"),e("ul",[e("li",[s._v("浏览器当前窗口关闭后自动清除")])])]),s._v(" "),e("li",[s._v("localStorage\n"),e("ul",[e("li",[s._v("保存在浏览器本地，数据不会过期也不会被清除，浏览器重启后依然还在")]),s._v(" "),e("li",[s._v("和cookie一样在所有同源标签页和窗口之间共享")])])]),s._v(" "),e("li",[s._v("都有容量大小限制，只支持字符串")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Browser")]),s._v(" "),e("th",[s._v("localStorage")]),s._v(" "),e("th",[s._v("sessionStorage")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("Mac Chrome")]),s._v(" "),e("td",[s._v("约5M")]),s._v(" "),e("td",[s._v("约5M")])]),s._v(" "),e("tr",[e("td",[s._v("IOS WeChat")]),s._v(" "),e("td",[s._v("约2.5M")]),s._v(" "),e("td",[s._v("大于10M")])]),s._v(" "),e("tr",[e("td",[s._v("Mac Safria")]),s._v(" "),e("td",[s._v("约2.5M")]),s._v(" "),e("td",[s._v("大于10M")])]),s._v(" "),e("tr",[e("td",[s._v("https://juejin.cn/post/6933389518997291015")]),s._v(" "),e("td"),s._v(" "),e("td")])])]),s._v(" "),e("p",[s._v("TODO: 测试一下sessionStorage在不同标签页的共享和清理情况")]),s._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[s._v("#")]),s._v(" 浏览器缓存")]),s._v(" "),e("p",[s._v("针对HTTP get请求的缓存")]),s._v(" "),e("ul",[e("li",[s._v("强缓存")]),s._v(" "),e("li",[s._v("协商缓存")])]),s._v(" "),e("p",[s._v("根据response header中的"),e("strong",[s._v("Cache-Control")]),s._v("和"),e("strong",[s._v("Expires")]),s._v("判断缓存是否过期，同时记录header中的"),e("strong",[s._v("etag")]),s._v("和"),e("strong",[s._v("last-modified")]),s._v("，如果没有过期则直接使用浏览器缓存，如果过期，将etag值作为"),e("strong",[s._v("If-None-Match")]),s._v("，last-modified值作为"),e("strong",[s._v("if-modified-since")]),s._v("，添加到request header中发送给服务器校验。如果服务器判断缓存不需要更新，则会返还304状态码(Not Modified资源无更新)，不返回任何资源，让浏览器直接使用缓存")]),s._v(" "),e("ul",[e("li",[s._v("Cache-Control: max-age=31536000（使用相对时间，同时使用时优先级更高）")]),s._v(" "),e("li",[s._v("Expires: Wed, 19 Oct 2022 04:54:02 GMT（使用基于服务器的绝对时间）")])]),s._v(" "),e("p",[s._v("精确度上：Etag要优于Last-Modified（后者只能精确到秒的颗粒度）")]),s._v(" "),e("p",[s._v("优先级上：服务器校验优先考虑Etag（例如适用于文件内容未修改但是修改时间变动的情况）")]),s._v(" "),e("p",[s._v("性能上：Etag要逊于Last-Modified（etag需要每次服务端的读写，后者是个常量只要读取）")])])}),[],!1,null,null,null);t.default=a.exports}}]);