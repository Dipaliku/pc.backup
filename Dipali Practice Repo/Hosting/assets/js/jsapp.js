var cl = console.log;

var a = 100;

cl(a);


cl(b);


var b = 200;


// Hoisting : all the decleration in the page/scope are get shifted to top of page/scope.

var result = "300" + " , undefined( value of b ) ";

var information = document.getElementById("info");

information.innerHTML = result;

console.log(result);