const path = require('path');

// this is the child process that will be spawned
// this means that we will execute a different file (which creates a process)--in our case, 'spawn.js'
// and from that process we execute this file as a child process

process.stdout.write(`I am a process running from "${path.basename(__filename)}"`);

// when data is passed to this process via a spawned instance of this file in the parent process:
// const cp = spawn('node', ['spawnTest']);
// cp.stdin.write('writing into child')
// we console.log the data and exit this process (the child process)
process.stdin.on('data', function(data) {
  console.log(`STDIN Data Received -> ${data.toString().trim()}\n`);
  console.log('Closing child process\n'); 
  process.exit(); // exits this process (the child)
});