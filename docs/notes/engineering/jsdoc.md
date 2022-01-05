# JSDoc

## getting started

```bash
npm install -g jsdoc
```

[JSDoc Guide](http://yuri4ever.github.io/jsdoc/)

[Use JSDoc: Index](https://jsdoc.app/)

[JavaScript之注释规范化（JSDoc）](https://knightyun.github.io/2020/03/13/js-comment-format)

### vscode插件

[Complete JSDoc Tags - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=HookyQR.JSDocTagComplete)



## TODO

- [JSDoc Gulp plugin](https://github.com/mlucool/gulp-jsdoc3)
- [JSDoc GitHub Action](https://github.com/andstor/jsdoc-action)



## demo

[GitHub - bradtraversy/jsdoc-examples: Examples of using JSDoc to document JavaScript](https://github.com/bradtraversy/jsdoc-examples)

### axios拦截器

```js
// 用 typedef 添加一个自定义类型，类似于TypeScript中 interface 的效果
// 把它添加到 global 域，jsdoc下的其它source文件都能直接访问到
/**
 * @global
 * @typedef ResponseData
 * @property {number} code 状态码
 * @property {boolean} success 是否成功
 * @property {any[]|{}} data 承载数据 //可以根据需求进一步限制data中的具体字段
 * @property {string} msg 返回消息
 */
```

```js
/**
 * @func
 * @desc 根据角色分配权限
 * @param {{type}} params 角色参数
 * @param {number} params.type 角色类型（1-帅哥，2-美女）
 * @return {Promise<ResponseData>}
 * @example getAuth({ type: 1 }) // 帅哥
 * @example getAuth({ type: 2 }) // 美女
 */
export function getAuth(params) {
  return request({
    url: '/api/balabala',
    method: 'get',
    params
  })
}
```



```
同类型：@enum {number}
不同类型：@type {{a: string, b: number}}
```



## 补充

- TODO: 写个demo用grunt或gulp集成，再结合CI，实现自动化构建部署api文档
- 用jsdoc会大大加强代码的可阅读性，但它只是一个生成文档的工具，并不能有效实现类型检查，所以结合TypeScript会更完善
- 再有一点是，jsdoc只能有效用于js文件，要增强组件的代码规范和可阅读性，更推荐的是写单元测试，还有个主流工具是storybook，秉承的是组件驱动开发的思想