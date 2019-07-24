/**
Format a string of names like 'Bart, Lisa & Maggie'.
*/
function list(names) {
  var r = names.map(n => n.name);
  
  return (r.length == 0) ? '' : r.join(', ').replace(/,(?=[^,]+$)/, ' &');  
}
