// Question 1 

let str = "Hi inzint I am John";


var reversewords = reversestring(str, " ");

function reversestring(str,separator){
  return str.split(separator).reverse().join(separator);
}

console.log(reversewords);

//Question 2

function fibonacci(n){
    if(n < 2 ){
        return n;
    }
    return fibonacci(n-1) +  fibonacci(n-2);
}

console.log(fibonacci(5));

//Question 3 

/* 
 Output of the given program is :  3 3 3 
 Explanation :- the setTimeout callback function is called after the loop has been executed and variable i declared in the form of var keyword
 So, the value of i can be declared as global. During the loop we can be incremented the valueof i each time .
 By the time the setTimeout callback function was invoke, i was equal to 3
*/

// Question 4

let arr = [21,21,45,89,64,56,89,56,67];

let result2 = arr.filter(duplicateremove);
console.log(result2);

function duplicateremove(value, index){
   return arr.indexOf(value) == index;
}

// Question 5

function deepcopy(source) {
    var Solution = {};
    const keys = Object.keys(source);
    keys.forEach(key => {
        if (typeof source[key] === "object") {
            Solution[key] = copyObject(source[key]);
        } else {
            Solution[key] = source[key];
        }
    });

    return Solution;
}

// Question 6

/* 
 Output of the given program is : 0 1 2
 Explanation : Because variable i is declared in the form let keyword So, the value of i is block-scoped.
 During each iteration, i will have a new value, and each value is scoped inside the loop.
*/

// Question 7
// 1. apply call function - In javascrit we can use the call function as that it can takes argument separately

const inzintDetails = {
    Solution : function(city,state){
    return this.firstwork + " " + this.secondwork + " " +city + " " +state;
   }
}
let inz = {
    firstwork : "Web Development",
    secondwork : "Mobile App Development"
}

console.log("INZINT TECHNOLOGY WORKS ON:" + inzintDetails.Solution.call(inz, "NOIDA" , "UTTAR PRADESH"));

//Apply method can take the argument in form of array.

const inzintDetails1 = {
    Solution : function(city,state){
    return this.firstwork + " " + this.secondwork + " " +city + " " +state;
   }
}
let inz1 = {
    firstwork : "Web Development",
    secondwork : "Mobile App Development"
}

console.log("INZINT TECHNOLOGY WORKS ON:" + inzintDetails1.Solution.apply(inz1, ["NOIDA" , "UTTAR PRADESH"]));
// Bind method : with the help of this method a object can borrow a method from another object.

const calculation = {
    a : "5", 
    b : "5",
    add : function(){
      return this.a + this.b ;
    }
}

const anothernumber= {
    a : "10",
    b : "11",
}

console.log(calculation.add.bind(anothernumber));

// Question 8
// program for callback

function displaythevalue(value){
    console.log(value);
}

function addition(a,b){
    let sum = a + b;
    displaythevalue(sum);
}
addition(12,12);

// Program for promises



const mypromises = new Promise(function(accepted, rejected){
    let sum = 89;
    if(sum === 89){
        accepted("MATCHED");
    }
    else{
        rejected("ERROR");
    }
});
mypromises.then(
    function(accept){console.log(accept)},
    function(reject){console.log(reject)}
)

//Question 9 - Event loop in javascript
 /*
  Event loop :- Event loop can be defined as that something that can be pull stuff out from a queue and place it onto the 
  function execution stack whenever the function stack becomes empty.

  An event loop is a programming construct that allows a program to handle multiple events or tasks simultaneously.

  Event loops are often used in situations where there is a need to constantly check for new events or data. For example, a chat program
  may use an event loop to check for new messages from other users, or a game may use an event loop to check for user input or new game
  data.
 */

// Question 10

//In Array:

const array = [1,2,3,4,5,6,7];
const array2 = [99, 90 ,90];
console.log(array.length); 
console.log(array.push(8));
console.log(array.shift());
console.log(array.concat(array2));
console.log(array.toString()); 

// In String:

let str12 = " I AM SHIVAM ";
let str13= "pursuig internship in inzint"
console.log(str12.length);
console.log(str12.trim());
console.log(str12.concat(str13));
console.log(str12.toLowerCase());
console.log(str12.slice(2,10));

// Question 11 

const decending = [34,56,43,67,28,87,75]
for(let i = 0 ; i < decending.length ; i++){
    for(let j = i+1 ; j < decending.length ; j++){
        if(decending[i] < decending[j]){
        temp = decending[i];
        decending[i] = decending[j];
        decending[j] = temp;
        }
    }
}

console.log(decending);
console.log(decending[0]);
console.log(decending.pop()); // for smallest element after decending elements:

// Question 12

/*
Constructor function :- Constructor function in javascript is defined as that it can be used to create the object. object constructor 
can be done with the help of new keyword.

Example- 

 function Person (pname, page, pgender) {
    this.name = pname,
    this.age = page,
    this.gender = pgender,
    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
*/
  
//Question 13 

let stack1 = [];  // for input
let stack2 = [];  // for output
function enqueue(stack1,item){
  return stack1.push(item);
}
function dequeue(stack1,stack2){
  if(stack2.length <= 0){
    while(stack1.length > 0){
        let outputelement = stack1.pop();
        stack2.push(outputelement);
    }
  }
  return stack2.pop();
}

