const { expect } = require('chai'); 
const rewire = require('rewire');
const sinon = require('sinon');

// notice we are using 'rewire' to require the file
// this will allow us to use mock data instead of real data on tests
const users = rewire('../lib/users');  

// describe functions can be nested
describe('Users', function() { 
  describe('getCountBy()', function() {
    beforeEach(function() {
      this.users = [
        {
         gender: 'Female',
         nationality: 'Costa Rican',
         country: 'US'
        },
        {
         gender: 'Male',
         nationality: 'Hmong',
         country: 'IE'
        },
        {
         gender: 'Female',
         nationality: 'Costa Rican',
         country: 'US'
        },
        {
         gender: 'Male',
         nationality: 'Hmong',
         country: 'IE'
        },
        {
         gender: 'Female',
         nationality: 'Ute',
         country: 'NG'
        }
      ];

      // this spy allows us to get information
      // about the calls to countBy: http://sinonjs.org/releases/v4.5.0/spies/ (check 'Properties')
      this.spy = sinon.spy(users.countBy);

      // call the spy twice so we 
      // can then get information about the calls later
      this.spy({gender: 'Male', country: 'BR'});
      this.spy({gender: 'Male'});

      users.__set__('users', this.users); 
    });

    it('should count 3 females', () => {
      // we have 3 female users in the mocked array above
      expect(users.countBy({gender: 'Female'})).to.equal(3);
    });

    it('should count 2 males', () => {
      // we have 2 males from Hmong in the mocked array above
      expect(users.countBy({gender: 'Male', nationality: 'Hmong'})).to.equal(2);
    });

    // get information about the spy calls
    it('should call countBy 2 times', () => {
      // because we are using lambda functions 
      // we need to get the spy function created in  'beforeEach'
      // from 'this.ctx' as opposed to 'this' (console.log(this) to see what it looks like)
      expect(this.ctx.spy.callCount).to.equal(2);  
    }); // get information about the calls
    

    it('should call countBy twice--check with calledTwice', () => {
      expect(this.ctx.spy.calledTwice).to.be.true;  
    });  

    it('should assert that the first spy is called with {gender: \'Male\'}', () => {
      expect(this.ctx.spy.firstCall.args[0].gender).to.equal('Male');  
    }) 

    it('should assert that the first spy is called with {coutry: \'BR\'}', () => {
      expect(this.ctx.spy.firstCall.args[0].country).to.equal('BR');  
    })

  });
});

