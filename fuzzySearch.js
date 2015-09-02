/// What about:   nesting loops and assigning a binary
// you can assign 0 or 1 if the letters match or not in the string,
// vs the string in the array.  Then you can say that when you reduce the array
// of numbers, if you are in a tolerance range of two maybe, in between two given numbers
// you can return a positive match

/// so loop
/// loop
/// assign 1 or 0 if matching
/// return numbers
/// reduce numbers
/// return letters
/// if numbers are in between

var names = [
 'Amanda',
 'Sam',
 'Nick',
 'Nicholas',
 'Roberto',
 'Robbie',
 'Apart',
 'Marcus'
];

function search(criteria, arrayToSearch, fuzzyOrNo, tolerance) {
  var filtered = [];
  arrayToSearch.forEach(function (name) {
    var matchCount = 0;
    var nameLength = name.length;
    if (fuzzyOrNo === true) {
      for (var i = 0; i < criteria.length; i++) {
        if(name.toLowerCase().match(criteria[i].toLowerCase())){
          matchCount++;
          name.slice(name.indexOf(criteria[i]),1);
        }
      }
      if (Math.abs(matchCount - nameLength) <=tolerance && Math.abs(criteria.length - nameLength) <=tolerance) {
        filtered.push(name);
      }
    }
    else if (name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
      filtered.push(name);
    }
  });
  console.log(filtered);
  return filtered;
}
search('Marcos', names, true, 1);
search('Marcos', names, true, 3);
