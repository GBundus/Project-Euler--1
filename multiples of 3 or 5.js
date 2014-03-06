function sumMultiplesOf3or5(x){
//takes a integer x and returns the sum of multiples of 3 or five less than it
	output=0
	for(i=0;i<x;i++){
		if (i%===0 || i%5===0){
			output+=i;
		}
	}
		document.getElementById('outbox').innerHTML=output;

}