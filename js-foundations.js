// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

//  let divis = (num1,num2,num3, num4) => {
//      if(num1, num2, num3, num4 % 3===0){
//          return num1,num2,num3,num4, "is divisble by three"
//      } else{
//          return "is not divisible by three"
//      }
// console.log(divis(15, 0, 385, -7))

let divis = (num1) => {
     if(num1 % 3===0){
         return num1 + " is divisble by three"
     } else{
         return num1 + " is not divisible by three"
     }
}
console.log(divis(15))
console.log(divis(-7))
console.log(divis(385))
console.log(divis(0))



// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe= {
  firstName: "Adam",
  lastName: "Cruse",
  Job: "Electrician",
  yearBorn: 1994,
}

let {firstName,lastName,job,yearBorn} = helloMe
var adam = `Hello ${helloMe.firstName} ${helloMe.lastName}, you work as an ${helloMe.Job}, and you were born in ${helloMe.yearBorn}.`
console.log(adam);



// -------------------------------------------------
// Consider the variable:

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// const words = ["streetlamp", "teeth","nephew","database"].join()
// console.log(words);

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
let newStr =(arr) =>{
var newArr=[]
for(let i=0;i<arr.length;i += 2){
    newArr.push(arr[i])
}
 return newArr.join(" ")
}
console.log(newStr(randomNouns))

// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

let checkNum= (arr) =>{
    return arr.map(value=> value.length)
}
console.log(checkNum(randomNouns))



// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]



// -------------------------------------------------
// Consider the variables:
// var testString1 = "learn"
// var testString2 = "academy"
// var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

let alphabetSoup = (str) =>{
const bigArr = str.split("").sort().join("")
    return bigArr
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

let alphabetSoups = (str,dum,gum) => {
let dumStr = str + dum + gum
const bigArr = dumStr.split("").sort().join("")
    return bigArr
}
console.log(alphabetSoups(testString1,testString2,testString3))




// -------------------------------------------------
// Consider the variables:
// var amounts = [9, 1, 8, 16, 5, 1, 42]
// var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

let numAnimals = (arr1,arr2)=>{
return `${arr1[0]} ${arr2[0]} ${arr1[1]} ${arr2[1]} ${arr1[2]} ${arr2[2]} ${arr1[3]} ${arr2[3]} ${arr1[4]} ${arr2[4]} ${arr1[5]} ${arr2[5]} ${arr1[6]} ${arr2[6]}`
}
console.log(numAnimals(amounts,animals))


// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
