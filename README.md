# creating spies with [sinon](http://sinonjs.org/releases/v4.5.0/)

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

"With Sinon, we can replace any JavaScript function with a test-double, which can then be configured to do a variety of things to make testing complex things simple.

Sinon splits test-doubles into three types:

Spies, which offer information about function calls, without affecting their behavior
Stubs, which are like spies, but completely replace the function. This makes it possible to make a stubbed function do whatever you like — throw an exception, return a specific value, etc
Mocks, which make replacing whole objects easier by combining both spies and stubs." [sitepoint](https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/)
