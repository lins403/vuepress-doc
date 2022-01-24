# Nginx单个端口多项目配置策略

适合用于有一定规模的项目拆分，将耦合度较低的功能页面分离出来，到一个独立的子项目。通过nginx的alias配置让nginx将请求定位到对应子项目的静态页面上，多个子项目可以共享域名，例如用于https

## 项目配置

### Main Project

#### dotenv

照常配置不受影响

#### 路由配置

history模式

```js
const router = new VueRouter({
  mode: 'history',
  // 主项目不需要配置
  // base: process.env.BASE_URL,
  routes
})
```

#### vue.config.js

配置资源路径 `publicPath`

```js
module.exports = {
    // root path
  publicPath: '/'
  // ...
}
```

### Alternatives

#### dotenv

`.env.production`

```
NODE_ENV = 'production'
BASE_API = '/hello'
```

#### 路由配置

history模式

```js
const routes = [
  // routes中照常配置
]
const router = new VueRouter({
  mode: 'history',
  base:  process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '',
  routes
})
```

#### vue.config.js

配置资源路径 `publicPath`

```js
module.exports = {
    // ...
  publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/',
  // ...
}
```

## Nginx配置

```shell
server { 
        # …

        # main
    location / {
        root /home/zhxc/lins/dist/;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

        # alternatives
    location /hello {
        alias /home/zhxc/lins/hello/;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
        # 解决页面重载(例如刷新页面或修改window.location)后找不到索引文件的问题
        if ( !-e $request_filename) {
          rewrite ^(.*)$ /dv/index.html last;
          break;
        }
    }

    # …
}
```

http://nginx.org/en/docs/http/ngx_http_core_module.html#alias

`nginx -t`

## 效果

![]()