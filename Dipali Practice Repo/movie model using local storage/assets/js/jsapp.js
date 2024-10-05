const cl = console.log;

const showModel = document.getElementById("showModel");
const backDrop = document.getElementById("backDrop");
const movieModel = document.getElementById("movieModel");

const closeModelBtns = [...document.querySelectorAll(".closeModel")];

const movieForm = document.getElementById("movieForm");

const titleControl = document.getElementById("title");
const imgUrlControl = document.getElementById("imgUrl");
const overviewControl = document.getElementById("overview");
const ratingControl = document.getElementById("rating");

const movieContainer = document.getElementById("movieContainer");

const  movieArr = [];
	
  {
    title: "deul band",
    imgUrl: "https://th.bing.com/th/id/R.a295ab96767a0304337ff564644fcaa7?rik=N568kS2HOrGbHw&riu=http%3a%2f%2fwww.justmarathi.com%2fwp-content%2fuploads%2f2015%2f08%2fDeool-Band.jpg&ehk=nqOqVU0hydow90r3v4eAmuWuhpYcqs%2bc7EmvXjD2YX4%3d&risl=&pid=ImgRaw&r=0",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "5"
  },

  {
    title: "start up",
    imgUrl:
      "https://th.bing.com/th/id/OIP.dhmop8jsYzlg5_LAipouWAHaE8?rs=1&pid=ImgDetMain",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "5",
  },
  {
    title: "bajarangi bhaijan",
    imgUrl:
      "https://th.bing.com/th/id/OIP.BcFpFcMp6ibHTfArpPg1eQHaIE?rs=1&pid=ImgDetMain",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "5",
  },
  {
    title: "valu",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZTk2OWI2OGQtMDY4NC00YzBhLWJhOWQtYjYxNmU3MDE4NGJjXkEyXkFqcGdeQXVyNDU5MzA2NzI@._V1_.jpg",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "5",
  },
];

const templatingOfMovies = (arr) => {
  let result = ``;
  arr.forEach((movieObj) => {
    result += `
		<div class="col-md-4">
			<div class="card mb-4">
	  			<figure class="movieCard mb-0"id=${obj.movieid}">
					<img src="${movieObj.imgUrl}"
		    		 alt="${movieObj.title}" title="${movieObj.title}"
					/>
					<figcaption>
		  				<div class="ratingSection">
							<div class="row">
			 					 <div class="col-10">
									<h3>${movieObj.title}</h3>
			  					</div>
							    <div class="col-2 align-self-center">
									<span class="bg-success p-2">${movieObj.rating}</span>
			  					</div>
							</div>
		 			 	</div>
					    <div class="overviewSection">
							<h4>${movieObj.title}</h4>
							<em>Overview</em>
							<p>
							${movieObj.overview}
							</p>
		 				 <div class="action">
						 <button class="btn btn-outline-info">Edit</button>
					   <button class="btn btn-outline-danger">delete</button>
					   </div>
					   
					</figcaption>
			  </figure>
			</div>
 		 </div>
	`
  })
  movieContainer.innerHTML=result;
}

templatingOfMovies(movieArr);


const modelBackDropShowHide = () => {
  backDrop.classList.toggle("active");
  movieModel.classList.toggle("active");
};

const onMovieAdd = (eve) => {
  eve.preventDefault();
  let movieObj = {
    title: titleControl.value,
    imgUrl: imgUrlControl.value,
    overview: overviewControl.value,
    rating: ratingControl.value,
	movieId:uuid()
	function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  
  
 const templatingOfMovies=(arr)=>{
	 
}

  };
  cl(movieObj);
  movieArr.unshift(movieObj);
  localstorage.setitem("movieArr",json.stringify (movirArr));
  cl(movieArr);
 // templatingOfMovies(movieArr);
 add
  let card=document.createElement("div");
  card.id=movieobj.movieid;
  card.className="col-md-4";
  card.innerHTML=`
                  <figure class="movieCard mb-0"id=${movieobj.movieid}">
					<img src="${movieObj.imgUrl}"
		    		 alt="${movieObj.title}" title="${movieObj.title}"
					/>
					<figcaption>
		  				<div class="ratingSection">
							<div class="row">
			 					 <div class="col-10">
									<h3>${movieObj.title}</h3>
			  					</div>
							    <div class="col-2 align-self-center">
									<span class="bg-success p-2">${movieObj.rating}</span>
			  					</div>
							</div>
		 			 	</div>
					    <div class="overviewSection">
							<h4>${movieObj.title}</h4>
							<em>Overview</em>
							<p>
							${movieObj.overview}
							</p>
		 				 <div class="action">
						 <button class="btn btn-outline-info">Edit</button>
					   <button class="btn btn-outline-danger">delete</button>
					   </div>
					   
					</figcaption>
			  </figure>       
  movieContainer.prepend(card);
  eve.target.reset();
  modelBackDropShowtoggle();

  Swal.fire({
	title : `Movie ${movieObj.title} is added successfully !!!`,
	icon : "success",
	timer : 2500
  })
};

showModel.addEventListener("click", modelBackDropShowHide);

closeModelBtns.forEach((btn) => {
  btn.addEventListener("click", modelBackDropShowHide);
});

movieForm.addEventListener("submit", onMovieAdd);
