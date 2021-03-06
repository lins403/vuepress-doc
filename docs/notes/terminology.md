# 术语

### 职位

- PM: Product Manager，产品经理
- RD: Research and Development engineer，研发工程师
- QA: Quality Assurance，品质保证，测试

### 幂等性

表示执行相同的操作，结果也是相同的。例如 HTTP 中 GET 请求是幂等的，而 POST 请求不是

## 一、工程化

### 物料

基础组件--业务组件--区块--页面模板

### 前端工作流

1. 技术选型
2. 搭建开发环境
3. 项目部署
   - 代码管理
   - 配置站点
   - 项目骨骼搭建
4. 代码编写
   - 静态页面重构
   - js公共组件封装
   - 编写js业务代码
5. 代码质量管控
   - 规范化 - 建立代码规范与Code Review制度
   - 自动化 - 使用工具自动检查代码质量
   - 流程化 - 将代码质量检查与代码流动过程绑定
   - 中心化 - 以团队整体为视角，集中管理代码规范，并实现质量状况透明化
6. 联调
7. 跟踪测试
8. 代码优化，性能优化

[浅谈web前端工作流](https://zhuanlan.zhihu.com/p/29302809)

[前端工程工作流规范](https://juejin.cn/post/7024000916990754829)

### 无代码与低代码

- 低代码，是一种可以让开发者依托平台快速搭建企业信息化的系统，在这过程中，使用者只需要少量的代码编写，其他的大部分工作都是通过可视化的拖拽、点选完成。

- 无代码，或称零代码，是一种完全不需要任何代码编程的开发方式，它主要是围绕企业数据和业务管理需求，通过可视化方式设计数据结构，用户交互形式、设置访问权限和定义工作流程的平台。

### 技术负债

Technical debt (also known as tech debt or code debt) describes what results when development teams take actions to expedite the delivery of a piece of functionality or a project which later needs to be refactored. In other words, it’s the result of prioritizing speedy delivery over perfect code.

### 基准测试

当更新同一应用程序（包括软件、硬件、网络和代码更改）时，它将再次通过性能测试，并且新的性能指标结果与以前的性能指标结果进行比较。

### 可维护性

容易理解、符合常识、容易适配、容易扩展、容易调试

1. 编程规范
2. 松散耦合
3. 编码惯例

### UX

user experience 用户体验

### 页面可插拔

TODO

### 测试

- Behavioral-Driven Development (BDD)
- Test-Driven Development (TDD) 
- Unit Test

[《浅谈前端单元测试》](https://juejin.im/post/5b2da89cf265da597f1c7cab)

### 代码转译与编译

- “转译”(transpilation) 例如ES6转ES5
- “编译”(compilation)

编译是将源代码从一种语言转换为另一种语言。转译在本质上跟编译是一样的，只是目标语言与源语言是一种语言的不同级别的抽象。



## 二、功能

### 伪变量

指的是在服务端执行虚拟DOM(一般用Node.js variable

 foobar, foo, bar, baz, qux, quux, quuz, corge, grault, garply, waldo, fred, plugh, xyzzy, and thud;

### 盗链

盗链是指在自己的页面上展示一些并不在自己服务器上的内容

### REPL

read-eval-print-loop，读取 - 求值 - 打印 - 循环

浏览器控制台是个REPL运行时，与页面的 JavaScript 运行时并发。在控制台中执行的命令可以像页面级 JavaScript 一样访问全局和各种 API。控制台中可以执行任意数量的代码，与它可能会阻塞的任何页面级代码一样。修改、对象和回调都会保留在 DOM 和运行时中。

### GWT

Google Web Toolkit，是一个前端使用 JavaScript，后端使用 **Java** 的 AJAX framework

GWT透过编译器将Java代码编译成JavaScript，可让开发人员使用Java程序设计语言，快速建置与维护复杂但高性能的JavaScript前端应用程序，借此减轻开发人员负担。

### DSL

DSL（domain specific language），即领域专用语言：专门解决某一特定问题的计算机语言，比如大家耳熟能详的 SQL 和正则表达式。

### 域名分片

在一个域名下分出多个二级域名，而它们都指向同样的一台服务器，比如 blog.xiaomixi.com 、code.xiaomixi.com。



## 三、编程设计模式

### 图灵完备

图灵完备性（Turing Completeness）是针对一套数据操作规则而言的概念。数据操作规则可以是一门编程语言，也可以是计算机里具体实现了的指令集。当这套规则可以实现图灵机模型里的全部功能时，就称它具有图灵完备性。

**图灵机**，可以用来解决任何可计算问题

- 计算机的数学模型，奠定了可计算问题的理论基础
- 划定了可计算问题的边界，把数学问题分为两类，可用图灵机计算的与不能的
- 纸带(存储位置)、读写头(当前位置)、规则表(指令集)、寄存器(计算机状态，记录计算问题的中间值，停机状态则表示计算完成)

不可计算的计算问题

- 停机问题：给定一段程序的描述和该程序的一个有效输入，运行此程序，那么程序最终是会终止，还是会死循环下去？
- 工程无法解决的问题，比如计算复杂度超过指数函数的问题、NP-hard问题

### 同构应用

SSR：服务端渲染，指的是服务端直接吐出具有数据的HTML页面，而不是在客户端拼接的HTML。相对的则是CSR(客户端渲染)，客户端渲染指的是在客户端通过Ajax请求来拼装数据，此时所有页面是在客户端拼接好的。

前端同构应用：一套代码，既可以客户端渲染，又可以服务端渲染。指的是在服务端执行虚拟DOM(一般用Node.js，不过其它语言也具备这项能力，之前前端程序员用JS比较多)，此时前端和服务端的渲染层是同一套代码，因为服务端使用和前端相同的虚拟DOM的原理拼接HTML模板，所以前端同构应用一般也是SSR。

同构渲染：一个前端项目里的组件，部分由服务端渲染后输出，部分由客户端异步渲染。这样可以保障网页渲染速度，也有利于搜索引擎 SEO。

[前端同构应用和 SSR 有什么区别？](https://www.zhihu.com/question/379831174/answer/1085552892)

### 控制反转模式

**控制反转**（英语：Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。

实现控制反转主要有两种方式：依赖注入和依赖查找。两者的区别在于，

- 依赖注入（Dependency Injection，DI）是**被动**的接收对象，在类A的实例创建过程中即创建了依赖的B对象，通过类型或名称来判断将不同的对象注入到不同的属性中。

- 依赖查找（Dependency Lookup）是**主动**索取相应类型的对象，获得依赖对象的时间也可以在代码中自由控制。

IoC，对于spring框架来说，就是由spring来负责控制对象的生命周期和对象间的关系。对于某个具体的对象而言，以前是由它控制其他对象，现在是所有对象都被spring控制，所以这叫控制反转。

IoC的一个重点是，在系统运行中，动态的向某个对象提供它所需要的其他对象。这一点是通过依赖注入来实现的，而spring中具体注入方式是通过反射（reflection）来实现的。

> 控制反转IoC是说创建对象的控制权进行转移，以前创建对象的主动权和创建时机是由自己把控的，而现在这种权力转移到第三方，比如转移交给了IoC容器，它就是一个专门用来创建对象的工厂，你要什么对象，它就给你什么对象，有了 IoC 容器，依赖关系就变了，原先的依赖关系就没了，它们都依赖IoC容器了，通过IoC容器来建立它们之间的关系。

### 达夫设备 Duff’s Device

循环次数太少时，展开循环直接同步执行比循环性能更高，但又不能提前预知循环的次数时，可以使用达夫设备这一技术。

达夫设备的基本思路是以 8 的倍数作为迭代次数从而将循环展开为一系列语句，能够加快大数据集的处理速度。

```js
let iterations = Math.floor(values.length / 8); 
let leftover = values.length % 8;
let i = 0;
// 余数部分执行一个循环
if (leftover > 0) {
  do {
    process(values[i++]);
  } while (--leftover > 0);
}

// 剩余每轮循环执行8次，能够加快大数据集的处理速度
do {
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
  process(values[i++]);
} while (--iterations > 0);
```

### 数据对齐

- 数据对齐是指内存字节的对齐（现代计算机中内存空间都是按照byte划分），数据所在的内存地址必须是该数据长度的整数倍
- 数据对齐并不是操作系统的内存结构的一部分，而是CPU结构的一部分
- 数据对齐是为了读取数据的效率。当CPU访问正确对齐的数据时，它的运行效率最高



## 其它

投入产出比
