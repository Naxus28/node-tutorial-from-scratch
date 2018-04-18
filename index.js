import express from 'express';
const app = express();
const PORT = 3000;

// get methods are called on page load
app.get('/', (req, res) => 
  res.send(`A get request on ${req.url}`)
);

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