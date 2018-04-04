const fs = require('fs');

/* SYNCHRONOUS READ
 * https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
 * this function reads the file synchronously, meaning it blocks the node thread
 * until all files are read. 
 * This function is well suited for app initialization, where you would want 
 * all config files to have been initialized before you start running the app.
 */ 
const files = fs.readdirSync('./lib');
console.log(`In sync call: ${files}`); // [ 'index.js', 'utils' ]

/* ASYNCHRONOUS READ
 * node asynchronous functions take a callback
 * where we can process data passed back from the function call
 * so we cannot assign the function to variable like we did above in the synchronous call
 */ 

// when node reaches this line it starts reading the files
// but then continues down with other tasks
// The callback will be executed once all 
// synchronous code--and asychronous code registered before the below function--has been executed
fs.readdir('./lib', (err, files) => {
  if (err) {
    throw err;
  }

  console.log(`In async call: ${files}`);
});

console.log('This line is below the async console.log() but will run before it.');