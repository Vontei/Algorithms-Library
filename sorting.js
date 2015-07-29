// Bubble Sort ()  TBA
var test = [4,1,5,3,6,2]

var other = []
var bubbleSort = function(){
	var holder = []
	for(i=0;i<test.length;++i){
		holder =[]
		if(test[i]>test[i+1]){
			other.push(test[i+1])
			holder.push(test[i])
			test[i]=test[i+1]
			test[i+1]=holder[0]
	
		}
	}
	for(i=0;i<other.length;++i){
		var sub =[];
		if(test[i]>test[i+1]){
			sub.push(test[i])
			test[i]=test[i+1]
			test[i+1]=sub[0]

		}
	console.log(test, holder)
	console.log(sub)
	}
}

var bubbleSorter = function(){
	for(i=0;i<test.length;i++){
		bubbleSort()
	}
	console.log(test)
}


bubbleSorter()
