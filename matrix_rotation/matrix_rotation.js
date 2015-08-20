module.exports = {

  rotate: function(matrix){
    var result = [
      [1,2],
      [3,4]
    ];
    for(i=0;i<matrix.length; i++){
      for(j=0;j<matrix.length; j++){
        if([i]>[j]){
          result[j][j]=matrix[i][j]
        }
        if([i]%2===0){
          result[i][j+1]=matrix[i][j]
        }
        if([i]<[j]){
          result[i+1][j]=matrix[i][j]
        }
        if([i]%2!=0){
          result[i][j-1]=matrix[i][j]
        }
      }
    }
    for(i=0;i<result.length;i++){
      while(result[i].length < 2){
        result[i].pop()
      }
    }
    return result
  },
}


//almost working temp solution
