const { EventEmitter } = require('events'); // get the emitter via object destructuring syntax
const util = require('util');

// create a class that extends the emitter
class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

module.exports = Person;