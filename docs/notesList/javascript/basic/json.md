# JSON

JavaScript Object Notation

JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null

## JSON.stringify

```js
/**
 * @description: undefined、任意的函数以及symbol值在序列化过程中会被忽略，或转换为null
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
  edition: 3,
  year: 2011
}
// var jsonText = JSON.stringify(book, null)  //全选
// var jsonText = JSON.stringify(book, null, "--")
var jsonText = JSON.stringify(book, ['title', 'edition'], 2)
original_download(jsonText, 'demo.json')
```

## JSON.parse

```js
/**
 * @description: 
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
    return new Date(value)
  } else {
    return value
  }
})
```
