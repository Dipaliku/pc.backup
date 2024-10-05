var cl = console.log;

var person = [
		{
			name : "Sr.no",
			fname : "Name",
			lname : "Surname",
			name2 : "Nickname",
			number : "contact"
		},
		{
			name : "01",
			fname : "rahul",
			lname : "kulkarni",
			name2 : "rowdy",
			number : 9856236589
		},
		{
			name : "02",
			fname : "mohit",
			lname : "patil",
			name2 : "roo",
			number : 7896541230
		},
		{
			name : "03",
			fname : "nachiket",
			lname : "joshi",
			name2 : "nachi",
			number : 1023654789
		},
		{
			name : "04",
			fname : "Reyansh",
			lname : "lamba",
			name2 : "cool",
			number : 8089563256
		}
]

var person0 = document.getElementById("table");
cl(table);

var result = " ";

person.forEach((p) => {
	result += `<tr><td>${p.name}</td><td>${p.fname}</td><td> ${p.lname}</td><td>${p.name2}</td><td>${p.number}</td></tr>`
})

person0.innerHTML = result;
