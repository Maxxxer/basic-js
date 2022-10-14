const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let counter = 0;
  let prev = '';
  str = str.split('');
  str.push(' ');
  for (let letter of str) {
    if (prev === '')
      prev = letter;

    if (letter === prev) {
      counter++;
    } else {
      arr.push([counter, prev])
      counter = 1;
      prev = letter;
    }
  }
  return arr.join('').replace(/\,/g, '').replace(/1/g, '')
}


module.exports = {
  encodeLine
};
