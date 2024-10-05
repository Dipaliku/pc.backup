const cl=console.log;

const showmodel=document.getElementById("showmodel");

const backdrop=document.getElementById("backdrop");
const moviemodel=document.getElementById("moviemodel");
const closemodelBtn=[....document.querySelectorAll(".closemodel"];
const movieform=document.getElementById("movieform");
const titlecontrol=document.getElementById("title");
const imgurlcontrol=document.getElementById("imgurl");
const overviewcontrol=document.getElementById("overview");
const ratingcontril=document.getElementById("rating");
const movie container=document.getElementById("moviecontainer");

const addMovie=document.getElementById("addMovie");
const updatemovie=document.getElementById("upadatemovie");

let MovieArr[];

const uuid=()=>{
	  return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const onMovieEdit=(ele)=>{
     let editId=ele.closeset(".moviecard").id;
     cl(edited);
   localstorage.setItem("editId",editId)
   modelbackdropshowhide();
   addmovie.classlist.add;
   upadatemovie.classlist.remove("d-none");
   let findobj=moviearr.find(obj=>obj.movieid===editid)
   titlecontrol.value=findobj.title;
   imgurlcontrol.value=findobj.imgurl;
   overviewcontrol.value=findobj.overview;
   ratingcontrol.value=findobj.rating;
}

const onMovieDelete=(ele)=>{
  swal.fire({
      title:"do you want remove this movie?",
     
      showcancelbutton:true;
	  confirmbuttontext:"yes",
  });
  
  .then((result)=>
  if(result.isconfirmed){
	  let deleted=ele.closest("moviecard").id;
	  cl(deleted);
	  let Deleteindex=moviearr.findIndex(obj=>obj.movieid===deleted);
	  cl(Deleteindex);
	  moviearr.splice(deleteindex,1);
	  cl(moviearr)
	  localstorage.setitem("moviearr",json.stringify(moviearr));
	  ele.closest(".col-md-4).remove();
	  swal fire("movie removed sucessfully","","sucess")
  }
});
const AddMoviecard=(obj)=>{
	let card=document.createElement("div")'
	card.id=obj.movieid;
	card.classname="c0l-md-4";
	card.innerHTML=`
	<div class="card mb-4">
	  <figure class="moviecard mb-0" id=${obj.movieId}">
	   <img src="${obj.imgurl}'title="${obj.title}">
	   <figcaption>
	   <div class="ratingsection">
	    <div class="row">
		<div class="col-10">
		  <h3>${obj.title}</h3>
		  </div>
		  <div class="col-2 align-self-center">
		  
		  <div class="rating text-center">
		  ${obj.rating>=4?`<p class="bg-sucess">${obj.rating}</p>`:
		    obj.rating<4&&obj.rating>=3?`<p class="bg-waring">${obj.rating}</p>`;
		  obj.rating<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-warning">${obj.rating}</p>`}
		  </div>
		  </div>
		  </div>
		  </div>
		  
<div class="overviewsection">
 <h4>${obj.title}</h4>
<em> overview</em>
 <p>
		 ${obj.overview}
		 </p>
		 <div class="action">
		   <button class="btn btn-outline-info onclick ="onMovieEdit>Edit</button>
		         <button class="btn btn-outline-danger="onMovieDelete(this)>Delete</button>
				 </div>
				 </div>
				 </figcaption>
				 </figure>
				 </div>
				 </div>
				 `;

 Moviecontainer.prepend(card);
} 
const templatingofmovies=(arr)=>{
	  let result=``;
	  arr.foreach{(obj)=>{
		  result+=`
		  <div class="card mb-4">
		    <figure class="Moviecard mb-0" id=${obj.MovieId}>
			<img src="${obj.imgurl}"
			  alt="${obj.title}"title="${obj.title}"
			  />
			  <figcaption>
			       <div class="ratingsection">
				   <div class="row">
				   <div class="col-10">
				   <h3>${obj.title}</h3>
				   </div>
				   <div class="col-2 align-self-center">
				   
				   <div class="rating text-center">
				   ${obj.rating>=4?`<p class="bg-sucess">${obj.rating}</p>`
				     obj.rating<4&&`<p class="bg-warinng">${obj.rating}</p>`
				   obj.rating<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-waring">${obj.rating}</p>`}
</div>
</div>
</div>

 <div class="overviewsection">
		<h4>${obj.title}</h4>
		<em>overview</em>
		 <p>
		 ${obj.overview}
		 </p>
		 <div class="action">
		   <button class="btn btn-outline-info onclick ="onMovieEdit(this)">Edit</button>
		         <button class="btn btn-outline-danger="onMovieDelete(this)>Delete</button>
				 </div>
				 </div>
				 </figcaption>
				 </figure>
				 </div>
				 </div>
				 `
	  })
	  moviecontainer.innerHTML=result;
	  }
	  if(localstorage.getitem("moviearr")){
		  moviearr=JSON.parse(localstorage.getitem("movirarr"));
		  templatingofmovies(moviearr);
	  }
	  
const modelbackdropshowhide=()=>{
    backdrop.classlist.toggle("active");
    Moviemodel.classlist.toggle("active");
};

const onmovieAdd=(eve)=>{
     eve.preventDefault();
    let movieobj={
        title:titlecontrol.value,
        imgurl:imgurlcontrol.value;
         rating:ratingcontrol.value,
         movieId.uuid()
	};
cl (movieobj);
movieArr.unshift(movieobj);
cl(moviearr);
 localstorage.setItem("movieARR",JSON.stringify(moviearr))
 AddMoviecard(movieobj)
 eve.target.reset();
 modelbackdropshowhide();

swal.fire({
title:`movie ${movieobj.title}is added sucessfully!!!`,
icon:'sucess',
timer:2500
})
};	

showmodel.addEventListener("click",modelbackdropshowhide);	

closemodelbtn.foreach((btn)=>{
   btn.addEventListener("click",modelbackdropshowhide);
});   
	  
const onMovieupdate=()=>{
	let updateId=loacalstorage.getitem("editid");
     let updateobj=	{
	 title:titlecontrol.value,
        imgurl:imgurlcontrol.value;
         rating:ratingcontrol.value,
         MovieId:updatId;
	 };
	 let objindex=moviearr.findindex(obj=>obj.movieId===updateId);
	 moviearr[objindex]=updateobj;
	 localstorage.setitem("moviearr",json.stringify(moviearr));
	 
	 let getcard=document.getElementById("updateId");
	 getcard.innerHTML=`
	 <img src="${updateobj.imgurl}"
	           alt="${updatedobj.title}"title="${updateobj.title}"
			   />
			   <figcaption>
	 <div class="ratingsection">
	    <div class="row">
		<div class="col-10">
		  <h3>${updateobj.title}</h3>
		  </div>
		  <div class="col-2 align-self-center">
		  
		  <div class="rating text-center">
		  ${updateobj.rating>=4?`<p class="bg-sucess">${updateobj.rating}</p>`:
		    updateobj.rating<4&&updateobj.rating>=3?`<p class="bg-waring">${updateobj.rating}</p>`;
		  updateobj.rating<3?`<p class="bg-danger">${updateobj.rating}</p>`:`<p class="bg-warning">${updateobj.rating}</p>`}
		  </div>
		  </div>
		  </div>
		  </div>
		  
   <div class="overviewsection">
		<h4>${updateobj.title}</h4>
		<em>overview</em>
		 <p>
		 ${updateobj.overview}
		 </p>
		 <div class="action">
		   <button class="btn btn-outline-info onclick ="onMovieEdit(this)">Edit</button>
		         <button class="btn btn-outline-danger="onMovieDelete(this)>Delete</button>
				 </div>
				 </div>
				 </figcaption>
				 `;
				 movieform.reset();
				 
	modelbackdropshowhide();
    swal.fire({
    title:'movie data updated sucessfully !!!',
    icon:'sucess',
    timer:3000
	})
}
 movieform.addEventListener("submit",OnMovieAdd);
 UPDATEMOVIE.addEventListener("Click",onMovieupdate); 
 showmodel.addEventListener("click",modelbackdropshowhide);	
				 
				   


	 
	 
	 


