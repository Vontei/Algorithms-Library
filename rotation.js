var x = 'hello'
var y = 'llohe'

var result = []
var s1 = x.split('')
var s2 = y.split('')
var z = y.indexOf(x[0])


// for(i=0; i<s1.length; i++){
//     for(j=0;j<s2.length; j++){
//         if((s2[j]>=z) && (s2[j]<=s1.length-1)){
//           if(s1[i]===s2[j+z]){
//             result.push(s1[i])
//           }
//         }
//         if((s2[j]<z) && (s2[j]>=0)){
//             if(s1[i]===s2[j-(z-1)]){
//             result.push(s1[i])
//           }
//         }
//
//
//     }
// }
// console.log(result)

console.log(x.split('').reverse().join(''))


for(i=0; i<s1.length; i++){
    for(j=0;j<s2.length; j++){
        if(s1[i]===s2[j+z]){
          result.push(s1[i])
        }
        if(s1[i]===s2[j-(z-1)]){
          result.push(s1[i])
        }
    }
}

console.log(result.join(''))
