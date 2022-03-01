# let 和 const

使用let和const声明的变量，叫块级作用域变量

浏览器控制台下直接测试结果可能不一样，会带来歧义，最好利用nodejs或者codepen测试

```js
console.log(a);
console.log(b);
var a = 'a';		// undefined
let b = 'b';		// ReferenceError: Cannot access 'age' before initialization
```

```js
function sayHello() {
  console.log(name);		// undefined
  console.log(age);		// ReferenceError: Cannot access 'age' before initialization
  var name = "Tom";
  let age = 18;
} 
sayHello();
```

```js
for (var i = 0; i < 3; i++) {
  setTimeout(_ => {
    console.log(i)
  })
}

for (let i = 0; i < 3; i++) {
  setTimeout(_ => {
    console.log(i)
  })
}
```

```js
const a = 10
function runFunction() {
  const a = 20
  console.log('inside', a)
}
runFunction()
console.log('outside', a)
// SyntaxError: Identifier 'a' has already been declared
```

```js
'use strict'
var name = 'Jay'
var person = {
  name: 'Wang',
  pro: {
    name: 'Michael',
    getName: function () {
      return this.name
    }
  }
}
console.log(person.pro.getName())	//Michael
var people = person.pro.getName
console.log(people())		//TypeError: Cannot read property 'name' of undefined
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
<script>
  var elements = document.getElementsByTagName("li");
  for (var i=0;i<elements.length;i++){
    elements[i].onclick =function( ){
    alert(i); 
    };
}
</script>
```

