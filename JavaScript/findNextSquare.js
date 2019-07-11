/*
Find the next perfect square!
11-Jul-2019
*/

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if (Math.sqrt(sq) % 1 !== 0)
    return -1;
  else
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
}
