const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);          // global context har jagah ka alag alag hota

// object literal means literally object

// const date = new Date()        // new keyword constructor function hai... es se ek object literal se multiple instances bna sakte


function User(username, loginCount, isLoggedIn){
    this.username = username;                      // this wali username variable hai jo function k context m hai aur right wala username jo pass hua hai wo hain
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // function k andar k this ka global context empty object hai to esme kuch v object ki trah rakh sakte dot lga k

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this                    // this return karne se object pass kar diya gya hai... karna jaruri nhi hai ye chij
}

const userOne = new User("hitesh", 12, true)            // agar new keyword use nhi karenge to value userTwo overwrite kar dega.. new keyword se new instance mil jata
// new keyword se empty object create hota hai
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);        // constructor property reference hota hai khud k bare m
console.log(userOne)
//console.log(userTwo);


// jaise new keyword use karte empty object create ho jata jisko instance bola jata
// now new keyword k karan constructor function call hota... ye sare arguments ko pack kar k de deta
// now this keyword k andar sari chije inject ho jati fir hame milti hain 


// read about instanceof