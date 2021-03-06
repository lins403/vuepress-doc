# Vue基础

【Vue的特点】渐进式、单页面路由、组件化、数据驱动DOM、虚拟DOM

【Vue与React的异同点】都属于单页面应用的框架，都是组件化开发和单向数据流，都使用了Virtual DOM，并支持SSR。不同的地方在于，React的UI代码是通过 JSX 来写的而Vue是template，React数据是单向绑定而Vue可以双向绑定，React需要手动设置数据变化，而Vue在初始化时就实现了数据的响应式处理。Vue内置了很多API和指令，实现了丰富的功能，而React中需要开发人员自己实现。

【MVVM】Model-View-ViewModel，将系统分离为数据层Model和视图层View，ViewModel层实现了数据的双向绑定，通过数据绑定的方式将数据更新到DOM，而通过事件监听，基于DOM上的变化更新数据。通过v-text、v-html、{{}}、v-bind等方式将数据绑定到视图，通过v-model实现双向绑定。总之，通过MVVM模式分离视图代码和业务逻辑，数据驱动DOM。（视图=模板+数据=组件+数据模型）

【SPA】单页面应用，意味着最终只有一个HTML文件，其余都是静态资源，通过动态的方式注入到html中。SPA的核心是前端路由，路由变化时，在客户端实现页面内容的切换，从而不用刷新页面。单页面应用程序除了首页外的页面加载速度更快，页面交互性更好。但是单页面应用不利于SEO，首屏加载时间长。

【SSR】网站的初始页面内容是在服务端渲染完成的，浏览器可以直接下载并使用已经渲染好数据的HTML文件。优势是利于SEO，首页加载快，也适用于静态网站，劣势是增加代码复杂度，需要占用更多的服务器资源，构建和部署也更加复杂。服务器端渲染期间生命周期钩子只有beforeCreate、created、errorCaptured会被调用

【同构应用】服务端运行代码（渲染虚拟DOM）生成HTML发送给浏览器，浏览器收到后进行页面展示，然后加载JS代码，执行JS代码并接管页面的操作。（同构应用最好在服务端上添加CSS，避免客户端执行JS再渲染所造成的页面闪动）

【兼容性】Vue是基于 Object.defineProperty 来实现数据响应的，而 Object.defineProperty 是 ES5 中一个无法 shim 的特性，所以不支持IE8以下版本的浏览器。

## 应用

【为什么data是个函数并且返回一个对象呢？】因为组件可能被多次用于创建实例，如果data属性是一个对象，则这个对象会被所有实例所共享引用，组件实例修改数据时就会造成数据污染。将data设置为一个函数，每次会调用就会生成一个新对象，就可以避免造成的数据污染。

【为什么每个组件必须只有一个根元素？】因为一个组件对应一个实例，实例的挂载元素也就是 el 属性的值，就是 `<template>` 中的内容。

【使用过哪些Vue的修饰符呢？】组件通用的修饰符.stop、.prevent、.capture、.self、.once、.native等等事件相关的，表单组件v-model使用的.lazy、.trim、.number等等

【`.native`】只有组件节点才可以添加自定义事件，并且添加原生 DOM 事件需要使用 `native` 修饰符。而普通元素使用 `.native` 修饰符是没有作用的，也只能添加原生 DOM 事件。

【使用过哪些Vue的内部指令呢？】v-bind、v-model、v-on、`v-show`（v-show只是简单的 display 属性的切换，无论条件是否为真，都会被编译，所以 v-show 不能使用在`<template>`上）、v-if、v-else、v-else-if、v-for (Vue2中v-for优先级高于v-if，Vue3中改成v-if高于v-for)、v-slot、v-once、`v-pre`（跳过节点元素和子元素的编译过程）、v-cloak（用于解决初始化慢导致页面闪动，在编译前先隐藏未编译的Mustache标签，编译结束后将v-cloak移除）、v-html、v-text

【为什么不建议v-for和v-if同时存在】因为v-for的优先级更高，会渲染无用的节点，增加无用的dom操作，建议在computed属性中使用数组的filter方法进行过滤。

【如何设置动态class，动态style？】v-bind动态绑定，可以使用数组语法，或者对象语法。

【如何实现自定义指令？】可以添加全局指令或局部指令，在节点的bind、inserted、update、componentUpdated、unbind这几个生命周期钩子中可以获取到指令绑定的元素节点，和节点编译生成的vnode，在钩子中针对元素节点或vnode添加处理逻辑，例如操作DOM或修改实例数据。例如在元素节点上添加指令，在bind钩子中添加DOM事件监听，在unbind时移除事件监听，在inserted钩子添加输入框的focus等等。还可以结合vuex实现权限过滤，如果当前角色权限不符合时，就将节点移除。

