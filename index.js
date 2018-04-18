import express from 'express';
import users from './data/users';
const app = express();
const PORT = 3000;

/* middleware need to come before the route
* serves static content from the public directory
* on the default route "/" (because route was not specified as first param)
* this will serve html, js, css, and img files
* so when we navigate to http://localhost:3000 
* express will serve index.html and all files referenced on this page will 
* load as well, as long as they are hosted in /public
* we can open them individually as well as such:
* 1. 'http://localhost:3000/css/styles.css'
* 2. 'http://localhost:3000/js/index.js'
* 2. 'http://localhost:3000/img/node-express.png'
*/
app.use(express.static('public'));


/* serves the random imgs directory on the /random-imgs route
 * try 'http://localhost:3000/random-imgs/random1.gif'
 * try 'http://localhost:3000/random-imgs/Random.png'
 * ...
 */
app.use('/random-imgs', express.static('random-imgs'));


// get methods are called on page load
app.get('/', (req, res) => {
  console.log(`A get request on ${req.url}`);
  // because we are serving static files on the '/' route
  // this api will only send this data to ajax GET requests to '/'
  // but not on page load anymore
  res.send(users); 
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