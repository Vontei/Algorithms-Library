module.exports = {

  checkUniqueness: function(string){
    var holder =[]
    for(i=0;i<string.length;i++){
      for(j=0;j<string.length;j++){
        if(string.indexOf(string[i]) === string.indexOf(string[j])){
          holder.push(1)
        }
      }
    }
    if(holder.length>string.length){
      return false
    } else{
      return true
    }
  }
}
