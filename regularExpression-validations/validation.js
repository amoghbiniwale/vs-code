// var reg = /[a-z]/ig;

//var reg2 = new RegExp(/[a-z]/,'i'); another way 
const inputs = document.querySelectorAll('input');

const patterns ={
    telephone : /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slog: /^[a-z\d-]{8,20}$/,
    email: /^\(?([7-9]{3})\)?([0-9]{3})?([0-9]{4})$/

}; 


//validation
function validate(field,regex){
  // console.log(regex.test(field,regex));
  if(regex.test(field.value)){
    field.className = 'valid';
  }else{
    field.className ='invalid';
  }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
       // console.log(e.target.attributes.name.value);
       validate(e.target,patterns[e.target.attributes.name.value])
    });
});






