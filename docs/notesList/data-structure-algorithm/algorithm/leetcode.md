# LeetCode经典题目

## 数据结构

### 链表

- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

### 树

[一套拳法👊刷掉n个遍历树的问题](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen--3/)

- 无脑使用递归，或者是利用栈的方式实现迭代
- 回溯动规分治等等，只要涉及递归的问题，都是树的问题。
- 回溯算法就是个 N 叉树的前后序遍历问题

### 多维数组

- [566. 重塑矩阵](https://leetcode-cn.com/problems/reshape-the-matrix/)
- [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)



## 方法

### 二分法（logN）

[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

```js
// 使用位运算符>>>做整除，优先级低于+-
mid = right + left >> 1
// or
mid = (right - left >> 1) + left
```

### 双指针

逆向：

- [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

同向：

- [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

快慢指针：

- [876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
- [19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

排序➕双指针：

- [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

**滑动窗口**：

- [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)

```js
for(let i=0,j=s.length-1; i<j; i++,j--){	// 循环变量的自增/自减放在循环体中执行速度更快一些
  [s[i],s[j]] = [s[j],s[i]]		// 解构赋值的方式--交换两个值
}
```

### 动态规划

- [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

### 综合多解题

[53. 最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)【贪心、动态规划、分治法】

## 其它

循环余数

- [189. 轮转数组](https://leetcode-cn.com/problems/rotate-array/)

位运算

- [191. 位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)





> 一但要求下一个更大的元素，就是用单调栈解。
>
> 原地变换，或者在这个空间内求某个确定条件的情况，可以考虑使用哈希表
>
> 遍历
>
> - 迭代
> - 递归
