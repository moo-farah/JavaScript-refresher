// Control flow is the order in which the code is executed 
// These statements allow you to make decisions, repeat tasks, and jump between parts of a program on specific conditions

// if statement
const age = 18;
if (age >= 18) {
    console.log("You are an adult"); // This will be executed if the condition is true
}

// if-else statement
const score = 40;
if (score >= 55) {
    console.log("You passed the exame") // This will be executed if the condition is true
} else {
    console.log("You failed the exam"); // This will be executed if the condition is false
}

// if-else-if statement
const temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside") // This will be executed if the condition is true and the previous conditions are false
} else if (temperature >= 20) {
    console.log("It's warm outside") // This will be executed if the condition is true
} else {
    console.log("It's cold outside") // This will be executed if the condition is false
}


// switch statement
// evaluates an expression and executes the a block of based based on matching cases
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Time to start the week")
        break;
    case "Friday":
        console.log("End of the working week")
    default:
        console.log("Invalid day")
}


// JavaScript Looping statements 
// looping statements are used to execute a block of code repeatedly until a condition is met

// for loop: used when the number of iterations is known beforehand
for (let i = 0; i < 5; i++) {
    console.log("Iteration for loop", i) // This will be executed 5 times with the value of i increasing by 1 each time
}

// while loop: runs as long as the condition is true
let count = 0;
while (count < 5) {
    console.log("iteration while loop", count)
    count++;
}


// do-while loop: runs at least once, even if the condition is false
let i = 0;
do {
    console.log("iteration do-while loop", i);
    i++;
} while (i < 5);


// ternary operator / conditional operator: a concise way to write an if-else statement
let x = 10;
let result = x > 5 ? "x is greater than 5": "x is less than 5";
console.log(result);