// es6 object enhancement notation allows 
// to define functions within objects using the below syntax

module.exports = {
  printName(name) {
    return `${name.last}, ${name.first}`
  }
};