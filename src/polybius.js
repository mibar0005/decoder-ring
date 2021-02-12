// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Create a poly table (as shown in class) letter: number
  const polyTable = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52,
    l: 13, m: 23, n: 33, o: 43, p: 53,
    q: 14, r: 24, s: 34, t: 44, u: 54,
    v: 15, w: 25, x: 35, y: 45, z: 55,
  };
  
  //create the reverse of the poly table number : "letter"
  const decodedPoly = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
    12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z',
  };

  function polybius(input, encode = true) {
    // your solution code here
    //Use the toLowerCase() to turn uppercase letters into lowercase.
    const lowCase = input.toLowerCase();

    //Create an empty array to push the results into 
    let result = [];

    //check for encode is false 
    if (encode === false) {

      //Use the split method in order to remove the extra pases 
      let splitInput = input.split(" ");

      //Create an array to then use the .push() on the words to create a complete sentence.
      let completeSentence = [];

      //Use a for of loop in order to iterate over the array
      for (word of splitInput) {
        //Use the if statement to check for characters, if so, return false
        if (word.length % 2 !=0) {
          return false;
        } else {
          //create an empty array, use a for loop in order to add the charaters to create a word
          let words = [];
          for (let i = 0; i < word.length; i += 2){
            let letter = decodedPoly[Number([`${word[i]}${word[i+1]}`])];
            words += letter;
          }
          //Use the push method in order to push the words into the completeSentence array
          completeSentence.push(words);
        }
      }
      //Use the .join() method to join all elements of an array into a string. 
      return completeSentence.join(' ');
    };

    //Use a for in loop in order to iterate through lowCase
    for (let letter in lowCase){
      const character = lowCase[letter];
      //Use ternary operator to push 
      character === " " ? result.push(character) : result.push(`${polyTable[character]}`);
    }
    //Use the join method in order to all the elements into a string.
    return result.join('');
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
