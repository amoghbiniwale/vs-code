// Regular Function.
function Regular() {
    console.log("this is regular function");
};
// Execution of Regular Function.
Regular();

// IIFE creation and execution.
(function() {
    console.log("execution of IIFE function");
})();


//IIFEs can also have parameters. For example,
(function(dt){
    console.log(dt.toLocaleTimeString());
})
(new Date());