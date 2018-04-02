var PI = Math.PI;

exports.area = function(r) {
  return PI * r * r;
}

exports.circumference = function(r) {
  return 2 * PI * r;
}

// accessing the exported functions -- 3 types of requires

// 1) use relative path if we created the file
var circle = require('./index');
var area = circle.area(4);
var circumference = circle.circumference(4);

console.log(area);
console.log(circumference);


// 2) call module by name if it is part of node core or if you installed and external module using npm
var fs = require('fs'); // node core module fs--gives access to the file system
// enter the node REPl and type 'fs' to see a list of methods in this obj

// 3) install external module 'colors' by running 'npm i colors' and then require module
// var colors = require('colors');


let askDirections = (location, cb) => cb(location);

// logging
logger('Start'); // 1

setTimeout(() => logger('sto 1'), 0); // 6

setTimeout(() => logger('sto 2'), 0); // 7

process.nextTick(() => logger('Next tick')); // 4 -- runs before setTimeout

askDirections('home', getDirections); // 2

askDirections('downtown', getDirections); // 5 -- calls 'process.nextTick' in the 'if' block

askDirections('uptown', getDirections); // 8 -- calls 'setTimeout' in the 'if' block; runs after all other events are finished

logger('End'); // 3

/*
Prints:
  1.Start
  2.Go straight
  3.End
  4.Next tick
  5.Make a right at the light
  6.sto 1
  7.sto 2
  8.Make a left at the light
*/
