# DOM

HTMLDivElement » HTMLElement » Element » Node » EventTarget

## event targets

- Element

- document

- window

## window对象

### Size

```js
// Current Screen Size
const width =
  window.innerWidth && document.documentElement.clientWidth
    ? Math.min(window.innerWidth, document.documentElement.clientWidth)
    : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth

clientWidth = width + padding

innerWidth = clientWidth + border + 滚动条宽度
```

1. 浏览器
   - `window.innerWidth` 【视口宽高viewpoint】
     - 控制台高度、书签页高度会影响
   - `window.outerWidth` 【窗口宽高】
     - 与控制台高度无关，受浏览器缩放大小影响
2. 元素 （Element）
   - `clientWidth` 【内部宽高】（设定的width + padding）
   - `offsetWidth` 【布局宽高】（= clientWidth + border + 滚动条）
   - `scrollWidth` 【内容宽高】（包含overflow隐藏(scroll/hidden)的内容）
3. 屏幕（Screen）
   - `screen.width` 【屏幕宽高】
   - `screen.availWidth` 【屏幕可用宽高】
     - 不受浏览器缩放大小影响，和书签栏高度、标签页高度等等有关

## Navigator对象

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

# 参考/推荐

[W3Schools How TO - Code snippets for HTML, CSS and JavaScript](https://www.w3schools.com/howto/default.asp)

[javascript - window.innerWidth vs document.documentElement.clientWidth - Stack Overflow](https://stackoverflow.com/a/26191207/16654657)

[JavaScript获取浏览器、元素、屏幕的宽高尺寸](https://juejin.cn/post/6844903607704223751)
