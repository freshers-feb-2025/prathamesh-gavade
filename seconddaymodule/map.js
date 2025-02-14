let map=new Map();

map.set("Prathamesh","Java");
map.set("Gaurang","Python");
map.set("Soham","QA");
map.set("Umang","React");
map.set("Prathamesh","JavaScript");

console.log(map.keys());
console.log(map.values());

// Using has we can check that key is available or not
console.log(map.has("Prathamesh"));

// Using get we can check that value is available or not
console.log(map.get("Prathamesh"));

for(let [k,v] of map){
    console.log(k," : ",v);
}

map.forEach((v,k) =>{
    console.log(k,v);
})
