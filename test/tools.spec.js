const { expect } = require('chai'); // can also use "should and assert functions"
const tools = require('../lib/tools');

describe('printName()', () => {
  it('should do something', () => {
    let formattedName = tools.printName({ first: 'Gabriel', last: 'Ferraz'});

    expect(formattedName).to.equal('Ferraz, Gabriel');
  });
});