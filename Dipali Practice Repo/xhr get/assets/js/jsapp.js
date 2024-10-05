var cl = console.log;

const getcard = document.getElementById("getcard");

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

   getcard.innerHTML = arr.map(post =>{
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
        postarr = JSON.parse(xhr.response);
        cl(postarr);
        templating(postarr);
    }
}