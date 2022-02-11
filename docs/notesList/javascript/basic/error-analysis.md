# 错误处理

## 错误类型

| 类型           |                                                              | 例子                                                      |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| Error          | 基类型，其他错误类型继承该类型                               | 主要用于开发者抛出自定义错误。                            |
| InternalError  | 会在底层 JavaScript 引擎抛出异常时由浏览器抛出               | 比较严重的错误，如递归过多导致了栈溢出                    |
| EvalError      | 会在使用 eval()函数发生异常时抛出                            |                                                           |
| RangeError     | 会在数值越界时抛出                                           |                                                           |
| ReferenceError | 会在找不到对象时发生                                         | 经常是由访问不存在的变量而导致的                          |
| SyntaxError    | 会在代码语法错误时发生，如果它还能被执行                     | 经常在给 eval()传入的字符串包含 JavaScript 语法错误时发生 |
| TypeError      | 会在类型错误时发生                                           | 主要发生在变量不是预期类型，或者访问不存在的方法时        |
| URIError       | 只会在使用 encodeURI()或 decodeURI()但传入了格式错误的 URI 时发生 |                                                           |

### 自定义错误类型

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
    this.message = message;
  }
}
throw new CustomError("My message");
```

## 捕获错误

```js
function someFunction(){
  throw new ReferenceError('test...')
}

try {
  someFunction();
} catch (error){
  console.log(error.message)
  if (error instanceof TypeError){
    // 处理类型错误
  } else if (error instanceof ReferenceError){
    // 处理引用错误 
  } else {
    // 处理所有其他类型的错误
  }
}finally {
  console.log("finally");
}
```

## error事件

```js
window.onerror = function(message, source, lineno, colno, error) { 
  // 捕获错误信息
	console.log(message)
  // 可以返回 false 来阻止浏览器默认报告错误的行为，变成类似try…catch的效果
  return false
}

window.addEventListener('error', function(event) { ... })
```

```js
// 由于历史原因，window.onerror和element.onerror接受不同的参数。
element.onerror = function(event) { ... }

// 一个例子：捕获图片加载结果
const image = new Image();
image.addEventListener("load", (event) => {
  console.log("Image loaded!");
})
image.addEventListener("error", (event) => {
  console.log("Image not loaded!");
});
image.src = "doesnotexist.gif"; // 不存在，资源会加载失败
```

## 其它

- 区分重大与非重大错误

- 建立错误日志系统，记录到服务器的错误消息应该包含尽量多的上下文信息，以便找出错误的确切原因。

- 要通过分析代码预测很可能发生哪些错误。由于以下因素，JavaScript 中经常出现错误:

   类型转换;
    数据类型检测不足;
    向服务器发送错误数据或从服务器接收到错误数据。

