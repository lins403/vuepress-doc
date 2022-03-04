# 组件化

## mountComponent

`mountComponent` 核心就是先实例化一个`render Watcher`，在它的回调函数中会调用 `updateComponent` 方法，在此方法中调用 `vm._render` 方法先生成 `VNode`，最终调用 `vm._update` 更新 DOM。

- `vm._render`
- `vm._update`

## 文档内容

1. 组件基础
2. 组件注册
3. Props
4. 自定义事件
5. 插槽
6. 动态组件&异步组件
7. 处理边界情况

3. 

## 问题

### 1. 为什么data必须是函数？

答：因为组件可能被复用产生多个实例，如果一个组件的 `data` 是一个函数，则每个实例的data对象就是互相独立的；如果不用函数而直接返回一个Object，会导致实例的data值是对这个对象的直接引用，修改其中一个实例的data就会引起联动。

### 2. 为什么每个组件必须只有一个根元素？

>  Render function should return a single root node.
