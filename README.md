# 博客地址

<https://lins403.github.io/vuepress-doc/>

# 搭建与部署

>  [官方指南](https://vuepress.vuejs.org/zh/guide/)
> 
> [跟着这篇文章做完，你就会搭建个人博客了！](https://www.jianshu.com/p/6e8c608f24c8)

## 本地部署

```sh
# deploy.sh
#!/usr/bin/env sh
set -e
npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lins403/vuepress-doc.git master:gh-pages
cd -
rm -rf docs/.vuepress/dist
```

## github actions

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2 
        with:
          persist-credentials: false

      - name: Install and Build 🔧
        run: |
          npm install
          npm run build
        env:
          CI: false

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist
```

# 配置

> [默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

```js
// docs/.vuepress/config.js
module.exports = {
    base: '/vuepress-doc/',
    title: '小眯嘻的文档博客',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/config/favicon.png' }]
      ],
    themeConfig: {
        repo: 'https://github.com/lins403/vuepress-doc',
        repoLabel: 'GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'HelloWorld', link: '/blog/HelloWorld.md' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
    }
  }
```

# 技巧

## 写作规范

<https://github.com/ruanyf/document-style-guide>

## 英文单词左右空格

vscode > 替换 > 在选定内容中查找

```js
// 正则 (半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格)
\b([a-zA-Z]+)\b([^\s\.a-zA-Z])
// \b(\w+)\b(\W)                
// 替换值
 $1 $2
```

```js
\b([a-zA-Z]+)\b ([%，；、。！？【】])
$1$2
```
