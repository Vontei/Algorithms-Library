var input = [ 4, 5, 6, 7, 8, 9 ];

var reverse = function(input){


///High Order
// var result = input.map(function(e, i, arr){
//   return arr[arr.length-1-i];
// });
// return result
//



///Middle
var result = [];
for (i=input.length-1; i>=0; i--){
  result.push(input[i]);
}
  return result;




///Easier
// var length = input.length;
//   result = []
//   for(var i = 0; i<length; i++){
//     result.push(input.pop());
//   }
// return result


};


console.log(reverse(input))
