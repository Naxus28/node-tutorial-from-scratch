const fs = require('fs');

// move childdir inside ./parentdir 
// if it is not there so we can move it out
try {
  fs.renameSync('./childdir', './parentdir/childdir');
  console.log('moved childdir inside ./parentdir');
} catch(err) {
  console.log('there is no "./childdir" directory ');
}

// move childdir outside ./parentdir
fs.renameSync('./parentdir/childdir', './childdir');
console.log('moved childdir ouside ./parentdir');