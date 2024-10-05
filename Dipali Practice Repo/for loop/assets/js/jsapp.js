var cl=console.log;
var x=1
cl(x);
var x1=2
cl(x1);

for (var x=1; x<=30; x++){
	cl(x);
}

cl(x);
//print even Number
for (var a=1; a<=30; a++){
	if(a%2===0){
		cl(a);
		document.write(a);
	}
	
}
//print odd Number
for(var c=1;c<=30;c++){
	if(a%2!==0){
		cl(c);
		document.write(c);
	}
	
}