# middleware in express

In express, middleware are functions that get invoked in the router callbacks. There are several built in middlewares (e.g. `express.static()`) but we can also write our own middlewares as such

```javascript
app.get('/', (req, res) => {
  
  // anything that happens here before we send data
  // is considered middleware

  res.send(someData);
});
``` 







