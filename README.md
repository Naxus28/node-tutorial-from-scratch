# process

The process object is available globally and gives us the ability to work with the current node process.
 
This object allows you to (among other things):  
1. get environment information such as environment variables 
2. communicate with the terminal or parent processes through standard input and standard output. 
3. exit current process. 
[process](https://nodejs.org/api/process.html)
 

> If you want to access the process on the terminal, enter the node REPL by typing 'node' and hitting 'enter' then type 'process.env' and hit enter.
 

> IMPORTANT NOTE 
For development purposes you can set 'NODE_ENV' on the terminal or on this module
and have development and production tasks executed depending on the environment you set

'NODE_ENV' is not set by default on 'process.env' object (why should it?)
console.log(process.env.NODE_ENV); // undefined unless you explicitly set it

To set it:

• on the terminal (mac) 'export NODE_ENV=development', (windows) 'SET NODE_ENV=development'

• on the module process.env.NODE_ENV=development

