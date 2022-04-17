# 项目



[10 Top VueJS Boilerplates for 2020](https://blog.bitsrc.io/10-top-vuejs-boilerplates-for-2020-c70192003d20)





## vue3

[GitHub - anncwb/vue-vben-admin: A modern vue admin. It is based on Vue3, vite and TypeScript. It's fast！](https://github.com/anncwb/vue-vben-admin)

[GitHub - newbee-ltd/vue3-admin: 🔥 🎉 Vue 3.0 + Vite 2.0 + Vue-Router 4.0 + Element-Plus + Echarts 5.0 + Axios 开发的后台管理系统](https://github.com/newbee-ltd/vue3-admin)



- TypeScript
- Composition API 逻辑分割、复用、组合；与UI层解耦
  - React Hooks重复调用一个组件，按顺序记住状态；不能有条件性的调用，按固定顺序调用
  - Composition API只调用一次，保留的是引用，更符合原生JS对象引用的逻辑
  - 选项式 API 和组合式 API
- 组件可以有多个根节点、Teleport、Suspense
- Vue2中v-for优先级高于v-if，Vue3中又改成v-if高于v-for
- 性能：加入了tree-shaking，Composition API可压缩性更高



Vue3的响应式系统和渲染系统解耦的比较好



- 需要加强对TS的支持，泛型、slot等
- 



## Vite

跟Vue没有强绑定，跨框架的工具。vite使用<u>rollup</u>来实现生产环境的打包，主要优势在开发阶段。

Vite 轻量，<u>按需</u>动态编译，HMR (热渲染依赖）

- 由于现代浏览器本身就支持ES Module，会自动向依赖的Module发出请求。vite充分利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像webpack那样进行打包合并。
- 利用的是ES Module，基于es新特性 Dynamic imports 实现的

### 与webpack

启动时

- Webpack Dev Server  在启动时需要先build一遍，编译所有代码文件，打包成bundle后再给dev server，所以冷启动时间会比较长
- vite在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译。而是直接启动dev server，当浏览器请求某个模块时，再对这个模块的内容进行实时编译，因此启动速度非常快。
- express框架的dev server

热更新

- Webpack HMR 热更新的时候，把该模块的相关依赖模块全部编译一次，所以反应速度比较慢
- 在HMR（热更新）方面，当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像webpack那样需要把该模块的相关依赖模块全部编译一次，所以vite效率更高。

## Pinia

就是Vuex5
