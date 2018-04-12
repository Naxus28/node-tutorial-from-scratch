const { expect } = require('chai'); // can also use "should and assert functions"
const tools = require('../lib/tools');

// describe functions can be nested

describe('Tools testing suite', () => { 
  
  describe('printName()', () => {
    it('should print formattee name', () => {
      let formattedName = tools.printName({ first: 'Gabriel', last: 'Ferraz'});

      expect(formattedName).to.equal('Ferraz, Gabriel');
    });
  }); 
  
   describe('getWiki()', () => {
    it('should load George Boole WikiPedia page', (done) => {

      // This function runs asynchronous code
      // so mocha needs to know that the code has not
      // finished executing before it asserts it.
      // That is why we use 'done': mocha waits until this function is called
      // to assert the test. 
      // The default wait time is 2000ms (it can be customized).
      // If the 'done' function is not called mocha fails
      tools.loadWiki({first: 'George', last: 'Boole'}, (html) => {
        expect(html).to.be.ok;
        done();
      })
    });
  });
});

