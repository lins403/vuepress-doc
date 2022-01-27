# Nginx

Nginx专为性能优化而开发，性能是其最重要的考量

- Nginx以事件驱动的方式编写，所以支持高并发，有非常好的性能

- 稳定性强
- 支持热部署
- 处理静态文件，索引文件以及自动索引 （，静态资源缓存？）
- 无缓存的反向代理加速，简单的负载均衡和容错

## 与其它服务器

|              | Apache | Nginx  | Lighttpd |
| ------------ | ------ | ------ | -------- |
| Proxy代理    | 非常好 | 非常好 | 一般     |
| Rewriter     | 好     | 非常好 | 一般     |
| Fcgi         | 不好   | 好     | 非常好   |
| 热部署       | 不支持 | 支持   | 不支持   |
| 系统压力比较 | 很大   | 很小   | 比较小   |
| 稳定性       | 好     | 非常好 | 不好     |
| 安全性       | 好     | 一般   | 一般     |
| 静态文件处理 | 一般   | 非常好 | 好       |
| 反向代理     | 一般   | 非常好 | 一般     |

## 模块依赖

1. gzip - `zlib`
2. rewrite - `pcre`
3. ssl  - `openssl`

## 核心功能应用

- 静态HTTP服务器
  - Nginx是一个HTTP服务器，可以将服务器上的静态文件（如HTML、JS、图片）通过HTTP协议展现给客户端
  - `root` `alias`
- 反向代理服务器
  - `proxy_pass`
  - 解决跨域，负载均衡、虚拟主机等等
- 负载均衡
  - `upstream`
  - 轮询策略，默认情况下采用的策略，将所有客户端请求轮询分配给服务端
  - 最小连接数策略，将请求优先分配给压力较小的服务器，以平衡每个队列的长度
  - 最快响应时间策略，将请求优先分配给响应时间最短的服务器
  - 客户端ip绑定策略，来自同一个ip的请求永远只分配一台服务器
- 虚拟主机
  - 不同域名的网站部署在同一台服务器，但是用户通过两个域名却可以打开两个完全不同的网站，互相不影响，就像访问两个服务器一样，所以叫两个虚拟主机
  - 不同域名下的http请求，根据server_name可以反向代理到对应的应用服务器
  - 通过HTTP请求头中的Host是否匹配 `server_name` 来实现
  - 可以用于设置二级域名
- FastCGI
  - Nginx本身不支持PHP等语言，但是它可以通过FastCGI来将请求扔给某些语言或框架处理（例如PHP、Python、Perl）
  - `fastcgi_pass`

## 概念

### 动静分离

意义：加快网站解析速度，降低单个服务器的压力

一般来说，都需要将动态资源和静态资源分开，由不同的服务器来解析，也是现在前后端分离的做法。

由于 Nginx 的高并发和静态资源缓存等特性，经常将静态资源部署在 Nginx 上。

- 如果请求的是静态资源，直接到静态资源目录获取资源
- 如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。

<img src="https://cdn.jsdelivr.net/gh/SHERlocked93/pic@env/uPic/2020-03-09-%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB.png" style="zoom:75%;" />



## 配置

### 基本结构

```bash
nginx.conf
├── events	# 配置影响nginx服务器或与用户的网络连接 (例如 worker_connections 设置最大同时连接数)
├── http
    ├── upstream
    ├── server
    └── server
        ├── location
        ├── location
        └── …
		└── …
```

### location

#### 语法

```nginx
location [ = | ~ | ~* | ^~ ] /URI { … }
location @/name/ { … }
```

#### 匹配规则

| 参数     | 解释                                                         |
| -------- | ------------------------------------------------------------ |
| **`空`** | location 后没有参数直接跟着 **标准 URI**，表示前缀匹配，代表跟请求中的 URI 从头开始匹配。 |
| **`=`**  | 用于**标准 URI** 前，要求请求字符串与其精准匹配，成功则立即处理，nginx停止搜索其他匹配。 |
| **`^~`** | 用于**标准 URI** 前，并要求一旦匹配到就会立即处理，不再去匹配其他的那些个正则 URI，一般用来匹配<u>目录</u> |
| **`~`**  | 用于**正则 URI** 前，表示 URI 包含正则表达式， **区分**大小写 |
| **`~*`** | 用于**正则 URI** 前， 表示 URI 包含正则表达式， **不区分**大小写 |
| **`@`**  | @ 定义一个命名的 location，@ 定义的locaiton名字不参与请求匹配，一般用在内部定向，<br />例如error_page, try_files命令中。它的功能类似于编程中的goto。 |

