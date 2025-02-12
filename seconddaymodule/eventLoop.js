function asyncFunc(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Data 1");
            resolve("success");
        }, 3000);
    });
}

console.log("Begin");

asyncFunc().then((res) => {
    console.log(res);
});

console.log("End");


