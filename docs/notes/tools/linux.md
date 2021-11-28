# Linux

## 命令

类型一(TODO)

#### wget

文件下载

```sh
wget http://www.Linuxcool.com/testfile.zip
-c,  --continue        # 断点续传
-b,  --background        # 后台下载
```

#### curl

文件传输工具

```sh
curl -o response.txt https://catonmat.net        # -o参数将服务器的回应保存成文件，等同于wget命令
curl -O https://www.example.com/foo/bar.html        # -O参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名
curl -X POST https://catonmat.net        # -X参数指定 HTTP 请求的方法
```

- [Curl Cookbook](https://catonmat.net/cookbooks/curl)

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

查表：<https://linux.cn/article-8144-1.html>