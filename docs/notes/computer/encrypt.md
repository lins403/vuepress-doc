# 数据编码

- AES
- RSA
- MD5
- BASE64
- SM4

BASE64 编码，常用来做转码，把二进制字节序列转化为 ASCII 字符序列。

## 概念词

### 1）陷门函数

Trapdoor Function，Trap door - 暗门，类似于地窖口的门，只能向外一侧打开

一种容易计算函数值而不容易求逆的函数，即解密比加密难

### 2）PKCS

公钥加密标准（Public Key Cryptography Standards, PKCS），此一标准的设计与发布皆由 RSA信息安全公司（RSA Security）所制定。

`PKCS1`(Public-Key Cryptography Standards #1)，定义了RSA 密钥必需的数学特性、公/私钥格式，以及加/解密、签/验章的流程

## 生成随机数

算法加密很大程度上基于随机数生成算法

### Math.random()

`Math.random()` 在浏览器中是以伪随机数生成器 (**PRNG**，PseudoRandom Number Generator)方式实现的。所谓“伪”指的是生成值的过程不是真的随机。PRNG 生成的值只是模拟了随机的特性。浏览器的 PRNG 并未使用真正的随机源，只是对一个内部状态应用了固定的算法。每次调用 Math.random()，这个内部状态都会被一个算法修改，而结果会被转换为一个新的随机值。例如，V8 引擎使用了一个名为 xorshift128+ 的算法来执行这种修改。

由于算法本身是固定的，其输入只是之前的状态，因此随机数顺序也是确定的。xorshift128+使用 128 位内部状态，而算法的设计让任何初始状态在重复自身之前都会产生 2^128–1 个伪随机值。这种循环 被称为置换循环(permutation cycle)，而这个循环的长度被称为一个周期(period)。很明显，如果攻击者知道 PRNG 的内部状态，就可以预测后续生成的伪随机值。如果开发者无意中使用 PRNG 生成了私有 密钥用于加密，则攻击者就可以利用 PRNG 的这个特性算出私有密钥。

所以伪随机数生成器主要用于快速计算出看起来随机的值，而并不适合用于加密计算。

### crypto.getRandomValues() 

为解决这个问题，密码学安全伪随机数生成器(**CSPRNG**，Cryptographically Secure PseudoRandom Number Generator) 额外增加了一个熵作为输入，例如测试硬件时间或其他无法预计行为的系统特性。这样一来，计算速度明显比常规 PRNG 慢很多，但 CSPRNG 生成的值就很难预测，可以用于加密了。

Web Cryptography API 引入了 CSPRNG，这个 CSPRNG 可以通过 `crypto.getRandomValues()` 在全局 Crypto 对象上访问。

crypto.getRandomValues() 会把随机值写入作为参数传给它的定型数组

```js
/** 使用 crypto.getRandomValues() 模拟 Math.random() **/
function randomFloat() {
  // 生成 32 位随机值
  const fooArray = new Uint32Array(1);
  // 最大值是2^32 –1
  const maxUint32 = 0xFFFFFFFF;
  // 用最大可能的值来除
  return crypto.getRandomValues(fooArray)[0] / maxUint32;
}
console.log(randomFloat()); // 0.8903489459516362
```



## 密码学摘要

- `SHA-1`(Secure Hash Algorithm 1): 架构类似 MD5 的散列函数。接收任意大小的输入，生成 160 位消息散列。由于容易受到碰撞攻击，这个算法已经不再安全。
-  `SHA-2`(Secure Hash Algorithm 2): 构建于相同耐碰撞单向压缩函数之上的一套散列函数。规范支持其中 3 种: SHA-256、SHA-384 和 SHA-512。生成的消息摘要可以是 256 位(SHA-256)、 384 位(SHA-384)或 512 位(SHA-512)。这个算法被认为是安全的，广泛应用于很多领域和协议，包括 TLS、PGP 和加密货币(如比特币)。

## 加密算法

| 算法名称 | 全称                         | 描述                                                         | 陷门函数                                                     |
| -------- | ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| RSA      | Rivest-Shamir-Adleman        | 公钥密码系统，使用两个大素数获得一对公钥和私钥，<br />可用于签名/验证或加密/解密消息。 | 分解难题(factoring problem)                                  |
| ECC      | Elliptic-Curve Cryptography  | 公钥密码系统，使用一个素数和一个椭圆曲线获得一对公钥和私钥，<br />可用于签名/验证消息。 | 椭圆曲线离散对数问题<br />(elliptic curve discrete logarithm problem) |
| AES      | Advanced Encryption Standard | 对称密钥密码系统                                             |                                                              |



# 参考

《JavaScript高级程序设计（第4版）》20.12 Web Cryptography API