// Dates

let myDate = new Date()           // ye current date dega aur agar m esme koi date pass akrege to wo passed date dega
// console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   // date time
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);    // ye miliseconds m ayga 1970 se
// console.log(myCreatedDate.getTime()); // getTime se miliseconds m convert ho jayga
// console.log(Math.floor(Date.now()/1000));   //seonds m convert

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    // ye fromat ko customize kar sakte hai aise newDate ka... jo jo chahiye sab likho
    weekday: "long",
    
})