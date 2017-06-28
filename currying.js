const curry = require('lodash/fp/curry');

// making a curried function
const greet = curry((greeting, name) => `${greeting}, ${name}!`);

// passing both parameters
console.log(greet('Hello', 'World') + '\n');

// partially constructing...
// passing single parameter

const say_bye = greet('See you later');
const say_hello = greet('Waddup');
const say_compliment = greet('Looking good');

console.log(say_bye('World'));
console.log(say_hello('World'));
console.log(say_compliment('World'));
