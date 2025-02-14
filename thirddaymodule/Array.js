
let colors = ["Red", "Green", "Blue"];
console.log(colors.length); 

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); 

fruits.pop();
console.log(fruits); 

fruits.shift();
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2);
console.log(numbers); 

numbers.splice(1, 0, 2, 3);
console.log(numbers); 

let fruit = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruit.slice(1, 3)); 

let nums = [10, 20, 30, 10, 40];
console.log(nums.indexOf(10)); 
console.log(nums.lastIndexOf(10)); 

let languages = ["JavaScript", "Java", "C++"];
console.log(languages.includes("Python")); 
console.log(languages.includes("Java")); 

let str = ["Hello", "World","!"];
console.log(str.join(" ")); 

let number = [1,"apple", 2,"banana", 3, 4,];
console.log(number.reverse()); 

console.log(number.sort());

let num = [1, 2, 3, 4];
let square = num.map(num => num * num);
console.log(square); 

let above2 = num.filter(n => n>2);
console.log(above2);

let sum = num.reduce((n, n1) => n + n1, 0);
console.log(sum); 

let even = [2,4,6,8,10,12,14,16,18,20];
even.forEach((even, i) => {
    console.log(even ," : ", i);
});

