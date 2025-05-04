let rbtn = document.getElementById("rbtn")
let name1 = document.getElementById("name1")
let email1 = document.getElementById("email1")
let phone1 = document.getElementById("phone1")
let password1 = document.getElementById("password1")
let notfilled = document.getElementById("empty")
let loginhere = document.getElementById("loginhere")
rbtn.addEventListener("click",()=>{
    if( password1.value!="" && name1.value != "" && email1.value != "" && phone1.value != ""){
        // console.log("register");
        
        if(password1.value != password2.value){
            notfilled.innerText = "Password didn't match"
            return;
        }
        window.localStorage.setItem("name",name1.value)
        window.localStorage.setItem("phone",phone1.value)
        window.localStorage.setItem("email",email1.value)
        window.localStorage.setItem("password",password1.value)
        console.log(name1.value)
        rbtn.innerText = "Registration Sucussfull"
    }else{
        notfilled.innerText = "Please Enter all Fields"
    }
    

    
    name1.value = "";
    phone1.value = "";
    email1.value = "";
    password1.value = "";
    password2.value = "";
})

function loginherebtn(){
    window.location.href = "../login/login.html"
}
