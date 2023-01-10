import express from 'express'
const app = express();
const port = 1000;

app.get('/', (req,res) => {
    res.send("salve");
});
app.listen(port, (req,res) => {
    console.log(`listen and running on port ${port}`);
});