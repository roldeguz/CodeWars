/*
Beginner Series #3 Sum of Numbers
11-Jul-2019
*/

function GetSum( a,b )
{
   if (a == b) {
     return a;
   } else {
     var lower = a, upper = b;
     if (a > b) {
       lower = b;
       upper = a;
     }       
     
     var result = 0;
     for (var i = lower; i <= upper; i++) {
       result += i;
     }
     
     return result;
   }
}
