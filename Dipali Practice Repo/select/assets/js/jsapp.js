const cl= console.log;

const changeColor = document.getElementById("changeColor");

const allDiv= [...document.querySelectorAll(".all")]




const onGallaryFilter=(eve)=>{
  let selValue=	eve.target.value;
  
  cl(selValue)
  
  
  allDiv.forEach(div => {
	  div.classList.add("d-none");
  })
  
  const divs = [...document.querySelectorAll("."+selValue)];
  divs.forEach( div=>{
	  div.classList.remove("d-none");
  }
  )
}






changeColor.addEventListener("change",onGallaryFilter);