【关于条件渲染和列表渲染，以及为什么要使用key？】vue在页面更新需要重新渲染DOM元素的时候，出于效率考虑，会尽可能地复用已存在的元素。如果不想要让vue复用元素，可以使用key属性。在patch更新的时候，通过Diff算法进行比较，如果key不同则会被认为是新节点，就直接替换掉旧节点。key相同时会复用旧节点，如果没有key，则会使用双指针遍历尽可能找到对应相同的节点，所以使用key可以提升Diff算法的效率。v-for如果没有使用key，则会采用“就地复用”策略。

【组件之间的传值方式有哪些？】

- 父子通信最常用的方式props+$emit，父组件传值给子组件，子组件使用`props`进行接收。子组件使用`$emit`一个事件给父组件传值，父组件通过v-on监听事件。
- 语法糖`.sync` 和 `v-model` ，`.sync` 相当于在父作用域上添加了一个<u>update事件</u>的监听，会接收子组件emit的值然后更新绑定的变量。`v-model`则相当于v-bind绑定表单数据，同时基于表单事件更新数据。一个组件上只能使用一个`v-model`但是可以使用多个`.sync` 。
- 适合用于多级组件嵌套的`$attrs`和`$listeners`，经常用在组件的二次封装，实现批量传递数据。`$attrs`包含父作用域中class和style除外，以及不作为prop的属性。`$listeners`包含了父作用域中的 v-on 事件监听器（作用在这个组件上的所有事件监听器），除了通过.native方式绑定的原生事件。
- 适合用于多级组件的还有`provide`和`inject`依赖注入，就像react的context特性（但是provide的引用类型数据才能响应式更新到inject中）
- 通过 `$refs`、 `$parent`和`$children` 这些API，获取对应的组件实例，从而可以访问实例数据。
- 跨组件通信可以使用eventBus，用借鸡生蛋的方式，直接实例化Vue来创建一个事件中心，利用vue的on和emit的API，来实现事件的发布订阅，通过事件来传递数据。（`bus.$on` 应该在 created 钩子内使用，如果是在mounted内使用，则可能接收不到其它组件在created时emit发出的事件。然后在 beforeDestroy 钩子中解除事件监听 `bus.$off`）
- 还可以使用`Vuex`来实现状态的全局管理，使用`Vue.observable()`来添加一个响应式对象然后在组件之间使用，使用浏览器的存储例如indexDB或者webStorage来存储数据等等方式

【slot】组件之间的数据传递方式除了组件通信外，还有使用slot内容分发。将父组件作用域的内容通过slot或具名插槽分发给子组件，将子组件的数据绑定在子组件的slot上，父组件就能通过作用域插槽的方式使用子组件的数据。如果父组件有分发内容给子组件，那么子组件的 `$slots` 就会有值，然后使用`<slot>`来承接内容。

【单向数据流】父组件通过props给子组件传递数据，但是子组件不能直接修改父组件的状态。如果父组件通过props传递的是一个引用值，那么子组件修改它的时候也会更新父组件的状态，但是这种做法是不安全的，在只有父组件重新渲染的时候，子组件中修改的值就会被父组件原来的值覆盖掉。所以如果props值如果是个原始值，就使用一个变量来保存，是个引用值，子组件就应该先对其进行深拷贝，然后再修改。

【keep-alive】用于保留组件的状态。keep-alive只处理第一个子元素，所以一般和它搭配使用的有 `component` 动态组件或者是 `router-view`。只会执行一次完整的生命周期，然后会缓存组件的实例vnode，如果下一次命中缓存的时候，就直接使用这份vnode，在patch的时候通过vnode的el属性直接使用缓存的DOM，通过这种方式来快速创建组件。缓存组件被激活时触发 `activated` 钩子，失活的时候触发 `deactivated` 钩子。include添加一个白名单，exclude添加一个黑名单，max表示最多缓存多少个组件实例

【函数式组件】没有实例、没有自己的状态和生命周期，所以初始化速度很快，性能好。除了性能更好以外，函数式组件还可以返回多个根组件。

【Vue.use】使用Vue.use来安装插件，会调用插件的install方法，并将Vue传入，这样在插件中就能访问到Vue。



## 生态

