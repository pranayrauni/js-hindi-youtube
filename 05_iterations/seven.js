const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// same kaam forEach se v kar sakte... forEach return nhi karta to store hni kar sakte so direct print karo
myNumers.forEach((number) => {
    // console.log(number + 10)
})

// niche chaining kiya gya hai
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);