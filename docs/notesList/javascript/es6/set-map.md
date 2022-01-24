# Set 与 Map

ECMAScript 6 新增了一批引用类型:Map、WeakMap、Set 和 WeakSet。

这些类型为组织应用程序 数据和简化内存管理提供了新能力。

## Map

`Object` 的键值只能是string或symbol，而 `Map` 中各种类型的值（包括对象）都可以当作键。

### 实例属性和方法

```js
size
set()
get()
has()
delete()
clear()
```

#### 遍历

```js
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]		// [1, 2, 3]

[...map.values()]		// ['one', 'two', 'three']

[...map.entries()]		// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]		// [[1,'one'], [2, 'two'], [3, 'three']]
```

### WeekMap

`WeakMap` 与 `Map` 的区别有两点

1. WeakMap 只接受对象作为键名（`null`除外），不接受其他类型的值作为键名，且键不可迭代。
2. WeakMap 的键名所指向的对象，不计入垃圾回收机制，有助于防止内存泄漏。

WeakMap 中的“weak”(弱)， 指的是WeakMap中键的弱引用，即垃圾回收程序不需要考虑到WeakMap中的引用。

> 😊通俗的讲，当这个被引用对象消失，或者没有除了WeakMap以外的引用时，垃圾回收程序就会对这个被引用对象进行回收，然后WeakMap中对其引用的键以及值都会自动被当作垃圾回收掉（如果没有指向这个键的其他引用，键被破坏，因为值也没有被引用，所以值也会被回收），而不会因为WeakMap中存在的这个引用而阻拦对这个被引用对象的垃圾回收。

#### 适用场景

- 基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 `WeakMap`。换言之，其专用场合就是，它的键所对应的对象，可能会在将来消失，所以适合用于保存关联元数据。
- 另一个用处是部署私有属性。 `const _counter = new WeakMap();`

```js
// 一个典型应用场景：
// 在网页的 DOM 元素上添加数据，就可以使用`WeakMap`结构，
// 当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除
const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element) // "some information"
```

### Object与Map的优劣势

|          | 选型                                                         |
| -------- | ------------------------------------------------------------ |
| 内存占用 | 给定固定大小的内存，`Map` 大约可以多存储 50%的键/值对        |
| 插入性能 | 如果代码涉及大量插入操作，那么 `Map` 的性能更佳              |
| 查找速度 | 如果代码涉及大量查找操作，那么某些情况下可能选择 `Object` 更好一些 |
| 删除性能 | 如果代码涉及大量删除操作，那么毫无疑问应该选择 `Map`         |



## Set

```js
// Set函数可以接受一个数组（或者具有 iterable 接口的可迭代对象）作为参数，用来初始化
const set = new Set([1, 2, 3, 4, 4]);
[...set]		// [1, 2, 3, 4]
```

### 实例属性和方法

```js
size
add()
has()
delete()
clear()
```

```js
// 遍历
keys()
values()
entries()
forEach()
```

#### 妙用

```js
// 去除数组的重复成员
[...new Set(array)]
// Array.from(new Set(array))

// 去除字符串里面的重复字符
[...new Set('ababbc')].join('')
```

```js
// set-map-polyfill
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));		// 返回Set结构：{2, 4, 6}

// set-filter-polyfill
let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));		// 返回Set结构：{2, 4}
```

### WeekSet

与 Set 有两个区别。

1. WeakSet 的成员只能是对象，而不能是其他类型的值，且值不可迭代。
2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

#### 适用场景

- 储存 DOM 节点，而不用担心这些节点从文档移除时，需要手动释放引用，否则会引发内存泄漏
- 给储存的对象打标签

```js
// 一个🌰：保证了Foo的实例方法，只能在Foo的实例上调用
// 这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，
// 所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
```



## 前沿

### WeakRef 

WeakSet 和 WeakMap 是基于弱引用的数据结构，[ES2021](https://github.com/tc39/proposal-weakrefs) 更进一步，提供了 WeakRef 对象，用于直接创建对象的弱引用。

```js
let target = {};
// wr就是一个 WeakRef 的实例，属于对target的弱引用，垃圾回收机制不会计入这个引用
let wr = new WeakRef(target);
```

# 

# 参考

[ES6 入门教程——Set 和 Map 数据结构](https://es6.ruanyifeng.com/#docs/set-map)