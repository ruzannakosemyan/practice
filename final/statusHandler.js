export function checkStatus(response){



switch(response.status){


case 200:

console.log(
"Request successful"
);

break;



case 201:

console.log(
"Created successfully"
);

break;



case 400:

console.log(
"Bad Request"
);

break;



case 401:

console.log(
"Unauthorized"
);

break;



case 404:

console.log(
"Not Found"
);

break;



case 500:

console.log(
"Server Error"
);

break;



default:

console.log(
"Unknown Status"
);


}



}