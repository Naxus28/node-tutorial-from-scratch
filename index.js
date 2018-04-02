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

