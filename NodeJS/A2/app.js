

const fs = require('node:fs');
const content = `\nthis is added log`;

//non-blocking
fs.readFile('C:/Users/Admin/OneDrive/Desktop/Bluepineapple/Programs/bluepineapple_assignments/NodeJS/A2/log.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

console.log("can this run before non-blocking file read?");

//blocking
data = fs.readFileSync('C:/Users/Admin/OneDrive/Desktop/Bluepineapple/Programs/bluepineapple_assignments/NodeJS/A2/log.txt');
console.log(data);

fs.writeFile('C:/Users/Admin/OneDrive/Desktop/Bluepineapple/Programs/bluepineapple_assignments/NodeJS/A2/log.txt', content, { flag: 'a+' }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("File is written");
    }
})

function writingInFile() {
    let sometext = "\nWriting Using setTimeout";
    fs.writeFile('C:/Users/Admin/OneDrive/Desktop/Bluepineapple/Programs/bluepineapple_assignments/NodeJS/A2/log.txt', sometext, { flag: 'a' }, err => {
        if (err) {
            console.error(err);
        };
    })
}

console.log("waiting...");
setTimeout(writingInFile, 10000);
