# 互联网协议

:::tip 摘要

1. 计算机网络模型各层的功能
2. http的特点，http状态码
3. https和http的区别，数字签名与数字证书的原理
4. http1.x的缺陷，http2.0的特性
5. tcp特点、三次握手、四次挥手，与udp的区别
6. socket与websocket
7. 输入URL到页面加载显示完成发生了什么?

:::

## 一、网络模型

每一个底层都是为上层提供服务

<img src="https://pic1.zhimg.com/80/v2-2d62ba265be486cb94ab531912aa3b9c_1440w.jpg" alt="img" style="zoom:75%;" />

<img src="https://pic2.zhimg.com/80/v2-3c8ab7e3f330238821adedea31b9c321_1440w.jpg" alt="img" style="zoom: 85%;" />

| TCP/IP |                         | 应用                                               |
| ------ | ----------------------- | ------------------------------------------------ |
| 应用层    | 数据                      | 应用程序之间的交流、报文(message)                            |
| 传输控制层  | + 目标端口、源端口              | 建立"端口到端口"的通信（UDP、TCP）、网关                         |
| 网络层    | + 目标IP、源IP              | 建立"主机到主机"的通信，区分子网络（**IP地址**、ARP协议(IP-->MAC)、路由器） |
| 链路层    | 数据包（文本信息）<---> 比特（电子信号） | 局域网（以太网、**MAC地址**、ARP协议、广播）、帧、网桥和交换机             |
| 物理层    | 组网                      | 中继器、集线器                                          |

- 以太网（Ethernet）是现在主流的局域网标准，而互联网是指将大量的局域网连接起来。以太网是技术概念，而互联网Internet / 广域网 WAN / 局域网LAN 是范围概念。

- 网卡(NIC) > 中继器(Repeater) > 集线器(HUB) > 网桥(Bridge) > 交换机(Switch) > 路由器(Router) > 调制解调器(Modem) > 网关(Gateway)

## 二、http

### 基本概念

是互联网上应用最广泛的协议，属于 OSI 模型应用层协议，每次会建立一个信息安全通道，来确保数据的传输。

通过 http 和 https 请求的资源，由 URI 来标识。

> `URI`：Uniform Resource Identifier ，统一资源**标识**符，标识具体资源
> 
> `URL`：Uniform Resource Location ，统一资源**定位**符，定位具体的资源位置

### 特点

- **无状态**
  - 协议对信息没有缓存和记忆，导致需要重复发送一样的请求头（所以引入了 cookie 和 session 技术）
- **短连接**
  - 每次连接只能处理一个请求，数据请求完毕后就会断开tcp连接（只是应用层上关闭了，实际传输层上tcp连接并未断开）
  - 为了弥补这个不足，在 http1.1 中引入了 keepalive 机制，支持一个连接处理多个请求（其实是将多个http请求合并为一个）

### HTTP 状态码

- `1XX`- 信息型，服务器收到请求，需要请求者继续操作。
- `2XX`- 成功型，请求成功收到，理解并处理。
- `3XX` - 重定向，需要进一步的操作以完成请求。
  - **301** Moved Permanently - 永久重定向
  - **302** Found - 临时重定向
  - 304 Not Modified - 可以使用缓存的内容
- `4XX` - 客户端错误，请求包含语法错误或无法完成请求。
  - **400**状态码：Bad Request。请求无效，通常是接口的数据传输不对，例如content-type没有对应上；
  - 401状态码：Unauthorized。未授权，当前请求需要用户验证；
  - 403状态码：Forbidden。服务器已经得到请求，但是拒绝执行
  - 405状态码：Method Not Allowed
- `5XX` - 服务端错误，服务器在处理请求的过程中发生了错误。
  - **500**状态码：服务器内部错误
  - 501状态码：服务器不支持请求的功能
  - **502**状态码：Bad Gateway，代理服务器从远程服务器收到一个无效的响应。通常是因为请求连接超时，通过nginx代理的请求如果发生502则很有可能是因为代理的服务端地址不正确。
  - 503状态码：Service Unavailable  由于超载或系统维护，服务器暂时的无法处理客户端的请求
  - 504状态码：Gateway Timeout。上游服务器没有响应网关或代理。

## 三、https

### http和https

- `http`：超文本传输协议，信息是明文传输
- `https`：http下加入 SSL 层，由 http 进行通信，但利用 SSL/TLS 进行加密数据包
  - http直接与tcp进行通信，但是加入SSL以后，就变成http先和SSL通信，后者再与tcp通信


### https的特点

#### 优点

- 可进行<u>身份认证与数据传输加密</u>，比http更加安全

#### 缺点

- 握手阶段比较费时
- 缓存不如http高效（*）
- 证书需要钱
- ~~证书需要绑定域名，域名会解析到ip上，这样就不能在一个ip下使用多个域名了~~（CA证书有多域名和泛域名证书，nginx 既支持多域名配置，又支持多个443端口的server，可以配置不同端口的server，然后重定向至https的server）

