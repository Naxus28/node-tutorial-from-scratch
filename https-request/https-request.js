const https = require('https');
const fs = require('fs');

// request this resource: https://en.wikipedia.org/wiki/Michael_Jackson
const options = {
  hostname: 'en.wikipedia.org',
  port: 443, // https port is 443 most of the times, as opposed to 80 for regular http requests
  path: '/wiki/Michael_Jackson',
  method: 'GET'
};

// once the request has started the callback function is invoked
// the response object (res) implements the stream interface
const req = https.request(options, res => {
  // initialize the body to an empty string then concatenate the chunks of content as we receive them from the strem
  let responseBody = ''; 

  console.log('\nResponse from server has started.\n\n');
  console.log(`Status: ${res.statusCode}\n\n`);
  console.log('Headers %j', res.headers);
  console.log('\n\n');

  // set the response encoding 
  res.setEncoding('UTF-8');

  // listen to start of stream
  res.once('data', chunk => console.log(`First chunk of data received: ${chunk}'\n\n'`));

  // listen to any data received
  res.on('data', chunk => {
    console.log(`Chunk length: ${chunk.length}`);
    responseBody+=chunk;
  });

  // when the stream ends--no more data to stream
  // create file and write data to that file
  res.on('end', () => fs.writeFile('Michael_Jackson.html', responseBody, (err) => {
    if (err) {
      throw err;
    }

    console.log('Content downloaded!');
  }));
});


// listen for errors on the call
req.on('error', err => console.log(`Error: ${err}`));

// end request
req.end();

