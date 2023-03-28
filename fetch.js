//implements promise

//fetch the value as a reponse object
fetch("amogh.json").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    return fetch("amogh.json")
}).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("some error occouerd.. could not fetch data!!");
})
