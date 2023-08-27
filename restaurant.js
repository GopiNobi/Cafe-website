let form =document.querySelector("#form");
let username =document.querySelector("#username");
let email =document.querySelector("#email");
let password =document.querySelector("#password");
let cpassword =document.querySelector("#cpassword");



form.addEventListener("submit",(e)=>{
    if(!(validateform())){
    e.preventDefault();
    }
    else{
        validateform();
    }
})
function validateform(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let signin = true;

    if(usernameval===""){
        signin=false;
        error(username,"please enter username")
    }
    else{
        success(username)
    }
    if(emailval===""){
        signin=false;
        error(email,"please enter your email")
    }
    else if(!emailvalidate(emailval)){
        signin=false;
        error(email,"not a valid method")
    }
    else[
        success(email)
    ]
    if(passwordval===""){
        signin=false;
        error(password,"enter a strong password");
    }
    else if(passwordval.length<8){
        signin=false;
        error(password,"password must be atleast 8 characters")
    }
    else{
        success(password)
    }
    if(cpasswordval===""){
        signin=false;
        error(cpassword,"enter the confirm password")
    }
    else if(cpasswordval!==passwordval){
        signin=false;
        error(cpassword,"Entered password is mismatch")
    }
    else{
        success(cpassword)
    }
    
}
function error(element,message){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText=message;
    input.classList.add("error");
    input.classList.remove("success")
}
function success(element){
    const input = element.parentElement;
    const errorelement =input.querySelector(".error")
    errorelement.innerText="";
    input.classList.add("success");
    input.classList.remove("error")
}
const emailvalidate =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}
