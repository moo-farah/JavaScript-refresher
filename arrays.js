// arrays are ordered collections of values stored in contiguous memory locations that can be accessed using indices, starting from 0
// arrays are mutable, so we can add, remove, and modify elements
// arrays are dynamic, so we can add new elements at runtime
// arrays are heterogeneous, so we can store different types of values in them
// arrays are iterable, so we can use for...of loop to iterate over them
// arrays are serializable, so we can convert them to JSON.stringify() method

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[0]); // apple

// adding a new element to the array
fruits.push('fig');
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ]

// removing the last element from the array
fruits.pop();      // removes the last element from the array
console.log(fruits) // [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]

// removing the first element from the array
fruits.shift();     // removes the first element from the array
console.log(fruits) // [ 'banana', 'cherry', 'date', 'elderberry' ]

// adding a new element to the beginning of the array
fruits.unshift('mango'); // adds a new element to the beginning of the array
console.log(fruits)   // [ 'mango', 'banana', 'cherry', 'date', 'elderberry' ]

// splicing the array
fruits.splice(2, 2) //  start at index 1 and remove 2 elements deleteCount is the number of elements to remove
console.log(fruits) // [ 'mango', 'banana', 'elderberry' ]

// inserting a new element at index 1
insertedFruits = fruits.splice(1, 0, 'kiwi'); // start at index 1 and insert 'kiwi' at index 1
console.log(insertedFruits) // [ 'kiwi' ]
console.log(fruits)

// sorting the array
fruits.sort();    // sorts the array in ascending order
console.log(fruits) // [ 'banana', 'elderberry', 'kiwi', 'mango' ]

// reversing the array
fruits.reverse(); // reverses the array in descending order
console.log(fruits) // [ 'mango', 'kiwi', 'elderberry', 'banana' ]

// finding the index of an element
const index = fruits.indexOf('kiwi');
console.log(index) // 1

// checking if an element exists in the array
const exists = fruits.includes('kiwi');
console.log(exists) // true


// Looping through an array
for (const fruit of fruits) {
    console.log(fruit) //  [mango, kiwi, elderberry, banana]
}

// Looping through an array with the index
for (const index in fruits) {
    console.log(index) // 0, 1, 2, 3
}

// Transforming an array
const transformedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(transformedFruits) // [ 'MANGO', 'KIWI', 'ELDERBERRY', 'BANANA' ]

// Filtering an array
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // [ 'elderberry', 'banana' ]

// Reducing an array
const reducedFruits = fruits.reduce((acc, fruit) => acc + fruit, 0);
console.log(reducedFruits)