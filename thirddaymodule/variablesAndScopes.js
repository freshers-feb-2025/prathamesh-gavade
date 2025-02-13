
// var is function scoped so it is accessible anywhere inside the function even outside the {} block.
function testVar() {
    if (true) {
        var message = "Hello, World!";
    }

    console.log(message); 
}
// console.log(message); we can access var outside the function.
testVar();


// let is block scoped so it is only accessible within the {} block where it was declared.
function testLet() {
    if (true) {
        let greeting = "Hi, there!";
        console.log(greeting); 
    }
    // console.log(greeting);  we cannot access let outside the {}.
}
testLet();

// const is block scoped like let and cannot be reassigned.
function testConst() {
    const PI = 3.14;
    console.log(PI); 

    // PI = 3.1415;  Cannot reassign 
}
testConst();

const person = { name: "Prathamesh" };  
person.name = "Gaurang";  
console.log(person);  


console.log(a); 
var a = 10;

// console.log(b); let variable we have to initialize first
let b = 20;

// console.log(c); let variable we have to initialize first 
const c = 30;

