let colors = ["red","while","green","black","blue"];

// Adding by index
colors[2]="yellow";
console.log(colors);

// Adding using push method (adding last)
colors.push("orange");
console.log(colors);

// Adding using unshift method (adding begining index)
colors.unshift("gold");
console.log(colors);

// pop (removing last element)
let res=colors.pop();
console.log(res);

// shift (removing element from begining index)
let result=colors.shift();
console.log(result);

// Finding index
let ind=colors.indexOf("red");
console.log(ind);


