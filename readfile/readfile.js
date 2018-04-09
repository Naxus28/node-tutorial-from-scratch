const fs = require('fs');
const filePath = '../readdir/readdir.js';
const encoding = 'UTF-8';

// first arg is the file, second arg is the text encoding
const content = fs.readFileSync(filePath, encoding); 
console.log(`=====Sync file read=====: ${content}\n`); // prints all content in the file

// if we ommit the encoding it returns a Buffer (nodejs's way to handle binaries--so basically it is a binary)
// we can use the toString() method to 'stringify' the Buffer
const contentBuffer = fs.readFileSync(filePath); 
console.log(`=====Sync file read=====: ${contentBuffer}\n`); // prints the Buffer
console.log(`=====Sync file read=====: ${contentBuffer.toString()}\n`); // prints all content in the file


// async
fs.readFile(filePath, encoding, (err, file) => {
   console.log(`=====Async file read=====: ${file}\n`) 
});