【路由模式】`hash`模式，更改URL中#符号后面的内容时，触发hashchange事件，实现路由切换。优点是跳转只需要客户端就能实现，浏览器的兼容性也更好。缺点是页面发生跳转也只是location.hash的变化，URL实际没有变化就没有发起新的http请求，所以不利于SEO。`history`模式下，利用浏览器BOM的history对象的pushState和replaceState方式来完成跳转，URL会发生变化，产生新的http请求，所以需要服务端支持，让服务端在接收到所有的请求后都指向同一个html文件，以实现单页面应用在路由跳转时不刷新页面。

【<router-view\>和\<router-link>】`<router-view>`是一个函数式组件，会根据当前路由渲染对应的页面组件。`<router-link>` 会被渲染为 `<a>`

【Vue-loader热重载】指的是修改.vue文件可以动态更新组件内容而不用刷新整个页面。当编辑一个 template 的时候，组件会重新渲染，当编辑一个 script 的时候，组件会就地销毁并重新创建 (reload)，当编辑一个 style 的时候，通过 vue-style-loader自行热重载，并不影响状态。跟webpack的HMR的关系是，更新.vue文件时，借助devServer与middleware中间件来让浏览器更新文件，而更新策略是vue-loader来决定。

【Vuex】用于全局状态管理，store是一个**全局单例对象**，但是可以将store分割到不同模块中，每个模块可以维护自己的state、getters、mutations、actions。state是可以被所有组件共享的数据，只能通过mutation来同步修改state，actions可以包含异步操作，最终也是通过提交mutations的方式来修改state。从开发层面上来看，actions适合用于封装业务逻辑，自由度更高。

Vue.use安装Vuex的时候调用install方法，通过Vue.mixin混入beforeCreate钩子，通过Vue的init方法，将store数据绑定到this对象的`$store`属性上，子组件的`$store`属性来自于`$store`属性，以此嵌套，从而将这个store实例挂载到所有实例上。通过Vue的data属性绑定store，computed属性绑定getters，从而将store和getters的state变为响应式，而且getters还可以像computed那样缓存依赖。

【Vuex插件】内置了 Logger 插件，记录state更改的前后状态，但是有dev-tools时就不需要了。

dispatch和commit方法都是封装过的，被注入过store，所以可以使用commit根据传入的type获取并执行对应的mutations，dispatch则获取并执行对应的actions

【vue-router的钩子函数/导航守卫】分为全局守卫、路由守卫以及组件守卫三种，接受三个参数 to, from, next

【导航解析过程】页面路由跳转时需要切换对应的组件，需要激活新的组件，并且旧的组件可能被销毁或者复用。被失活的组件会触发`beforeRouteLeave`钩子，被复用的组件则触发`beforeRouteUpdate`钩子。然后触发全局钩子`beforeEach`，和路由的`beforeEnter`钩子。如果是懒加载的路由，则解析异步路由组件。然后在被激活的组件里调用 `beforeRouteEnter`，调用全局的 `beforeResolve` 守卫。导航被确认以后会调用全局的 `afterEach` 钩子，然后完成 DOM 更新。



## 源码

### 数据驱动

【new Vue发生了什么】一个vue项目从 new Vue 实例化开始。首先进行<u>init初始化</u>，先mergeOptions然后再初始化内部方法以及各种状态（将数据通过Object.defineProperty的方式代理到vm实例上，并通过Observer完成响应式绑定），完成实例的初始化以后就开始<u>挂载实例</u>。如果实例有template选项，就需要将template进行compile编译。首先将template解析成**AST**，遍历收集AST的可优化信息，然后将优化后的AST生成**render function**。工程化项目中通常会使用vue-loader，它可以帮忙将.vue文件的template编译成render function。得到render函数以后，就会执行然后调用createElement方法来创建生成节点元素的**vnode**，包含了创建真是DOM所需要的信息。通过每个节点建立起来vnode树就是**Virtual DOM**，它是对真实DOM的映射。然后patch方法将根据vnode信息来调用浏览器的DOM API 来创建真实DOM，以此完成渲染和挂载。

【merge options】实例化Vue时，首先进行mergeOptions合并选项，合并来自于组件自身的实例options，全局构造函数Vue的options，以及使用extends和mixins拓展的options，然后返回这个合并的对象。针对不同的option会使用不同的合并策略。data、props、methods、computed这些属性，来自实例的option值会覆盖掉拓展的(混入和继承)，components、directives、filters这些则会把全局Vue中的也合并进来，watch属性以及生命周期的钩子方法，则会以数组的方式进行合并，然后依次执行，先执行拓展的再执行实例的。

