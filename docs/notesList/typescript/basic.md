# 基础

## 声明空间

declarationspaces

- 类型声明空间
- 变量声明空间

```tsx
export type { default as Param } from './Param';
```

## let 和 const

```ts
const foo = 123	// const foo:123
let bar = 321		// let bar:number
let bar = 321 as const	// let bar:321

let obj = {foo:'bar'} as const 	// readonly..
```

## unknown和any

为了解决 `any`类型太宽松带来的问题，TypeScript 3.0 引入了 `unknown` 类型

- 任何类型的值都可以赋值给`any`，同时`any`类型的值也可以赋值给任何类型（`never`除外）。
- 任何类型的值都可以赋值给`unknown`，但`unknown`类型的值只能赋值给`unknown`和`any`

## interface

- 声明函数

  - ```ts
    interface getFun{
        (key: string): boolean
    }
    let getName:getFun = (name)=>{
        return !!name
    }
    ```

- 与数组结合使用

  - ```ts
    interface UserInterface {
        name: string,
        age: number
    }
    const users: UserInterface[] = [{name:'',age:1}];
    ```

- 作为接口使用，implements实现

  - ```ts
    interface Animal{
      getLegs: ()=>number
    }
    class Dog implements Animal{
      getLegs(){
        return 4
      }
    }
    class Duck implements Animal{
      getLegs(){
        return 2
      }
    }
    
    function getLegsByType(type:string):number{
      let animal:Animal
      if(type==='Dog'){
        animal = new Dog()
      }else{
        animal = new Duck()
      }
      return animal.getLegs()
    }
    ```


- 使用extends来拓展



### interface和type

接口interface可以定义多次，会将同名接口声明进行合并；

类型别名type不可以定义多次，不过可以使用&或|来进行合并

type可以定义其它数据类型，如字符串、元祖、联合类型等，而interface不能

```ts
interface Person {
  name: string;
  age: number;
}
interface NewPerson extends Person {
  sex: string;
}

type NewPerson = Person & {sex: string}
```

混用

```ts
type Admin = {
    role: string
}
interface User extends Admin {
    name: string
}
let u:User = {
    name:'',
    role:''
}
```

implements

```ts
type Member = {
    name: string
}

class User implements Member {
    name: string = 'user'
}

class Admin implements Member {
    name: string = 'admin'
}
```

## 泛型

```
function identity <T>(value:T): T {
    return value
}
```

`T`代表`Type`，在定义泛型时通常用作第一个类型变量名称，`T`并不是固定语法，可以用任何有效名称代替。还有一些常见的泛型变量名：

- K（Key）：表示对象中的键类型
- V（Value）：表示对象中的值类型
- E（Element）：表示元素类型

泛型变量也可以定义多个

默认参数

```ts
const calcArray = <T = string,>(data:T):T[] => {
  let list:T[] = []
  for(let i = 0; i < 3; i++){
    list.push(data)
  }
  return list
}
```

### 泛型和extends

```ts
interface ArgType {	//type也可以
  size: number;
}

function fn<T extends ArgType>(arg: T): T {
  console.log(arg.size);
  return arg;
}
```

extends泛型约束

## 类

### 私有字段

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



## 类型工具

类型守卫

- typeof、in、instanceof、is

### keyof

keyof 用来获取<u>某种类型</u>的所有键

```js
const foo = {a:1, b:'hello'}
type Foo = typeof foo
type Obj = {
  	// [k in keyof typeof foo]: string;
    [k in keyof Foo]: string;
}
const bar:Obj = {
    a: 'q',
    b: 'a'
}
```

```ts
function fn(obj: object, key: string) {
  return obj[key];
}

function fn(obj: object, key: string) {
  return (obj as any)[key];
}

function fn<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```



### in

`in`用来遍历枚举类型

```ts
type Keys = 'x' | 'y' | 'z';

type Obj = {
  [k in Keys]: string;
} 
//
type Obj = {
  x: string;
  y: string;
  z: string;
}
```

```ts
type Required<T> = {
  [K in keyof T]-?: T[K];
}
```



### Record

`Record<K extends keyof any, T>`将 K 中所有属性的值转化为 T 类型。

```ts
interface PersonInfo {
    name: string;
}

type Person = 'zxy' | 'ldh' | 'zgr';

const ny: Record<Person, PersonInfo> = {
    zxy: {name: '张学友'},
    ldh: {name: '刘德华'},
    zgr: {name: '张国荣'},
}
```



### infer

`infer`用于提取函数返回值的类型。

- infer 只能在 extends 中使用
- infer 的类型变量，只能在 extends 条件的 true 中使用

下面使用 infer 推断属性值类型

```TypeScript
type HD = { name: string, age: number }

type AttrType<T> = T extends { name: infer M, age: infer M } ? M : T

type valueType = AttrType<HD> //string | number
```

下面使用 infer 获取值类型

```ts
type USER = { name: string, age: number, get(a: string): void }

type GetType<T> = {
  [K in keyof T]: T[K] extends (infer U) ? U : K
}[keyof T]

type valueType = GetType<USER>;
```

下面是获取函数返回值类型

```ts
type HD = (n: string) => number[]

type GetFunctionReturnValue<T> = T extends ((...args: any) => (infer U)[]) ? U : T


type valueType = GetFunctionReturnValue<HD>;
```



### ReturnType

`ReturnType`用来获取一个函数的返回值类型。

```ts
type Fn = (v: string) => number;
type Fun<T> = T extends () => infer R? R: any;
let y:Fun<Fn> = 1
```



## 其它

断言（类型断言、非空断言、确定赋值断言 as const）

!非空断言，非null和非undefined

可以用鸭子类型的方法来绕开多余的类型检查

enum枚举类型可以同时包含字符串和数字

类型合并时有时会出现never，比如string&number

类中变量的三种修饰符，public都可以；protected只能在类和子类中使用，外部不能调用；private只能在类中使用

解构赋值

```ts
let arr: [number, ...string[]];
arr = [1,'hello']
```

