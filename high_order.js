
function Stock() {
  //model market

}







module.exports = {


  Person: function Person(name)  {
    this.Name = name;
    this.garage = []
  },



  add: function (num1,num2){
    console.log( num1+num2)
    return num1+num2;
  },


  subtract: function(num1,num2) {
    return num2-num1;
  },


  Person.prototype.buyCar: function(make,model){
    this.garage.push({make,model})
  }


}

//model cars/dealerships
