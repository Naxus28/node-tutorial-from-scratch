const request = require('supertest');
const expect = require('chai').expect;
const cheerio = require('cheerio');
const rewire = require('rewire');
const app = rewire('../app');

describe('Programming Dictionary App', () => {

  it('Loads the home page', done => {
    // use supertest to mock a request to the homepage
    // Because this is an asynchronous test
    // we pass the 'done' method to supertest's 'end' method, which expects a function
    // We can also pass 'done' straight into the 'expect' method as a second argument
    // .expect(200, done)--the 'expect' method here is from supertest, not from chai\
    // Differently than requests that respond with json, this one reponds with html, js, and css
    // because we are getting the app's static data
    // Here we can use 'Cheerio' to help us test the response
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        const $ = cheerio.load(res.text); // now we can traverse the dom like we would with jQuery
        const heading = $('h1').text();

        // check if the heading is the same as the one in index.html
        expect(heading).to.equal('Programming Dictionary');
        done();
      });
  });

  describe('Dictionary API', () => {
    beforeEach(() => {
      this.dict = [
        {
          term: 'One',
          definition: 'Term One Definition'
        },
        {
          term: 'Two',
          definition: 'Term Two Definition'
        }
      ];

      // use rewire to set the sample data in
      // the api call to this mock data
      app.__set__('dict', this.dict);
    });

    it('GETS dictionary-api', done => {
      let dict = this.dict; // cache this to use in callback (this will have a different scope in the callback)
      // test the get '/dictionary-api' route
      // similar to the static GET above
      // here are using supertest's call back to check if 
      // the response data is what we expect
      request(app)
        .get('/dictionary-api')
        .expect(200)
        .end((err, res) => {
          expect(JSON.parse(res.text)).to.deep.equal(dict); // deep.equal => http://www.chaijs.com/api/bdd/#method_deep
          done();
        }); 
    });

    it('POSTS dictionary-api', done => {
      // tests post requests to '/dictionary-api' route
      // by sending some mock data 
      request(app)
        .post('/dictionary-api')
        .send({ 'term': 'Three', 'definition': 'Term Three Definition'})
        .expect(200)
        .end(done);
    });

    it('DELETES dictionary-api', done => {
      // tests delete requests to '/dictionary-api/:term' route
      // Because we are passing mock data with rewire, we know what term we can
      // use in the delete call without having to know what the actual data looks like
      // In our case, we could simply look into 'server/data.js' and choose
      // one of the pre-defined terms in the sample data (such as JS Closures)
      // and pass it in this route, but in a real life situation, where data comes
      // from a database, looking into the tables to check what the expected data looks like
      // is time consuming and is not reliable (data can be removed) 
      request(app)
        .delete('/dictionary-api/One') // we defined 'One' as a term in our mock data above
        .expect(200)
        .end(done);
    });
  });
});