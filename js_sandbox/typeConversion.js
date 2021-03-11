let val;

// Number to string
val = String(5555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, ,3, 4, 5, 11]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN(Not a Number)
val = Number([1, 2, 3]); // NaN

val = parseInt('100.30'); // int변환이라 소수점 이하는 무시
val = parseFloat('100.30'); // 100.3

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // string에만 length 사용이 가능하다 
console.log(val.toFixed(2)); // 고정 소수점으로 변환한다. number에만 사용 가능, number type인지 체크위해 사용  


const val1 = 5;
const val2 = 6;
const sum = val1 + val2; // 11

console.log(sum);
console.log(typeof sum);

const val3 = String(5);
const val4 = 6;
// const sum2 = val3 + val4; // 56 >> String으로 취급
const sum2 = Number(val3 + val4); 

console.log(sum2);
console.log(typeof sum2);