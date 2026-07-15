const API_URL =
"http://localhost:3000/doctors";



export async function getDoctors(){


const response =
await fetch(API_URL);



if(!response.ok){

throw new Error(
"Cannot load doctors"
);

}



return await response.json();


}




export async function addDoctor(doctor){


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
JSON.stringify(doctor)

}

);



return await response.json();


}