// in node we need to build the server ourselves 
// (different than apache for instance, which is the server itself; 
// when using apache we just need to put the files in the right location to be served)
// In node we need to use the 'fs' module in conjunction with the 'http' module to create the server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = '3334';

// create the server
http.createServer((req, res) => {
  // every url we request will be logged here
  // including urls linked in our index.html (which are implicitly requested)
   console.log(req.url); 

  if (req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', (err, file) => {
      if (err) {
        res.writeHead(500, {
          'Content-type': 'text/plain'
        });

        res.end('500 Internal Server Error');
      } else {
        // this will only serve the html but not the css
        res.writeHead(200, {
          'Content-type': 'text/html'
        });

        res.end(file);
      }
    });
  } else if(req.url.match(/.css$/)) {
    // if requested url ends in css
    // we could use readFile here as well but it is better to use a stream so we read 
    // chunks of the file
    
    // create the path
    const filePath = path.join(__dirname, 'public', req.url);

    // create the stream
    const fileStream = fs.createReadStream(filePath, 'UTF-8');
    
    // create the headers
    res.writeHead(200, {
      'Content-type': 'text/css'
    });

    // we can use the '.pipe()' method to pipe the readable stream to 
    // 'res', which is a writable stream
    // this streams the content of the file to the response and 
    // automatically handles creating the chunks and ending the stream for us
    fileStream.pipe(res);

    // file served on http://localhost:3334/styles/reset.css
    // file served on http://localhost:3334/styles/styles.css
  }  else if(req.url.match(/.jpg|.jpeg$/)) {
    // if requested url ends in css
    // we could use readFile here as well but it is better to use a stream so we read 
    // chunks of the file
    
    // create the path
    const filePath = path.join(__dirname, 'public', req.url);

    // create the stream
    const fileStream = fs.createReadStream(filePath); // this is streamed as binary data so we don't specify the encoding
    
    // create the headers
    res.writeHead(200, {
      'Content-type': 'image/jpeg'
    });

    // same as above
    fileStream.pipe(res);

    // file served on http://localhost:3334/img/dino.jpg
  } else {
    // file doesn't exist
    res.writeHead(404, {
      'Content-type': 'text/plain'
    });

    res.end('404 File Not Found');
  }
}).listen(port, () => console.log(`Listening on http://localhost:${port}`));
