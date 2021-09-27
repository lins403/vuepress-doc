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

> 类型之间的对比，只会比较最终的结构，而忽略它们定义时的关系

## 基础

### 对象

```typescript
interface Person{
    name: string,
    age?: number,
    [anyName: string]: string
    // [anyName: string]: string|number 也是错的
}
// Property 'age' of type 'number | undefined' is not assignable to 'string' index type 'string'.
// ---修改---
interface Person{
    name: string,
    age?: number,
    [anyName: string]: number|undefined|string	// 或者any
}

let p1: Person = {
    name:'zhangsan',
    gender: 'male'
}

// readonly
interface Person{
    name: string,
    readonly age: number
}
// 任意属性
interface plainObj {
    [key:string]: any;
}
let obj1:plainObj = {a:1, b:2}
```

### 数组

```typescript
const arr1: number[] = [1,2,]
const arr2: Array<number> = [1,2]

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

### 函数

```TypeScript
// arrow function
var sum = (x:number, y:number):number => x+y
var sum: (x:number, y:number) => number = (x, y) => x+y
var sum: (x:number, y:number) => number = (x:number, y:number):number => x+y

// 可选参数
function fn(x:any, y?:any):any {
    return y||x
}

// rest参数
function func(x:any, ...rest:any[]):void{
}
```

```typescript
// 重载
interface plainObj {
    [key:string]: any;
}
function sort(item: string): string;
function sort(item: Array<any>): Array<any>;
function sort(item: plainObj): plainObj;
function sort(item: string|Array<any>|plainObj): any{
    const type = Object.prototype.toString.call(item).slice(8, -1)
    if(type === 'String'){
        // return [...item].sort().join().replaceAll(',','')
        const split = String.prototype.split.bind(item)
        return split('').sort().join().replace(/,/g, '')
    }else if(type==='Array'){
        return Array.prototype.sort.call(item)
    }else if(type==='Object'){
        return (<any>Object).fromEntries(Object.entries(item).sort())
    }
}
console.log(sort('typescript'))

// 好处，特定参数类型返回对应的参数类型，不会因为union而混淆输出
```

### 类型断言

```TypeScript
// 上面的例子可以改写为
function sort(item: string|Array<any>|plainObj): any{
    const type = Object.prototype.toString.call(item).slice(8, -1)
    if(type === 'String'){
        return [...item as string].sort().join().replaceAll(',','')
    }else if(type==='Array'){
        return (item as Array<any>).sort()
    }else if(type==='Object'){
        return (Object as plainObj).fromEntries(Object.entries(item).sort())
    }
}
```

#### 限制

- 联合类型可以被断言为其中一个类型
- 父类可以被断言为子类
- 任何类型都可以被断言为 any
- any 可以被断言为任何类型
- 要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可

```TypeScript
interface Animal{
    name: string
}
interface Dog{
    name: string,
    run: Function
}
interface Fish{
    name: string,
    swim: Function
}



const p: Animal = {
    name: 'Labrador',
}
console.log((p as Dog).name)
console.log((p as Dog).run)
console.log((p as Fish).swim)

const p1:Dog = {
    name: 'Husky',
    run: ()=>{
        console.log('run~~~')
    }
}
console.log((p1 as Animal).name)
console.log((p1 as Fish).name) // error
```

#### 泛型

```TypeScript
function getName<T>(item:T): string{
    return (item as any).name
}
function getSelf<T>(item:T): T{
    return item
}
console.log(getName<Dog>({
    name: 'Husky',
    run: ()=>{}
}))
```

### 声明文件

一般声明文件后缀为 `.d.ts`

namespace 是 ES moudle 以前的解决方案，是历史遗留方案，但 `declare namespace` 还有应用。

- declare（全局）
- export （npm）
- interface 和 type （声明全局接口或类型）
- export as namespace （UMD）
- declare module （扩展引入的模块）

### 内置对象

- ECMAScript：`Boolean`、`Error`、`Date`、`RegExp` 等
- DOM 和 BOM：`Document`、`HTMLElement`、`Event`、`NodeList` 等

# 参考

[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

[TypeScript 入门教程 > 基础](https://ts.xcatliu.com/basics/index.html)

