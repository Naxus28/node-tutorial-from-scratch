// first import
var { area, circumference } = require('./exportTypes/appendToExports');
console.log('first import area: ', area(4));
console.log('first import circumference: ', circumference(4));

console.log('\n================\n');

// second import 
var { area, circumference } = require('./exportTypes/exportReference');
console.log('second import area: ', area(10));
console.log('second import circumference: ', circumference(10));

console.log('\n================\n');

// thirs import 
var circle = require('./exportTypes/moduleAsFunction'); // imports a function
var myCircle = circle(4); // sets the radius

console.log('third import area: ', myCircle.area());
console.log('third import circumference: ', myCircle.circumference());
