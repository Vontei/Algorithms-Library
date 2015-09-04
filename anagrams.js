 var checkArray = function(string1,string2){
    string1.split('')
    var holder = []
    var answer = []
    var onlyMatch = []

    string2.forEach(function (string2) {
    if(string2.length != string1.length){
        answer.push('wrong length, '+ string2 + ' not an anagram')
        return false
    }
    for(i=0;i<string2.length;i++){
        for(j=0;j<string1.length;j++){
            if(string1[j]===string2[i]){
                holder.push(1)
            }
        }
    }
    if(holder.length===string2.length){
        answer.push(string2 + ' is an anagram')
        onlyMatch.push(string2)
    } else {
        answer.push('nope', string2 + ' ..not an anagram')
      }
  })
console.log(answer)
console.log(onlyMatch)
}


var checkString = function(string1,string2){
  string1.split('')
  string2.split('')
  var holder = []
  if(string2.length != string1.length){
      console.log('wrong length not an anagram')
      return false
  }
  for(i=0;i<string2.length;i++){
      for(j=0;j<string1.length;j++){
          if(string1[j]===string2[i]){
              holder.push(1)
          }
      }
  }
  if(holder.length===string2.length){
      console.log('yes '+ string2 + ' is an anagram')
  } else {
      console.log('nope')
  }
}


var isAnagram = function(){
  checkArray('ant', ['tan','tame','tae'])
  checkString('tan','ant')
}

isAnagram()
