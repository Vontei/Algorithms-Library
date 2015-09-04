// * An integer is prime if it is not divisible by any prime less than or equal to its square root
// 2      3      5      7     11     13     17     19     23     29
//    31     37     41     43     47     53     59     61     67     71
//return the second prime after the input

function isPrime(num){
  var isPrime = true
  if(num<2){
    return false
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
     if (num % i == 0) {
       isPrime = false
     }
  }
  return isPrime
}

function primeDownTheLine(num){
  var holder = [];
  if(isPrime(num)){
    for(i=num; i<1000; i++){
      if(isPrime(i)){
        if(holder.length <=2){
          holder.push(i)
        }
      }
    }
  console.log(holder[2])
  }
}

primeDownTheLine(31)
