// es6 object enhancement notation allows 
// to define functions within objects using the below syntax
const https = require('https');

module.exports = {
  printName(name) {
    return `${name.last}, ${name.first}`
  },

  loadWiki(person, cb) {
    const url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
    
    https.get(url, res => {
      let body = '';

      // set the response encoding 
      res.setEncoding('UTF-8');

      // listen to any data received
      res.on('data', chunk => {
        body+=chunk;
      }); 

      console.log('body: ', body);

      // we invoke the callback with the body
      // returned from the http request when the 
      // request has ended so we know we have the
      // data we want 
      res.on('end', () => cb(body));
    });
  }
};