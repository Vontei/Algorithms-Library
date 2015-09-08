///accepts a roman numeral input and returns an integer

var romans = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L',50],
  ['C',100],
  ['D',500],
  ['M',1000]
]

function convertTheCatholic (str){
  var array = str.split('')
  var holder = []
  array.forEach(function (a) {
    romans.forEach(function (b) {
      (a===b[0]) ? holder.push(b[1]) : '';
    })
  })
  return holder
}

function rulesOnASunday(str){
  var array = convertTheCatholic(str);
  if(array.length==1){return console.log(array[0])}
  var total = array.reduce(function (prev,curr) {
    var answer = 0

    if(array.length==2){
      if(prev<curr){
        answer = (curr-prev)
      }
      if(prev>curr){
        answer = (curr+prev)
      }
      if(prev==curr){
        answer = (curr+prev)
      }
    }
    if(array.length==3){
      if(array[2]>array[1]&& array[1]<array[0]){
        answer = array[0]+(array[2]-array[1])
      } else{
      answer = (prev + curr)
      }
    }
    return answer
  })
  return(console.log(total))
}


rulesOnASunday('XVI')
