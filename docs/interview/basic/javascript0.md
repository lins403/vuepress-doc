# JavaScript基础

【ECMAScript 和 JavaScript】ECMAScript是语言标准，它是JavaScript的规范，而JavaScript就是对ECMAScript的实现，类似于Unicode和UTF系列的关系

## 数据类型

【为什么 typeof null 是object】JS在底层存储变量时，会在变量机器码的前1-3位存储其类型信息。object类型变量的前三位是000，而null的机器码全为0，所以被typeof误判为object类型。

【typeof、instanceof、toString方法判断的原理】`typeof`原理是根据变量在底层存储的机器码的前1-3位来判断变量类型。`instanceof`是执行构造函数的内置属性Symbol.hasInstance方法，来判断实例对象的原型链上是否包含这个构造函数。`Object.prototype.toString.call()`方法的原理是读取实例对象的内部属性 [[Class]]。

【undefined、null和NaN】`undefined`表示原始值，变量未定义；`null`表示缺少值，通常将赋值为null表示一个空对象，也可以手动赋值null用于释放对象的引用，或者用于解除事件监听，便于垃圾回收；`NaN`属于number类型，表示一个非数值。NaN跟所有数都不相等，包括自身。最特殊的是`undefined == null`。

### number

【浮点数精度】javascript所有number类型的数据都是以64位双精度浮点数进行存储，在内存中占用8个字节（整数也是，但是在整数运算时会转换成32位进行运算）。符号位占用1位、指数(用二进制表示时小数点移动的位数)11位、小数部分52位，位数不够就用0补齐。

【精度丢失】计算机在存储时十进制数据时，需要将其转换为二进制进行存储，转换过程中可能出现无限循环，但因为最多只能存储64位，所以需要进行0舍1入操作，再转换成十进制的时候就出现了误差，比如0.1。解决办法是可以使用number-precision库，原理是先将小数都转换成字符串，replace掉小数点，变为整数进行运算，然后再还原倍数。

【极限值】安全整数，`Number.isSafeInteger()`判断一个数是否在-2^53 + 1与2^53 - 1之间，使用ES11的BigInt时可以突破这个范围。`Number.EPSILON`表示一个极小的常量，误差小于这个数时可以忽略。`Number.isFinite()`判断一个数不能为Infinity或者-Infinity，Infinity与Infinity之间相等。

### string

【字符串的不可变性】字符串可迭代但不可被修改。字符串作为一个基本数据类型，被存储在栈内存中一块固定大小的空间上，任何对字符串的修改都不会影响到它。

【javascript的字符串编码】javascript的编码实现其实是UCS-2，每个编码占用两个字节，由于BMP空间的2^16个数不够用了，UCS-2后来被拓展为UTF-16，超出的部分每个编码占用4个字节。UTF-16是UCS-2的超集，对于Plane0区间的编码实现，UCS-2和UTF-16是一致的。由于历史原因，javascript只支持Plane0区间的编码，所以所有的字符都是占用两个字节。但是对于字符串的length属性，Plane0区间为1，区间外则为2.

【常用的字符串实例方法】includes、indexOf、search、match、replace、repeat、slice、trim

【substring、substr、slice】MDN中推荐使用substring来替代substr，但substring中所有负参数值都被转换为0，所以不能用于反向索引。觉得slice方法最易用，也不会有歧义。

### array

【数组的几种创建方法】使用构造函数Array，没有new时也会被自动补上；使用字面量表示法；使用`Array.from`用一个类数组对象或迭代器创建一个数组；使用`Array.of`接收一组参数并创建一个数组实例，我觉得这个设计是用来取代构造函数Array接收多个参数的情况，这样构造函数Array方法就只需要用于创建一个初始化长度为n位的空数组。

【数组常用的实例方法】会改变原数组的有pop、push、shift、unshift、reverse、sort、splice。不会改变原数组的常用方法有fill；forEach、keys、values、entries；find、findIndex、includes、indexOf、lastIndexOf；every、some；flat、map、filter、reduce、reduceRight、slice等等。数组的原型Array.prototype是个数组.

【slice与splice】`slice`不会改变原数组，适合用于复制数组片段；`splice`会改变原数组，适用于插入、删除、替换的场景。

