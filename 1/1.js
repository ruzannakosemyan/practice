console.log("Program Started");

setTimeout(() =>{

    console.log("setTimeout Executed");

},2000);


Promise.resolve()
.then(()=>{

    console.log("Promise Executed");

});


console.log("Program Finished");



async function getUsers(){

    const result = document.getElementById("result");

    result.innerHTML = "<h3>Loading...</h3>";

    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();


        displayUsers(users);

    }

    catch(error){

        result.innerHTML =
        "<h3>Something went wrong!</h3>";

        console.log(error);

    }

}



function displayUsers(users){

    const result = document.getElementById("result");

    result.innerHTML = "";


    users.forEach((user)=>{


        result.innerHTML +=

        `

        <div class="card">

            <h3>${user.name}</h3>

            <p>Email : ${user.email}</p>

            <p>Phone : ${user.phone}</p>

        </div>

        `;


    });


}