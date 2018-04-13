# injecting dependencies with [rewire](https://github.com/jhnns/rewire)

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

We can mock out any dependencies of our app, not only web servers. To do so we can use the `rewire` module. A module or function that is being tested is referred to as as the "system under test" (SUT). Other modules and functions that the SUT may be dependent upon are referred to as "collaborators". 
