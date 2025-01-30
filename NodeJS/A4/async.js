//lets make some asynchronous promises 🙆

const { resolve } = require("path");

async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched Data!")
        }, 1000);
    });

    let resp = await promise;
    console.log(resp);
}

fetchData();


//----------------------------------------------
async function myapi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("wait for 3s in myapi");
            resolve("Done");
        }, 3000);
    })
}

async function myotherapi() {
    await Promise.reject(new Error("Some Error in other api"));
}

async function myfun() {
    try {
        const ans = await myapi();
        const ans2 = await myotherapi();
    } catch (err) {
        console.log("Caught the error: " + err);
    }
}

myfun();