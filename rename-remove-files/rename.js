const fs = require('fs');

// because this function is synchronous, if there is any error
// it will will br thrown by default and stop he application
// if we want to handle the error ourselves we need to sorround the code in
// a try/catch block

try {
  fs.renameSync('./utils/fs-config.json', './utils/config.json');
  console.log('"fs-config.json" renamed to "config.json"');
} catch(err) {
  console.log('An error occured while renaming ./utils/fs-config.json. Check that the file exists.');
}


// async--no need for try/catch here because
// this happens asynchronously and the error is caught and passed to the callback by default
fs.rename('./utils/fs-utils.js', './utils/utils.js', err => {
  if (err) {
    console.log('An error occured while renaming ./utils/fs-utils.js. Check that the file exists.');
  } else {
    console.log('"fs-utils.js" renamed to "utils.js"');
  }
});
