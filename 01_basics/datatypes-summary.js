// kis tarah se data ko memory rakha jata hai aur usko access kiya jta espe 2 category hai
// primitive and nonprimitive

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);          //false - dono m value same hai fir v symbol k karan unique hai

// const bigNumber = 3456543576654356754n      // last m n lga denge to bad number handle kar lega



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Object (natuve and does not implement call) => object
// object (native or host and does implement call) => function
// object (host and does implement call) => implemantation defined may not be undefined boolean number or string



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack memory - primitive datatype k case m use hoti.. esme variable declare hota to copy milta hai jo v change hoga wo copy m hoga

let youtubename = "hitesh";

let anothername = youtubename;

anothername = "chaicode";

console.log(youtubename)
console.log(anothername)


// heap memory - non primitive k case m use hoti aur esme variable ka reference milta to jo v change hoga wo original value m change hoga




