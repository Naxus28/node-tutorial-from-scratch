# creating spies with [sinon](http://sinonjs.org/releases/v4.5.0/) -- no stub code on this file. Check this [video tutorial](https://www.youtube.com/watch?v=Qlmv7nox5pM) and [this tutorial](https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/) for examples

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

"Test stubs are functions (spies) with pre-programmed behavior.

They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.

As spies, stubs can be either anonymous, or wrap existing functions. When wrapping an existing function with a stub, the original function is not called.

When to use stubs?
Use a stub when you want to:

Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.

When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a XMLHttpRequest or similar)." [sinon.js](http://sinonjs.org/releases/v4.5.0/stubs/)


"Stubs are the go-to test-double because of their flexibility and convenience. They have all the functionality of spies, but instead of just spying on what a function does, a stub completely replaces it. In other words, when using a spy, the original function still runs, but when using a stub, it doesn’t."[sitepoint](https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/)

Common use cases:
- Replace ajax calls to prevent calls to db
- Get output when a function throws
- Invoke callback functions with custom (hardcoded) values

