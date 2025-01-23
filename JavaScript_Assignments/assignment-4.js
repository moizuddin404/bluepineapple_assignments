// Array Manipulation
function largest_element(arr) {
    max = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


function averageOfArray(arr) {
    sum = 0;
    arr.forEach(num => {
        sum += num;
    });

    return sum / arr.length;
}


numArray = [1, 95, 52, 20, 3, 55, 41, 67, 45, 0];
largest_num = largest_element(numArray);
console.log("Largest element in the array is: " + largest_num);

smallest_num = () => {
    min = Infinity;
    numArray.forEach(num => {
        if (num < min) min = num;
    });
    return min;
}
console.log("Smallest element in array is: " + smallest_num());



average = averageOfArray(numArray);
console.log(`The average value in he array is : ${average}`);
