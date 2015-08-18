var myCode = require('../permutation.js')

describe('isPermutation', function(){
  it('checks if the first string is a permutation of the second', function(){
    string1 = 'cab';
    string2 = 'abc';
    expect(myCode.isPermutation(string1,string2)).toEqual(true)
  })
})
