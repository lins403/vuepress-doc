# Function

## 属性和方法

```js
// 函数的属性和方法 .name，.length，.toString()，argument对象
      function fun(a, b, ...params) {
        console.log(arguments)
      }
      console.log(fun.name, fun.length, fun.toString())
      console.log(fun(1, 2, 3, 4, 5))
```

## Skills

### 函数具名传参

```js
const func1 = ({ param1, param2 ...params }) => { console.log(param1, param2, params) }
func1({param1:2, param3:'hello world'})
func1()  // TypeError

// 改进
const func = ({ param1, param2, ...params }={}) => { console.log(param1, param2, params) }
func()  // ✔️
```


