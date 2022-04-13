(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{420:function(e,v,_){"use strict";_.r(v);var a=_(43),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"打包构建和性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#打包构建和性能优化"}},[e._v("#")]),e._v(" 打包构建和性能优化")]),e._v(" "),_("h2",{attrs:{id:"webpack"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),_("p",[e._v("【为什么要使用webpack】webpack是一个静态模块打包工具，将静态资源如图片、js、css文件都视作模块，"),_("u",[e._v("解析模块依赖")]),e._v("，然后将模块代码打包成一个或多个 js 格式的bundle文件，用于展示页面。")]),e._v(" "),_("p",[e._v("解析模块依赖、打包静态资源、自动化构建代码、本地开发的代理和热重载、source map")]),e._v(" "),_("ul",[_("li",[e._v("使用loader转换模块代码，比如babel转换ES6代码")]),e._v(" "),_("li",[e._v("压缩、tree-shaking、代码拆分，实现按需加载，便于构建复杂的 SPA")])]),e._v(" "),_("p",[e._v("【loaders和plugins】"),_("code",[e._v("loaders")]),e._v("主要用于加载和转换除JavaScript以外的文件，例如使用image-loader加载图片，还可以用于转译代码，例如使用ts-loader将ts编译为js，使用babel-loader将es6代码编译为es5。"),_("code",[e._v("plugins")]),e._v("用于自定义拓展webpack的构建过程，也就是让插件监听webpack构建过程的事件点，在触发事件节点的时候执行插件中添加的逻辑处理。webpack 的核心功能，也是抽离成很多个内部插件来实现的。")]),e._v(" "),_("p",[e._v("【compiler和compilation】"),_("code",[e._v("compiler")]),e._v(" 对象代表了完整的 webpack 环境配置，可以使用它来访问 webpack 的主环境。"),_("code",[e._v("compilation")]),e._v("对象代表了一次构建结果，也就是一次构建过程中的所有数据，包含了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。运行过程中只有一个 "),_("code",[e._v("compiler")]),e._v("对象，但是当每次文件变更触发重新编译时，都会创建一个新的 "),_("code",[e._v("compilation")]),e._v(" 对象。")]),e._v(" "),_("p",[e._v("【如何自定义一个插件】创建一个插件类，添加一个实例方法apply，它会接受webpack的compiler对象作为参数")]),e._v(" "),_("h3",{attrs:{id:"构建流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[e._v("#")]),e._v(" 构建流程")]),e._v(" "),_("p",[e._v("webpack的构建流程包括初始化"),_("code",[e._v("compile")]),e._v("对象、"),_("code",[e._v("make")]),e._v("编译模块、"),_("code",[e._v("build")]),e._v("构建模块依赖关系、"),_("code",[e._v("seal")]),e._v("组装chunk输出文件、"),_("code",[e._v("emit")]),e._v("输出到output，执行完这些阶段就完成了构建过程。")]),e._v(" "),_("blockquote",[_("p",[e._v("首先是"),_("u",[e._v("初始化阶段")]),e._v("，根据webpack配置文件的参数和shell命令行的参数，初始化然后创建 "),_("code",[e._v("Compiler")]),e._v(" 实例对象，并且去加载插件，然后执行 "),_("code",[e._v("compiler")]),e._v(" 对象的 "),_("code",[e._v("run")]),e._v(" 方法开始编译。然后是"),_("u",[e._v("编译构建阶段")]),e._v("，开始构建时，会从entry入口文件开始解析代码，用babel的解析器"),_("strong",[e._v("将代码解析成AST")]),e._v("，然后遍历AST节点收集模块依赖，并"),_("strong",[e._v("递归解析依赖模块")]),e._v("，调用对应的loader来处理。递归完成以后就会得到整个应用的模块依赖关系图，以及被loader转换过的模块内容。最后的"),_("u",[e._v("输出阶段")]),e._v("，会根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件，写入文件系统。")])]),e._v(" "),_("h3",{attrs:{id:"loader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" loader")]),e._v(" "),_("p",[_("code",[e._v("vue-loader")]),e._v("：加载并编译vue组件；预编译生成render function；为每个组件模拟出 scoped CSS；支持热重载，实例在不刷新页面的情况下被替换，提升开发体验")]),e._v(" "),_("p",[_("code",[e._v("raw-loader")]),e._v("：加载文件原始内容（utf-8）（将文件导入为字符串）")]),e._v(" "),_("p",[_("code",[e._v("val-loader")]),e._v("：将代码作为模块执行，并将 exports 转为 JS 代码")]),e._v(" "),_("p",[_("code",[e._v("file-loader")]),e._v("：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL 去引⽤输出的⽂件（然后代码中就能引用使用相对路径的客户端本地资源，而不用使用http请求资源。例如图片的src和css的url中，相对路径可以在webpack配置alias别名，src或者js中也可以使用require引入资源作为一个模块被解析）")]),e._v(" "),_("p",[_("code",[e._v("url-loader")]),e._v("：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 URL 的⽅式把⽂件内容注⼊到代码中 (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。")]),e._v(" "),_("p",[_("code",[e._v("source-map-loader")]),e._v("：加载额外的 Source Map ⽂件，以⽅便断点调试")]),e._v(" "),_("p",[_("code",[e._v("image-loader")]),e._v("：加载并且压缩图⽚⽂件")]),e._v(" "),_("p",[_("code",[e._v("babel-loader")]),e._v("：把 ES6 转换成 ES5")]),e._v(" "),_("p",[_("code",[e._v("css-loader")]),e._v("：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性")]),e._v(" "),_("p",[_("code",[e._v("style-loader")]),e._v("：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。")]),e._v(" "),_("p",[_("code",[e._v("eslint-loader")]),e._v("：通过 ESLint 检查 JavaScript 代码")]),e._v(" "),_("p",[_("code",[e._v("ts-loader")]),e._v("：将ts转译为js")]),e._v(" "),_("h3",{attrs:{id:"plugin"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),_("ul",[_("li",[_("p",[_("strong",[_("code",[e._v("html-webpack-plugin")])]),e._v(" 将css文件和js文件自动注入到HTML文件中（打包后的bundle）")]),e._v(" "),_("ul",[_("li",[e._v("因为 index 文件被用作模板，所以你可以使用 lodash template 语法插入内容")])])]),e._v(" "),_("li",[_("p",[_("strong",[_("code",[e._v("terser-webpack-plugin")])]),e._v("  压缩代码，还可以去掉console和debug信息，webpack5开始内置支持")])]),e._v(" "),_("li",[_("p",[_("strong",[_("code",[e._v("mini-css-extract-plugin")])]),e._v("  从js文件中提取css代码到单独的文件中，对css代码进行代码压缩等（因为有时我们会把css给import进js文件）")])]),e._v(" "),_("li",[_("p",[_("strong",[_("code",[e._v("@vue/preload-webpack-plugin")])]),e._v(" 给资源的link添加Preload和Prefetch")]),e._v(" "),_("ul",[_("li",[_("code",[e._v('<link rel="preload">')]),e._v("是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。会自动给初始化渲染需要的文件加上preload（预加载）")]),e._v(" "),_("li",[_("code",[e._v('<link rel="prefetch">')]),e._v("是一种 resource hint，用来告诉浏览器在"),_("u",[e._v("页面加载完成后")]),e._v("，利用空闲时间提前获取用户未来可能会访问的内容。通过路由懒加载splitchunks方式生成的css和js都会被自动加上prefetch（预获取，类似于script标签的async，会比较消耗带宽）懒加载的组件代码等到最后才被加载，在defer属性的script标签之后。")])])])]),e._v(" "),_("h3",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),_("p",[e._v("【HMR热替换】webpack的devServer其实是开启了一个使用express框架的server，它会与浏览器建立websocket连接，文件变化时webpack重新编译完成以后，通过socket消息通知浏览器更新。webpack通过中间件webpack-dev-middleware，将生成文件发送给server，通过对比生成文件的hash值更新对应模块，而不用刷新整个页面。")]),e._v(" "),_("p",[e._v("【manifest】webpack 的 runtime 和 manifest，管理所有模块的交互。manifest数据会保留所有模块的详细要点，当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。也就是说"),_("u",[e._v("打包以后将bundle发给浏览器，浏览器根据manifest数据里保留的模块的信息，来解析和加载模块。")])]),e._v(" "),_("p",[e._v("【hash码】三种计算方式，"),_("code",[e._v("hash")]),e._v("（每次构建都会生成新的值，不管文件是否发生变化）、"),_("code",[e._v("chunkhash")]),e._v("（chunk依赖发生变化的时候才会更新）、"),_("code",[e._v("contenthash")]),e._v("（文件内容发生变化时更新），一般我们使用chunkhash")]),e._v(" "),_("h3",{attrs:{id:"其它"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),_("ul",[_("li",[e._v("开发环境和生产环境共用的配置，借助"),_("code",[e._v("webpack-merge")]),e._v("插件，可以merge到开发环境或生产环境，从而减少重复配置。")]),e._v(" "),_("li",[e._v("引入了Node环境变量"),_("code",[e._v("process.env.NODE_ENV")]),e._v("，可以根据传入的环境参数，动态更改配置。")]),e._v(" "),_("li",[e._v("devServer默认启用"),_("u",[e._v("模块热替换")]),e._v(" (hot module replacement 或 HMR)，它允许在运行时更新所有类型的模块，而无需完全刷新。")])]),e._v(" "),_("p",[e._v("经过"),_("code",[e._v("webpack")]),e._v("打包出来的是一个匿名闭包函数"),_("code",[e._v("IIFE")]),e._v("，第一个参数"),_("code",[e._v("modules")]),e._v("是一个数组，其中每一项是一个模块初始化函数。参数"),_("code",[e._v("__webpack_require__")]),e._v("用来加载模块，返回"),_("code",[e._v("module.exports")]),e._v("。通过"),_("code",[e._v("WEBPACK_REQUIRE_METHOD(0)")]),e._v("启动程序")]),e._v(" "),_("h3",{attrs:{id:"优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[e._v("#")]),e._v(" 优化")]),e._v(" "),_("p",[e._v("build --report 生成打包结果分析报告，Chrome中可以使用Lighthouse生成网站分析报告，以及性能和内存的分析工具")]),e._v(" "),_("p",[e._v("通常需要在vue.config.js中额外配置的有，alias名称、devServer代理、svg配置loader、externals配置cdn、config.optimization.splitChunks")]),e._v(" "),_("p",[e._v("【首页加载速度优化】最有效的是压缩文件，webpack中给生产环境默认启用了tree-shaking、terser代码压缩、compression压缩文件，经过webpack的压缩以后，nginx中还可以设置压缩，这个效果最明显。然后分割代码、使用路由懒加载；拆分打包构建后的bundle文件，将大的chunk拆分 (config.optimization.splitChunks)；图片懒加载 (vue-lazyload)；外部资源通过async和defer设置成异步加载而不影响DOM解析，也可以给资源使用preload和prefetch属性；将静态资源部署到CDN上以支持高并发。首页白屏时间久还可以使用骨架图，尤其是移动端，SSR首页渲染也可以。优化浏览器缓存配置。剩余的是业务代码上的优化，例如图片懒加载、减少重排重绘。")]),e._v(" "),_("p",[e._v("【打包构建优化】loader层面上，cache-loader缓存编译结果，thread-loader启用"),_("strong",[e._v("多进程")]),e._v("进行编译。插件层面上，terser压缩代码、mini-css那个插件压缩css、compression压缩文件。使用cdn的方式，让Webpack不打包这些资源，然后在index.html中配置async和defer属性，让资源异步加载而不会阻塞页面解析；")]),e._v(" "),_("p",[e._v('【我的分包策略】拆分代码依赖的第三方的 library 或 "vendor" 代码，比如node_modules单独打包成一个chunk，还可以将其中例如elementUI、echarts这类比较大的依赖模块，如果没有cdn的方式，也单独打包成chunk，优先级设置的比node_modules高一些。项目的通用组件components也拆分成一个chunk。然后就是路由懒加载方式（es6的import或者webpack的require方法），将异步组件打包成chunk，可以设置webpackChunkName。最后就是webpack自己默认的分包策略，符合一定条件也会自行拆分chunk。')]),e._v(" "),_("h2",{attrs:{id:"代码性能提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码性能提升"}},[e._v("#")]),e._v(" 代码性能提升")]),e._v(" "),_("p",[e._v("如果使用了http2，因为有多路复用功能传输二进制帧，又有头部压缩，可以用同一个连接传输多个资源，进而使得http1.1中针对减少http请求数量的优化都是多余。比如使用雪碧图技术，将多张小图片合成一张大图片，或者是合并 css 和 js 来减少请求数。")]),e._v(" "),_("p",[e._v("【业务代码优化】减少重排重绘、图片懒加载、图片切片比如背景图、雪碧图等等，css不要使用@import，使用link方式然后放在head中，js放到body内的底部；优化DOM交互。")]),e._v(" "),_("h3",{attrs:{id:"优化javascript计算逻辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化javascript计算逻辑"}},[e._v("#")]),e._v(" 优化JavaScript计算逻辑")]),e._v(" "),_("ol",[_("li",[e._v("尽量避免全局查找，变量需要沿着作用域链查找，而全局变量位置较为上游，所以如果多次访问全局变量，可以在局部作用域中保存全局变量的副本或者引用。")]),e._v(" "),_("li",[e._v("保存局部变量的方式减少对象的属性查找")]),e._v(" "),_("li",[e._v("尽量不使用with语句，因为with语句会创建自己的作用域，从而加深作用域链的长度。")]),e._v(" "),_("li",[e._v("使用位操作速度更快")])]),e._v(" "),_("h3",{attrs:{id:"优化dom交互"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化dom交互"}},[e._v("#")]),e._v(" 优化DOM交互")]),e._v(" "),_("ol",[_("li",[_("mark",[e._v("减少重排重绘")]),e._v(" "),_("ul",[_("li",[e._v("减少对DOM的操作\n"),_("ul",[_("li",[e._v('需要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示')]),e._v(" "),_("li",[e._v("需要创建多个DOM节点时，使用DocumentFragment创建完成以后再一次性的添加进DOM中")])])]),e._v(" "),_("li",[e._v("尽量避免用table布局 (table元素一旦触发回流就会导致table里所有的其它元素回流)")]),e._v(" "),_("li",[e._v("优化css，使用可以避免重排重绘的属性："),_("code",[e._v("transform: translate()")]),e._v("、"),_("code",[e._v("transform: scale()")]),e._v("、"),_("code",[e._v("transform: rotate()")]),e._v("、"),_("code",[e._v("opacity")])]),e._v(" "),_("li",[e._v("让复杂动画的元素脱离文档流，限制重绘的影响范围。例如设置position属性为absolute使它脱离文档流，否则会引起父元素及后续元素频繁重绘。")])])]),e._v(" "),_("li",[e._v("使用事件委托")]),e._v(" "),_("li",[e._v("注意 HTMLCollection。每次访问HTMLCollection时都会重新查询，所以在循环中使用 HTMLCollection 时，应该首先取得对要使用的元素的引用，从而避免在循环体内多次调用 "),_("code",[e._v("HTMLCollection")])])]),e._v(" "),_("h3",{attrs:{id:"重排重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重排重绘"}},[e._v("#")]),e._v(" 重排重绘")]),e._v(" "),_("p",[e._v("会影响元素布局的就会引起重排重绘，例如修改窗口大小、字体大小、元素的宽度高度等等，不会影响布局的只是改变样式的则只会触发重绘，例如修改颜色、背景、visibility等等。重排的代价比重绘高很多，而且重排则必重绘。")]),e._v(" "),_("p",[e._v("现代浏览器针对重排重绘做了优化，有点类似于Vue的DOM异步更新机制，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。但是当访问高度宽度这类属性的时候，浏览器会立刻清空这个队列，执行重排重绘。")]),e._v(" "),_("p",[e._v("使用 3D transform 会启用GPU加速，例如"),_("code",[e._v("translate3D")]),e._v(", "),_("code",[e._v("scaleZ")]),e._v(" 之类；使用 "),_("code",[e._v("will-change")]),e._v(" 告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。（通过设置 CSS 的 will-change 可以转换为一个图层，调用 GPU 加速）")]),e._v(" "),_("h3",{attrs:{id:"压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[e._v("#")]),e._v(" 压缩")]),e._v(" "),_("ul",[_("li",[e._v("代码压缩（删除空格、去掉console和debug的代码、删除注释、缩短变量名和函数名）")]),e._v(" "),_("li",[e._v("JavaScript 编译（删除未使用的代码、将某些代码转换为更简洁的语法、将某些变量直接用值替换掉）")]),e._v(" "),_("li",[e._v("HTTP 压缩（Accept-Encoding、Content-Encoding），因为 JavaScript 的代码是纯文件，所以压缩率非常高，尤其是GZip，对文本内容的资源压缩效果也是最好的，所以通常使用gzip来压缩html、css、js、JSON等等")])]),e._v(" "),_("h2",{attrs:{id:"代码规范化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码规范化"}},[e._v("#")]),e._v(" 代码规范化")]),e._v(" "),_("p",[e._v("EditorConfig + Eslint + Prettier + Stylelint + Husky + lint-staged + commitlint")]),e._v(" "),_("p",[e._v("EditorConfig统一不同操作系统不同IDE的代码格式，例如缩进、换行符等；eslint校验代码，prettier格式化代码，prettier是约定大于配置，与eslint结合使用可以使得不符合prettier规则的代码，以eslint的方式进行提示错误。stylelint基于postcss，用于校验代码，可以专门为less或scss配置。husky可以方便我们使用git的hooks，也就是不同生命周期的处理方法，lint-staged可以校验git暂存区的代码，二者通常结合使用，在代码提交以前，就是在pre-commit这个钩子上执行lint-staged的配置，进行代码校验。commitlint则用于限制git提交信息的书写规范。")]),e._v(" "),_("p",[e._v("代码风格：")]),e._v(" "),_("h2",{attrs:{id:"性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[e._v("#")]),e._v(" 性能优化")]),e._v(" "),_("p",[e._v("工程化层面和代码层面")]),e._v(" "),_("h3",{attrs:{id:"工程化方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工程化方面"}},[e._v("#")]),e._v(" 工程化方面")]),e._v(" "),_("p",[_("strong",[e._v("自带的")]),e._v("：tree-shaking减少没有使用到的代码、terser代码压缩、gzip文件压缩、preload打包后的bundle被预加载、prefetch异步加载的bundle在浏览器空闲的时候加载")]),e._v(" "),_("ul",[_("li",[e._v("打包构建速度方面：cache-loader缓存loader转换结果、thread-loader开启多进程充分利用多核CPU")]),e._v(" "),_("li",[e._v("代码压缩（删除空格和换行、删除注释、缩短变量名、函数名和其他标识符）")])]),e._v(" "),_("p",[_("strong",[e._v("Nginx")])]),e._v(" "),_("ul",[_("li",[e._v("配置Gzip开启HTTP压缩")]),e._v(" "),_("li",[e._v("配置一个静态资源服务器，指定目录下的静态资源就可以被通过http的方式访问，并且nginx会自行做缓存")])]),e._v(" "),_("p",[_("strong",[e._v("浏览器")])]),e._v(" "),_("ul",[_("li",[e._v("浏览器缓存，cache-control设置为no-cache使用协商缓存，还有个public值让代理服务器（nginx中设置proxy_cache）也可以缓存。")])]),e._v(" "),_("p",[_("strong",[e._v("打包构建方面")])]),e._v(" "),_("ul",[_("li",[e._v("splitchunks拆分代码，使用路由懒加载，调整默认打包策略的阈值")]),e._v(" "),_("li",[e._v("使用CDN的方式剥离部分第三方依赖文件")]),e._v(" "),_("li",[e._v("将资源设置为异步加载，避免阻塞页面的解析，例如给script脚本添加async或defer属性")])]),e._v(" "),_("h3",{attrs:{id:"代码方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码方面"}},[e._v("#")]),e._v(" 代码方面")]),e._v(" "),_("p",[_("strong",[e._v("综合")])]),e._v(" "),_("ul",[_("li",[e._v("时间分片（分批渲染，利用requestAnimationFrame和DocumentFragments，需要兼容IE10以上）")]),e._v(" "),_("li",[e._v("虚拟滚动（懒加载，按需渲染，实现更复杂但优点是兼容性更好）")])]),e._v(" "),_("p",[_("strong",[e._v("Vue")])]),e._v(" "),_("ul",[_("li",[e._v("图片懒加载，图片到了页面的可视区域时才会被加载")]),e._v(" "),_("li",[e._v("数据层级不要太深，使用"),_("code",[e._v("Object.freeze")]),e._v("冻结不需要响应式的对象数据")]),e._v(" "),_("li",[e._v("组件方面，使用"),_("code",[e._v("keep-alive")]),e._v("缓存组件，采用性能更好的函数式组件，以及借助webpack实现路由懒加载等等")]),e._v(" "),_("li",[e._v("指令相关的，例如给不需要动态变化的元素使用v-once")]),e._v(" "),_("li",[e._v("合理使用key会加快渲染效率，不要用数组索引作为key值，因为会导致Diff算法的bug")])]),e._v(" "),_("p",[_("strong",[e._v("DOM交互")]),e._v("（非首页）")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("替换HTML节点的时候，要注意移除原节点上的监听事件")])]),e._v(" "),_("li",[_("p",[e._v("事件委托")])]),e._v(" "),_("li",[_("p",[e._v("减少重排重绘")]),e._v(" "),_("ul",[_("li",[e._v('需要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示')]),e._v(" "),_("li",[e._v("多次操作DOM节点子元素时，可以使用"),_("code",[e._v("DocumentFragment")]),e._v("来构建 DOM 结构，创建完成以后一次性的加入DOM中，可以减少浏览器重排。")]),e._v(" "),_("li",[e._v("尽量避免用table布局(table元素一旦触发回流就会导致table里所有的其它元素回流)")])])])]),e._v(" "),_("p",[_("strong",[e._v("JavaScript")])]),e._v(" "),_("ul",[_("li",[e._v("requestAnimationFrame（例如渲染长列表时的时间分片，分段渲染数据，每次任务放在这个API中）")]),e._v(" "),_("li",[e._v("尾调用优化")]),e._v(" "),_("li",[e._v("循环优化")]),e._v(" "),_("li",[e._v("不使用with语句")]),e._v(" "),_("li",[e._v("通过临时变量来缓存查询结果，避免重复查询（例如HTMLCollection、嵌套过深的对象属性）")]),e._v(" "),_("li",[e._v("一些方法上的选择，例如不需要返回一个新数组的时候，就优先选择性能更好的forEach而不是map")])]),e._v(" "),_("p",[_("strong",[e._v("CSS")])]),e._v(" "),_("ul",[_("li",[e._v("css中使用"),_("code",[e._v("transform")]),e._v("属性，不会引发重排重绘")]),e._v(" "),_("li",[_("code",[e._v("will-change")]),e._v("、transform3D变化例如"),_("code",[e._v("translate3D")]),e._v(", "),_("code",[e._v("scaleZ")]),e._v(" 之类，它们都会启用GPU加速（浏览器是一个多进程架构，GPU进程、渲染进程，都是独立的进程）")])]),e._v(" "),_("h1",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.cn/post/7002839760792190989",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack 十连问你能接住几题"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=t.exports}}]);