# BOM

浏览器对象模型(BOM，Browser Object Model)是以window对象为基础的，这个对象代表了浏览器窗口和页面可见的区域

-  BOM 的核心——`window` 对象
- 通过 `location` 对象获取页面信息，以编程方式操纵浏览器的导航系统
- 使用 `navigator` 对象了解浏览器信息
- 使用 `screen` 对象了解客户端显示器的信息
- 通过 `history` 对象操作浏览器历史

## 1、window对象

BOM 的核心是 window 对象，表示浏览器的实例。

window 对象在浏览器中有两重身份，

1. 一个是 ECMAScript 中的 Global 对象
   - window对象的属性在全局作用域（Global作用域）中有效
   - 通过 `var` 声明的所有全局变量和函数都会变成 window 对象的属性和方法（let、const不会）
2. 另一个就是浏览器窗口的 JavaScript 接口

### window.open()

```js
// 与<a href="http://www.wrox.com" target="topFrame"/>相同 
window.open("http://www.wrox.com/", "topFrame")
// 如果有一个窗口名叫"topFrame"，则这个窗口就会打开这个 URL; 否则就会打开一个新窗口并将其命名为"topFrame"
```

第二个参数也可以是一个特殊的窗口名，比如`_self`、 `_parent`、`_top` 或`_blank`

第三个参数，即特性字符串，用于指定新窗口的配置，例如 `"height=400,width=400,top=10,left=10,resizable=yes"`

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

#### 浏览器

- `window.innerWidth` 【视口宽高viewpoint】
  - 控制台高度、书签页高度会影响
- `window.outerWidth` 【窗口宽高】
  - 与控制台高度无关，受浏览器缩放大小影响

#### 元素（Element）

- `clientWidth` 【内部宽高】（设定的width + padding）
- `offsetWidth` 【布局宽高】（= clientWidth + border + 滚动条）
- `scrollWidth` 【内容宽高】（包含overflow隐藏(scroll/hidden)的内容）

#### 屏幕（Screen）

- `screen.width` 【屏幕宽高】
- `screen.availWidth` 【屏幕可用宽高】
  - 不受浏览器缩放大小影响，和书签栏高度、标签页高度等等有关

## 2、location对象

`location`对象既是 window 的属性，也是 document 的属性。也就是说， `window.location` 和 `document.location` 指向同一个对象。

#### assign

```js
location.assign("http://www.wrox.com");

// 都会执行与显式调用 assign()一样的操作
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com";
```

#### replace

replace方法接收一个 URL 参数，但重新加载后不会增加历史记录，调用之后用户不能回到前一页。

#### reload

```js
location.reload(); // 重新加载，可能是从缓存加载 
location.reload(true); // 重新加载，从服务器加载
```



## 3、navigator对象

```js
console.log(navigator)
console.log(window.navigator)
console.log(navigator.language)
console.log(navigator.plugins)
```

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



## 4、screen对象

```js
console.log(screen)
console.log(window.screen)
//
{
  availHeight: 875
  availLeft: 0
  availTop: 25
  availWidth: 1440
  colorDepth: 30
  height: 900
  orientation: ScreenOrientation {angle: 0, type: 'landscape-primary', onchange: null}
  pixelDepth: 30
  width: 1440
}
```



## 5、history对象

```js
console.log(history)
console.log(window.history)
console.log(history.length)

// 后退一页 
history.go(-1);
// 前进一页 
history.go(1);
// 前进两页 
history.go(2);

// 后退一页 
history.back();
// 前进一页 
history.forward();
```

pushState将一条 state 记录加入到 history 对象中。一条 state 记录包含了 url、title 和 content 属性，在 popstate 事件中可以获取到这个 state 对象，我们可以使用 content 来传递数据。最后我们通过对 window.onpopstate 事件监听来响应浏览器的前进后退操作。

```js
history.pushState(state, title[, url])
history.pushState({ 'page_id': 1, 'user_id': 5 }, '', 'hello-world.html')
history.pushState({page: 1}, "title 1", "?page=1");  //添加并激活一个历史记录条目 http://example.com/example.html?page=1

history.replaceState(stateObj, title[, url]);
history.pushState({ foo: "bar" }, "", "bar.html");

window.onpopstate 事件
```

## Recap

【BOM】Browser Object Model，浏览器对象模型，核心是`window`对象，同时还包含了访问和操作导航的`location` 对象、访问浏览器信息的`navigator` 对象、显示器信息的`screen` 对象、访问历史的`history` 对象。

【window对象】window 对象在浏览器中有两重身份，一个是表示JavaScript在浏览器环境中的 Global 对象，另一个则是作为浏览器窗口的 JavaScript 接口。

【location对象】location对象既是 window 的属性，也是 document 的属性。location.assign()跳转新页面，location.reload()重载页面，location.replace()跳转后不会增加历史记录，所以调用之后用户不能回到前一页。

【history对象】使用 back()、forward()、go() 方法来完成在用户历史记录中向后和向前的跳转。浏览器的前进后退操作会触发window上的onpopstate事件。pushState方法将一条 state 记录加入到 history 对象中，一条 state 记录包含了 url、title 和 content 等属性；replaceState方法会修改当前state，而不会产生新的历史记录。

# 参考

[W3Schools How TO - Code snippets for HTML, CSS and JavaScript](https://www.w3schools.com/howto/default.asp)

[javascript - window.innerWidth vs document.documentElement.clientWidth - Stack Overflow](https://stackoverflow.com/a/26191207/16654657)

[JavaScript获取浏览器、元素、屏幕的宽高尺寸](https://juejin.cn/post/6844903607704223751)