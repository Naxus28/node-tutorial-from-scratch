/* MOCHA TEST
 * Mocha gives us a way to describe, run, and build tests
 * but it doesn't have a mechanism to check values
 * We can use Chai along with Mocha to be able to check values
 * Mocha should be installed globally (npm i -g mocha) so we can run it 
 * in any project from the command line as such "mocha <test directory>"
 * Chai should be installed per project as a dev dependency (npm i -D chai)
 */

const { expect } = require('chai'); // can also use "should and assert functions"
const tools = require('../lib/tools');


describe('printName()', () => {
  it('should do something', () => {
    let formattedName = tools.printName({ first: 'Gabriel', last: 'Ferraz'});

    expect(formattedName).to.equal('Ferraz, Gabriel');
  });
});