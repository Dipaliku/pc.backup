const cl=console.log;
const productimage=document.getElementById("image");
const backdrop=document.getElementById("backdrop");
const closeimagebtns=[...document.queryswlectorall("closemodel")];
const productform =document.getElementById("productform");
const namecontrol=document.getElementById("name");
const imgurlcontrol=document.getElementById("imgurl");
const description=document.getElementById("description");
const statuscontrol=document.getelementbyid=("status");
const moviecontainer=document.getElementById("moviecontainer");
const addproductimage =document.getelementbyid("addproduct");
const updatemovie=document.getelementbyid("loder");
const submitbtn=document.getElementById("submitbtn");
const loder=document.getelementbyid('loader');

const baseurl=`https://product-acdb0-default-rtdb.asia-southeast1.firebasedatabase.app/`
const producturl=`${baseurl}/product.json`;

const snackbarmsg = (title,image,timer) => {
    Swal.fire({
        title:title,
        image:image,
        timer:timer,
    })  
}
 const makeapicall= async(apiurl,methodname,msgbody=null) => {
     loader.classlist.remove('d-none');
     try{
        if(msgbody){
            msgbody=json.stringify(msgbody)
        }
        let res = await fetch(apiurl,{
            method:methodname,
            body:msgbody,
            headers:("content-type" ,"application/json")
        })
        return res.json()
    } 
    catch(err){
        snackbarmsg(err,'error',1500)
    }
    finally{
        loader.classlist.add('d-none');
    }
}
        
        let productarr=(obj)=>{
            let postarr=[];
            for (const key in obj){
                //cl(data[key]))
                postarr.push({...obj[key],productid:key})
            }
             return postarr
        }

       const fetchproduct = async()=>{
         try{
            let data= await makeapicall(producturl,"GET");
            let PRODUCTarr=objToarr(data)
            templatingofproduct(productarr.reverse())
         }
         catch(err){
            snackbarmsg(err,'error',1500)
         }
         }
         fetchproduct()
       
        
        const templatingofproduct=(arr)=>{
            let result=``;
            arr.foreach((obj)=>{
                result+=`
                <div class="col-md-3 col-sm-6">
                <div class="card mb-4">
                <figure class="productcard mb-0" id=${obj.productid}">
                <img src="${obj.imgurl}"
                alt="${obj.name}"name="${obj.name}"
                />
                <figcaption>
                <div class=<"status">
                <div class="row">
                <div class="col-10">
                <h3>$obj{obj.name}</h3>
                </div>
                <div class="col-2 align-self-center">
                <div class="rating text-center">
                ${obj.status>=4?`<pclass="bg-sucess">${obj.status}</p>`:
                   obj.status<4&&obj.rating>=3?`<p class="bg-waring">${obj.status}</p>`:
                   obj.status<3?`<p class="bg-danger">${obj.rating}</p>`:`<p class="bg-waring">${obj.status}</p>`}
                   </div>
                   </div>
                   </div>
                   </div>
                   <div class="description">
                   <h4>${obj.title}</h4>
                   <em>description<em>
                   <p>
                   ${obj.overview}
                   </p>
                   <div class="product"id="${obj.nsme}">
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
            productcontainer.innerhtml=result;
        }
        const modeibackdropshowide=()=>{
            backdrop.classlist.toggle("active");
            productimage.classlist.toggle("active");
        
        };
     productimage.addeventlistener("click",modelbackdropshowhide);
        
        closemodelbtn.foreach((btn)=>{
            btn.addeventlistener("click",modelbackdropshowhide);
        });
        
        
        const productEdit= asys  (ele)=> {
            let editid=ele.closet("productid").id;
            cl(editid);
            localstorage.setitem("editid",editid)
            letediturl=`${baseurl}/data/${editid}.json`;
            loader.classlist.remove("d-none");
            makeapicall(editurl,"GET")
                loader.classlist.add("d-none");
                modelibackdropshowhide();
                addproduct.classlist.remove("d-none");
                updateproduct.classlist.remove("d-none");
                namecontrol.value=res.title;
                imgurlcontrol.value=res.imgurl;
                descriptioncontrol.value=res.overview;
                statuscontrol.value=res.rating;
            
            
        
            const productdelete= async (ele)=>{
                let title=ele.parentelement.id;
                cl(title)
                let deleteid=ele.closest("productimage").id;
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
                          
                     const adproductimage=(obj)=>
                    
                     //card.id=obj.productid;
                     card.classname="col-md-3 col-sm-6";
                     image.innerhtml=`
                     <div class="col-md-3 col-sm-6">
                     <div class="card mb-4">
                     <figure class="productimage mb-0" id=${obj.productid}">
                     <img src="${obj.imgurl}"
                     alt="${obj.name}"title="${obj.name}"
                     />
                     <figcaption>
                     <div class=<"statussection">
                     <div class="row">
                     <div class="col-10">
                     <h3>$obj{obj.name}</h3>
                     </div>
                     <div class="col-2 align-self-center">
                     <div class="rating text-center">
                     ${obj.status>=4?`<pclass="bg-sucess">${obj.status}</p>`:
                        obj.status<4&&obj.rating>=3?`<p class="bg-waring">${obj.status}</p>`:
                        obj.status<3?`<p class="bg-danger">${obj.status}</p>`:`<p class="bg-waring">${obj.status}</p>`}
                        </div>
                        </div>
                        </div>
                        </div>
                        <div class="description">
                   <h4>${obj.title}</h4>
                   <em>descriptin<em>
                   <p>
                   ${obj.description}
                   </p>
                   <div class="product"id="${obj.name}">
                   <button class="btn btn-outline-info"onclick="onproductEdit(this)">Edit</button>
                   <button class="btn btn-outline-danger"onclick="onproductdelete(this)">delete</button>  
                   </div>
                   </div>
                   </figcaption>
                   </figure>
                   </div>
                   </div>
                   `
                   productcontainer.prepend(card);
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
                    const onproductadd= async(eve)=>{
                        eve.preventdefault();
        
                        let proobj={ 
                            name:namecontrol.value,
                            imgurl:imgurlcontrol.value,
                            status:statuscontrol.value,
                            descripition:discriptionIcontrol.value
                        }
                        
                       let res=await makeapicall(producturl,"POST",proobj)
                       cl(res)
                        prodobj.id=res.name;
                          createproductcard(proobj)
                        snackbarmsg(`product ${proobj}.name}is added sucessfully`,"sucess",2000);
                                modelhide()
                    }catch(err){
                            snackbarmsg(err,"error",2000)  
                    }             
                        .finally{
                            productform.reset();
                        }
                            
                        
                        const onproductupdate=async(ele)=>{
                            let updateid=localstorage.getitem("editid");
                            cl(updateid);
                            let updateurl=`${baseurl}/data/${updateid}.json`;
                     let obj={ 
                                name:namecontrol.value,
                                imgurl:imgurlcontrol.value,
                                description:descriptioncontrol.value,
                                status:statuscontrol.value
                            }
                            loader.classlist.remove("d-none");
                            makeapicall(updateurl,"patch",obj)
                            .then(res=>{
                                cl(res);
                                let getcard=document.getElementById(updateid);
                                getcard.innerhtml=`
                                <img src="${res.imgurl}"
                                alt="${res.name}"name="${res.name}"
                                />
                                <figcaption>
                                <div class=<"status">
                                <div class="row">
                                <div class="col-10">
                                <h3>$obj{obj.name}</h3>
                                </div>
                                <div class="col-2 align-self-center">
                                <div class="rating text-center">
                                ${obj.status>=4?`<pclass="bg-sucess">${obj.status}</p>`:
                                   obj.status<4&&obj.rating>=3?`<p class="bg-waring">${obj.status}</p>`:
                                   obj.status<3?`<p class="bg-danger">${obj.status}</p>`:`<p class="bg-waring">${obj.status}</p>`}
                                   </div>
                                   </div>
                                   </div>
                                   </div> 
                                    <div class="description">
                                   <h4>${res.name}</h4>
                                   <em>description<em>
                                   <p>
                                   ${res.description}
                                   </p>
                                   <div class="product"id="${res.name}">
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
 productform.addEventListener("submit",onproductadd);
 updatebtn.addEventListener("click",onproductupdate
 ); 