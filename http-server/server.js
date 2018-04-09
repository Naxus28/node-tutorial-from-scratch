const http = require('http');
const port = '3334';
const portOne = '3335';

/* this method creates the server
 * any request to the server will invoke the callback
 * the callback receives:
 * 
 * 1. the request object, which has such information as requested headers, 
 * data sent along with the request, and information about our user, like their environment, etc.
 *
 *  2. a blank response object, which we need to complete ourselves, by writing response headers and response body
*/
// serve plain text on port 3334
const server = http.createServer((req, res) => {
  // see https://nodejs.org/api/http.html for headers content
  const content = 'Hello World';
  const headers = { 
    'content-length': content.length,
    'content-type': 'text/plain',
    'connection': 'keep-alive',
    'accept': '*/*'
  };

  // status is the first arg, followed by all other header key/pair values
  res.writeHead(200, headers);
  res.end(content);
});

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));


// serve html on port 3335
const serverOne = http.createServer((req, res) => {
  // see https://nodejs.org/api/http.html for headers content
  const content =  `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Node Server</title>
      </head>
      <body>
        <h1>Node Request HTML</h1>
        <p>Request method: ${req.method}</p>
        <p>Request url: ${req.url}</p>
        <p>Request host: ${req.headers.host}</p>
        <p>Request user-agent: ${req.headers['user-agent']}</p>
      </body>
    </html>
  `;

  const headers = { 
    'content-length': content.length,
    'content-type': 'text/html', // type changes here to 'html'
    'connection': 'keep-alive',
    'accept': '*/*'
  };

  // status is the first arg, followed by all other header key/pair values
  res.writeHead(200, headers);
  res.end(content);
});

serverOne.listen(portOne, () => console.log(`Listening on http://localhost:${portOne}`));
