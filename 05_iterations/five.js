const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){         // ye callback function leta hai aur callback function ka naam nhi hota.. val har ek value ka naam hai
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)     // function ko ya to yahi likh lo ya kahi aur likh k call kar lo.. yaha function ka reference dena hai

// coding.forEach( (item, index, arr)=> {      // har baar eske pass item index aur pura array ka access hota
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// forEach loop k jagah aise v kar sakte par forEach jyada common hai
for (let index = 0; index < myCoding.length; index++) {
    const element = myCoding[index];
    console.log(element.languageFileName)
    
}