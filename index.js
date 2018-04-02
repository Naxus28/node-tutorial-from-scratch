// node has the same timing functions as js
// setTimeout, setInterval, clearInterval
// as well as its own timing functions such as setImmediate and clearImmediate
// https://nodejs.org/api/timers.html
// look into 'process.nextTick' as well
// https://nodejs.org/api/process.html#process_process_nexttick_callback_args

const totalTime = 5000;
const waitTime = 10;
let currentTime = 0;
let percentageTime = 0;

let printPercentage = (p) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Loading... ${p}%`);
};

let timer = setInterval(() => {
  currentTime += waitTime;
  percentageTime = Math.floor((currentTime/totalTime) * 100);
  printPercentage(percentageTime);
}, waitTime);


setTimeout(() => {
  clearInterval(timer);
  printPercentage(100);
  console.log('\ndone'); 
}, totalTime);































