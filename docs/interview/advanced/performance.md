# 网站性能

- Critical rendering path.
- Service workers
- Image optimizations.
- Lazy loading and bundle splitting.
- General implications of HTTP/2 and server-push.
- When to prefetch and preload resources.
- Reduce browser reflows and when to promote an element to the GPU.
- Differences between the browser layout, compositing and painting.



## 检测

- 被动检测：布置工具，在用户请求时收集信息
- 主动检测：借助工具模拟用户请求

[chrome浏览器控制台性能监控](https://blog.csdn.net/zemprogram/article/details/104557947)

## 性能优化策略

- 减少请求数/请求量：文件合并、缓存、服务端渲染
- 减少资源大小、降低请求带宽：文件压缩

- 加快请求响应速度
- 优化资源加载时机（渲染优化、懒加载）
- 优化资源内容加载方式（使用CDN托管、服务端渲染）

## TODO

https://developers.google.com/web/fundamentals/performance/rendering?hl=zh-cn

[5 分钟撸一个前端性能监控工具](https://juejin.cn/post/6844903662020460552)

[【整理】前端优化得有个好手段，比如看这个清单🍑🍒🍓🍆🌽](https://segmentfault.com/a/1190000022014372)

[性能瓶颈分析思路 - 就这个名字好 - 博客园](https://www.cnblogs.com/unknows/p/11282713.html)

[2021 SegmentFault D-Day 大前端前沿技术实践](https://segmentfault.com/a/1190000040435530)

[blogs/23.md at master · senntyou/blogs · GitHub](https://github.com/senntyou/blogs/blob/master/web-advance/23.md)

[GitHub - GoogleChrome/lighthouse: Automated auditing, performance metrics, and best practices for the web.](https://github.com/GoogleChrome/lighthouse)

https://www.ahwgs.cn/vue-cli3-build.html

# [从渲染原理谈前端性能优化](https://segmentfault.com/a/1190000019504744)

清除console.log 

compress > drop_console: true,





- SSR，UI在服务端渲染，减少请求量和客户端渲染