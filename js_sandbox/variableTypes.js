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
