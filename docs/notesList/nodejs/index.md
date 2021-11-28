# 扫盲

[前端科普系列-Node.js:换个角度看世界](https://zhuanlan.zhihu.com/p/91844181)

## 预备知识

### 计算机原理

#### 任务

- CPU密集型，CPU-bound（计算密集型）
- IO密集型，IO-bound

#### 存储

1. RAM，Random Access Memory
   - 读取速度比ROM快很多，但不稳定( volatile )，断电后数据会丢失
2. ROM，Read Only Memory
   - 稳定，数据会被一直保存
3. Flash Memory，闪存
   - 用在相机、U盘等等

---

### 后端相关

#### 驱动

- 数据驱动
- 事件驱动
  - 发布订阅模式（观察者模式）
  - events.on / events.emit / ...

---

### 性能相关

#### 指标

- QPS (Queries per second)、TPS (Transactions Per Second)
  - TPS 用于统计一个页面的访问量，而这个页面可能有多个request，就用 QPS 来统计
- 并发量 (Concurrency)
  - 并发量 = QPS * 平均响应时间
- 吞吐量 (Throughput)
  - 数据层的指标，指单位时间内系统传输的数据量，以MB/GB等为单位

#### 高并发系统设计

- 高并发、低延时
- 高性能、高可用、高扩展

## 特点

- 异步事件驱动
- 非阻塞 IO
- 可扩展性

> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. 
> 
>  It presents an [event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) as a runtime construct instead of as a library. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. 【内置event loop，无需用户启用】
> 
> HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.
> 
> Node.js being <u>designed without threads</u>【被设计成单线程】 doesn't mean you can't take advantage of multiple cores in your environment.【node也可以使用多进程】

## 基本原理

<img src="https://image-static.segmentfault.com/234/648/2346487390-5ab46904a01be_fix732" style="zoom:50%;" />

- `V8` 解释并执行 JavaScript 代码
- `libuv` 由事件循环和线程池组成，负责所有 I/O 任务的分发与执行
  - 将等待中的 I/O 任务放到 Event Loop 里，由 Event Loop 将 I/O 任务分发到 Thread Pool 里
  - 所以node的单线程指的是接收任务的时候，无需进程/线程切换上下文的成本，所以高效，但是执行任务时是在线程池中通过多线程执行
- 在`Node.js Bindings`层做的事儿就是将 Chrome V8 等暴露的 `C/C++` 接口转成JavaScript Api，并且结合这些 Api 编写了 Node.js 标准库，所有这些 Api 统称为 Node.js SDK

## 应用场景

| 分类                       | 相关模块                                 |
| ------------------------ | ------------------------------------ |
| 网站 / API代理 / [SSR & PWA] | Express、Koa                          |
| HTTP Api 接口              | Restify、HApi                         |
| 前端构建工具                   | Grunt / Gulp / Bower / Webpack / ... |
| 跨平台打包工具                  | electron、nw.js                       |
| 编辑器                      | electron                             |
| ...                      |                                      |

## 安装配置

删除原来的 node

```sh
sudo npm uninstall npm -g
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
sudo rm -rf /usr/local/include/node /Users/$USER/.npm
sudo rm /usr/local/bin/node
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
```

```sh
node -v
npm -v
```

改用 homebrew 安装

```sh
# 卸载原来安装的最新版本node
(base) MacBook-Pro➜  ~  ᐅ  history -5
 4452  brew uninstall yarn
 4453  brew uninstall node
 4454  brew list node
 4455  brew list npm
 4456  brew search node
```

```sh
brew install node@14
# brew list node@14
brew link node@14
node -v        # v14.16.1
npm -v        # 6.14.12
```

## 学习核心

### 异步流程控制

Node.js的API都是异步的，同步的函数是奢求，要查API文档，在高并发场景下慎用。

异步解决方案：

- Api写法：Error-first Callback 和 EventEmitter 
- Promise 
- async/await

# 参考

<https://xie.infoq.cn/article/20c3ad1736d027615b12d6b20>

<https://nodejs.org/en/about/>

[【全文】狼叔：如何正确的学习Node.js](https://segmentfault.com/a/1190000013933520)
