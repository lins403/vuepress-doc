# JavaScript引擎

https://juejin.cn/post/7062645899956060174

## JS引擎

### JIT

JIT, Just In Time Compilation，即时编译，在运行时编译成机器代码。

对应的是AOT，Ahead Of Time Compilation，提前编译，运行前编译

## V8

优化后的V8引擎(版本5.9起)

1. 语法分析-语法分析结果AST
2. 解释执行-回收AST空间
3. 性能分析
   - 热点函数-持久化为机器码
   - 非热点函数-~~回退到AST~~-由解释器执行

<img src="https://pic3.zhimg.com/80/v2-4c123fa841100bbf4adf8af8923337ce_1440w.jpg" style="zoom:50%;" />

### 核心模块

- 解析器Parser
  - 词法分析和语法分析将JavaScript源码**解析**为AST
- 解释器 Ignition
  - 将 AST **解释**生成字节码并**执行**，这个过程中会收集优化编译所需要的执行反馈信息，交给 TurboFan 进行优化编译。
  - 字节码是跨平台的一种中间表示，可以运行在不同的操作系统上。然后AST会被清除以释放内存空间。
- 优化编译器TurboFan
  - 根据 Ignition 收集的反馈信息，将字节码编译为优化后的机器码，后续 Ignition 用优化机器码代替字节码执行，进而提升性能。
  - 根据相应的平台编译生成适配的机器码，其实是汇编代码
  - JIT即时编译，通过JIT可以极大提升JavaScript代码的执行性能。

![](https://pic3.zhimg.com/80/v2-d8777e18234367f87c7e7da34f607e86_1440w.jpg)

### 优化策略

首先第一步的解析中，如果函数只被声明但未调用执行，则不会被生成AST。

第二步的interpreter中，如果函数只被执行一次，则会在字节码阶段直接被解释执行。如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能。例如由于JavaScript是弱类型，所以V8会帮忙推断数据类型。

如果 Ignition 收集的信息可能是错误的，那这个优化后的机器码就会被反编译成bytecode，然后重新再编译成正确的机器码。

好处：

1. 由于一开始不需要直接编译成机器码，生成了中间层的字节码，从而节约了时间
2. 优化编译阶段，不需要从源码重新解析，直接通过字节码进行优化，也可以deoptimization回退操作

### 其它

V8 本质上是一个虚拟机，V8 也是早于其他虚拟机引入了惰性编译、内联缓存、隐藏类等机制，进一步优化了 JavaScript 代码的编译执行效率。

## Event Loop

## QuickJS

[QuickJS Javascript Engine](https://github.com/bellard/quickjs)

# 参考

[浅谈V8脚本引擎的工作原理（三.V8核心模块：解析器，解释器，优化编译器）](https://juejin.cn/post/7062645899956060174)

[JavaScript深入浅出第4课：V8引擎是如何工作的？](https://juejin.cn/post/6844903890295455758)

[浏览器是如何工作的：Chrome V8让你更懂JavaScript](https://zhuanlan.zhihu.com/p/266708344)
