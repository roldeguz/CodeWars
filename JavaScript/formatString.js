/**
Format a string of names like 'Bart, Lisa & Maggie'.
24-Jul-2019
*/

function list(names) {
  var r = names.map(n => n.name);
  
  return (r.length == 0) ? '' : r.join(', ').replace(/,(?=[^,]+$)/, ' &');  
}
