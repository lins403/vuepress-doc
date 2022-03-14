# Web Worker

通过使用Web Workers，Web应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是UI线程）不会因此被阻塞/放慢。

在worker线程中你可以运行任何你喜欢的代码，不过有一些例外情况。比如：

1. 在worker内，不能直接操作DOM节点.
2. 不能使用window对象的默认方法和属性。

workers和主线程间的数据传递通过这样的消息机制进行——双方都使用`postMessage()`方法发送各自的消息，使用`onmessage`事件处理函数来响应消息。这个过程中数据并不是被共享而是被复制（[结构化克隆算法](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)）。

只要运行在同源的父页面中，workers可以依次生成新的workers；并且可以使用`XMLHttpRequest` 进行网络I/O，但是XMLHttpRequest的responseXML和channel属性总会返回null。

> 浏览器中不允许，在从本地加载的脚本中使用web workers。
>
> Uncaught SecurityError: Failed to create a worker: script at '(path)/worker.js' cannot be accessed from origin 'null'.
>
> 方法有很多，最简便有效的是利用如[serve](https://www.npmjs.com/package/serve)等工具，为本地静态资源启用一个server

## 工作者线程的类型

1. 专用worker ：Dedicated workers

   - `new Worker`

   - 可以让脚本单独创建一个 JavaScript 线程，以执行委托的任务。
   - 专用指的是只能被创建它的页面使用

2. 共享worker

   - `new SharedWorker`

   - 与专用worker的主要区别是，共享worker可以被多个不同的上下文使用，包括不同的页面。

3. 服务worker：Service Workers

   - 浏览器与服务器间的代理，拦截request然后返回缓存，实现离线访问

## 专用worker

也可以称为称为后台脚本，JavaScript 线程的各个方面，包括生命周期管理、代码路径和输入/输出，都由初始化线程时提供的脚本来控制。该脚本也可以再请求其他脚本， 但一个线程总是从一个脚本源开始。

专用工作者线程隐式使用了 [MessagePorts](https://developer.mozilla.org/zh-CN/docs/Web/API/MessagePort) 在两个上下文之间通信。

### 实例化

```js
/**
 * @param {string} aURL - 表示worker将执行的脚本的URL，它必须遵守同源策略。
 * @param {string} options.type - 指定worker类型，可以是 classic 或 module，默认是classic
 * @param {string} options.credentials
 * @param {string} options.name
 * @return {Worker} - 创建的worker
 */
const myWorker = new Worker(aURL, options);

// commonJS 模块
const scriptWorker = new Worker('scriptWorker.js');

// ECMAScript 6 模块与 Worker 实例完全兼容
const moduleWorker = new Worker('moduleWorker.js', { type: 'module' });
```

### Worker对象方法

1. `Worker.postMessage()`

   ```js
   // 向worker的内部作用域发送一个aMessage消息，消息可由任何js对象组成。
   // 第二个参数表示使用可转移对象（ArrayBuffer、MessagePort、ImageBitmap、OffscreenCanvas），在不太可能在上下文间复制大量数据的情况下，这个功能特别有用
   myWorker.postMessage(aMessage, transferList);
   ```

2. `Worker.terminate()`

   ```js
   // 立即终止worker。
   // 该方法不会给 worker 留下任何完成操作的机会,就是简单的立即停止。
   // Service Woker 不支持这个方法。
   myWorker.terminate();
   ```

### Worker事件处理程序属性

1. onerror
2. onmessage
3. onmessageerror

### 全局作用域

在专用工作者线程内部，全局作用域是 DedicatedWorkerGlobalScope 的实例。因为这继承自 WorkerGlobalScope，所以包含它的所有属性和方法。工作者线程可以通过 `self` 关键字访问该全局作用域。

#### 增加的属性和方法

- name: 可以提供给 Worker 构造函数的一个可选的字符串标识符。
- postMessage(): 与 worker.postMessage()对应的方法，用于从工作者线程内部向父上下文发送消息。
- close(): 与 worker.terminate()对应的方法，用于立即终止工作者线程。
- importScripts(): 用于向工作者线程中引入任意数量的脚本。
  - 在工作者线程内部可以请求来自任何源的脚本。
  - 这里的脚本导入策略类似于使用生成的`<script>`标签动态加载脚本
  - 在这种情况下，所有导入的脚本也会共享（worker脚本的）作用域。

### 示例

#### 1）通过 Blob 对象 URL 在行内脚本创建worker

```js
// 创建要执行的 JavaScript 代码字符串
const workerScript = `
	self.onmessage = ({data}) => console.log(data);
`;

// 函数序列化
const workerFuncScript = `
	self.postMessage((${fibonacci.toString()})(9) );
`;

// 基于脚本字符串生成 Blob 对象
const workerScriptBlob = new Blob([workerScript]);

// 基于Blob实例创建对象URL
const workerScriptBlobUrl = URL.createObjectURL(workerScriptBlob);

// 基于对象 URL 创建专用工作者线程
const worker = new Worker(workerScriptBlobUrl);

worker.postMessage('blob worker script');
// blob worker script
```

#### 2）表单输入处理worker

```html
<form>
  <input type="text" id="myInput" value="0">
</form>

<script src="main.js"></script>
```

```js
/** main.js **/
const input = document.querySelector('#myInput');
if (window.Worker) {
  const myWorker = new Worker("worker.js");

  input.onchange = function() {
    myWorker.postMessage(input.value);
    console.log('Message posted to worker');
  }

  // myWorker.addEventListener('message', function(e) {}
  myWorker.onmessage = function(e) {
    console.log('Message received from worker: ', e.data);
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
```

```js
/** worker.js **/
var a = 1
const b = 2
//self.onmessage
onmessage = function(e) {
  console.log('Worker: Message received from main script');
  //console.log('Worker global scope: ', self);
  console.log(self.a, self.b)	//1 undefined
  const result = Array.isArray(e.data)? e.data[0]: e.data;
  if (isNaN(result)) {
    postMessage('You donot type a number.We will close this worker.');
    close()	//close()与worker.terminate()对应，用于立即终止工作者线程
  } else {
    console.log('Worker: Posting message back to main script');
    postMessage('Result: ' + Number(result));
  }
}
```

#### 3）创建子工作线程

```js
/** main.js **/
const worker = new Worker('./js/worker.js'); 
// worker
// subworker

/** js/worker.js **/
console.log('worker');
const worker = new Worker('./subworker.js');

/** js/subworker.js **/
console.log('subworker');
```



## 例子

在许多情况下，可以将纯计算工作移到 Web Worker，例如，如果它不需要 DOM 访问权限。数据操作或遍历（例如排序或搜索）往往很适合这种模型，加载和模型生成也是如此。

```js
var dataSortWorker = new Worker("sort-worker.js");
dataSortWorker.postMesssage(dataToSort);

// The main thread is now free to continue working on other things...

dataSortWorker.addEventListener('message', function(evt) {
   var sortedData = evt.data;
   // Update data on screen...
});
```



## 共享worker

共享的脚本都通过 `MessagePort` 对象来访问worker，这个对象用`SharedWorker.port`属性获得。

```js
// 创建一个共享进程对象
var myWorker = new SharedWorker("worker.js");

// 使用start()方法手动启动端口
myWorker.port.start();
```

### SharedWorkerGlobalScope

与专用工作者线程一样，共享工 作者线程也可以通过 `self` 关键字访问该全局上下文。

`SharedWorkerGlobalScope.onconnect`：与共享线程建立新连接时的处理程序

- connect 事件包括 MessagePort 实例的 ports 数组，可用于把消息发送回父上下文。
- 每次调用 SharedWorker()构造函数，无论是否创建了工作者线程，都会在共享线程内部触发 connect 事件。
- 在通过 worker.port.onmessage 或 worker.port.start()与共享线程建立连接时都会触发 connect 事件。
- connect 事件也可以通过使用 sharedWorker.addEventListener('connect', handler)处理。

与 Worker 对象不同，SharedWorker 对象上没有 terminate()方法。在共享线程端口上调用 close() 时，只要还有一个端口连接到该线程,就不会真的终止线程。

```js
/** sharedWorker.js **/
let i = 0;
self.onconnect = () => console.log(`connected ${++i} times`);

/** main.js **/
for (let i = 0; i < 5; ++i) {
  new SharedWorker('./sharedWorker.js');
}
// connected 1 times
// connected 2 times
// connected 3 times
// connected 4 times
// connected 5 times
```



## Service Workers

服务工作者线程(service worker)是一种类似浏览器中代理服务器的线程，可以拦截外出请求和缓存响应。这可以让网页在没有网络连接的情况下正常使用，因为部分或全部页面可以从服务工作者线程缓存中提供服务。服务工作者线程也可以使用 Notifications API、Push API、Background Sync API 和 Channel Messaging API。

服务工作者线程在两个主要任务上最有用：充当网络请求的缓存层和启用推送通知。在这个意义上，服务工作者线程就是用于把网页变成像原生应用程序一样的工具。

- 没有全局构造函数。service worker是通过 ServiceWorkerContainer 来管理的，它的实例保存在 navigator.serviceWorker 属 性中。

- 注册方式：`navigator.serviceWorker.register('./serviceWorker.js')`，register()方法返回一个期约

- 服务工作者线程遵循控制反转(IoC，Inversion of Control)模式并且是事件驱动的。

- 与共享工作者线程类似，来自一个域的多个页面共享一个服务工作者线程。

- ServiceWorkerGlobalScope 继承自 WorkerGlobalScope，因此拥有它的所有属性和方法。服务工作者线程可以通 过 `self` 关键字访问该全局上下文。

  

### PWA

可以通过 Service workers 让 PWA 离线工作，以及支持消息的推送通知（处理通知、订阅推送）



## Recap

工作者线程可以运行异步 JavaScript 而不阻塞用户界面。这非常适合复杂计算和数据处理，特别是需要花较长时间因而会影响用户使用网页的处理任务。工作者线程有自己独立的环境，只能通过异步消息与外界通信。

工作者线程可以是专用线程、共享线程。专用线程只能由一个页面使用，而共享线程则可以由同源的任意页面共享。

服务工作者线程用于让网页模拟原生应用程序。服务工作者线程也是一种工作者线程，但它们更像是网络代理，而非独立的浏览器线程。可以把它们看成是高度定制化的网络缓存，可以从缓存中加载资源，它们也可以在 PWA 中支持推送通知。
