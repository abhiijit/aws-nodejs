import express from 'express';
import dotenv from 'dotenv'
const port = 5000

const app = express();

app.get('/api/get', (req, res) => {
    res.send("Hello-world")
})

app.get('/api/get/userdetils', (req, res) => {
    res.json([
        {
            "name" : "abhi"
        },
        {
            "name" : "badari"
        }
    ])
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})