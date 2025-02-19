// Promise: Promise objects represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// states of promise: 
//  pending: initial state... neither fullfiled nor rejected.
// fullfilled: operation completed successfully.
// rejected: the operation failed.




// async await: jab tak kaam nhi ho rha tab tak wait karo

// new laga k new instance create kiya jata

const promiseOne = new Promise(function(resolve, reject){            // promise callback leta hai.... promise variable m hold kiya gya hai 
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                                                 // resolve se dot then ko connect karte taki promise consume ho
    }, 1000)
})

// dot then lga k promise consume karte... resolve ka connection hai dot then k sath
promiseOne.then(function(){                   // dot hen m ek function milta hai jisme return hota hai jo v upar kaam hua hai wo
    console.log("Promise consumed");
})




// yaha pe promise kisi variable m store nhi kiya gya hai esliye dot then v esi pe lag jayga
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})               // yaha se data dot then m bheja gya hai
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// jitne chahe utne dot then lga sakte
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username              // yaha se jo return hoga wo niche wale dot then m jayga
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))                  // finally hamesa execute hota hai



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// promise ko dot then wajay async await se handle kiya gya hai
async function consumePromiseFive(){
    // bina try catch lgaye karenge to eska matlab hai ki error ka koi case nhi hai error wale case m nhi chalega esliye try catch lhaye
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()                    // yaha time lag rha esliye await lgaya gya 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.



// The global fetch() method starts the process of fetching a resource from the network returning a promise which is fullfilled once the response is avialbale.