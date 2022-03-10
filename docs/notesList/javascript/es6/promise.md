# Promise

通过promise的链式调用，串行化异步任务，解决回调地狱问题

### 状态

1. pending
2. fulfilled / resolved
3. rejected

![](https://mdn.mozillademos.org/files/8633/promises.png)

## 方法

| 实例方法                                        |                                                          |
| ----------------------------------------------- | -------------------------------------------------------- |
| Promise.prototype.then(onFulfilled, onRejected) | 添加成功或失败的回调到当前Promise, 并返回一个新的Promise |
| Promise.prototype.catch(onRejected)             | 添加失败的回调到当前Promise, 并返回一个新的Promise       |
| Promise.prototype.finally(onFinally)            | 添加一个回调到当前Promise（无论成功或者失败）            |

| 静态方法                       |                                                              |
| ------------------------------ | ------------------------------------------------------------ |
| `Promise.resolve(value)`       | 返回一个以给定值解析后的Promise对象；如果这个值是：<br />1. 一个 promise ，那么将返回这个 promise； <br />2. thenable对象（即带有`"then" `方法），返回的promise会采用它的最终状态；<br />3. 其它，返回的promise将以此值完成 |
| `Promise.reject(reason)`       | 返回一个状态为失败的Promise对象，并将给定的失败信息reason传递给对应的处理方法 |
| `Promise.all(iterable)`        | 返回一个新的promise对象，在iterable参数对象里所有的promise对象都成功的时候才会触发成功 |
| `Promise.allSettled(iterable)` | 返回一个新的promise对象，在iterable参数里所有Promises都完成后（包含成功和失败）返回 |
| `Promise.any(iterable)`        | 只要其中的一个 promise 成功，就返回那个已经成功的 promise    |
| `Promise.race(iterable)`       | 返回第一个完成后（包含成功和失败）的 promise                 |

```js
p.then(value => {
  // fulfillment callback
}, reason => {
  // rejection callback
})

Promise.resolve('会被then的onFulfilled处理').then(console.log)
Promise.reject('会被then的onRejected处理').then(console.log, console.warn)
Promise.reject('只会被then的onRejected处理').then(console.log, console.warn).catch(console.error)
Promise.reject('只会被catch的onRejected处理').catch(console.error).then(console.log, console.warn)
Promise.reject('会被catch的onRejected处理').then(console.log).catch(console.error)
// .then()和.catch()都是返回<fulfilled>状态的promise
// 事实上, catch(onRejected) 内部会调用 then(undefined, onRejected)
// 所以二者行为基本相同，谁在前就给谁处理
```

## 手写

[手把手一行一行代码教你“手写Promise“，完美通过 Promises/A+ 官方872个测试用例](https://juejin.cn/post/7043758954496655397)

- 定义一个Promise类，构造函数接收一个callback，callback中可以调用resolve和reject进行处理promise。定义一个用于处理promise状态的PromiseState变量，和一个处理promise结果的PromiseResult的变量。
- 创建三个静态属性用于标识promise的三种状态：pending、fulfilled、rejected
- 定义静态方法/类方法，resolve、reject、all、any、race等
  - resolve方法接收一个值作为promise成功的处理结果，并且将promise状态更改为fulfilled
  - resolve方法接收一个值作为promise失败的处理结果，并且将promise状态更改为rejected
- 定义实例方法then、finally、catch
  - then方法接收两个处理函数onFulfilled和onRejected分别处理promise成功和失败的情况，将resolve时的处理结果result作为参数传递给onFulfilled，调用reject时的处理结果reason传给onRejected，通过判断promise当前状态，来选择调用onFulfilled或者onRejected来处理promise。
  - catch方法会隐式调用then方法，then(undefined, onRejected)

## 技巧

### 进度追踪

```js
class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = []
    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map((handler) => handler(status)); });
    })
    this.notifyHandlers = notifyHandlers
  }
  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler)
    return this
  } 
}

let p = new TrackablePromise((resolve, reject, notify) => { 
  function countdown(x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`)
      setTimeout(() => countdown(x - 1), 1000)
    } else {
      resolve()
    }
  }
  countdown(5)
})
```

### 