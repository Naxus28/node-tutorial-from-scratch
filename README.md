# Child Process [https://nodejs.org/api/child_process.html](https://nodejs.org/api/child_process.html)

The two main child process methods are `exec` and `spawn`. 

  (or the file system).

`Exec` provides a good way node to communicate with external processes in the environment(such as `open`, `ls`, etc). It is good for working with processes that return small pieces of data.

`Spawn` on the other hand is good to work with ongoing processes that return large amounts of data, such as running a process on a <parent.js> and creating and interacting with processes in other js files <child-one.js> <<child-two.js>, ect.



```javascript
// parent=process.js
const { spawn } = require('child_process'); // gets the spawn function
const cp = spawn('node', ['child-process']); // creates a spawn on child-process.js, meaning we can interact with that parent=process via the 'cp' instance


// Some ways in which processes can interact:

// 1. parent process captures data written from the child process (via stdout or console.log)
// child-process.js
process.stdout.write('some data');

// parent=process.js
cp.stdout.on('data', (data) => {
  // code here
}); 

// 2. write data to the child process. If the child process is listening to stdin we can perform some action when this data is written.

// parent=process.js
cp.stdin.write('some data'); 

// child-process.js
process.stdin.on('data' data => {
  // code here
})
```


