# Mac 操作

## 常规快捷键

| 操作        | 快捷键                |
| --------- | ------------------ |
| 打开应用的偏好设置 | Command-逗号 (,)     |
| emoji     | Control-Command-空格 |
| finder    | Option-Command-空格  |
| 全屏        | Control-Command-F  |
| 锁定屏幕🖥    | Control-Command-Q  |
|           | Control–电源按钮       |

## 终端命令行

| 操作         | 快捷键                                  |
| ---------- |:------------------------------------ |
| 重新定位插入点    | 在按住 Option 键的同时将指针移到新的插入点【iterm2不可用】 |
| 将插入点移到行的开头 | Control-A                            |
| 将插入点移到行的结尾 | Control-E                            |
| 删除行        | Control-U                            |
| 删除到行的结尾    | Control-K                            |
| 清屏         | Control-L 【iterm2中还可用 Command-R】     |

[《终端使用手册》#键盘快捷键](https://support.apple.com/zh-cn/guide/terminal/welcome/mac)

## 文件操作

| 操作         | 快捷键                                 |
| ---------- | ----------------------------------- |
| 移动文件       | 先 `Command+C` ，再 `Option+Command+V` |
| 获取当前文件路径   | 选中文件 `Option+Command+C`，            |
| 更改文件默认打开方式 | 右键=>显示简介=>打开方式设置应用，点击全部更改           |
|            |                                     |

## Homebrew

brew update 无响应

```shell
# 更换Git源（不推荐）
cd "$(brew --repo)"
# ls -all
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
# vi .git/config

$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
```

```shell
brew doctor
```

## 环境变量

```shell
vi /etc/paths            #系统启动就会加载
vi ~/.bash_profile        #当前用户级别的环境变量
vi ~/.bashrc            #bash shell打开的时候载入的

source <filename>
```

## 软件&工具

屏保：[ Google Trends](https://trends.google.com/trends/hottrends/visualize?nrow=5&ncol=5)

ins风格静态壁纸：[par.er](http://paper.meiyuan.in/)

视频播放软件 IINA：`brew cask install iina`

终端 iTerm2：`brew cask install iterm2`

zsh：[Oh My Zsh](https://ohmyz.sh/)

终端目录生成🌲：`brew install tree`

- `tree --help`
- `tree -I node_modules`
- `tree -L 1`

安装运行windows软件：[Wine](https://wiki.winehq.org/MacOS)  [CrossOver | CodeWeavers](https://www.codeweavers.com/crossover#mac)

录制gif：[Cockos Incorporated | LICEcap](https://www.cockos.com/licecap/)

屏幕显示按键：[KeyCastr, an open-source keystroke visualizer](https://github.com/keycastr/keycastr)

视频解析：`brew install ffmpeg` [音视频 | Mac安装 FFmpeg](https://juejin.cn/post/6862577150420058126)

```shell
# ffmpeg添加软字幕
ffmpeg -i demo.mp4 -i demo_subtitle.srt -c copy output.mp4
```

离线开发文档：[Dash](https://kapeli.com/dash)

## 其它

### 远程

```shell
ssh -p 22 root@101.132.124.236 
```

## 技巧

### 特殊符号

| 符号                  |                                                        |
| ------------------- | ------------------------------------------------------ |
| `...`               | `Option ;`                                             |
| `≥` `≤` `≠` `≈`     | `Option .`    `Option ,` `Option =` `Option x`         |
| `∞` `«` `»`         | `Option 5` `Option \` `Shift Option \`                 |
| `÷` `˚` `π` `√` `∑` | `Option /` `Option k` `Option p` `Option v` `Option w` |
| `“` `¥`             | `Option [` `Option y`                                  |
| `∂`  `ß`  `∆`  `µ`  | `Option d` `Option s`  `Option j` `Option m`           |
| `®` `©` `™`         | `Option r` `Option g` `Option 2`                       |
| `±`  `—`            | `Shift Option =`  `Shift Option -`                     |
| `‰`                 | `Shift Option r`                                       |
| `` `¿`             | `Shift Option k` `Shift Option /`                      |

### Mac右键菜单

#### google搜索

方式一：将Safari的默认搜索引擎改为Google

方式二：应用【自动操作】>>> 选取文稿类型【快速操作】>>>【运行Shell脚本】

```shell
open "http://www.google.com/search?q=$(ruby -rcgi -e 'print CGI.escape $<.read.chomp')"
# 会被添加到右键菜单的【服务】中
```

### Mac 无法打开浏览器下载的应用

> Mac 无法打开“***”，因为无法验证开发者。

在 finder 中打开应用程序，找到对应的应用，右键选择打开

## 相关资源

[GitHub - Louiszhai/tool: 开发效率提升：Mac生产力工具链推荐](https://github.com/Louiszhai/tool)

[GitHub - jaywcjlove/awesome-mac](https://github.com/jaywcjlove/awesome-mac)
