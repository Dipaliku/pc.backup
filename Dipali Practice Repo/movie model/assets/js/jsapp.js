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

let movieArr = [
	
  {
    title: "vrundavan",
    imgUrl::https://www.google.com/imgres?imgurl=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Ffs%2F4e01c576492507.5c6bb659b2884.jpg&tbnid=wMLtyRsE0RrmFM&vet=12ahUKEwiy3I_-pY-FAxVvaGwGHZVtCaEQxiAoAXoECAAQLA..i&imgrefurl=https%3A%2F%2Fwww.behance.net%2Fgallery%2F76492507%2FMAULI-MARATHI-MOVIE-POSTER%2Fmodules%2F444334961&docid=s5Hn6HcQTg5sZM&w=1920&h=3063&itg=1&q=Marathi%20movie%20poster%20HD&ved=2ahUKEwiy3I_-pY-FAxVvaGwGHZVtCaEQxiAoAXoECAAQLA
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "4"
  },

  {
    title: "mauli",
    imgUrl:
      https:https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F76492507%2FMAULI-MARATHI-MOVIE-POSTER%2Fmodules%2F444334961&psig=AOvVaw3w4uK-6UrJUhxGtTh4pnJe&ust=1711452085505000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKi5xaCmj4UDFQAAAAAdAAAAABAD
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "5",
  },
  {
    title: "dunki",
    imgUrl:
      https:"//www.google.com/imgres?q=new%20hindi%20movie%20posters&imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Findiatoday%2Finline-images%2Fdunki%2520poster%25201.jpg%3FVersionId%3D303.WH_bL12rjj.nacfNV1EDfALmmq66%26size%3D750%3A*&imgrefurl=https%3A%2F%2Fwww.indiatoday.in%2Fmovies%2Fbollywood%2Fstory%2Fshah-rukh-khan-rajkummar-hirani-dunki-new-posters-diwali-taapsee-pannu-vicky-kaushal-2461638-2023-11-11&docid=xepb0xjYdRTy9M&tbnid=9tchznH4OzOc0M&vet=12ahUKEwi44aOPo4-FAxWwd2wGHaOVBrsQM3oECDAQAA..i&w=750&h=938&hcb=2&ved=2ahUKEwi44aOPo4-FAxWwd2wGHaOVBrsQM3oECDAQAA"
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    rating: "4",
  },
  {
    title: "chakde india",
    imgUrl:
     https:"//www.google.com/imgres?q=new%20hindi%20movie%20posters&imgurl=https%3A%2F%2Fwww.tallengestore.com%2Fcdn%2Fshop%2Fproducts%2FChakDeIndia-ShahRukhKhan-BollywoodHindiMoviePoster_b91534e0-f94a-479f-8b75-d2d5889af5f9.jpg%3Fv%3D1675251758&imgrefurl=https%3A%2F%2Fwww.tallengestore.com%2Fproducts%2Fchak-de-india-shah-rukh-khan-bollywood-hindi-movie-poster-framed-prints&docid=adJmIEgEXDUawM&tbnid=dfv49O1uSb0o3M&vet=12ahUKEwje1-b7o4-FAxUoRmwGHZEcBYg4HhAzegQIThAA..i&w=1100&h=825&hcb=2&ved=2ahUKEwje1-b7o4-FAxUoRmwGHZEcBYg4HhAzegQIThAA"
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
	  			<figure class="movieCard mb-0">
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
  };
  cl(movieObj);
  movieArr.unshift(movieObj);
  cl(movieArr);
  templatingOfMovies(movieArr);
  eve.target.reset();
  modelBackDropShowHide();

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
