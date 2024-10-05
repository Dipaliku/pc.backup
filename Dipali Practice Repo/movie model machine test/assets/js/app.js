const cl=console.log;
const showmodel=document.getElementById("showmodel");
const backdrop=document.getElementById("backdrop");
const moviemodel=document.getElementById("moviemodel");
const closemodeibtns=[...document.queryswlectorall("closemodel")];
const movieform=document.getElementById("movieform");
const titlecontrol=document.getElementById("title");
const imgurlcontrol=document.getElementById("imgurl");
const overviewcontrol=document.getElementById("overview");
const ratingcontrol=document.getelementbyid=("rating");
const moviecontainer=document.getElementById("moviecontainer");
const addmovie=document.getelementbyid("addmovie");
const updatemovie=document.getelementbyid("loder")
const submitbtn=document.getElementById("submitbtn")
const loder=document.getelementbyid('loader');

let baseurl=`https://movie-model-4599d-default-rtdb.asia-southeast1.firebasedatabase.app/`
let posturl=`${baseurl}/movies.json`;

const snackbarmsg=(msg,icon,time) => {
    FileSystemWritableFileStream.fire({
        title:msg,
        icon:icon,
        timer:time,
    })
    }

         
let obJToarr=(obj)=>{
    let postarr=[];
    for (const key in obj){
        //cl(data[key]))
        postarr.push({...obj[key],movieid:key})
    }
     return postarr
}

