# 响应式布局解决方案

## 百分比

| 子元素                      | 相对于                                                       |
| --------------------------- | ------------------------------------------------------------ |
| width / height              | 父元素的 width / height                                      |
| top & bottom / left & right | 若为`relative`：参照父元素的 width / height<br />若为`absolute`：参照从父元素开始往上找，一直找到 position 为非static的祖先元素；<br />若为`fixed`：参照 body 元素大小<br />relative/absolute/fixed/sticky |
| padding & margin            | 水平或垂直方向，均参照于直接父元素的 width；<br />如果子元素脱离文本流，则参照上面top的那些情况，不过只需要width |
| border-radius & translate   | 相对于自身width                                              |

> 百分比的计算与使用情况较为复杂，相对安全一些的场景是只在width以及只与width相关的元素上使用百分比



## @media查询

```css
@media 设备类型 and (设备特性-宽度) {    　　　// css 样式　} //设备类型有很多 这是screen是显示器的意思
@media screen and (min-width:1200px){//>=1200px的设备} 
@media screen and (min-width: 992px) and (max-width:1199px) {//<=1199px and >=960px的设备:PC端;}
@media screen and (min-width: 768px) and (max-width:991px) {//<=959px and >=768px的设备：PC端;}
@media screen and (min-width: 640px) and (max-width:767px) {//<=767px and >=640px的设备：平板端或者手机横屏;}
@media screen and (min-width: 480px) and (max-width:639px) {//<=639px and >=480px的设备：手机横屏;}
@media screen and (min-width: 320px) and (max-width:479px) {//<=479px and >=320px的设备：手机竖屏;}
@media screen and (min-width: 240px) and (max-width:319px) {//<=479px and >=320px的设备：手机竖屏;}
@media screen and (max-width:239px){//<=239px的设备:手机竖屏}
```

