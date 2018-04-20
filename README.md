# chaining routes with the 'route' method

We can chain routes (get, post, delete, put, etc) to the same path (say "/items") by using the route method as such:

```javascript
import express from 'express';
const app = express();

app.route('/items')
  .get((req, res) => {
    res.send('Get request on /items');
  })
  .post((req, res) => {
    res.send('Post request on /items');
  })
  .put((req, res) => {
    res.send('Put request on /items');
  })
  .delete((req, res) => {
    res.send('Delete request on /items');
  })
```

To better architect the server, routes should be defined on a separate file, imported into the entry point .js file, and passed as middleware into `app.use()` methods.

e.g.

```javascript
// index.js
import catalog from './routes/catalog'; // import the catalog router
import items from './routes/items'; // import the items router

// use the routes
app.use('/catalog', catalog);
app.use('/items', items);
```


Start the server using `npm start`







