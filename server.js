import express from 'express';
import dotenv from 'dotenv'
const port = 5000

const app = express();

app.get('', (req, res) => {
    res.send("Hello-world")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})