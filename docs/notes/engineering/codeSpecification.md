# 可维护性

## 编码规范

可读性

- 空格缩进和代码注释

变量和函数命名

- 变量名应该是个名词。函数名应该以动词开始，例如 getName()
- 变量、函数和方法应该以小写字母开头，使用驼峰大小写(camelCase)形式，例如 getName() 和 isPerson
- 类名应该首字母大写，如 Person、RequestFactory
- 常量值应该全部大写并以<u>下划线</u>相接，比如 REQUEST_TIMEOUT。

变量类型透明化

1. 定义变量时，应该立即将其初始化为一个将来要使用的类型值。
2. 使用类型注释，例如 `let count /*:int*/ = 10` 、`let person /*:Object*/ = null`

### CSS — BEM 命名规范

- Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

> \-  中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

> __  双下划线：双下划线用来连接块和块的子元素

> _   单下划线：单下划线用来描述一个块或者块的子元素的一种状态

### 规范参考

[前端代码规范](https://guide.aotu.io/docs/)

[Code Guide](http://alloyteam.github.io/CodeGuide/)

## 松散耦合

耦合度低的应用程序，便于定位错误来源和修改错误，增强可维护性。

### 解耦 HTML/JavaScript

HTML 渲染应该尽可能与 JavaScript 分开。

1）尽量避免把 JavaScript 直接嵌入在 HTML 中

- 避免使用包含嵌入代码的`<script>`元素
- 避免使用 HTML 属性添加事件处理程序

2）尽量避免把 HTML 包含在 JavaScript 中

- 避免在 JavaScript 中创建大量 HTML，然后通过 innerHTML 等方式插入到页面中

### 解耦 CSS/JavaScript

通过动态修改元素的 CSS 类名，而不是直接修改元素样式，来实现 JavaScript 修改 CSS 样式。这样可以把大部分样式限制在 CSS 文件里。

```js
// CSS 与 JavaScript 松散耦合
element.className = "edit";
```

### 解耦应用程序逻辑/事件处理程序

易于代码扩展、易于测试，如编写单元测试代码

```js
function handleKeyPress(event) {
  if (event.keyCode == 13) {
    let target = event.target;
    let value = 5 * parseInt(target.value);
    if (value > 10) {
      document.getElementById("error-msg").style.display = "block"; 
    }
  } 
}
```

**改进**

```js
function validateValue(value) {
  value = 5 * parseInt(value);
  if (value > 10) {
    document.getElementById("error-msg").style.display = "block"; 
  }
}
function handleKeyPress(event) {
  if (event.keyCode == 13) {
    let target = event.target;
    validateValue(target.value);
  }
}
```

## 编码惯例

### 尊重对象所有权

- 不要给实例或原型添加属性或方法
- 不要重定义已有的方法

可以按如下这样为对象添加新功能

1. 创建包含想要功能的新对象，通过它与别人的对象交互。
2. 创建新自定义类型继承本来想要修改的类型，可以给自定义类型添加新功能。

### 不声明全局变量

使用一个全局对象作为唯一的全局变量，然后创建对象作为独立的命名空间

```js
// 创建全局对象
var School = {};

// 创建一个命名空间
School.Classroom = {};
School.Playground = {};

// 添加本书用到的其他对象 
School.Classroom.MemberUtil = { ... }; 
School.Classroom.SetupUtil = { ... };

// 使用 ProJS 下面的对象 
School.Classroom.MemberUtil.addStudent( ... );
```

### 类型检查

不要只与null进行比较，可以使用下列某种技术替换它。

  如果值应该是引用类型，则使用 instanceof 操作符检查其构造函数。

  如果值应该是原始类型，则使用 typeof 检查其类型。

  如果希望值是有特定方法名的对象，则使用 typeof 操作符确保对象上存在给定名字的方法。 

代码中比较 null 的地方越少，就越容易明确类型检查的目的，从而消除不必要的错误。

### 使用常量

依赖常量的目标是从应用程序逻辑中分离数据，以便修改数据时不会引发错误。

数据需要提取的几种常见情况

1. 重复出现的值
2. 用户界面字符串：以方便实现国际化
3. URL
4. 任何可能变化的值

