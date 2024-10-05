var cl = console.log;

var pi = Math.PI;

cl(pi);

var eulers = Math.E;

cl(eulers);

cl(Math.LN10);

cl(Math.LN2);

cl(Math.LN15);

//Math round fig. - 

var a = 10.9;

cl(Math.round(a));

var a1 = 10.5;

cl(Math.round(a1));

//Math floor - 

var b = 6.6;

cl(Math.floor(b));

var b1 = 6.3;

cl(Math.floor(b1));

//Math ceil -

var c = 5;

cl(Math.ceil(c));

var c1 = 3.9;

cl(Math.ceil(c1));

// Math sign - 

var d = -5.5;

cl(Math.sign(d));

var d1 = 6.6;

cl(Math.sign(d1));

var d0 = 0;

cl(Math.sign(d0));

//Math pow - 

var e = Math.pow(9,8); // 9^8

cl(e);

var e1 = Math.pow(5,2); // 5^2

cl(e1);

//Math sqrt - 

var f = 25;

cl(Math.sqrt(f));

var f1 = 100;

cl(Math.sqrt(f1));

var f2 = 55;

cl(Math.sqrt(f2));

//Math abs - 

var g = -9.5;

cl(Math.abs(g));

var g1 = 66;

cl(Math.abs(g1));

//Minimum Number - 

cl(Math.min(0, 5,33,8954,5698,8888));

cl(Math.min(20,80,50,5555,658996));

//Maximum Number - 

cl(Math.max(10,50,80,90,-30,-90);

cl(Math.max(301,501,601,2001,3001));

//Math random - It returns random number btn 0 to 1, in this numbers 0 is included but 1 is not included.

var h = Math.random();

cl(h);

var h1 = Math.random();

cl(h1);

// Print random number btn 0 to 30;

var i = Math.random()*10;

cl(i);

var i1 = Math.ceil(Math.random()*10);

cl(i1);

var i2 = Math.floor(Math.random()*10);

cl(i2);

//print random number -

function printRnumber(min, max){
	return(min + Math.floor(Math.random()*(max  - min + 1)));
};

var printnum = printRnumber(5, 50);

cl(printnum);

document.write(printnum);