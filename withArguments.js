// we can pass arguments to the event callback listener
const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('args', (arg1, arg2) => console.log(`These are the arguments: ${arg1} and ${arg2}`));
eventEmitter.emit('args', 'a', 'b'); // These are the arguments: a and b

