# 迭代器与生成器

ECMAScript 6 规范新增了两个高级特性:迭代器和生成器。使用这两个特性，能够更清晰、高效、方便地实现迭代

## 迭代器Iterator

- 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）
- 默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性

```js
const obj = {
  // `Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数
  [Symbol.iterator] : function () {
    // 执行这个函数，就会返回一个遍历器
    return {
      next: function () {
        return { value: 1,done: true };
      }
    };
  }
};
console.log(obj[Symbol.iterator]().next())		// {value: 1, done: true}
```

```
next()

return()

throw() 
```



### 调用 Iterator 接口的场合

（1）解构赋值

（2）扩展运算符

（3）yield*

（4）其他场合

- 数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口
  - for...of
  - Array.from()
  - Map(), Set(), WeakMap(), WeakSet()
  - Promise.all()、Promise.race()

### for...of 循环

`for...of`循环内部调用的是数据结构的`Symbol.iterator`方法。

`for...of`循环可以使用的范围包括：

- Array、类数组对象（arguments、DOM NodeList）、String、Set、Map、Generator

### 🌰例子

#### 自定义迭代方法（部署 Iterator 接口）

```js
// 通用方法
const iterableObj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
[...iterableObj]		// ['hello', 'world']
for(const v of iterableObj) console.log(v)
```

```js
// 类似数组的对象（存在数值键名和length属性），部署 Iterator 接口的简便方法
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
  // [Symbol.iterator]: [][Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}
```

#### 使用 Generator 函数部署 Iterator 接口

```js
let iterable = {
  [Symbol.iterator]: function* () {
    yield 'a';
    yield 'b';
    yield 'c';
  }
};
[...iterable]		// ['a', 'b', 'c']
```

```js
// 简写
let iterableObj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
}
[...iterableObj]		// ['hello', 'world']
```

```js
let obj = {
  * [Symbol.iterator]() {
    yield* [1,2,3]
  }
}
[...obj]		// [1, 2, 3]
```



## Generator函数
