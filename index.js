import express from 'express';
import _ from 'lodash';
import users from './data/users';
const app = express();
const PORT = 3000;

// serve static files in 'public'
app.use(express.static('public'));

// get methods are called on page load
// because we are serving static files on the '/' route
// we should create another endpoint to send the users
app.get('/', (req, res) => {
  console.log(`A get request on ${req.url}`);
  // res.send(users); // sending static files to '/' so this doesn't work anymore
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


// need to send a post request to trigger this route
// done either via form submission or ajax (and ajax based libraries)
app.post('/newItem', (req, res) => 
  res.send(`A post request on ${req.url}`)
);

// need to send a put request to trigger this route
// done either via form submission or ajax (and ajax based libraries)
app.put('/item', (req, res) => 
  res.send(`A put request on ${req.url}`)
);

// need to send a delete request to trigger this route
// done either via form submission or ajax (and ajax based libraries)
app.delete('/item', (req, res) => 
  res.send(`A delete request on ${req.url}`)
);

app.listen(PORT, () => 
  console.log('Server listening on http://localhost:3000')
);