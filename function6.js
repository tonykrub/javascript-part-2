/* 1) Read about the Array.prototype.sort method. Create a 
function that can be used with sort. This function should take 
two strings, and return a value that sort can use to determine 
which is the longest string. Finally, create an array of strings 
and try to get it sorted using your new function.*/

// var arr = ['hi', 'a'];
// console.log(arr.sort(function compare(str1, str2) {
//     if (str1.length > str2.length) {
//         return 1;
//     } 
//     else if (str1.length < str2.length) {
//         return -1;
//     }
//     else {
//         return 0;
//     }
// }));

// or 
function compare(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } 
    else if (str1.length < str2.length) {
        return -1;
    }
    else {
        return 0;
    }
}
var arr = ['Tony', 'Varut'];
//(console.log(arr.sort(compare)));

// or
function longestStr(str1, str2) {  
    if (str1.length < str2.length) {
        return -1;
    }
    else if (str1.length > str2.length) {
        return 1;
    }
    else {
        return 0; // a must be equal to b
    }
}
var arr = ["Wongsuwan", "Varut", "Hi", "Tony"];
//console.log(arr.sort(longestStr));


/* 2) Create an array of objects (don’t need to use new here,
just regular object literals). These objects will contain a 
name and email property. Then, run some code that will sort 
your array by the longest name. Then, run some code that will 
sort your array by e-mail address in alphabetical order.*/
var arr1 = [
    {
        name: "Tony",
        email: "tony@gmail.com"
    },
    {
        name: "Rachel",
        email: "rita@gmail.com"
    },
    {
        name: "Angelina",
        email: "angela@yahoo.com"
    }];

function longestName(name1, name2) {
    if (name1.length < name2.length) {
        return -1;
    }
    else if (name1.length < name2.length) {
        return 1;
    }
    else {
        return 0; // a must be equal to b
    }
}

function sortedByAlphabet(a, b) {
    var email1 = a.email.toUpperCase(); // ignore upper and lowercase
    var email2 = b.email.toUpperCase();// ignore upper and lowercase
    if (email1.toUpperCase() < email2.toUpperCase()) {
        return -1;
    }
    else if (email1.toUpperCase() > email2.toUpperCase()) {
        return 1;
    }
    else {
        return 0; //  must be equal
    }
}

//console.log(arr1.sort(longestName));
//console.log(arr1.sort(sortedByAlphabet));


/* 3) Create a function that can be used with 
Array.prototype.map.This function should take a number and 
return its square. Then, use this function with map on an 
array of numbers to check the result.*/

function sqr(num) {
    return num * num;
}

var arr = [1, 2, 5, 6, 9];
//console.log(arr.map(sqr));


/* 4) Create a function that can be used with 
Array.prototype.map. This function should be able to take an 
object and square its “num” property. Then, use this function
with map on an array of objects each containming a “num” 
property.*/


function sqrNum(obj) {
    return obj.num * obj.num; // need to make a loop here too.
}

var arr = [
    {
        name: "Tony",
        num: 26
    },
    {
        name: "Rita",
        num: 20
    },
    {
        name: "Isabelle",
        num: 21
    }];
    
//console.log(arr.map(sqrNum));


/* In a previous workshop, you had to create a function that
took two numbers and an operation (add, sub, mult, …) and 
returned the result of the operation on the two numbers. 
Here we are going to do the same but at a higher order. 
Create a function called operationMaker that takes only a 
string called operation as argument. This string could be 
“add”, “subtract”, “mult” or “div”. Your function will 
return a function that will take two numbers and return the
result of running operation on these numbers. The end result
should let me do something like this:
var adder = operationMaker(“add”); var sum = adder(5, 10); //15
var mult = operationMaker(“mult”); var product = mult(5, 10); // 50*/

function adder(num1, num2) {
    return num1 + num2;
}
function subtracter(num1, num2) {
    return num1 - num2;
}
function multiplier(num1, num2) {
    return num1 * num2;
}
function divider(num1, num2) {
    return num1 / num2;
}

function operationMaker(operation) {
    if (operation === "add") {
        return adder;
    }
    if (operation === "subtract") {
        return subtracter;
    }
    if (operation === "mult") {
        return multiplier;
    }
    if (operation === "div") {
        return divider;
    }
}

console.log(operationMaker("mult")(5,9));


    
    
    





