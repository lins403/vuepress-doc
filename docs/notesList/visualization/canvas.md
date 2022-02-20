# Canvas与WebGL

## Canvas

### 教程

[Canvas 基础教程 - Canvas 基础教程 - 简单教程，简单编程](https://www.twle.cn/l/yufei/canvas/canvas-basic-index.html)

### 基础

```js
// 不是style中的样式，而是标签属性
<canvas width="100" height="100"></canvas>
canvas.setAttribute("width",100);
canvas.setAttribute("height",100);
```



### CanvasRenderingContext2D

`CanvasRenderingContext2D`接口是Canvas API的一部分，可为`<canvas>`元素的绘图表面提供2D渲染上下文。 它用于绘制形状，文本，图像和其他对象。

```js
// 获取画布的2D渲染上下文
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
```

利用上下文进行绘制操作：

1. 填充和描边
   - fillStyle、strokeStyle
2. 绘制矩形：矩形是唯一一个可以直接在 2D 绘图上下文中绘制的形状
   - fillRect()、strokeRect()和 clearRect()
3. 绘制路径：可以通过路径来创建复杂的形状和线条
   - context.beginPath()
4. 绘制文本
   - fillText() - 实心、strokeText() - 空心
5. 变换
   - rotate(angle)
   - scale(scaleX, scaleY)
   - translate(x, y)
   - transform(m1_1, m1_2, m2_1, m2_2, dx, dy) - 应用矩阵matrix
6. 绘制图像、阴影、渐变、图案(使用指定图片在指定方向上重复)、图像数据( ImageData 对象，用来描述canvas区域隐含的像素数据)
7. 合成：新图形在现有画布上下文上的绘制方式

### html2canvas

[GitHub - niklasvh/html2canvas: Screenshots with JavaScript](https://github.com/niklasvh/html2canvas)

- [vue2-boilerplate/canvas.js at master · lins403/vue2-boilerplate · GitHub](https://github.com/lins403/vue2-boilerplate/blob/master/src/vendor/canvas.js)

- [基于html2canvas实现网页保存为图片及图片清晰度优化](https://segmentfault.com/a/1190000011478657)

## WebGL

WebGL（Web图形库）是一个JavaScript API，可在任何兼容的Web浏览器中渲染高性能的交互式3D和2D图形，而无需使用插件。

WebGL通过引入一个与OpenGL ES 2.0非常一致的API来做到这一点，该API可以在HTML5 `<canvas>`元素中使用。 

> WebGL 是canvas的 3D 上下文。
>
> WebGL 是浏览器对 OpenGL ES 2.0 的实现。OpenGL ES 2.0 是游戏图形开发常用的一个标准。

### WebGL上下文

```js
let drawing = document.getElementById("drawing");

// 确保浏览器支持<canvas> 
if (drawing.getContext) {
  let gl = drawing.getContext("webgl");
  if (gl){
    // 使用WebGL 
  }
}
```

