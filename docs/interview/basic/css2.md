# CSS布局

### display

- none
- inline
  - 无法设置宽度和高度，只有文本流的真实尺寸
  - 可以设置四个方向的padding，但是只能设置上下方向的margin
- block
- inline-block
- contents



### position

- static
  - top, right, bottom, left 和 z-index属性无效
- relative
  - 相对static正常位置时的偏移，不改变布局，即偏移后元素正常位置占据文档流不会变动
  - `position:relative; left:20px;`
- absolute
  - 相对于**最近的已定位父元素**，没有的话最终会相对于`<html>`
  - 会改变布局，元素脱离文档流，后面的元素会挤占它的空间，发生重叠
- fixed
  - 相对浏览器窗口，元素脱离文档流
- sticky
  - 需要指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效



### 浮动

float、absolute、fixed 属性可以使一个元素脱离标准文档流，但其中float不会脱离文本流，也就是后面的文本会跟在float的元素后面，而不是被覆盖。

#### 清楚浮动





### Flex布局

display: flex



### Grid布局

display: grid

```

```



Flex 和 Grid

- flex适合一维，适合对齐元素内的内容，比如说用在页面的header。弹性强，但行和列没有实质性关系。flex也可以实现grid实现不了的功能
- grid适合多维，适合布局大画面，可以处理一些不规则和非对称的设计（flex应该实现不了）。
- 不是二选一，而是二合一，可以混合使用



### 表格布局

display：table、inline-table、table-caption、table-cell、table-row、table-row-group



### 多列布局

display: table-caption; column-count: 3;



### 响应式布局

### 自适应布局

### 居中布局

### 三列布局