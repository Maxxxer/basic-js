const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  for (let item in options) {
    if (options[item] == null) {
      options[item] = 'null';
      console.log(options[item])
    }
  }
  if (str == null) str = 'null';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (typeof options.addition === 'boolean') options.addition = options.addition.toString();
  if (!options.addition) options.addition = '';
  if (!options.optionSubstring) options.optionSubstring = '';
  if (!options.separator) options.separator = '+';
  let optionSubstring = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  console.log(typeof options.addition)
  /*   if (options.additionRepeatTimes === 1){
    optionSubstring = optionSubstring;
    } else   */
  optionSubstring = optionSubstring.substr(0, optionSubstring.length - options.additionSeparator.length)
  console.log(optionSubstring)
  let oneString = (str + optionSubstring + options.separator)
  console.log(oneString)
  let finalString = oneString.repeat(options.repeatTimes);
  return finalString.slice(0, -options.separator.length);
}

console.log((repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'))

module.exports = {
  repeater
};
