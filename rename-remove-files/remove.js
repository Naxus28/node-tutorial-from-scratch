const fs = require('fs');

// sync remove
// try catch to get the flow control of the app when there is an error
// instead of letting node throw the error--happens by default in sync operations-- 
// and crash the app

// create files to be able to delete them later
fs.writeFileSync('./lib/remove.js');
console.log('./lib/remove.js created');

fs.writeFileSync('./lib/delete.js');
console.log('./lib/delete.js created');


try {
  fs.unlinkSync('./lib/remove.js');
  console.log('./lib/remove.js deleted');
} catch(err) {
  console.log(err);
}


fs.unlink('./lib/delete.js', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('./lib/delete.js deleted');
  }
});


