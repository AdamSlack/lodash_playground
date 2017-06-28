const flow = require('lodash/fp/flow');
const escape = require('lodash/fp/escape');
const trim = require('lodash/fp/trim');
const get = require('lodash/fp/get');
const is_equal = require('lodash/fp/isEqual');
const filter = require('lodash/fp/filter');
const util = require('util');

// implicit declaraition of the flow of the program
// anything passed to sanitise will flow through escape and trim
const sanitise = flow(escape, trim);

console.log('Trimmed and Escaped:\t' + sanitise('     <html>      '));



// currying with flow.
const data = {
    items: 45
};

// get and is_equal are curried automatically.
const has_all_items = flow(get('items'), is_equal(45));

console.log('Are all items in data?\t' + has_all_items(data));



// Another Example.
const items = [
  {name: 'baz'},
  {name: 'foo'},
  {name: 'bar'},
  {name: 'bar'},
  {name: 'foo'},
];

// returns a curried function that will filter an array of json objects
// that have a name that matches the specified one.
function name_getter_generator(name) {
    return filter(
        flow(get('name'), is_equal(name))
    );
}

const get_bars = name_getter_generator('bar')
const get_foo = name_getter_generator('foo');
const get_baz = name_getter_generator('baz');

console.log('All the Bars:\t' + util.inspect(get_bars(items)));
console.log('All the foos:\t' + util.inspect(get_foo(items)));
console.log('All the bazs:\t' + util.inspect(get_baz(items)));