一个IP地址可以通过Web服务器的虚拟主机部署多个网站域名，服务器程序可以根据请求头的中的域名（http header 中的 Host）返回对应目录资源。

### SSL 和 TLS

`SSL` (Secure Sockets Layer) 是由 netscape 发布，后来互联网标准化组织接替 SSL 发布了 `TLS` (Transport Layer Security)

1. 客户端向服务端索要公钥，并验证公钥，从而验证了服务端的身份（服务端公钥存放在数字证书中，只要证书可信，公钥就可信）
   - CA机构将服务端的信息用CA的私钥进行签名然后放进数字证书中，服务端将数字证书发送给客户端。（服务端的信息被CA机构用CA的私钥进行签名，然后放入数字证书中，同时数字证书中还包含了服务端的公钥）
   - 客户端可以从正规渠道获取到CA的公钥，通常浏览器和操作系统都会内置。然后客户端使用CA公钥对数字证书进行验签，没有问题后，就将数字证书中服务端的公钥取出，用于非对称加密。
2. 然后双方协商生成`"对话密钥"` session key，之后就采用"对话密钥"进行对称加密通信（基于三个随机数生成的，通过服务器公钥来加密；公钥是非对称加密，但是对话密钥是对称加密因为速度会更快）

### 数字签名和数字证书

<mark>公钥加密，私钥签名</mark>

#### 数字签名

服务端（sender）将原数据进行 Hash 运算得到「摘要」，用自己的私钥对数据摘要进行签名，并附带和数据一起发送给客户端。客户端（receiver）拿到服务端的公钥，对签名进行验签，同时也对数据进行一样的哈希算法，如果两份签名结果一致，则表明数据未被篡改。

#### 数字证书

数字签名的问题在于，传给客户端的签名和公钥可能被冒充，所以需要一个权威的第三方来保证公钥的安全性。

- 数字证书的颁发机构（CA，certification authority），会将机构信息、有效期、公钥、持有者身份等信息，用CA的私钥进行签名，放进数字证书中。
- 服务端去CA申请一份证书，然后将证书发送给客户端。
- 客户端用CA的公钥对证书进行验签，用证书中服务端的公钥进行加密数据

（我理解最核心的点在于，客户端可以~~从权威的公开渠道~~（事实上通常是操作系统和浏览器会预制一些CA证书在本地）直接知道CA的公钥，CA公钥就不会被冒充，而且CA的私钥也必然不会泄露，这是信用链的根基，所以数字证书就不存在被冒充或被篡改的可能，证书中的服务端公钥也就安全）

### 常见加密方法

对称加密：**AES**、DES、3DES

非对称加密：**RSA**、ECC、DSA

散列算法：MD5 (128 bits)、**SHA1** (160 bits)、HMAC

## 四、http2.0

HTTP/2 的开发基于 SPDY (Google, 2012) 进行跃进式改进，区别主要是以下两点：

- HTTP2.0 支持明文 HTTP 传输，而 SPDY 强制使用 HTTPS
- HTTP2.0 消息头的压缩算法不同

2015年9月 Google 宣布放弃对 SPDY 的支持，拥抱 HTTP/2

### HTTP1.x的缺陷

1. <u>无状态</u>，使得需要反复发送一样的请求头，冗余且低效
1. <u>短连接</u>，每个连接只能处理一个请求即一个资源
2. <u>单向通信</u>，只能由客户端向服务端发送请求
3. <u>明文传输</u>数据内容，不安全

### HTTP2.0的特性

1. 二进制格式
   - 不再是明文请求，请求信息由最小的单位二进制帧组成
2. header压缩和缓存
3. 多路复用
   - 连接共享，一个连接上可以有多个 request
4. 服务端推送

## 五、tcp传输控制协议

面向连接的可靠字节流服务协议（Transmission Control Protocol，传输控制协议）

- 面向连接：所有要通过 TCP 进行通信的应用都要<u>先建立连接</u>才能通信（UDP是无连接的，发送数据之前就不需要先建立连接）
- 可靠：**<u>确认和重传机制</u>**（校验）、数据排序、流量控制、拥塞控制

### 三次握手

TCP报文的Header中有标志位，用来标识每次消息的意图，包括 SYN (synchronous 建立连接) 、ACK (acknowledgement 确认) 等等

客户端首先发出一个 SYN 消息，服务器使用 SYN+ACK 应答，表示接收到了这个消息，最后客户端收到服务器的 SYN 后，再以 ACK 消息响应，这样子<u>客户端和服务端就能知道自己的发送和接受能力没有问题</u>，所以tcp连接需要三次握手

- seq，Sequence number，序列/顺序号码
- ack，Acknowledgement Number，确认编号，接收到传来的seq然后+1，再发送回去，告知已经成功接收上一次数据

### 四次挥手

客户端请求关闭连接时，服务端此时自身有状态，需要先自行结束，准备好可以关闭了以后再告知客户端

### tcp和udp

