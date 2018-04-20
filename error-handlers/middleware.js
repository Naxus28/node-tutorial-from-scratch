import colors from 'colors';

const errorHandler = (err, req, res, next) => {
  // handle error here and send it back to the client 
  // we can send back html, json, or strings
  // example taken from https://expressjs.com/en/guide/error-handling.html -- default error handling
  if (res.headersSent) {
    return next(err)
  }
  // no need to call next here because 'send' will end the response
  res.status(500).send(err.stack);
  // res.status(500).send({ error: 'Something failed!' }); // this way to send status and body is deprecated
};


const logErrors = (err, req, res, next) => {
  console.log('Error'.red + ' ' + err.stack);

  // need to call next explicitly to move on to next middleware 
  // and pass the error down the stack, otherwise the server will hang
  next(err); 
};


export {
  errorHandler,
  logErrors
}