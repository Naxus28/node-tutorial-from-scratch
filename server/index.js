const express = require('express');
const cors = require('cors');
const dict = require('./data');
const port = 3000;

/* CREATE APP
 * create the express application instance
 */
const app = express();

/* NOTE ABOUT MIDDLEWARE
 * We can add middleware (in node they are functions) to express.
 * Middleware adds custom functionality to the application.
 * Middlewares are executed in the order they are registered
 */

/* CUSTOM MIDDLEWARE
 * This custom middleware logs information about every incoming request
 * It takes a callback function that passes the req, res, and a 'next' function, 
 * which is invoked once we are done with the middleware.
 */
app.use((req, res, next) => {
  console.log(`${req.method} on ${req.url}`);
  // 'next' tells express to move on to the next piece of middleware (or whatever comes next) 
  // without it we don't move forward and the connection hangs
  next(); 
});

/* EXPRESS STATIC MIDDLEWARE
 * Below we are telling express to use the static file server that 
 * comes with the core express module; this will allow us to serve static files.
 * We need to specify the directory where the static files are hosted.
 * This line basically says: express, use the static server middleware 
 * to serve static files from the './public' folder
 */
app.use(express.static('../public'));

/* CORS
 * the cors middleware allows requests from different domains to hit our api
 * we need to place it before other middlewares 
 */
app.use(cors());


/* EXPRESS GET METHOD
 * The 'get' function handles 'get' requests
 * It takes the route and a callback function that handles the request
 * 'req' and 'res' are the same objects provided by node http module
 * However, express adds functionality to them to ease the development process
 * e.g. the response obj now has a json function that allows us to send json directly
 * without setting headers and stringifying the obj
 */
app.get('/dictionary-api', (req, res) => {
  // on the client side we hook an ajax get request
  // that gets consumes data from this route (e.g. $.getJSON('/dictionary-api', data => {});)
  res.json(dict);
});

/* LISTEN TO REQUESTS
 * now the app needs to listen to incomoing requests
 * just like http, this listen function also takes a callback
 */
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));


// if we need this piece of code on a different file, we have to export it
module.exports = app;

