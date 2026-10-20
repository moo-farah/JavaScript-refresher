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

// Memoization
// Memoization is a technique to store the results of expensive function calls and return the cached result when the same inputs occur again
// Skip duplicate work
// Same input
// Cached result
const memoize = (fn) => {
    const cache = new Map();
    return (x) => {
        if (cache[x] !== undefined) {
            console.log('from memory')
            return cache[x];
        }
        console.log('calculating result')
        cache[x] = fn(x);
        return cache[x];
    };
};

const double = (n) => n * 2;
const memoDouble = memoize(double)
console.log(memoDouble(5));
console.log(memoDouble(6));


// Debounce
// Debounce is a technique to delay the execution of a function until a certain amount of time has passed 
// since the last time the function was called

const debounce = (fn, delay) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
};

const search = debounce(() => {
    console.log('Searching for: apple');
}, 500);

search();
search();


// Throttle
// runs at most once every N milliseconds
const throttle = (fn, delay) => {
    let last = 0;
    return () => {
        const now = Date.now();
        if (now -last >= delay) {
            last = now;
            fn();
        }
    };
};

const onScroll = throttle(() => {
    console.log('Update page position')
}, 1000);

onScroll();
onScroll();


// Async functions, promises, and event loop
// Async functions are functions that return a promise
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value
// Event loop is the mechanism that allows JavaScript to handle asynchronous events by passing control back and forth between the call stack and the event queue

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function Dashboard() {
  try {
    await wait(2000); // pause 2 seconds first

    const [users, posts] = await Promise.all([
      fetch('https://api.github.com/users'),
      fetch('https://api.github.com/posts')
    ]);
    const usersData = await users.json();
    const postsData = await posts.json();
    console.log(usersData);
    console.log(postsData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

Dashboard();