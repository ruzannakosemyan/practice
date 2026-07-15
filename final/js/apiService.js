const API_URL = "http://localhost:3000/patients";


// GET ALL PATIENTS

export async function getPatients(){

    const response = await fetch(API_URL);


    if(!response.ok){

        throw new Error(
            "Cannot load patients"
        );

    }


    return await response.json();

}



// CREATE PATIENT

export async function addPatient(patient){


    const response = await fetch(
        API_URL,
        {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },


            body:JSON.stringify(patient)

        }
    );


    if(!response.ok){

        throw new Error(
            "Cannot create patient"
        );

    }


    return await response.json();

}



// DELETE PATIENT

export async function deletePatient(id){


    const response = await fetch(
        `${API_URL}/${id}`,
        {

            method:"DELETE"

        }
    );


    if(!response.ok){

        throw new Error(
            "Cannot delete patient"
        );

    }


}