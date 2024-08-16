const score = 400
// console.log(score);

const balance = new Number(100)   // especially defined hai ki ye number hi hona chahiye
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));        // decimal k baad jitna v digit tak chahiye wo number daalo fixec m

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));     // decimal k baad wala v count karta

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    // absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)