- tcp是面向连接的，udp是<u>无连接</u>的，即使用udp协议在发送数据前不需要先建立连接
- tcp的传输是可靠的，udp是<u>不可靠</u>的
- tcp只能一对一，udp可以<u>一对多</u>

udp的应用有DNS，以及流媒体、online游戏等

## 六、socket

socket 是应用层和传输层中间的一个抽象层，把 tcp/ip 抽象成一组API接口，供应用层调用，以实现进程在网络中的通信（利用 **ip地址＋协议＋端口号** 来唯一标示网络中的一个进程）

<u>三次握手其实就是，客户端socket和服务端socket之间，基于tcp协议建立的连接。</u>(tcp不会自动断开连接，也是需要socket编程来手动关闭)

## 七、webSocket

2008年才诞生，是一种网络传输协议，也属于 OSI 模型的<u>应用层协议</u>，同时也是基于 tcp 协议建立的连接（webRTC是基于udp）。

Web Socket 不使用 HTTP，而使用了自定义协议，目的是更快地发送小数据块。

- **持久连接**：websocket协议支持持久连接，http协议不支持持久性连接
- **全双工通信**：服务端也可以主动向客户端发送信息，服务端和客户端双方可以同时给对方发送消息

（信息只能单向传送为单工；信息能双向传送但不能同时双向传送称为半双工；信息能够同时双向传送则称为全双工）

## FAQ

### 输入URL到页面加载显示完成发生了什么?

1. DNS域名解析，把域名解析为IP地址
2. TCP三次握手，建立连接
3. 发送HTTP请求
4. 服务器处理请求，并返回数据
5. 浏览器解析数据，并渲染页面

#### 详尽版

1. 需要根据URL的域名解析得到<u>**服务器的IP**</u>，先查找本地缓存中的DNS记录，依次从浏览器缓存>系统缓存>路由器缓存中查找，如果没有则查找本地的域名解析文件，即 hosts 文件。若本地查找无果，则需要去DNS服务器查找。
2. 浏览器根据上一步得到的服务器IP，加上端口号，构造一个<u>**HTTP请求**</u>
3. 将http请求封装在<u>**tcp的数据包**</u>中，依次经过传输层、网络层、数据链路层、物理层，到达目标服务器
4. 服务器解析请求并做出相应，将<u>**资源**</u>返回给客户端；如果符合浏览器缓存规则，则会使用<u>**浏览器缓存**</u>的资源
5. 浏览器根据服务器返回的HTML构建<u>**DOM树**</u>，构建过程中如果遇到`script`标签，则会停止构建，转而去下载或执行<u>**JavaScript代码**</u>（毕竟浏览器并不清楚JS的执行，是否会影响到DOM，而且js脚本的加载还会阻塞页面的解析，所以一般script标签放在body的最后，或者使用async、defer属性来加载JS；构建的过程中遇到图片、CSS、音视频等资源，因为不会影响到DOM的生成，所以这些资源不会阻塞HTML的解析，浏览器也会交由网络进程在后台并发下载资源）
6. 浏览器根据外部css和自己的css，以及内联样式，构建一个<u>**CSSOM树**</u>
7. 构建完成后，CSSOM树和DOM树合并为<u>**渲染树**</u> render tree （确定每个DOM节点的计算样式，排除非视觉节点，例如 `display:none` 的节点、伪元素等）
8. 之后在渲染树上进行<u>**布局layout**</u>，布局主要是遍历渲染树，确定树中各个节点的位置和尺寸（然后根据每个元素的盒模型的尺寸和位置进行排列，生成Layout tree？）
9. 之后是<u>**渲染页面**</u>，获取布局信息，进行绘制paint和合成composite，将像素绘制到屏幕上。
10. **<u>JS 解析执行</u>**

[6张图让你搞懂浏览器渲染网页过程](https://segmentfault.com/a/1190000037650883)

### Get请求和Post请求的区别

- Get请求
  - 参数通过url传递，且参数有长度限制
  - 只支持urlencoded一种编码类型，`application/x-www-form-urlencoded`
  - 可以被浏览器主动cache
- 没有实质性的区别，都属于HTTP协议的请求方式，都是基于TCP/IP的传输层协议

```js
// get和post请求，基于 XHR 的原生JavaScript实现

const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.onload = () => callback(request.responseText)
  request.onerror = () => err(request)
  request.send()
}
httpGet(url, console.log)

// --------------------------------------------------------------------

const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('POST', url, true)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.onload = () => callback(request.responseText)
  request.onerror = () => err(request)
  request.send(data)
}
httpPost(url, JSON.stringify(formData), console.log)
```

# 参考/推荐

[HTTP/HTML/浏览器](https://www.nowcoder.com/tutorial/96/4700c6f1f3334c9191a38406002efa65)

[互联网之父讲解互联网是如何工作的](https://www.bilibili.com/video/BV1nb411s7EG)

[互联网是如何运作的？](https://www.bilibili.com/video/BV1Rz4y197Jd)

[InternetWhitepaper](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
