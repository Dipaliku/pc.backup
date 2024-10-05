var cl = console.log;

//Shift unshift -

var array = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

var array1 = [100,200,300,400,500];

var array2 = [110,210,310,410,510];

cl(array.length)

var array0 = array.shift();

cl(array0);

array.shift();

cl(array);

var array00 = array.unshift(5);

cl(array00);

array.unshift(6);

cl(array);

//array.length = 0;

//cl(array);

for(var i = 1; i <= array.length; i++){
	array.pop();
}

cl(array);

var array000 = array.concat(array1, 1155,601, array2);

cl(array000);

//slice - 

var array11 = array000.slice(3,1);

cl(array11);

var array111 = array000.slice(-1);

cl(array111);

//splice - 

var array1111 = array11.splice(9);

cl(array1111);

var array11111 = array111.splice(-1);

cl(array11111);

var array22 = array111.splice(10,66,-900);

cl(array2);

var skills0 = ["HTML", "CSS", "JAVASCRIPT", "ES6", "BOOTSTRAP", "ANGULAR"];

cl(skills0);

var skills00 = skills0.splice(7);

cl(skills00);

//reverse - 

var array4 = array000.reverse();

cl(array4);

var skills00 = skills0.reverse();

cl(skills00);

//sort - 

var array5 = array000.sort();

cl(array5);

var fruit = ["apple","banana","pear","orange",pineapple"];

var fruit1 = fruit.sort();

cl(fruit1);