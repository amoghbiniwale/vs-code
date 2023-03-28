/*
Closure : inner function has access to the variables of the outer function
even after the outer function has finished its execution
*/
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer variable "+outer);
        console.log("Inner variable "+innerVariable);
    }
}

const myFunc=outerFunction("outside");
myFunc("inside");


