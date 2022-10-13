const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) return ('Unable to determine the time of year!');
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!');
  let month = date.getMonth();
  let check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  if (check.includes(month)) {
    return (month === 11 || month === 0 || month === 1) ? 'winter' :
      (month === 2 || month === 3 || month === 4) ? 'spring' :
        (month === 5 || month === 6 || month === 7) ? 'summer' :
          (month === 8 || month === 9 || month === 10) ? 'autumn' : 'Unable to determine the time of year!'
  }
  else return 'Unable to determine the time of year!';

}

module.exports = {
  getSeason
};
