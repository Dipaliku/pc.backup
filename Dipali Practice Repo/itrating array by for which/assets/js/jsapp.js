var cl = console.log;

var skills = ["HTML", "CSS", "JAVASCRIPT", "ES6", "BOOTSTRAP", "ANGULAR"];

//cl(skills);

const skill0 = document.getElementById("skill-list");

let result = `<ul class='list-group'>`

skills.forEach((s) => {
	result += `<li class='list-group-item'> I love ${s} </li></ul>`
})

result += `</ul>`;

skill0.innerHTML = result;