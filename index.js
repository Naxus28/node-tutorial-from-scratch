// node has a global object that works similarly to the browser's window object
// there are some differences though
let name = 'Josh';
console.log(name); // Josh

// undefined -- whereas on regular js (on the browser) window.name would be 'Josh'
// this is because 'name' is scoped to this module (this file) and are not added to the global object like in the browser
console.log(global.name); 

// if we want to add a variable to the global object we need to do it explicitly
global.name = 'Josh';

console.log(global.name); // Josh

// NOTE: we can use most js methods in node, such as substring, slice, splice, etc
console.log(name.slice(1)); // osh


// THERE ARE OTHER GLOBAL OBJECTS YOU SHOULD KNOW ABOUT 
// BELOW ARE SOME IMPORTANT ONES. FOR A COMPLETE LIST, FOLLOW THIS LINK: https://nodejs.org/api/globals.html

console.log(__dirname); // the path to the directory name of the current module
console.log(__filename); // the path to the filename of the current module
console.log(exports); // short for module.exports -- allows you to export modules (that can then be imported on other modules)
// console.log(require());// allows you to import modules that have been exported -- need the module path passed as argument
console.log(process);// gives you access to the current node process