【初始化状态】初始化状态最主要做了两件事情，一个是将props、computed以及methods经过标准化以后，通过Object.defineProperty方法绑定到实例上，就能作为实例属性直接访问；第二个是对它们以及data中的属性进行数据劫持，把它们变成响应式对象。完成这个阶段的初始化以后，就会触发生命周期的created钩子，这时候代码就能访问到实例数据了。

【render function】render function用于创建VNode。创建一个vue实例，在初始化以后会进行挂载。在开始挂载前，会先判断实例是否包含template模板，如果有的话就需要先进行编译。parse解析模板生成AST，在优化AST以后，generate生成对应的render function。我们也可以自己手写render function，但是除了使用slot或者是组件封装以外，通常手写render function复杂而且不直观，可以使用JSX书写UI代码然后通过babel编译，或者工程化项目中使用template，webpack会使用Vue-loader然后调用模板编译器（vue-template-compiler）将template预编译为render function。

【VNode】执行render function，调用createElement方法创建vnode。VNode是一个JavaScript对象，可以由一个普通DOM元素节点或者一个组件节点生成，整个页面的组件树就变成由一个个vnode组成的vnode树，把它称作虚拟DOM。vnode包含了创建DOM所需要的信息，vdom也是一个JavaScript对象，是对真实DOM的映射。

【虚拟DOM】VirtualDOM是Vue2才被引进的，主要是两个用处，跨平台以及更好的更新性能。真正的 DOM 节点非常庞大和复杂，频繁的更新 DOM 也会造成很大的性能消耗。利用虚拟DOM的技术，大大提高了更新DOM时的性能。因为Virtual DOM只是一个JavaScript对象，创建它的资源消耗要比创建DOM低很多。而且页面需要更新并重新渲染的时候，会先<u>经过vnode的diff算法，尽量去复用旧的节点，找出变化的节点然后更新，从而减少操作DOM的次数</u>，所以执行效率更高。最后，vue内部的patch方法用于将虚拟DOM映射到真实DOM，针对不同平台实现不同的patch方法，从而可以实现服务端渲染，以及vue应用的跨平台。虚拟DOM的缺陷是只能保证性能下限，而无法像操作真实DOM那样可以被针对性的极致优化。

【实例挂载】挂载的目的就是<u>把模板渲染成最终的真实DOM</u>，发生在实例的初始化状态以后。判断如果实例的option中有`el`节点属性，就会将实例去挂载到这个DOM节点上，子组件的el属性就是根组件节点。如果没有el属性的话，可以在实例化以后去手动挂载。挂载入口是从`$mount`方法开始，它有两个版本，一个是带有编译的compiler版本，另一个则是没有编译的runtime版本。前者会现将模板编译成render function，再交由后者处理，触发生命周期的beforeMount钩子后，创建render watcher，并执行render函数创建VNode，最终patch方法中根据vnode的信息来创建和更新真实DOM。

【模板编译】有compiler的版本，如果没有定义render function，就会将template模板字符串parse解析生成AST，然后优化AST，标记AST中可以优化的节点（标记静态节点，也就是没有绑定响应式数据，不会再更新的结点，会在后续的Diff算法中跳过比较），然后根据优化后的AST，generate生成render function。

【Diff算法】深度遍历+逐层比较+递归+双指针的方式。watcher的颗粒度只有做到组件级别，所以节点属性的更新不能被侦听到，就需要进行Diff比较。将新旧Virtual DOM逐层比较，找出哪些节点需要更新，借助key可以非常精确找到相同节点，从而尽可能复用旧节点，实现**高效更新**。

同层比较，因为不同层的话就不是sameNode，就会直接销毁旧的vnode，渲染新的vnode

Diff算法的优点是<u>可以尽量复用旧节点，做到只把变化的部分重新渲染，从而减少操作DOM，提高渲染效率</u>。缺点是使用index作为key的时候，比较的时候会有bug，所以最好使用唯一的key值

【key的作用与原理】key用来<u>标识vnode节点</u>，主要作用是<u>优化Diff算法</u>，在patch的时候可以通过key判断新旧vnode是否是同一个节点，如果key一样那么就可以复用旧节点，减少DOM操作提高性能。当改变key的时候，节点会被强制触发重新渲染并替换掉。

如果v-for中没有使用key，则会默认采用“就地复用”策略，如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

