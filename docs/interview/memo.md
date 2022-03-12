# 错题备忘录

1. 将A元素拖拽并放置到B元素中，B元素需要做哪项操作(A)？

```js
A. event.preventDefault()
B. event.prevent()
C. event.drag()
D. event.drop()
```

2. 以下不支持冒泡的鼠标事件为( C)？

```js
A. mouseover
B. click
C. mouseleave
D. mousemove
```

3. 下列哪项不属于DOM查找节点的属性(D)？

```
A. parentObj.firstChild
B. parentObj.children
C. neborNode.previousSibling
D. neborNode.siblings
```

4. 使用方法(B)可以获取到地理位置所在的经纬度？

```
A. Geolocation.watchPosition()
B. Geolocation.getCurrentPosition()
C. Geolocation.getPosition()
D. Geolocation.Position()
```

5. 下列对js箭头函数描述错误的是(C)

```js
A. 箭头函数没有原型属性
B. 箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值
C. 箭头函数可以作为构造函数，使用new
D. 箭头函数不绑定arguments，取而代之用rest参数解决
```

6. 以下关于let和const的说法中正确的是: ABC

```js
A. let声明的变量值和类型都可以改变
B. const声明的常量不可以改变
C. 两者都不存在变量提升，同时存在暂时性死区，只能在声明的位置后面使用
D. const可以先声明再初始化，可以后赋值
```

7. 下面关于Promise说法正确的是(注意“返回结果”的意思包含成功或者失败) CD

```js
A. Promise.all在所有给定的promise都fulfilled后才返回结果		//传入promise都为空也可以输出结果
B. Promise.race在给定的promise中，某个fulfilled后才返回结果		//rejected也会
C. promise.then的回调函数中，可以返回一个新的promise
D. 对于一个向后台获取数据已经产生结果的promise:p1，再次调用p1.then，不会去重新发起请求获取数据
```

```js
// all 会被输出，而 race 不会被输出
Promise.all([]).then((res) => {
  console.log('all');
});
Promise.race([]).then((res) => {
  console.log('race');
});


Promise.reject(0)
  .catch(e => console.log('catch1: ',e))
  .catch(e => console.log('catch2: ',e))
  .then(e => console.log('then: ',e))
// catch1:  0
// then:  undefined
```

8. 输出结果

```js
var x = typeof x
var res = typeof typeof x;
console.log(x, res)
// undefined string

null == undefined
0.1 + 0.2 == 0.3
typeof NaN
typeof Function		//function
typeof Object		//function
typeof {}
'a' + 1
'a' - 1
Function instanceof Object		//true (Function.prototype.__proto__===Object.prototype)
Object instanceof Function		//false

typeof function () {} === typeof class {}		//true
```

```js
["0x1", "0x2", "0x3"].map(parseInt)		// [1, NaN, 0]
parseInt('77',40)		//NaN (2~36)
```

```js
// 逻辑与(&&)的优先级高于逻辑或(||)
console.log(true||false&&false, true&&false||true)		// true true
```

```js
1 + - + + + - + 1
// 2
1 + (- (+ + + (- + 1) ) )
```

```js
[ 'a', ,'b', ,].length 	//4

var a = [];
a.push(1, 2);
a.shift(3, 4);
a.concat([5, 6]);
a.splice(0, 1, 2);
a
// [2]
```

```js
function side(arr) {
  arr[0] = arr[2];
}
function func1(a, b, c = 3) {
  c = 10;
  side(arguments);
  console.log(a + b + c);
}
function func2(a, b, c) {
  c = 10;
  side(arguments);
  console.log(a + b + c);
}
func1(1, 1, 1);		//12
func2(1, 1, 1);		//21


var getName = function () {
  console.log(5)
}
function getName() {
  console.log(6)
}
getName(); 		//5


compute(10,100);
var compute = function(A,B) {
  console.info(A * B) ;
};
function compute(A,B){
  console.info(A + B);
}
function compute(A,B){
  console.info((A + B)*2);
}
compute(2,10);
// 220
// 20
```

```js
var array = []
for(var i = 0; i < 3; i++) {
  array.push(() => i)
}
var newArray = array.map(el => el())
console.log(newArray)
// [3,3,3]
```

## this指向

```js
var a = 5;
function test() { 
  a = 0; 
  console.log(a); 
  console.log(this.a); 
  var a;
  console.log(a); 
}
new test();		// 0 undefined 0
test();		// 0 5 0
```

```js
function fun () {
  return () => {
    return () => {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var f = fun.call({name: 'foo'})
var t1 = f.call({name: 'bar'})()()		// foo
var t2 = f().call({name: 'baz'})()		// foo
var t3 = f()().call({name: 'qux'})		// foo
```

