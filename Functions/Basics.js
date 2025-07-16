// Functions: these are a block of code that can be run when we want to run them, and it provies re-usability and reduce the line of codes.
//why functions? => re-usability and the control on program(run a block of code when you want)

// basic function:
function func() {
    console.log("heyyy");
}

// function expression: storing function in a variable.
const fun = function() {
    console.log("hellooo");
}

// fat-arrow-function:
const fun2 = () => {
    console.log("hiii");
}

//calling functions:
fun2();
func();
fun();  //op: hiii, heyyy, hellooo: in the order of calling the function.