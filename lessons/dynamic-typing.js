// dynamic typing means that the type of a variable can change at runtime
// in JavaScript, we don't need to declare the type of a variable, it is determined by the value assigned to it
// example:
let age = 20;
console.log(typeof age); // number
age = 'twenty';
console.log(typeof age); // string
age = true;
console.log(typeof age); // boolean
age = null;
console.log(typeof age); // object
age = undefined;
console.log(typeof age); // undefined
age = Symbol('20');
console.log(typeof age); // symbol