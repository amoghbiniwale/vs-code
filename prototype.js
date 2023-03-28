//prototype in js
function CreatePeople(firstName, LastName, pl) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.pl = pl;
}

CreatePeople.prototype.info = function () {
    console.log(
        `hello my name is ${this.firstName} ${LastName} & i am learning ${this.pl}`);
};
const sam = new CreatePeople("sam", "shete", "python");
const gaurav = new CreatePeople("gaurav", "chaudhary", "python");
console.log(sam.constructor.prototype);