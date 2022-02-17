# 颜色

## 网站

rgb转hex：[颜色码转换器](https://www.sioe.cn/yingyong/yanse-rgb-16/)

色彩：

[Trending color palettes - Coolors](https://coolors.co/palettes/trending)

[中国色 － 中国传统颜色](http://zhongguose.com/)

## 色彩模式

`rgb`(red, geen, blue)

- 三原色光模式

`cmyk`(Cyan, Magenta, Yellow, blacK)

- 印刷四分色模式

`hsl`(hue, saturation, lightness)

- 色相、饱和度、亮度
- <span style="background-color: hsl(0, 100%, 50%);padding: .2em 2em;color:#fff">hsl(0, 100%, 50%)</span>
  <span style="background-color: hsl(120, 100%, 50%);padding: .2em 2em;color:#fff;">hsl(120, 100%, 50%)</span>
  <span style="background-color: hsl(240, 100%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 100%, 50%)</span>
- <span style="background-color: hsl(240, 0%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 0%, 50%)</span>
  <span style="background-color: hsl(240, 25%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 25%, 50%)</span>
  <span style="background-color: hsl(240, 50%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 50%, 50%)</span>
  <span style="background-color: hsl(240, 75%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 75%, 50%)</span>
  <span style="background-color: hsl(240, 100%, 50%);padding: .2em 2em;color:#fff;">hsl(240, 100%, 50%)</span>
- <span style="background-color: hsl(0, 0%, 0%);padding: .2em 2em;color:#fff;">hsl(0, 0%, 0%)</span>
  <span style="background-color: hsl(0, 0%, 25%);padding: .2em 2em;color:#fff;">hsl(0, 0%, 25%)</span>
  <span style="background-color: hsl(0, 0%, 50%);padding: .2em 2em;color:#fff;">hsl(0, 0%, 50%)</span>
  <span style="background-color: hsl(0, 0%, 50%);padding: .2em 2em;color:#fff;">hsl(0, 0%, 75%)</span>
  <span style="background-color: hsl(0, 0%, 100%);padding: .2em 2em;">hsl(0, 0%, 100%)</span>

### 渐变色

<div style="background: linear-gradient(90deg, #ff6e7f, #bfe9ff 80%);height: 50px;line-height:50px;text-align:center;">background: linear-gradient(90deg, #ff6e7f, #bfe9ff 80%);</div>

- [uiGradients](https://uigradients.com/#NoontoDusk)
- [25 CSS gradients for your next project - 30 seconds of code](https://www.30secondsofcode.org/articles/s/25-css-gradients)

### 蓝色

克莱因蓝（Klein Blue）：<span style="background-color: #004393;color:#fff;padding:.25em 2em;">#004393</span>

道奇蓝：<span style="background-color: dodgerblue;color:#fff;padding:.25em 2em;">dodgerblue</span>

皇家蓝/宝蓝色：<span style="background-color: royalblue;color:#fff;padding:.25em 2em;">royalblue</span>

天蓝色：<span style="background-color: skyblue;padding:.25em 2em;">skyblue</span>

蔚蓝色：<span style="background-color: azure;padding:.25em 2em;">azure</span>

<span style="background-color: Aliceblue;padding:.25em 2em;">Aliceblue</span>



## Utils

### rgb值和16进制颜色值之间的转换

```js
/**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 */
function hexToRGB(hex) {
  var hexx = hex.replace('#', '0x')
  var r = hexx >> 16
  var g = (hexx >> 8) & 0xff
  var b = hexx & 0xff
  return `rgb(${r}, ${g}, ${b})`
}
```

```js
/**
 * RGB颜色转16进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String}     16进制颜色字符串
 */
function RGBToHex(rgb) {
  var rgbArr = rgb.split(/[^\d]+/)
  var color = (rgbArr[1] << 16) | (rgbArr[2] << 8) | rgbArr[3]
  return '#' + color.toString(16)
}
// -------------------------------------------------
hexToRGB('#ffffff') // 'rgb(255,255,255)'
RGBToHex('rgb(255,255,255)') // '#ffffff'
```

