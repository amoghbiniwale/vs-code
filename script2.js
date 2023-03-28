// console.log("hello");
// const div=document.querySelector("div");
// console.log(div);

// const h1 =document.querySelector("h1");
// console.log(h1);

// const h2 =document.querySelector("h2");
// console.log(h2);

// const p1 = document.querySelector("p");
// console.log(p1);

// const ref = document.querySelector("#para2");
// console.log(ref);

// let players=['sachin','saurav','Dhoni','pant','kohli','rohit'];
// html=``;
// players.forEach(players=>{
//     html+=`<li>${players}</li>`
// });
// ref.innerText="New para 2";
// ref.innerHTML+=html;

// //to find all the tags reference with class="test"
// const tags=document.querySelectorAll(".test");
// tags.forEach((x)=>{
//     console.log(x.innerText);
// })

// const div1 = document.querySelectorAll("div.error");
// div1.forEach((x)=>{
//     console.log(x.innerText);
// }) 

// const para2 =document.getElementById("para2");
// console.log(para2);

// //accessing element of HTMLCollection
// const testTags=document.getElementsByClassName("test");
// console.log(testTags);

// Array.from(testTags).forEach(tag=>{
//     tag.innerText+=" demo";
// })

// const tagName = document.getElementsByTagName("p");
// console.log(tagName);

// //get attribute set attribute

// const link= document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.facebook.com");
// link.innerText="facebook";

// //getting referance 
// const Para2 = document.querySelector("body #para2")
//  Para2.setAttribute("class","success")

// const head1 = document.querySelector("h1");
// head1.classList.add("test2");
// console.log(head1);

// //Adding 
// head1.classList.add("test2");
// head1.classList.remove("test2");

//to add success and error class in p tag which contains error and success

// const p1 = document.querySelectorAll("p");
// p1.forEach(p=>{
//    if( p.innerText.includes("success")){
//     p.classList.add("success");
//    }
//    if( p.innerText.includes("error")){
//     p.classList.add("error");
//    }
// })
// // to add and remove class toggle is use
// const div = document.querySelector("div.error");
// div.classList.toggle("error");

// const divison= document.querySelector("div");
// console.log(divison.children);

//access child p tags from parent div

const div=document.querySelector("div");
 Array.from(div.children).forEach(tag=>{
    if(tag.tagName=="P"){
        tag.innerText+=" para";
    }
 })


 div.childNodes.forEach(child=>{
    if(child.nodeName=="P"){
        child.innerText+=" hello";
    }
 })

 //how to access child to parent
 const h2 =document.querySelector("h2");
 console.log(h2.parentElement);

 console.log(h2.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
 console.log(h2.previousElementSibling);







