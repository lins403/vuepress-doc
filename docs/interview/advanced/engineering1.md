# 前端工程化

## 模块化

模块化可以解耦代码，提高复用性，同时可以封装，隔离作用域以避免变量名冲突，构造单例对象等

【为什么要模块化】把复杂问题分解为多个子问题，解耦代码，提高代码的拓展性、复用性、测试性以及维护性，并且有利于团队协作开发，面向接口开发而不是面向实现开发。

【commonjs】CommonJS是<u>同步加载，且在运行时加载，输出的是一个值的拷贝</u>，所以修改被引用的模块时不会影响到引用的模块代码。commonjs更适合用在**服务端**，因为在服务端环境中使用，不需要考虑网络延迟的问题(都是本地资源，能够一次性把所有模块都加载到内存)，所以可以使用同步加载的require()。模块的加载是**单例模式**，无论通过require方法引用多少次模块，模块都只会加载一次。而且模块在第一次加载以后，就会**被缓存**，后续的加载都会使用缓存的模块。语法使用require()来引用代码，使用module.exports、exports来导出代码。webpack封装了自己的导入和导出方法，会将文件资源打包成一个commonjs模块，模块代码是一个立即执行函数，可以直接在浏览器中运行。

【commonjs的原理】有一个Module构造函数，所有的模块都是它的实例。加载一个模块时，如果命中缓存则直接使用缓存的模块实例，如果缓存中没有，就会创建一个Module实例。

【module.exports 和 exports】module.exports是一个全局变量，而exports是一个module实例的变量，变量值指向module.exports，所以exports是module.exports的一个快捷方式，但二者不能在同一个模块中混用。

【require查找机制】如果require的参数标识符不是一个确定的路径（相对路径、绝对路径、完整的URL），那么就要进行路径分析。首先查找当前目录下的node_modules目录中是否有对应文件；如果没有则会查找父目录下的node_modules目录；不断向上递归查找，直到根目录的node_modules目录。如果按照.js、.node、.json的顺序补全文件的后缀名后，依然找不到对应模块时，就会将标识符当作一个目录，找到目录下的package.json文件，然后查找main字段指向的文件，如果没有，就依次会查找目录下的index.js、index.node、index.json文件。

【AMD】CommonJS 在浏览器内并不适用，因为require()的返回即模块加载是同步的，所以有多个依赖的话需要一个个下载，从而阻塞了js脚本的执行。所以社区在commonjs的基础上定义了AMD规范，<u>使用了异步回调的语法来并行下载多个依赖项</u>，从而更适用于浏览器。语法用`define`来暴露模块，使用`require`来引用模块。

【CMD】Common Module Definition，淘宝团队出品，是SeaJS框架的模块化标准。CMD是对AMD的改进，语法上也是使用define和require，不同的地方在于依赖模块的执行，AMD是前置依赖，需要在define开始时就定义，而CMD则是就近依赖，然后可以通过一个变量来保存，所以CMD的语法更简洁清晰。（类似于React Hooks和Vue3的Composition API的区别）

【UMD】Universal Module Definition，UMD是为了统一commonjs和AMD，它可以创建模块代码同时适配基于这两个模块规范的系统，也就是兼容浏览器端和服务端，所以很多第三方依赖的CDN文件都会打包成UMD。在大部分情况下，它是使用AMD作为基础，然后添加了特殊的外壳来实现对Commonjs的兼容性。也就是它<u>会先判断exports变量和module实例是否存在，存在的话就使用commonjs的语法进行导出，不存在的话就判断AMD的define方法是否存在，如果AMD也不能使用，就会暴露给全局对象</u>。

【ES Module】commonjs和AMD都是社区提出的临时方案，而ES Modules是ECMA的官方标准。ES6模块最大的特点是<u>静态分析和异步加载</u>，在编译时就会执行import加载模块，然后确定模块的依赖关系，并且是异步加载，而Commonjs和AMD都是在运行时加载。另外ES6模块通过export导出的是一个**引用值**，对依赖模块的引用，而且模块都会自动开启**严格模式**。

【ES Modules的静态分析】import语句会被提升，并且在静态解析阶段就会被执行，然后<u>从顶层模块开始，逐渐递归加载直到构建完成整个依赖图</u>。基于这种特性，打包工具像rollup和webpack就就可以使用tree-shaking进行优化，删除没有使用到的模块代码，减小包的大小。而且ES6模块的加载、解析和执行都是异步的，不会造成阻塞，而Commonjs都是同步的。

【ES Modules的语法】import、export、export default、import()。`import()`方法用于动态加载，在运行时才会去加载对应的模块，所以可以用于实现按需加载、条件加载、动态表达式的路径等等，并且依然是异步加载，而且返回一个<u>promise</u>对象。import()方法可以加载一个Commonjs模块，Commonjs模块中也可以使用import()方法来引入一个ES模块(.mjs文件)。

【如何使用ES Module】在浏览器中使用时，可以在script标签上添加`type="module"`字段，和defer属性一样，异步下载然后等到DOM解析完成才会被执行，但是跟defer不一样，它可以在script标签内嵌入代码。如果引用本地文件，则依然需要开启一个server，否则就会受到跨域的限制。如果用在node服务端，webpack的工程化项目可以直接使用，也可以在package.json文件中添加`"type": "module"`字段让所有文件都使用 ECMAScript 模块，或者给模块文件使用`.mjs`后缀名。Rollup和Vite都是基于ES Modules进行打包。

babel

【ES Module和CommonJS】ES Modules的依赖模块会在编译时就会被加载，CommonJS则是运行时加载。ES Modules 的加载、解析和执行都是异步的，而 require() 的过程是同步的。CommonJS 模块输出的是值的拷贝，ES Modules 输出的是值的引用。CommonJS更适用于服务端，而ES Module则对浏览器和客户端都适用，并且基于ES Module的特性，可以实现更多的高级功能，例如tree-shaking、代码懒加载等等。浏览器的属性和方法可以通过模块来输出，而不用添加到一个命名空间的对象上，例如Math对象、navigator对象等等。

