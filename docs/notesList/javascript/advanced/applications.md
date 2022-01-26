# 应用

## Web API

### 1）读取本地文件（FileReader）

[JavaScript 如何读取本地文件](https://segmentfault.com/a/1190000021436482)

1. `<input type='file' />`
2. input file 节点有一个`files`属性，包含对应文件的`File`对象
3. 实例化`FileReader`类，给实例绑定`onload`事件，读取结果保存在实例的`result`属性
4. 使用实例方法来读取对应类型的文件，如
   - readAsText(file, encoding)
   - readAsDataUrl(file)，数据`URI`的形式，可以用于作为src属性显示图片
   - readAsBinaryString(file)
   - readAsArrayBuffer(file)，转成ArrayBuffer，再转成Blob然后用于读取Excel和Word文件等

