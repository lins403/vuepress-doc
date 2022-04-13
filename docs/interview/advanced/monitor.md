# 前端监控

## 性能监控

- Chrome的 `Lighthouse` 可以对网站的质量进行审查，会给出性能评分以及对应的优化建议
- 一直用的最新的Chrome，现在版本都100了，Chrome的开发工具可太强大了，还可以分析页面的性能、内存、图层、性能监控、渲染、网络状况

### 监控工具

LightHouse生成网站性能评测报告，会评测网站的性能、SEO评分，并且给出对应的优化建议。

JMeter测试http请求的并发效果，吞吐量等等，可以在控制台的network上看请求的大小和时间、使用Performance API，我们可以设置埋点，在页面 onload 以后利用 performance.getEntriesByType('resource') 获取所有资源加载时间，还可以用performance的mark()和measure()方法来计算时间差。

performance有一些属性可以用于数据采集，例如，performance.memory获取内存使用情况；在页面unload的时候通过浏览器navigator对象的beacon API发送给服务器。

最后的优化效果是白屏时间很短，页面的load时间也变短了，这两个时间我们都可以通过在页面上设置埋点收集数据，结合performance的API去计算。我可以在head标签里面添加一个script脚本，脚本中手动去设置一个时间埋点，然后我们需要页面导航开始的时间，这个值通过performance的api去取，performance.timing.navigationStart属性，用这个navigationstart的时间减去我们在页面开始时设置的那个时间埋点，这个时间差大致就是页面白屏的时间。

也可以设置埋点，比如在DOM解析完成的DOMContentLoaded事件，或者页面解析完成的onload事件触发时，发送数据

```js
// 获取img资源的加载时长
performance.getEntriesByType('resource').filter(resource=> resource.initiatorType == 'img')
```

> 通过这些优化，取得比较明显的提升效果，页面的加载效果也好了很多，我们通过埋点计算出来的，首页的白屏时间和页面加载时间都比较合理。通过这次实践，也是去完整的学习了nginx和webpack的构建和配置，加深了对语言和框架、http、以及浏览器的理解和应用



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
