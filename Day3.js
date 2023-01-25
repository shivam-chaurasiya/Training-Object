//Hoisting in JS 


console.log(a);
mine();

function mine() {    // we cannot use function expression here
    console.log("Good Morning");
}

var a = 9; // if we use let or const inplace of var then it will give reference error
console.log(a);


// Asyn/await in javascript
 
//async function getdatafromgoogle(){
//    console.log("execution process done ");
//    const repo = await fetch("https://www.google.co.in/");
//    const data = await repo.json;
//    console.log(repo);
//} getdatafromgoogle();

// Callback in JS

function display(num) {
    console.log(num);
}

function calculate(number1 , number2, myCallback){
  let sum = number1 + number2;
  display(sum);
} 

calculate(5,5, display); 

function await(none){
    console.log(none);
}

function multiply(number11 , number12){
    let mul = number11 * number12;
    await(mul);
}

multiply(5,4);

// Asynchronous in JS

function hellotoall() {
    console.log("Helloooo world");
}

setTimeout(hellotoall , 3000);
// hellotoall();

// Promise in JS 

function displaying(any){
    console.log(any);
}

let mypromise = new Promise(function(accepted, rejected){
    let me = 0 ;
    if(me == 0){
        accepted("OK");
    }
    else{
        rejected("ERROR");
    }
});

mypromise.then(
    function(value){displaying(value);},
    function(error){displaying(error);}
);

const mypro = new Promise(function(accepted, rejected){
    setTimeout(function(){accepted("HAPPY REPUBLIC DAY");}, 3000)
});

mypro.then(
    function(value){
        console.log(value);
    }
);

// Async and await example in JS 


function mydisplay(something){
    console.log(something);
}

async function myfunction(){
    return "Good morning";
}

myfunction().then(
    function(value){mydisplay(value);},
    function(error){mydisplay(error);}
);

async function myfunction(){
    const mypro2 = new Promise(function(accepted, rejected){
        accepted("HAPPY NOW");
    });
    console.log(await mypro2);
}
myfunction();

// Closure in JS

let counter = 0 ;

function call() {
    counter += 1;
}
call();
call();
call();

console.log(counter);

function mul(){
    let value = 1;
    function multiply(){
        value *= 15;
    }
    multiply();
    return value;
}

console.log(mul());