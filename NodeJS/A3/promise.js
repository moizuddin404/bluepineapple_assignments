// const { error } = require("console");

// function fib(num) {

//     first = 0;
//     second = 1;
//     let next;
//     for (let i = 0; i < num; i++) {
//         next = first + second;
//         first = second;
//         second = next;
//     }

//     return next;
// }

// let promise = new Promise(function (resolve, reject) {
//     ans = fib(50);
//     if (ans) { resolve('ok'); }
//     else { reject('didnt do'); }
// });

// promise.then(
//     function (value) { console.log(value); },
//     function (error) { console.log(error); }
// );

let p = new Promise(function (resolve, reject) {
    console.log("Hii from promise");
    resolve(56);
})


console.log("Hii");

setTimeout(() => {
    console.log("Hello in 2 seconds");
}, 2000);

console.log("Bye");


