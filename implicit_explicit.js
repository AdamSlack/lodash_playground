var _ = require('lodash');
const map = require('lodash/fp/map');

var input = [1,2,3,4];

// Explicitly
function explicit_square_all(numbers) {
    var squared = [];
    for(var i=0; i < numbers.length; i++) {
        squared.push(numbers[i] * numbers[i]);
    }
    return squared;
}

var explicit_result = explicit_square_all(input);


// Implicitly
function implicit_square_all(numbers) {
    return numbers.map(num => num * num);
}

var implicit_result = implicit_square_all(input);

// Curried Implicit method
const curried_square_all = map(num => num * num);
var curried_implicit_result = curried_square_all(input);

console.log('Input:\t\t' + input);
console.log('Explicit:\t' + explicit_result);
console.log('Implicit:\t' + implicit_result);
console.log('curried Implicit:\t' + curried_implicit_result);