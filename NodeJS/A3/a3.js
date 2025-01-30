const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

class Calculator {
    constructor() {
        this.val = 0;
    }

    add(num) {
        this.val += num;
        return this;
    }

    subtract(num) {
        this.val -= num;
        return this;
    }
    muliply(num) {
        this.val *= num;
        return this;
    }
    divide(num) {
        this.val /= num;
        return this;
    }
    getResult() {
        return this.val;
    }
}


const calc = new Calculator();
let ans = calc.add(5).subtract(2).muliply(3).divide(2).getResult();
console.log(ans);


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data got successfully!"), 2000);
//     });
// }

// const a = fetchData();
// setTimeout(() => {
//     console.log(a);
// }, 2000);


function fetchData() {
    return "Data sent!";
}


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const recieveStatus = fetchData();
        if (recieveStatus != '') {
            resolve('Data fetched Successfully!');
        } else {
            reject("Fetching unsuccessful!");
        }
    }, 2000);
});

p.then(
    (value) => { console.log(value) }).catch(error => {
        console.log(error)
    });


// p.catch(error => {
//     console.log("Data wasn't fetched!");
// });




