# Lodash

## Collection

`_.groupBy(collection, [iteratee=_.identity])`

- 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果

`_.sortBy(collection, [iteratees=[_.identity]])`

- 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。
- V8引擎下的array.sort少于10个用插排(稳定)，大于10个用快排(不稳定)。

`_.orderBy(collection, [iteratees=[_.identity]], [orders])`

- 允许指定 iteratee（迭代函数）结果如何排序

  ```js
  var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
  // Sort by `user` in ascending order and by `age` in descending order.
  _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
  ```

`_.sample(collection)`

- 从 collection（集合）中获得一个随机元素

`_.sampleSize(collection, [n=1])`

- 从 collection（集合）中获得n个随机元素

`_.shuffle(collection)`

- 创建一个被打乱值的集合



## 字符串

`_.camelCase([string=''])`

`_.kebabCase([string=''])`

`_.snakeCase([string=''])` 

## 数组

`_.range([start=0], end, [step=1])`

- 创建一个包含从 `start` 到 `end`，但不包含 `end` 本身范围数字的数组。

`_.difference(array, [values])`	

- 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。

`_.intersection([arrays])`

- 创建唯一值的数组，这个数组包含所有给定数组都包含的元素。交集

`_.xor([arrays])`

- 异或

`_.pull(array, [values])` 

- 移除数组array中所有和给定值相等的元素

`_.sortedIndex(array, value)`

- value值应该插入到数组中尽可能小的索引位置，以保证array的排序

`_.zip([arrays])`

- 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

## 对象

`_.isPlainObject(value)`

- 检查 value 是否是普通对象

### 过滤属性

`_.omit(object, [paths])`

- 剔除指定属性

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

`_.omitBy(object, [predicate=_.identity])`

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

`_.pick(object, [paths])`

- 保留指定属性

`_.pickBy(object, [predicate=_.identity])`



## 函数

`_.once(func)`

- 创建一个只能调用 func 一次的函数

`_.debounce(func, [wait=0], [options={}])`

- 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。

`_.throttle(func, [wait=0], [options=])`

- 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 

`_.before(n, func)`

- 创建一个调用func的函数，调用func的次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用的结果。

`_.after(n, func)`

- 被调用 n 或更多次之后将马上触发func 

### 偏函数

`_.partial(func, [partials])`

- 占位符在前面

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

`_.partialRight(func, [partials])`

- 占位符在后面

### 柯里化

`_.curry(func, [arity=func.length])`

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

`_.curryRight(func, [arity=func.length])`

### 组合函数

`_.over([iteratees=[_.identity]])`

```js
var func = _.over([Math.max, Math.min]);
 
func(1, 2, 3, 4);
// => [4, 1]
```

### 管道函数

`_.flow([funcs])`

```js
function square(n) {
  return n * n;
}
 
var addSquare = _.flow([_.add, square]);
addSquare(1, 2);
// => 9
```



## Utils工具

`_.uniqueId([prefix=''])` 生成唯一ID

### 比较

`_.eq(value, other)`

- 比较两者的值，来确定它们是否相等，可用于比较对象

`_.isEqual(value, other)`

- 执行深比较来确定两者的值是否相等

`_.isEqualWith(value, other, [customizer])`

- 接受一个 `customizer` 用来定制比较值

### 克隆

`_.cloneDeep(value)`

- 递归拷贝 value

`_.cloneDeepWith(value, [customizer])`

- 自定义deep clone的方式

`_.clone(value)`、`_.cloneWith(value, [customizer])`

- 浅拷贝

### `_.template([string=''], [options={}])`

```html
<!--public/index.html-->
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title><%= htmlWebpackPlugin.options.title %></title>
```

- `<%= VALUE %>` 用来做不转义插值；
- `<%- VALUE %>` 用来做 HTML 转义插值；
- `<% expression %>` 用来描述 JavaScript 流程控制。



## 其它

[you-dont-need/You-Dont-Need-Lodash-Underscore: List of JavaScript methods which you can use natively + ESLint Plugin](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <script>
      var compiled = _.template('hello <%= user %>!')
      window.alert(compiled({ user: 'Aidan1997' }))
    </script>
  </body>
</html>
```

