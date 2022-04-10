# 前端监控

## 性能监控

- Chrome的 `Lighthouse` 可以对网站的质量进行审查，会给出性能评分以及对应的优化建议

### 监控工具

LightHouse生成网站性能评测报告、JMeter测试http请求的并发效果，吞吐量等等，可以在控制台的network上看请求的大小和时间、使用Performance API，我们可以设置埋点，在页面 onload 以后利用 performance.getEntriesByType('resource') 获取所有资源加载时间，还可以用performance的mark()和measure()方法来计算时间差。

performance有一些属性可以用于数据采集，例如，performance.memory获取内存使用情况；在页面unload的时候通过浏览器navigator对象的beacon API发送给服务器。

最后的优化效果是白屏时间很短，页面的load时间也变短了，这两个时间我们都可以通过在页面上设置埋点收集数据，结合performance的API去计算。我可以在head标签里面添加一个script脚本，脚本中手动去设置一个时间埋点，然后我们需要页面导航开始的时间，这个值通过performance的api去取，performance.timing.navigationStart属性，用我们在页面开始时设置的那个时间埋点这个减去这个navigationstart的时间，大致就是页面白屏的时间。

也可以设置埋点，比如在DOM解析完成的DOMContentLoaded事件，或者页面解析完成的onload事件触发时，发送数据

```js
performance.getEntriesByType('resource').filter(resource=> resource.initiatorType == 'img')
```

> 通过这些优化，取得比较明显的提升效果，页面的加载效果也好了很多，我们通过埋点计算出来的，首页的白屏时间和页面加载时间都比较合理。通过这次实践，也是去完整的学习了nginx和webpack的构建和配置，加深了对语言和框架、http、以及浏览器的理解和应用

### 性能优化

**自带的**：tree-shaking减少没有使用到的代码、terser代码压缩、gzip文件压缩、preload打包后的bundle被预加载、prefetch异步加载的bundle在浏览器空闲的时候加载

- 打包构建速度方面：cache-loader缓存loader转换结果、thread-loader开启多进程充分利用多核CPU
- 代码压缩（删除空格和换行、删除注释、缩短变量名、函数名和其他标识符）

**Nginx**

- 配置Gzip开启HTTP压缩
- 配置一个静态资源服务器，指定目录下的静态资源就可以被通过http的方式访问，并且nginx会自行做缓存

**浏览器**

- 浏览器缓存，cache-control设置为no-cache使用协商缓存，还有个public值让代理服务器也可以缓存。

**打包构建方面**

- splitchunks拆分代码，使用路由懒加载，调整默认打包策略的阈值
- 使用CDN的方式剥离部分第三方依赖文件
- 将资源设置为异步加载，避免阻塞页面的解析，例如给script脚本添加async或defer属性

#### 代码方面

**Vue**

- 图片懒加载，图片到了页面的可视区域时才会被加载
- 数据层级不要太深，使用`Object.freeze`冻结不需要响应式的对象数据
- 组件方面，使用keep-alive缓存组件，采用性能更好的函数式组件，以及借助webpack实现路由懒加载等等
- 指令相关的，例如给不需要动态变化的元素使用v-once
- 合理使用key会加快渲染效率，不要用数组索引作为key值，因为会导致Diff算法的bug

**DOM交互**（非首页）

- 替换HTML节点的时候，要注意移除原节点上的监听事件

- 事件委托

- 减少重排重绘

  - 需要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示

  - 需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document

  - 多次操作DOM节点子元素时，可以使用`DocumentFragment`来构建 DOM 结构，创建完成以后一次性的加入DOM中，可以减少浏览器重排。

  - 尽量避免用table布局(table元素一旦触发回流就会导致table里所有的其它元素回流)

**JavaScript**

- requestAnimationFrame（例如渲染长列表时的时间分片，分段渲染数据，每次任务放在这个API中）
- 尾调用优化
- 循环优化
- 不使用with语句
- 通过临时变量来缓存查询结果，避免重复查询（例如HTMLCollection、嵌套过深的对象属性）
- 一些方法上的选择，例如不需要返回一个新数组的时候，就优先选择性能更好的forEach而不是map

**CSS**

- css中使用`transform`属性，不会引发重排重绘
- `will-change`、transform3D变化例如`translate3D`, `scaleZ` 之类，它们都会启用GPU加速（浏览器是一个多进程架构，GPU进程、渲染进程，都是独立的进程）



## 数据监控/用户行为埋点

- 手工埋点：优点是可定制化，缺点是工作量大且容易出错，更新成本也很大
  - 前端埋点用来记录用户在客户端的操作行为，后端埋点用来记录客户端进行服务器请求的日志。
  - 被访问次数最多的地方，用户在页面的停留时长、浏览深度
  - 通过 sendBeacon 上报，不兼容的情况就用 gif 上报（利用html2canvas结合setTimeout和requestAnimationFrame进行定时截图，或者使用webrtc录制屏幕并结合gifshot将视频转换为gif）

- 无埋点：通过设置一段定义好的SDK代码，前端会自动全量采集全部事件并上报埋点数据
- 可视化埋点：通过第三方平台来设置埋点，实现可视化的页面交互手段来代替编写代码
  - 使用者只需在其可视化埋点页面上，点击想要监测的元素，然后起个名字、给个编号，埋点就完成了
  - xpath




## 异常监控

```js
import Vue from 'vue';
import store from './store'

Vue.config.errorHandler = function (err, vm, info) {

  Vue.nextTick(() => {
    store.commit('ADD_LOGS', {
      type: 'error',
      message: err.message,
      stack: err.stack,
      info
    });
    if (process.env.NODE_ENV === 'development') {
      window.console.group('>>>>>> 错误信息 >>>>>>');
      window.console.error(info);
      window.console.groupEnd();
      
      window.console.group('>>>>>> Vue 实例 >>>>>>');
      window.console.log(vm);
      window.console.groupEnd();
      
      window.console.group('>>>>>> Error >>>>>>');
      window.console.log(err);
      window.console.groupEnd();
    }
  })
}
```

全局捕获错误，存储到vuex的store中，然后设计一个组件来展示，开发者可以选择清除日志，或者上传日志至服务器。
