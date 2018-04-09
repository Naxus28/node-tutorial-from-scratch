const fs = require('fs');

if (fs.existsSync('utils')) {
  console.log('Directory already exists');
} else {
  fs.mkdir('utils', (err) => {
    if (err) {
      throw err;
    }

    console.log(`Directory created`);
  });
}