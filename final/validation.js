export function validatePatient(patient){



if(
patient.name.trim()===""
){

return {

valid:false,

message:
"Name is required"

};


}



if(
patient.age<=0
){

return {

valid:false,

message:
"Invalid age"

};


}



if(
patient.phone.length < 9
){

return {

valid:false,

message:
"Invalid phone"

};


}



return {

valid:true

};


}