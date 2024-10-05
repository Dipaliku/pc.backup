var cl = console.log;


var a = 18;

var b = a;


function info(x,y){
	return x + y;
}

var result = info(18,a);

var information = document.getElementById("info");

information.innerHTML = result;

console.log(result);

alert(result);


var p = 4321;

var q = 6678;
function info1(x,y){
	return x - y;
}

var result1 = info(4321,6678);

var information = document.getElementById("info1");

information.innerHTML = result1;

console.log(result1);

alert(result1);


function info2(fname,lname){
	return "Hello " + fname + " " + lname + ", how are you?"
}

var result2 = info2("sumit","patil");

var information = document.getElementById("info2");

information.innerHTML = result2;

console.log(result2);

alert(result2);