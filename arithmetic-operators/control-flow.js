// comparison operators
// ==, ===, !=, !==, >, <, >=, <=

let num1 = 10;
let num2 = 20;

let isGreater = num1 > num2;
console.log(isGreater);  // false

let isLess = num1 < num2;
console.log(isLess); // true

let isEqual = num1 === num2;
console.log(isEqual);  // false

let isNotEqual = num1 !== num2;
console.log(isNotEqual);  // true

let isGreaterOrEqual = num1 >= num2;
console.log(isGreaterOrEqual);  // false


// == vs === both check for equality, but they treat types differently

// === - Strict equality - checks for equality and type
// Compares value and type. No concersion.
console.log('Strict equality:');
console.log(2 === 2); // true
console.log(2 === '2'); // false
console.log(true === 1); // false
console.log(false === 0) // false

// == - Loose equality - checks for equality, but allows type conversion
// Compares value. Converts types as needed.

console.log('Loose equality:');
console.log(2 == 2); // true
console.log(2 == '2'); // true
console.log(true == 1); // true
console.log(false == 0) // true

// != vs !== both check for inequality, but they treat types differently
// True if value or type differs. No conversion.

console.log('Strict inequality:');
console.log(2 !== 2); // false
console.log(2 !== '2'); // true
console.log(10 !== 20); // true
console.log(10 !== '10'); // true


// != - Loose inequality - checks for inequality, but allows type conversion
// Compares value. Converts types as needed.

console.log('Loose inequality:');
console.log(2 != '2'); // false
console.log(2 != 2); // false