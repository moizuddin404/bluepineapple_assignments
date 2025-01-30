
// let count = 0
// let tid = setInterval(() => { console.log(++count) }, 1500);

// setTimeout(() => { clearInterval(tid); console.log('stop'); }, 15000);


//Double timeouts to make interval like behavior
// let timerID = setTimeout(function tick() {
//     console.log('tick');
//     timerID = setTimeout(tick, 2000);
// }, 7000);

// setTimeout(() => { clearTimeout(timerID) }, 30000);



function printNumbers(from, to) {
    let curr = from;
    let tid = setInterval(() => {
        console.log(curr);
        if (curr == to) { clearInterval(tid) }
        curr++;
    }, 1000);
}

setImmediate(printNumbers, 20, 40);

function printNums(from, to) {
    let curr = from;
    let tid = setTimeout(function run() {
        console.log(curr);
        tid = setTimeout(run, 1000);
        if (curr == to) { clearTimeout(tid) }
        curr++;
    }, 1000);
}

printNums(1, 10);


//setImmediate is required because setTimeout or setInterval
// cannot do immediate jobs after 4 nested calls. There comes
// delay of atleast 4ms after that for each call
