let form =document.querySelector("#form");
let username =document.querySelector("#username");
let email =document.querySelector("#email");
let password =document.querySelector("#password");
let cpassword =document.querySelector("#cpassword");
let barbtn = document.querySelector(".hamburger");
let menuitems=document.querySelector(".menuitems");
let call =document.querySelector(".phone");
let gmail =document.querySelector(".mail");
let confirmtele =document.querySelector(".confirmtele");
let teleyes = document.querySelector("#yes");
let teleno = document.querySelector("#no");
let search=document.querySelector("#search");
let orderbtn =document.querySelector("#orderbtn");
let orderstore=[];

window.onload=()=>{
    JSON.parse(localStorage.getItem("orderstore")) || [];
}


barbtn.addEventListener("click",()=>{
    barbtn.classList.toggle("active");
    menuitems.classList.toggle("active")
})
call.addEventListener("click",()=>{
    confirmtele.classList.add("active");

})
teleyes.addEventListener("click",()=>{
    confirmtele.classList.remove("active");
    call=true;
    gmail=true;
    window.open("google.com")
})
teleno.addEventListener("click",()=>{
    confirmtele.classList.remove("active");
    call=false;
    gmail=false;
})
orderbtn.addEventListener("click",()=>{
    const searchval = search.value.trim();
    let tablenum;
    if (searchval==""){
        window.alert("please select the food you want");
    }
    else{
       tablenum=Number(window.prompt("Enter your Table Number","Table Number"));
       window.alert("your order is confirmed","and your table number is ",tablenum);
       orderstore.push(`${searchval}->TableNo:${tablenum}`);
       localStorage.setItem('orders',JSON.stringify(orderstore))
    }

})




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