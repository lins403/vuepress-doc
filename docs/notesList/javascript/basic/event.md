# 事件

## TL;DR

> 【`事件流`】JavaScript事件流，有事件捕获和事件冒泡两种机制，当年浏览器大战时，网景主张捕获方式，微软主张冒泡方式。后来 w3c 制定了统一的标准——先捕获再冒泡，这是针对事件流上的非target节点，而target节点上呢就是谁先注册就谁先。通常注册事件监听函数用的是addEventListener函数，其中第三个参数useCapture，表示是否使用捕获方式，默认是false也就是冒泡方式。然后事件委托，现在浏览器也都是默认用的冒泡机制。
>
> 【`事件委托`】事件委托，也叫事件代理，就是利用事件冒泡机制，将一组元素的事件处理函数，委托给它们的父元素或者更外层的元素。这样做的好处是可以不用给每一个元素都注册监听事件，可以节省资源，扩展性也更强。当然本身也有一定的缺陷，比如有些事件本身没有冒泡事件，比如聚焦事件focus和blur等等，它们就不能被委托；还有些是不适合做委托的，比如鼠标移动这种需要计算偏移或位置的事件，比较消耗性能。
>
> 【DOM0和DOM2】DOM0，`el.onclick=function(e){}; el.onclick = null;` 。DOM2，`el.addEventListener(); el.removeEventListener()`，使用 DOM2 方式的主要优势是可以为同一个事件添加多个事件处理程序.

## 一、事件流

事件流描述了页面接收事件的顺序。网景主张捕获方式，微软主张冒泡方式

- 事件捕获（event capturing）
  - 现代浏览器中的事件会一直冒泡到 window 对象：el --> ... --> body --> html --> document --> window
- 事件冒泡（dubbed bubbling）

后来 w3c 制定了统一的标准——**先捕获再冒泡**（所以在事件目标上有两个机会来添加或处理事件）

- 对于非target节点则先执行捕获再执行冒泡
- 对于target节点则是先执行先注册的事件，无论冒泡还是捕获

::: tip 

大多数情况下，事件处理程序会被添加到事件流的冒泡阶段，主要原因是跨浏览器兼容性好（IE8 及更早版本只支持事件冒泡）

把事件处理程序注册到捕获阶段的方式，通常用于在事件到达其指定目标之前拦截事件。如果不需要拦截，则不要使用事件捕获。

:::

## 二、添加事件

### try…catch包裹事件

将 HTML 事件处理程序封装在 try/catch 块中， 以便在特殊情况下静默失败

```html
<input type="button" value="Click Me" onclick="try{showMessage();}catch(ex) {}">
```

### 使用 DOM0 方式添加事件

以这种方式添加事件处理程序是注册在事件流的**冒泡阶段**的

```js
let btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log(this.id);  // "myBtn"
};

btn.onclick = null; // 移除事件处理程序
```

### DOM2 事件处理程序

使用 DOM2 方式的主要优势是可以为同一个事件添加多个事件处理程序，两个核心API

- `addEventListener()`

  ```js
  element.addEventListener(event, function, useCapture/* true:捕获、false:冒泡(default) */); 
  ```

  ```js
  let btn = document.getElementById('myBtn')
  
  btn.onclick = () => {
    console.log('hello')	//DOM0方式同个事件只支持一个处理程序，会被后者覆盖
  }
  
  btn.onclick = function () {
    console.log(this.id) 
  }
  
  btn.addEventListener('click',function(){
    console.log(this.id)	
  },false)
  
  btn.addEventListener('click',() => {
    console.log(this.id)	//小心这里this指向的是window对象
  },false)
  
  // "myBtn"
  // "myBtn"
  // undefined
  ```

- `removeEventListener()`

  ```js
  // 移除事件(需要传入同一个函数，箭头函数与匿名函数不能互相替代)
  btn.addEventListener("click", () => {
    console.log(this.id);
  }, false);
  
  // 处理程序使用函数表达式
  let handler = function() {
    console.log(this.id);
  };
  btn.addEventListener("click", handler, false);
  btn.removeEventListener("click", handler, false); // 有效果!
  ```

### 跨浏览器事件处理程序

```js
var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      //兼容IE
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    } },
  removeHandler: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  } 
};
```

## 三、事件对象

`event对象`只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁。

| 属性/方法                  | 类 型  | 说 明                                                        |
| -------------------------- | ------ | ------------------------------------------------------------ |
| type                       | 字符串 | 被触发的事件类型                                             |
| target                     | 元素   | 事件目标                                                     |
| **currentTarget**          | 元素   | 当前事件处理程序所在的元素                                   |
| **eventPhase**             | 整数   | 表示调用事件处理程序的阶段:<br /> 1 代表捕获阶段，2 代表到达目标，3 代表冒泡阶段 |
| bubbles                    | 布尔值 | 表示事件是否冒泡                                             |
| cancelable                 | 布尔值 | 表示是否可以取消事件的默认行为                               |
| preventDefault()           | 函数   | 用于取消事件的默认行为。<br />比如阻止a标签的跳转，checkbox的选中等浏览器默认行为。<br />只有 cancelable 为 true 才可以调用这个方法 |
| stopPropagation()          | 函数   | 用于取消所有后续事件传播（包括**事件捕获或事件冒泡**）<br />只有 bubbles 为 true 才可以调用这个方法 |
| stopImmediatePropagation() | 函数   | 用于取消所有后续事件捕获或事件冒泡，<br />并阻止监听同一事件的其他事件监听器被调用 |

