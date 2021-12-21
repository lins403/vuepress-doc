# Array

## 极限值

JavaScript 使用一个32位整数，保存数组的元素个数，这意味着，数组成员最多只有 4294967295 （`2^32 - 1`）个

## 拷贝

[JavaScript中十种一步拷贝数组的方法](https://segmentfault.com/a/1190000018947028)



## Skills

### 批量创建数组

```js
Array(5).map(()=>{console.log(1)})
// [empty × 5]
// 没有打印内容
// ------------------------------------------------------------
Array.apply(null, { length: 5 }).map(()=>{console.log(1)})
// [undefined, undefined, undefined, undefined, undefined]
// 打印了5次1
```

### 数组去重

```js
Array.from(new Set(arr))

[...new Set(arr)]

const str = [...new Set("zhhsajwnns")].join(""); //字符串去重
```
