# 基础

### any

### unknown

为了解决 `any`类型太宽松带来的问题，TypeScript 3.0 引入了 `unknown` 类型。

```typescript
// 所有类型也都可以赋值给 `unknown`
let value: unknown;

value = 123; // OK
value = "Hello World"; // OK
value = []; // OK
```

```typescript
// `unknown` 类型只能被赋值给 `any` 类型和 `unknown` 类型本身
let value: unknown;

let v1: unknown = value; // OK
let v2: any = value; // OK
let v3: number = value; // Error
let v4: string = value; // Error

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Error
```

## 私有字段

```TypeScript
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}!`);
  }
}

let semlinker = new Person("Semlinker");

semlinker.#name;
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```