# 轮子

## 数学运算

```js
// 最小公约数
const gcd = (x, y) => y ? gcd(y, x % y) : x;

// 最小公倍数
const lcm = (x, y) => x*y/gcd(x,y)
```



## 数据处理

### shuffle

好的洗牌算法应该要保证每个位置选到的数都是等概率的，同时还要保证算法的高效性。

Lodash库的shuffle方法，使用的是Fisher–Yates shuffle算法，其核心实现是

> 从1到n之间随机出一个数和最后一个数(n)交换，然后从剩余的数中随机出一个数和倒数第二个数(n-1)交换，重复前面两小步，这样的时间复杂度只有n

```js
function shuffle(arr) {
  const len = arr.length
  while(len > 1) {
    const index = Math.floor(Math.random() * len--)
    [arr[index], arr[len]] = [arr[len], arr[index]]
  }
  return arr
}
```

### flat

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
```

### 扁平化数组转树🌲

```

```

### 树🌲扁平化

```

```

### 对象深拷贝

```js
const deepClone = (obj, hash = new WeakMap()) => {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date){
  	return new Date(obj);
  } 
  //正则对象直接返回一个新的正则对象     
  if (obj instanceof RegExp){
  	return new RegExp(obj);     
  }
  //如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)){
  	return hash.get(obj);
  }
  // 获取对象所有自身属性的描述
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) { 
    if(typeof obj[key] === 'object' && obj[key] !== null){
    	cloneObj[key] = deepClone(obj[key], hash);
    } else {
    	cloneObj[key] = obj[key];
    }
  }
  return cloneObj
}
// https://juejin.cn/post/7019090370814279693#heading-66
```



## 算法

## 汉诺塔

递归、分而治之

```js
var hanoi = function(A, B, C) {
  // n个盘子从A到C
  function dfs(A, B, C, n){
    if(n == 0) return
    dfs(A, C, B, n - 1)    // n - 1个盘子从A到B
    C.push(A.pop());       // n从A到C
    dfs(B, A, C, n - 1)    // n - 1个盘子从B到C  
  }
  return dfs(A, B, C, A.length)
}
var A = [1,2,3], B=[], C=[]
hanoi(A, B, C)
console.log(C)	//[1, 2, 3]
```



## 函数

### debounce

防抖，本质上是避免连续的事件重复触发

最常见的应用场景

1. `<input>` 输入后，等待 wait 毫秒以后，再触发处理方法
2. debounce配合button的disabled属性

```js
const debounce = (fn, wait) => {
  let timer = null

  return function () {
    let context = this,
      args = arguments

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```



### throttle

节流，本质上是避免一定时间内连续触发事件

最常见的应用场景

1. 短时间内多次触发但只执行一次处理（滚动事件）

```js
export const throttle = (fn, delay) => {
  let curTime = Date.now()

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now()

    if (nowTime - curTime >= delay) {
      curTime = Date.now()
      return fn.apply(context, args)
    }
  }
}
```



函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

### 管道函数

柯里化，函数接受一个参数，将它变为一个新函数。管道函数就是将一个使用多个参数的函数，变为多个使用单个参数的函数

```
const pipe = ()
```

