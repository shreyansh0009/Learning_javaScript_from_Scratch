// 'break' used to close or exit the loop to utilize space and time, or even used when condition is satisfies and break the loop;

//e.g.

let a = 5;

for(let i = 1; i <= 20; i++) {
    let temp = a * i;
    if(temp % 3 === 0) {
        console.log(temp);  // temp = 15;
        console.log(i);     // i = 3
        break;
    }
}
// loop only runs 3 times, and when the conditions is satisfies the 'break' statement break the loop and we exited the loop.
// 'break' is crucial when solving DSA questions and in compititive programming to save time and stack space.