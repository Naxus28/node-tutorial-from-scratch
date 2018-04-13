# test with mocha [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/)

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

Many times ourcode needs to hit a 3rd party remote service, like an api hosted on a remote server. We need the api data in production but for for testing that may be unnecessary and time consuming so we can mock that api instead of hitting the api itself. The `nock` module allows us to do just that, create mock servers.
