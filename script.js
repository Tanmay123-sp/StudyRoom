let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;


let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


function uploadAssignment(event) {
   event.preventDefault();
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   const assignmentFile = document.getElementById("assignmentFile").files[0];
 
   if (assignmentFile) {
     alert(`Assignment "${assignmentFile.name}" uploaded successfully.`);
     document.getElementById("assignmentForm").reset();
   } else {
     alert("Please select a file to upload.");
   }
 }
 
 document.getElementById("assignmentForm").addEventListener("submit", uploadAssignment);
 
 