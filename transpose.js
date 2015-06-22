var input = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b'],
      ['c', 'c', 'c', 'c'],
      ['d', 'd', 'd', 'd'],
    ];



var transpose = function (input) {

///Middle Answer
    // var output = [];
    // for(i=0;i<input.length; i++){
    //   placeholder=[];
    //     for(j=0; j<input.length; j++){
    //     placeholder.push(input[j][i])
    //   }
    //   output.push(placeholder);
    // }
    // return output;
    //
    //


// Higher order answer
var array = input.map(function(e1,i){
  var temp = input.map(function(e2,j){
    return input[j][i]
  })
  return temp;
});
  return array;





}
console.log(transpose(input))
