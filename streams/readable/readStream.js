const fs = require('fs');

// ======READING FILE WITH .READFILE: not ideal for large files======
// reading file with readFile is fine for small files
// but for large pieces of data, there may be latency if the
// application has high traffic because the callback function
// is only called after the whole file has been read
// Additionally, the entire content of the file is be buffered in the 
// one variable passed in the parameter (in this case 'lorem')

// fs.readFile('./lorem.txt', 'UTF-8', (err, lorem) => {
//   if (err) {
//     throw err;
//   }

//   console.log(`/lorem.txt is ${lorem.length} chars long`) 
// });



// ======READING FILE USING STREAMS: ideal for large files======
// instead of waiting for the whole file to be read, 
// the stream allows us to receive small chunks of data at a time
const stream = fs.createReadStream('./lorem.txt', 'UTF-8');
let fileContent = ''; // use this variable to store the chunks read from the stream


// this event is reaised only once when the stream starts
// reading the data
stream.once('data', () => {
  console.log('\n\nStarted reading the file.\n\n');
});

// read chuncks of data when it is received by the stream
stream.on('data', loremChunk => {
  process.stdout.write(`\n\nChunk length: ${loremChunk.length}\n\n`); 
  fileContent+=loremChunk;
});

// listen to the stream when it finishes reading the data
stream.on('end', () => {
  console.log(`\n\nThe stream has finished reading data.\n\n`); 
  // console.log(`File CONTENT: \n===========\n\n${fileContent}`); 
});