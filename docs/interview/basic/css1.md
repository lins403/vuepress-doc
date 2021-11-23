# CSS基础



## 盒模型

#### box-sizing

- content-box（标准盒模型）：占据的空间由：`设置的宽高 + padding + border` 组成
- border-box（IE盒模型）：设置的宽高包含了padding和border的大小

#### margin

```scss
.box {
  border: 5px solid darkblue;
  width: 300px;
  margin: 10%;
  padding: 10%;
}
// padding和margin的长度一样，且四个方向大小都一致
// 是相对**父元素的宽度**，没有的话接着往上找
```



## transition 和 animation

transition：为一个元素在不同状态之间切换的时候定义不同的过渡效果

animation：用来指定一组或多组动画，每组之间用逗号相隔

@keyframes：用来定义animation中的各个状态

#### 区别

- transition更强调状态的变化，开始到结束两种状态，通常需要外部触发，例如伪元素（:hover）之间的切换；
- animation更强调帧的变化，可以自动触发，且可以被设置成无限次播放





## 选择器

### 伪类和伪元素

伪类：Pseudo-classes

- `:focus` `:hover` 
- `:nth-child()`  `:nth-of-type()`

伪元素：Pseudo-element

- `::first-line`  `::first-letter`
- `::after (:after)`

### 权重优先级

正常而言范围越小优先级越高，也有些运算符，如+~等，不会影响优先级。

*从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。* !important无限大



### selector

css_selector

- 控制台下使用 `document.querySelector()` 或者 `$()` 进行测试 
- 不能迭代查找（TypeError: 'WebElement' object is not iterable）

xpath

- 控制台下使用 `$x()`进行测试



## 渐变

linear-gradirent线性渐变

radial-gradirent 径向渐变

repeating-linear-gradient 重复渐变





## Q&A问题

### 画一个三角形

```css
div {
  width:0px;
  height:0px;
  
  /*下三角形*/
  border-top:10px solid red;
  border-right:10px solid transparent;
  border-left:10px solid transparent;
  
  /*上三角形*/
  border-right:10px solid transparent;
  border-bottom:10px solid blue;
  border-left:10px solid transparent;
}
```

