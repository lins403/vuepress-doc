# 动画

## 动画

一般计算机显示器的屏幕刷新率都是 60Hz，基本上意味着每秒需要重绘 60 次。大多数浏览器会限制重绘频率，使其不超出屏 幕的刷新率，这是因为超过刷新率，用户也感知不到。因此，实现平滑动画最佳的重绘间隔为 1000 毫秒/60，大约 17 毫秒。以这个速度重绘可以实现最平滑的动画，因为这已经是浏览器的极限了。

这里毫秒延时并不是说何时这些代码会执行，而只是说到时候会把回调加到任务队列。如果添加到队列后，主线程还被其他任务占用，比如正在处理用户操作，那么回调就不会马上执行，那么就会导致没有及时绘制页面从而让用户感受到**掉帧**。

知道何时绘制下一帧是创造平滑动画的关键。早期定时动画使用 setInterval()和 setTimeout()，但这两者却并不精确，加之浏览器自身计时器的精度带来的问题（例如Chrome 的计时器精度为 4 毫秒，这意味着0~4范围内的任何值最终要么是0，要么是4），所以浏览器没法在正确的时机开始、正确的间隔时间来绘制动画。

`RequestAnimationFrame`正是为了解决浏览器不知道 JavaScript 动画何时开始的问题， 以及最佳间隔是多少的问题。

它可以通知浏览器某些 JavaScript 代码要执行动画了，这样浏览器就可以在运行某些代码后进行适当的优化。从而浏览器就可以知道 CSS 过渡和动画应该什么时候开始，并据此计算出正确的时间间隔，到时间就去刷新用户界面。

### 使用 `requestAnimationFrame` 来实现视觉变化

当屏幕正在发生视觉变化时，您希望在适合浏览器的时间执行您的工作，也就是正好在帧的开头。

保证 JavaScript 在帧开始时运行的唯一方式是使用 `requestAnimationFrame`。

```js
/**
 * If run as a requestAnimationFrame callback, this
 * will be run at the start of the frame.(在浏览器下一次重绘之前执行)
 */
function updateScreen(time) {
  // Make visual updates here.（修改 DOM 样式以反映下一次重绘有什么变化的地方）
  
  // recursively calls 
  requestAnimationFrame(updateScreen);
}

requestAnimationFrame(updateScreen);
```

框架或示例可能使用 `setTimeout` 或 `setInterval` 来执行动画之类的视觉变化，但这种做法的问题是，回调将在帧中的某个时点运行，可能刚好在末尾，而这可能经常会使我们丢失帧，导致卡顿。

```js
setInterval(function() {
  // animiate something
}, 1000/60);
```

### 使用 `cancelAnimationFrame` 来取消绘制任务

与 setTimeout()类似，`requestAnimationFrame()`也返回一个请求 ID，可以用于通过另一个方法`cancelAnimationFrame()`来取消重绘任务。

```js
let requestID = window.requestAnimationFrame(() => {
  console.log('Repaint!');
  window.cancelAnimationFrame(requestID);
});
```

### 通过`requestAnimationFrame`节流

支持`requestAnimationFrame`方法的浏览器实际上会暴露出作为钩子的回调队列。所谓钩子(hook)，就是浏览器在执行下一次重绘之前的一个点。这个回调队列是一个可修改的函数列表，包含应该在重绘之前调用的函数。每次调用 requestAnimationFrame()都会在队列上推入一个回调函数，队列的长度没有限制。

通过 requestAnimationFrame()递归地向队列中加入回调函数，可以保证每次重绘最多只调用一次回调函数。这是一个非常好的节流工具。在频繁执行影响页面外观的代码时(比如滚动事件监听器)，可以利用这个回调队列进行节流。

## 例子

1. 递归动画渲染，支持暂停和恢复执行：[Using requestAnimationFrame](https://css-tricks.com/using-requestanimationframe/#aa-slightly-more-complex-example)

2. 对scroll事件的节流

```js
let enabled = true;

function expensiveOperation() {
  console.log('Invoked at', Date.now());
  //enabled = true;
}

window.addEventListener('scroll', () => {
  if (enabled) {
    // 保证每次重绘最多只调用一次回调函数
    enabled = false;
    // 将调用限制在每次重绘前发生
    window.requestAnimationFrame(expensiveOperation);
    // 节流，限制50ms内只调用一次
    window.setTimeout(() => enabled = true, 50);
  }
});
```

