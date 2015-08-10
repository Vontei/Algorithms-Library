///every returns a bool


var obj = {
  numbers: [1,23,5,7,8,35,7],

  big: function(){
    var result = false
    this.numbers.forEach(function (val) {
      if(val>10){
        result = true
      }
    })
    return result
  }
}

//for each must in all cases mutate something, / do some IO.
// return in meaningless in forEach
// you need to return from the outer function which means you must mutate something along the way.


console.log(obj.big())
obj.numbers = [1,2,3]
console.log(obj.big())


///every
var myFunction = function(e){
  return e > 10
}
var high = [12,11,13].every(myFunction)
var low = [1,2,3,4].every(myFunction)
var numbers = [1,12,24,2,5,11].every(myFunction)
console.log(numbers)
console.log(low)
console.log(high)
