const username = document.getElementById("username")


const onFocusHandler = (e)=>{
	e.target.style.border="5px pink";
	
}

const onBlurHandler = (e) =>{
	e.target.style.border="5px blue";
}


username.addEventListener("focus", onFocusHandler)


username.addEventListener("blur", onBlurHandler);