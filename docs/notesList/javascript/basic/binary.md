# 二进制数据

## ArrayBuffer

`ArrayBuffer` 是核心对象，是所有的基础，是原始的二进制数据。

1. `ArrayBuffer` 是对固定长度的连续内存空间的引用

```js
const buffer = new ArrayBuffer(16) // 创建一个长度为 16 的 buffer，会分配一个 16 字节的连续内存空间，并用 0 进行预填充
console.log(buffer.byteLength) // 16
```

2. 如要操作 `ArrayBuffer`，我们需要使用“视图”对象
- `Uint8Array`：将 ArrayBuffer 中的**每个字节**视为 0 到 2<sup>8</sup>-1 之间的单个数字，无符号整数

- `Uint16Array`：**每 2 个字节**视为一个 0 到 2<sup>16</sup>-1 之间的整数，无符号整数

- `Uint32Array`：每 4 个字节，无符号整数

- `Float64Array`：每 16 个字节，有符号浮点数

```js
const buffer = new ArrayBuffer(16) // 创建一个长度为 16 的 buffer
const view = new Uint32Array(buffer) // 将 buffer 视为一个 32 位整数的序列
console.log(Uint32Array.BYTES_PER_ELEMENT) // 4，每个整数 4 个字节
console.log(view.length) // 4，它存储了 4 个整数
console.log(view.byteLength) // 16，字节中的大小
```

## Blob

*Binary large object*

 `Blob` 则表示“具有类型的二进制数据”，这样可以方便 `Blob` 用于在浏览器中常见的上传/下载操作。

- XMLHttpRequest，fetch 等进行 Web 请求的方法可以自然地使用 `Blob`，也可以使用其他类型的二进制数据。

- 我们可以轻松地在 `Blob` 和低级别的二进制数据类型之间进行转换：

```js
// 构造器，第一个参数必须是一个数组 [...]
let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
blob = new Blob(['hello-world'], {type: 'text/plain'});

// Blob 用作 URL
const blob = new Blob(["Hello, world!"], {type: 'text/plain'});
link.href = URL.createObjectURL(blob);

// Blob 转换为 base64
let reader = new FileReader();
reader.readAsDataURL(blob); // 将 Blob 转换为 base64 并调用 onload

// Image 转换为 blob
const blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

// Blob 转换为 ArrayBuffer
let fileReader = new FileReader();
fileReader.readAsArrayBuffer(blob);
fileReader.onload = function(event) {
  let arrayBuffer = fileReader.result;
};
```

## File 和 FileReader

[File](https://www.w3.org/TR/FileAPI/#dfn-file) 对象继承自 `Blob`，并扩展了与文件系统相关的功能；允许网页中的 JavaScript 访问其内容，用户在一个 `<input>` 元素上选择文件后返回的 `FileList` 就是 `File` 对象。

[FileReader](https://www.w3.org/TR/FileAPI/#dfn-filereader) 是一个对象，其唯一目的是从 `Blob`（因此也从 `File`）对象中读取数据。

FileReader Demo: [html-css-demos/file-reader.html at main · lins403/html-css-demos · GitHub](https://github.com/lins403/html-css-demos/blob/main/js-basic/file-reader.html)

# 参考

[二进制数据，文件 - javascript.info](https://zh.javascript.info/binary)
