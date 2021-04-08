/*
# JS에는 2가지 타입의 데이터가 있다 
## Primitive Data Type
 - String
 - Number
 - Boolean
 - Null
 - Undefined
 - Symbols (ES6)

## Reference Data Type
 - Arrays
 - Object Literals
 - Functions
 - Dates
 - Anything Else
*/

// String
const name = 'John Doe';
const age = 45;
const hasKids = true;
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car); // object로 나오는데 null이다
console.log(typeof test);
console.log(typeof sym);

// Reference types - objects
// array
const hobbies = ['movies', 'music']
// object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();


console.log(typeof hobbies);
console.log(typeof address);
console.log(today);
console.log(typeof today);

// Numbers & Math Objects
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers 
val = num1 + num2;
console.log(val)

val = num1 - num2;
console.log(val)

val = num1 * num2;
console.log(val)

val = num1 / num2;
console.log(val)

val = num1 % num2;
console.log(val)

// Math Object
val = Math.PI;
console.log(val)

val = Math.E;
console.log(val)

// 반올림
val = Math.round(2.4);
console.log(val)

// 올림
val = Math.ceil(2.4);
console.log(val)

// 내림 
val = Math.floor(2.4);
console.log(val)

val = Math.sqrt(64);
console.log(val)

val = Math.abs(-4);
console.log(val)

val = Math.pow(4, 2);
console.log(val)

val = Math.min(2, 33, 4, 51, 2, 1, -2);
console.log(val)

val = Math.max(2, 33, 4, 51, 2, 1, -2);
console.log(val)

// random 0 - 1
val = Math.random();
console.log(val)

// 0-19
val = Math.random() * 20;
console.log(val)

// 1-20
val = Math.random() * 20 + 1;
console.log(val)

// 1-20
val = Math.floor(Math.random() * 20 + 1) ;
console.log(val)