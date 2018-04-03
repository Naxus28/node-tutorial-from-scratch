const { EventEmitter } = require('events'); // get the emitter via object destructuring syntax
const util = require('util');

// Possible ways to inherit:
// add the emmiter directly into a constructor function prototype
// (perhaps not the best way but we know the EventEmitter object is not going to change so this should be fine)
// Person.prototype.EventEmitter = EventEmitter;


// use node's util.inherits() to create inheritance 
function Person(name) {
  this.name = name;
}

util.inherits(Person, EventEmitter);

const peter = new Person('Peter');

// use 'function' so 'this' refers to Person 
peter.on('greet', function(greeting) {
  console.log(`${this.name} says ${greeting}.`)
});

peter.emit('greet', 'hello folks'); // Peter says hello folks.


/////////////////////


// create a class that extends the emitter
class Animal extends EventEmitter {
  constructor(name, sound) {
    super();
    this.name = name;
    this.sound = sound;
  }
}

const bird  = new Animal('bird', 'chirps');

bird.on('makeSound', function() {
  console.log(`A ${this.name} ${this.sound}.`)
});

bird.emit('makeSound'); // A bird chirps.




