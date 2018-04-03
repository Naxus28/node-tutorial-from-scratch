const { EventEmitter } = require('events'); // get the emitter via object destructuring syntax
const util = require('util');

// create a class that extends the emitter
class Animal extends EventEmitter {
  constructor(name, sound) {
    super();
    this.name = name;
    this.sound = sound;
  }
}

module.exports = Animal;