var cl = console.log;

var person = {
	fname : "sumit",
	lname : "kulkarni",
	age	  : 70,
	fullname : function(){
		return this.fname + " " + this.lname;
	},
	child :{
		fname : "suman",
		lname : "kulkarni",
		age   : 30,
		fullname : function(){
		return this.fname + " " + this.lname;
		},
		grandchild : {
			fname : "sohan",
			lname : "kulkarni",
			age : 5,
			fullname : function(){
				return this.fname + " " + this.lname;
			}
		}
	}
}

var getfullname1 = person.fullname();

cl(getfullname1);

var information = document.getElementById("info1");

information.innerHTML = getfullname1;

console.log(getfullname1);

var getfullname2 = person.child.fullname();

cl(getfullname2);

var information = document.getElementById("info2");

information.innerHTML = getfullname2;

console.log(getfullname2);

var getfullname3 = person.child.grandchild.fullname();

cl(getfullname3);

var information = document.getElementById("info3");

information.innerHTML = getfullname3;

console.log(getfullname3);