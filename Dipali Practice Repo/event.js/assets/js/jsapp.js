const cl= console.log;
const clickbox=document.getElementById("clickbox");
const hideBox = document.getElementById("hideBox");
const showBox = document.getElementById("showBox");

const toggleBtn = document.getElementById("toggle");
const showHideBtn = document.getElementById("showHideBtn");
const box = document.getElementById("box");

const hideBoxHandler = () => {

	box.classList.add("d-none")
	
}

const showBoxHandler = () => {
	
	box.classList.remove("d-none")
}
const toggleBoxHandler = () => {
	box.classList.toggle("d-none")
}

let flag= true;
function showHideHandler(){
	if(flag===true){
		box.classList.add("d-none")
		showHideBtn.innerText="showBox"
		flag=false;
	}
	else{
		box.classList.remove("d-none")
		showHideBtn.innerText="hideBox"
		flag=true;
	}
}
*


function showHideHandler (){
	let boxClass=box.className;
	
	if(boxClass.includes("d-none")){
		box.classList.remove("d-none")
		this.innerHTML="Hide-Box"
	}
	else{
		box.classList.add("d-none")
		this.innerHTML="Show-Box"
	}
}
clickbox.addEventListener("click",clickboxhandler);
hideBox.addEventListener("click", hideBoxHandler);
showBox.addEventListener("click", showBoxHandler);
toggleBtn.addEventListener("click", toggleBoxHandler)

showHideBtn.addEventListener("dblclick", showHideHandler)







const onFocusHandler = (e)=>{
	e.target.style.border="3px solid orange";
	
}

const onBlurHandler = (e) =>{
	e.target.style.border="1px solid red";
}


username.addEventListener("focus", onFocusHandler)


username.addEventListener("blur", onBlurHandler);