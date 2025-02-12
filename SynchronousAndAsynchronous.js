// Synchronous
console.log("Start");
function synchronousFunction() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
synchronousFunction();
console.log("Finish");

// Asynchronous
console.log("Start");
setTimeout(() => {
    console.log("Waiting");
}, 3000);
console.log("Finish");
