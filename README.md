# use express.static() to send static files [https://expressjs.com/en/starter/static-files.html](https://expressjs.com/en/starter/static-files.html)

When serving static files such as images, javascript, css, etc, we need to tell express to do so by using `express.static()`.


`express.static()` takes the path to a directory or static file. 

e.g
```javascript
express.static('public'); // serves all static files in the public directory and subdirectories
```

To use `express.static()` we need to create a middleware to our app (`app.use()`) and pass `express.static('directory')` as its argument:

e.g.
```javascript
import express from 'express';
const app = express();

// the "use method" creates the middleware
// route defaults the to '/' if no route is passed as first param
app.use(express.static('public')); // serves all static files from /public on the '/' route

// we can pass a route as the first argument to the middleware--the middleware is triggered only on that route
app.use('/images', express.static('images')); //serves the images directory on the /images route
```







