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
// "hitesh" => true