【定型数组】ArrayBuffer是原始的二进制数据，所有二进制数据处理的基础，如果要操作buffer就需要先转换为视图对象。定型数组是一种ArrayBuffer的视图，被设计用于提高与WebGL等原生库进行二进制数据交换的效率。例如使用Uint32Array构造函数来创建视图，就把buffer转换为一个32位整数的序列，每个整数4个字节，序列的长度就是buffer的长度除以4。定型数组更面向底层，js引擎针对做了优化，所以定型数组的速度非常快。

### object

【对象的创建方法】使用 new 操作符和 Object 构造函数创建一个实例，然后再给它添加属性和方法；使用对象字面量表示法创建；使用原型模式 `Object.create`创建；继承Object类来创建一个子类，实例化子类来创建新对象（适合量产对象，例如工厂模式、构造函数模式、原型链模式、组合模式、寄生组合模式等等）。

【属性描述对象】元属性，描述对象属性的属性。[[Configurable]]可配置性，[[Enumerable]]可枚举性、[[Writable]]是否可以修改、[[Value]]属性值，以及[[Get]]和[[Set]]。`Object.getOwnPropertyDescriptor()`用于获取自身属性的描述对象，获取所有时使用Object.getOwnPropertyDescriptors。`Object.defineProperty()`用于定义对象的一个新属性，并定义属性的描述对象，批量定义时使用Object.defineProperties()。

【控制对象状态】通过Object.preventExtensions、Object.seal、Object.freeze这三种方法不同程度上控制对象的扩展性。`Object.preventExtensions`使一个对象不能再添加新属性；`Object.seal`将元属性 configurable 设为 false，同时禁止新增或删除属性，并不影响修改某个属性的值；`Object.freeze`使一个对象无法添加、修改和删除属性，实际上就把对象变味了一个不可变的常量。三种方式都仅阻止添加自身的属性，原型依然可以添加和删除属性，所以需要将原型也冻结起来`Object.preventExtensions(Object.getPrototypeOf(obj))`。还有个局限性是只能冻结到第一层，也就是如果被冻结的属性值是个对象，则依然可以被修改。

【常用API】<u>实例方法</u>obj.toString()、obj.valueOf()、obj.hasOwnProperty()、obj.propertyIsEnumerable()、obj.isPrototypeOf()；<u>类方法</u>Object.assign()、Object.create()、Object.is()、Object.getPrototypeOf()、Object.keys()、Object.entries()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Object.defineProperty()

【属性类型】自身的可枚举属性、不可枚举属性、Symbol 键；继承的可枚举属性、不可枚举属性、Symbol 键。

【查询某个对象是否有某个属性的方法】

- `obj.key` 直接按属性名访问，判断是否为undefined
- `in` 操作符可以判断以上情况的全部属性
- `for...in` 遍历自身的和继承的可枚举属性，不包含symbol键
- `Object.keys` 仅包含自身的可枚举属性，不包含symbol键
- `Object.getOwnPropertyNames` 包含自身的可枚举属性与不可枚举属性（除symbol键外的所有自身属性）
- `Object.getOwnPropertySymbols()` 仅包含symbol类型的自身属性
- `obj.hasOwnProperty()` 和 `Object.hasOwn()` 用于判断所有的自身属性，包含symbol键
- `obj.propertyIsEnumerable()` 用于判断自身的可枚举属性和symbol键

### function

【函数的原型】每个函数都有个`prototype`属性，然后它的`constructor`属性又指向了函数自身。然后这个构造函数创建的实例对象的原型指针，指向这个构造函数原型。函数也是一个对象，每个函数的原型链上都包含了 `Function.prototype`，这上面定义了name、arguments、call、apply、bind等等诸多函数通用的属性和方法，而这个原型自身又会连接到 `Object.prototype`

【arguments对象】函数传参的方式是<u>按值传参</u>，也就是在函数内部修改参数的时候，并不会影响到传递的真实参数（对象等引用类型除外）。`arguments`表示实参，而形参通常被称为`parameters`。在非严格模式且没有使用默认参数值的情况下，arguments对象的值会和形参对应的值保持同步，有歧义所以不应该直接修改arguments对象，可以使用一个变量保存再进行操作。`arguments.callee`属性就是当前正在执行的函数，适合用于匿名函数的递归。

【this对象】普通函数中的this指向的是调用该函数的上下文对象，通常是个活动对象或者全局对象window或者global，所以普通函数的this值在函数运行时才会被确定，但通过call、apply和bind方法，可以控制调用函数的上下文，也就是修改函数中的this指向。箭头函数的this指向比较特殊，保留的是定义该函数时的上下文，即词法作用域。

