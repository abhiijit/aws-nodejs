import express from 'express';
import dotenv from 'dotenv'
const port = 5000
dotenv.config()

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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${port}`)
})