## 四、事件类型

[事件参考—MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events)

- 用户界面事件(`UIEvent`): 涉及与 BOM 交互的通用浏览器事件。（UI事件/HTML事件）
  - load、unload、beforeunload、resize、scroll、select、abort、error
- 焦点事件(`FocusEvent`): 在元素获得和失去焦点时触发。
  - focus、blur
- 鼠标事件(`MouseEvent`): 使用鼠标在页面上执行某些操作时触发。
- 滚轮事件(`WheelEvent`): 使用鼠标滚轮(或类似设备)时触发。
  - mousewheel
- 输入事件(`InputEvent`): 向文档中输入文本时触发。

- 键盘事件(`KeyboardEvent`): 使用键盘在页面上执行某些操作时触发，持续按住会重复触发。
  - keydown、keyup
  - ~~keypress~~ 只有按下字符键时在keydown之后触发，推荐改用 textInput 事件，只在可编辑区域上触发
- 合成/复合事件(`CompositionEvent`): 在使用某种 IME(Input Method Editor，输入法编辑器)输入字符时触发。
  - compositionstart、compositionupdate、compositionend
- 拖拽事件(`DragEvent`): DragEvent --> MouseEvent --> UIEvent --> Event
- ……

### 鼠标事件

- mouseenter/mouseleave、mouseover/mouseout
- mouseenter与mouseover的区别是，`mouseenter` 不会冒泡和捕获后代元素。
- 除了 mouseenter 和 mouseleave，所有鼠标事件都会冒泡，都可以被取消，而这会影响浏览器的默认行为

<u>事件之间存在关系，因此取消鼠标事件的默认行为也会影响其他事件。</u>

例如dblclick事件前如果click被取消，则无法触发，正常触发顺序如下：

(1) mousedown 

(2) mouseup 

(3) click

(4) mousedown

(5) mouseup

(6) click

(7) dblclick

#### 坐标属性

- MouseEvent.clientX
- MouseEvent.offsetX
- MouseEvent.pageX
- MouseEvent.screenX
- …

#### 修饰键属性

shiftKey、ctrlKey、altKey 和 metaKey

### HTML5 事件

1. `contextmenu` ：右键菜单
2. `beforeunload` ：这个事件会向用户显示一个确认框，并请用户确认是希望关闭页面，还是继续留在页面上
3. `load` ：会在页面完全加载后触发，因为要等待图片、JavaScript文件、CSS 文件或其他资源加载完成，所以会花费较长时间
4. `DOMContentLoaded` ：会在 DOM 树构建完成后立即触发，而不用等待很多外部资源加载完成
5. `hashchange` ：`location.hash`变化



## 五、事件委托

事件委托利用事件冒泡，可以只使用一个事件处理程序来管理一种类型的事件，以解决事件处理程序过多的问题

也叫事件代理，如果你想要在大量子元素中单击任何一个都可以运行一段代码，您可以将事件监听器设置在其父节点上，并让子节点上发生的事件冒泡到父节点上，而不是每个子节点单独设置事件监听器。

#### 局限性

1. 比如 focus、blur 之类的事件本身没有事件冒泡机制，所以无法委托；
2. mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的；

## 六、例子

### 阻止事件冒泡的几种方式

```
1. event.cancelBubble = true;
2. event.stopPropagation();
3. return false;
```

### 多事件处理(switch-case, event.type)

```js
let btn = document.getElementById("myBtn");
let handler = function(event) {
  switch(event.type) {
    case "click":
      console.log("Clicked");
      break;
    case "mouseover":
      event.target.style.backgroundColor = "red";
      break;
    case "mouseout":
      event.target.style.backgroundColor = "";
      break;
  }};
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;
```

### 事件委托(event.target)

```js
let list = document.getElementById("myLinks");
// 给所有元素共同的祖先节点，添加一个事件处理程序
list.addEventListener("click", (event) => {
  let target = event.target;
  switch(target.id) {
    case "doSomething":
      document.title = "I changed the document's title";
      break;
    case "goSomewhere":
      location.href = "http:// www.wrox.com";
      break;
    case "sayHi":
      console.log("hi");
      break;
  } 
});
```



## 其它

1. 如果知道某个元素会被删除，那么最好在删除它之前手动删除它的事件处理程序，例如使用 innerHTML 以前，先把要被替换的元素上的事件释放掉： `btn.onclick = null`，以避免元素被删除时，而事件没有被清理仍然滞留在内存中。
2. DOM 事件模拟。使用document.createEvent()方法创建一个 event 对象，调用dispatchEvent()方法触发事件。

# 参考

《JavaScript高级程序设计（第4版）》— 第17章 事件