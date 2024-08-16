const name = "hitesh"
const repoCount = 50
console.log(name[0])        //string ko v array ki tarah access kar sakte

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //string interppolation

const gameName = new String('hitesh-hc-com')
// ye object hai aur key value pair m.. esme length property milti aur v bahut methods milte
// console.log(typeof gameName)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));     // [ 'hitesh', 'hc', 'com' ]
// split k help se string ko tod k array bna sakte tute huye string ka