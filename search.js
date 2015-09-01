var names = ['nick', 'willy', 'biagio','davy'];
///one way to find index
function search(name, array){
  if(array.indexOf(name) != -1){
    console.log(name + ' is present')
  } else {
    console.log('not present')
  }
}
search('biagio', names);



//another way to find index
var filterMe = function(str,input){
  if(input.indexOf(str) != -1){
      return (str + ' is present');
  } else return
}

function searchNames(str){
  var output = names.map(function (e) {
    if(filterMe(e,str)!= undefined){
      return filterMe(e,str)
    } else if(filterMe(e,str) === undefined){
      return ''
    }
  })
  console.log(output)
}
searchNames('willy')




function isPermutation(string1,string2){
    string1.split('')
    string2.split('')
    var holder = []
    if(string2.length != string1.length){
       console.log('false lengths are different')
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
      console.log('true is permutation')
        return(true)
    }
    if(holder.length === string2.length + 1){
      console.log('ok but plus one')
    }

    else {
      console.log('false not permutation')
        return(false)
      }
}


isPermutation('nick', 'ickn')
