/*
Decode the Morse code kata (1/3)
10-Jul-2019
*/

var decodeMorse = function(morseCode){
  var decodedString = "";
  /* Make sure to remove leading and trailing spaces; split into array using "   " as delimiter */
  var words = morseCode.trim().split("   ");
  
  var i = 0;
  /* Iterate per word */
  words.forEach(function(word) {
    var chars = word.split(" ");
    
    /* Iterate per character */
    chars.forEach(function(char) {
      decodedString += MORSE_CODE[char];
    });
    
    if (i < words.length - 1)
      decodedString += " ";
      
    i++;
  });
  
  return decodedString;
}
