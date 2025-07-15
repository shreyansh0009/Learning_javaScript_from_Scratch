// changing type of data,

console.log("1" + 1);  // 11; the 2nd '1' converted or treated as string.

if(12 == '12') {
    console.log("true");
} else {
    console.log(false);
}   // true; the '12' converted to no. and then checked.

if('12' === 12) {
    console.log("true");
} else {
    console.log(false);
}  // false; '12' treated as string. that's why false.