const templatingofmovie=(arr)=>{
    let result=``;
    arr.foreach((obj)=>{
        result+=`
        <div class="col-md-3 col-sm-6">
        <div class="card mb-4">
        <figure class="moviecard mb-0" id=${obj.movieid}">
        <img src="${obj.imgurl}"
        alt="${obj.title}"title="${obj.title}"
        />
        <figcaption>
        <div class=<"ratingsection">
        <div class="row">
        <div class="col-10">
        <h3>$obj{obj.title}</h3>
        </div>
        <div class="col-2 align-self-center">
        <div class="rating text-center">
        ${obj.rating>=4?`<pclass="bg-sucess">${obj.rating}</p>`:
           obj.rating<4&&obj.rating>=3?`<p class="bg-waring">${obj.rating}</p>`:
           obj.rating<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-waring">${obj.rating}</p>`}
           </div>
           </div>
           </div>
           </div>
           <div class="overviewsection">
           <h4>${obj.title}</h4>
           <em>overview<em>
           <p>
           ${obj.overview}
           </p>
           <div class="action"id="${obj.title}">
           <button class="btn btn-outline-info"onclick="onmovieEdit(this)">Edit</button>
           <button class="btn btn-outline-danger"onclick="onmoviedelete(this)">delete</button>  
           </div>
           </div>
           </figcaption>
           </figure>
           </div>
           </div>
           `
    })
    moviecontainer.innerhtml=result;
}
const modeibackdropshowide=()=>{
    backdrop.classlist.toggle("active");
    moviemodel.classlist.toggle("active");

};
showmodel.addeventlistener("click",modelbackdropshowhide);

closemodelbtn.foreach((btn)=>{
    btn.addeventlistener("click",modelbackdropshowhide);
});


const onmovieedit=(ele)=>{
    let editid=ele.closet(".moviecard").id;
    cl(editid);
    localstorage.setitem("editid",editid)
    letediturl=`${baseurl}/data/${editid}.json`;
    loader.classlist.remove("d-none");
    makeapicall(editurl,"get")
    .then(res=>{
        cl(res)
        loader.classlist.add("d-none");
        modelibackdropshowhide();
        addmovie.classlist.remove("d-none");
        updatemovie.classlist.remove("d-none");
        titlecontrol.value=res.title;
        imgurlcontrol.value=res.imgurl;
        overviewcontrol.value=res.overview;
        ratingcontrol.value=res.rating;
    })
    .catch(err=>{
        cl(err)
        loader.classlist.add("d-none");
    })

    const onmoviedelete=(ele)=>{
        let title=ele.parentelement.id;
        cl(title)
        let deleteid=ele.closest("moviecard").id;
        cl(deleteid);
        Swal.fire({
            title: `do you want to remove ${title}movie?`,
            showCancelButton: true,
            confirmButtonText: "Yes", 
            denybuttontext:`don' removet`

          }).then((result) => {
            if (result.isConfirmed) {
               let deleteurl=`${baseurl}/data/${deleteid}.json`;
               loader.classlist.remove("d-none");
               makeapicall(deleteurl,"delete")
               .then(res=>{
                cl(res)
                ele.closet(".col-md-3").remove();
                loader.classlist.add("d-none");
                snackbarmsg(`movie ${title}is deleted sucessfully`,"sucess",2000);
               })
               .catch(err=>{
                cl(err)
                loader.classlist.add("d-none");

               });
                  
             const addmovieaddcard=(obj)=>
            
             //card.id=obj.movieid;
             card.classname="col-md-3 col-sm-6";
             card.innerhtml=`
             <div class="col-md-3 col-sm-6">
             <div class="card mb-4">
             <figure class="moviecard mb-0" id=${obj.movieid}">
             <img src="${obj.imgurl}"
             alt="${obj.title}"title="${obj.title}"
             />
             <figcaption>
             <div class=<"ratingsection">
             <div class="row">
             <div class="col-10">
             <h3>$obj{obj.title}</h3>
             </div>
             <div class="col-2 align-self-center">
             <div class="rating text-center">
             ${obj.rating>=4?`<pclass="bg-sucess">${obj.rating}</p>`:
                obj.rating<4&&obj.rating>=3?`<p class="bg-waring">${obj.rating}</p>`:
                obj.rating<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-waring">${obj.rating}</p>`}
                </div>
                </div>
                </div>
                </div>
                <div class="overviewsection">
           <h4>${obj.title}</h4>
           <em>overview<em>
           <p>
           ${obj.overview}
           </p>
           <div class="action"id="${obj.title}">
           <button class="btn btn-outline-info"onclick="onmovieEdit(this)">Edit</button>
           <button class="btn btn-outline-danger"onclick="onmoviedelete(this)">delete</button>  
           </div>
           </div>
           </figcaption>
           </figure>
           </div>
           </div>
           `
           moviecontainer.prepend(card);
            }
            const makeapicall=(apiurl,methodname,msgbody=null)=>
            msgbody=msgbody ? json.strigify(msgbody):null;
            return fetch(apiurl,{
                method:methodname,
                body:msgbody,
                headers:{
                    "content-type":"application/json"
                }
            })
             .then(res=>{
                cl(res);
                return res.json();
             })
            
            const fetchposts=()=>{
                loader.classlist.remove("d-none");
            }
                
                loader.classlist.add("d-none")

            })
            const onmovieadd=(eve)=>{
                eve.preventdefault();

                let obj={ 
                    title:titlecontrol.value,
                    imgurl:imgurlcontrol.value,
                    overview:overviewcontrol.value,
                    rating:ratingcontrol.value
                }
                loader.classlist.add("d-none");
                makeapicall(posturl,"post",obj)
                .then(res=>{
                    cl(res)
                    loader.classlist.add("d-none")
                    obj.movieid=res.name;
                    cl(obj)
                    addmoviecard(obj);
                snackbarmsg(`movie${obj.title}is added sucessfully`,"sucess",2000);
                
                    loader.classlist.add("d-none");
                    snackbarmsg(err,"error",2000)               
                .finally(()=>{
                    eve.target.reset();
                    modelbackdropshowhide();
                })
                
                const onmovieupdate=()=>{
                    let updateid=localstorage.getitem("editid");
                    cl(updateid);
                    let updateurl=`${baseurl}/data/${updateid}.json`;
             let obj={ 
                        title:titlecontrol.value,
                        imgurl:imgurlcontrol.value,
                        overview:overviewcontrol.value,
                        rating:ratingcontrol.value
                    }
                    loader.classlist.remove("d-none");
                    makeapicall(updateurl,"patch",obj)
                    .then(res=>{
                        cl(res);
                        let getcard=document.getElementById(updateid);
                        getcard.innerhtml=`
                        <img src="${res.imgurl}"
                        alt="${res.title}"title="${res.title}"
                        />
                        <figcaption>
                        <div class=<"ratingsection">
                        <div class="row">
                        <div class="col-10">
                        <h3>$obj{obj.title}</h3>
                        </div>
                        <div class="col-2 align-self-center">
                        <div class="rating text-center">
                        ${obj.rating>=4?`<pclass="bg-sucess">${obj.rating}</p>`:
                           obj.rating<4&&obj.rating>=3?`<p class="bg-waring">${obj.rating}</p>`:
                           obj.rating<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-waring">${obj.rating}</p>`}
                           </div>
                           </div>
                           </div>
                           </div> 
                            <div class="overviewsection">
                           <h4>${res.title}</h4>
                           <em>overview<em>
                           <p>
                           ${res.overview}
                           </p>
                           <div class="action"id="${res.title}">
                           <button class="btn btn-outline-info"onclick="onmovieEdit(this)">Edit</button>
                           <button class="btn btn-outline-danger"onclick="onmoviedelete(this)">delete</button>  
                           </div>
                           </div>
                           </figcaption>
                           </figure>
                           </div>
                           </div>
                           `;
                           loader.classlist.add("d-none");
                    })
                    .catch(err=>{
                        cl(err)
                        loader.classlist.add("d-none")
                    .finally(()=>{
                        movieform.reset();
                        addmovie.classlist.remove("d-none");
                        updatemovie.classlist.add("d-none");
                        modelbackdropshowhide();
                    })
                    movieform.addEventListener("submit",onmovieadd);
                    updatebtn.addEventListener("click",onmovieupdate);
                    
                

                    
                
            


        
                    

    





   

    


