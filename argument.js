function square(num){
	console.log(num * num);
}
square(10)

function area(l,b){
	console.log(l*b);
}
area(9,2)

function greet(person1,person2,person3){
	console.log("Hi" +  person1);
	console.log("Hi" +  person2);
	console.log("Hi" +  person3)
}

greet(" Manikandaraja"," Muthupandi"," Gladhin");

console.log("Declaration Vs. Expresssion")

function fool(){
	function bari(){
		return 4;
	}
	return bari();
	function bari(){
		return 7;
	}

  }
  

  function foo(){
  	var bar = function(){
  		return 3;
   	}
   	return bar();
   	var bar = function (){
   		return  8
   	}
   	return bar();
   }


  function add(a,b){
  	return a+b;
  }
	

  var add = function (a,b){
  	return a + b;

  }
  

  console.log("return keyword");

  function capitalize(str){
  	if(typeof str === "number"){
  		return "Thats not a string!"
  	}
  	return str.charAt(0).toupperCase() + str.slice(1);
  }
   

  var city = "paris";
  console.log(city)
  var capital = capitalize(city);
  console.log(capital)




