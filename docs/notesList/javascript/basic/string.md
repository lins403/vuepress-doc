# String

```js
var longString = 'Long \
long \
long \
string';

console.log(longString)    // "Long long long string"
```

由于历史原因，JavaScript只支持 UTF-16 两字节的字符，不支持四字节的字符，因此JavaScript 的单位字符长度固定为16位长度，即2个字节。
