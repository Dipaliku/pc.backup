var cl = console.log;

for(var x = 1; x <= 5; x++){
	for(var y = 1; y <= x; y++){
		document.write(y);
	}
	document.write("<hr>");
}

document.write("<br> <hr>");

for(var c = 1; c <= 5; c++){
	for(var d = 1; d <= c; d++){
		document.write(c);
	}
	document.write("<hr>");
}

document.write("<br> <hr>");

for(var e = 5; e >= 1; e--){
    for(var f = 1; f<= e; f++){
        document.write(e);
    }
    document.write("<hr>")
}

document.write("<br> <hr>");

for(var g = 5; g >= 1; g--){
    for(var h = 1; h <= g; h++){
        document.write(h);
    }
    document.write("<hr>")
}

document.write("<br> <hr>");

for(var a = 1; a <= 5; a++){
    for(var b = a; b >= 1; b--){
        document.write(b);
    }
    document.write("<hr>");
}