[前端响应式布局原理与方案（详细版） - 掘金](https://juejin.cn/post/6844903814332432397)



## 利用 meta 标签对 viewport 进行控制

```html
<!-- public/index.html -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
```

| 属性名        | 取值    | 描述                                     |
| ------------- | ------- | ---------------------------------------- |
| width         | 正整数  | 定义布局视口的宽度，单位为像素           |
| height        | 正整数  | 定义布局视口的高度，单位为像素，很少使用 |
| initial-scale | [0,10]  | 初始缩放比例，1表示不缩放                |
| minimum-scale | [0,10]  | 最小缩放比例                             |
| maximum-scale | [0,10]  | 最大缩放比例                             |
| user-scalable | yes／no | 是否允许手动缩放页面，默认值为yes        |

> web端（如可视化大屏）适配移动端时，可以设置例如 `initial-scale=0.6` 来达到移动端横屏查看的效果



## px 转 rem

设计稿通常是px，代码中向rem的转换方式有如下几种：

1. vscode插件辅助
2. webpack loader（px2rem-loader），无法支持inline样式
3. webpack plugin（postcss-px2rem），无法支持inline样式
4. 内置转换公式（如下）

```scss
// 变量的值可以根据自己需求定义，浏览器默认是16px，最小是12px
$browser-default-font-size: 100px !default;

// $px为需要转换的字号
@function pxTorem($px){    
  @return $px / $browser-default-font-size * 1rem;
}

// 设置root与body的默认字体
html {
  font-size: $browser-default-font-size;
  body{
    font-size: pxTorem(16px);
  }
}

// 简单使用
.header {
  width: 100%;
  font-size: pxTorem(12px);
  .title{
    font-size: 2em;        //24px
  }
}

/*************结合@media使用*************/
@media screen and (max-width: 1200px){
  .app{
    width: pxTorem(1200);
  }
}
@media screen and (max-width: 768px){
  .app{
    width: pxTorem(750);
  }
}
```

> rem的缺点在于，在响应式布局中，需要通过js来动态控制根元素font-size的大小，导致css和js有一定的耦合性，方案如下



## flexible 适配方案（js动态更新rem）

1. 在 `index.html` 中添加脚本，在页面重载或调整窗口大小时，自动更新 `rem`（root-element font-size）
2. 这种方案的典型代表是阿里的 [lib-flexible](https://github.com/amfe/lib-flexible)，本质上是在模拟 viewport 功能
3. 示例参考如下，便于理解

```js
// 放在<head>标签内，保证优先执行
// rem-resize.js
;(function (win) {
  var doc = win.document
  var docEl = doc.documentElement
  var tid

  function refreshRem() {
    // viewpoint宽度大小
    var width = docEl.getBoundingClientRect().width
    // 移动端 -> 设置最大宽度（768约为手机横屏或iPad大小）
    if (width > 768) width = 768
    var rem = width / 7.68
    docEl.style.fontSize = rem + 'px'
  }
  
  // 文档视图(document view, window)调整大小时会触发 resize 事件
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  
  // onpageshow事件在onload事件触发后，初始化页面时触发
  // 区别在于，onload事件在页面从浏览器缓存中读取时不会触发
  win.addEventListener(
    'pageshow',
    function (e) {
      // 如果网页是否来自缓存
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )
  
  refreshRem()
})(window)
```



## transform缩放

[基于等比缩放的大屏自适应方案 - 掘金](https://juejin.cn/post/6966103143402700837)



## 推荐方案（vw+rem）

px 换算为 vw 的方法

```scss
// 将布局视口（layout viewpoint）设置为设备分辨率的大小
1 px = (1/ 设备分辨率) *100 vw

// iPhoneXR（414*896）
1 px = (1/ 414) *100 vw
```

> vw的用法有点类似width，但参照物明确，比后者更加稳定

### 方案

1. 设计图宽度 = 设备宽度（分辨率宽度）

```scss
// 例如750（pc端与移动端的大致分割线）
750px = 100vw
1px = 100 / 750 vw = 0.13333333333333333vw
```

2. 设置root font-size

```scss
html {
	font-size: 13.333333vw	//100px
}
```

3. 实际使用

```scss
body{
	font-size: 0.16rem;	//16px
}
```



## 升级方案（@media+vw+rem）

详细化适配不同设备，在 `@media` 中直接使用 `vw` 来设置根 html 的 font-size，css中的真实尺寸用 `rem` 表示

### 实例

网易新闻移动端 <https://3g.163.com/touch/news/>

```scss
@media screen and (min-width: 769px){
  html {
    font-size: 102.4px;	//为什么不是100px，可能因为他们以前用的是flexible适配方案
  }
}
@media screen and (min-width: 641px) and (max-width: 720px){
  html {
    // font-size: 96px;
    font-size: 13.33333vw;
  }
}
@media screen and (min-width: 541px) and (max-width: 640px){
  html {
    // font-size: 85.33px;
    font-size: 13.33333vw;
  }
}
// ...
@media screen and (min-width: 361px) and (max-width: 375px){
  html {
    font-size: 13.33333vw;
  }
}
```

> 如果使用的是js修改px的方案，@media查询分的非常细，几乎每种主流机型都适配了，但使用vw就便利很多



## 经验

- 不考虑兼容性的情况下，优先使用flex或grid布局
- 元素的font-size用rem避免混乱，宽度可以用百分比，有时候高度用vh、border用px，其他元素基本都用em
- 还可以使用clamp函数将值限制在一个范围内，例如 `font-size: clamp(1rem, 8vw - 2rem, 3rem);` 首选中间的，然后取边界值
- 使用 max-width 或 img标签的srcset属性，实现图片响应式



## 其它

- 1px问题

- 图片在Retina显示屏与普通屏的渲染差异



# 参考

[响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）](https://github.com/forthealllight/blog/issues/13)

[2022 年移动端适配方案指南 — 全网最新最全 - 掘金](https://juejin.cn/post/7046169975706353701)

[REM适配方案demo - 掘金](https://juejin.cn/post/6994716514980986910)
