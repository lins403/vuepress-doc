# CSS基础

:::tip 摘要

1. 盒模型

2. 伪类和伪元素，选择器的权重优先级

:::

## 一、盒模型

#### box-sizing

`content-box`（标准盒模型）：占据的空间由 <u>设置的宽高 + padding + border </u>组成

`border-box`（IE盒模型）：设置的宽高包含了padding和border的大小

#### margin

```scss
.box {
  border: 5px solid darkblue;
  width: 300px;
  margin: 10%;
  padding: 10%;
}
// padding和margin的长度一样，且四个方向大小都一致
// 是相对**父元素的宽度**，没有的话接着往上找，找到有设置宽度的祖先节点，知道100%width的body
// margin不是子元素的真实空间，所以不会撑开父元素的高度，除非将父元素创建为BFC
```

## 二、选择器

### 伪类和伪元素

伪类：Pseudo-classes

- `:focus` `:hover` 
- `:nth-child()`  `:nth-of-type()`
- `:root`、`:visited`、`:not()`

伪元素：Pseudo-element

- `::first-line`  `::first-letter`
- `::after (:after)`

### 权重优先级

正常而言范围越小优先级越高，也有些运算符，如+~等，不会影响优先级。

*从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。* !important无限大

| 选择器             | 权重   |
| --------------- | ---- |
| 通配符             | 0    |
| 标签 / 伪元素        | 1    |
| class / 伪类 / 属性 | 10   |
| id              | 100  |
| 行内样式            | 1000 |
| !important      | ∞    |

### selector

css_selector

- 控制台下使用 `document.querySelector()` 或者 `$()` 进行测试 
- 不能迭代查找（TypeError: 'WebElement' object is not iterable）

xpath

- 控制台下使用 `$x()`进行测试

## 三、样式渲染

### border 和 outline

[border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 和 outline 很类似，但有如下区别：

- outline不占据空间，绘制于元素内容周围。
- 根据规范，outline通常是矩形，但也可以是非矩形的。

### serif 和 sans-serif

- serif，衬线体，白体、**宋体**（有棱有角）
- sans-serif，无衬线体，哥特体、**黑体**

### transition 和 animation

transition：为一个元素在不同状态之间切换的时候定义不同的过渡效果

animation：用来指定一组或多组动画，每组之间用逗号相隔

@keyframes：用来定义animation中的各个状态

#### 区别

- transition更强调状态的变化，开始到结束两种状态，通常需要外部触发，例如伪元素（:hover）之间的切换；
- animation更强调帧的变化，可以自动触发，且可以被设置成无限次播放

[动画 | 小眯嘻的文档博客](https://lins403.github.io/vuepress-doc/notesList/css/animation.html)

### 渐变

`linear-gradirent` 线性渐变

`radial-gradirent` 径向渐变

`repeating-linear-gradient` 重复渐变

### 尺寸单位

[CSS units Cheat Sheet - 30 seconds of code](https://www.30secondsofcode.org/articles/s/css-units-cheatsheet)

## 四、特殊属性

### @import

```scss
@import "navigation.css"; /* Using a string */
// or
@import url("navigation.css"); /* Using a url */

// Import the "mobstyle.css" style sheet ONLY if the media is screen and the viewport is maximum 768 pixels:
@import "mobstyle.css" screen and (max-width: 768px);
```

**<u>不要使用@import</u>**

1. 比 `<link>` 慢

2. 影响浏览器的并行下载

3. 多个@import会导致下载顺序紊乱

替代办法：

- 使用多个 `<link>` 元素
- 通过CSS预处理器将多个CSS文件编译为一个文件

### 其它

`all`: Reset all styles

- initial | inherit | unset(不能inherit的值使用initial)  

`::selection`: Changes the styling of text selection.

`counter-reset`: Create a new css counter of the given name.

`user-select`: 控制用户能否选中文本

## FAQ

### # 参考/推荐

[【前端工程师面试宝典】学习说明_互联网校招面试真题面经汇总_牛客网](https://www.nowcoder.com/tutorial/96/1678a0fd35cd4db486af18589e34e4d4)

[前端复习-----css, html篇 - 掘金](https://juejin.cn/post/6990928915120275470)

[CSS Object Model (CSSOM)](https://www.w3.org/TR/cssom-1/)

[Cssom - HTML5 Chinese Interest Group Wiki](https://www.w3.org/html/ig/zh/wiki/Cssom)
