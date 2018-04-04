const { spawn } = require('child_process');

// create the child process instance passing an array of modules to be 
// executed in this process as second argument 
const cp = spawn('node', ['spawnChild']);

// listen to data output from the child process (stdout or console.log)
// prints the data sent from the child process' output function 
cp.stdout.on('data', (data) => {
  console.log(`STDOUT in parent process gets data from child process: ${data.toString()}`);
}); 

// listen to data process.exit() in the child
cp.on('close', () => {
  console.log('Closing spawn on parent process.');
  process.exit(); // exits this process (the parent)
});

setTimeout(function() {
  // process.stdin.on() in the child will listen to this 'write'
  // we exit the child process once we this spawn writes to it
  cp.stdin.write('Stop child process');
}, 3000);