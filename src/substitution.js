// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //check for alphabet, length of alphabet, and make sure alphabet is a string
    if (!alphabet || alphabet.length < 26 || typeof(alphabet)!= 'string'){
       return false;
    }
    //empty object to store message
    let subAlphabet = {};

    //Use the toLowerCase() method in order to turn uppdase letter to lowercase.
    const lowerCaseInput = input.toLowerCase();

    //Crete an empty array to hold the final result
    let result = []; 

    // Use for in loop to check for non chars in the alphabet
    for (let char in alphabet) {
      const character = alphabet[char];
      //Use the slice method in order go thorugh the array
      //Use the includes method to see if it includes a charater
      if(alphabet.slice(char + 1).includes(character)) {
        return false;
      } else {
        subAlphabet[englishAlphabet[char]] = character; 
      }
    }
  
   //Use a for in loop to iterate through each character in input.
   //return a value of chracter is in the sub alph
   //Use the push method in order to push char into the result 
    for (value in lowerCaseInput) {
      const character = lowerCaseInput[value];
      character in subAlphabet ? result.push(subAlphabet[character]) :  result.push(character);
    }

    //deconding
    if (encode === false) {
      //Create a an empty array for the decoing
      decodingAlph = [];
      //create an empty array for the decoded result 
      decodeResult = [];

      //Use a for in loop to go thourgh the alphabet
      for (let letter in alphabet) {
        const character = alphabet[letter];
        decodingAlph[character] = englishAlphabet[letter]; 
      }

      for (let letter in lowerCaseInput) {
        const character = lowerCaseInput[letter];
        character in decodingAlph ? decodeResult.push(decodingAlph[character]) : decodeResult.push(character);
      }
      return decodeResult.join('');
    }
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;