

var isPalindrome = function (word){
  var endWord = '';
  var stack = [];
  for(i=0; i<word.length; ++i){
    stack.push(word[i])
  }

  while(stack.length > 0){
    endWord+= stack.pop();
  }

    if(word === endWord){
    return word + " is a palindrome."
    } else {
      return word + " is not a palindrome."
    }

}

console.log(isPalindrome('racecar'))
