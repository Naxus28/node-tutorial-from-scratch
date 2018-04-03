const events = require('events');
const eventEmitter = new events.EventEmitter();

const sync= () => console.log('sync call');
const async = () => process.nextTick(() => console.log('async call'));

eventEmitter.on('async', async);

eventEmitter.emit('async'); // this event will be emitted at the end of the queue list

eventEmitter.on('sync', sync);
eventEmitter.emit('sync'); // this event will be emitted before async even though it is registered before async


/*
  Prints: 
    sync call
    async call
 */