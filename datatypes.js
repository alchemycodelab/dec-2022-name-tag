console.log('hello world from app.js');

// data types
// numbers
42;
// strings
const answer = '42';
console.log(answer);
// can't do this to constants!
// answer = 12;
let dogName = 'Ben Donich';
console.log(`My dog's name is ${dogName}. ${dogName} is very cute. ${dogName} is 7 years old.`);

// arrays
let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[2]);

// objects
let benny = {
    name: 'Benny',
    age: 7,
    breeds: ['Terrier', 'Chihauhau', 'Pekingese'],
};
console.log(benny);

// functions
function sayHello() {
    console.log('hello world from sayHello function');
}
sayHello();

function cheeseBurger(cheese) {
    console.log('making a cheeseburger');
    console.log(`Cheese Choice: ${cheese}`);
}
cheeseBurger('pepper jack');
