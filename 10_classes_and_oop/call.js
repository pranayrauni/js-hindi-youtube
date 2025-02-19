function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)                   
    // bina dot call lgaye call karenge to call to hoga par execute hone pe execution context v khatam ho jayga esse to uske andar jitne v variables declare 
    // huye the wo v khatam... par uska reference hold kar k rakhna hai esliye dot call lagao... aur edhar se hi this keyword provide karna padega warna 
    // us function ka this gayab ho jayga 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);