///simply implementing the distance formula

var distance = function(x1,y1,x2,y2){
    var start = Math.pow((x1-y1),2)
    var finish = Math.pow((x2-y2),2)
    var result = start + finish
    var answer = Math.sqrt(result)
    return answer
}

distance(3,12,8,0)

//answer is roughly 13


///or


function Coordinates(x,y){
  this.x=x;
  this.y=y;
}

function findDistance(node1,node2){
  return Math.hypot(node2.x-node1.x, node2.y-node1.y)
}

var person = new Coordinates(2,0)
var flag = new Coordinates(4,3)
var answer = findDistance(person, flag)
console.log(answer)
