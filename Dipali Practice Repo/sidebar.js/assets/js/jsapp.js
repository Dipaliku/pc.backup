var cl = console.log;

const sidebar = document.getElementById("sidebar");

const bars = document.getElementById("bars");

const cross = document.querySelector(".sidebar i");

const backdrop = document.getElementById("backdrop");

const links = [...document.querySelectorAll(".sidebar li a")];

const onbarsHolder = () =>{
	sidebar.classList.toggle("active");
	backdrop.classList.toggle("active");
}


bars.addEventListener("click", onbarsHolder);

cross.addEventListener("click", onbarsHolder);

backdrop.addEventListener("click", onbarsHolder);

links.forEach((lin) =>{
	lin.addEventListener("click",onbarsHolder)
})