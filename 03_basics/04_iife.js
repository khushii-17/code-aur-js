// Immediately Invoked Function Expressions (IIFE)

// IIFE isliye use karte hain taaki code turant execute ho aur variables global scope me leak na karein.

// Immediately run hota hai

// Private scope milta hai

// Global pollution se bachata hai


// syntax - ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // yha ; na la gane se error de sakta h 
// kyuki function ko pta nhi context rokna kaha h

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')