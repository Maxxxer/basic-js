const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
    switch (result[i]) {
      case ('--discard-next'):
        if (i + 1 < result.length) {
          result[i + 1] = null;
        }
        result.splice(i, 1);
        i = 0;
        break;
      case ('--discard-prev'):
        console.log('hi');
        if (i - 1 >= 0) {
          result.splice(i - 1, 2);
        } else
          result.splice(i, 1);
        console.log(result)
        i = 0;
        break;
      case ('--double-next'):
        console.log('hi');
        if (i + 1 < result.length) {
          result[i] = result[i + 1]
        } else
          result.splice(i, 1)
        i = 0;
        break;
      case ('--double-prev'):
        console.log('hi');
        if (i - 1 >= 0) {
          console.log('hi')
          result[i] = result[i - 1]
        } else
          result.splice(i, 1)
        i = 0;
        break;
    }
  }
  while (result.includes(null))
    result.splice(result.indexOf(null), 1)
  return result;
}

module.exports = {
  transform
};
