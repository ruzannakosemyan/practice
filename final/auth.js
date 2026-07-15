const loginButton =
document.getElementById("loginBtn");


loginButton.addEventListener(
"click",
()=>{


const username =
document.getElementById("username").value;


const password =
document.getElementById("password").value;



if(
username === "admin" &&
password === "12345"
){


const user = {

username:"admin",

role:"doctor"

};



localStorage.setItem(
"user",
JSON.stringify(user)
);



window.location.href =
"index.html";


}

else{


document.getElementById("message").innerHTML =
"Invalid Login";


}


});