var cl = console.log;

var person = [
		{
			name : "Sr.no",
			fname : "Name",
			lname : "Surname",
			name2 : "Nickname",
			profession:"id",
		},
		{
			name : "01",
			fname : "Sachin",
			lname : "Tendulkar",
			name2 : "MasterBlaster",
			profession:"crickrter",
		},
		{
			name : "02",
			fname : "virat",
			lname : "kohali",
			name2 : "chiku",
			profession:"cricketer",
		},	
		{
			name : "03",
			fname : "hardik",
			lname : "pandiya",
			name2 : "hardik",
			profession:"cricketer",
		
		},
]

var person0 = document.getElementById("table");
cl(table);

var result = " ";

for(var i = 0; i < person.length; i++){
	
	result += `<tr><td>${person[i].name}</td><td>${person[i].fname}</td><td> ${person[i].lname}</td><td>${person[i].name2}</td><td>${person[i].number}</td></tr>`;
					
	cl(person[i]);
}

person0.innerHTML = result;
