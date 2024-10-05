const cl=console.log;

const stdForm= document.getElementById("stdForm")
const stdcontainer=document.getElementById("stdcontainer");
const updatebtn=document.getElementById("updatebtn");
const submitbtn=document.getElementById("submitbtn");
const fnameControl= document.getElementById("fname");
const lnameControl= document.getElementById("lname");
const emailControl= document.getElementById("email");
const constactControl= document.getElementById("contact");
const stdtable= document.getElementById("stdtable");

let stdArr =[];

 Uuid = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

 const checkstdcount=()=>{
	if (stdarr.length >0){ 
	    nostdmsg.classlist.add("d-none");
		stdtable.classlist.remove("d-none");
	}else{
		nostdmsg.classlist.add("d-none");
		stdtable.classlist.remove("d-none");
	}
 }	
 
 
const addstd=(obj)=>{
      let tr=document.createelement("tr")
       tr.id=obj.stdid;
        tr.innerhtml=` 	
	                <td>${1}</td>
					<td>${newstd.fname}</td>
					<td>${newstd.lname}</td>
					<td>${newstd.email}</td>
					<td>${newstd.contact}</td>
					<td><i class="fa-regular fa-pen-to-square fa-2x text-success"></i></td>
					<td><i class="fa-regular fa-trash-can fa-2x text-danger"></i></td>
				`;
}

const onEdit=(ele)=>{
      cl(ele)
      let editid=ele.closest("tr").id;
	  localstorage.setitem("editid",editid);
       cl("editid")
	   let obj=stdarr.find(std=>std.stdid===editid);
	    cl(obj)
		fnamecontrol.value=obj.fname;
        lnamecontrol.value=obj.lname; 
        emailcontrol.value=obj.email;
        contactcontrol.value=obj.contact;		
	    updatebtn.classlist.remove("d-none");
		submitbtn.classlist.add("d-none");
		  swal.fire{
		   title:`${newstd.fname}${newstd.lname}information is updated.`,
		   icon:'sucess'
		   time:2500
}

const ondelete=(ele)=>{
	Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
	   let deleteId=ele.closest("tr").id;
	  cl(deleteId);
	  let getindex=stdarr.findindex(std=>std.stdId===deleteId)
	  stdarr.splice(getindex,1);
	  localstorage.setitem("stdarr",JSON.stringify(stdarr));
	  ele.closest("tr").remove();
	   
	   swal.fire({
           title:`student is removed sucessfully`,
           icon:'sucess'
           time:200
	   })
  

	
	
const templatingofstd = (arr) =>{
	result='';
	arr.forEach((std,i)=>{
		result+=`
		            <tr id="${std.stdID}">
					<td>${i+1}</td>
					<td>${std.fname}</td>
					<td>${std.lname}</td>
					<td>${std.email}</td>
					<td>${std.contact}</td>
					<td><i class="fa-regular fa-pen-to-square fa-2x text-success" onclick="onEdit(this)" ></i></td>
					<td><i class="fa-regular fa-trash-can fa-2x text-danger" onclick="ondelete(this)"></i></td>
				</tr>`
	})
	stdContainer.innerHTML=result;
}
	
if(localstorage.getitem("stdarr"))(
    stdaARR=JSON.PARSE(localstorage.getitem("stdaARR");
	templatingofstd(stdarr)
}	
checkstdcount();

const onStdAdd=(eve)=>{
	  eve.preventDefault();
	  let newstd={
		  fname:fnameControl.value,
		  lname:lnameControl.value,
		  email:emailControl.value,
	      contact:contactcontrol.value,
	      stdID:generteuuid()
	  }
	  cl(newstd);
	  stdARR.unshift(newstd);
	  localstorage.setitem("stdarr",JSON.stringify(stdarr));
	  //templatingofstd(stdarr);
	  checkstdcount();
	   addstd(newstd);
	   eve.target.reset();
	   swal.fire{
		   title:`${newstd.fname}${newstd.lname}added as a new student.`,
		   icon:'sucess'
		   time:2500
	   }		   
		   
	   
	   
	  let tr=document.createelement("tr");
	  tr.id=newstd.stdID;
	  tr.innerHTML=`
	                <td>${1}</td>
					<td>${newstd.fname}</td>
					<td>${newstd.lname}</td>
					<td>${newstd.email}</td>
					<td>${newstd.contact}</td>
					<td><i class="fa-regular fa-pen-to-square fa-2x text-success"></i></td>
					<td><i class="fa-regular fa-trash-can fa-2x text-danger"></i></td>
				`;
	             stdcontainer.prepend(tr); 
				 let alltr=[...stdcontainer.children]
				 cl(alltr)
                 for(let i=1;i<=stdarr.length;i++){
                   cl(i)
				   alltr[i]firstelementchild.innerhtml=i;
				 }				   
	  eve.target.reset()
}








const onstdupdate=()=>{
	//cl("updated")
	let updateobj={
		fname:fnamecontrol.value,
		lname:lnamecontrol.value,
		email:emailcontrol.value,
		contact:contactcontrol.value,
		stdID:updateId,
	}
	
	let getindex=this.stdarr.findindex(std=>std.stdId===updateId);
	stdarr[getindex]=updateobj;
	cl(stdarr)
	localstorage.setitem("stdarr",JSON.stringify(stdarr));
	let tr=document.getElementById(updateId).children;
	cl(tr)
	tr[1].innerHTML=updateobj.fname;
	tr[2].innerHTML=updateobj.lname;
	tr[3].innerHTML=updateobj.email;
	tr[4].innerHTML=updateobj.contact;
	 stdform.reset();
	 updatebtn.classlist.add("d-none");
	 submitebtn.classlist.remove("d-none");
	 
	 
	 
	
	
	
	
stdForm.addEventListener("submit", onStdAdd);
updatebtn.addEventListener("click",onstdupdate);