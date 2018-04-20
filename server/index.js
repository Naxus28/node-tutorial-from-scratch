const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let dict = require('./data');
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

/* EXPRESS STATIC MIDDLEWARE
 * Below we are telling express to use the static file server that 
 * comes with the core express module; this will allow us to serve static files.
 * We need to specify the directory where the static files are hosted.
 * This line basically says: express, use the static server middleware 
 * to serve static files from the './public' folder
 */
app.use(express.static('../public'));


/* BODY PARSER MIDDLEWARE
 * the 'body-parser' module helps us parse data that is POSTED to this api,
 * meaning we will have 'clean' data (key/pair values) to work with in the post request
 * Below we use both bodyParser.json() and bodyParser.urlencoded() to make sure we cover both types of post request
 * bodyParser.json() parses data sent as json, such as in a rest app (not from the form itself)
 * bodyParser.urlencoded() parses data sent url encoded (posted directly from a form)
 * bodyParser.urlencoded() takes an argument 'extended', which should be set to 
 * 'true' only if we have large amounts of nested POST requests to parse
 */
app.use(bodyParser.json()); // if data is sent as json
app.use(bodyParser.urlencoded({ extended: false })); // if data is sent url encoded


/* CORS
 * the cors middleware allows requests from different domains to hit our api
 * we need to place it before other middlewares 
 */
app.use(cors());

/* CUSTOM MIDDLEWARE
 * This custom middleware logs information about every incoming request
 * It takes a callback function that passes the req, res, and a 'next' function, 
 * which is invoked once we are done with the middleware.
 */
app.use((req, res, next) => {
  console.log(`${req.method} on ${req.url}`);
  //this console shows what the post data looks like--should be parsed by bodyParser
  //e.g. {"term":"scope","definition":"Scope determines the accessibility (visibility) of variables"}
  // without bodyParser.json() we are not able to get the data from the 'body' from the req object (req.body); 
  // and without bodyParser.urlencoded() 'req.body' would be 'undefined'
  console.log('req.body: ', req.body); 


  // 'next' tells express to move on to the next piece of middleware (or whatever comes next) 
  // without it we don't move forward and the connection hangs
  next(); 
});


/* EXPRESS GET ROUTE
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

/* EXPRESS POST ROUTE
 * The 'post' function handles 'post' requests
 * Like 'get', it takes the route and a callback function that handles the request
 */
app.post('/dictionary-api', (req, res) => {
  dict.push(req.body); // push the new term and defintion object into the dict array
  res.json(dict); // respond the request with the new array
});

/* EXPRESS DELETE ROUTE
 * The 'delete' function handles 'delete' requests
 * To get routing params passed from the client we can use 'req.params' 
 * and chain the routing variable that we add to the url ('item' in this case),
 * So 'req.params.item' will be the string passed after '/dictionary-api/' in our
 * delete request from the client
 */
app.delete('/dictionary-api/:item', (req, res) => {
  // filter the item out of the array
  dict = dict.filter(item => item.term.toLowerCase() !== req.params.item.toLowerCase());
  res.json(dict); // respond the request with the new array
});


/* LISTEN TO REQUESTS
 * now the app needs to listen to incomoing requests
 * just like http, this listen function also takes a callback
 */
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));


// if we need this piece of code on a different file, we have to export it
module.exports = app;

