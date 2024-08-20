// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {            // num k jagah kuch v naam de sakte.. for loop k jagah for of loop use kar skate index debadhane ghatane ka jhol nhi rahega
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {                 // for of loop strings m lga sakte
    //console.log(`Each char is ${greet}`)
}

// Maps - object hai... key value pairs m rahta...keys ka insertion order yaad rakhta.. no duplicate only unique

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")        // dusra baar same chij dalne pe v nhi print hogi


// console.log(map);      // object ki tarah hi print hogi

for (const [key, value] of map) {        // square bracket lgana jaruri hai destructure karne k liye
    // console.log(key, ':-', value);
    // console.log(key)           // agar sirf key print karna ho to aise kar sakte
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// objects for of loopse iterate nhi hote.. uske liye dusre tarike hai
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }