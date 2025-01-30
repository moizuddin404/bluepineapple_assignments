
const http = require('http');
const gtmsg = require('./helper.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to Node JS');
    const msg = gtmsg.getMessage();
    console.log(msg);
    res.end();
}).listen(3000);