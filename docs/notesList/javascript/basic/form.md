# Form表单

## HTML5 约束验证 API

1. 必填字段

```html
<input type="text" name="username" required>
```

2. 更多输入类型

```html
<input type="email" name="email">
<input type="url" name="homepage">
```

3. 数值范围

```html
<input type="number" min="0" max="100" step="5" name="count">
```

4. 输入模式

```html
<!-- pattern属性用于指定一个正则表达式，用户输入的文本必须与之匹配 -->
<input type="text" pattern="\d+" name="count">
```

5. 检测有效性

```js
if (document.forms[0].elements[0].checkValidity()){ 
  // 字段有效，继续
} else {
  // 字段无效
}

if(document.forms[0].checkValidity()){ 
  // 表单有效，继续
} else {
  // 表单无效
}
```

6. 禁用验证

```html
<form method="post" action="/signup" novalidate> 
  <!-- 表单元素 -->
</form>

<!-- 如果一个表单中有多个提交按钮 -->
<form method="post" action="/foo"> 
  <!-- 表单元素 -->
  <input type="submit" value="Regular Submit">
  <input type="submit" formnovalidate 
         name="btnNoValidate" value="Non-validating Submit">
</form>
```

## 表单序列化

```js
function serialize(form) {
  let parts = []
  let optValue
  for (let field of form.elements) {
    switch (field.type) {
      case 'select-one':
      case 'select-multiple':
        if (field.name.length) {
          for (let option of field.options) {
            if (option.selected) {
              if (option.hasAttribute) {
                optValue = option.hasAttribute('value') ? option.value : option.text
              } else {
                optValue = option.attributes['value'].specified ? option.value : option.text
              }
              parts.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(optValue))
            }
          }
        }
        break

      case undefined: // 字段集
      case 'file': // 文件输入
      case 'submit': // 提交按钮
      case 'reset': // 重置按钮
      case 'button': // 自定义按钮
        break

      case 'radio': // 单选按钮
      case 'checkbox': // 复选框
        if (!field.checked) {
          break
        }

      default:
        // 不包含没有名字的表单字段
        if (field.name.length) {
          parts.push(`${encodeURIComponent(field.name)}=${encodeURIComponent(field.value)}`)
        }
    }
    return parts.join('&')
  }
}
```

