const { expect } = require('chai'); // can also use "should and assert functions"
const tools = require('../lib/tools');
const nock = require('nock');

// describe functions can be nested

describe('Tools testing suite', () => { 
  
  describe('printName()', () => {
    it('should print formattee name', () => {
      let formattedName = tools.printName({ first: 'Gabriel', last: 'Ferraz'});

      expect(formattedName).to.equal('Ferraz, Gabriel');
    });
  }); 
  
   describe('getWiki()', () => {

    // before hook: this will run before any test on this suite
    before(() => {
      // this line mocks a get request to https://en.wikipedia.org/wiki/George_Boole
      nock('https://en.wikipedia.org')
        .get('/wiki/George_Boole')
        .reply(200, 'Mock George Boole Wiki Page');
    });

    // tools.loadWiki will hit our mock server instead of the read wikipedia server
    // since we are not hitting the external service, there is no latency, 
    // so we can safely remove the 'done' function
    it('should load George Boole WikiPedia page', () => {
      tools.loadWiki({first: 'George', last: 'Boole'}, (mockContent) => {
        expect(mockContent).to.equal('Mock George Boole Wiki Page');
      })
    });
  });
});

