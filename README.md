# debugging with `DEBUG=express*` [https://expressjs.com/en/guide/debugging.html](https://expressjs.com/en/guide/debugging.html)
 
 > debugging with the `--inspect` flag was already covered on branch `node-25-debug-node` 

We can use the `DEBUG=express* node index.js`  (or `DEBUG=express* nodemon index.js`) directly on the command line or on a script in package.json. In this demo we wrote the script "debug" on package.json, so you can run it with command `npm run debug`

> If you are using es6 you need to combine the debug command with the babel command that transpiles the code.
e.g. 
`DEBUG=express* nodemon ./index.js --exec babel-node -e js`


