thing = repeat(5)
console.log(thing)

function repeat(num){
    if(num==1){
        return 1
    } else {
        return num + repeat(num-1)
    }
}

///recursion
