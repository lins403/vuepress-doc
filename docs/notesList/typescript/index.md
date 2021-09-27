# 扫盲

[TypeScript playground](https://www.typescriptlang.org/zh/play)

## 从JavaScript快速上手

### Types by Inference

```typescript
let a = 1
a = '123'
// Type 'string' is not assignable to type 'number'.
```

### Composing Types

- Union

- Generic泛型

```typescript
let a: string|number
a = 123

let arr: Array<number>
arr = [1, '']
// Type 'string' is not assignable to type 'number'.
```

### Structural Type System

a.k.a.  "duck typing" or "structural typing"

```typescript
interface Person{
    name: string,
    age: number,
}

let p: Person = {
    name: 'one',
    age: 18
}

class Man{
   name: string
   age: number
   constructor(name:string, age:number){
       this.name = name
       this.age = age
   }
}

const lisi:Man = new Man('lisi', 25)
const zhangsan:Person = new Man('zhangsan', 20)		// no errors
```



## 基础用法

### 对象

```typescript
interface Person{
    name: string,
    age?: number,
    [anyName: string]: string
    // [anyName: string]: string|number 也是错的
}
// Property 'age' of type 'number | undefined' is not assignable to 'string' index type 'string'.
// ----------------------------
interface Person{
    name: string,
    age?: number,
    [anyName: string]: any	// 或者 number|undefined|string
}

let p1: Person = {
    name:'zhangsan',
    gender: 'male'
}

interface Person{
    name: string,
    readonly age: number
}
```

### 数组



# 参考

[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

