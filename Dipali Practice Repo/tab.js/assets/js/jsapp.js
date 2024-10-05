var cl = console.log;

const list = [...document.querySelectorAll(".heading li")];

//const alltab = [...document.querySelectorAll(".content")];

const ontabHandler = (e) =>{
	const active = document.querySelector(".content.active");
	const activeli = document.querySelector(".heading li");
	let getid = e.target.getAttribute("data-tab");
	//alltab.forEach((tab) => tab.classList.remove("active"));
	active.classList.remove("active")
	let card = document.getElementById(getid);
	card.classList.add("active");
	list.forEach(li => li.classList.remove("active"));
	activeli.classList.remove("active");
	e.target.classList.add("active");
}


list.forEach((li) =>{
	li.addEventListener("click",ontabHandler);
})