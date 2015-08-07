////forEach function practice

[1,2,3,4,5].forEach(function (num) {
  console.log(num)
})

//////////////
var result = '';
['a','b','c'].forEach(function (letter) {
    result+=letter+','
})
console.log(result)


///////////////
var result = '';
['a','b','c'].forEach(function (letter,i,arr) {
    if(i<arr.length-1){
    result+=letter+','
  } else {
      result+=letter
    }

})
console.log(result)


///////////////
var logged =''
var array = [{name:'Nick', age:'26'}, {name:'Jerry', age:50}];
array.forEach(function (object) {
  logged+= object.name + '' + object.age + ","
  console.log(object.name, object.age)
})

console.log(logged)




//sort
//some/
//filter.
//find
