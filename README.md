# Modules [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)

In the Node.js module system, each file is treated as a separate module. Variables are scoped to the module unless they are exported and then imported--`require('./module')` or `import module from './module'` from another module.

> Note1: node will first look at the global modules first and use that module, even if we have a local module by that name. If it doesn't find the module there, node looks at the local node_modules folder. If it doesn't find the module in the current directory (/Users/gabrielferraz/Desktop/practice/nodeREPLSnippets), node will traverse up the directories
looking for the module in a node_modules folder. 
i.e. if the module is not found in '/Users/gabrielferraz/Desktop/practice/nodeREPLSnippets/node_modules' node will look for '/Users/gabrielferraz/Desktop/practice//node_modules', then '/Users/gabrielferraz/Desktop/practice/node_modules', and continue all the way up the root unless the module is found

> Note2: when we require a module, we don't need to add the '.js/.json/.node' file extesions.
Node will first look for a '.js' file (say colors.js), then a '.json' file, (which it does treat as a json file), and finally a '.node' file, which is treated as a compiled file.
This happens for external modules and for files we create (i.e. if we "require('node-env')" in this directory node will require 'node-env.js', not 'node-env.json')

> Note3: if a package will be used from the command line, we need to install it globally using flag '-g'. i.d. npm install -g gulp. If the module is only needed for a project, we should install it in the 'node_modules' of that project (simply install without the flag -g)

> Note4: we can download a module from the node website using command `npm install <packageName>`--i.e. `npm install winston`-- or from github, in which case we need to provide the repository url and a pound sign followed by the branch: 'https://github.com/winstonjs/winston#master' or 'https://github.com/winstonjs/winston/tarball/master'
   

There are multiple ways to export modules in node (see examples using es6 on .js files):

1) Export variables/functions directly by adding them to the `exports` object:

```javascript
const PI = Math.PI;
exports.area = (r) => PI * r * r;
exports.circumference = (r) => 2 * PI * r;

// import
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

// import
var circle = require('./moduleName');
var area = circle.area(4);
var circumference = circle.circumference(4);
```  


