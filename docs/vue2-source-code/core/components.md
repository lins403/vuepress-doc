# 组件化

## 概要

## 文档内容

<https://cn.vuejs.org/v2/guide/components.html>

1. 组件基础
2. 组件注册
3. Props
4. 自定义事件
5. 插槽
6. 动态组件&异步组件
7. 处理边界情况

## 指令

1. parse > preTransformNode > processElement > processAttrs > addDirective > el.directives.push({ name, rawName, value, arg, modifiers })

2. generate > genElement > genData > genDirectives

3. patch > createPatchFunction / baseModules > updateDirectives , unbindDirectives > _update(oldVnode, vnode)

## 问题

### 1. 为什么data必须是函数？

答：因为组件可能被复用产生多个实例，如果一个组件的 `data` 是一个函数，则每个实例的data对象就是互相独立的；如果不用函数而直接返回一个Object，会导致实例的data值是对这个对象的直接引用，修改其中一个实例的data就会引起联动。

### 2. 为什么每个组件必须只有一个根元素？

>  Render function should return a single root node.
