var romans = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L',50],
  ['C',100],
  ['D',500],
  ['M',1000]
]

function convert(){
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
  var total = 0
  counter = 0
  function checkValues(total,array){
      if(counter==0){
        total+= array[counter]
      }
      if(counter == array.length-1){
        if(array[counter] > array[counter-1]){
          total-= array[counter]
        }
        if(array[counter] < array[counter-1]){
          total+= array[counter]
        }
      }
      if(array[counter] > array[counter-1]){
        total+= (array[counter]-array[counter-1])
      }

      if(array[counter] < array[counter-1]){
        total+= array[counter]
      }
    counter++
    while(counter <= array.length){
      checkValues(total,array)
      return console.log(total)
    }
  }
  checkValues(total,convertTheCatholic('IX'))
}

convert()
