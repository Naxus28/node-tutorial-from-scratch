# default express error handler middleware [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html)

In express, middleware are functions that get invoked in the router callbacks. There are several built in middlewares but we can also write our own middlewares.

Express handles errors by default, so if we don't handle the error ourselves it sends `error.stack` back to the client. However, it we don't want the client to see the error stack because that may reveal too much about our server and it could potentially be exploited by hackers. Also, the `error.stack` is not very user friendly. 

Express provides a default way to handle errors:

Place the following piece of code after all routes and before `app.listen()`:

```javascript
app.use((err, req, res, next) => {
  // handle error here and send it back to the client 
  // we can send back html, json, or strings

  res.status(500).send(`Something went wrong :/ ${err}`)
});
```

In this demo we moved the middleware functions into their own file to create a clean architecture.





