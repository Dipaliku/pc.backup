var cl = console.log;


var numbers = [1,2,3,4,5,6,7,8,9,10];

cl(numbers);

cl(typeof numbers);

cl(numbers.length);

cl(numbers[6]);

lastnumbers = numbers[numbers.length - 1 ];

cl(lastnumbers);

numbers.length = 0;

cl(numbers);

var result = "numbers = 1,2,3,4,5,6,7,8,9,10";

var information = document.getElementById("info");

information.innerHTML = result;

console.log(result);