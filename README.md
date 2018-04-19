# route handlers

Route handlers refers to the code that goes inside the callbaack functions of our route apis

e.g.

```javascript
app.get('/users', (req, res) => {
  // route handler
});
```

In express route callback functions provide the function `next()` as the last param that allows us to perform multiple callbacks within the same route. This is useful when we write our own middleware. There can be only one response in the route handler though.

e.g.
app.get('/users/:id', (req, res, next) => {
  // route handler

  // need to call 'next' to be able to move to the next piece of middleware or next callback
  next(); 
},
(req, res, next) => {
  // route handler


  next(); //

  etc...
});







