let map = new Map();
map.set("10" , 'string');
map.set(10, 'num');
map.set("false", 'boolean');

console.log(map.get("10"));
console.log(map.has(10));
console.log(map.size);


const obj = {
    js : "javascript"
};

const chitru = new Map();
chitru.set("js",290);
console.log(chitru.get("js"));

let price =  new Map([
    ["apple", 250],
    ["banana" , 100],
    ["Orange" , 80]
]);

for(let i of price.keys()){
    console.log(i);
}

for(let j of price.values()){
    console.log(j);
};

for(let fruit of price.keys()){
    console.log(fruit);
    console.log(price.values(fruit));
}

// pattern question in java

let str = "";
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j <= i ; j++){
       str += "*";
    }
    str += "\n";
}
console.log(str);

let str1 = "";
for(let i1 = 0 ; i1 < 5 ; i1++){
    for(let k = 0 ; k < 5 - i1 ; k++){
        str1 += "*";
    }
    str1 += "\n";
}
console.log(str1);

let str2 = "";
for(let i2 = 0 ; i2 < 5 ; i2++){
    for(let j2 = 0 ; j2 <= i2 ;j2++){
    if(i2 == 4){
        str2 += "*";
    }
    else if(j2 == 0 || j2 == i2){
        str2 += "*";
    }
    else{
        str2 += " ";
    }
    
    }
    str2 += "\n";
}
console.log(str2);
let a = 4 ;
let srt = "" ;
for(let i3 = 0 ; i3 < 5 ; i3++){
    for(let j3 = 0 ; j3 < 5 ; j3++){
         
         if((i3 === 0 || i3 === 4) || (j3 === 0 || j3 === 4)){
            srt +="4";
         }
        
         else {
            srt += " ";
         }
    }
    srt += "\n";
}
console.log(srt);


let multiply = (a, b ) => a*b;
let arrrrr = multiply(5,4);
console.log(arrrrr);

let mymap = new Map([
    ["apple" , 345],
    ["banana", 768],
    ["orange" , 456]
]);

for(let item of mymap.keys()){
    console.log(item);
}
for(let amount of mymap.values()){
    console.log(amount);
}

for(let end of mymap){
    console.log(end);
}

let ojj = {
    name : "ayush",
    rollno : 1234567789
}

let hash = new Map(Object.entries(ojj))
console.log(hash.get('name'));

function abd(a1,b){
    console.log(a1*b);
}
console.log(abd());
abd(2,2);

//let a11 = 2 * "2";
//console.log(a11);


let arr1 = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ; i < 10 ; i++){
    if(arr1[i] % 3 == 0){
        console.log(arr1[i]);
    }
}

let arr6 = [1,2,3,1,4,2,6,7];
for(let i = 0 ; i < arr6.length ; i++){
    for(let j = i+1 ; j < arr6.length ; j++){
        if(arr6[i] == arr6[j]){
            console.log(arr6[i]);
        }
    }
}

let arr2 = [1,2,3,4,5,6,7,8,9,10];
const result = arr2.filter(modulus);
console.log(result);
function modulus(mod){
    
    if(mod % 3 == 0){
        return mod;
    }
    
}

//let arr8 = [1,2,3,1,4,2,6,7];
//for(let i = 0 ; i < arr8.length ; i++){
//    for(let j = i+1 ; j < arr8.length ; j++){
//        if(arr8[i] == arr8[j]){
//            arr8.reduce(arr8[i]);
//        }
//    }
//}
//console.log(arr8);


let arr8 = [1,2,3,4,5,1,3,3];

let result2 = arr8.filter(duplicateremove);
console.log(result2);

function duplicateremove(a, b){
   return arr8.indexOf(a) == b;
}

const name365 = ["shiv" , "shivam" , "chitru" , "paras" , "susu"];
const f = name365.entries();
for(let x of f){
    console.log(x);
}