class User{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
}
function printName(user){
    console.log("User name: "+user.name);
}
function printAge(user){
    console.log("user age"+user.age);
}
export default User;
export{printName,printName};