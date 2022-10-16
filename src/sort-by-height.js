const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let tempArr = [];
  let templateArr = arr.map(height => {
    if (height !== -1) {
      tempArr.push(height);
      height = -2;
      return -2
    } else return height;
  })
  tempArr.sort((a, b) => a - b)

  return templateArr.map(height => {
    if (height === -1) return height
    else {
      height = tempArr.shift();
      return height
    }
  })
}

module.exports = {
  sortByHeight
};
