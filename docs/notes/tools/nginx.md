# Nginx

- Nginx以事件驱动的方式编写，所以有非常好的性能

- 处理静态资源
- 反向代理加速(无缓存)，简单的负载均衡和容错
- 高并发

## 重要概念

### 动静分离

意义：加快网站解析速度，降低单个服务器的压力

<img src="https://cdn.jsdelivr.net/gh/SHERlocked93/pic@env/uPic/2020-03-09-%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB.png" style="zoom:75%;" />



## 配置文件

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

