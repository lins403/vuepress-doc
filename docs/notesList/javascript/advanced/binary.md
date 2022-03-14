# 二进制数据

## ArrayBuffer

`ArrayBuffer` 是核心对象，是所有的基础，<u>是原始的二进制数据</u>。

> `ArrayBuffer`对象、`TypedArray`视图和`DataView`视图是 JavaScript 操作二进制数据的一个接口。
>
> 它们都是以数组的语法处理二进制数据，所以统称为二进制数组。

1. `ArrayBuffer` 是对固定长度的连续内存空间的引用

```js
const buffer = new ArrayBuffer(16) // 创建一个长度为 16 的 buffer，会分配一个 16 字节的连续内存空间，并用 0 进行预填充
console.log(buffer.byteLength) // 16
```

2. 如要操作 `ArrayBuffer`，我们需要使用“视图”对象，
   - 视图可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的 预分配内存
   - ArrayBuffer 是所有定型数组(typed array)及视图引用的基本单位
### 视图ArrayBufferView

这是一种简化规范的辅助数据类型，它不是一个接口，也没有实现它的对象

#### ElementType

| ElementType | 字节 | 说明                  | 等价的C类型    | 值的范围       |
| ----------- | ---- | --------------------- | -------------- | -------------- |
| Int8        | 1    | 8 位有符号整数        | signed char    | -128~127       |
| Uint8       | 1    | 8 位无符号整数        | unsigned char  | 0~255          |
| Int16       | 2    | 16 位有符号整数       | short          | -32 768~32 767 |
| Uint16      | 2    | 16 位无符号整数       | unsigned short | 0~65 535       |
| Int32       | 4    | 32 位有符号整数       | int            |                |
| Uint32      | 4    | 32 位无符号整数       | unsigned int   |                |
| Float32     | 4    | 32 位 IEEE-754 浮点数 | float          |                |
| Float64     | 8    | 64 位 IEEE-754 浮点数 | double         |                |

```js
const buffer = new ArrayBuffer(16) // 创建一个长度为 16 的 buffer
const view = new Uint32Array(buffer) // 将 buffer 视为一个 32 位整数的序列
console.log(Uint32Array.BYTES_PER_ELEMENT) // 4，每个整数 4 个字节
console.log(view.length) // 4，它存储了 4 个整数
console.log(view.byteLength) // 16，字节中的大小
```

#### 1）DataView

`DataView`这个视图专为文件 I/O 和网络 I/O 设计，其 API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些

- DataView 对存储在缓冲内的数据类型没有预设
- DataView 为上表中的每种 ElementType 都暴露了 get 和 set 方法，这些方法强制开发者在读、写时指定一个ElementType，然后 DataView 就会为读、写而完成相应的转换，使用 byteOffset(字节偏移量)定位要读取或写入值的位置。
- DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError

```
1. 要读或写的字节偏移量。可以看成 DataView 中的某种“地址”
2. DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换
3. 内存中值的字节序。默认为大端字节序
```

#### 2）定型数组TypedArray

定型数组/类型化数组是另一种形式的 ArrayBuffer 视图。

**特点：**

- 与 DataView 的区别在于，定型数组特定于一种 ElementType 且遵循系统原生的字节序。
- 相应地，定型数组提供了适用面更广的 API 和更高的性能。
- 从很多方面看，定型数组与普通数组都很相似

**意义：**

- 设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。
- 由于定型数组的二进制表示对操作系统而言是一种容易使用的格式，JavaScript 引擎可以重度优化算术运算、 按位运算和其他对定型数组的常见操作，因此使用它们速度极快

**例子：**

- `Uint8Array`：将 ArrayBuffer 中的**每个字节**视为 0 到 2<sup>8</sup>-1 之间的单个数字，无符号整数
- `Uint16Array`：**每 2 个字节**视为一个 0 到 2<sup>16</sup>-1 之间的整数，无符号整数
- `Uint32Array`：每 4 个字节，无符号整数
- `Float64Array`：每 16 个字节，有符号浮点数

## Blob

*Binary large object*，二进制大对象，是 JavaScript 对不可修改二进制数据的封装类型。

`Blob` 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 `ReadableStream` 来用于数据操作。 

 `Blob` 则表示“具有类型的二进制数据”，这样可以方便 `Blob` 用于在浏览器中常见的上传/下载操作。

- XMLHttpRequest，fetch 等进行 Web 请求的方法可以自然地使用 `Blob`，也可以使用其他类型的二进制数据。


我们可以轻松地在 `Blob` 和低级别的二进制数据类型之间进行转换：

- 可以使用 `new Blob(...)` 构造函数从一个类型化数组（typed array）创建 `Blob`
- 可以使用 `FileReader` 从 `Blob` 中取回 `arrayBuffer`，然后在其上创建一个视图（view），用于低级别的二进制处理。

```js
// 构造器，第一个参数必须是一个数组 [...]，并在其中指定 MIME 类型
let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
blob = new Blob(['hello-world'], {type: 'text/plain'});
blob = new Blob(['{"a": 1}'], { type: 'application/json' })

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

### Blob.slice

`Blob.slice()`方法用于创建一个，包含源 Blob 的，指定字节范围内的数据，的新 Blob 对象，即子集Blob。

`File` 也从 Blob 接口继承了这个方法

## File 和 FileReader

[File](https://www.w3.org/TR/FileAPI/#dfn-file) 对象继承自 `Blob`，并扩展了与文件系统相关的功能，相当于特殊类型的Blob对象；

可以查看有关文件的信息，并允许网页中的 JavaScript 访问其内容；

用户在一个 `<input>` 元素上选择文件后返回的 `FileList` 就是 `File` 对象。

File对象可以用在任意的 Blob 类型的 context 中。比如说， `FileReader`, `URL.createObjectURL()`, `createImageBitmap()` , 及 `XMLHttpRequest.send()` 都能处理 `Blob` 和` File`。

### FileReader

[FileReader](https://www.w3.org/TR/FileAPI/#dfn-filereader) 类型表示一种异步文件读取机制，FileReader是一个对象，其唯一目的是从 `Blob`（因此也从 `File`）对象中读取数据。

FileReader Demo: [html-css-demos/file-reader.html at main · lins403/html-css-demos · GitHub](https://github.com/lins403/html-css-demos/blob/main/js-basic/file-reader.html)

`FileReaderSync`类型就是 FileReader 的同步版本，接口允许以同步的方式读取`File`或`Blob`对象中的内容。这个类型拥有与 FileReader 相同的方法，只有在整个文件都加载到内存之后才会继续执行。该接口只在web workers里可用，因为在主线程里进行同步I/O操作可能会阻塞用户界面。

## Streams API

支持以全新的方式（将资源拆分成小块，然后按位处理它）读取、写入和处理数据

Stream API 定义了三种流

1. 可读流：对底层数据源的封装。数据在内部从底层源进入流，然后由消费者(consumer)进行处理。
2. 可写流：对底层数据槽的封装。生产者(producer)将数据写入流，数据在内部传入底层数据槽(sink)。
3. 转换流：由两种流组成，可写流用于接收数据(可写端)，可读流用于输出数据(可读端)。这两个流之间是转换程序(transformer)，可以根据需要检查和修改流内容。

# 参考

[二进制数据，文件 - javascript.info](https://zh.javascript.info/binary)

《JavaScript高级程序设计（第4版）》

- 6.3 - 定型数组
- 20.4 - File API 与 Blob API
- 20.9 - Streams API
