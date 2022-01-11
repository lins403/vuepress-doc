# Linux

## 专业术语

### POSIX

 (Portable Operating System Interface，可移植操作系统接口) 是IEEE为要在各种 UNIX 操作系统上运行软件，而定义API的一系列互相关联的标准的总称。

有了这个规范，你就可以调用通用的API了，Linux提供的POSIX系统调用在Unix上也能执行，因此学习Linux的底层接口最好就是理解POSIX标准。（Unix、Linux、macOS是Unix-based的；Windows开始部分支持标准）

```js
// nodejs
path.posix
```

[Windows 与 POSIX 的对比 | Node.js API 文档](http://nodejs.cn/api-v14/path.html#windows-vs-posix)

### 文件操作

- 系统调用（system call）
  - 面向底层硬件，是为了方便使用操作系统的接口
- 库函数调用（Library functions）
  - 面向应用开发
  - 一类是C语言标准规定的库函数，一类是编译器特定的库函数。
  - 库函数调用与系统无关，不同的系统，调用库函数，库函数会调用不同的底层函数实现，因此**可移植性**好。

## Vim

### 快捷键

| 光标移动 |           | 插入/删除 |                   |
| ---- | --------- | ----- | ----------------- |
| `0`  | 移动光标至本行开头 | `d0`  | 删至行首              |
| `$`  | 移动光标至本行末尾 | `d$`  | 删至行末              |
| `w`  | 向前移动一个词   | `dw`  | 删除一个词             |
| `5w` | 向前移动五个词   | `A`   | 在行末插入文本           |
| `b`  | 向后移动一个词   | `o`   | （小写字母 o）在光标下方新开一行 |
| `5b` | 向后移动五个词   | `O`   | （大写字母 O）在光标上方新开一行 |
| `G`  | 移动至文件末尾   | `dG`  | 删至文件末尾            |
| `gg` | 移动至文件开头   | `dgg` | 删至文件开头            |

| 搜索替换                          |                                  |
| ----------------------------- | -------------------------------- |
| `/search_text`                | 在文档后面的部分搜索                       |
| `?search_text`                | 在文档前面的部分搜索                       |
| `n`                           | 移动到后一个检索结果                       |
| `N`                           | 移动到前一个检索结果                       |
| `:%s/original/replacement`    | 第一个 “original” 替换为 “replacement” |
| `:%s/original/replacement/g`  | 所有的 “original” 替换为 “replacement” |
| `:%s/original/replacement/gc` | 替换前先询问是否替换                       |

| 编辑            |                      |
| ------------- | -------------------- |
| `u`           | 撤销最后的操作              |
| `Ctrl+r`      | 重做最后撤销的操作            |
| `:w new_name` | 用 new_name 作为文件名保存文件 |

[技术|Vim 快捷键速查表](https://linux.cn/article-8144-1.html)

