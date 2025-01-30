export function errorHandling(err, req, res, next) {
    console.error("Some Error Occured!");
    res.status(404).send(`<h1>Apologies for!</h1>`);
    next();
}