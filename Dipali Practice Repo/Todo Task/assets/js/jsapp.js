var cl = console.log;

const todoform = document.getElementById("form");

const inputcontrol = document.getElementById("todoinput");

const todocontent = document.getElementById("todocontent");

let formarr = [];

const formtemplating = (arr) =>{
	let result = `<ul class="list-group">`;
	
	arr.forEach(to =>{
		result += `<li class="list-group-item">${to}</li>`;
	});
	
	result += `</ul>`;
	
	todocontent.innerHTML = result;
}

const onsubmitHandler = (e) =>{
	e.preventDefault();
	let todo = inputcontrol.value;
	formarr.push(todo);
	formtemplating(formarr);
	e.target.reset();
}




todoform.addEventListener("submit", onsubmitHandler);