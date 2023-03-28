const numberFuncton=async(input)=>{
    const response = await fetch("http://numbersapi.com/"+input); 
    const data = await response.text();
    return data;
};
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener('click',(e)=>{
    if(input.value!=""){
        const data=null;
        numberFuncton(input.value).then(data=>{
            console.log(data);
            const div=document.querySelector("#task")
            div.innerHTML=data
            document.getElementById("").innerHTML = d;
            localStorage.setItem("numberFunction",data);
            funcToAdd(data);
        })
    }else{
        alert("please enter number");
    }
})

function funcToAdd(data){
    document.querySelector("#two").value = data;
    // for getting date and time of search
    const date = new Date();
    var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var date_time = current_date + " " + current_time;

    // To get the value
    if (localStorage.getItem(input) != null) {
        const valData = JSON.parse(localStorage.getItem(input))
        document.querySelector("#three").value = valData[0].date
        document.querySelector("#four").value = valData[0].msg

    } else {
        document.querySelector("#three").value = "None"
        document.querySelector("#four").value = "None"

    }
    // To get
    const val = [
        {
            date: date_time,
            msg: data
        }
    ]
    localStorage.setItem(input, JSON.stringify(val))
}