```nginx
#以 /img/ 开头的请求，如果链接的状态为 404，则会匹配到 @img_err 这条规则上
location /img/ {
  error_page 404 @img_err;
}

location @img_err {
  # 规则
}
```



#### 匹配优先级

```nginx
1. location =    # 精准匹配
2. location ^~   # 带参前缀匹配
3. location ~    # 正则匹配（区分大小写）（!!正则匹配是使用文件中的顺序，先匹配成功的返回）
4. location ~*   # 正则匹配（不区分大小写）
5. location /a   # 普通前缀匹配，优先级低于带参数前缀匹配。（!!前缀匹配下，返回最长匹配的 location，与所在位置顺序无关）
6. location /    # 任何没有匹配成功的，都会匹配这里处理
```

### gzip

nginx 有静态压缩和实时压缩(always)两种方式

- 如果 `gzip_static` 设置为 on 以后，检查本地是否有 precompressed files( `.gz` 文件)，如果有就直接作为压缩结果使用，而不再进行实时压缩，从而加快响应速度
- 如果 `gzip_static` 设置为 off 以后， `gzip` 能在webpack gzip已经压缩的结果上，进一步进行压缩

```nginx
http {
    gzip on;
    gzip_static on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 8;
    gzip_types     text/plain application/javascript application/x-javascript         
    text/javascript text/css application/xml;
    gzip_vary on;
    gzip_proxied   expired no-cache no-store private auth;
    gzip_disable   "MSIE [1-6]\.";
}
```

当客户端请求到服务端的时候，服务器解析请求头，如果客户端支持gzip压缩，响应时对请求的资源进行压缩并返回给客户端，浏览器按照自己的方式解析，在http响应头，我们可以看到content-encoding:gzip，这是指服务端使用了gzip的压缩方式。

### 静态资源服务器

```nginx
# 匹配静态资源的请求，并将请求转发到服务器本地路径
location ~* \.(css|js|jpg|png|gif|swf|woff|woff2|eot|svg|ttf|otf|mp3|m4a|aac|txt)$ {
    root    /root/static/;  
    autoindex on;
    access_log  off;
    expires     10h;	# 设置缓存过期时间为10小时，如果不希望缓存则设置为 -1;
}
```

```nginx
# 静态服务，使用 alias 支持url子路径
server {
  listen       80;
  server_name  static.sherlocked93.club;
  charset utf-8;    # 防止中文文件名乱码

  location /download {
    alias	          /usr/share/nginx/html/static/;  # 静态资源目录
    
    autoindex               on;    # 开启静态资源列目录
    autoindex_exact_size    off;   # on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB
    autoindex_localtime     off;   # off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间
  }
}
```

### 图片防盗链

```nginx
server {
  listen       80;        
  server_name  *.sherlocked93.club;
  
  # 图片防盗链
  location ~* \.(gif|jpg|jpeg|png|bmp|swf)$ {
    valid_referers none blocked server_names ~\.google\. ~\.baidu\. *.qq.com;  # 只允许本机 IP 外链引用，以及将搜索引擎加入白名单
    if ($invalid_referer){
      return 403;
    }
  }
}
```

### 请求过滤

```nginx
# 非指定请求全返回 403
if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
  return 403;
}

location / {
  # IP访问限制（只允许IP是 192.168.0.2 机器访问）
  allow 192.168.0.2;
  deny all;
  
  root   html;
  index  index.html index.htm;
}
```

### 配置二级域名

1. 在域名服务商处配置二级域名，添加需要被解析的主机记录如 `www`、 `blog`
2. nginx 配置

```nginx
http{
    server {  
        listen 80;
        server_name example.com;
        location / {
            proxy_pass         http://127.0.0.1:8001;
        }
    }
    server {  
        listen 80;
        server_name blog.example.com;
        location / {
            proxy_pass         http://127.0.0.1:8002;
        }
    }
}
```

###  HTTP 请求转发到 HTTPS

