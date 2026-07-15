
export function renderPatients(patients){


    const table =
    document.getElementById(
        "patientTable"
    );



    table.innerHTML = "";



    patients.forEach(
        (patient)=>{


        table.innerHTML += `


        <tr>


        <td>
        ${patient.name}
        </td>



        <td>
        ${patient.age}
        </td>



        <td>
        ${patient.phone}
        </td>



        <td>

        <button 
        class="delete"
        data-id="${patient.id}">

        Delete

        </button>


        </td>


        </tr>


        `;


        }

    );



    document.getElementById(
        "patientCount"
    )
    .innerHTML =
    patients.length;



}
export function renderDoctors(doctors){


const table =
document.getElementById(
"doctorTable"
);



table.innerHTML="";



doctors.forEach(
doctor=>{


table.innerHTML += `

<tr>

<td>
${doctor.name}
</td>


<td>
${doctor.specialization}
</td>


<td>
${doctor.experience}
years
</td>


</tr>

`;


});


}
export function renderAppointments(
    appointments,
    patients,
    doctors
){


const table =
document.getElementById(
    "appointmentTable"
);



table.innerHTML = "";



appointments.forEach(
appointment => {


const patient =
patients.find(
p => String(p.id) === String(appointment.patientId)
);



const doctor =
doctors.find(
d => String(d.id) === String(appointment.doctorId)
);



table.innerHTML += `

<tr>


<td>
${patient ? patient.name : "Unknown"}
</td>



<td>
${doctor ? doctor.name : "Unknown"}
</td>



<td>
${doctor ? doctor.specialization : ""}
</td>



<td>
${appointment.date}
</td>



<td>
${appointment.time}
</td>



<td>
${appointment.status}
</td>


</tr>

`;


});


}
export function renderPatientOptions(patients){


const select =
document.getElementById(
"patientSelect"
);



select.innerHTML="";



patients.forEach(patient=>{


select.innerHTML += `

<option value="${patient.id}">

${patient.name}

</option>

`;


});


}
export function renderDoctorOptions(doctors){


const select =
document.getElementById(
"doctorSelect"
);



select.innerHTML="";



doctors.forEach(doctor=>{


select.innerHTML += `

<option value="${doctor.id}">

${doctor.name}
-
${doctor.specialization}

</option>

`;


});


}
export function renderDoctorSelect(doctors){


const select =
document.getElementById(
"patientDoctor"
);



select.innerHTML="";


doctors.forEach(
doctor=>{


select.innerHTML += `

<option value="${doctor.id}">

${doctor.name}

</option>

`;


});


}