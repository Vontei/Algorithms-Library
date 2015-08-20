var myCode = require('../matrix_rotation.js')


describe('rotate', function(){
  it('rotates the matrix 90 degrees, clockwise', function(){
    var bluePill = [
      [1,2],
      [3,4]
    ]

    var redPill = [
      [3,1],
      [4,2]
    ]

    expect(myCode.rotate(bluePill)).toEqual(redPill)
  })
})
