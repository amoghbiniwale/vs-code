//alert("hello world");
 console.log("hello world");

let value = 20.5;
console.log(value);
console.log(typeof value);

value = "amogh";
console.log(value);

// // var age=23;
// // console.log(age);

// const age = 24;
// console.log(age);

//data types
//1. number
//2.string
//3.boolean
//4.null
//5.undefined
//6.object

//string
let name ="sam";
let lname="sheety";
let fullName=name+" "+lname;
console.log(fullName);

console.log(name[0]);

console.log(name.toUpperCase());

let email="sam.sheety@gmail.com";
console.log(email.substring(email.indexOf("@")+1));

console.log(email.substring(3,5));

console.log(email.slice(-8));

let result = email.replace("sheety","shah")
console.log(email);
console.log(result);

// //template string

const title="programming basics";
const author = "Amogh Biniwale";
const likes =300;

const strResult=title+" by "+author+" has "+likes+" likes ";
console.log(strResult);

//using template string
const strResult1=`${title}by ${author} has ${likes} likes`;
console.log(strResult1);

// //template string to create html content

let html=`
        <h1>Title page</h1>
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${likes}</p>
`;
console.log(html);

// //undefined and null

let highscore;
console.log(highscore + 100);

let value1 = null;

console.log(value1+100);

let players=['sachin','saurav','Dhoni','pant'];

console.log(players.length);
console.log(players.indexOf("pant"));

// players.push("Shreyas");
// players.pop("Dhoni");
// console.log(players);
// console.log(players.pop());
// console.log(players.includes("Dravid"));

//loose vs strict comp
let age=30;
let score = 30;
console.log(typeof age);
console.log(typeof score);
console.log(age==30);
console.log(age == score);//loose comparsion in witch type is ignore
console.log(age === score);

//type casting

let score1 = '100';
let test =Number(score1);
console.log(score1)

console.log(test);

let result1=Boolean(-50);

console.log(result);

//function
function greet(user){
    console.log("hello from "+user);
}
greet("amogh");

function addNumbers(a,b){
   return a+b;
    // console.log("addition is: "+(a+b));
}
console.log("addition is: "+addNumbers(20,30));

// //function expression

const greetings=function(){
    console.log("good morning all...")
}

greetings();

// //function hoisting

greet("amogh");

function greet(user){
    console.log("hello from "+user);
}

// //normal functon can call before 
// //function are hoisted at the top of the files where the function expression are not 
// //hance function can be called before they are declerd

// //Default parameters

const speak=function(name="Jethalal",time="morning"){
    console.log(name +" says good"+time);
}

speak("amogh","night");

// //area of circle

const circleArea=function(radius){
    return 3.14*radius*radius;
};
console.log(circleArea(10));

// //using arrow function
const circleArea1=radius=>{
    return 3.14*radius*radius;
};
console.log(circleArea1(20));


const circleArea2=radius=> 3.14*radius*radius;

console.log(circleArea2(30));

const speak1=(name="Jethalal",time="morning")=>console.log(name +" says good"+time);
speak1();

const bill =(product,tax)=>{
    let total =0;
    for(let i =0;i<product.length;i++){
        total+=product[i]+product[i]*tax;
    }
    return total;
};

console.log(bill([10,20,30,40],0.1));


// //call back method
// //important topic

const myFunction = (callBackFunc)=>{
    callBackFunc(50);
};
myFunction(function (value){
    console.log("callBack function called")
    console.log(value);
})

// //forEach

let players0=['sachin','saurav','Dhoni','pant','kohli','rohit'];
players.forEach((players0,index)=>{
    console.log("name "+players,"index is: "+index)
});
let players1=['abd','ajinkya','zampa','lara'];
players1.forEach((p,i)=>{
    console.log(p+" "+i);
})

const ul =document.querySelector("ul");
console.log(ul);

html=``;
players.forEach(players=>{
    html+=`<li>${players}</li>`
});

ul.innerHTML=html;

// //object literals

let user ={
    name : "Amogh",
    age : 22,
    email : "amoghb@gmail.com",
    blogs : ['JS in 2 hr','java in 30 hr']
};
//notation to access object members
console.log(user.blogs[1]);
//squre bracket notation to access object member
console.log(user['blogs'][0]);

// //adding method
let user1 ={ 
    name : "Rasika",
    age : 22,
    email : "rasika@gmail.com",
    blogs:[
        {
            title : "java is 2 hr",
            likes : 20000
            },
            {
                title : "inesing blog is 2 hr",
                likes : 20000
             },
             {
                    title : "js block is 2 hr",
                    likes : 20000
            }
    ],
    login : function(){
        console.log(this.name+' logged in');
    },
    logout: function(){
        console.log(this.name+' logged out');
    },
    logBlogs:function(){
        this.blogs.forEach(blog=>console.log(blog));
    }

 };
user1.login();
user1.logout();
user1.logBlogs();

// let blogs=[
//     {
//     title : "java is 2 hr",
//     likes : 20000
//     },
//     {
//         title : "java is 2 hr",
//         likes : 20000
//      },
//      {
//             title : "java is 2 hr",
//             likes : 20000
//     }
// ]



