# 问题

1. 核心思想
   - 函数式编程（纯函数、hooks）
   - 减少副作用（this）
1. 应用怎么挂载（webpack的entry文件）
   -  `ReactDOM.render(element, document.getElementById('root'))`
   - `ReactDOM.createRoot(document.getElementById('root')).render(element);`（React18）
2. react如何实现数据绑定
   - 单向数据流、单向绑定（eventHandler-->setState）
3. react如何触发更新
   - 当 `props` 或者 `state` 发生变化时，类组件根据 `shouldComponentUpdate` 的返回值来决定是否更新组件。
4. 函数组件和类组件内部怎么处理的，然后可以被JSX使用
   - **All React components must act like pure functions with respect to their props.**
   - 函数组件没有实例
5. slot
   - 直接将组件作为props的属性值来传递和使用
6. state
   - To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with **state**.
   - setState
     - 调用 `setState` 其实是异步的 —— 不要指望在调用 `setState` 之后，`this.state` 会立即映射为新的值。如果你需要基于当前的 state 来计算出新的值，那你应该传递一个函数，而不是一个对象



## 文档学习

- 受控组件：value & state，onchange & setState
- 非受控组件：操作DOM（ref）

- [组件的生命周期](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)、[图示](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 理念

1. 组件单一功能原则：一个组件原则上只能负责一个功能
2. 静态版本：将UI和交互功能分离开来
3. 最小state：只保留UI所需要的，最小的可变 state，其它通过它来按需计算其它信息
4. 确定 state 放置的位置：共同的层级更高的组件（没有的话就创建一个），自上而下的数据流
5. 反向的数据流：添加DOM事件来响应式更新数据，setState定义在state同一个组件中，父组件通过props将事件传递给子组件

### 注意

错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误

### 技巧

1. 将组件自身传递下去

   这种对组件的*控制反转*减少了在你的应用中要传递的 props 数量，这在很多场景下会使得你的代码更加干净，使你对根组件有更多的把控。但是，这并不适用于每一个场景.

   ```jsx
   function Page(props) {
     const user = props.user;
     const userLink = (
       <Link href={user.permalink}>
         <Avatar user={user} size={props.avatarSize} />
       </Link>
     );
     return <PageLayout userLink={userLink} />;
   }
   
   // 现在，我们有这样的组件：
   <Page user={user} avatarSize={avatarSize} />
   // ... 渲染出 ...
   <PageLayout userLink={...} />
   // ... 渲染出 ...
   <NavigationBar userLink={...} />
   // ... 渲染出 ...
   {props.userLink}
   ```

   



### 组件传递和共享

#### props

React组件上无事件，父子组件通信使用props

#### context

- Provider
- Consumer

#### refs

- 创建方式：createRef、回调函数、已过时的字符串 ref API 的形式
- ref.current
- refs转发：forwardRef
- 也可以将其作为常规 prop 属性传递

#### 高阶组件HOC

- 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。HOC 是纯函数，没有副作用。

#### Portals

- Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

#### Render Props

- 在 React 组件之间使用一个值为函数的 prop 共享代码
- 动态渲染内容，也便于解耦组件





## Hook

Hooks are functions that let you “hook into” React state and lifecycle features from function components. 

- 在组件之间复用状态逻辑
- 细化组件状态处理逻辑的颗粒度

### 用法

https://codesandbox.io/s/jvvkoo8pq3?file=/src/index.js

[`useRef()`](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref) Hook 不仅可以用于 DOM refs。「ref」 对象是一个 `current` 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性。从概念上讲，你可以认为 refs 就像是一个 class 的实例变量。除非你正在做 [懒加载](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily)，否则避免在渲染期间设置 refs —— 这可能会导致意外的行为。相反的，通常你应该在事件处理器和 effects 中修改 refs。

## React Fiber

Fiber 是 React 16 中新的协调（reconciliation）引擎。它的主要目的是使 Virtual DOM 可以进行增量式渲染（incremental rendering）。