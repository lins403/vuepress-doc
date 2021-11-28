# Utils

## window

### Size

```js
// Current Screen Size
const width =
  window.innerWidth && document.documentElement.clientWidth
    ? Math.min(window.innerWidth, document.documentElement.clientWidth)
    : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth

const height =
  window.innerHeight && document.documentElement.clientHeight
    ? Math.min(window.innerHeight, document.documentElement.clientHeight)
    : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight

// https://stackoverflow.com/a/26191207/16654657

// clientWidth = width + padding
// innerWidth = clientWidth + border + 滚动条宽度
```

[JavaScript获取浏览器、元素、屏幕的宽高尺寸](https://juejin.cn/post/6844903607704223751)

1. 浏览器
   - innerWidth
   - outerWidth
2. 元素
   - clientWidth
   - offsetWidth
   - scrollWidth
3. 屏幕
   - Screen.width
   - Screen.availWidth

## Navigator

### userAgent

```js
console.log(navigator.userAgent)

var ua = navigator.userAgent.toLowerCase();
if (/mobi/.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
```

# 参考

[W3Schools How To](https://www.w3schools.com/howto/default.asp)
