# code coverage with [istanbul](https://github.com/gotwarlost/istanbul)

Mocha gives us a way to describe, run, and build tests but it doesn't have a mechanism to check values. We can use Chai along with Mocha to be able to check values.
Mocha should be installed globally `npm i -g mocha` so we can run it in any project from the command line as such `mocha <test directory> or <test file>`. Chai should be installed per project as a dev dependency `npm i -D chai`.

Istanbul aloows us to check code coverage on our tests (how much of the code we are actually testing).

To run istanbul from the command line, install it globally: `npm i -g istanbul`.
Then run it as such `istanbul cover _mocha` (the underscore is needed because "mocha" forks the "_mocha" process but istanbul doesn't work with "mocha" so we need to work directly with "_mocha"). 

This creates a /coverage directory with an index.html file that we can open on the browser to see more details about coverage results.

We can also include this command under the scripts key in package.json and run that script instead:

```javascript
{
  "scripts": {
    "coverage": "istanbul cover _mocha"
  }
}
```

and run as such `npm run coverage`

> Mocha will look for test in a /test directory by default. Make sure you create this directory and run the istanbul mocha command from a level up the directory
e.g.
root -- run test at this level
  /test
    test.js