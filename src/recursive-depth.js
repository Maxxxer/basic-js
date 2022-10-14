const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    arr = arr.filter(item => Array.isArray(item));
    if (arr.length > 0) {
      arr = arr.flat();
      return this.calculateDepth(arr, ++depth);
    }
    return ++depth;
  }
}
module.exports = {
  DepthCalculator
};
