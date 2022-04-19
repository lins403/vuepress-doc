# Web API

[Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API)

### 1）读取本地文件（FileReader）

[JavaScript 如何读取本地文件](https://segmentfault.com/a/1190000021436482)，主要四个步骤：

1. `<input type='file' />`
2. input file 节点有一个`files`属性，包含对应文件的`File`对象
3. 实例化`FileReader`类，给实例绑定`onload`事件，读取结果保存在实例的`result`属性
4. 使用实例方法来读取对应类型的文件，如
   - readAsText(file, encoding)，从文件中读取纯文本内容并保存在 result 属性中
   - readAsDataUrl(file)，文件内容保存成数据`URI`的形式，可以用于作为src属性显示图片
   - readAsBinaryString(file)，涵盖每个字符的二进制数据
   - readAsArrayBuffer(file)，转成ArrayBuffer，再转成Blob然后用于读取Excel和Word文件等

[Blob、File 和 FileReader](https://lins403.github.io/vuepress-doc/notesList/javascript/advanced/binary.html#file-%E5%92%8C-filereader)



## 2）Performance

```js
console.log(window.performance)
```

### now

`performance.now()`方法返回一个精确到毫秒的 DOMHighResTimeStamp 。

High Resolution Time，高时间采样率，其精确度可达千分之一毫秒（受硬件或软件限制）

这个时间戳实际上并不是高精度的。为了降低像Spectre这样的安全威胁，各类浏览器对该类型的值做了不同程度上的四舍五入处理。这是由于浏览器试图保护用户免受**时序攻击(timing attack)**和**指纹采集(Fingerprinting )**，如果时间戳过于准确，黑客可以使用它们来识别用户。例如，Firefox等浏览器试图通过将精度降低到2ms(版本60)来防止这种情况发生。

```js
const t0 = performance.now();
for (let i = 0; i < array.length; i++) {
  // some code
}
const t1 = performance.now();
console.log(t1 - t0, 'milliseconds');
```

#### 与Date.now的差异

`Date.now`返回自Unix纪元（1970-01-01T 00:00:00Z）以来经过的时间（以毫秒为单位），并取决于系统时钟。 这不仅意味着它不够精确，而且还不总是递增。 WebKit工程师（Tony Gentilcore）的解释如下：

> 基于系统时间的日期可能不太会被采用，对于实际的用户监视也不是理想的选择。 大多数系统运行一个守护程序，该守护程序定期同步时间。 通常每15至20分钟将时钟调整几毫秒。 以该速率，大约10秒间隔的1％将是不准确的。

```js
// 只适用于日期时间相关操作，而且是不要求计时精度的操作
date.now()

// 返回一个精确到毫秒的DOMHighResTimeStamp，但这个时间戳实际上并不是高精度的，为了降低安全威胁，浏览器做了不同程度上的四舍五入处理。
performance.now()

// 返回一个表示 the performance measurement 开始时间的高精度timestamp
performance.timeOrigin
```

### 使用mark()和measure()测量

- 度量数据进出的浏览器时间差（执行上下文）

`performance.measure(name, startMark, endMark)`

```js
// 以一个标志开始。
performance.mark("mySetTimeout-start");

// 等待一些时间。
setTimeout(function() {
  // 标志时间的结束。
  performance.mark("mySetTimeout-end");

  // 测量两个不同的标志。
  performance.measure("mySetTimeout", "mySetTimeout-start", "mySetTimeout-end");

  // 获取所有的测量输出（duration）
  var measures = performance.getEntriesByName("mySetTimeout");
  var measure = measures[0];
  console.log("setTimeout milliseconds:", measure.duration)

  // 清除存储的标志位
  performance.clearMarks();
  performance.clearMeasures();
}, 1000);
```

《高程4》20.10 计时API

### 资源性能数据

从 performance entry buffer 获取数据：

1. performance.getEntries()
2. performance.getEntriesByName()
3. performance.getEntriesByType()



### 3）Beacon API

为了把尽量多的页面信息传到服务器，很多分析工具需要在页面生命周期中尽量晚的时候向服务器 发送遥测或分析数据。因此，理想的情况下是通过浏览器的 unload 事件发送网络请求。在 unload 事件触发时，分析工具要停止收集信息并把收集到的数据发给服务器。

但是，在 unload 事件处理程序中创建的任何异步请求都会被浏览器取消。为此，异步 XMLHttpRequest 或 fetch()不适合这个任务。分析工具可以使用同步 XMLHttpRequest 强制发送请求，但这样做会导致用户体验问题。浏览器会因为要等待 unload 事件处理程序完成而延迟导航到下一个页面。

为解决这个问题，W3C 引入了补充性的 Beacon API，这个 API 给 navigator 对象增加了一个 sendBeacon() 方法

信标（Beacon ）请求使用HTTP协议中的POST方法，请求通常不需要响应。这个请求被保证在页面的unload状态，从发起到完成之前被发送。

```js
window.addEventListener('unload', logData, false);

function logData() {
  const analyticsData = '{foo: "bar"}'
  navigator.sendBeacon('https://example.com/analytics-reporting-url', analyticsData);
}
```



## Javascript Workers

都是运行在浏览器主线程外的，独立线程上的脚本；

不同之处在于它们各自的用处和具备的特性：

- Web workers
  - 通用脚本，用于分担主线程上处理器密集型的工作

- Service workers
  - 浏览器与网络间的代理，拦截request然后返回缓存，实现离线访问
- Worklets
  - 浏览器渲染管道的hooks，开发者可以通过它访问浏览器渲染进程，例如样式计算和布局

## MessageChannel 和 BroadcastChannel

- The Channel Messaging API is a great way to send 1-to-1 messages from a window to an iframe, from a window to a Web Worker, and so on.
- The BroadcastChannel API can be used to send 1-to-many messages, communicating to multiple entities at the same time.
