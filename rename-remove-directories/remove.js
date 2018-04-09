// NOTE: before removing a directory that contains files
// we need to remove the files, otherwise an error will be thrown

const fs = require('fs');

// create the directory first so we can delete it
console.log('=====CREATE DIRECTORY AND FILES=====');
fs.mkdirSync('./removedir');
console.log('./removedir was created');

// create two files inside the dir
fs.writeFileSync('./removedir/somefile.js');
console.log('somefile.js was created');
fs.writeFileSync('./removedir/test.md');
console.log('test.md was created');


// delete the files just created--do it synchronously so when 
// we delete the directory we know it doesn't have any files in it
console.log('=====DELETE DIRECTORY AND FILES=====');
fs.readdirSync('./removedir').forEach(fileName => {
  let file = `./removedir/${fileName}`;
  fs.unlinkSync(file);
  
  console.log(`${file} was deleted`); 
});

// delete the directory
fs.rmdir('./removedir', err => {
  if (err) {
    throw err;
  }

   console.log('./removedir was removed'); 
});
