# ES6

## 箭头函数

箭头函数不能用来定义Generator函数。

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