【函数声明与函数表达式】函数声明会被提升，也就是在声明前可以被调用。函数表达式不会被提升，等到代码执行时函数才会被定义。函数表达式适合用于按条件创建函数，以及在递归中的使用。

【立即调用函数】IIFE，即立即调用的函数表达式。可以用于封装私有变量，模拟块作用域。第三方package的打包结果或者webpack打包的chunk通常都是一个IIFE，可以直接被浏览器执行。

【闭包】闭包指的是一个函数，引用了其它函数作用域中的变量。闭包的特点是，闭包引用的变量会被保存在堆内存上，并常驻内存。所以利用这个特点，可以记住每次闭包中对变量的修改结果，而坏处是所以如果没有及时释放闭包，闭包引用的活动对象就不会被垃圾回收，就会常驻内存容易造成内存泄漏。闭包还有一个大的用处是封装内部变量，避免污染全局环境。闭包的应用场景非常多，例如用于回调函数例如setTimeout、防抖节流，结合IIFE模拟块作用域，以及实现函数柯里化、递归等等。闭包的缺点是如果没有清除对闭包的引用，因为闭包(的作用域链)中仍然有对外层函数变量的引用，所以即使外层函数执行完成，其活动对象不会被主动垃圾回收，就会常驻内存容易造成内存泄漏。

【递归与尾调用优化】函数每次递归都需要执行栈为其创建一个调用帧，就容易造成栈溢出。而尾调用优化是ES6规范新增的一项内存管理优化机制，让JS引擎在满足条件的情况下可以重用调用帧（栈帧），这样在每次递归调用或者嵌套函数的调用时，栈内存上都只有一个栈帧，可以节省栈空间，还不会造成栈溢出。

【纯函数】给定相同的输入，要始终返回相同的输出，也就是输出结果不能依赖于任何外部可变状态，例如随机数、时间戳或者引用类型的数据。同时纯函数也不能产生副作用，即不允许修改任何的外部状态。

【偏函数】固定函数的某一个或几个参数，返回一个新的函数来接收剩下的变量参数。可以用函数的bind方法来实现，但因为不需要传入this，所以绑定一个null，并传入需要固定的参数。

【柯里化】柯里化的常规做法是，把一个接受N个参数的函数，转化为连续N个接受单个参数的函数链。可以像偏函数那样用于固定参数，或者是用于解耦复杂函数的处理逻辑，剥离出通用的处理逻辑。可以使用柯里化来缓存部分结果，也有助于提升函数执行效率。用递归实现一个curry转换器。

【管道函数】管道函数是指接收一系列处理函数，将前一个函数的执行结果作为参数传递给下一个的函数，从而省略了中间的赋值步骤，可以大量减少内存中的对象，<u>节省内存</u>而且提升执行效率。用reduce方法实现

### 引用类型

【GMT和UTC】GMT指格林尼治平均时间，因为地球自转的不规则和天文观测本身的缺陷，所以GMT被UTC取代，也就是协调世界时。Unix time表示纪元时间，1970-01-01 00:00:00 UTC，`Date.now()`方法返回自 Unix time 至今所经过的毫秒数。

【Date对象的实例方法】getTime()返回时间戳，getDay()返回0-6从星期天开始，getMonth()返回0-11，toLocaleDateString()和toLocaleString()返回该地区常用格式的时间字符串。

【原始值包装类型】共有3种原始值包装类型：Boolean、Number、String。原始包装类型的用处是，可以使得原始值被当成对象使用，从而可以继承对象原型的方法，也可以在自己的原型上定义方法。

【单例内置对象】当代码开始执行时，全局上下文中包含的两个内置对象，Global和Math，但在浏览器中Global被实现为window对象。

【集合引用类型】包含了Object、Array、Map、WeakMap、Set、WeakSet等数据类型。

## JSON

【JSON与JavaScript】JSON是一种通用的数据交换格式，JavaScript语法中定义了JSON对象，但JSON不完全属于JavaScript，也不止能在JavaScript中使用。JSON.stringify()用于将 JavaScript 对象序列化为 JSON 字符串，JSON.parse()用于将 JSON 字符串解析为 JavaScript 对象。

