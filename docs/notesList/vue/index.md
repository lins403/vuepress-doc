# Vue

## 数据绑定

js操作DOM，一个是消耗高影响性能，另一个是导致js代码中包含过多HTML代码，也就是会导致视图代码和业务逻辑紧密耦合；

vue通过MVVM的模式，分离为视图层View和数据层Model。ViewModel层实现了数据的双向绑定，我们只需要提供视图层需要的数据，vue会自动帮我们更新DOM。（分离视图代码和业务逻辑，数据驱动DOM）

- `{{}}`  Mustache语法插入表达式值
- `v-bind`：动态更新HTML元素的属性，数据变化时会重新渲染

## 指令

在结点上使用 `v-pre` ，会跳过这个元素和它的子元素的编译过程。例如 {{}} 就不会被编译

`v-bind`指令可以传入一个表达式，它会使用表达式计算出的最终字符串，但绑定class和style时可以比较特殊。

```html
<!-- v-bind动态绑定class，绑定style的方式也一样 -->

1. 对象语法
<div class="common" :class="{'active':isActive, 'disabled':isDisable}"></div>
data(){ 
	return{	
    isActive:true, 
    isDisable:false
  }
}
<!------------------------>
2. 数组语法
<div class="common" :class="[activeCls, disableCls]"></div>
<button :class="[isActive? 'active': '']">使用三元表达式</button>	
<button :class="[ {'active': isActive}, disableCls ]">数组中使用对象语法，应用多个class对象</button>
data(){ 
	return{	
    activeCls: 'btn-active', 
    disableCls: 'btn-disabled',
		isActive: 'true'
  }
}
```

`v-cloak` 

- 斗篷、遮盖物，用于解决初始化慢导致页面闪动
- 使用插值语法时，页面上显示的是原始值，例如{{message}}，直到vue创建完实例并编译模板时，DOM才会被更新，更新的过程会造成屏幕闪动
- 在编译前先隐藏，编译结束后将v-cloak移除

```scss
// 避免使用插值语法时屏幕闪动
[v-cloak]{
	display: none;
}
```

但是在工程化的项目里，例如使用vue-cli和v-router的项目里，HTML结构中只有一个id为app的空div元素，其中的内容都是由路由去挂载不同组件来完成渲染的

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```



## 条件渲染与列表渲染

vue在渲染元素时，处于效率考虑，会尽可能地复用已有的元素而并非重新渲染。

如果不想要让vue复用元素，可以使用key属性，key值必须是唯一的

`v-show`只是简单的 display 属性的切换，无论条件是否为真，都会被编译。所以 v-show 不能用在`<template>`上

## 事件与修饰符

### $event

```vue
<a href="https://www.youtube.com" @click="handleClick('coming', $event)">打开链接🔗</a>

handleClick(message, event){
	event.preventDefault()
}
```

### 修饰符

```
.stop
.prevent
.capture
.self
.once
```

