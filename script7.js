const getTodos = function (callback,url) {
    const request = new XMLHttpRequest();
    //if wrong url is gievn then folloing consitions will execute
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(undefined,JSON.parse(request.responseText)) 
            //console.log(request.responseText);
            console.log("Hello");
        }
        else if (request.readyState == 4) {
            //console.log("could not fetch data");
            callback("could not fetch data..!!");
        }

    })
    request.open("GET", url);
    request.send();
}
//const url = "https://jsonplaceholder.typicode.com/todos";
const uri = "amogh.json"
getTodos((err,data)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log(err);
    }
},uri)