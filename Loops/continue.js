// just opposite of 'break', it continues the loop when the condition is satisfies.
// e.g.

for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        continue;  
    }
    console.log(i);  // '5' isn't printed. why? after hitting continue statement the loop jumps to next iteration and ignored the rest of code after the 'continue' statement.
}