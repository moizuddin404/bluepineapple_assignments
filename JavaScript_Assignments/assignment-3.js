//functions 

function calculateArea(length, width) {
    return length * width;
}

let area1 = calculateArea(10, 5);
let area2 = calculateArea(5, 6);
let area3 = calculateArea(12, 39);

console.log(`Area 1 : ${area1}`);
console.log(`Area 2 : ${area2}`);
console.log(`Area 3 : ${area3}`);

//some of my functions that are regularly used

function swap(obj1) {
    temp = obj1.num1;
    obj1.num1 = obj1.num2;
    obj1.num2 = temp;
}
let obj1 = {
    num1: 10,
    num2: 20,
}
swap(obj1);
console.log(obj1.num1, obj1.num2);


function swappingNumbers(n1, n2) {
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    console.log(n1, n2);
}

swappingNumbers(5, 6);




