console.log("Starting the script");
var a = 10;
var b = 20;
console.log(a + b);
let x= "Hello";
let y= 22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
let o={
    "name": "Yashoda",
    "job code": 12345,
    "city": "Dang"


}
console.log(o);
o.salary= 50000;
console.log(o);



let age= 14;
let grace= 4;
age-=grace;
console.log(age);
console.log(age+grace);
console.log(age*grace);
console.log(age/grace);
console.log(age%grace);
console.log(age**grace);
console.log(age++);
console.log(age--);

if((age+grace)>=18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
if (age>=18)
{
    console.log("You are eligible to vote");
}   
else
{
    console.log("You are not eligible to vote");
}
if ((age*grace)>=18)
{
    console.log("You are eligible to vote");
}
else
{
    console.log("You are not eligible to vote");
}
if ((age/grace)>=18)
{
    console.log("You are eligible to vote");
}   
else
{
    console.log("You are not eligible to vote");
}
if ((age%grace)>=18)
{
    console.log("You are eligible to vote");
}
else
{
    console.log("You are not eligible to vote");
}

//If ..else if ladder
if (age >= 18) {
    console.log("You are eligible to vote");
} else if (age >= 16) {
    console.log("You can apply for a learner's permit");
} else {
    console.log("You are not eligible for any of the above");
}

// loop in javascript   
console.log("Starting the loop");
// for loop
console.log("For loop");
for (let i = 0; i < 5; i++) {
    console.log("The value of i is: " + i);

}


let obj = {
    name: "Yashoda",
    age: 14,
    city: "Dang"
};
for (const key in obj) {
    
        console.log(key);
    }

    for(const char of "Yashoda") {
        console.log(char);
    }

    for (const key in obj) {
        if (obj.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
        
        }
    
}


// While loop start

console.log("While loop");
let i = 0;
while (i < 5) {
    console.log("The value of i is: " + i);
    i++;
}

let k = 0;
while (k<=5) {
    console.log("The value of k is: " + k);
    k++;
}

// do while loop start
console.log("Do while loop");
let j = 0;
do {
    console.log("The value of j is: " + j);
    j++;
} while (j < 5);

console.log(" another example of Do while loop");
let l = 0;
do{
    console.log("The value of l is: " + l);
    l++;
    
} while (l <= 5);

