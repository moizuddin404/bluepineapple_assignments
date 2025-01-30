import express from 'express';

const userapp = express();
const port = 3000;

const users = [
    { id: 1, name: "Moiz", email: "moizuddin.shaikh@mitwpu.edu.in" },
    { id: 2, name: "Huzefa", email: "huzefa.shaikh@mitwpu.edu.in" },
    { id: 3, name: "Arman", email: "arman.shaikh@mitwpu.edu.in" },
    { id: 4, name: "Arif", email: "arif.shaikh@mitwpu.edu.in" },
    { id: 5, name: "Parth", email: "parth.bhosale@mitwpu.edu.in" },
];

userapp.get('/users', (req, res) => {
    res.json(users);
    console.log(req.url);
});

userapp.listen(port, (error) => {
    if (!error) {
        console.log(`Successfully connected on ${port}`);
    } else {
        console.error(`Error in Connecting...${error}`);
    }
});
