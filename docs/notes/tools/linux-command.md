# Linux常用命令

## 类型一：文件管理

### find

| options     | 功能                |
| ----------- | ------------------- |
| -name name  | 按名称查找          |
| -iname name | 忽略大小写          |
| -size n     | 按大小查找          |
| -type c     | 按类型查找          |
| -ctime n    | 按更新时间（n天）   |
| -cmin n     | 按更新时间（n分钟） |
| -atime n    | 按访问时间（天）    |
| -amin n     | 按访问时间（分钟）  |

```bash
# 后缀为 .conf 的文件
find . -name "*.conf"

# 反向查找
find /etc ! -name "*.txt"

# 所有子目录
find . -type d

# 子目录所有文件
find . -type f

# /etc目录下大于1M的文件
find /etc -size +1M
```

### echo

```bash
# 输出字符串
echo "It is a test"

# -e 开启转义
echo -e "OK! \n"

# 单引号，raw，原样输出
echo '$name\"'

# 输出至文件
echo "It is a test" > myfile
```

### read

#### 读取键盘输入

```shell
#!/bin/bash

echo "输入网站名: "   
read website  #读取从键盘的输入 
echo "你输入的网站名是 $website"  
exit 0
```

```bash
# -p使用提示语
read -p "输入网站名:" website
echo "你输入的网站名是 $website" 
```

```bash
# -s隐藏输入显示
read  -s  -p "请输入您的密码:" pass
echo "\n您输入的密码是 $pass"
```

#### 读取文件

```shell
#!/bin/bash
  
count=1    # 赋值语句，不加空格
cat test.txt | while read line      # cat 命令的输出作为read命令的输入,read读到>的值放在line中
do
   echo "Line $count:$line"
   count=$[ $count + 1 ]          # 注意中括号中的空格。
done
echo "finish"
exit 0
```

### cp 与 scp

```bash
# 递归复制文件和目录
cp -R dir1 dir2/
```



### 查看文件

| 命令 | 功能                                           | 常用                                          |
| ---- | ---------------------------------------------- | --------------------------------------------- |
| cat  | 在终端设备上显示文件内容                       | 显示行号： `cat -n <file>`                    |
| head | 默认10行                                       | 查看前3行内容：`head -n 3 <file>`             |
| tail | 默认10行，常用于实时打印日志文件内容           | 跟踪文件并显示尾部内容：`tail -f notes.log`   |
| more | 只能向前浏览                                   | 显示之前先清屏：`more -dc file`               |
| less | 允许用户向前(`空格/回车/d`)或向后浏览(`b/y/u`) | 通过less分页显示进程信息：`ps -ef|less`       |
| grep | 搜索文本内容                                   | 搜索指定进程信息：`ps -ef|grep <processname>` |

### less

```shell
# 作为管道使用
history |less
ps -ef |less
```

```shell
# 显示行号
less -N default.conf

# 显示百分比
less -m default.conf
```

```shell
# 同时查看多个文件
less <file1> <file2>

# 浏览file1时打开file2
less <file1>
:E <file2>
# 用 :n 和 :p 来回切换
```

### grep

```bash
# 列举 /etc 目录中的文件名以 pass 开头的文件
ls /etc | grep pass*

# 使用正则表达式
grep –e "\w" file

# 在多级目录中对文本递归搜索(例如用于搜代码）:
grep "class" . -R -n

# 忽略大小写
echo "hello world" | grep -i "HELLO"

# 匹配多个模式:
grep -e "class" -e "vitural" file

# 只在目录中所有的.php和.html文件中递归搜索字符"main()"
grep "main()" . -r --include *.{php,html}

# 在搜索结果中排除所有README文件
grep "main()" . -r --exclude "README"

# 在搜索结果中排除filelist文件列表里的文件
grep "main()" . -r --exclude-from filelist
```



## 类型二：进程管理

### ps

```bash
# 查找指定进程
$ ps -ef | grep <process_name>

# 以树状图显示所有进程
$ pstree

# 突出在运行中的进程
pstree -apnh
```

### kill

| -    | -    | 功能                                                    |
| ---- | ---- | ------------------------------------------------------- |
| 1    | HUP  | 重新加载进程                                            |
| 9    | KILL | 杀死一个进程( 表示无条件退出，但由进程自行决定是否退出) |
| 15   | TERM | 正常停止一个进程                                        |

```bash
kill -KILL <pid>
kill -9 <pid>
# 不能用于终止系统进程和守护进程
```

```bash
kill -9 $(ps -ef | grep nginx)
kill -u nginx
```



## 类型三：系统管理





## 类型四：文件传输下载

### wget

文件下载

```shell
wget http://www.Linuxcool.com/testfile.zip
-c,  --continue        # 断点续传
-b,  --background        # 后台下载
```

### curl

文件传输工具

```shell
curl -o response.txt https://catonmat.net        # -o参数将服务器的回应保存成文件，等同于wget命令
curl -O https://www.example.com/foo/bar.html        # -O参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名
curl -X POST https://catonmat.net        # -X参数指定 HTTP 请求的方法
curl -I -XHEAD http://www.baidu.com
```

- [Curl Cookbook](https://catonmat.net/cookbooks/curl)

### zip

```shell
zip -r build.zip ./build
```

