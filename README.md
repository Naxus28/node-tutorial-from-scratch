# Modules [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)

In the Node.js module system, each file is treated as a separate module. Variables are scoped to the module unless they are exported and then imported--`require('./module')` or `import module from './module'` from another module.

There are multiple ways to export modules in node (see examples using es6 on .js files):

1) Export variables/functions directly by adding them to the `exports` object:

```javascript
const PI = Math.PI;
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;

var circle = require('./moduleName');
var area = circle.area(4);
var circumference = circle.circumference(4);
```  

2) Export the module as a function that returns the functions
```javascript
const PI = Math.PI;
module.exports = function(r) {
  return {
    area: function() {
      return PI * r * r;
    },
    circumference: function() {
      return 2 * PI * r;
    }
  };
 };

// import
var circle = require('./moduleName'); // imports a function
var myCircle = circle(4);
myCircle.area();
myCircle.circumference();
``` 

3) Create functions outside of the "exports" object and export their reference

```javascript
const PI = Math.PI;
const area = (r) => PI * r * r;
const circumference = (r) => 2 * PI * r;

module.exports = {
  area,
  circumference
}

var circle = require('./moduleName');
var area = circle.area(4);
var circumference = circle.circumference(4);
```  