【JSON.stringify序列化】JSON 用来序列化一个对象<u>自身的可枚举属性</u>，可序列化的数据包括<u>对象、数组、数值、字符串、布尔值和 null</u>，其它数据格式的内容会被特殊处理。Date、RegExp、Error对象序列化的结果将只得到<u>空对象</u>；undefined、任何函数以及 symbol 值在序列化过程中会<u>被忽略</u>；NaN、Infinity和-Infinity 在序列化过程中会被转换为<u>null</u>。可以给对象的`toJSON`属性定义方法，JSON.stringify序列化对象时会调用这个方法。

【JSON.parse解析】将 JSON 字符串解析为原生 JavaScript 值，第二个参数接收一个自定义转换规则的转换器。

## 二进制数据

【ArrayBuffer】ArrayBuffer是去引用一段固定长度的连续的内存空间，是原始的二进制数据，所有二进制数据处理的基础。如要操作 ArrayBuffer，我们需要使用ArrayBuffer“视图”对象，如DataView或者TypedArray定型数组。前端业务中读取一些特殊格式的文件，例如Excel，通常是先将它读取为arraybuffer，然后转换成视图进行解析。

【Blob】*Binary large object*，二进制大对象，是 JavaScript 对二进制数据的封装，表示一个不可变的类文件对象，可以按文本或者二进制的格式进行读取。Blob()构造函数接收一个数组用于创建blob，和一个options参数用于指定数组内容的MIME类型，并返回一个Blob对象。Blob可以被用来创建一个url，也可以使用FileReader对象将blob转换成base64位或者arraybuffer。

【TextDecoder 和 TextEncoder】TextDecoder 接口表示一个文本解码器，一个解码器只支持一种特定文本编码，它可以将字节流的内容读取到字符串中；TextEncoder与之相反，则是将字符串转换为字节，输出 UTF-8 字节流。

【File】File对象继承自Blob对象，继承了blob的功能并扩展了与文件系统相关的功能，相当于特殊类型的Blob对象。通过File接口，可以查看有关文件的信息，并允许网页中的 JavaScript 访问文件内容。用户在一个 `<input>` 元素上选择文件后返回的 `FileList` 就是 `File` 对象。

【fileReader】FileReader类型表示一种异步的文件读取机制，FileReader是一个对象，其唯一目的是从 Blob 或 File 对象中读取数据。

【MIME】Multipurpose Internet Mail Extensions，通常称为媒体类型，或 MIME 类型。是一种标准，用来表示文档、文件或字节流的性质和格式。常见的 MIME 类型有text/plain、text/html、image/png、application/json、multipart/form-data、…

## 正则表达式

【正则表达式断言】

```js
(?:x)		匹配 'x' 但是不记住匹配项。非捕获组，不返回该组匹配的内容
x(?=y)		匹配'x'仅当'x'后面着'y'，这种叫做先行断言。
(?<=y)x		匹配'x'仅当'x'前面是'y'，这种叫做后行断言。
x(?!y)		匹配'x'仅当'x'后面不是'y'，这被称为正向否定查找。
(?<!y)x		匹配'x'仅当'x'前面不是'y'，这被称为反向否定查找。
```

【正则表达式标志】

```js
g	global 全局匹配
i	ignoreCase 忽略大小写
m	multiline	多行匹配
y	sticky	粘附模式，表示只查找从lastIndex开始及之后的字符串，需要手动设置正则实例的lastIndex属性
u	Unicode	启用 Unicode 匹配
s	dotAll	元字符`.`匹配任何字符(包括\n 或\r)
```

【常见用法】

- new RegExp()
- 正则实例：test() 、exec()    
- 字符串：match()、matchAll()、replace()、replaceAll()、search()、split()

## Form

【表单序列化】如果Content-Type是urlencode的话就将表单数据拼接成字符串，然后作为接口参数发送给后端，通常我们是用qs库的stringify方法进行序列化成 URL 的格式(a=b&c=d)。如果是post请求使用application/json时，那么可以直接传递一个js对象。（samesite属性为lax时，表单的get提交可以跨域携带cookie）

## DOM

【DOM】Document Object Model，文档对象模型，是 HTML 和 XML 文档的编程接口。DOM 表示由多层节点构成的文档，可以使用 JavaScript 访问和操作存储在 DOM 中的内容，从而实现操作网页内容。DOM<u>由一系列节点类型构成</u>，Node基础节点、文档节点(Document)、元素节点(Element)、注释节点(Comment)、文本节点(Text)、文档片段节点(DocumentFragment)等等，其中所有节点类型都继承自 Node 类型，不同节点类型对应不同的nodeType。

