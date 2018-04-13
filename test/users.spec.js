const { expect } = require('chai'); 
const rewire = require('rewire');

// notice we are using 'rewire' to require the file
// this will allow us to use mock data instead of real data on tests
const users = rewire('../lib/users');  

// describe functions can be nested
describe('Users', function() { 
  describe('getCountBy()', function() {

    beforeEach(function() {

      // here we create the mock data that we will 
      // use instead of the real data from users.json
      // we just need the properties we are going to 
      // test against so the objects don't need to have all
      // properties the original objects do
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

      // here we use "rewire's" set method to set
      // the value of the private variable (const users = require('../data/users')) in users.js
      // so that our test use our mock data instead of the original data
      // this is also very useful when you need to test data incoming from an api
      // and don't have the data available locally

      // setting the private variable 'users' in users.js to this.users
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

  });
});

