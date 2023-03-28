localStorage.setItem("1","amogh");
localStorage.setItem("2","sankalp");
localStorage.setItem("3","prathmesh");

console.log(localStorage.getItem("2"));
console.log(localStorage.length);
console.log(localStorage.getItem("1"));
localStorage.clear();

const student=["amogh","sankalp","prathmesh","tejas"]
localStorage.setItem("student",JSON.stringify(student));
const name = JSON.parse(localStorage.getItem(student));

console.log(localStorage.getItem("1"));


const studentDetails = [
    {
        id : 1,
        name : "amogh",
        age : 22
    },
    {
        id : 1,
        name : "sankalp",
        age : 22
    },
    {
        id : 1,
        name : "tejas",
        age : 22
    }
];
localStorage.setItem("students",JSON.stringify(studentDetails));
const studentDetail = JSON.parse(localStorage.getItem(studentDetails));
