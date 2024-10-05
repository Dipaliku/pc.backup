var cl = console.log;

var stdArr = [
	{
		fname : "rahul",
		lname : "kulkarni",
		email : "rahulkulkarni.100@gmail.com",
		contact : 12345678,
	},
	{
		fname : "sumit",
		lname : "patil",
		email : "sumit1100@gmail.com",
		contact : 90945678,
	},
	{
		fname : "reyansh",
		lname : "bhalke",
		email : "r.bhalke11@gmail.com",
		contact : 7078965423,
	},
	{
		fname : "Advik",
		lname : "chakurkar",
		email : "avdivkulkarni8989@gmail.com",
		contact : 8089765432,
	},
	{
		fname : "hardik",
		lname : "bhoir",
		email : "hardik0000@gmail.com",
		contact : 90982356487912,
	},
];

cl(stdArr[0]);

var stdArr0 = document.getElementById("stdData");

var result = ``;

for(var i = 0; i < stdArr.length; i++){
	
	result += `	<tr>
					<td>${i+1}</td>
					<td>${stdArr[i].fname}</td>
					<td>${stdArr[i].lname}</td>
					<td>${stdArr[i].email}</td>
					<td>${stdArr[i].contact}</td>
				</tr>`
};

stdArr0.innerHTML = result;