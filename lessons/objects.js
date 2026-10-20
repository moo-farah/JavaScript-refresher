// objects are collections of key-value pairs
// objects are unordered, so we cannot access them using index
// objects are mutable, so we can add, remove, and modify properties
// objects are dynamic, so we can add new properties at runtime
// objects are heterogeneous, so we can store different types of values in them
// objects are iterable, so we can use for...in loop to iterate over them
// objects are serializable, so we can convert them to JSON
// objects are comparable, so we can compare them using == and ===
// objects are hashable, so we can use them as keys in maps and sets
// objects are callable, so we can call them as functions
// objects are constructors, so we can use them to create new objects
// objects are prototypes, so we can use them to create new objects
// objects are classes, so we can use them to create new objects

const person = {
    name: 'Elon Musk',    // name is a key, Elon Musk is a value
    age: 52,
    city: 'Los Angeles',
    country: 'USA',
    isStudent: false,
    hobbies: ['reading', 'writing', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001'
    }
};
console.log(delete person.age);
person.age = 53;
console.log(person.age)
console.log(person);


// creating an object using the Object constructor
const team = new Object();
team.name = 'Los Angeles Lakers';
team.players = ['LeBron James', 'Anthony Davis', 'Russell Westbrook'];
team.coach = 'Frank Vogel';
team.owner = 'Jeanie Buss';
team.city = 'Los Angeles';
team.state = 'CA';
team.zip = '90001';
console.log(team.players[1]); // Anthony Davis
team.players.push('Kobe Bryant'); // add a new player to the team
console.log(team.players.join(', ')); // LeBron James, Anthony Davis, Russell Westbrook, Kobe Bryant

// creating an object using the Object.create method
const cars = Object.create({});
cars.brand = 'Toyota';
cars.model = 'Camry';
cars.year = 2020;
cars.color = 'Red';
cars.price = 20000;
cars.isElectric = false;
console.log(cars);

// creating a function to drive a car
function driveCar(car) {
    console.log(`Driving a ${car.brand} ${car.model} ${car.year} ${car.color} ${car.price} car`);
}
driveCar(cars); // Driving a Toyota Camry 2020 Red 20000 false car

// creating a callable object using the Function constructor
const calculator = new Function('a', 'b', 'return a + b');
console.log(calculator(2, 2)); // 4
calculator.a = 10;
calculator.b = 20;
console.log(calculator(calculator.a, calculator.b)) // 30
console.log(calculator.a / calculator.b) // 0.5
console.log(calculator.a % calculator.b) // 10
console.log(calculator.a - calculator.b) // -10
console.log(calculator.a * calculator.b) // 200

// object are hashable, so we can use them as keys in maps and sets
const map = new Map();
map.set('name', 'Mohamed');
map.set('age', 22);
map.set('city', 'Nairobi');
map.set('country', 'Kenya');
map.set('isStudent', true);
map.set('hobbies', ['reading', 'writing', 'coding']);
map.set('address', {
    street: '123 Main St',
    city: 'Nairobi',
    state: 'Nairobi',
    zip: '12345'
});
console.log(map.get('address').street); // 123 Main St


// object are iterable, so we can use for...in loop to iterate over them
for (const key of person.name) {
    console.log(key); // E, l, o, n,  , M, u, s, k
}

// object are serializable, so we can convert them to JSON
const json = JSON.stringify(person);
console.log(json); // {"name":"Elon Musk","age":52,"city":"Los Angeles","country":"USA","isStudent":false,"hobbies":["reading","writing","coding"],"address":{"street":"123 Main St","city":"Los Angeles","state":"CA","zip":"90001"}}

// object are comparable, so we can compare them using == and ===
console.log(person == person); // true   because they are the same object
console.log(person === person); // true  because they are the same object
console.log(person != person); // false  because they are not the same object
console.log(person !== person); // false because they are not the same object