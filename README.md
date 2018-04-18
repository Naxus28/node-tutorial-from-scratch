# create a server with es6 support 
 
 Node tries to keep up with the v8 engine so the latest versions of node will provide the same support to es6 as do Chrome's v8, including support to es6. Since the v8 engine doesn't support all es6 features yet, neither does node [https://nodejs.org/en/docs/es6/](https://nodejs.org/en/docs/es6/). Additionally, not all developers have the latest version of node, so we need to make sure our es6 code still works for them as well. For this reason we need to use babel to transpile es6.


Need these babel packages:

```javascript
"devDependencies": {
  "babel-cli": "version",
  "babel-preset-env": "version",
  "babel-preset-stage-0": "version"
}
```

Add this script to package.json

```javascript
  {
    "scripts": {
      "start": "nodemon ./index.js --exec babel-node -e js"
    }
  }
```

This line translates as: 

1. nodemon, start the index file and execute the `babel-node` binary file from the babel-cli package (check code in \node_modules\babel-cli\bin\babel-node.js)

2. babel-node, evaluate 'js' files ([https://babeljs.io/docs/usage/cli/#babel-node](https://babeljs.io/docs/usage/cli/#babel-node))


Then we add the presets to a `.babelrc` file in the root of the project as such

```javascript
{
  "presets": [
    "env",
    "stage-0"
  ]
}
```
References: [preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/), [preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)

Then we just create the server on `index.js` and run `npm start`




