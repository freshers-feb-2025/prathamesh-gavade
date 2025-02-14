function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Prathamesh")); 


const add = function(a, b) {
    return a + b;
};
console.log(add(5, 10)); 


const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); 


function greet(name = "Guest") {
    return "Hello, " + name;
}
console.log(greet()); 


function sum(...args){

    let add=0;
    for(let n of args){
       add=add+n;
    }
    return add;
}
let result =sum(1,2,3,4,5);
console.log(result);


function process(num, callback) {
    return callback(num);
}
function square(x) {
    return x * x;
}
console.log(process(5, square)); 


(function() {
    console.log("immediately");
})();


function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return outerValue + innerValue;
    };
}
const addTen = outerFunction(10);
console.log(addTen(5)); 


function operate(a, b, operation) {
    return operation(a, b);
}
console.log(operate(4, 2, (x, y) => x * y)); 


function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const double = multiply(2);
console.log(double(5)); 


function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); 





