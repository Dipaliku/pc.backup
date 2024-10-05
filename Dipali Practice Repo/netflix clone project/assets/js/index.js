const trendingmovies=document.getElementById("trendingmovies");
{
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 18,
      name: "Drama"
    }
  ],
  homepage: "",
  id: 126308,
  imdb_id: "tt0436941",
  origin_country: [
    "US"
  ],
  original_language: "en",
  original_title: "Who Killed Cock Robin?",
  overview: "In depressed Butte, Montana, young men struggle to forge modest lives and make sense of it all.",
  popularity: 0.801,
  poster_path: "/fNOyjiokUAr3JVKNacPyIFq7yez.jpg",
  production_companies: [],
  production_countries: [
    {
      iso_3166_1: "CA",
      name: "Canada"
    }
  ],
  release_date: "2005-01-20",
  revenue: 0,
  runtime: 88,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "",
  title: "Who Killed Cock Robin?",
  video: false,
  vote_average: 5.143,
  vote_count: 7
}
const initslider=()=>{
	$('#trendingmovies').owlCarousel({
    loop:true,
    margin:10,
	nav:true,
	dots:false,
		
    responsive:{
        0:{
            items:1,
        },
        1000:{
            items:1
        }
    }
})
const loadqueryparam=(ele)=>{
	let id=ele.dataset['id'];
	cl(id);
	let currenURL=newurl(window.location.href);
    let queryparams=new URLsearchparams(currentURL.search);
       queryparams.set("moviesid",id);
        current.search=queryparams.tostring();
          let movieredirecturl=${currenturl.origin}/movieinfo.html${current.search};
            window.location.href=movieredirecturl;
}
const insertmainsilderlitems=(arrofmovies)=>
             trendingmovies.innerHTML=arrofmovies,
			 .map(movie=>{
				 return`
				 <div class="item">
				 <figure class="mb-0 moviecard">
				 <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path!!movie.poster_path}"
				 <figcaption>
				 <h3 clas="display-3">
				 ${movie.title!!movie.orginal_title!!movie.original_name}
				 </h3>
				 <em class="my-5">
				 ${movie.overview}
				 </em>
				 <p>
				 <button data-id="${movie.id}"class="btn btn-large btn-red"onclick="loadquery params(this)">
				 viewmore</button>
				 </p>
				 </figcaption>
				 </figure>
				 </div>
				 ;`
			 }).join(");
}
  const featchtrendingmovies=async()={
	           let res= await makeapicall(TRENDING_URL,"GET");
               cl(res)
  insertmainsilderlitems(res.results);
     initslider();
  }
fetchtrendingmovies();  
 			 
