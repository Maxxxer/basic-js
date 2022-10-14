const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }
  encrypt(string, key) {
    if (typeof key != 'string' || typeof string != 'string' || key === '' || string === '') throw new Error('Incorrect arguments!')
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    string = string.toUpperCase().split('');
    let keyIterator = 0;
    let cipherText = [];
    let mod = 26;
    let regex = /[A-Z]/i;
    key = key.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      if (!regex.test(string[i])) {
        cipherText.push(string[i]);
        continue;
      }
      cipherText.push(letters[((letters.indexOf(string[i]) + letters.indexOf(key[keyIterator]))) % mod])

      if (keyIterator < key.length - 1) keyIterator++
      else keyIterator = 0;
    }
    console.log(cipherText)

    return (this.direction === false) ? cipherText.reverse().join('') : cipherText.join('');
  }

  decrypt(string, key) {
    if (typeof key != 'string' || typeof string != 'string' || key === '' || string === '') throw new Error('Incorrect arguments!')
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    string = string.toUpperCase().split('');
    let keyIterator = 0;
    let cipherText = [];
    let mod = 26;
    let regex = /[A-Z]/i;
    key = key.toUpperCase();
    for (let i = 0; i < string.length; i++) {

      if (!regex.test(string[i])) {
        cipherText.push(string[i]);
        continue;
      }
      cipherText.push(((letters.indexOf(string[i]) - letters.indexOf(key[keyIterator])) >= 0) ? (letters[((letters.indexOf(string[i]) - letters.indexOf(key[keyIterator]))) % mod]) : (letters[((letters.indexOf(string[i]) - letters.indexOf(key[keyIterator]))) + mod]))
      if (keyIterator < key.length - 1) keyIterator++
      else keyIterator = 0;
    }


    return (this.direction === false) ? cipherText.reverse().join('') : cipherText.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
