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
