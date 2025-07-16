// Arguement: whenever you sent or pass some data to function is called 'Arguement'.

// Parameter: whenever a function accepts some arguments as a variable is called parameter.

function echo(name){  //'name' is parameter, received by function call
    console.log(`${name} is dancing`);
}
echo("Ghoda");  // 'Ghoda' is argument, that is passed to function.
echo("Hathi");
echo("Sher");

function add(v1, v2) {
    console.log(v1 + v2);
}

add(5, 7);  // 12
add("Saur", "abh"); // Saurabh