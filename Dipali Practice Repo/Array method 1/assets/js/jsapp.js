var cl = console.log;

//1 Array Literal Method - 

var array0 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,100,500];

cl(array0[8]);

cl(array0[0]);

//cl(array.length - 1);

cl(array0.length);

var array00 = [9];

cl(array00);

//document.write(array.length);

//2 Array constructor Method - 

var array1 = new Array(11,55,66,88,99,110,230,440,660);

cl(array1[43);

var array2 = new Array(10);

cl(array2);

//adding or replacing array value- 

var array3 = [11,66,6,8,900,101,501,970,880,10002,8,980];

array3[5] = 300;

array3[10] = 700;

array3[array3.length] = 400;

cl(array3);

// To convert array into string - 

var skills = ["HTML", "CSS", "JAVASCRIPT", "ES6", "BOOTSTRAP", "ANGULAR"];

var skillstr = skills.join(',');

cl(skillstr);

var skillstr1 = skills.join('');

cl(skillstr1);

var skillstr2 = skills.join(', ');

cl(skillstr2);

var skillstr3 = skills.join(' | ');

cl(skillstr3);

var skillstr4 = skills.join(' * ');

cl(skillstr4);

var skillstr5 = skills.toString();

cl(skillstr5);

// Pop Push - 

var skills0 = ["HTML", "CSS", "JAVASCRIPT", "ES6", "BOOTSTRAP", "ANGULAR"];

var skills00 = skills0.pop();

cl(skills00);

skills0.pop();

cl(skills0);

var skills01 = ["HTML", "CSS", "JAVASCRIPT", "ES6", "BOOTSTRAP", "ANGULAR"];

skills01.push("ANGULAR 17");

cl(skills01);

var skillspush = skills01.push("BOOTSTRAP-4");

cl(skillspush);