# 数据类型

## 判断数据类型

一般来说，原始类型的值应该使用 `typeof` 检测，而对象值应该使用 `instanceof` 检测，需要得到具体类型名称时可以使用 `Object.prototype.toString.call(any)`

###  typeof

js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 1：整数

```js
typeof function(){}  //"function"
typeof []  //"object"
typeof undefined  //"undefined"
typeof null  //"object" 【因为null的机器码都是0，所以被当成了对象】
typeof NaN  //"number"
typeof Symbol()	//'symbol'
```

```js
// 📢使用 new 操作符时不同（除Function外的所有构造函数的类型都是'object'）
var str = new String('String');
var num = new Number(100);
var func = new Function();

typeof str; // object
typeof num; // object
typeof func; // function

// 所以JavaScript中万物皆是对象，但是又分为普通对象和函数对象
```

### instanceof

判断一个实例对象的具体类型，原理是检测这个实例对象的原型链上，是否包含对应构造函数的 `prototype` 属性

```js
typeof []  //"object"
[] instanceof Object  //true
[] instanceof Array  //true
```

### constructor

```js
[].constructor === Array  //true
Array.isArray([]) // true
```

### toString

```js
({}).toString()		//'[object Object]'
([]).toString()		//'' 
  --> 因为array中重写了toString方法，所以需要用call或者Reflect.apply方法来调用，来调用原生toString方法返回一个表示该对象的字符串
```

```js
Object.prototype.toString.call([])  //'[object Array]'
Object.prototype.toString.call([]).slice(8, -1)  //'Array
```

```js
Reflect.apply(target, thisArgument, argumentsList)
Reflect.apply(Object.prototype.toString, [], [])		//'[object Array]'
```

## undefined和null

> `undefined` 原始值
>
> `null` 缺少值
>
> `NaN` 非数值

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

// Object.js() 相对比===和==的改进
Object.is(NaN,NaN)    //true

// 但不要将变量值直接与null或undefined进行比较
if (values != null){}		// 不要!
  
// 判断变量名是否存在
if (typeof v === "undefined") {
  // ...
}
```

## falsy

falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。

```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)	//BigInt
if (NaN)
if ('')
if ("")
if (``)
```
