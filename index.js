/*
 * The process.nextTick() method adds the callback to the "next tick queue". 
 * Once the current turn of the event loop turn runs to completion, 
 * all callbacks currently in the next tick queue will be called.
 * This is not a simple alias to setTimeout(fn, 0). 
 * It is much more efficient. It runs before any additional I/O events (including timers) 
 * fire in subsequent ticks of the event loop.
 * https://nodejs.org/api/process.html#process_process_nexttick_callback_args
 */

// functions
let logger = (param) => {
  param = param || 'No arg passed';
  console.log(param);
};

let getDirections = (location) => {
  if (location === 'home') { 
    logger('Go straight'); 
  }

  if (location === 'downtown') { 
    process.nextTick(() => logger('Make a right at the light')); 
  }  

  if (location === 'uptown') { 
    setTimeout(() => logger('Make a left at the light'), 0);
  }

};

let askDirections = (location, cb) => cb(location);

// logging
logger('Start'); // 1

setTimeout(() => logger('sto 1'), 0); // 6

setTimeout(() => logger('sto 2'), 0); // 7

process.nextTick(() => logger('Next tick')); // 4 -- runs before setTimeout

askDirections('home', getDirections); // 2

askDirections('downtown', getDirections); // 5 -- calls 'process.nextTick' in the 'if' block

askDirections('uptown', getDirections); // 8 -- calls 'setTimeout' in the 'if' block; runs after all other events are finished

logger('End'); // 3

/*
Prints:
  1.Start
  2.Go straight
  3.End
  4.Next tick
  5.Make a right at the light
  6.sto 1
  7.sto 2
  8.Make a left at the light
*/

