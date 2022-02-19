# LeetCode经典题目

## 二分法

[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

```js
// 使用位运算符>>>做整除，优先级低于+-
mid = right + left >> 1
// or
mid = (right - left >> 1) + left
```

## 双指针

逆向：

- [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

同向：

- [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

```js
for(let i=0,j=s.length-1; i<j; i++,j--){	// 循环变量的自增/自减放在循环体中执行速度更快一些
  [s[i],s[j]] = [s[j],s[i]]		// 解构赋值的方式--交换两个值
}
```



## 综合多解题

[53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)【贪心、动态规划、分治法】

## 其它

循环余数

- [189. 轮转数组](https://leetcode-cn.com/problems/rotate-array/)

位运算

- [191. 位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)

