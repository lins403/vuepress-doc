# CSS布局

:::tip 摘要

1. 文档流、文本流

2. display属性、position属性

3. 浮动与清除浮动的三种方法

4. BFC

5. Flex布局、Grid布局

6. 居中布局

7. 三栏布局（圣杯与双飞翼）

8. 多列布局、瀑布流布局

9. 层叠上下文、层叠水平、层叠顺序

10. 三种隐藏方法的区别

:::

## 基础布局

`文档流`：[Normal flow](https://www.w3.org/TR/CSS2/visuren.html#block-formatting)，相对于盒子模型的概念

- Block formatting contexts

- Inline formatting contexts

- Relative positioning

`文本流`： Text flow，相对于文字段落的概念

### display

- `none`
- `inline`
  - 无法设置宽度和高度，只有文本流的真实尺寸
  - 只能设置左右方向的 padding 和 margin
  - padding, margin, border 不会占据文本流，即不会推开其他元素，会发生重叠
- `block`
  - 会将自己的width填充到整个viewpoint的宽度大小
- `inline-block`
- `contents`
  - 元素本身不会渲染，但是子元素和伪元素会正常渲染，用来充当无语义的包裹框

### position

- `static`
  - 默认值，没有定位，元素位于正常流的位置
  - top, right, bottom, left 和 z-index属性无效
  
- `relative`
  - 相对static正常位置时的偏移，不改变布局，即偏移后元素正常位置占据文档流不会变动
  - position:relative; left:20px;
- `absolute`
  - 相对于**最近的已定位(非static)的<u>父/祖先元素</u>** （absolute / relative / fixed / sticky ），没有的话最终会相对于`<html>`
  - 会改变布局，元素脱离文档流，后面的元素会挤占它的空间，发生重叠
- `fixed`
  - 相对浏览器窗口，元素脱离文档流
- `sticky`
  - 需要指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效

### 浮动

float、absolute、fixed 属性可以使一个元素脱离标准文档流，但其中<u>float不会脱离文本流</u>，也就是后面的文本会跟在float的元素后面，而不是被覆盖。

float 需要使用块布局，会将 display 值为 inline 或 table 的布局，自动转为 **block**。

#### 清除浮动

清除浮动的同时，也要考虑是否能撑起父元素的高度

清除浮动的3种方法

```scss
/* .container.clearfix > .box.float */
<div class="container clearfix">
  <div class="box float">Lorem ipsum ...</div>
</div>
<div class="main">
  Hello
</div>  

/* 方法一：在浮动元素的父元素.clearfix后边追加一个隐藏的block,带一个clear:both属性 */  
.clearfix:after{
  content: "";
  display: block;  /*block宽度会横向填充满屏幕，在父元素的最后追加一个height:0，占满屏幕的看不见的细长条*/
  line-height: 0;
  clear: both;  /*这个最下边细长条左右两边都清除float*/
}

/* 方法二：不用调用clearfix类，在父元素结束标签之前，插入下面这段 */
<div style="clear: both;"></div>

/* 方法三：给父元素创建BFC */
.container{
  overflow: auto; //hidden也可以,visible不行
}
```

## BFC

块格式化上下文（Block Formatting Context，BFC），我把它当作是文档流 normal flow 中的一种 layout 布局方式。

<u>BFC区域内部和外部的渲染（文档流、文本流）互不影响，BFC的高度包含了内部浮动元素的高度</u>

用途：

- 将子元素的margin也计算入父元素的高度

- 撑起浮动元素父元素的高度；
  
  - 通常用 `overflow: 不为visible` 来清除浮动，副作用较小

- 避免外边距overlap
  
  - block 布局下，上下方向的margin会自动重叠，实际margin为二者大的那个
  
  - display 为 inline-block 、flex、grid、table 的情况，都会创建BFC，四个方向的margin都不会重叠

创建条件：[块格式化上下文 - Web 开发者指南 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

## Flex布局

`flex / inline-flex`

[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)

[Flexbox Cheat Sheet - 30 seconds of code](https://www.30secondsofcode.org/articles/s/flexbox-cheatsheet)

### Flex 容器

1. flex-flow (flex-direction、flex-wrap)

2. justify-content
  
   ```scss
   space-between  //首个元素放置于起点，末尾元素放置于终点
   space-around  //每个元素周围分配相同的空间
   space-evenly  //每个元素之间的间隔相等
   //...
   ```

3. align-items

4. align-content

### 容器的 item

1. order
2. flex (flex-grow、flex-shrink、flex-basis)
3. align-self

`justify-items 和 justify-self` 在 flexbox 中未被实现，水平方向上只能使用 justify-content，因为 flexbox 本质上是一维的，所以无法让其中的item单独在水平方向上做不一样的偏移

```scss
flex: 1;
// 等同于
flex: 1 1 auto;
// 等同于
flex-grow: 1;    // 跨度扩展系数
flex-shrink: 1;  // 默认宽度之和大于容器的时候才会发生收缩，不同情况下shrink和grow只有一个能生效
flex-basis: auto;  // 主轴方向上的初始大小，grow和shrink的基础大小
```

```scss
flex-flow: row wrap;
// 等同于
flex-direction: row;
flex-wrap: wrap;
```

## Grid布局

[最强大的 CSS 布局 —— Grid 布局 - 掘金](https://juejin.cn/post/6854573220306255880)

### Grid 容器

1. grid-template-rows

2. grid-template-columns

3. grid-gap (grid-row-gap、grid-column-gap)

4. place-items (align-items、justify-items)

5. place-content (align-content、justify-content)

6. grid-template-areas

7. grid-auto-columns、grid-auto-rows

### 容器的 item

1. grid-row-start、grid-row-end

2. grid-column-start、grid-column-end

3. place-self (justify-self、align-self)

4. grid-area

```scss
// 关键字
repeat()
autofill
fr    // fraction
minmax()
auto
```

### Flex 和 Grid

- flex 适合一维，适合对齐元素内的内容，比如说用在页面的header，弹性强但行和列没有实质性关系。flex也可以实现grid实现不了的功能。
- grid 适合多维，适合布局大画面，可以处理一些不规则和非对称的设计
- 不是二选一，而是二合一，可以混合使用

## 表格布局

display：table、inline-table、table-caption、table-cell、table-row、table-row-group

用表格布局替换 `<table>` 系表格元素

<hr />

## 进阶布局

### 居中布局

[前端复习-----css, html篇 > 居中布局](https://juejin.cn/post/6990928915120275470#heading-30)

思路：

1. inline：
  
   - 水平：`text-align: center;`
   
   - 垂直
     
     - 通用：设置上下 padding 相等
     
     - 单行：设置 height 与 line-height 相等
     
     - 多行：`vertical-align: middle;`(inline/table-cell)

2. 块block：`margin: auto`

3. flexbox：
  
   - `margin: auto;`
   
   - `justify-content: center; align-items: center;`

4. absolute positioning：`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`

### 三栏布局

圣杯布局和双飞翼布局，两列定宽一列自适应，都是利用float+负的margin的方式

#### 圣杯布局

- [圣杯布局 - CodeSandbox](https://codesandbox.io/s/html-css-qwonu?file=/css-layout/shengbei.html)

- 中间部分main的宽度是100%，利用padding的方式，将左右位置腾出来；两侧部分的position设置为relative，然后为它们设置负的margin-left，以及left、right的大小，偏移至main的左右侧

- 中间部分宽度小于左侧时布局会混乱

#### 双飞翼布局

- [双飞翼布局 - CodeSandbox](https://codesandbox.io/s/html-css-qwonu?file=/css-layout/shuangfeiyi.html)

- 中间main部分再内嵌一层wrapper，设置wrapper的margin顶开左右位置；因为margin不同于padding，两侧部分不用设置relative的定位，只需要设置margin-left偏移就可以实现

- 是针对圣杯布局的改进

#### 其它

- absolute

- flexbox

## 多列布局

Multi-clolumns Layout

### column-count

```scss
.container{
  -moz-column-count: 4; /* Firefox */
  -webkit-column-count: 4;
  column-count: 4;
}
```

### flex

```scss
.container{
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;  // 非必需
  height: 500px;  // 容器必须有固定高度，且高度大于item的最高列高
}
```

## 瀑布流布局

Masonry Layout

TODO

### JS

[蘑菇街PC首页瀑布流实践 - 掘金](https://juejin.cn/post/6844904032868253710)

> 核心思路
> 
> - 监测滚动，判断是否符合渲染条件，如果符合条件则开始渲染。
> - 定义一个渲染索引 renderIndex，每渲染一个元素后 renderIndex + 1, 实时监测 renderIndex 的变化， 判断是否符合渲染和数据请求条件。
> - 拿到最小高度列索引后，将下一个元素插入到该列中，并触发 renderIndex + 1 进行下一轮渲染判断。

[这个前端竟然用动态规划写瀑布流布局？给我打死他！ - 掘金](https://juejin.cn/post/6844904178544820237)

### CSS

[纯 CSS 实现横向排序的瀑布流式布局 - The Trivial](https://jessieji.com/2019/pure-css-masonry)

## 隐藏

`opacity: 0;`

- 隐藏元素，不改变布局，绑定的事件依然会触发

`visibility: hidden;`

- 隐藏元素，不改变布局，<u>事件不会触发</u>

`display: none;`

- 会改变页面布局

## 层叠

stacking

### 层叠上下文 (~ context)

- 要符合[既定条件](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87)，才会产生

- 层叠上下文可以嵌套，受制于父元素的层叠上下文（如果有），且会影响后代元素（当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中）

- 层叠上下文的<u>层叠水平</u>要比普通元素高，但<u>层叠顺序</u>却位于较低的位置

### 层叠水平 (~ level)

- 每个元素都具备的，用于在<u>同个层叠顺序规则下</u>的比较

- `z-index` 是一种层叠水平标识

### 层叠顺序 (~ order)

- 渲染覆盖规则

![stacking order](https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/stacking_order.png)

# 参考

[清除浮动的四种方式及其原理理解](https://juejin.cn/post/6844903504545316877)

[【布局】聊聊为什么淘宝要提出「双飞翼」布局 · Issue #11 · zwwill/blog · GitHub](https://github.com/zwwill/blog/issues/11)

[深入理解CSS中的层叠上下文和层叠顺序 &laquo; 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)