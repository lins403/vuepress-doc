# JavaScript引擎

> JavaScript的执行流程是基于事件循环机制，而事件循环机制是由JavaScript的宿主环境来实现的，在浏览器客户端中就是由V8引擎所实现，在nodejs中由 libuv 引擎实现，两者的实现方式略有不同。
>
> JavaScript主线程在运行时会产生堆和栈，执行上下文栈中代码的执行会调用各种web API，例如setTimeout、用户交互、Promise等等，它们会产生各种事件，然后这些事件就会被添加到任务队列中去，这个队列由多个任务组成，其实就是宏任务队列。
>
> 事件被添加到任务队列中以后，js引擎会持续不断的检查主线程执行栈是否为空，一旦发现执行栈中的同步任务已经执行完毕，系统就会去读取任务队列，依次执行那些事件所对应的回调函数。只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务。
>
> 任务队列中的任务执行结束以后，js引擎会继续
>
> > 以Promise为例，当一个 promise 准备就绪时，它的 `.then/catch/finally` 处理程序（handler）就会被放入队列中，但是它们不会立即被执行。要一直等到 JavaScript 引擎执行完当前的代码以后，包括promise中的同步代码，这时执行栈为空，然后js引擎才会从任务队列中获取promise的处理方法并执行它。

<img src="https://raw.githubusercontent.com/lins403/assetsSpace/master/vuepress/img/20220220222941.png" style="zoom: 67%;" />

# ❓

1. 事件队列与任务队列
2. 宏任务队列与微任务队列

## V8

- 隐藏类

## Event Loop

- EC Stack（Call Stack）
- task Queue（callback Queue、Call Queue、Event Queue）
- Web APIs（如定时器timer）
- event loop

### 背景

为了避免不同线程修改DOM所导致的冲突，JavaScript被设计成单线程语言。而单线程就意味着，所有任务需要排队依次执行。但是在执行I/O任务，例如执行读写操作、发送网络请求等任务时，等待IO结果的这段时间内CPU是闲置的。所以这类任务可以被挂起，然后主线程去执行排在后面的其它任务，等到IO任务返回结果后，主线程再回来执行这个被挂起的任务，以此来提高CPU利用效率，从而提高脚本的执行效率。

于是所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）

1. 同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
2. 异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

### 事件循环机制

事件循环（Event Loop）机制是由 JavaScript 的宿主环境来实现的，在浏览器运行环境中由浏览器内核引擎实现，而在 NodeJS 中则由 libuv 引擎实现。

```
（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空。一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第（3）步。
```

主线程运行时候，产生堆（Heap）和栈（Stack），执行栈中的代码调用各种外部 API，它们在任务队列中加入各种事件。只要栈中的代码执行完毕，主线程就会通过事件循环机制读取任务队列，依次执行那些事件所对应的回调函数。

JavaScript引擎有三种状态，事件循环就是在这三种状态之间的切换：

1. 等待任务
2. 执行任务
3. 进入休眠状态等待更多任务

### 宏任务与微任务

JavaScript 的<u>异步任务</u>根据事件分类分为两种：宏任务和微任务

- An event loop has one or more task queues.(task queue is macrotask queue)
- Each event loop has a microtask queue.
- task queue = macrotask queue != microtask queue
- a task may be pushed into macrotask queue,or microtask queue
- when a task is pushed into a queue(micro/macro),we mean preparing work is finished,so the task can be executed now.

#### 宏任务（MacroTask）

基本上等同于非微任务

- main script
- setTimeout、setInterval、setImmediate（Node.js）
- I/O（Mouse Events、Keyboard Events、Network Events）
- requestAnimationFrame
- UI Rendering（HTML Parsing）
- MessageChannel

#### 微任务（MicroTask）

微任务仅来自于我们的代码

- Promise.then、Promise.finally（非 new Promise，Promise.catch也会隐式调用Promise.then）
- await
- process.nextTick()（Node.js）
- MutationObserver(监视 DOM 变动的API)
- queueMicrotask()（创建一个微任务）
- ~~Object.observe~~

#### 机制

每一次循环，都是首先从宏任务开始，微任务结束。

优先级：<u>微任务 > DOM渲染 > 宏任务</u>

1. run the oldest task in macrotask queue,then remove it.
2. run all available tasks in microtask queue,then remove them.
3. next round:run next task in macrotask queue(jump step 2)

宏任务与微任务的区别在于队列中事件的执行优先级。进入整体代码（宏任务）后，开始首次事件循环，当执行上下文栈清空后，事件循环机制会优先检测微任务队列中的事件并推至主线程执行，当微任务队列清空后，才会去检测宏任务队列中的事件，再将事件推至主线程中执行，而当执行上下文栈再次清空后，事件循环机制又会检测微任务队列，如此反复循环。

## JIT



## QuickJS

[QuickJS Javascript Engine](https://github.com/bellard/quickjs)
