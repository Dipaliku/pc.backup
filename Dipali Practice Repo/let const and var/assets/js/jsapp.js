
let cl = console.log;

// let const and var

// (before es6 we have functional and global scopes)



// 1 block scope
// var cannot create BLOCK scope
//let can create block scope
// const can create block
for(var i=1;i<=5;i++){
    cl(`value of inside for loop is ${i}`)
}
cl(`value of outside for loop is ${i}`)

for(let j=1;j<=5;j++){
    cl(`value of inside for loop is ${j}`)
}
// cl(`value of outside for loop is ${j}`)

if(true){
    var a = 50;
    const b = 100;
}
cl(a)
// cl(b) // referenceError

function greet(){
    var shouldGreet= true;
    if(shouldGreet===true){
        let person = "sumit";
        cl(`hello ${person}`)
    }
    // cl(`hello ${person}`) // referenceError
}
greet()

// 2 Re-assignment and re-declaration
// var Re-assignment and re-declaration both are possible

var abc = 120;
abc = 225;
cl(abc)

var abc = 301;
cl(abc);

let pqr = 1
cl(`value of pqr ${pqr}`)
pqr= 2
cl(pqr)

const a1 = 2;
cl(a1)
// a1=3
// cl(a1)


// 3 declaration must be initialized

var test1l
let test2;
// const test3;

// 4 hoisting
// var >> hoisting is possible , and value is "undefined"
// let >> hoidting is possible but cannot access before initialization
//const >> hoidting is possible but cannot access before initialization

cl(w)
var w =301;
// cl(w1)
// let w1 =301;
// cl(w2)
// const w2 =301;



