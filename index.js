// node has the same timing functions as js
// setTimeout, setInterval, clearInterval
// as well as its own timing functions such as setImmediate and clearImmediate
// https://nodejs.org/api/timers.html

var currentTime = 0;
var waitInterval = 10;
var percentageTime = 0;
var totalTime = 5000;

function writeWaitingPercent(p) {
  process.stdout.clearLine(); // clears the line on terminal
  process.stdout.cursorTo(0); // moves cursor (and content printed on terminal) back to index 0
  process.stdout.write(`Completed processing... ${p}%`);
}

var timer = setInterval(function() {
  currentTime += waitInterval;
  percentageTime = Math.floor((currentTime/totalTime) * 100);
  writeWaitingPercent(percentageTime)
}, waitInterval);


setTimeout(function() {
  clearInterval(timer);
  writeWaitingPercent(100);
  console.log('\ndone'); 
}, totalTime);

