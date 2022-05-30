# Mock

## public API

[Reqres - A hosted REST-API ready to respond to your AJAX requests](https://reqres.in/)

示例

```js
const fetchUsers = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    console.log(json.data);
  } catch (err) {
    console.error(err);
  }
};
```

## mockjs

https://juejin.cn/post/6898865634982297613#heading-2
