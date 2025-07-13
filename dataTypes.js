// i. Primitives and reference

// ii. primitives: string, number, boolean, null, undefined, symbol, bigint

// iii. reference: Array, objects, functions, etc.

let name = "shreyansh" //string, can use "", '', & ``

let a = 34;
let b = 67.55; // number, there is no float, double in js.

let isSaurabh = true; // bool

// 'undefined' doesn't mean zero(0), it means you didn't assign any value to a variable(assigned by default).

// 'Null' also doesn't mean zero(0), it means you intentionally assign null to a variable.

// bigint
let x = 9007199254740991n;
console.log(typeof x); //bigint.
// the max safe intiger value in js is: 9007199254740991;
// after that there is pricision issue for calculation that's why we use 'n' in last soo it converted to bigint.


// Reference data types:
// it's called reference because when we copy them, values doesn't copy, only reference will be passed.
// if there is change in copy value then there will be change in original value.
let z = [1, 2, 3];
let y = z;  // reference is passed. not values.

y.pop();
console.log(z);  // [1, 2]
// to avoid this we use spread operator to copy values."..."
let q = [5, 6, 7, 8]
let p = [...q];
p.pop()
console.log(q);  //[5, 6, 7, 8]
console.log(p);  //[5, 6, 7]




