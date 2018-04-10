const http = require('http');
const data = require('./data/sample');
const port = '3334';

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/json'
  });

  let response = '';

  if (req.url === '/') { 
    response = data; //
  } else if (req.url === '/male') {
    response = getUsers().males;
  } else if (req.url === '/female') {
    response = getUsers().females;
  } else {
    res.writeHead(404, {
      'Content-type': 'text/json'
    });

    res.end(JSON.stringify({
      'status': '404',
      'error': 'File Not Found'
    }));
  }

  res.writeHead(200, {
    'Content-type': 'text/json'
  });

  res.end(JSON.stringify(response));// data needs to be sent as string otherwise there will be an error
})
.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// router helper
const getUsers = () => {
  let males = data.filter(user => user.gender.toLowerCase() === 'male');
  let females = data.filter(user => user.gender.toLowerCase() === 'female');

  return {
    males,
    females
  }
};