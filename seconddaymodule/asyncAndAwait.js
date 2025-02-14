// Example 1
function api(){
    return new Promise((reslove, reject) =>{
        setTimeout(() =>{
           console.log("Weather Data");
           reslove(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}
getWeatherData();


// Example 2
function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Data",dataId);
            resolve("success");
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
getAllData();