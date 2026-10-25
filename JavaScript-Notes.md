## JavaScript:

- Dynamically typed:  Variables types are determined at runtime
- Single-threaded: Executes one tast at a time (but supports asynchronous operations)
- Compiled and interpreted: Modern JavaScript engines combines compilation and interpretation for better performance

A typed programming language is one where every value (and usually every variable) has a type, which tells the language what kind of data it is: a number, a string of text, a true/false boolean, a list and so on

### Static vs dynamic typing

The main distinction is when types are checked
**Statically type:** languages check types before the program runs (at compile time). You usually delcare the type up front, and the compiler rejects mismatches.
Examples: TypeScript, Java, C, C#, GO, Rust

```
typescript

let age: number = 25;
age = "twenty-five";
```

**Dynamically typed:** languages check types while the program is running. A variable can hold any type and it can change
Examples: JavaScript, Python, Ruby, PHP

**Strong vs weak typing**
This is a separate axis, about how strictly the language enforces types.
**Strong typing:** the languages refuses to mix types without you being explicit. Python raises an error on "5" + 5
**Weak typing:** the language quietly converts types for you, sometimes with surprising results. JavaScript gives "5" + 5 as 55, but "5" - 5 as 0.

- JavaScript supports both imperative and declarative programming styles:
**Imperative Programming:** tells the computer how to do something, step by step. Think of it like giving a recipe: 'chop the onions, heat the pan, add oil, stir for 2 minutes.'

**Imperative: you manage the steps**
Say you want the doubled values of an array of numbers greater than 2:

```
javascript

const numbers = [1, 2, 3, 4, 5];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 2) {
        results.push(numbers[i] * 2);
    }
}
   // You create the array, control the loop, track the index, and push values yourself. You're describing the producer
```

**Declarative Programming:** You tell the computer what you want and it figures out the steps
**Declarative: you describe the outcome**

```
const number = [1, 2, 3, 4, 5]
const result = numberrs 
    .filter(n => n > 2)
    .map(n => n * 2);
```

## JavaScript Data types
It defines what kind of values a variable can hold and how those values behave in a program
**Primitive Data types:** represent simple, immutable values stored directly in memory, ensuring efficiency in both memory usage and performance.   
- Numeric Type
    - Number: integers and floating-point numbers
    - BigInt: is a primitive data type in JavaScript used to represent very large whole numbers
- Non-Numeric Type
    - String: is a series of characters that are surrounded by quotes
    - Boolean: true/false
    - Null: does not belong to any of the default data types
    - Undefined: a variable that has been declared but not initialized with a value is automatically assigned the undefined
    - Symbol: introduced in ES6, are unique and immutable primitive values used as identifiers for object properties

**Non-primitive Data types:** are derived from primitive data types are known as non-primitive data types.
It also known as derived data types or reference data types
 - Non-premitive Data types
    - object:  are key-value pairs used to store data, created with {} or the new keyword
    - arrays:  is a special kind of object used to store an ordered collection of values, which can be of any data type
    - function:  is a block of resusable code designed to perform a specific task when called
    - data object:  is used to work with dates and times, allowing for date creation, manipulation, and formatting
    - regular expression:  is an object used to define search patterns for matching text in strings
