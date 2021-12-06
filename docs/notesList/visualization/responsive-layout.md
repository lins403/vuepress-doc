# 响应式布局

## 自适应布局

- @media查询
- 百分比
- vh、vw
- onresize & rem
- onresize & transform

**[响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh）](https://github.com/forthealllight/blog/issues/13)**

[基于等比缩放的大屏自适应方案](https://juejin.cn/post/6966103143402700837)

[REM适配方案demo](https://juejin.cn/post/6994716514980986910)

## viewport

```html
<!-- public/index.html -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
```

## media

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

## rem

rem相对于根元素`<html>`

```css
/* https://3g.163.com/touch/news/ */
@media screen and (min-width: 361px) and (max-width: 375px){
  html {
    // font-size: 100px;    //它的font-size也有通过js计算    
    font-size: 13.33333vw;
  }
}
```

## 个人方案

结合rem和@media，基于预定的rem

```js
// 放在<head>标签内，保证优先执行
// rem-resize.js
;(function (win) {
  var doc = win.document
  var docEl = doc.documentElement
  var tid

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width > 768) {
      // 最大宽度
      width = 768
    }
    var rem = width / 7.68
    docEl.style.fontSize = rem + 'px'
  }
  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function (e) {
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

- 元素的font-size用rem
- 宽度常用百分比，有时候高度用vh、border用px
- 其他元素基本都用em
- clamp函数也很好用，例如 `font-size: clamp(1rem, 8vw - 2rem, 3rem);`

```scss
$browser-default-font-size: 100px !default;    //变量的值可以根据自己需求定义，浏览器默认是16px，最小是12px
@function pxTorem($px){    //$px为需要转换的字号
  @return $px / $browser-default-font-size * 1rem;
}

html {
  font-size: $browser-default-font-size;
  body{
    font-size: pxTorem(16px);
  }
}

.header {
  width: 100%;
  font-size: pxTorem(12px);
  .title{
    font-size: 2em;        //24px
  }
}

/**********结合@media使用**********/
@media screen and (min-width: 768px) and (max-width: 1200px){
  .app{
    width: pxTorem(1200);
  }
}
@media screen and (max-width: 767px){
  .app{
    width: pxTorem(750);
  }
}
```
