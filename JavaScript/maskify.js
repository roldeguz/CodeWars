/*
Credit Card Mask
10-Jul-2019
*/

function maskify(cc) {
  if (cc.length <= 4)
    return cc;
  else
    return cc.replace(/.(?=.{4,}$)/g, '#');
}
