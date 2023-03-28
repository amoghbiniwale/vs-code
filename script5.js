// console.log(1);
// console.log(2)
// console.log(3);

// setTimeout(()=>{
//     console.log("callback function called..");
// },2000);

// console.log(4);
// console.log(5);
// console.log(6);

//XHR XMLHttpRequest
//makes request to get data from api
/*readyState
0: usent
1: Open
2: Recived Header
3: Loading
4 :Complete
*/
const getTodos = function (url) {
    const request = new XMLHttpRequest();
    //if wrong url is gievn then folloing consitions will execute
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
            console.log("Hello");
        }
        else if (request.readyState == 4) {
            console.log("could not fetch data");
        }

    })
    request.open("GET", url);
    request.send();
}

getTodos("https://jsonplaceholder.typicode.com/todos");
