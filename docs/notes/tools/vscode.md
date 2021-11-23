# VSCode



## 配置

### 添加模板文件

Code > 首选项 > 用户片段

```json
// ~/Library/Application Support/Code/User/snippets/vue.json
{
  "Vue Init": {
    "prefix": "vue-lins",
    "body": [
      "<template>",
      "  $2",
      "</template>",
			"",
      "<script>",
      "",
      "export default {",
      "  name: '$1',",
			"  data(){",
			"    return {",
			"      $2",
			"    }",
			"  }",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "",
      "</style>"
    ],
    "description": "lin's vueInit"
  }
}

```

```js
// ~/Library/Application Support/Code/User/snippets/javascript.json
{
	"Print to console": {
    "prefix": "cl",
    "body": ["console.log($1)"],
    "description": "Log output to console"
  },
  "Long comments": {
    "prefix": "br",
    "body": [
      "",
      "//-------------------------------------/* $1 */-------------------------------------", 
      "$2"
    ],
    "description": "Long comments for breaking lines"
  },
  "Eslint disable": {
    "prefix": "ed",
    "body": ["/* eslint-disable */"],
    "description": "Eslint disable block"
  }
}

```



## 插件库

### 主题

- **Material Icon Theme**
- Indent Rainbow
- IntelliJ IDEA Keybindings

### 语言

- **JavaScript (ES6) code snippets**
- **Vetur**
- Vue Peek
- **ES7 React/Redux/GraphQL/React-Native snippets**
- SCSS IntelliSense
- SCSS Everywhere
- SVG
- lit-html ( for html inside of JavaScript and TypeScript tagged template strings )
- Markdown Preview Enhanced



### Git

- **Git Graph**
- Git History
- **GitLens — Git supercharged**
- Annotator



### 代码辅助工具

- npm Intellisense
- Auto Rename Tag
- **Color Highlight**
- Sort lines
- Turbo Console Log
- Path Intellisense
- open in browser
- **Debugger for Chrome**



### 代码规范工具

- EditorConfig for VS Code
- Import Cost
- Version Lens
- **ESLint**
- **Prettier - Code formatter**
- **TSLint**
- **stylelint** (stylelint-plus supports auto fix on save)



### 扩展

- **koroFileHeader**
- Better Comments
- **Window Colors**
- Todo Tree
- Dash
