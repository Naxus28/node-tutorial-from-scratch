const { exec } = require('child_process'); // get the exec method from the 'child_process' module

exec('open .'); // this command opens the current directory
exec('open https://www.google.com'); // this command opens the webpage

// exec also takes a callback function in which we have access to error and stdout from the executed command
exec('cat ./exec.js', (err, stdout) => {
  if (err) {
    throw err; // catching and throwing errors is a pattern in node js 
  }

  console.log(`exec.js content: ${stdout}`); // shows the content of this file
}); 


exec('node -v', (err, stdout) => {
  if (err) {
    throw err;
  }

  console.log(`node version: ${stdout}`);
})
