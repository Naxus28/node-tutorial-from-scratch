# Events [https://nodejs.org/api/events.html](https://nodejs.org/api/events.html)

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be called.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

i.e. Simple emmiter

```javascript
  const EventEmitter = require('events');
  
  // class pattern
  class MyEmitter extends EventEmitter {}
  
  // variable pattern 
  const myEmitter = new MyEmitter();
  
  // set the listener
  myEmitter.on('event', () => {
    console.log('an event occurred!');
  });
  
  // emit the event
  myEmitter.emit('event');
```  


