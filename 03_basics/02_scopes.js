//var c = 300
// yhi h ki var ka global scope hota h isliye generally hm avoid krte h var use krna
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// isko hm is analogy se smjh sakte h jaise agar koi chhota bachha h to wo bado 
// ice-cream mang sakta h but bade bachho se nhi mang sakte
// so parent function can't use child function's variables but the child function can do use

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
// same case goes here for the scopes of variables
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// this will give error becoz of function hoisting
// 2nd case me calling the function before declaration in a variable will give error
// in 1st case js me function ko pehle hi hoist kr deta h memory phase me
// isliye no error
addTwo(5)
const addTwo = function(num){
    return num + 2
}
// it will be clear in execution and memory phase in JS