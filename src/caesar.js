// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //ASCII code of Lowercase letters a = 97, z = 122
  //we will be using the .toLowerCase() in order to change uppercase letters to lowercase
  const LOWERCASE_A = 97;
  const LOWERCASE_Z = 122;
  //Length of the English alphabet = 26
  const ALPHABET_LENGTH = 26;

  function caesar(input, shift, encode = true) {
    // check if shift has the proper values -25 < 0 < 25
    //If the shift does not have the proper value return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  
    //Use the toLowerCase() method to turn uppercase into lowercase
    const lowerCaseMsg = input.toLowerCase();

    //shift based on whether encode is true or false. 
    if(!encode){
      shift = shift * -1;
    }

    let coded = "";
    
    for(let i = 0; i < lowerCaseMsg.length; i++){
    // get unicode value of the current letter
    //Use the charCodeAt() in order to get the Unicode number of a character.
    let letter = lowerCaseMsg.charCodeAt(i);
      //if the value of Unicode A is less than 97 or grater than unicode Z 122
      //it is a special charatacter. 
    if (letter < LOWERCASE_A || letter > LOWERCASE_Z) {
      coded += String.fromCharCode(letter);
      //subtract alphabet length in order to make sure you do not go past 122 
    } else if (letter + shift > LOWERCASE_Z) {
      coded += (String.fromCharCode((letter + shift) - ALPHABET_LENGTH));
      //add alphabet length if it is below 97
    } else if ((letter + shift < LOWERCASE_A)) {
      coded += (String.fromCharCode((letter + shift) + ALPHABET_LENGTH));
      // trailing else
    } else {
      coded += String.fromCharCode(letter + shift);
    }
  }
    return coded;
  }

  return {
    caesar
  };
})();

module.exports = caesarModule.caesar;