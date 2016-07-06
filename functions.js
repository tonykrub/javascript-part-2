//Problem1: Read about the Array.prototype.sort method. Create 
//a function that can be used with sort. This function should 
//take two strings, and return a value that sort can use to 
//determine which is the longest string. Finally, create an 
//array of strings and try to get it sorted using your new 
//function.
function sortedString(string1, string2) {
    if (string1.length > string2.length){
        return -1; // -1 means putting that one to the left. Here it will put string1 to the left if string1.length > string2.length. 
    }
    
    else if (string1.length < string2.length){
        return 1; // 1 means putting that one to the right. Here it will put string1 to the right if string1.length < string2.length. 
    } 
    
    else {
        return 0; // 0 means it stays at the same place
    }
}

var arr = ['hello', 'hi', 'armageddon'];  // you need an array because 'sort' is used with array
//console.log(arr.sort(sortedString));



//Problem 2: Create an array of objects (don’t need to use new 
//here, just regular object literals). These objects will 
//contain a name and email property. Then, run some code that 
//will sort your array by the longest name. Then, run some code
//that will sort your array by e-mail address in alphabetical 
//order.
var newArr = [
    {name: "Tony", email: "tonykrub@hotmail.com"},
    {name: "Simon", email: "simonsimon@gmail.com"},
    {name: "Codrin", email: "codrincodrin@gmail.com"}
    
];

newArr.sort(function(person1, person2){
    if (person1.name.length > person2.name.length){
        return 1;
    }
    else if (person1.name.length > person2.name.length){
        return -1;
    } 
    else {
        return 0;
    }
});
//console.log(newArr);

var newArr = [
    {name: "Tony", email: "tonykrub@hotmail.com"},
    {name: "Simon", email: "simonsimon@gmail.com"},
    {name: "Codrin", email: "codrincodrin@gmail.com"}
    
];

newArr.sort(function(person1, person2){
    if (person1.email > person2.email){  // here it will compare the alphabetical order of the email by just putting the .email at the end of person1 or person2. if you want to compare the address of each person alphabetically, you can just put .address after person1 or person2 but you need to declare the address as property in the array.
        return 1;
    }
    else if (person1.name > person2.name){
        return -1;
    } 
    else {
        return 0;
    }
});
//console.log(newArr);



//Problem 3: Create a function that can be used with Array.prototype.map. This function should take
//a number and return its square. Then, use this function with map on an array of numbers to check
//the result.
var numbers = [1,4,9];
var square = numbers.map(function(num){
    return num * num;
});
//console.log(square);



//Problem 4: Create a function that can be used with Array.prototype.map. This function should be 
//able to take an object and square its “num” property. Then, use this function with map on an 
//array of objects each containing a “num” property.
var array = 
[
    {name: "Tony", score: 99}, 
    {name: "Codrin", score: 100},
    {name: "Simon", score: 190}
    
];
var squareNum = array.map(function(array){
    return array.score * array.score;
});
//console.log(squareNum);



//Problem 5: In a previous workshop, you had to create a function that took two numbers and an 
//operation (add, sub, mult, …) and returned the result of the operation on the two numbers. 
//Here we are going to do the same but at a higher order. Create a function called 
//operationMaker that takes only a string called operation as argument. This string could be 
//“add”, “subtract”, “mult” or “div”. Your function will return a function that will take two 
//numbers and return the result of running operation on these numbers. The end result should 
//let me do something like this:
//var adder = operationMaker(“add”); var sum = adder(5, 10); //15
//var mult = operationMaker(“mult”); var product = mult(5, 10); // 50
function adder (num1, num2){
    return num1 + num2;
}

function subtracter (num1, num2){
    return num1 - num2;
}

function multiplier (num1, num2){
    return num1 * num2;
}

function divider (num1, num2){
    return num1 / num2;
}

function operationMaker (operation){
    if (operation === "add"){
        return adder;
    }
    
    if (operation === "subtract"){
        return subtracter;
    }
    
    if (operation === "mult"){
        return multiplier;
    }
    
    if (operation === "div"){
        return divider;
    }
    
}
console.log(operationMaker("subtract")(15,5)); 




