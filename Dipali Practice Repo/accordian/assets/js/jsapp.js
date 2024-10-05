var cl = console.log;

const heading = [...document.querySelectorAll(".heading")];

const onAccheadHandler = (eve) =>{
	//cl(eve.target);
	heading.forEach(h2 => h2.classList.remove("active"));
	eve.target.classList.add("active");
} 






heading.forEach((h) =>{
	h.addEventListener("click", onAccheadHandler);
})