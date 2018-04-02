// module
const path = require('path');

// strings
const somePath = 'www.site.com/folder/innerfolder/index.html';
const pathToThisFile = __filename;

// helpers
const getBaseName = (pathString) => path.basename(pathString);
const getDirName = (pathString) => path.dirname(pathString);
const getExtName = (pathString) => path.extname(pathString);
const parsePath = (pathString) => path.parse(pathString);


// path.basename(path)
console.log(getBaseName(somePath)); // index.html
console.log(getBaseName(pathToThisFile)); // index.js


// path.dirname(path)
console.log(getDirName(somePath)); // www.site.com/folder/innerfolder
console.log(getDirName(pathToThisFile)); // /Users/gferraz/Desktop/node-tutorial-from-scratch


// path.extname(path)
console.log(getExtName(somePath)); // .html
console.log(getExtName(pathToThisFile)); // .js


// path.join([...paths])
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // /foo/bar/baz/asdf -- path is normalized; see path.normalize(path)
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')); // /foo/bar/baz/asdf/quux


// path.parse(path)
console.log(parsePath(somePath));
/*
{ root: '',
  dir: 'www.site.com/folder/innerfolder',
  base: 'index.html',
  ext: '.html',
  name: 'index' }
 */
console.log(parsePath(pathToThisFile));
/*
{ root: '/',
  dir: '/Users/gferraz/Desktop/node-tutorial-from-scratch',
  base: 'index.js',
  ext: '.js',
  name: 'index' }
 */


// path.relative(from, to): returns the relative path from from to to based on the current working directory
// If from and to each resolve to the same path (after calling path.resolve() on each), a zero-length string is returned.
const someFakeFile = path.join(__dirname, 'main.js');
console.log(path.relative(__filename, someFakeFile)); // ../main.js -- relative path from one file to another


// path.resolve([...paths]):  resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve('/foo/bar', './baz')); // /foo/bar/baz
console.log(path.resolve('/foo/bar', '/tmp/file/')); // /tmp/file



