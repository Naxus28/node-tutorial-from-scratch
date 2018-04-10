/* jshint esversion: 6 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = '3334';

http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // serve the form first
      res.writeHead(200, {
        'Content-type': 'text/html'
      });

      fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);

      } else if (req.url.match(/.css$/)) {
        // serve css
        res.writeHead(200, {
          'Content-type': 'text/css'
        });

        const filePath = path.join(__dirname, 'public', req.url);
        fs.createReadStream(filePath, 'UTF-8').pipe(res);
      }
    } else if (req.method === 'POST') {
        // the req is a stream, so we can listen to data passed to the stream
        let body = '';

        // when the req receives data (from the form in this case)
        req.on('data', (chunk) => body+=chunk);

        // the body contains the key/value pair send from the form
        // e.g. first_name=John&last_name=Doe&age=23
        // if we wanted to use the values we would need to parse them ourselves
        // but there are modules that do that for us already, such as express

        // when the request ends
        req.on('end', () => {

          // prepare the response head
          res.writeHead(200, {
            'Content-type': 'text/html'
          });

          // send response
          res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>Node Post Form</title>
            </head>
            <body>
              <h1>Your form results</h1>
              <div>${body}</div>
            </body>
            </html>
          `);
        });
    } 
})
.listen(port, () => console.log(`Listening on http://localhost:${port}`));