```nginx
server {
    listen      80;
    server_name www.sherlocked93.club;

    # 单域名重定向
    if ($host = 'www.sherlocked93.club'){
        return 301 https://www.sherlocked93.club$request_uri;
    }
    # 全局非 https 协议时重定向
    if ($scheme != 'https') {
        return 301 https://$server_name$request_uri;
    }

    # 或者全部重定向
    return 301 https://$server_name$request_uri;

    # 以上配置选择自己需要的即可，不用全部加
}
```

- 301适合永久重定向，域名跳转、https
- 302用来做临时跳转，搜索引擎会抓取新的内容而保留旧的地址，适用情况比如未登陆的用户访问用户中心重定向到登录页面

```nginx
# 使用 permanent 和 redirect 的方式
if ($host != 'baidu.com') {
  # 301
  rewrite ^/(.*)$ https://www.bilibili.com/$1 permanent;
  
  # 302
  rewrite ^/(.*)$ https://www.bilibili.com/$1 redirect;
}
```



### More

- 配置https
- 域名路径重写
- keepalive
- 使用auth_request进行鉴权

## 使用技巧

### 校验配置文件

```bash
nginx -t -q
# 没问题了再重启
nginx -s reload
```

### 拆分配置文件

```nginx
include /etc/nginx/conf.d/*.conf
# 如果放在http中，就可以在模块conf文件中添加server
# 如果放在server中，就可以在模块conf文件中添加location
```

### location URI结尾带不带 /

结论：location 中的字符有没有 `/` 都没有影响，效果完全一致

### 强制让http的访问变为Https

#### HTML

`public/index.html`

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
```

#### Nginx

通过 `upgrade-insecure-requests` 这个 CSP 指令，可以让浏览器帮忙做这个转换

```nginx
server{
	add_header Content-Security-Policy "upgrade-insecure-requests;connect-src *";
	# add_header Content-Security-Policy upgrade-insecure-requests
}
```

### 域名路径重写

```nginx
# 访问`http://localhost:8000/todo/xxx`将会被代理至`https://www.example.com/todo/xxx`。
location ^~/todo/{
		rewrite /(.*)$ /$1 break;
  	# 跳转第三方地址
		proxy_pass https://www.example.com;
}
```

### 去掉304 Not Modified

```nginx
location / {
		expires -1;
		if_modified_since off;
		add_header Last-Modified "";
		add_header Cache-Control no-cache;
		etag off;
        ......
}
```



## 踩坑

### net::ERR_SSL_PROTOCOL_ERROR

https域名下使用只有http的资源，浏览器出现 net::ERR_SSL_PROTOCOL_ERROR 错误

这个没招好像，只能让资源升级https，或者是将资源fork到本地了再引用

[javascript - How to deal with net::ERR_SSL_PROTOCOL_ERROR? - Stack Overflow](https://stackoverflow.com/questions/43232686/how-to-deal-with-neterr-ssl-protocol-error)

### 网页重载后页面丢失

（配置alias子路径时）刷新页面或修改window.location后，索引不到文件的问题

解决：

```nginx
location /yourPath {
    if ( !-e $request_filename) {
        rewrite ^(.*)$ /yourPath/index.html last;
        break;
    }
}
```

### 代理重写失效

```nginx
location /your-api {
	#rewrite ^/iot-large/login/(.*)$ /$1 break;
	#proxy_pass http://remote_ip:1234/api;
  rewrite ^/iot-large/login/(.*)$ /api/$1 break;
  proxy_pass http://remote_ip:1234;
}
```

### 配置websocket

```nginx
location /wx {
    rewrite ^/wx/(.*) /$1 break;
    proxy_pass http://<websocket-server-ip>:1234;
    proxy_http_version 1.1;
    proxy_connect_timeout 4s;
    proxy_read_timeout 120s;
    proxy_send_timeout 10s;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
wss:<your-website-url>/wx
```



# 参考

[Nginx从听说到学会 - 简书](https://www.jianshu.com/p/630e2e1ca57f)

[Nginx 从入门到实践，万字详解！ - 掘金](https://juejin.cn/post/6844904144235413512)

[一文理清 nginx 中的 location 配置（系列一）](https://segmentfault.com/a/1190000022315733)
