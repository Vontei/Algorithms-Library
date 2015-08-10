///filter returns a new copy of an array;
var array = [1,2,3,4,5,13,7,10,12,15]


var filter = function(){
var trash = []
  for(i=0;i<array.length; i++){
     if (array[i]>10){
       trash.push(array[i])
    }
  }
  console.log(trash)
  return trash
}
filter()




var filterForEach = function(){
  var holder = [];
  array.forEach(function(e){
    if(e>10){
      holder.push(e)
    }
  })
  console.log(holder)
  return holder
}
filterForEach()



var filterMe = function(thing){
  return thing > 10;
}
var filterThis = [1,4,13,20,9,6,14].filter(filterMe)
var filterOg = array.filter(filterMe)
console.log(filterThis)
console.log(filterOg)


//the function this is out of scope so you need to bind it or capture it
//like var min = this.min
//then use min


var obj = {
  array: [1,13,14,2,5,7,11],
  min: 10,  // state is properties
  filterForEach: function(){   // behavior// functions
    var holder2 = [];
    this.array.forEach(function(e){
      if(e>this.min){
        holder2.push(e)
      }
    }.bind(this))
    console.log(holder2)
    return holder2
  }
}

obj.filterForEach()


var filtering = function(){   // behavior// functions
  var holder2 = [];
  var min = 10;
  array.forEach(function(e){
    if(e>this.min){
      holder2.push(e)
    }
  },this)
  console.log(holder2 + 'JI')
  return holder2
}

filtering()
