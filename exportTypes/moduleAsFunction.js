// this is not the most flexible way to export a module
const PI = Math.PI;

// use parens to simplify this syntax:
// module.exports = { return { area: fn, circumference: fn}}
module.exports = (r) => ({
  area: () => PI * r * r,
  circumference: () => 2 * PI * r
});
