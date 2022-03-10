# Libraries

## Lodash

### `_.template([string=''], [options={}])`

```html
<!--public/index.html-->
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title><%= htmlWebpackPlugin.options.title %></title>
```

- `<%= VALUE %>` 用来做不转义插值；
- `<%- VALUE %>` 用来做 HTML 转义插值；
- `<% expression %>` 用来描述 JavaScript 流程控制。

## 数组

`_.difference(array, [values])`	

- 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。

`_.intersection([arrays])`

- 创建唯一值的数组，这个数组包含所有给定数组都包含的元素

`_.xor([arrays])`

- 异或

`_.pull(array, [values])` 

- 移除数组array中所有和给定值相等的元素

`_.sortedIndex(array, value)`

- value值应该插入到数组中尽可能小的索引位置，以保证array的排序

`_.zip([arrays])`

- 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

## 对象

### 对象过滤属性

剔除

#### `_.omit(object, [paths])`

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

#### `_.omitBy(object, [predicate=_.identity])`

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

保留

#### `_.pick(object, [paths])`

#### `_.pickBy(object, [predicate=_.identity])`



## 函数

### 偏函数

#### `_.partial(func, [partials])`

占位符在前面

```js
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};
 
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'
 
// 使用了占位符。
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```

#### `_.partialRight(func, [partials])`

占位符在后面

```js
var greetFred = _.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'
 
// 使用了占位符。
var sayHelloTo = _.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```

### 柯里化

#### `_.curry(func, [arity=func.length])`

```js
var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```

#### `_.curryRight(func, [arity=func.length])`

```js
var curried = _.curryRight(abc);
 
// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
```

