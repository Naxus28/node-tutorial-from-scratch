import express from 'express';
import _ from 'lodash';
import users from './data/users';
const app = express();
const PORT = 3000;

// serve static files in 'public'
app.use(express.static('public'));

// get methods are called on page load
app.get('/', (req, res) => {
  console.log(`A get request on ${req.url}`);
  // because we are serving static files on the '/' route
  // this api will only send this data to ajax GET requests to '/'
  // but not on page load anymore
  res.send(users); 
});

// if we navigate to http://localhost:3000/users/1 
// this api sends back the user whose id is 1
app.get('/users/:id', (req, res) => {
  let user = _.find(users, { id: parseInt(req.params.id) });
  res.send(user);
});

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