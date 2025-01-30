let file = '/NodeJS/A2/log.txt';

try {
    fetch(file)
        .then(x => x.text())
        .then(y => document.getElementById('demo').innerHTML = y);
} catch (error) {
    alert(error);
}