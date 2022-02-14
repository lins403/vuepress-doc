# DOM

文档对象模型(DOM，Document Object Model)是 HTML 和 XML 文档的编程接口。

DOM 表示由多层节点构成的文档，通过它开发者可以操作网页（添加、删除和修改页面的各个部分），也就是说 JavaScript 可以访问和操作存储在DOM中的内容

## EventTarget

`EventTarget` 是一个 DOM 接口，由可以接收事件、并且可以创建侦听器的对象实现。

`Element`，`document` 和 `window` 是最常见的 event targets ，但是其他对象也可以作为 event targets，比如 `XMLHttpRequest`，`AudioNode`，`AudioContext` 等等。

```js
var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {};
EventTarget.prototype.removeEventListener = function(type, callback) {}
```

## 节点层级

> `HTMLDivElement` »» `HTMLElement` »» `Element` »» `Node` »» `EventTarget`

DOM 由一系列节点类型构成，主要包括以下几种。

- `Node` 是基准节点类型，是文档一个部分的抽象表示。

  - 在 JavaScript 中，所有节点类型都继承 Node 类型。

- `Document` 类型表示整个文档，对应树形结构的**根节点**。

  - nodeType 等于 9

  - 根节点的唯一子节点是`<html>`元素，我们称之为文档元素(documentElement)。
  - 在 JavaScript 中，document 对象是Document 的实例，拥有查询和获取节点的很多方法。

- `Element` 节点表示文档中所有 HTML 或 XML 元素，可以用来操作它们的内容和属性

  - nodeType 等于 1

- `Text`节点表示文本内容

  - nodeType 等于 3
  - `document.createTextNode(textData)`

- `Comment`节点表示注释

  -  nodeType 等于 8
  - `document.createComment(commentData)`

- `DocumentType`节点表示文档类型，描述文档类型的 `DocumentType` 节点。

  - `document.doctype`
  - 例如 `<!DOCTYPE html>` 就是用于 HTML5 的

- `CDATASection`节点类型继承 Text 类型，表示 XML 中特有的 CDATA 区块

- `DocumentFragments`节点表示文档片段。

  - `document.createDocumentFragment()`

- `Attr`节点表示属性节点，但不被认为是 DOM 文档树的一部分。

  - 很少直接被引用，通常使用 getAttribute()、setAttribute()等方法操作属性值，而不是直接操作属性节点

### Node

```
console.dir(Node)
console.log(Node.prototype)
```



### Document

```js
console.dir(document)

/*** 🌲文档节点 ***/
let html = document.documentElement; // 取得对<html>的引用
let body = document.body; // 取得对<body>的引用
let doctype = document.doctype; // 取得对<!doctype>的引用

/*** ℹ️文档信息 ***/
// document是 HTMLDocument 的实例，还有一些标准 Document 对象上所没有的属性(URL、title、domain、referrer、……)
let originalTitle = document.title;
document.title = "New page title";	//修改文档标题
console.log(document.styleSheets)

/*** 📌定位元素 ***/
var element = document.getElementById(id);	//返回一个 DOM Element 对象，若没有找到则返回 null
var elements = document.getElementsByClassName(names);	//返回一个NodeList，包含了所有指定类名的子元素的类数组对象
var elements = document.getElementsByName(name);	//返回一个HTML集合，具有给定 name 属性的所有元素
var elements = document.getElementsByTagName(name);	//返回一个HTMLCollection
var elements = document.querySelectorAll(selectors);	//返回一个NodeList

/*** ✍🏻文档写入 ***/
document.open();	//打开文档流（document stream），但在调用write和writeln时，open和close都不是必需的
document.close();
document.write(markup);	//将一个文本字符串写入
document.writeln(line);		//写入一串文本，并紧跟着一个换行符
```

### Element

```js
/*** 属性 ***/
let attribute = element.getAttribute(attrName);
element.setAttribute(attrName, attrValue);
element.removeAttribute(attrName);

/*** 元素 ***/
let div = document.createElement("div");

// 把元素添加到文档树
element.childNodes
element.appendChild()	//从Node继承而来的，Node.appendChild()
element.insertBefore()
element.removeChild()
element.replaceChild()

// 重要属性
element.attributes
element.style
element.style.getPropertyValue(property)
element.className
element.classList
element.dataset
element.childNodes	//NodeList，包含空格元素
element.children	//HTMLCollection，不包含空格元素
element.innerHTML
element.outerHTML
element.lastChild	//可以是空格元素
element.lastElementChild	//非空格元素
element.firstChild
element.nextSibling
element.getBoundingClientRect()	//元素在页面中相对于viewpoint的位置
// ...
```

### DocumentFragments

表示文档片段

- 因为文档片段存在于**内存中**，并不在DOM树中，所以将子元素插入到文档片段时，不会引起页面回流（reflow重排，对元素位置和几何上的计算）。因此，使用文档片段可以避免多次插入子元素带来的多次渲染，所以通常会带来更好的性能。
- 通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树
- 文档片段的所有子节点会被添加到文档中相应的位置，但文档片段本身永远不会被添加到文档树
- Web Component中的 `<template>` ，React中的`<React.Fragment>`

🌰一个插入子元素的例子

```js
<ul id="myList"></ul>

let fragment = document.createDocumentFragment();
let ul = document.getElementById("myList");
for (let i = 0; i < 3; ++i) { 
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`Item ${i + 1}`));
  fragment.appendChild(li);
}
ul.appendChild(fragment);
```



## DOM编程

### HTMLCollection 与 NodeList 

