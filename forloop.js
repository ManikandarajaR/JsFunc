for(var count=1;count<6;count++){
	console.log("count is : " +count);
}

var str ="hello";
var i = 0;
while(i<str.length){
	console.log(str[i]);
	i++
}

var str = "Manikandaraja"
for(var i=0;i<str.length;i++){
	console.log("i is : " + str[i]);
}

for (var i = 0; i < 16 ; i+=8){
	console.log(i)
}

console.log("Print all Numbers between -10 and 19");

for (var i = -10; i <=29 ; i+=1){
	console.log(i)
}

console.log("Print all EVEN Numbers between 10 and 40");


for (var i = 10; i <= 40 ; i+=2){
	console.log(i)
}

console.log("Print all ODD Numbers between 300 and 333");

for (var i = 300; i <= 333 ; i+=1){
	if(i % 2 !== 0){
		console.log(i);
	}
}

console.log("Print all numbers devisible by 5 and 3 between 5 and 50")
for(i = 5 ; i < 50 ; i+=1) {
	if(i % 5 == 0 && i % 3 == 0){
	console.log(i);
	}

}

console.log("Print all numbers devisible by 5 and 3 between 5 and 50")

var str = "Manikandaraja";
for (i = 0 ; i < 80 ; i+=1){
	console.log(str[i]);
}