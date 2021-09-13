console.log('test')

const numbers = [52, 23, 15, 83, 5]
const numbers2 = new Array(22, 53, 4, 34)
const fruit = ['apple', 'orange', 'banana']
const mixed = [22, 'apple', true, undefined, null, {a:1, b:2}, new Date()];

let val;
val = numbers.length;
console.log(numbers)
console.log(val)

// check number is array
val = Array.isArray(numbers)
console.log(val)

val = Array.isArray('String')
console.log(val)

// get single value 
val = numbers[3]
console.log(val)

// array is no immutable
numbers[3] = 1;
console.log(numbers[3]);

// find index of value
val = numbers.indexOf(15)
console.log(val);

// mutate array
// add on to end
numbers.push(77)
console.log(numbers);
// add on to front
numbers.unshift(120)
console.log(numbers);
// take off from end
val = numbers.pop();
console.log(val);
console.log(numbers);

// take off from front 
val = numbers.shift();
console.log(val);
console.log(numbers);

// splice values
numbers.splice(1, 1);
console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);

// reversae
numbers.reverse();
console.log("reverse: " + numbers);

// concat arrays
val = numbers.concat(numbers2)
console.log(val);

// sorting
val = fruit.sort();
console.log(val);

val = numbers2.sort();
console.log(val); // first numbers is sorted

// ascending sort -  use the compare function
val = numbers2.sort(function(x, y) {
    return x - y;
});
console.log(val);

// descending sort -  use the compare function
val = numbers2.sort(function(x, y) {
    return y - x;
});
console.log(val);

// finding
function under50(num) {
    return num < 50;
}
val = numbers2.find(under50);
console.log(val)