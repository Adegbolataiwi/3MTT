/* Objective: This is a FizzBuzz Project */

let fizzBuzzObject = {
  Fizz: [],
  Buzz: [],
  FizzBuzz: [],
  NonDivisible: [],
};
let fizzBuzzArray = [];
let numberArray = [];

for (let i = 1; i <= 20; i++) {
  numberArray.push(i);
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzzArray.push("FizzBuzz");
    fizzBuzzObject["FizzBuzz"].push(i);
    // console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzzArray.push("Fizz");
    fizzBuzzObject["Fizz"].push(i);
    // console.log("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzzArray.push("Buzz");
    fizzBuzzObject["Buzz"].push(i);
    // console.log("Buzz");
  } else {
    fizzBuzzArray.push(i);
    fizzBuzzObject["NonDivisible"].push(i);
  }
}
console.log(numberArray);
console.log(fizzBuzzArray);
console.log(fizzBuzzObject);
