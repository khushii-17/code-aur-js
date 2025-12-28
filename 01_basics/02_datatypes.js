"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodejs not browser
/*

// primitive datatypes:
number   => in range of 2 to the power 53
bigint
string
bool
null  => standalone value
undefined
symbol => unique

// object 
*/
let bignum = 12n
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof bignum);
// (stack) seven primitive datatypes - string,number,bigint,null,undefined,boolean,symbol
// (heap) reference or non primitive datatype - object
let arr = ["hello",123,true,5672];
let myobj = {
age : 55,
state : true

}
let func = function(){
    console.log("Hello world");
    
}
// https://262.ecma-international.org/5.1/#sec-11.4.3