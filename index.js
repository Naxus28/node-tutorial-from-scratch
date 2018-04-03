const events = require('events');

// EventEmitter is a constructor
const eventEmitter = new events.EventEmitter();

// listenerCount is a function
const eventEmitterListenerCount = require('events').EventEmitter.listenerCount;

// listener #1
const listener1 = () => console.log('listener1 executed.');

// listener #2
const listener2 = () => console.log('listener2 executed.');

// Bind a custom 'connection' event with the listener1 function
eventEmitter.on('connection', listener1);

// Bind the connection event with the listener2 function(this is an alias to '.on')
eventEmitter.addListener('connection', listener2);

let eventListeners = eventEmitterListenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of 'listener1' function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = eventEmitterListenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Remove the binding of 'listener1' function
eventEmitter.removeListener('connection', listener2);
console.log("Listener2 will not listen now.");

eventListeners = eventEmitterListenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");

/*
  Prints:
    2 Listener(s) listening to connection event
    listener1 executed.
    listener2 executed.
    Listener1 will not listen now.
    listener2 executed.
    1 Listener(s) listening to connection event
    Listener2 will not listen now.
    0 Listener(s) listening to connection event
    Program Ended.
*/

