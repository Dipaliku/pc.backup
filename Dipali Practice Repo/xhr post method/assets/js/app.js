

var cl = console.log;

const postform = document.getElementById("postform");
const title = document.getElementById("title");
const body = document.getElementById("body");
const userId = document.getElementById("userId");
const postcontainer = document.getElementById("postcontainer");

const baseurl = 'https://jsonplaceholder.typicode.com' ;

const posturl = `${baseurl}/posts`;

let postarr = [];

const templating = (arr) =>{
    //let result = ``; 
   // arr.forEach(post => {
       // result += `<div class="card mb-4 ${post.id}">
                      //  <div class="card-header">
                      //      <h3 class="mb-0">${post.title}</h3>
                      //  </div>
                      //  <div class="card-body">
                     //       <p class="mb-0">${post.body}</p>
                      //  </div>
                      //  <div class="card-footer">
					//		<button class="btn btn-primary">Edit</button>
					//		<button class="btn btn-danger">Delete</button>
					//	</div>
                   // </div>`
    //});
   // getcard.innerHTML = result

   postcontainer.innerHTML = arr.map(post =>{
        return `<div class="card mb-4" id="${post.id}">
                    <div class="card-header">
                        <h3 class="mb-0">${post.title}</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">${post.body}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>`
    }).join('')
}

let xhr = new XMLHttpRequest();

xhr.open('GET', posturl, true);

xhr.send();

xhr.onload = function(){
    cl(xhr.status) // 200 success
    if(xhr.status === 200){
        //API call success
        postarr = JSON.parse(xhr.response);
        cl(postarr);
        templating(postarr);
    }
}

const onpostcreate = (e) => {
    e.preventDefault();
    let post = {
        title : title.value,
        body : body.value.trim(),
        userId : userId.value
    }
    cl(post);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', posturl);
    xhr.send(JSON.stringify(post));
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 300){
            //API call success
            post.id = JSON.parse(xhr.response).id;
            cl(post)
            postform.reset()
            let card = document.createElement("div");
            card.className = "card mb-4";
            card.id = post.id;
            card.innerHTML = `<div class="card-header">
                                    <h3 class="mb-0">${post.title}</h3>
                                </div>
                                <div class="card-body">
                                    <p class="mb-0">${post.body}</p>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">Edit</button>
                                    <button class="btn btn-danger">Delete</button>
                                </div>`
            postcontainer.prepend(card)
        }
    }
}

postform.addEventListener("submit", onpostcreate)