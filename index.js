const Person = require('./classes/Person'); // user created modules need to be imported using relative path
const Animal = require('./classes/Animal');

const peter = new Person('Peter');
const parrot = new Animal('Kraken', 'squawk');


// use 'function' so 'this' refers to Person 
peter.on('greet', function(greeting) {
  console.log(`${this.name} says '${greeting}'.`)
});

peter.emit('greet', 'hello folks'); // Peter says hello folks.


// parrot
parrot.on('squawk', function() {
  console.log(`${this.name} ${this.sound}s.`)
});

parrot.emit('squawk');