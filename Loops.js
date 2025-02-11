// for loop
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);


// while loop
let n=1;
while(n<=5){
   console.log("Hello World");
   n++;
}


// Do while loop
let i=1;
do{
    console.log("Hello World from do while...");
    // Break 
    if(i==3){
        break;
    }
    i++;
}while(i<=10)

// Continue
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// for of loop
let str="Prathamesh";

for(let i of str){
    console.log(i);
}


// for in loop
let employee ={
    id:1,
    fullName:"Prathamesh",
    salary:8000
}

for(let key in employee){
    console.log(key, employee[key]);
}
