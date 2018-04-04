const fs = require('fs');

// first arg is the file, second arg is the text encoding
const content = fs.readFileSync('./readdir.js', 'UTF-8'); 
console.log(`=====Sync file read=====: ${content}\n`); // prints all content in the file

// if we ommit the encoding it returns a Buffer (nodejs's way to handle binaries--so basically it is a binary)
// we can use the toString() method to 'stringify' the Buffer
const contentBuffer = fs.readFileSync('./readdir.js'); 
console.log(`=====Sync file read=====: ${contentBuffer}\n`); // prints the Buffer
console.log(`=====Sync file read=====: ${contentBuffer.toString()}\n`); // prints all content in the file


// async
fs.readFile('./readdir.js', 'UTF-8', (err, file) => {
   console.log(`=====Async file read=====: ${file}\n`) 
});

