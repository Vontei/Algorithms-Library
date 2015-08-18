
module.exports ={

  isPermutation :function(string1,string2){
      string1.split('')
      string2.split('')
      var holder = []
      if(string2.length != string1.length){
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
          return(true)
      } else {
          return(false)
        }
  }




}
///the number of permutations is the length - 1 while
///length is greater than 0
///length of string is 3..permuations is 3 *2 * 1 = 6
