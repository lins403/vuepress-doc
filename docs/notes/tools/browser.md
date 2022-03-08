# 浏览器

## BOM和DOM

- 浏览器对象模型（Browser Object Model，简称 BOM），也就是 `window` 对象
- 文档对象模型（Document Object Model，简称 DOM），也就是 `document` 对象

## 浏览器分析

```js
console.log(window.navigator.userAgent)	//用户代理

 浏览器
 浏览器版本
 浏览器渲染引擎
 设备类型(桌面/移动)
 设备生产商
 设备型号
 操作系统
 操作系统版本

console.log(window.navigator.platform)
console.log(navigator.deviceMemory)
console.log(navigator.hardwareConcurrency)
```



## 离线存储

### localStorage

- Chrome有5M大小限制
- 只支持字符串

### indexedDB

Indexed Database API 简称 IndexedDB，是浏览器中存储<u>结构化数据</u>（也包括File/Blob）的一个方案。

IndexedDB 用于代替目前已废弃的 Web SQL Database API。

IndexedDB 背后的思想是创造一套 API，方便 JavaScript 对象的存储和获取，同时也支持查询和搜索。

- 实例：[HTML5 indexedDB前端本地存储数据库实例教程](https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/)

### 其它

- Web SQL Database（已废弃）

- CacheStorage（experimental）

### indexedDB 与 Web SQL Database

`Web SQL Database`

- 关系型数据库，类似SQLite
- 事务操作要写SQL

`indexedDB`

- NoSQL数据库，一个基于 JavaScript 的面向对象数据库
- 写法对JS开发者更友好，存储和检索通过键来索引
- 异步执行操作，以免阻塞应用程序

### indexedDB 与 localStorage

- 都是实现了客户端的离线存储，但是数据默认都没有加密，谨慎使用敏感信息
- localStorage兼容IE8+，indexDB兼容IE10+
- localStorage仅支持存储字符串，而indexDB几乎可以任何格式，包括图片的Blob数据（IE需要考虑兼容性）
- indexDB可以在web workers 和 service workers中使用
- 使用 IndexedDB 执行的操作是异步执行的，而webStorage是同步阻塞的

### localForage

- 根据浏览器的支持情况，依次选择 `IndexedDB` | `WebSQL` | `localStorage` 其中一种进行存储数据
- 类似 localStorage 的API风格
- 异步get和set，支持Promise和callback

[localForage 中文文档](https://localforage.docschina.org/#localforage)

## 渲染原理

The pixel pipeline:  <u>JavaScript > Style calculations > Layout > Paint > Composite</u>

像素管道：JavaScript » 样式计算 » 布局 » 绘制 » 合成

**JavaScript**：使用 JavaScript 来实现一些视觉变化的效果，例如使用requestAnimationFrame钩子，在浏览器下一次重排重绘以前执行其中的callback

**样式计算**：匹配selectors，应用css规则，计算每个元素的最终样式

**布局**：计算它要占据的空间大小及其在屏幕的位置

**绘制**：创建绘图调用的列表（a list of draw calls），填充像素（栅格化rasterize），绘制多个图层

**合成**：合成多个图层

为了确保平滑滚动和动画，占据<u>**主线程**</u>的所有内容，包括计算样式，以及reflow和paint，必须让浏览器在<u>**60帧（16.67毫秒）**</u>内完成。为了确保重绘repaint的速度比初始绘制的速度更快，屏幕上的绘图通常被分解成数层。如果发生这种情况，则需要进行合成。

绘制可以将Layout tree中的元素分解为多个层。将内容提升到GPU上的层，可以提高绘制和重绘的性能。

渲染进程：<u>主线程 (main thread)、合成线程 (compositor thread)</u>、栅格线程

## 重排和重绘

### 重排reflow

> *Reflow* is any subsequent size and position determination of any part of the page or the entire document.
> 
> The first time the size and position of nodes are determined is called *layout*. Subsequent recalculations of node size and locations are called *reflows*. 

修改了元素的layout属性，影响到其它元素的布局，例如  width, height, position 等等

Recalculate Style-->Layout-->Update Layer Tree-->以及之后各个流程

### 重绘repaint

修改了元素的“paint only”属性，不会影响到页面布局，例如 background, text color, shadows 等等，浏览器的渲染会掉过布局，直接进行绘制

Recalculate Style-->Update Layer Tree-->以及之后各个流程

### 影响重排重绘的属性

[CSS properties by style operation required - Google ](http://goo.gl/lPVJY6)

#### 特殊

> 页面渲染的一般过程为`JS` > `CSS` > `计算样式` > `布局` > `绘制` > `渲染层合并`。而在这个过程中，其中重排和重绘是整个环节中最为耗时的两环。从重绘和重排的概念上看，重排比重绘更加的消耗性能，所以我们尽量避免这两个环节。从性能方面考虑，最理想的渲染流水线是没有布局和绘制环节的，只需要做渲染层的合并即可。

- 滚动
- <u>opacity、transform</u>（通过transform实现的动画不需要进行样式计算、布局和绘制等操作）

既不要布局也不要绘制，浏览器会跳过布局和绘制，直接执行合成

### 总结

重排和重绘都是占用浏览器主线程，主线程JavaScript的执行可能就会给页面的重排和重绘造成影响，造成下一帧的画面不能按时渲染， 例如导致动画卡顿

---

我觉得有不少歧义，按MDN的解释加之我的理解，浏览器会解析css构建CSSOM，然后和DOM树一起合并（combined）生成render tree，随后执行layout布局，去遍历render tree，确定树中每个node的size和position，依照每个元素的盒模型属性进行排列，这样子才得到了Layout tree。

paint阶段就是将Layout tree上的每个box转换成页面上的实际像素。

而为了保证能在60帧内完成渲染，需要确保重绘的性能比原始绘制时高，paint阶段会将layout tree的元素取出分成多个图层，不同图层相互重叠的时候就要合成（composite），按照绘制顺序合成多个图层，然后展示到屏幕上。

把图层分块（tile），对每个块单独栅格化，填充像素到位图上，生成一帧，然后上传GPU。按MDN说的，图层当是将内容提升到GPU上的层。

`<canvas>` 和 `<video>`，以及使用 `opacity` 和 `transform` 这些css属性的元素，可以实例化一个图层（instantiate a layer），这些元素和它们的后代节点，都会在这个图层上独立进行绘制，从而避开了主线程中的layout与paint环节。

[Populating the page: how browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)

requestAnimationFrame我看到别的博客提到节流效果，用节流解释太妙了。



## 技巧

`Cmd+Shft+R` 无缓存重载页面
