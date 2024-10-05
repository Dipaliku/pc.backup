var cl = console.log;

const boxinfo = document.getElementById("boxinfo");

//mouseover,mouseenter,mouseleave,mouseout-

const onMouseoverHolder = (eve) => {
	eve.target.style.backgroundColor = "green"
}

const onMouseenterHolder = (eve1) => {
	eve1.target.style.backgroundColor = "blue"
}

const onMouseleaveHolder = (eve2) => {
	eve2.target.style.backgroundColor = "black"
}

const onMouseoutHolder = (eve3) => {
	eve3.target.style.backgroundColor = "yellow"
}
const onMouseoutHolder=(eve4)=>{
	eve4.target.style.backgroundcolor="pink"
}
boxinfo.addEventListener("mouseover" , onMouseoverHolder);

boxinfo1.addEventListener("mouseenter" , onMouseenterHolder);

boxinfo2.addEventListener("mouseleave" , onMouseleaveHolder);

boxinfo3.addEventListener("mouseout" , onMouseoutHolder);
boxinfo4.addEventListener("mouseout",onMouseoutHolder);