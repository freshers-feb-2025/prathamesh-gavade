// Promise Chaining example 1
function asyncFunc1(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Data 1");
            resolve("success");
        }, 3000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) =>{
          setTimeout(() =>{
            console.log("Data 2");
            resolve("success");
          },3000);
    });
}

console.log("fetching data 1");
let p1= asyncFunc1();
p1.then((res) =>{
    console.log(res);
    console.log("fetching data 1");
    let p2=asyncFunc2();
    p2.then((res) =>{
      console.log(res);
    })
})

// Promise Chaining example 2

function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Data",dataId);
            resolve("success");
        },2000);
    });
}

getData(1)
    .then((res) =>{
        return getData(2);
    })
    .then((res) =>{
        return getData(3);
    })
    .then((res) =>{
        console.log(res);
    })