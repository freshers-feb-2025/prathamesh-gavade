function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCalculator){
    sumCalculator(a,b);
}

calculator(10,5,sum);