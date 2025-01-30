import express from 'express';
import { logMethodAndUrl } from './custom_middleware/methodUrlLog.js';
import { urlNotFound } from './custom_middleware/404middleware.js';
import { errorHandling } from './custom_middleware/errormiddleware.js';

const app = express();

app.use(logMethodAndUrl);



app.get('/home', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/products', (req, res) => {
    res.send('<h1>Products page</h1>');
});


app.get('/error', (req, res, next) => {
    next(new Error('This is a test error!'));
});


app.use(urlNotFound);
app.use(errorHandling);


app.listen(3000, (error) => {
    if (!error) {
        console.log("Connected to Port 3000");
    } else {
        console.log("Could not connect!");
    }
});