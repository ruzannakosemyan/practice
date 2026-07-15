const button =
document.getElementById("loadUsers");
const container =
document.getElementById("usersContainer");
// Event Listener
button.addEventListener(
"click",
getUsers
);
// Async Function
async function getUsers(){
console.log("Request Started");
try{
const response =
await fetch(
"https://jsonplaceholder.typicode.com/users"
);
console.log(response);
const users =
await response.json();
console.log(users);
displayUsers(users);
}
catch(error){
console.log(
"Error:",
error
);
}
}
// DOM Manipulation
function displayUsers(users){
container.innerHTML="";
users.forEach(user=>{
const card =
document.createElement("div");
card.className="user-card";
card.innerHTML=`
<h2>
${user.name}
</h2>
<p>
Email:
${user.email}
</p>
<p>
Phone:
${user.phone}
</p>
<button class="delete-btn">
Delete
</button>
`;
container.appendChild(card);
});
}
// Event Delegation
container.addEventListener(
"click",
function(event){
if(
event.target.classList.contains(
"delete-btn"
)
){
event.target.parentElement.remove();
}
});