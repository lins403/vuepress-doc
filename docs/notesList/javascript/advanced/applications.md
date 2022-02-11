# 应用

## Web API

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



### 2）Performance

High Resolution Time，高时间采样率，其精确度可达千分之一毫秒（受硬件或软件限制）

```
console.log(window.performance)
```

```js
// 只适用于日期时间相关操作，而且是不要求计时精度的操作
data.now()

// 返回一个精确到毫秒的DOMHighResTimeStamp，但这个时间戳实际上并不是高精度的，为了降低安全威胁，浏览器做了不同程度上的四舍五入处理。
performance.now()

// 返回一个表示 the performance measurement 开始时间的高精度timestamp
performance.timeOrigin
```

#### 使用mark()和measure()测量

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



### 3）Beacon API

为了把尽量多的页面信息传到服务器，很多分析工具需要在页面生命周期中尽量晚的时候向服务器 发送遥测或分析数据。因此，理想的情况下是通过浏览器的 unload 事件发送网络请求。在 unload 事件触发时，分析工具要停止收集信息并把收集到的数据发给服务器。

但是，在 unload 事件处理程序中创建的任何异步请求都会被浏览器取消。为此，异步 XMLHttpRequest 或 fetch()不适合这个任务。分析工具可以使用同步 XMLHttpRequest 强制发送请求，但这样做会导致用户体验问题。浏览器会因为要等待 unload 事件处理程序完成而延迟导航到下一个页面。

为解决这个问题，W3C 引入了补充性的 Beacon API，这个 API 给 navigator 对象增加了一个 sendBeacon()方法

信标（Beacon ）请求使用HTTP协议中的POST方法，请求通常不需要响应。这个请求被保证在页面的unload状态，从发起到完成之前被发送。

```js
window.addEventListener('unload', logData, false);

function logData() {
  const analyticsData = '{foo: "bar"}'
  navigator.sendBeacon('https://example.com/analytics-reporting-url', analyticsData);
}
```