【document和element】document对象表示整个html文档，可以用于获取文档信息如document.title，定位元素如document.getElementById，文档写入操作如document.write。element节点表示文档中所有的HTML元素节点，可以通过document对象的方法定位到特定元素。element对象可以用来访问和操作节点的内容和属性，例如innerHTML、setAttribute等等。

【DocumentFragment】表示文档片段，因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时，不会引起页面的重排和重绘。通常的做法是创建文档片段，先将元素插入到文档片段中，然后将文档片段附加到DOM树上，就可以避免多次插入子元素带来的页面多次渲染的性能消耗。

【HTMLCollection 与 NodeList】`NodeList` 是一个类数组对象，是静态的，不受 DOM 树元素变化的影响，相当于是一份 DOM 树的快照。`HTMLCollection` 是一个动态集合，每次访问它都会执行一次新的查询。常用的方法中，getElementsByClassName和querySelectorAll查询结果返回一个NodeList，而getElementsByName、getElementsByTagName则返回一个HTMLCollection。常用属性中，childNodes返回NodeList且包含空元素，children返回HTMLCollection且不包含空元素。

【MutationObserver】`MutationObserver` 接口可以用于监控DOM变化。MutationObserver对目标节点是<u>弱引用</u>，不影响目标节点的垃圾回收，而目标节点对MutationObserver是强引用，需要移除目标节点才能自动释放MutationObserver实例。

【dataset】element元素的dataset属性，可以访问其元素节点上的自定义属性。

【DOM插入元素】innerHTML只会替换元素的子节点，outerHTML会将el元素及其子元素全部覆盖掉。可以使用insertAdjacentHTML()与 insertAdjacentText()在元素的指定位置插入。这几种方式插入元素时，被替换的元素上绑定的事件或属性仍会滞留在内存中，需要手动释放掉，否则容易造成内存泄漏。

## BOM

【BOM】Browser Object Model，浏览器对象模型，核心是`window`对象，同时还包含了访问和操作导航的`location` 对象、访问浏览器信息的`navigator` 对象、显示器信息的`screen` 对象、访问历史的`history` 对象。

【window对象】window 对象在浏览器中有两重身份，一个是表示JavaScript在浏览器环境中的 Global 对象，另一个则是作为浏览器窗口的 JavaScript 接口。

【location对象】location对象既是 window 的属性，也是 document 的属性。`location.assign()`跳转新页面，`location.reload()`重载页面，`location.replace()`跳转后不会增加历史记录，所以调用之后用户不能回到前一页。

【history对象】使用 back()、forward()、go() 方法来完成在用户历史记录中向后和向前的跳转。浏览器的前进后退操作会触发window上的`popstate`事件。`pushState`方法将一条 state 记录加入到当前浏览器会话的 history 调用栈中，一条 state 记录包含了 url、title 和 content 等属性；`replaceState`方法会修改当前state，而不会产生新的历史记录。

【DOM和BOM】DOM是文档对象模型，BOM则是浏览器对象模型。JavaScript通过DOM的接口可以访问和操作HTML，通过BOM的对象进行浏览器相关的操作，BOM包含了window对象、location对象、history对象、navigator对象、screen对象等。

## 事件

【事件流】JavaScript事件流，有事件捕获和事件冒泡两种机制，当年浏览器大战时，网景主张捕获方式，微软主张冒泡方式。后来 w3c 制定了统一的标准——先捕获再冒泡，这是针对事件流上的非target节点，而target节点上呢就是谁先注册就谁先。通常注册事件监听函数用的是addEventListener函数，其中第三个参数useCapture，表示是否使用捕获方式，默认是false也就是冒泡方式。然后事件委托，现在浏览器也都是默认用的冒泡机制。

【事件委托】事件委托，也叫事件代理，就是利用事件冒泡机制，将一组元素的事件处理函数委托给它们的父元素或者更外层的元素。这样做的好处是可以不用给每一个元素都注册监听事件，可以节省资源、提升性能，而且扩展性也更强。当然本身也有一定的缺陷，比如有些事件本身没有冒泡事件，比如聚焦事件focus和blur等等，它们就不能被委托；还有些是不适合做委托的，比如鼠标移动这种需要计算偏移或位置的事件，比较消耗性能。

【DOM0和DOM2】DOM0，`el.onclick=function(e){}; el.onclick = null;` 。DOM2，`el.addEventListener(); el.removeEventListener()`，使用 DOM2 方式的主要优势是可以为同一个事件添加多个事件处理程序.