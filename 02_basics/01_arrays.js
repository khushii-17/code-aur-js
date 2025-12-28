// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   //push from begin
// myArr.shift()      //pop from begin

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));  // -1 if does not exist

const newArr = myArr.join() // converts to string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // includes from index parameter1 to parameter2(excluding)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // deletes parameter2 elements from parameter1 index of the original array
console.log("C ", myArr);
console.log(myn2);
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman",["hii"]]

// marvel_heros.push(dc_heros)   // using pushes the whole array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // concatenates the elements of both arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // spreading - separates each element and combines them

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // return the flattened array to the given depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if the parameter is array or not
console.log(Array.from("Hitesh"))   // converts to array if the parameter is iterable
console.log(Array.from({name: "hitesh"})) // interesting - object is not iterable its keys,values, entries are

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // construct array of given parameters

