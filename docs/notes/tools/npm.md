# npm

## 命令

`npm outdated`	# 列出所以可以更新的package

`npm install`

```sh
--save		#-S
--save--dev		#-D
--global		#-g
--no-save
--force 	#Recommended protections disabled. overriding peer dependency
```

[npm-install > configuration](https://docs.npmjs.com/cli/v7/commands/npm-install#configuration)

## 技巧

### 更换镜像源

```sh
npm config set registry https://registry.npm.taobao.org/
npm config get registry
npm config set registry https://registry.npmjs.org

# 临时
npm install <package-name> --registry https://registry.npmjs.org
npm outdated --registry https://skimdb.npmjs.com/registry
```



## CDN

### unpkg

<https://unpkg.com/>

```html
<script src="https://unpkg.com/@babel/standalone/babel.js"></script>
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
<div id="root"></div>
<script type="text/babel">
  function Example() {
    return (
      <>
        Some text.
      </>
     );
  }
  ReactDOM.render(<Example />, document.getElementById('root'));
</script>
```



## package

fuse.js 模糊搜索

vue-pdf 基于pdf.js的展示PDF