### 响应式原理

【响应式原理】源码中实现响应式原理的核心是`Observer`类，通过它来实现数据绑定和数据变化的观察者模式。被观察的对象都会被添加一个observer实例，在实例化Observer的时候会<u>遍历对象</u>，通过Object.defineProperty方法给对象的每个属性添加getter和setter，用于依赖收集和派发更新。

【依赖收集和派发更新】收集的依赖就是watcher，派发更新的也是将watcher从收集的容器中取出执行。在实例化一个Observer的时候，会创建一个**`dep`**容器，用于管理watcher。在访问数据触发其getter的时候，会通过dep的`depend`方法进行依赖收集，将当前的watcher添加进dep容器中维护的一个订阅者容器subscribers。当数据发生变化触发setter时，就会通过dep的`notify`方法，将subscribers容器中的watcher拿出来执行其中的逻辑处理，以实现数据变化的派发更新。

【watcher】依赖收集时watcher会被添加进subscribers容器中，当派发更新的时候，就会遍历subscribers容器中的watcher，然后执行watcher中的回调方法，完成相应的逻辑处理。主要有三个类型的watcher，用于响应式更新视图的render watcher，computed属性使用的computed watcher，以及用户定义的user watcher。

【render watcher】实例在挂载时会进行首次渲染，创建一个`render watcher`，并递归访问render函数中使用到的实例上的属性，触发它们的getter进行依赖收集。当render watcher被派发更新以后，会调用updateComponent方法，触发组件重新渲染生成新的vnode，然后patch更新到DOM上。watcher在被执行以前会被进行排列，render watcher<u>总是最后执行</u>。数据是否能响应式更新与数据的嵌套无关，只要是首次挂载时被访问过，收集过依赖并添加render watcher的，更新数据的时候都会派发更新给render watcher，从而响应式更新视图。

【computed watcher】初始化computed属性时，也会生成一个 `computed watcher`，computed watcher的内部做了优化，当计算属性的计算的最终值发生变化时，才会触发watcher并重新渲染，而不是计算属性依赖的值发生变化时就更新。

【user watcher】用户定义的watch属性能被用于创建user watcher，根据配置的方式，又可以衍生出deep属性为true时对应的可以深度监听的deep watcher，以及immediate属性为true时对应的同步立即更新的sync watcher。

【为什么只对对象劫持，而要对数组进行方法重写】数据劫持指的是使用 `Object.defineProperty` 劫持对象的访问和修改，数组中只有对象元素才会被劫持。因为对象的属性个数通常有限，拦截起来数量不多，但数组元素个数可能就会非常多，出于性价比考虑，显然数组并不适用于数据劫持。而且使用 Object.defineProperty劫持的方式也不能监听到数组长度的变化，也就是插入和删除元素不能监听到，所以对于数组元素的监听并不是进行劫持，而是重写数据原型上的方法，然后手动派发更新。

【Vue.set】使用set方法添加一个响应式属性，如果被添加的是一个数组，则会调用数组的`splice`方法然后触发响应式更新。如果被添加的是一个对象，就会使用`defineReactive`将它绑定为响应式属性，并且<u>手动的派发更新</u>。

【DOM异步更新机制】视图上的响应式数据更新的时候，会将更新派发给render watcher，会调用updateComponent方法，触发组件重新渲染生成vnode，然后patch更新到DOM上。但是watcher不是被立即执行更新，而是先将watcher放入一个队列中，相同的watcher只会被添加进一次队列，这里是一个优化点，做了watcher**去重**，<u>避免了多余的计算和DOM操作</u>。然后给队列做**排序**，以保证<u>父组件的watcher比子组件先执行</u>，更新的时候先渲染父组件。JavaScript是单线程的，基于事件循环机制，每一轮事件循环称作一个tick，在这轮的主线程执行完成后开启下一个tick，从微任务队列中取出微任务执行。然后这个watcher的队列会等到nextTick，也就是被当作一个微任务来执行，然后取出队列的watcher执行更新。所以从数据的变化到 DOM 的重新渲染是一个异步过程。（为什么要nextTick再更新呢，那就是等数据都修改完成，所有watcher都生成完了再做去重，然后最终patch的时候只需要做一遍DOM更新）

