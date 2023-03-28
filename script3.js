const addbutton=document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

addbutton.addEventListener("click",e=>{
    if(input.value != ""){
    // const li = document.createElement("li");
    // li.innerText=input.value;
    // ul.appendChild(li);
    // input.value = "";
    document.getElementById("line2").value = document.getElementById("line").value;
    

    // const input2 = document.getElementById("#input2");
}
else {
    alert("Enter player name");
}
})





// addbutton.addEventListener("click",e=>{
//     const li=document.createElement("li");
//     li.innerText="New player";
//     ul.appendChild(li);
// })

// html=``;

// addbutton.addEventListener("click",e=>{
//     html+=`<li>New Player</li>`;
//     ul.innerHTML+=html;
//     html=``;
// });

// const list = document.querySelectorAll("li");
// //console.log(list);
// list.forEach(l=>{
//     l.addEventListener('click',e=>{
//         //console.log(l.innerText);
//         e.target.remove();
//     })
// })
// ul.addEventListener('click',e=>{
//     if(e.target.localName=="li")
//     e.target.remove();
// })

// addbutton.addEventListener('click',e=>{
//     const line = document.createElement("li");
//     //console.log(line);
//     line.innerText=input.value
//     ul.appendChild(line)
//     input.value=""
// })


