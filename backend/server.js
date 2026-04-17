const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`Server started at port: ${port}`)
})

app.get('/', (req, res) => {
    res.send(`
        <title>MERN Social Media</title>
        <h1>MERN Social Media Backend</h1>
    `)
})