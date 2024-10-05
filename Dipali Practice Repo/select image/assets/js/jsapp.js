const cl=console.log;

const all=document.getElementById("changeimg");
cl(all);

const img=[...document.querySelectorAll(".img")];
cl(img);

const ongallaryfilter=(eve)=>{
	let selectedval=eve.target.value;
	cl(selectedval)
	img.forEach((ele)=>{
		ele.classList.add("d-none");
		})
    const div=[...document.querySelectorAll("."+selectedval)]
	     div.forEach((eve)=>{
			 eve.classList.remove("d-none");
		 })
			 
}
all.addEventListener("change",ongallaryfilter)



