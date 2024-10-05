var cl = console.log;
var a = 100;

var b = 200;

cl(b);

var b = 200;

cl(b);

cl("valueOf a:", a);
cl("valueOf b:", b);

var result = "value of a = 100" + " , value of b = 200 ";

var information = document.getElementById("info");

information.innerHTML = result;

console.log(result);


var person1 = {
	fname : 'amit';
	lname : 'kulkarni';
}

cl(person1);

var person2 = {
	fname : "reyansh ",
	lname : "lamba"
}

cl(person2);

var person2 = person1;

person2.lname = "lamba";

cl(person2);

cl(person1);

var result1 = "value of person1 = amit kulkarni" + " , value of person2 = "reyansh lamb" + " , changing last name of - person2 then value of person2 = amit lamb" + " , value of person1 = amit lamb";

var information = document.getElementById("info1");

information.innerHTML = result1;

console.log(result1);