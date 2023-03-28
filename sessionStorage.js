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
sessionStorage.setItem("students",JSON.stringify(studentDetails))
const studentDetail = JSON.parse(sessionStorage.getItem(studentDetails));

