class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // jab kisi chij ka access dena nhi chahte aise case m getter setter kaam aate
    // gettter setter har class m default hote par behaviour default hota
    // getter k sath setter hota hi hai
    // class k bahar koi value get karni hai to getter
    // class k andar koi value set karni hai to setter

    get email(){
        return this._email.toUpperCase()        // underscore use hua taki yaha wala value get ho jaye
    }
    set email(value){
        this._email = value                 // value  2 jagah(yaha pe aur constructor m) set ho rhi hai jo problem hai esliye _ underscore use karo
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);