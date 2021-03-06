# 入门

## 全局变量

<img src="https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/global-objects.png" style="zoom:36%;" alt="https://tuture.co/2019/12/03/892fa12/"/>

[global 全局变量](http://nodejs.cn/api-v14/globals.html#global-objects)

- __dirname：当前模块的路径名
- __filename：当前模块的文件名
- exports：对 `module.exports` 的引用
- module：对当前模块的引用
- require()：用于导入模块、JSON 和本地文件
  - [CommonJS特点 > 文件加载机制](https://lins403.github.io/vuepress-doc/notes/engineering/modules/#%E7%89%B9%E7%82%B9)

## 核心模块

```
http：提供HTTP服务器功能。
url：解析URL。
fs：与文件系统交互。
querystring：解析URL的查询字符串。
child_process：新建子进程。
util：提供一系列实用小工具。
path：处理文件路径。
crypto：提供加密和解密功能，基本上是对OpenSSL的包装。
```

### http

开发 HTTP 服务器和客户端

### fs

文件系统

### path

文件和目录路径

### os

操作系统

### url

网址处理和解析

### 其它

- buffer缓冲区，处理二进制

- crypto 加密

- events事件触发器

- process进程
  - `process.argv` 读取命令行参数
  
    ```shell
    $ node process-args.js one two=three four
    
    # output
    0: /usr/local/bin/node
    1: /Users/mjr/work/node/process-args.js
    2: one
    3: two=three
    4: four
    ```
  
    ```js
    // print process.argv
    process.argv.forEach((val, index) => {
      console.log(`${index}: ${val}`);
    });
    console.log(process.argv[2])
    ```
  
  - `process.env` 环境变量（[`cross-env`](https://www.npmjs.com/package/cross-env) 跨平台设置 process.env.NODE_ENV）
  
- Stream流：处理流数据的抽象接口，流的读写要通过buffer缓冲来实现

