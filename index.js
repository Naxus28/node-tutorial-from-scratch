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

