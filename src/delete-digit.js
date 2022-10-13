const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let interArray = [];
  let array = n.toString().split('')
  for (let i = 0; i < array.length; i++) {
    let spliced = array.splice(i, 1);
    interArray.push(+array.join(''))
    array.splice(i, 0, spliced)
  }
  return Math.max(...interArray)
}

module.exports = {
  deleteDigit
};
