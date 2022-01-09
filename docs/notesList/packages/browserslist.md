# browserslist

指定了项目的 <u>目标浏览器的范围</u> 和 <u>Node.js的版本</u>，用在：

- Autoprefixer
- @babel/preset-env
- ...

## 配置

定义方式（二选一）

- `.browserslistrc` 
- `package.json` 文件里的 `browserslist` 字段 (recommended)

常规配置

```json
"browserslist": [
  // browsers versions selected by global usage statistics. 
  "> 1%",
  // the last 2 versions for each browser.
  "last 2 versions",
  // exclude IE lower than 11 from previous queries.(Vue supports not ie <= 8)
  "not ie < 11"
  // "last 1 versions","ie 11"
],
```

```
> 1%
last 2 versions
not ie < 11
```

配置方法：[GitHub - browserslist/browserslist](https://github.com/browserslist/browserslist)



## 命令行

```bash
# 查看过滤结果
npx browserslist

# 根据条件筛选
npx browserslist "last 1 version, >1%"
```



## 数据源

- [browsersl.ist/](https://browsersl.ist/)
- [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)



## 参考配置

```json
{
    "browserslist": {
    "development": [
      "chrome 92-96"
    ],
    "production": [
      "> 1%",
      "last 2 versions",
      "not ie < 11"
    ],
    "ssr": [
      "node 12"
    ]
  },
}
```

> 在生产环境构建中，Vue CLI 会优化 CSS 并基于目标浏览器抛弃不必要的浏览器前缀规则。因为默认开启了 `autoprefixer`，你只使用无前缀的 CSS 规则即可。



## 更新数据源

更新 `caniuse-lite` 依赖

```bash
npx browserslist@latest --update-db
```

```bash
output case:
	$ npm install caniuse-lite
  caniuse-lite has been successfully updated
  Target browser changes:
  - and_ff 94
  + and_ff 95
  + chrome 97
  - edge 95
  + edge 97
  - firefox 91
  - opera 80
  - safari 15
```