```js
let obj1 = {
  a: 1,
  foo: () => {
    // 注意是箭头函数
    console.log(this.a)
  }
}
obj1.foo()
const obj2 = obj1.foo
obj2()
// undefined
// undefined
```

```js
const Person = (name="wang",age=10) => {
  this.name = name;
  this.age = age;
  return this.name +' is '+ this.age + 'years old'
}
let result = new Person('zhang',11)
console.log(result)
// TypeError: Person is not a constructor
```

```js
var name = 'global';
var obj = {
  name: 'local',
  foo: function(){
    this.name = 'foo';
  }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
  console.log(window.name);		//global
}, 0);
console.log(bar.name);		//foo

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);	//foo2
```

```js
var obj = {
  name:"zhangsan",
  sayName:function(){
    console.info(this.name);
  }
}

var wfunc = obj.sayName;
obj.sayName();		// 'zhangsan'
wfunc();		// ''
var name = "lisi";
obj.sayName();		// 'zhangsan'
wfunc();		// 'lisi'
```

## 事件循环

```js
const promiseA = Promise.resolve('a')
promiseA
  .then(res => {
    console.log("promiseA then(1): ", res)
  })
  .then(res => {
    console.log("promiseA then(2): ", res)
  })
const promiseB = Promise.resolve('b')
promiseB.then(res => {
  console.log("promiseB then(1): ", res)
})
promiseB.then(res => {
  console.log("promiseB then(2): ", res)
})


promiseA then(1):  a
promiseB then(1):  b
promiseB then(2):  b
promiseA then(2):  undefined
```

```js
setTimeout(() => {
  console.log(1)
}, 0)

const P = new Promise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    resolve()
    console.log(3)
  }, 0)
})

P.then(() => {
  console.log(4)
})
console.log(5)
// 2 5 1 3 4
```

```js
(async () => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 0)
  await new Promise((resolve, reject) => {
    console.log(3)
  }).then(() => {
    console.log(4)
  })
  console.log(5)
})()
// 1 3 2
// .then链式会持续执行，但第一个then必须promise完成状态(fulfilled/rejected)
```

```js
setTimeout(function() {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
// promise1
// promise2
// setTimeout
```

```js
<div class="outer">outer
	<button class="inner">inner</button>
</div>

var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

function onClick() {
  console.log('click');

  setTimeout(function() {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function() {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
"click"
"promise"
"click"
"promise"
"timeout"
"timeout"
```

```js
setTimeout(() => console.log('a'))
Promise.resolve()
  .then(() => console.log('b'))
  .then(() =>
    Promise.resolve('c').then(data => {
      setTimeout(() => console.log('d'))
      console.log('f')
      return data
    })
  )
  .then(data => console.log(data))
// b f c a d
```

```js
function log(msg, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg)
      resolve()
    }, time)
  })
}

// 第一段代码：
(async () => {
  for (let i = 0; i < 5; i++) {
    await log(i, 1000);
  }
})();

// 第二段代码：
(async () => {
  [ 1, 2, 3, 4 ].forEach(async (i) => {
    await log(i, 1000);
  });
})();

// 第三段代码：
(async () => {
  for (const i of [ 1, 2, 3, 4 ]) {
    await log(i, 1000);
  }
})();

// 三种遍历结果中forEach最特殊会导致并行执行，await阻塞会失效
// Array.prototype.forEach 不适合用于异步代码，包括promise和await
```

## 原型与原型链

```js
function Fn1(name) {
  if(name){
    this.name = name;
  }
}
Fn1.prototype.name="jack"
let a = new Fn1();
console.log('a:', a.name);
// "jack"

function Fn2(name) {
  this.name = name;
}
Fn2.prototype.name="jack"
let b = new Fn2();
console.log('b:', b.name);
// undefined
```

```js
var name = 'Jay'
function Person(name){
  this.name = name;
  console.log(this.name)	// Tom
}
var a = Person('Tom')
console.log(a)	//undefined

var b = new Person('Michael')
console.log(b)
```

```js
class A{}
class B extends A{}
const a = new A()
const b = new B()

a.__proto__ === A.prototype
b.__proto__ === B.prototype
b.__proto__.__proto__ === A.prototype
B.prototype.__proto__ === A.prototype
B.__proto__ === A		//继承关系！！
A.__proto__ === Function.prototype
```

## 其它

```js
function * cb(x, y) {
  for(let i = Math.ceil(x); i <= y; i++) {
    yield i;
  }
}

var a = cb(6, 9);
console.log(a.next());
console.log(a.next());
// {value: 6, done: false}
// {value: 7, done: false}
```

```js
function getPersonInfo (one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}
const person = 'Lydia'
const age = 21
getPersonInfo `${person} is ${age} years old`
// [ '', ' is ', ' years old' ]
// Lydia
// 21
```