这是一种节流的思想，<u>同一事件循环内多次修改，会统一进行一次视图更新，以节省开销提升性能</u>。修改数据时会触发setter，从而派发更新给对应的watcher。除了我们定义的watch中指定了immediate以外，其它的watcher不会被立即执行，而是被添加进一个watcher队列中。watcher队列会去重并且进行排序，render watcher被放到最后执行。然后呢，等到这一轮的同步任务都执行完成，相当于都修改完数据了，再触发事件循环的next tick，来执行watcher更新。nextTick这个api会生成一个微任务，事件循环机制也是优先读取的微任务。

【`$nextTick`】全局 API `Vue.nextTick`，和实例上的方法 `vm.$nextTick`，完全一致，调用的是同一个方法，<u>传给它的回调方法也会等到下一个tick才被执行，这时候就可以访问到更新以后的DOM了</u>。nextTick内部调用的是`promise.then`方法，如果不支持promise，就是用`MutationObserver`，再到使用setImmediate(宏任务)，直至setTimeout。Vue采用的是异步更新的策略，通俗点说就是，同一事件循环内多次修改，会统一进行一次视图更新，以节省开销提升性能。

---

【对象新属性无法更新视图，删除属性无法更新视图】因为`Object.defineProperty`没有对对象的新属性进行数据劫持，删除属性的时候不能触发setter。使用`Vue.$set`方法添加新属性，在内部对新属性进行数据劫持，使用`Vue.$delete`方法删除属性，然后手动派发更新，以此更新视图。

【直接arr[index] = xxx无法更新视图】Vue没有对数组的非对象元素进行`Object.defineProperty`的属性劫持，可以使用`splice`方法，或者使用`Vue.$set`，在内部也是去调用splice方法来更新数组。

### 组件化

【谈谈对组件的理解】组件化开发 (高内聚、低耦合、单向数据流) 能够解耦复杂的代码逻辑，提高代码的开发效率、可读性、复用性与测试性。常用的组件化技术有props或者attrs传递数据、events自定义事件、slot插槽。组件化开发颗粒度更细，数据变化时需要渲染的内容就更少，从而提升重新渲染的性能。

【组件的渲染流程】创建组件vnode，然后创建真实节点，并插入到页面中

【组件更新】数据发生变化触发重新渲染，生成新的VNode，patch的时候，将新的vnode与旧的vnode进行比较节点是否相同，以决定是否需要复用节点。其中如果key不同，就会被当作不同的vnode，创建新节点然后删除旧节点。如果新旧节点相同，则会调用patchVnode方法，把新vnode patch到旧vnode上去。当新旧 VNode 同时存在 children，通过 updateChildren 对子节点做更新。在旧vnode的子节点中尽量找到与新vnode的子节点相同 (sameVnode) 的节点，复用旧的DOM以减少对DOM的操作。

【组件注册】每个组件的创建都是通过 `Vue.extend` 继承而来，然后将组件的 options 和全局构造函数Vue的 options 进行 merge 合并。根组件和子组件的merge options的时机略有不同，根组件是在初始化时合并配置，子组件是在执行生成 vnode 的时候 (createComponent)

【父子组件的生命周期】父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted （<u>先实例化父组件，在挂载父组件的时候才会去实例化子组件，然后先完成子组件的挂载</u>）

【父组件和子组件的更新顺序】编译时发生在`vm.$mount`时，所以父组件先编译，然后再编译子组件。所以先触发父组件的beforeMount生命周期钩子。挂载的时候使用一个vnode队列来插入，队列中添加到顺序是先子后父，所以子组件先完成挂载然后是父组件，先触发子组件的mounted生命周期钩子。

【异步组件】只在组件需要渲染时触发工厂函数进行加载，并且会把加载结果缓存起来。本质上是 2 次渲染，第一次渲染生成一个注释节点，当异步获取组件成功后，再通过 `$forceUpdate` 方法强制重新渲染

【自定义指令】在编译的时候会给组件实例添加directives属性，然后在generate生成render函数的时候，通过`genDirectives`方法生成指令代码



## 其它

【Vue2】Vue2.x 与 Vue1.x 最大的区别在于 2.x 使用了 Virtual DOM 来更新DOM节点，提升渲染性能。以及提供了服务端渲染技术。

【组件递归】必须添加name选项

【动态组件】 `<component :is="currentView" />`

【性能优化】数据层级不要太深，使用`Object.freeze`冻结不需要响应式的对象数据；不要使用索引作为`key`值；给元素或组件使用`v-once`；不要在同一个节点上使用v-for和v-if；input表单输入的v-lazy；采用性能更好的函数式组件；使用keep-alive缓存组件；借助webpack实现路由懒加载；
