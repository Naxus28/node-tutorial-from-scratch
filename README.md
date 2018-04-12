# test with mocha [mocha](https://mochajs.org/) and [chai](http://www.chaijs.com/)

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

Sometimes we need to perform tests where functions need some extra time to process data (receiving data from a 3rd party remote api for instance). In those cases we can perform asynchronous tests with the mocha framework.
