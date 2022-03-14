# 特殊文件

## 文件

[file-saver](https://github.com/eligrey/FileSaver.js) : 保存/下载文件到指定文件，轻量（3.3K / 1.5K）

[serve](https://www.npmjs.com/package/serve)：为静态资源创建一个服务，使用 `http://` or `https://` 协议，替代 `file:///`

## MIME 类型

[MIME 类型 - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

| 类型          | 描述                                                         | 典型示例                                                     |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `text`        | 表明文件是普通文本，理论上是人类可读                         | `text/plain`, `text/html`, `text/css, text/javascript`       |
| `image`       | 表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型 | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon` |
| `audio`       | 表明是某种音频文件                                           | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav` |
| `video`       | 表明是某种视频文件                                           | `video/webm`, `video/ogg`                                    |
| `application` | 表明是某种二进制数据                                         | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

## MS Office

[Embedded File Viewer: Google Drive, OneDrive · GitHub](https://gist.github.com/tzmartin/1cf85dc3d975f94cfddc04bc0dd399be)

- Google Docs Viewer

```html
<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc" frameborder="0"></iframe>
```

- Office Web Apps Viewer

```html
<iframe src="https://docs.google.com/gview?url=http://ieee802.org/secmail/docIZSEwEqHFr.doc&embedded=true" frameborder="0"></iframe>
```

## .docx

[GitHub - mwilliamson/mammoth.js: Convert Word documents (.docx files) to HTML](https://github.com/mwilliamson/mammoth.js)

```shell
npm i mammoth

npx mammoth public/1.docx output.html

npx mammoth public/1.docx output.md --output-format=markdown
```

不支持 `.doc` 文件

```js
axios.get('/demo.docx', {responseType: 'arraybuffer'})
  .then(arrayBuffer => {
     mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then().catch().done()
   })
```

## xlsx

[GitHub - SheetJS/sheetjs: SheetJS Community Edition -- Spreadsheet Data Toolkit](https://github.com/SheetJS/sheetjs)

```shell
npm i xlsx
```

Demo: [vue2-boilerplate/src/pages/vue-demo/xlsx at master](https://github.com/lins403/vue2-boilerplate/tree/master/src/pages/vue-demo/xlsx)
