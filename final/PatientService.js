import {

getPatients,
addPatient,
deletePatient

}

from "/js/apiService.js";




export class PatientService{


async getAll(){

return await getPatients();

}



async create(patient){

return await addPatient(patient);

}



async remove(id){

return await deletePatient(id);

}



}