const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)    // array k andar array aa jayga

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   // array k andar array acces karna

// const allHeros = marvel_heros.concat(dc_heros)    //concat ek new array return karega merge kar k
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)    // returns a new array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))      // array m convert kar dega ek ek char ko
console.log(Array.from({name: "hitesh"})) // interesting.. empty array dega kyuki esko ta nhi kis chij ka array bnana hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // returns new array from set of elements