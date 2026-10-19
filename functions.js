// functions are first class citizens in JavaScript so they can be assigned to variables, passed as arguments to other functions, and returned from other functions
// functions is JavaScript is a resuable block of code that performs a task or calculates a value

// Declaring a function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Calling a function
greet('John');


// Other ways to declare a function
const multiply = function(a, b) {   // function expression
    return a * b;
}

console.log(multiply(2, 3));

// Arrow function
const add =(a, b) => {
    return a + b;
}

console.log(add(2, 3)); // Add 2 + 3 = 5

// Arrow function with a body
const greet1 = (name) => {
   let message = `Hello my name is, ${name}!`
   return message;
}

console.log(greet1('John'));


// Closures
// Closures are functions that have access to the variables of their outer scope
function makeCounter() {
    let count = 0;
    return () => count++;
}

const counter = makeCounter(); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
