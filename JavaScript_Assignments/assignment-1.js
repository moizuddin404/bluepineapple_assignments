//Declare and Assign variables
let firstname = "Moizuddin";
let age = 23;
let isStudent = true;
let hobbies = ["singing", "reading", "trekking", "word-guess"];

let personalDetails = {
    fullname: "Moizuddin Shaikh",
    age: 23,
    hobbies: {
        main1: "singing",
        main2: "reading",
        subordinate: "trekking",
    }
}

console.log("First Name:", firstname);
console.log("Age: " + age);
console.log(`My hobbies are ${hobbies[0]}, ${hobbies[1]} and sometimes I love to go ${hobbies[2]}.\nBoredom can be overcome by ${hobbies[3]} game!`);
console.log(personalDetails.fullname, "is ", personalDetails.age, " years. He loves " + `${personalDetails.hobbies.main1} and ${personalDetails.hobbies.main2}`);