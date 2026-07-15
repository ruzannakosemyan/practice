import {
addAppointment
}
from "/js/appointmentService.js";
import {
renderPatientOptions,
renderDoctorOptions,
renderDoctorSelect
}
from "/js/ui.js";
import {
    getPatients,
    addPatient,
    deletePatient
}
from "/js/apiService.js";


import {
    Patient
}
from "/js/patient.js";


import {
    renderPatients,
    renderDoctors,
    renderAppointments
}
from "/js/ui.js";


import {
    getDoctors
}
from "/js/doctorService.js";


import {
    getAppointments
}
from "/js/appointmentService.js";




let patients = [];



// LOAD PATIENTS

async function loadPatients(){

    try{

        patients = await getPatients();

        console.log(patients);

        renderPatients(patients);

    }

    catch(error){

        console.error(error);

    }

}
async function loadMedicalData(){

const doctors =
await getDoctors();
renderDoctorSelect(
doctors
);


const patients =
await getPatients();



const appointments =
await getAppointments();



renderDoctors(
    doctors
);



renderAppointments(
    appointments,
    patients,
    doctors
);



}



loadMedicalData();



loadPatients();





// ADD PATIENT


const addButton =
document.getElementById(
    "addPatient"
);



addButton.addEventListener(
    "click",
    async()=>{


        const name =
        document.getElementById(
            "patientName"
        )
        .value;



        const age =
        document.getElementById(
            "patientAge"
        )
        .value;



        const phone =
        document.getElementById(
            "patientPhone"
        )
        .value;




        const patient =
        new Patient(
            name,
            age,
            phone
        );




        const addButton =
document.getElementById(
    "addPatient"
);



addButton.addEventListener(
"click",
async()=>{


const name =
document.getElementById(
"patientName"
).value;



const age =
document.getElementById(
"patientAge"
).value;



const phone =
document.getElementById(
"patientPhone"
).value;




const patient =
new Patient(
name,
age,
phone
);




// 1. Ստեղծում ենք հիվանդին

const newPatient =
await addPatient(patient);





// 2. Վերցնում ենք ընտրված բժշկի ID-ն

const doctorId =
document.getElementById(
"patientDoctor"
).value;




// 3. Ստեղծում ենք Appointment կապը

const appointment = {


patientId:
newPatient.id,


doctorId:
Number(doctorId),


date:
new Date()
.toISOString()
.split("T")[0],


time:
"09:00",


status:
"Confirmed"


};




// 4. Պահում ենք Appointment-ը

await addAppointment(
appointment
);




// Թարմացնում ենք ցուցակները

await loadPatients();

await loadMedicalData();


});



        loadPatients();



    }

);







// DELETE USING EVENT DELEGATION


document
.getElementById(
    "patientTable"
)
.addEventListener(
    "click",
    async(event)=>{


        if(
            event.target.classList.contains(
                "delete"
            )
        ){


            const id =
            event.target.dataset.id;



            await deletePatient(
                id
            );



            loadPatients();


        }


    }

);
document
.getElementById(
"createAppointment"
)
.addEventListener(
"click",
async()=>{


const appointment={


patientId:
document.getElementById(
"patientSelect"
).value,


doctorId:
document.getElementById(
"doctorSelect"
).value,


date:
document.getElementById(
"appointmentDate"
).value,


status:
"Confirmed"


};



await addAppointment(
appointment
);



alert(
"Appointment created"
);


});