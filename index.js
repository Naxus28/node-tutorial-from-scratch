
/* the process object is available globally and gives us the ability to work with the current node process.
 * this object allows you to (among other things):  
 * 1. get environment information such as environment variables 
 * 2. communicate with the terminal or parent processes through standard input and standard output. 
 * 3. exit current process. 
 */
console.log(process.version); // your node version
console.log(process.env); // an object with your environment settings
console.log(process.env.USER); // i.e. your user name

// if you want to access the process on the terminal,
// enter the node REPL by typing 'node' and hitting 'enter'
// then type 'process.env' and hit enter


/*
 * IMPORTANT NOTE 
 * for development purposes you can set 'NODE_ENV' on the terminal or on this module
 * and have development and production tasks executed depending on the environment you set
 * 'NODE_ENV' is not set by default on 'process.env' object (why should it?)
 * console.log(process.env.NODE_ENV); // undefined unless you explicitly set it
 * To set it:
 * • on the terminal (mac) 'export NODE_ENV=development', (windows) 'SET NODE_ENV=development'
 * • on the module process.env.NODE_ENV=development
 */

function checkEnv() {
  if (process.env.NODE_ENV==='development') {
    console.log('you set the environment to development');
  } else if (process.env.NODE_ENV==='production') {
    console.log('you set the environment to production');
  } else {
    console.log('you didn\'t set process.env.NODE_ENV');
  }
}

checkEnv(); // process.env.NODE_ENV was not set

// set development env
process.env.NODE_ENV='development';
checkEnv(); //development

// set production env
process.env.NODE_ENV='production';
checkEnv(); //production


