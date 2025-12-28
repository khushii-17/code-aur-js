const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// this refers to current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



// console.log(this);

// upar jo this h wo maybe blank output kre but jb hm browser
// me code krte h to waha ye global scope me
//  window ka context deta 
// same hota h jb wo function me use hoga
// tb  wo function ka context return karega
// like below
// function chai(){
//     console.log(this)
// }
// chai()



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// yha this use krne se undefined
// Error isliye aayega kyunki normal function ke 
// andar this kisi object ko point hi nahi kar raha.
//Tum this se scope variables access nahi kar sakte.
//this object ke liye hota hai, function ke andar ke variables ke liye nahi.
// }

// 
const chai =  () => {
    let username = "hitesh"
    console.log(this);  // this will give empty {}
}
// Arrow function this inherit karta hai surrounding (lexical) scope se

// Isliye this predictable nahi hota

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// niche jo syntax h use implicit return kehte h 
// isme return keyword nhi likhte and {} hta dete h
//react me use hota h in chijo ka
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // object k liye () mandate h


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// inshort arrow function is () => {}
