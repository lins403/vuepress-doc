# JavaScript基础

ECMAScript 和 JavaScript，前者是后者的规范，后者是前者的实现，类似于Unicode和UTF系列的关系

#### typeof为什么对null错误的显示

因为JS最初是在32位的操作系统上运行（小端模式？），为了性能考虑，使用的是低位存储变量的类型信息，000代表的是对象，但是null是全0，所以也会被 typeof 当作 object 类型。

#### typeof('abc')和 typeof 'abc'都是 string, 那么 typeof 是操作符还是函数？

`typeof(typeof)` 会抛出错误，如果typeof是函数则理应返回function。

所以括号只是用来分组，typeof是操作符，而不是个函数。

#### 查询某个对象是否有某个属性的方法

属性的分类

- 自身的可枚举属性、不可枚举属性、Symbol 键
- 继承的可枚举属性、不可枚举属性、Symbol 键

`obj.key` 直接用属性判断是否为undefined

`in` 操作符可以判断以上情况的全部属性

`for...in` 遍历自身的和继承的可枚举属性，不包含symbol键

`Object.keys` 仅包含自身的可枚举属性，不包含symbol键

`Object.getOwnPropertyNames` 包含自身的可枚举属性与不可枚举属性（除symbol键外的所有自身属性）

`obj.hasOwnProperty()` 和 `Object.hasOwn()` 用于判断所有的自身属性，包含symbol键

`obj.propertyIsEnumerable()` 用于判断自身的可枚举属性和symbol键

[属性的可枚举性和所有权](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#%E7%BB%9F%E8%AE%A1%E8%A1%A8)

