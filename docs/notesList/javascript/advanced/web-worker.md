# Web Worker

工作者线程

在许多情况下，可以将纯计算工作移到 Web Worker，例如，如果它不需要 DOM 访问权限。数据操作或遍历（例如排序或搜索）往往很适合这种模型，加载和模型生成也是如此。

```js
var dataSortWorker = new Worker("sort-worker.js");
dataSortWorker.postMesssage(dataToSort);

// The main thread is now free to continue working on other things...

dataSortWorker.addEventListener('message', function(evt) {
   var sortedData = evt.data;
   // Update data on screen...
});
```

## 实例化

```js
// 第二个参数默认为{ type: 'classic' }
const scriptWorker = new Worker('scriptWorker.js');

// ECMAScript 6 模块与 Worker 实例完全兼容
const moduleWorker = new Worker('moduleWorker.js', { type: 'module' });
```

