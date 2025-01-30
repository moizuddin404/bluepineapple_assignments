import express from 'express';

const postapp = express();
const port = 3000;

postapp.post('/data', (req, res) => {
    res.send(`Data Recieved`);
});

postapp.listen(port, (error) => {
    if (!error) {
        console.log(`Successfully connected and app running on ${port}`);
    } else {
        console.error(`There is an error: ${error}`);

    }
})