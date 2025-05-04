// let form = document.querySelector(".container")
// let email1 = document.getElementById("email1")
// let password1 = document.getElementById("password1")

// form.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if(e.target.innerText == "Login"){
//         console.log("hi");
        
//         if(window.localStorage.getItem("email") == email1.value &&
//         window.localStorage.getItem("password") == password1.value){
//             setTimeout(()=>{
//                 console.log("Authentication Sucuss");
//                 window.location.href = "http://127.0.0.1:5500/Project/ecommers/index.html"
//             },1000)
            
//         }
//     }
// })

let email1 = document.getElementById("email1");
let password1 = document.getElementById("password1");
let loginBtn = document.getElementById("loginBtn");
let incorrect = document.getElementById("incorrect")

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
    console.log("hello");
    
  if (
    window.localStorage.getItem("email") === email1.value &&
    window.localStorage.getItem("password") === password1.value
  ) {
    console.log("Authentication Success");

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1000);
  } else {
    incorrect.innerHTML = "Invalid Credntials <br> Please try again"
    console.log("Invalid credentials");
  }
});