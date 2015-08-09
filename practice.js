var exports = module.exports;


function Person(name,age){
  this.name = name;
  this.age = age;
  this.garage = []
}


function Car(make,model,year,color){
  this.make = make;
  this.model = model
  this.year = year
  this.color = color
  this.insurance = {
    company: 'All State',
    address: 'Dallas Texas'
  }
}


Person.prototype.buy = function(car){
  this.garage.push(car);
}

Car.prototype.fill = function (first_argument) {
  // body...
};


var porsche = new Car('porsche','turbos',1976, 'red')
var nick = new Person('nick',26)
nick.buy(porsche);

console.log(nick)
