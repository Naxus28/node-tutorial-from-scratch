import express from 'express';
import _ from 'lodash';

import setMiddleware from './middleware/app-middleware';
import setErrorMiddleware from './middleware/error-handlers-middleware';
import users from './data/users';
import catalog from './routes/catalog'; 
import items from './routes/items'; 

const app = express();
const PORT = 3000;

// app-middleware exports a function
// that expects the express app instance
setMiddleware(app);

// use the routes
app.use('/catalog', catalog);
app.use('/items', items);

// get methods are called on page load
// because we are serving static files on the '/' route
// we should create another endpoint to send the users
app.get('/', (req, res) => {
  console.log(`A get request on ${req.url}`);
  // res.send(users); // sending static files to '/' so this doesn't work anymore
});

// throw error here to test error handling middleware
app.get('/error', (req, res) => {
  console.log(`A get request on ${req.url}`);
  throw new Error({ status: 500, message: 'Cannot get something from DB'});
});

// sends all users
app.get('/users', (req, res) => {
  console.log(`A get request on ${req.url}`);
  res.send(users); 
});

// if we navigate to http://localhost:3000/users/1 
// this api sends back the user whose id is 1
app.get('/users/:id', (req, res, next) => {
  let user = _.find(users, { id: parseInt(req.params.id) });
  let sucess = {
    message: 'success',
    status: 200,
    data: user
  } 
  res.send(sucess);
  next(); // without this function the code wouldn't move to the next callback
}, (req, res, next) => {
   console.log('Got user'); // this prints on the server
   res.end();// immediately ends this call--not really useful in this case, but there are scenarios where it can be helpful
});

// download the images directory
// Transfers the file at path as an “attachment”. 
// Typically, browsers will prompt the user for download. 
app.get('/images', (req, res) => res.download('public/img/node-express.png'));


// sets the error middleware here
// to be able to catch route errors
setErrorMiddleware(app);

app.listen(PORT, () => 
  console.log('Server listening on http://localhost:3000')
);