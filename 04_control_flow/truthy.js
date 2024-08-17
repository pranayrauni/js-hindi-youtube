const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// optional
// false == 0 => true
// false == "" => true
//  0 == "" => true

// Nullish Coalescing Operator (??): null undefined
// ye tab kaam ajab database se value aa rhi hai to ho sakta kv value aaye kv null aaye kv undefined aaye.. to uske  anusar assign karta value
let val1;
// val1 = 5 ?? 10      // yaha pahle m hi value mil gyi to 5 print hoga
// val1 = null ?? 10    // esme 10 print hoga kyuki pahle m null aa rha
// val1 = undefined ?? 15    // 15
val1 = null ?? 10 ?? 20         // jo pahla alue hoga wahi assign hoga



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")