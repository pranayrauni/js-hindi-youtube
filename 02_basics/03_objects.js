// object declare karne k 2 tarike hai - literal ki tarah aur constructor ki tarah

// singleton - constructor se objec bnate to singleton ki tarah banta object matlab apne tarah ka ek hi object hai
// Object.create - constructor method hai esi se singleton banta

// object literals - literals ki bnate to singleton nhi banta

// Object literals
const mySym = Symbol("key1")     // symbol declare kiya gya hai.. key1 jo diya gya hai wo optional hai eks koi khas matlab nhi hai bas identify karne k liye rakh sakte debigging time

// Q)symbol ko as key use karo ya symbol ko object ki key m add akr k print karwao 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                   // agar bracket nhi lagane pe string ho jayga access kar k typeof m... value wahi print hoga jo object k value hoga upar declaration wala aise hi hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])     // object m key string ki tarah rakha jatabesliye aise m string ki tarah access karna padega
// console.log(JsUser["full name"])  // agar especially string ki tarah key ko likha gya hai tab usko dot lga k access nhi kar sakte
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                  // freeze karne pe koi change nhi hoga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.lname = "ch";            // object m bahar se v key value add kar sakte hai
console.log(JsUser.lname)


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    // this lgane se es object k andar jo v properties hogi wo mil jaygi
}

console.log(JsUser.greeting());       // agar () nhi lgaye to function ka reference aayga function execute nhi hoga
console.log(JsUser.greetingTwo());

