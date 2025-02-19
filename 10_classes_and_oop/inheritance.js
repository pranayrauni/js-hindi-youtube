class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{             // user teacher ban rha hai
    constructor(username, email, password){
        super(username)                      // super keyword extended class m jayga apne sath this le k fir username set kar dega   
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
chai.logMe()         // teacher k pass logMe ka access  hai
const masalaChai = new User("masalaChai")

masalaChai.logMe()     // user k pass logme k a access hai
masalaChai.addCourse()   // no accesss

console.log(chai instanceof User);