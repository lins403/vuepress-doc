# 递归

自上而下的分析，自下而上的实现

1. 确定功能

2. 明确问题和子问题的关系

3. 实现递归

## 青蛙跳步

```js
function step(n){
  if(n=1) return 1
  if(n=2) return 2
  return step(n-1)+step(n-2)
}
```

改进

```js
// 缓存计算，空间换时间
const memo = [0, 1, 2]
function step(n) {
  if (memo[n]) return memo[n]
  let res
  res = step(n - 1) + step(n - 2)
  memo[n] = res
  return res
}
```

改进（尾调用优化）

```js
"use strict"

const memo = [0, 1, 2]

function step(memoFunc, n) {
  return memoFunc(n - 1) + memoFunc(n - 2)
}

function memoFunc(n) {
  if(memo[n]) return memo[n]
  let res
  res = step(memoFunc, n)
  memo[n] = res
  return res
}

console.log(memoFunc(5))
```

改进（通用封装）

```js
"use strict"

function memoFunc(memo, formula){
  const recur = function(n){
    if(memo[n]) return memo[n]
    let res
    res = formula(recur, n)
    memo[n] = res
    return res
  }
  return recur
}

function step(recur, n){
  return recur(n-1) + recur(n-2)
}

const step_memo = memoFunc([0,1,2], step)

console.log(step_memo(3));
console.log(step_memo(4));
console.log(step_memo(5));
console.log(step_memo(6));
```

## 扁平数组转树

```js
function array2tree(arr){
  const res = []
  recur(arr, res, 0)
  return res
}

function recur(arr, res, pid){
  for(let v of arr){
    if(v.pid===pid){
      v.children = []
      res.push(v)
      recur(arr, v.children, v.id)
    }
  }
}

console.log(array2tree(arr))
```

```js
const res = arr.map(item => {
  item.children = arr.filter(v => v.pid === item.id)
  return item
})[0]
```

```js
const arr2tree = (arr, id = null) =>
  arr
    .filter(item => item.parent_id === id)
    .map(item => ({ ...item, children: arr2tree(arr, item.id) }))
console.log(arr2tree(arr, 0))
```

```js
// pid有序的数组
const arr2tree = arr => {
  while (arr[arr.length - 1].pid) {
    const endVal = arr.pop()
    const item = arr.find(v => v.id === endVal.pid)
    if (!item.children) item.children = []
    item.children.push(endVal)
  }
  return arr
}
console.log(arr2tree(arr))
```

