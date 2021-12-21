# 数据类型

## 判断数据类型

```js
// typeof
typeof function(){}  //"function"
typeof []  //"object"
typeof undefined  //"undefined"
typeof null  //"object"
typeof NaN  //"number"
```

```js
typeof []  //"object"
[] instanceof Object  //true
[] instanceof Array  //true

[].constructor === Array  //true
Array.isArray([]) // true

Object.prototype.toString.call([])  //'[object Array]'
Object.prototype.toString.call([]).slice(8, -1)  //'Array
```

## undefined和null

```js
undefined === undefined    //true
typeof undefined    //"undefined"

null === null        // true
typeof null            //"object"

undefined === null  //false
undefined == null  //true

Number('') // 0
Number(null)  //0
Number(undefined)  //NaN
```

## 参考

[js精度丢失问题-看这篇文章就够了(通俗易懂)](https://zhuanlan.zhihu.com/p/100353781)
