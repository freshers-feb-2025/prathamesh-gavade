function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
         setTimeout(() =>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
         },5000);
    });
}

const getPromise = () => {
    return new Promise =new Promise((resolve, reject) =>{
        console.log("This is the promise");
        resolve("success");
        // reject("error");
    })
}


let promise1= getPromise();
promise1.then((res) =>{
    console.log("got fulfilled",res);
})

promise1.catch((err) =>{
    console.log("rejected",err);
})