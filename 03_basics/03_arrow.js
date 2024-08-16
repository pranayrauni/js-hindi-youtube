const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);    // username current context ka hai to this
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()         // yaha pe sam print hoga kyuki username ka context change kar diya gya hai

// console.log(this);      // node env m hai aur global m koi context nhi hai av to empty object dega 
// par browser console m windows dega current context m... kyuki browser m global object hai windows... 
// pahle browser m js runtime tha ab bahar nikal k v alag alag naam diya gya jaise node deno bun


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);    // yaha function k andar aise this use karenge to undefined aayga
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);           // undefined
}

// interview- normal function aur arrow function m kya difference hai
//  normal function aur arrow function dono m this ka use karne pe undefined aayga

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})        // object return kar rha


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()