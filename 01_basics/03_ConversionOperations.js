let score = "33";
console.log(typeof(score));

let valueInScore = Number(score)
console.log(valueInScore);
console.log(typeof valueInScore);
score = "33abc";
valueInScore = Number(score)
console.log(valueInScore);
console.log(typeof valueInScore);

valueInScore = null
console.log(valueInScore);
console.log(typeof valueInScore);

valueInScore = Number(undefined)
console.log(valueInScore);

// 33" => 33
// 33abc" => NaN
// true => 1; false => 0
// 1 => true; 0 => false
// "" => false
// "hitesh" => 
// *************** Operations *******************
let value = 33;
let negValue = -value;
console.log(negValue);
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2) ;
// console.log(2 ^ 3) ;
// console.log(2/3)
// console.log(2%3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+ 2 + 2 ) ;
console.log( 1 + 2 +"2") ;
console.log(+true);
console.log(+"");
let num;
console.log(num);
//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
