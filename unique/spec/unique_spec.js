var myCode = require('../uniqueness.js')

describe('checkUniqueness', function() {
  it('checks the uniqueness of the string characters', function() {
      var string1 = 'expensive';
      var string2 = 'nick'
    expect(myCode.checkUniqueness(string1)).toEqual(false);
    expect(myCode.checkUniqueness(string2)).toEqual(true);
  });
});
