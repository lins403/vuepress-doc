# 轮子

## 数学运算

```js
// 最小公约数
const gcd = (x, y) => y ? gcd(y, x % y) : x;

// 最小公倍数
const lcm = (x, y) => x*y/gcd(x,y)
```

## shuffle

好的洗牌算法应该要保证每个位置选到的数都是等概率的，同时还要保证算法的高效性。

Lodash库的shuffle方法，使用的是Fisher–Yates shuffle算法，其核心思想是

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

