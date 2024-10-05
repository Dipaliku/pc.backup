console.log('hello js');
var person={
	firstname:'dipali',
	lastname:'kulkarni',
	age:28,
	education:'Mcm',
	stream:'Computer',
	passingyear:2021,
	child:{
		firstname:'pranshi',
		lastname:'takalikar',
		age:2,
	}
}

var result= 'I am '+ person.firstname+' '+person.lastname+ '. My age is ' +person.age+'. I have completed graduation in '+person.education+' '+person.stream+
' in year '+person.passingyear+'. My child name is '+person.child.firstname+' '+person.child.lastname+'. Her age is '+person.child.age;

var info = document.getElementById('personinfo');
info.innerHTML=result;
console.log(result);