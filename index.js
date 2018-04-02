// Try this: on the terminal, pass such vars as
// node index --user "Your name" --greeting "Welcome"  
// params prefixed with "--" will be used as flags so we can get the values we want (the name and the greeting)
// "" on the arguments is optional

function getFromREPL(flag) {
  let index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index+1];
}

let user = getFromREPL('--user');
let greeting = getFromREPL('--greeting');

if (!user || !greeting) {
  console.log('No good!');
} else {
  console.log(`${greeting} ${user}`);
}