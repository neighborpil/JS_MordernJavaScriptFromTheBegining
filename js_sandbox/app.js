// Log to console
/*
  multi
  line
  comments
*/

console.log("Hello world");
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({a: 1, b: 2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.timeEnd('Hello');

/* 변수 */
// var, let, const

// // var
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting1;
// console.log(greeting1);
// greeting1 = 'Hello';
// console.log(greeting1);

// // letters, number, _, $
// // Cannot start with number

// // Multi word vars
// var firstName = 'John'; // Camel case, 보통 변수는 이방식 추천
// var first_name = 'Sara'; // Underscore cas
// var FirstName = 'Tom'; // Pascal case, OOP에서 클래스 이름에 사용 추천 
// var firstname;

// // let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
const name = 'John';
console.log(name);
// Cannot reassign
// name = 'Sara'; // Error: 값을 재선언 하는 것은 안된다 
// Have to assign 
// const greeting; // Error: 선언과 동시에 값을 지정해야 한다 

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara'; // 한번 선언한 const object 변수 내의 값을 바꾸는 것은 가능하다 
person.age = 32;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // const array내의 값을 바꾸는 것은 가능하다 
// numbers = [1, 2, 3, 4 ,5, 6]; // 다시 값을 부여하는 것은 완전히 새로운 배열이라 불가능

console.log(numbers);

