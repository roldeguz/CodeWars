/*
Challenge: Vowel Count
26-Jul-2019
*/

public class Vowels {

  public static int getCount(String str) {
    int vowelsCount = 0;    
    
    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      
      int asciiCode = ch;            
      
      if (asciiCode == 97 || asciiCode == 101 || asciiCode == 105 || asciiCode == 111 || asciiCode == 117) {
        vowelsCount++;
      }      
    }
    
    return vowelsCount;
  }

}
