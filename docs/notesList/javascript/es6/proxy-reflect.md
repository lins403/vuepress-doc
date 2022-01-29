# 代理与反射

ECMAScript 6 新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力

`Proxy` 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

## 代理Proxy

代理是目标对象的抽象。它可以用作目标对象的替身，但又完全独立于目标对象。

目标对象既可以直接被操作，也可以通过代理来操作， 但直接操作会绕过代理施予的行为。

### 创建代理

`Proxy`对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

```js
/* Proxy(target, handler) */

// 无操作转发代理
const target = {};
const p = new Proxy(target, {});
p.a = 37;   // 操作转发到target
console.log(target.a);	//37
target.a=20	//20
console.log(p.a)	//20
```

### 定义捕获器trap

```js
// 原生定义一个 get() 捕获器
const target = {
  foo: 'bar'
};
const handler = {
  // 捕获器在处理程序对象中以方法名为键
  get(obj, prop) {
    return prop in obj ? obj[prop] :'handler override';
  }
};
const proxy = new Proxy(target, handler);
proxy.a	//'handler override'
proxy.foo	//'bar'
proxy['foo']	//'bar'
Object.create(proxy)['foo']	//'bar'
```

```js
// 使用 Reflect 的API定义一个 get() 捕获器
const target = {
  foo: 'bar'
};
const handler = {
  // 可以简写
  // get: Reflect.get
  get() {
    return Reflect.get(...arguments);
  } 
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);   // bar
console.log(target.foo);  // bar
```

### 捕获器不变式

如果目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的值时，会抛出 TypeError

```js
const target = {};
Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar'
});
const handler = {
  get(){
    return 'qux';
  };
}
const proxy = new Proxy(target, handler);
console.log(proxy.foo);	// TypeError
```



### 可撤销代理 revocable()

```js
const target = {
  foo: 'bar'
};
const handler = {
  get() {
    return 'intercepted';
  }
};
const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy.foo);   // intercepted
revoke();
console.log(proxy.foo);   // TypeError
```

### 代理的问题与不足

1. 代理中的 **this**

   目标对象 target 内部中调用 this.innerMethod()，实际上都会调用 proxy.innerMethod()，因此如果target依赖于对象标识，那就可能碰到意料之外的问题

   ```js
   const target = { 
     thisValEqualsProxy() {
       return this === proxy;
     }
   }
   const proxy = new Proxy(target, {});
   console.log(target.thisValEqualsProxy());  // false
   console.log(proxy.thisValEqualsProxy());   // true
   ```

   ```js
   // 一个例子：使用代理另一个代理，来解决WeakMap中键弱引用，proxy没法获取到的问题
   const UserClassProxy = new Proxy(User, {});
   const proxyUser = new UserClassProxy(456);
   console.log(proxyUser.id);
   ```

2. 代理与内部槽位

   ```js
   // Date类型方法的执行依赖 this 值上的内部槽位[[NumberDate]]，代理对象上不存在这个内部槽位
   const target = new Date();
   const proxy = new Proxy(target, {});
   console.log(proxy instanceof Date);  // true
   proxy.getDate();  // TypeError: 'this' is not a Date object
   ```

   

## 反射Reflect

handler中所有可以捕获的方法都有对应的反射(Reflect) API 方法

### 方法

Reflect与Object的差异：[Comparing Reflect and Object methods - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)

| 操作符                | 捕获器                                      | 对应的反射 API        |
| --------------------- | ------------------------------------------- | --------------------- |
| `in`                  | has(target, property)                       | `Reflect.has()`       |
| apply、call、直接调用 | apply(target, thisArg, ...argumentsList)    | `Reflect.apply()`     |
| `new`                 | construct(target, argumentsList, newTarget) | `Reflect.construct()` |



## 应用

- 跟踪属性访问
- 隐藏属性
- 阻止修改或删除属性
- 函数参数验证
- 构造函数参数验证
- 数据绑定
- 可观察对象