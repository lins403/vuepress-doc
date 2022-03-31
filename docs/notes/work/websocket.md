## WebSocket

是一种网络传输协议，也属于 OSI 模型的<u>应用层协议</u>，同时也是基于 tcp 协议建立的连接（webRTC是基于udp）。

Web Socket 不使用 HTTP，而使用了自定义协议，目的是更快地发送小数据块。特点是：

- **持久连接**：websocket协议支持持久连接，http协议不支持持久性连接
- **全双工通信**：服务端也可以主动向客户端发送信息，服务端和客户端双方可以同时给对方发送消息

## 状态码

|      |                      |                                                              |
| ---- | -------------------- | ------------------------------------------------------------ |
| 1000 | CLOSE_NORMAL         | 正常关闭; 无论为何目的而创建, 该链接都已成功完成任务。       |
| 1001 | CLOSE_GOING_AWAY     | 终端离开, 可能因为服务端错误, 也可能因为浏览器正从打开连接的页面跳转离开。 |
| 1002 | CLOSE_PROTOCOL_ERROR | 由于协议错误而中断连接。                                     |



## webpack-dev-server

https://webpack.docschina.org/configuration/dev-server/#websocketurl

[SockJs](https://www.npmjs.com/package/sockjs)

SockJS是一个浏览器JavaScript库，它提供了一个类似于网络的对象。SockJS提供了一个连贯的、跨浏览器的Javascript [API](https://so.csdn.net/so/search?q=API&spm=1001.2101.3001.7020)，它在浏览器和web服务器之间创建了一个低延迟、全双工、跨域通信通道。适用于一些缺少对WebSocket的支持的浏览器。

传输分为3类:WebSocket、HTTP流和HTTP长轮询