var cl = console.log;

var str = "welcome in the beautiful world of javascript";

var str0 = "bootstrap"

var str1 = str.replace(/html/i , str0.toUpperCase('bootstrap'));

cl(str);

cl(str.length);

document.write(str);

document.write("<br> <hr>");

cl(str1);

document.write(str1);

var strCharAt = "hello javascript";
cl(strCharAt.charAt(8));
cl(strCharAt.charAt(0));
cl(strCharAt.charAt(16));


cl(strCharAt.length-1); 


var str = "welcome in the beautiful world of javascript and javascript is suitable for large application,"
			"javascript is oxygen for web developer";

var strIndexOf = str.indexOf('html'); //-1
cl(strIndexOf);

var strIndexOf = str.indexOf('javascript');
cl(strIndexOf);

var strIndexOf01 = str.indexOf('javascript', 38 + 1); 
cl(strIndexOf01);

var strIndexOf02 = str.indexOf('javascript', 22 + 1);  
cl(strIndexOf02);


var laststr = str.lastIndexOf('javascript');
cl(laststr);



// how many string we use to extract the string -

//1 slice //2 substring //3 substr >> removed 


//slice >> start value is non-mandatory >> start index no. from which we extract the string >> start value included in etracted part 

//end >> non-mandatory >> end index no. upto extract the string >> end is not included in extract part 

//we can pass the -ve argument 

var str = "rahul,rohit,virat,hardik,sachine";
cl(str);

var strS1 = str.slice(3,9);
cl(strS1);

var strS2 = str.slice(-7,-9);
cl(strS2);


//substring >>Its same as slice >> but we cant pass / it doesnt accept -ve arrgument .

var str01 = "india,pune,mumbai,nanded,udgir";
cl(str01);

var strS01 = str01.substring(3,9);
cl(strS01);

var strS02 = str.substring(-7);
cl(strS02);

var strS03 = str.substr(-9);
cl(strS03);




