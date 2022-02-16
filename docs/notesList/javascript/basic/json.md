# JSON

JavaScript Object Notation，JSON 是 JavaScript 语法的子 集，但 JSON 不属于 JavaScript，也不是只能在 JavaScript 中使用，它是一种通用数据格式。JavaScript对象的字面量表示法是 JSON 的灵感来源。

ECMAScript 5 定义了原生 JSON 对象，用于将 JavaScript 对象序列化为 JSON 字符串，以及将 JSON 数组解析为 JavaScript 对象。JSON.stringify()和 JSON.parse()方法分别用于实现这两种操作。这 两个方法都有一些选项可以用来改变默认的行为，以实现过滤或修改流程。

## JSON.stringify序列化

JSON 用来序列化对象、数组、数值、字符串、布尔值和 null

```js
/**
 * @description: 将JavaScript序列化为JSON字符串
 * @param {*} value
 * @param { Array<String>|null } replacer :指定需要序列化的属性值
 * @param { Number|String } space :指定缩进用的空白字符串，用于美化输出
 * @return {JSON字符串}
 */
JSON.stringify(value[, replacer [, space]])
```

```js
// 🌰
var book = {
  title: 'Professional JavaScript',
  authors: ['Nicholas C. Zakas'],
  edition: 4,
  year: 2017
}
JSON.stringify(book, null)  //全选
JSON.stringify(book, null, "--")
var jsonText = JSON.stringify(book, ['title', 'edition'], 2)	//指定属性
original_download(jsonText, 'demo.json')
```

### 特殊情况

1. 有Date、RegExp、Error对象，序列化的结果将只得到空对象
2. undefined、任何函数以及symbol值在序列化过程中会被忽略
3. NaN、Infinity和-Infinity 在序列化过程中会被转换为null
4. 只能序列化对象的自身的可枚举属性，从原型上继承的属性会被忽略

```js
var obj = {
  a: undefined,
  b: null,
  c: NaN,
  d: Infinity,
  e: Symbol(),
  f: function(){ return 1 }
}
JSON.stringify(obj)		
// '{"b":null,"c":null,"d":null}'
```



### 过滤结果

```js
jsonText = JSON.stringify(book, (key, value) => {
  switch(key) {
    case "authors":
      return value.join(",")
    case "year":
      return 5000;
    case "edition":
      return undefined;
    default:
      return value;
  }
});
```

### toJSON()方法

可以在要序列化的对象 中添加 toJSON()方法，序列化时会基于这个方法返回适当的 JSON 表示

```js
let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 4,
  year: 2017,
  toJSON: function() {
    return this.title;
  }
};
let jsonText = JSON.stringify(book);
console.log(jsonText)	//"Professional JavaScript"
```



## JSON.parse解析

```js
/**
 * @description: 将 JSON 解析为原生 JavaScript 值
 * @param { String } text :要被解析成 JavaScript 值的字符串
 * @param {*} reviver :转换器
 * @return { Object }
 */
JSON.parse(text[, reviver])
```

```js
// 🌰
var book = {
  title: 'Professional JavaScript',
  authors: ['Nicholas C. Zakas'],
  edition: 3,
  year: 2011,
  releaseDate: new Date(2011, 11, 1)
}

var jsonText = JSON.stringify(book)
var bookObj = JSON.parse(jsonText)
var bookCopy = JSON.parse(jsonText, function (key, value) {
  if (key == 'releaseDate') {
    return new Date(value).toLocaleDateString()
  } else {
    return value
  }
})
```
