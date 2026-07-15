const API_URL =
"http://localhost:3000/appointments";



export async function getAppointments(){


const response =
await fetch(API_URL);



return await response.json();


}





export async function addAppointment(
appointment
){


const response =
await fetch(
API_URL,
{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:
JSON.stringify(
appointment
)

}

);



return await response.json();


}