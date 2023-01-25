//Hoisting in JS 


console.log(a);
mine();

function mine() {    // we cannot use function expression here
    console.log("Good Morning");
}

var a = 9; // if we use let or const inplace of var then it will give reference error
console.log(a);
