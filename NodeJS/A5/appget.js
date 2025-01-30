import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to express");
});

app.listen(port, (error) => {
    if (!error) {
        console.log(`Successfully connected and app running on ${port}`);
    } else {
        console.error(`There is an error: ${error}`);

    }
});
