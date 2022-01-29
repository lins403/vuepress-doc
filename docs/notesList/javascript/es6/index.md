# ES6

## 箭头函数

### 限制

- 不能使用 arguments、super 和 new.target，也不能用作构造函数。

- 没有 prototype 属性
- 不能用来定义Generator函数

不能使用arguments对象的两种解决办法

```js
// 扩展符
const foo = (...arguments)=>{ console.log(arguments) }
foo(1,2,3)

// 包装函数
function foo2() {
  let bar = () => { console.log(arguments) }
  bar()
}
foo2(1,2,3)
```

### this指向

箭头函数中的 this 会保留定义该函数时的上下文（词法作用域）

```js
/***** 标准函数与箭头函数的一个对比例子 *****/

window.color = 'red'
let o = { color: 'aliceblue' }

// 标准函数（this引用的是把函数当成方法调用的上下文对象，所以this值在函数运行时才会被确定）
function sayColor() {
  console.log(this.color)
}
sayColor()    // 'red'
o.sayColor = sayColor
o.sayColor()  // 'aliceblue'

// 箭头函数
let sayColor2 = () => console.log(this.color)
sayColor2()    // 'red'
o.sayColor = sayColor2
o.sayColor()  // 'red'
```

```js
window.value = 'global'
function ThisValue(){
	this.value = 'function'
	setTimeout(()=>{ console.log(this.value) }, 100)		// "function"
	setTimeout(function(){ console.log(this.value) }, 100)		// "global"
}
new ThisValue()
```



## 解构赋值

```js
let person = { name: 'Matt', age: 27 }
let { name, age, job } = person
console.log(job)	//undefined
// 添加别名
let { name: personName, age: personAge } = person
// 添加默认值
let { name, job='Software engineer' } = person
```

```js
// 用在函数的arguments对象上
function printPerson(foo, {name: personName, age: personAge}, bar) { console.log(arguments);
	console.log(personName, personAge);
}
```



## async/await

- for-await-of (ES2018)

