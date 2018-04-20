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

Start the server using `npm start`







