// Create String
let str="Prathamesh";

// Access by index
console.log(str[3]);

// length
console.log(str.length);

// Template Literal
let fullName = "Prathamesh";
let message = `Hello my name is ${fullName} \nNice to meet you :)`;
console.log(message);

// To Upper Case
let str1="Prathamesh";
let newString = str1.toUpperCase();
console.log(newString);

// To Lower Case
let str2="Prathamesh";
let newString2 = str1.toLowerCase();
console.log(newString2);

// Trim
let str3="   Prathamesh Prakash Gavade   ";
console.log(str3.trim());

// Slice
let str4="Prathamesh";
console.log(str4.slice(0,7));

// Concat
let str5="Prathamesh";
let str6="Gavade";
let result=str5.concat(str6);
console.log(result);

// Replace
let str7="poolll";
console.log(str7.replace("p","l"));
console.log(str7.replaceAll("p","l"));

// CharAt
let str8="Prathamesh";
console.log(str8.charAt(0));