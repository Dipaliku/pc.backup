var cl = console.log;

var person = {
	fname : "virat",
	lname : "kohali",
	age   : 51,
	hoabbies : ["Cricket"],
	fullname : function(){
		return person.fname + " " + person.lname
	}
}

var getfullname = person.fullname();

cl(getfullname);
	
cl(person);

var information = document.getElementById("info");

information.innerHTML = getfullname;

console.log(getfullname);