var cl = console.log;

var p = 150;

var q = 350;

var result = p + q ;

cl(result);

var information = document.getElementById("info");

information.innerHTML = result;

cl(result);


var a = 25;

var b = 55;

var result1 = a - b ;

var information = document.getElementById("info1");

information.innerHTML = result1;

cl(result1);


var c = 625;

var d = 102;

var result2 = c / d ;

var information = document.getElementById("info2");

information.innerHTML = result2;

cl(result2);


function number(x,y){
	cl(x + y);
};

number(150,350);

number(25,55);

number(36,105);

number(1999,9985);

cl(number);



function number1(x,y){
	cl(x - y);
};

number1(150,350);

number1(25,55);

number1(5684,2554);

number1(48616,2462.56);

cl(number1);


function number2(x,y){
	cl(x * y);
};

number2(150,350);

number2(25,55);

number2(5684,2554);

number2(48616,2462.56);

cl(number2);
