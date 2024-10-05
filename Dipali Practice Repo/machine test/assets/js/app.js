let cl=console.log;
const postcontainer=Document.getElementById("postcontainer");
const postform=Document.getElementById("postform");
const title=Document.getElementById("title");
const body=Document.getElementById("body");c
const userId=Document.getElementById("userId")
const submitbtn=Document.getElementById("submitbtn");
const updatebtn=Document.getElementById("updatebtmn");
const formrow=document.getElementById("fromrow");
const baseurl = 'https://jsonplaceholder.typicode.com' ;

const posturl = `${baseurl}/posts`;

let postarr = [];
const snacBarmsg=(title,icon,timer)=>{
	    swal.fire{{
			title:title,
			icon:icon,
		timer:timer}}
  }


  const submitupdatetoggle=()=>{
	   submitbtn.classlist.toggle("d-none");
	   updatebtn.classlist.toggle("d-none");
  }
  const makeapicall=(methodname,apiurl,msgbody=null)=>{
    let xhr = new XMLHttpRequest();
    xhr.open(methodName, apiUrl);
    xhr.send(JSON.stringify(msgBody))
    xhr.onload = function () {
        let res = JSON.parse(xhr.response);
        cl(res);
        if (methodName === "GET") {
            if (Array.isArray(res)) {
                templating(res)
            }
            else {
                titleControl.value = res.title;
                bodyControl.value = res.body;
                userIdControl.value = res.userId;
                submitUpdateTogggle();
                document.getElementById("formRow").scrollIntoView();
            }
        }
        else if (methodName === "POST") {
            let card = document.createElement("div");
            card.id = res.id;
            card.className = 'card mt-4';
            card.innerHTML = `<div class="card-header"><h3 class="mb-0">${msgBody.title}</h3></div>
                            <div class="card-body"><h3 class="mb-0">${msgBody.body}</h3></div>
                            <div class="card-footer">
                                <button class="btn btn-outline-primary" onclick="onEdit(this)">Edit</button>
                                <button class="btn btn-outline-danger float-right" onclick="onDelete(this)">Delete</button>
                            </div>`
            postContainer.prepend(card);
            snacBarMsg("New post created successfully!!!", "success", 2000);
        } else if (methodName === "PATCH") {            
            let card = [...document.getElementById(res.id).children];
            card[0].innerHTML = `<h3 class="mb-0">${msgBody.title}</h3>`;
            card[1].innerHTML = `<h3 class="mb-0">${msgBody.body}</h3>`;
            submitUpdateTogggle();
            postForm.reset();
            snacBarMsg("Post updated successfully!!!");
            document.getElementById(res.id).scrollIntoView();
        } else if(methodName==="DELETE"){
            let id = localStorage.getItem("deleteId");
            document.getElementById(id).remove();
            snacBarMsg("Post deleted successfully!!!");
        }
    }
}
makeApiCall("GET", postUrl);

const templating = (arr) => {
    postContainer.innerHTML = arr.map((ele) => {
        return `<div class="card mt-4" id="${ele.id}">
                    <div class="card-header"><h3 class="mb-0">${ele.title}</h3></div>
                    <div class="card-body"><h3 class="mb-0">${ele.body}</h3></div>
                    <div class="card-footer">
                        <button class="btn btn-outline-primary" onclick="onEdit(this)">Edit</button>
                        <button class="btn btn-outline-danger float-right" onclick="onDelete(this)">Delete</button>
                    </div>
                </div>`
    }).join('')
}

const onEdit = (ele) => {
    let editId = ele.closest(".card").id;
    localStorage.setItem("editId", editId);
    let editUrl = `${baseUrl}/posts/${editId}`;
    makeApiCall("GET", editUrl)
}

const onDelete = (ele)=>{
    let deleteId = ele.closest(".card").id;
    localStorage.setItem("deleteId", deleteId);
    let deleteUrl = `${baseUrl}/posts/${deleteId}`;
    Swal.fire({
        title: "Are you sure, You want to delete this post?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "skyblue",
        cancelButtonColor: "red",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            makeApiCall("DELETE", deleteUrl);          
        }
      });      
}

const onUpdateBtn = () => {
    let updateId = localStorage.getItem("editId");
    let updateUrl = `${baseUrl}/posts/${updateId}`;
    let updateObj = {
        title: titleControl.value,
        body: bodyControl.value,
        userId: userIdControl.value
    }
    makeApiCall("PATCH", updateUrl, updateObj);
}

const onFormSubmit = (eve) => {
    eve.preventDefault();
    let newPost = {
        title: titleControl.value,
        body: bodyControl.value,
        userId: userIdControl.value
    }
    cl(newPost)
    makeApiCall("POST", postUrl, newPost);

}




postForm.addEventListener("submit", onFormSubmit);
updateBtn.addEventListener("click", onUpdateBtn);


  
 
	    