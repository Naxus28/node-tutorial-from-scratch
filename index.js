const express = require('express');
const port = 3000;

// create the express application instance
const app = express();

// We can add middleware (in node they are functions) to express.
// Middleware adds custom functionality to the application.
// Middlewares are executed in the order they are registered

// first we add our custom middleware to log information about every incoming request
// the middleware takes a callback that passes the req, res, and a next function 
// that is invoked once we are done with the middleware
// This middleware will be executed before the midddleware below
app.use((req, res, next) => {
  console.log(`${req.method} on ${req.url}`);
  // 'next' tells express to move on to the next piece of middleware (or whatever comes next) 
  // without it we don't move forward and the connection hangs
  next(); 
});


// Below we are telling express to use the static file server that 
// comes with the core express module; this will allow us to serve static files.
// We need to specify the directory where the static files are hosted.

// this line basically says: express, use the static server middleware 
// to serve static files from the './public' folder
app.use(express.static('./public'));


// now the app needs to listen to incomoing requests
// just like http, this listen function also takes a callback
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));


//at this point, we have added two middlewares and a listener to this app instance


// if we need this piece of code on a different file, we have to export it
module.exports = app;