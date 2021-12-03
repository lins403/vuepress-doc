(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{417:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"互联网协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互联网协议"}},[t._v("#")]),t._v(" 互联网协议")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),a("ol",[a("li",[t._v("计算机网络模型各层的功能")]),t._v(" "),a("li",[t._v("http的特点，http状态码")]),t._v(" "),a("li",[t._v("https和http的区别，数字签名与数字证书的原理")]),t._v(" "),a("li",[t._v("http1.x的缺陷，http2.0的特性")]),t._v(" "),a("li",[t._v("tcp特点、三次握手、四次挥手，与udp的区别")]),t._v(" "),a("li",[t._v("socket与websocket")]),t._v(" "),a("li",[t._v("输入URL到页面加载显示完成发生了什么?")])])]),t._v(" "),a("h2",{attrs:{id:"一、网络模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、网络模型"}},[t._v("#")]),t._v(" 一、网络模型")]),t._v(" "),a("p",[t._v("每一个底层都是为上层提供服务")]),t._v(" "),a("img",{staticStyle:{zoom:"75%"},attrs:{src:"https://pic1.zhimg.com/80/v2-2d62ba265be486cb94ab531912aa3b9c_1440w.jpg",alt:"img"}}),t._v(" "),a("img",{staticStyle:{zoom:"85%"},attrs:{src:"https://pic2.zhimg.com/80/v2-3c8ab7e3f330238821adedea31b9c321_1440w.jpg",alt:"img"}}),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TCP/IP")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("应用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("应用层")]),t._v(" "),a("td",[t._v("数据")]),t._v(" "),a("td",[t._v("应用程序之间的交流、报文(message)")])]),t._v(" "),a("tr",[a("td",[t._v("传输控制层")]),t._v(" "),a("td",[t._v("+ 目标端口、源端口")]),t._v(" "),a("td",[t._v('建立"端口到端口"的通信（UDP、TCP）、网关')])]),t._v(" "),a("tr",[a("td",[t._v("网络层")]),t._v(" "),a("td",[t._v("+ 目标IP、源IP")]),t._v(" "),a("td",[t._v('建立"主机到主机"的通信，区分子网络（'),a("strong",[t._v("IP地址")]),t._v("、ARP协议(IP--\x3eMAC)、路由器）")])]),t._v(" "),a("tr",[a("td",[t._v("链路层")]),t._v(" "),a("td",[t._v("数据包（文本信息）<---\x3e 比特（电子信号）")]),t._v(" "),a("td",[t._v("局域网（以太网、"),a("strong",[t._v("MAC地址")]),t._v("、ARP协议、广播）、帧、网桥和交换机")])]),t._v(" "),a("tr",[a("td",[t._v("物理层")]),t._v(" "),a("td",[t._v("组网")]),t._v(" "),a("td",[t._v("中继器、集线器")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("以太网（Ethernet）是现在主流的局域网标准，而互联网是指将大量的局域网连接起来。以太网是技术概念，而互联网Internet / 广域网 WAN / 局域网LAN 是范围概念。")])]),t._v(" "),a("li",[a("p",[t._v("网卡(NIC) > 中继器(Repeater) > 集线器(HUB) > 网桥(Bridge) > 交换机(Switch) > 路由器(Router) > 调制解调器(Modem) > 网关(Gateway)")])])]),t._v(" "),a("h2",{attrs:{id:"二、http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、http"}},[t._v("#")]),t._v(" 二、http")]),t._v(" "),a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("是互联网上应用最广泛的协议，属于OSI模型应用层协议，每次会建立一个信息安全通道，来确保数据的传输。")]),t._v(" "),a("p",[t._v("通过http和https请求的资源，由 URI 来标识。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("URI")]),t._v("：Uniform Resource Identifier ，统一资源"),a("strong",[t._v("标识")]),t._v("符，标识具体资源")]),t._v(" "),a("p",[a("code",[t._v("URL")]),t._v("：Uniform Resource Location ，统一资源"),a("strong",[t._v("定位")]),t._v("符，定位具体的资源位置")])]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("无状态")]),t._v(" "),a("ul",[a("li",[t._v("协议对信息没有缓存和记忆（所以引入了cookie和session技术，以及浏览器缓存）")])])]),t._v(" "),a("li",[a("strong",[t._v("短连接")]),t._v(" "),a("ul",[a("li",[t._v("每次连接只能处理一个请求，数据请求完毕后就会断开tcp连接（只是应用层上关闭了，实际传输层上tcp连接并未断开）")]),t._v(" "),a("li",[t._v("为了弥补这个不足，在http1.1中引入了 keepalive 机制，支持一个连接处理多个请求（其实是将多个http请求合并为一个）")])])])]),t._v(" "),a("h3",{attrs:{id:"http-状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1XX")]),t._v("- 信息型，服务器收到请求，需要请求者继续操作。")]),t._v(" "),a("li",[a("code",[t._v("2XX")]),t._v("- 成功型，请求成功收到，理解并处理。")]),t._v(" "),a("li",[a("code",[t._v("3XX")]),t._v(" - 重定向，需要进一步的操作以完成请求。\n"),a("ul",[a("li",[t._v("301 永久重定向")]),t._v(" "),a("li",[t._v("302 临时重定向")])])]),t._v(" "),a("li",[a("code",[t._v("4XX")]),t._v(" - 客户端错误，请求包含语法错误或无法完成请求。\n"),a("ul",[a("li",[t._v("400状态码：请求无效，通常是接口的数据传输不对，例如content-type没有对应上；")]),t._v(" "),a("li",[t._v("401状态码：当前请求需要用户验证；")]),t._v(" "),a("li",[t._v("403状态码：服务器已经得到请求，但是拒绝执行")])])]),t._v(" "),a("li",[a("code",[t._v("5XX")]),t._v(" - 服务器错误，服务器在处理请求的过程中发生了错误。\n"),a("ul",[a("li",[t._v("500状态码：服务器内部错误")]),t._v(" "),a("li",[t._v("501状态码：服务器不支持请求的功能")]),t._v(" "),a("li",[t._v("502状态码：Bad Gateway，代理服务器从远程服务器收到一个无效的响应")]),t._v(" "),a("li",[t._v("503状态码：Service Unavailable  由于超载或系统维护，服务器暂时的无法处理客户端的请求")])])])]),t._v(" "),a("h2",{attrs:{id:"三、https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、https"}},[t._v("#")]),t._v(" 三、https")]),t._v(" "),a("h3",{attrs:{id:"http和https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http和https"}},[t._v("#")]),t._v(" http和https")]),t._v(" "),a("ul",[a("li",[t._v("http：超文本传输协议，信息是明文传输")]),t._v(" "),a("li",[t._v("https：http下加入 SSL 层，由 http 进行通信，但利用 SSL/TLS 进行加密数据包")]),t._v(" "),a("li",[t._v("换言之，http直接与tcp进行通信，但是加入SSL以后，就变成http先和SSL通信，后者再与tcp通信")])]),t._v(" "),a("h3",{attrs:{id:"https的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https的特点"}},[t._v("#")]),t._v(" https的特点")]),t._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("可进行身份认证与加密数据传输，比http更加安全")])]),t._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("握手阶段比较费时")]),t._v(" "),a("li",[t._v("缓存不如http高效（*）")]),t._v(" "),a("li",[t._v("证书需要钱")]),t._v(" "),a("li",[a("s",[t._v("证书需要绑定域名，域名会解析到ip上，这样就不能在一个ip下使用多个域名了")]),t._v("（CA证书有多域名和泛域名证书，nginx 既支持多域名配置，又支持多个443端口的server，可以配置不同端口的server，然后重定向至https的server）")])]),t._v(" "),a("p",[t._v("一个IP地址可以通过Web服务器的虚拟主机（web服务器程序可以根据请求头的中的域名（http header 中的 Host）返回对应目录资源）部署多个网站域名")]),t._v(" "),a("h3",{attrs:{id:"ssl-和-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-和-tls"}},[t._v("#")]),t._v(" SSL 和 TLS")]),t._v(" "),a("p",[t._v("SSL (Secure Sockets Layer) 是由 netscape 发布，后来互联网标准化组织接替 SSL 发布了 TLS (Transport Layer Security)")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("客户端向服务端索要公钥，并验证公钥，从而验证了服务端的身份（服务端公钥存放在数字证书中，只要证书可信，公钥就可信）；")])]),t._v(" "),a("li",[a("p",[t._v('然后双方协商生成"对话密钥"，之后就采用"对话密钥"进行对称加密通信（session key 是基于三个随机数生成的，通过服务器公钥来加密）')])])]),t._v(" "),a("h3",{attrs:{id:"数字签名和数字证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字签名和数字证书"}},[t._v("#")]),t._v(" 数字签名和数字证书")]),t._v(" "),a("p",[a("mark",[t._v("公钥加密，私钥签名")])]),t._v(" "),a("h4",{attrs:{id:"数字签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),a("p",[t._v("服务端（sender）将原数据进行 Hash 运算得到「摘要」，用自己的私钥对数据摘要进行签名，并附带和数据一起发送给客户端。客户端（receiver）拿到服务端的公钥，对签名进行验签，同时也对数据进行一样的哈希算法，如果两份签名结果一致，则表明数据未被篡改。")]),t._v(" "),a("h4",{attrs:{id:"数字证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[t._v("#")]),t._v(" 数字证书")]),t._v(" "),a("p",[t._v("数字签名的问题在于，传给客户端的签名和公钥可能被冒充，所以需要一个权威的第三方来保证公钥的安全性。")]),t._v(" "),a("ul",[a("li",[t._v("数字证书的颁发机构（CA，certification authority），会将机构信息、有效期、公钥、持有者身份等信息，用CA的私钥进行签名，放进数字证书中。")]),t._v(" "),a("li",[t._v("服务端去CA申请一份证书，然后将证书发送给客户端。")]),t._v(" "),a("li",[t._v("客户端用CA的公钥对证书进行验签，用证书中服务端的公钥进行加密数据")])]),t._v(" "),a("p",[t._v("（我理解最核心的点在于，客户端可以"),a("s",[t._v("从权威的公开渠道")]),t._v("（事实上通常是操作系统和浏览器会预制一些CA证书在本地）直接知道CA的公钥，CA公钥就不会被冒充，而且CA的私钥也必然不会泄露，这是信用链的根基，所以数字证书就不存在被冒充或被篡改的可能，证书中的服务端公钥也就安全）")]),t._v(" "),a("h3",{attrs:{id:"常见加密方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见加密方法"}},[t._v("#")]),t._v(" 常见加密方法")]),t._v(" "),a("p",[t._v("对称加密："),a("strong",[t._v("AES")]),t._v("、DES、3DES")]),t._v(" "),a("p",[t._v("非对称加密："),a("strong",[t._v("RSA")]),t._v("、ECC、DSA")]),t._v(" "),a("p",[t._v("散列算法：MD5 (128 bits)、"),a("strong",[t._v("SHA1")]),t._v(" (160 bits)、HMAC")]),t._v(" "),a("h2",{attrs:{id:"四、http2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、http2-0"}},[t._v("#")]),t._v(" 四、http2.0")]),t._v(" "),a("p",[t._v("HTTP/2 的开发基于 SPDY (Google, 2012) 进行跃进式改进，区别主要是以下两点：")]),t._v(" "),a("ul",[a("li",[t._v("HTTP2.0 支持明文 HTTP 传输，而 SPDY 强制使用 HTTPS")]),t._v(" "),a("li",[t._v("HTTP2.0 消息头的压缩算法不同")])]),t._v(" "),a("p",[t._v("2015年9月 Google 宣布放弃对 SPDY 的支持，拥抱 HTTP/2")]),t._v(" "),a("h3",{attrs:{id:"http1-x的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-x的缺陷"}},[t._v("#")]),t._v(" HTTP1.x的缺陷")]),t._v(" "),a("ol",[a("li",[t._v("短连接，每个连接只能处理一个请求即一个资源；无状态，使得需要反复发送一样的请求头，冗余且低效")]),t._v(" "),a("li",[t._v("单向通信，只能由客户端向服务端发送请求")]),t._v(" "),a("li",[t._v("明文传输数据内容，不安全")])]),t._v(" "),a("h3",{attrs:{id:"http2-0的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2-0的特性"}},[t._v("#")]),t._v(" HTTP2.0的特性")]),t._v(" "),a("ul",[a("li",[t._v("二进制格式\n"),a("ul",[a("li",[t._v("不再是明文请求，请求信息由最小的单位二进制帧组成")])])]),t._v(" "),a("li",[t._v("多路复用\n"),a("ul",[a("li",[t._v("连接共享，一个连接上可以有多个 request")])])]),t._v(" "),a("li",[t._v("header压缩和缓存")]),t._v(" "),a("li",[t._v("服务端推送")])]),t._v(" "),a("h2",{attrs:{id:"五、tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、tcp"}},[t._v("#")]),t._v(" 五、tcp")]),t._v(" "),a("p",[t._v("面向连接的可靠字节流服务协议（Transmission Control Protocol，传输控制协议）")]),t._v(" "),a("ul",[a("li",[t._v("面向连接：所有要通过TCP进行通信的应用都要先建立连接才能通信")]),t._v(" "),a("li",[t._v("可靠："),a("strong",[a("u",[t._v("确认和重传机制")])]),t._v("（校验）、数据排序、流量控制、拥塞控制")])]),t._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),a("p",[t._v("TCP报文的Header中有标志位，用来标识每次消息的意图，包括 SYN (synchronous 建立连接) 、ACK (acknowledgement 确认) 等等")]),t._v(" "),a("p",[t._v("客户端首先发出一个SYN消息，服务器使用SYN+ACK应答，表示接收到了这个消息，最后客户端收到服务器的SYN后，再以ACK消息响应，这样子客户端和服务端就能知道自己的发送和接受能力没有问题，所以tcp连接需要三次握手")]),t._v(" "),a("ul",[a("li",[t._v("seq，Sequence number，序列/顺序号码")]),t._v(" "),a("li",[t._v("ack，Acknowledgement Number，确认编号，接收到传来的seq然后+1，再发送回去，告知已经成功接收上一次数据")])]),t._v(" "),a("h3",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),a("p",[t._v("客户端请求关闭连接时，服务端此时自身有状态，需要先自行结束，准备好关闭后再告知客户端")]),t._v(" "),a("p",[t._v("\b")]),t._v(" "),a("h3",{attrs:{id:"tcp和udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp"}},[t._v("#")]),t._v(" tcp和udp")]),t._v(" "),a("ul",[a("li",[t._v("tcp是面向连接的，udp是无连接的，即发送数据前不需要先建立连接")]),t._v(" "),a("li",[t._v("tcp的传输是可靠的，udp是不可靠的")]),t._v(" "),a("li",[t._v("tcp只能一对一，udp可以一对多")])]),t._v(" "),a("p",[t._v("udp的应用有DNS，以及流媒体、online游戏等")]),t._v(" "),a("h2",{attrs:{id:"六、socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、socket"}},[t._v("#")]),t._v(" 六、socket")]),t._v(" "),a("p",[t._v("socket 是应用层和传输层中间的一个抽象层，把 tcp/ip 抽象成一组API接口，供应用层调用，以实现进程在网络中的通信（利用 "),a("strong",[t._v("ip地址＋协议＋端口号")]),t._v(" 来唯一标示网络中的一个进程）")]),t._v(" "),a("p",[t._v("三次握手其实就是，客户端socket和服务端socket之间，基于tcp协议建立的连接。(tcp不会自动断开连接，也是需要socket编程来手动关闭)")]),t._v(" "),a("h2",{attrs:{id:"七、websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、websocket"}},[t._v("#")]),t._v(" 七、webSocket")]),t._v(" "),a("p",[t._v("2008年才诞生，是一种网络传输协议，也属于OSI模型的应用层协议，同时也是基于tcp协议建立的连接（webRTC是基于udp）")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("持久连接")]),t._v("：websocket协议支持持久连接，http协议不支持持久性连接")]),t._v(" "),a("li",[a("strong",[t._v("全双工通信")]),t._v("：服务端也可以主动向客户端发送信息，服务端和客户端双方可以同时给对方发送消息")])]),t._v(" "),a("p",[t._v("（信息只能单向传送为单工；信息能双向传送但不能同时双向传送称为半双工；信息能够同时双向传送则称为全双工）")]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h3",{attrs:{id:"输入url到页面加载显示完成发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入url到页面加载显示完成发生了什么"}},[t._v("#")]),t._v(" 输入URL到页面加载显示完成发生了什么?")]),t._v(" "),a("ol",[a("li",[t._v("DNS域名解析，把域名解析为IP地址")]),t._v(" "),a("li",[t._v("TCP三次握手，建立连接")]),t._v(" "),a("li",[t._v("发送HTTP请求")]),t._v(" "),a("li",[t._v("服务器处理请求，并返回数据")]),t._v(" "),a("li",[t._v("浏览器解析数据，并渲染页面")])]),t._v(" "),a("h4",{attrs:{id:"详尽版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详尽版"}},[t._v("#")]),t._v(" 详尽版")]),t._v(" "),a("ol",[a("li",[t._v("需要根据URL的域名解析得到"),a("u",[a("strong",[t._v("服务器的IP")])]),t._v("，先查找本地缓存中的DNS记录，依次从浏览器缓存>系统缓存>路由器缓存中查找，如果没有则查找本地的域名解析文件，即 hosts 文件。若本地查找无果，则需要去DNS服务器查找。")]),t._v(" "),a("li",[t._v("浏览器根据上一步得到的服务器IP，加上端口号，构造一个"),a("u",[a("strong",[t._v("HTTP请求")])])]),t._v(" "),a("li",[t._v("将http请求封装在"),a("u",[a("strong",[t._v("tcp的数据包")])]),t._v("中，依次经过传输层、网络层、数据链路层、物理层，到达目标服务器")]),t._v(" "),a("li",[t._v("服务器解析请求并做出相应，将"),a("u",[a("strong",[t._v("资源")])]),t._v("返回给客户端，如果符合浏览器缓存规则，则会使用"),a("u",[a("strong",[t._v("浏览器缓存")])]),t._v("的资源")]),t._v(" "),a("li",[t._v("浏览器根据服务器返回的HTML构建"),a("u",[a("strong",[t._v("DOM树")])]),t._v("，构建过程中如果遇到"),a("code",[t._v("script")]),t._v("标签，则会停止构建，转而去下载或执行"),a("u",[a("strong",[t._v("JavaScript代码")])]),t._v("（毕竟浏览器并不清楚JS的执行，是否会影响到DOM，所以一般script标签放在body的最后，或者使用async、defer属性来加载JS；构建的过程中遇到图片、CSS、音视频等资源，因为不会影响到DOM的生成，所以这些资源不会阻塞HTML的解析，浏览器也会交由网络进程在后台并发下载资源）")]),t._v(" "),a("li",[t._v("根据外部css和自己的css，以及内联样式，构建一个"),a("u",[a("strong",[t._v("CSSOM树")])])]),t._v(" "),a("li",[t._v("构建完成后，CSSOM树和DOM树合并为"),a("u",[a("strong",[t._v("渲染树")])]),t._v(" render tree （确定每个DOM节点的计算样式，排除非视觉节点，例如 "),a("code",[t._v("display:none")]),t._v(" 的节点、伪元素等）")]),t._v(" "),a("li",[t._v("之后在渲染树上进行"),a("u",[a("strong",[t._v("布局layout")])]),t._v("，布局主要是遍历渲染树，确定树中各个节点的位置和尺寸（然后根据每个元素的盒模型的尺寸和位置进行排列，生成Layout tree？）")]),t._v(" "),a("li",[t._v("之后是"),a("u",[a("strong",[t._v("渲染页面")])]),t._v("，获取布局信息，进行绘制paint和合成composite，将像素绘制到屏幕上。")]),t._v(" "),a("li",[a("strong",[a("u",[t._v("JS 解析执行")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000037650883",target:"_blank",rel:"noopener noreferrer"}},[t._v("6张图让你搞懂浏览器渲染网页过程"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"get请求和post请求的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get请求和post请求的区别"}},[t._v("#")]),t._v(" Get请求和Post请求的区别")]),t._v(" "),a("ul",[a("li",[t._v("Get请求\n"),a("ul",[a("li",[t._v("参数通过url传递，且参数有长度限制")]),t._v(" "),a("li",[t._v("只支持urlencoded一种编码类型")]),t._v(" "),a("li",[t._v("可以被浏览器主动cache")])])]),t._v(" "),a("li",[t._v("没有实质性的区别，都属于HTTP协议的请求方式，都是基于TCP/IP的传输层协议")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/",target:"_blank",rel:"noopener noreferrer"}},[t._v("都 2019 年了，还问 GET 和 POST 的区别"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get和post请求，基于 XHR 的原生JavaScript实现")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("httpGet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------------")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("httpPost")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json; charset=utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpPost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h1",{attrs:{id:"参考-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考-推荐"}},[t._v("#")]),t._v(" 参考/推荐")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/tutorial/96/4700c6f1f3334c9191a38406002efa65",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/HTML/浏览器"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1nb411s7EG",target:"_blank",rel:"noopener noreferrer"}},[t._v("互联网之父讲解互联网是如何工作的"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1Rz4y197Jd",target:"_blank",rel:"noopener noreferrer"}},[t._v("互联网是如何运作的？"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("InternetWhitepaper"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);