以下情形会返回 HTMLCollection:

- 调用 `getElementsByTagName()`;
- 读取元素的 `childNodes` 属性;
- 读取元素的 `attributes` 属性;
- 访问特殊集合，如 `document.form`、`document.images` 等。

---

HTMLCollection 与 NodeList 的区别：

- NodeList 是一个**静态集合**，其不受 DOM 树元素变化的影响；相当于是 DOM 树快照，节点数量和类型的快照，就是对节点增删，NodeList 感觉不到。但是对节点内部内容修改，是可以感觉到的，比如修改 `innerHTML`。
- HTMLCollection 是一个**动态集合**，动态绑定、“实时更新”的，这意味着每次访问它都会执行一次新的查询。
  - 因为浏览器不希望保存每次创建的集合，所以就会在每次访问时更新集合。
  - DOM 树发生变化，HTMLCollection  也会随之变化，节点的增删是敏感的
  - 遍历时，要使用一个临时变量来保存，避免死循环；
  - 而因为每次查询都会搜索整个文档，所以最好把查询结果缓存起来
- HTMLCollection 元素可以通过 `name`，`id` 或 `index` 索引来获取。NodeList 只能通过 `index` 索引来获取。
- 都是类数组对象，可以使用 for...of 来直接遍历

```js
// NodeList 是一个**静态集合**
for (let node of document.querySelectorAll('div')) {
  const el = document.createElement('div')
  document.body.appendChild(el)
}
```

```js
// HTMLCollection 是一个**动态集合**

/****** 会死循环的两种遍历方式 ******/
for (let node of document.getElementsByTagName('div')) {
  const el = document.createElement('div')
  document.body.appendChild(el)
}

// 每次循环时divs.length值也会递增
const divs = document.getElementsByTagName('div')
for (let i = 0; i < divs.length; ++i) { document.body.appendChild(document.createElement('div')) }


/****** 改进******/
// 利用闭包，缓存divs.length，避免查询
const divs = document.getElementsByTagName('div')
for (let i = 0, len = divs.length; i < len; ++i) {
  let div = document.createElement('div')
  document.body.appendChild(div)
}
// 更简洁的方式
//for (let i = divs.length - 1; i >= 0; --i) {
```

### MutationObserver接口

MutationObserver 是为代替性能不好的 MutationEvent 而问世的。使用它可以有效精准地监控DOM 变化

```js
var targetNode = document.querySelector("#someElement");
var observerOptions = {
  childList: true,  // 观察目标子节点的变化，是否有添加或者删除
  attributes: true, // 观察属性变动
  subtree: true     // 观察后代节点，默认为 false
}
// 实例化时指定回调
var observer = new MutationObserver(callback);
// 调用observe方法，指定目标节点与记录选项
observer.observe(targetNode, observerOptions);
```

MutationObserver对目标节点是弱引用，不影响目标节点的垃圾回收；而目标节点对MutationObserver是强引用

### classList 属性

```js
// 删除"disabled"类 
div.classList.remove("disabled");

// 添加"current"类 
div.classList.add("current");

// 切换"user"类
div.classList.toggle("user");

// 检测类名
if (div.classList.contains("disabled")){
  // 执行操作
}

// 迭代类名
for (let class of div.classList){
  doStuff(class);
}
```

### 自定义数据属性（dataset）

```html
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
<script>
  let div = document.getElementById('myDiv')
  // 取得自定义数据属性的值(会被全部转化成小写)
  let appId = div.dataset.appid
  let myName = div.dataset.myname
  // 设置自定义数据属性的值 
  div.dataset.appId = 23456; 
  div.dataset.myname = "Michael";
  // 有"myname"吗?
  if (div.dataset.myname) {
    console.log(`Hello, ${div.dataset.myname}`)
  }
</script>
```

### 插入元素

因为元素在被通过这种方式移除时，其绑定的事件或属性仍会滞留在内存中，因此在使用 innerHTML、 outerHTML 和 insertAdjacentHTML()之前，最好手动删除要被替换的元素上关联的事件处理程序和 JavaScript 对象。

同时还要警惕防范 XSS 攻击

#### innerHTML与outerHTML

```js
// innerHTML只会替换子节点
el.innerHTML = '<p>This is a paragraph.</p>'

// outerHTML会将el元素及其子元素全部覆盖掉
el.outerHTML = '<p>This is a paragraph.</p>'
```

#### insertAdjacentHTML()与 insertAdjacentText()

```js
element.insertAdjacentHTML(position, element);
element.insertAdjacentText(position, text);
```

##### position

- `'beforebegin'`：元素自身的前面。
- `'afterbegin'`：插入元素内部的第一个子节点之前。
- `'beforeend'`：插入元素内部的最后一个子节点之后。
- `'afterend'`：元素自身的后面。

#### insertBefore

```js
// 使用insertBefore将newNode插入在referenceNode前
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

没有 insertAfter()，不过可以使用 insertBefore 和 Node.nextSibling 来模拟它

```js
//创建一个新的、普通的<span>元素
var sp1 = document.createElement("span");

//插入节点之前，要获得节点的引用
var sp2 = document.getElementById("childElement");

//获得父节点的引用
var parentDiv = sp2.parentNode;

//在DOM中在sp2之前插入一个新元素
parentDiv.insertBefore(sp1, sp2);

//在DOM中在sp2之后
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

使用 firstChild 属性

```js
//插入节点之前，要获得节点的引用
var parentElement = document.getElementById('parentElement');
//获得第一个子节点的引用
var theFirstChild = parentElement.firstChild;
```

